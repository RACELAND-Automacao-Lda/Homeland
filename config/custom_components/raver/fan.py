"""Support for Raver fans."""
from __future__ import annotations

from typing import Any

from .haraver import const as raver_const, fan as raver_fan
from .haraver.entity import RaverEntity as HARaverEntity
from .haraver.models import DiscoveryHashType

from homeassistant.components import fan
from homeassistant.components.fan import FanEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util.percentage import (
    ordered_list_item_to_percentage,
    percentage_to_ordered_list_item,
)

from .const import DATA_REMOVE_DISCOVER_COMPONENT
from .discovery import RAVER_DISCOVERY_ENTITY_NEW
from .mixins import RaverAvailability, RaverDiscoveryUpdate

ORDERED_NAMED_FAN_SPEEDS = [
    raver_const.FAN_SPEED_LOW,
    raver_const.FAN_SPEED_MEDIUM,
    raver_const.FAN_SPEED_HIGH,
]  # off is not included


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Raver fan dynamically through discovery."""

    @callback
    def async_discover(
        raver_entity: HARaverEntity, discovery_hash: DiscoveryHashType
    ) -> None:
        """Discover and add a Raver fan."""
        async_add_entities(
            [RaverFan(raver_entity=raver_entity, discovery_hash=discovery_hash)]
        )

    hass.data[
        DATA_REMOVE_DISCOVER_COMPONENT.format(fan.DOMAIN)
    ] = async_dispatcher_connect(
        hass,
        RAVER_DISCOVERY_ENTITY_NEW.format(fan.DOMAIN),
        async_discover,
    )


class RaverFan(
    RaverAvailability,
    RaverDiscoveryUpdate,
    FanEntity,
):
    """Representation of a Raver fan."""

    _raver_entity: raver_fan.RaverFan

    def __init__(self, **kwds: Any) -> None:
        """Initialize the Raver fan."""
        self._state: int | None = None

        super().__init__(
            **kwds,
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to MQTT events."""
        self._raver_entity.set_on_state_callback(self.fan_state_updated)
        await super().async_added_to_hass()

    @callback
    def fan_state_updated(self, state: int, **kwargs: Any) -> None:
        """Handle state updates."""
        self._state = state
        self.async_write_ha_state()

    @property
    def speed_count(self) -> int:
        """Return the number of speeds the fan supports."""
        return len(ORDERED_NAMED_FAN_SPEEDS)

    @property
    def percentage(self) -> int | None:
        """Return the current speed percentage."""
        if self._state is None:
            return None
        if self._state == 0:
            return 0
        return ordered_list_item_to_percentage(ORDERED_NAMED_FAN_SPEEDS, self._state)

    @property
    def supported_features(self) -> int:
        """Flag supported features."""
        return fan.SUPPORT_SET_SPEED

    async def async_set_percentage(self, percentage: int) -> None:
        """Set the speed of the fan."""
        if percentage == 0:
            await self.async_turn_off()
        else:
            raver_speed = percentage_to_ordered_list_item(
                ORDERED_NAMED_FAN_SPEEDS, percentage
            )
            await self._raver_entity.set_speed(raver_speed)

    async def async_turn_on(
        self,
        speed: str | None = None,
        percentage: int | None = None,
        preset_mode: str | None = None,
        **kwargs: Any,
    ) -> None:
        """Turn the fan on."""
        # Raver does not support turning a fan on with implicit speed
        await self.async_set_percentage(
            percentage
            or ordered_list_item_to_percentage(
                ORDERED_NAMED_FAN_SPEEDS, raver_const.FAN_SPEED_MEDIUM
            )
        )

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn the fan off."""
        await self._raver_entity.set_speed(raver_const.FAN_SPEED_OFF)
