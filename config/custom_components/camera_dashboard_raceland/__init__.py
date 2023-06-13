"""
Raceland dashboard gives you a powerfull integration that allows the user to add, edit and remove cameras.
"""
from __future__ import annotations
from telnetlib import DO
from typing import Any

import time

from awesomeversion import AwesomeVersion
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED, __version__ as HAVERSION
from homeassistant.core import CoreState, HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.event import async_call_later
from homeassistant.loader import async_get_integration

from homeassistant.helpers import entity_registry

import asyncio
import voluptuous as vol

from .base import CameraBase
from .const import (
    DOMAIN,
    ConfigurationType,
    CameraDashboardDisabledReason,
    SetupStage,
    STORAGE_FILE,
)
from .helpers import load_from_storage, load_camera_database
from .tasks.manager import CameraDashboardTaskManager
from .utils.configuration_schema import camera_dashboard_config
from .utils.queue_manager import QueueManager

CONFIG_SCHEMA = vol.Schema({DOMAIN: camera_dashboard_config()}, extra=vol.ALLOW_EXTRA)

import logging

_LOGGER = logging.getLogger(__name__)


async def async_initialize_integration(
    hass: HomeAssistant,
    *,
    config_entry: ConfigEntry | None = None,
) -> bool:
    """Initialize the integration"""
    if hass.data.get(DOMAIN) == None:
        hass.data[DOMAIN] = cameraBase = CameraBase()
    else:
        cameraBase = hass.data[DOMAIN]

    if config_entry is not None:
        if config_entry.source == SOURCE_IMPORT:
            hass.async_create_task(
                hass.config_entries.async_remove(config_entry.entry_id)
            )
            return False

        cameraBase.configuration.update_from_dict(
            {
                "config_entry": config_entry,
                "config_type": ConfigurationType.CONFIG_ENTRY,
                **config_entry.data,
                **config_entry.options,
            }
        )

    # In case there are entities not in the .storage files but still on entity registry (can happen if HA is restarted right after a camera is removed)
    er = entity_registry.async_get(hass)
    registered_cameras = [
        (entity_id, entity.unique_id)
        for (entity_id, entity) in er.entities.items()
        if entity_id.startswith("camera.") and entity.unique_id.startswith("camera-")
    ]
    storage_camera = [
        camera["unique_id"] for camera in await load_from_storage(hass, STORAGE_FILE)
    ]

    [
        er.async_remove(camera[0])
        for camera in registered_cameras
        if camera[1] not in storage_camera
    ]

    integration = await async_get_integration(hass, DOMAIN)

    await cameraBase.async_set_stage(None)

    cameraBase.integration = integration
    cameraBase.version = integration.version
    cameraBase.configuration.dev = integration.version == "0.0.0"
    cameraBase.hass = hass
    cameraBase.queue = QueueManager(hass=hass)
    cameraBase.system.running = True
    cameraBase.tasks = CameraDashboardTaskManager(hacs=cameraBase, hass=hass)
    cameraBase.session = async_get_clientsession(hass)

    cameraBase.log.debug("Configuration type: %s", cameraBase.configuration.config_type)
    cameraBase.core.config_path = cameraBase.hass.config.path()

    if cameraBase.core.ha_version is None:
        cameraBase.core.ha_version = AwesomeVersion(HAVERSION)

    await cameraBase.tasks.async_load()

    async def async_startup():
        """HACS startup tasks."""

        await cameraBase.async_set_stage(SetupStage.SETUP)
        if cameraBase.system.disabled:
            return False

        # Setup startup tasks
        if cameraBase.hass.state == CoreState.running:
            async_call_later(cameraBase.hass, 5, cameraBase.startup_tasks)
        else:
            cameraBase.hass.bus.async_listen_once(
                EVENT_HOMEASSISTANT_STARTED, cameraBase.startup_tasks
            )

        await cameraBase.async_set_stage(SetupStage.WAITING)
        cameraBase.log.info(
            "Setup complete, waiting for Home Assistant before startup tasks starts"
        )

        return not cameraBase.system.disabled

    await async_startup()

    # Mischief managed!
    return True


async def async_setup_database(hass, config):
    """Setup the Camera Database for the integration"""
    hass.data[DOMAIN] = cameraBase = CameraBase()
    cameraBase.camera_database = config[DOMAIN]["data"]
    return True


async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Set up this integration using yaml. Currently being used to read the Database of Camera Models default"""
    # return await async_initialize_integration(hass=hass, config=config)
    return await async_setup_database(hass, config)


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""
    config_entry.async_on_unload(config_entry.add_update_listener(async_reload_entry))
    return await async_initialize_integration(hass=hass, config_entry=config_entry)


async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Handle removal of an entry."""
    hacs: CameraBase = hass.data[DOMAIN]

    # Clear out pending queue
    hacs.queue.clear()

    for task in hacs.recuring_tasks:
        # Cancel all pending tasks
        task()

    try:
        if hass.data.get("frontend_panels", {}).get("hacs"):
            hacs.log.info("Removing sidepanel")
            hass.components.frontend.async_remove_panel("hacs")
    except AttributeError:
        pass

    platforms = ["camera"]
    if hacs.core.ha_version >= "2022.4.0.dev0" and hacs.configuration.experimental:
        platforms.append("update")

    unload_ok = await hass.config_entries.async_unload_platforms(
        config_entry, platforms
    )

    await hacs.async_set_stage(None)
    hacs.disable_hacs(CameraDashboardDisabledReason.REMOVED)

    hass.data.pop(DOMAIN, None)

    return unload_ok


async def async_reload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Reload the Camera Dashboard config entry."""
    await async_unload_entry(hass, config_entry)
    await async_setup_entry(hass, config_entry)
