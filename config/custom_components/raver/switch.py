"""Support for Raver switches."""
from typing import Any

from .haraver import relay as raver_relay
from .haraver.entity import RaverEntity as HARaverEntity
from .haraver.models import DiscoveryHashType

from homeassistant.components import switch
from homeassistant.components.switch import SwitchEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DATA_REMOVE_DISCOVER_COMPONENT
from .discovery import RAVER_DISCOVERY_ENTITY_NEW
from .mixins import RaverAvailability, RaverDiscoveryUpdate, RaverOnOffEntity


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Raver switch dynamically through discovery."""

    @callback
    def async_discover(
        raver_entity: HARaverEntity, discovery_hash: DiscoveryHashType
    ) -> None:
        """Discover and add a Raver switch."""
        async_add_entities(
            [
                RaverSwitch(
                    raver_entity=raver_entity, discovery_hash=discovery_hash
                )
            ]
        )

    hass.data[
        DATA_REMOVE_DISCOVER_COMPONENT.format(switch.DOMAIN)
    ] = async_dispatcher_connect(
        hass,
        RAVER_DISCOVERY_ENTITY_NEW.format(switch.DOMAIN),
        async_discover,
    )


class RaverSwitch(
    RaverAvailability,
    RaverDiscoveryUpdate,
    RaverOnOffEntity,
    SwitchEntity,
):
    """Representation of a Raver switch."""

    _raver_entity: raver_relay.RaverRelay

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn the device on."""
        await self._raver_entity.set_state(True)

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn the device off."""
        await self._raver_entity.set_state(False)
    @property ##METI ESTE DEVICE CLASS AQUI MAS NAO ENCONTREI ONDE SE DEFINEM ONDE SAO OS DEVICE CLASSES
    def device_class(self):
        """Return Device class."""
        if self._raver_entity._cfg.setoptions["999"] == 1:
            return "garage"
        elif self._raver_entity._cfg.setoptions["999"] == 3:
            return "alarm"
        else:
            return None
