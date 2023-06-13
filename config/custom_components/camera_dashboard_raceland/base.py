"""Base HACS class."""
from __future__ import annotations

import asyncio
from dataclasses import asdict, dataclass, field
import logging
import pathlib
from os import system
from typing import TYPE_CHECKING, Any, Dict


from awesomeversion import AwesomeVersion
from aiohttp.client import ClientSession
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.loader import Integration
from homeassistant.util import dt

from .const import SetupStage, ConfigurationType, CameraDashboardDisabledReason
from .exceptions import CameraExecutionStillInProgress

from .utils.queue_manager import QueueManager
from .utils.logger import get_hacs_logger

if TYPE_CHECKING: #Avoid circular imports
    from .tasks.manager import CameraDashboardTaskManager

@dataclass
class HacsConfiguration:
    """HacsConfiguration class."""
    config: dict[str, Any] = field(default_factory=dict)
    config_entry: ConfigEntry | None = None
    config_type: ConfigurationType | None = None
    country: str = "ALL"
    debug: bool = False
    dev: bool = False
    experimental: bool = False
    frontend_compact: bool = False
    frontend_mode: str = "Grid"
    frontend_repo_url: str = "http://localhost:5000"
    frontend_repo: str = ""
    dev_mode: str = ""
    onboarding_done: bool = False
    sidepanel_icon: str = "mdi:camera"
    sidepanel_title: str = "Camera"

    def to_json(self) -> str:
        """Return a json string."""
        return asdict(self)

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise CameraExecutionStillInProgress("Configuration is not valid.")

        for key in data:
            self.__setattr__(key, data[key])

@dataclass
class HacsStatus:
    """HacsStatus."""

    startup: bool = True
    new: bool = False
    reloading_data: bool = False
    upgrading_all: bool = False


@dataclass
class CamDashboardCore:
    """HACS Core info."""

    config_path: pathlib.Path | None = None
    ha_version: AwesomeVersion | None = None

@dataclass
class CameraDashboardSystem:
    """Camera Dashboard System info."""

    disabled_reason: CameraDashboardDisabledReason | None = None
    running: bool = False
    stage = SetupStage.SETUP
    action: bool = False

    @property
    def disabled(self) -> bool:
        """Return if HACS is disabled."""
        return self.disabled_reason is not None



class CameraBase:
    """Base HACS class."""

    configuration = HacsConfiguration()
    core = CamDashboardCore()
    frontend_version: str | None = None
    hass: HomeAssistant | None = None
    integration: Integration | None = None
    log: logging.Logger = get_hacs_logger()
    queue: QueueManager | None = None
    recuring_tasks = []
    session: ClientSession | None = None
    stage: SetupStage | None = None
    status: HacsStatus = HacsStatus()
    system = CameraDashboardSystem()
    tasks: CameraDashboardTaskManager | None = None
    version: str | None = None
    adders = {}
    devices = {}
    config = {}
    camera_database = {}

    @property
    def integration_dir(self) -> pathlib.Path:
        """Return the HACS integration dir."""
        return self.integration.file_path

    async def async_set_stage(self, stage: SetupStage | None) -> None:
        """Set HACS stage."""
        if stage and self.stage == stage:
            return

        self.stage = stage
        if stage is not None:
            self.log.info("Stage changed: %s", self.stage)
            # self.hass.bus.async_fire("hacs/stage", {"stage": self.stage})
            await self.tasks.async_execute_runtume_tasks()


    async def startup_tasks(self, _event=None) -> None:
        """Tasks that are started after setup."""
        await self.async_set_stage(SetupStage.STARTUP)
        self.status.startup = False

        self.hass.bus.async_fire("hacs/status", {})

        await self.async_set_stage(SetupStage.RUNNING)

        self.hass.bus.async_fire("hacs/reload", {"force": True})

        if queue_task := self.tasks.get("prosess_queue"):
            await queue_task.execute_task()

        self.hass.bus.async_fire("hacs/status", {})


    async def async_recreate_entities(self) -> None:
        """Recreate entities."""
        if (
            self.configuration == ConfigurationType.YAML
            or not self.core.ha_version >= "2022.4.0.dev0"
            or not self.configuration.experimental
        ):
            return

        platforms = ["update"]

        await self.hass.config_entries.async_unload_platforms(
            entry=self.configuration.config_entry,
            platforms=platforms,
        )

        self.hass.config_entries.async_setup_platforms(self.configuration.config_entry, platforms)



