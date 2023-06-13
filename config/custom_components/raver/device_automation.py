"""Provides device automations for Raver."""

from .haraver.const import AUTOMATION_TYPE_TRIGGER
from .haraver.models import DiscoveryHashType
from .haraver.trigger import RaverTrigger

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant
from homeassistant.helpers.device_registry import EVENT_DEVICE_REGISTRY_UPDATED
from homeassistant.helpers.dispatcher import async_dispatcher_connect

from . import device_trigger
from .const import DATA_REMOVE_DISCOVER_COMPONENT, DATA_UNSUB
from .discovery import RAVER_DISCOVERY_ENTITY_NEW


async def async_remove_automations(hass: HomeAssistant, device_id: str) -> None:
    """Remove automations for a Raver device."""
    await device_trigger.async_remove_triggers(hass, device_id)


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Set up Raver device automation dynamically through discovery."""

    async def async_device_removed(event: Event) -> None:
        """Handle the removal of a device."""
        if event.data["action"] != "remove":
            return
        await async_remove_automations(hass, event.data["device_id"])

    async def async_discover(
        raver_automation: RaverTrigger, discovery_hash: DiscoveryHashType
    ) -> None:
        """Discover and add a Raver device automation."""
        if raver_automation.automation_type == AUTOMATION_TYPE_TRIGGER:
            await device_trigger.async_setup_trigger(
                hass, raver_automation, config_entry, discovery_hash
            )

    hass.data[
        DATA_REMOVE_DISCOVER_COMPONENT.format("device_automation")
    ] = async_dispatcher_connect(
        hass,
        RAVER_DISCOVERY_ENTITY_NEW.format("device_automation"),
        async_discover,
    )
    hass.data[DATA_UNSUB].append(
        hass.bus.async_listen(EVENT_DEVICE_REGISTRY_UPDATED, async_device_removed)
    )
