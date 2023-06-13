"""Support for Raver binary sensors."""
from __future__ import annotations

from collections.abc import Callable
from datetime import datetime
from typing import Any

from .haraver import switch as raver_switch
from .haraver.entity import RaverEntity as HARaverEntity
from .haraver.models import DiscoveryHashType

from homeassistant.components import binary_sensor
from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback
import homeassistant.helpers.event as evt

from .const import DATA_REMOVE_DISCOVER_COMPONENT
from .discovery import RAVER_DISCOVERY_ENTITY_NEW
from .mixins import RaverAvailability, RaverDiscoveryUpdate


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Raver binary sensor dynamically through discovery."""

    @callback
    def async_discover(
        raver_entity: HARaverEntity, discovery_hash: DiscoveryHashType
    ) -> None:
        """Discover and add a Raver binary sensor."""
        # print("LOLOLOL", raver_entity.__dict__)
        async_add_entities(
            [
                RaverBinarySensor(
                    raver_entity=raver_entity, discovery_hash=discovery_hash
                )
            ]
        )


    hass.data[
        DATA_REMOVE_DISCOVER_COMPONENT.format(binary_sensor.DOMAIN)
    ] = async_dispatcher_connect(
        hass,
        RAVER_DISCOVERY_ENTITY_NEW.format(binary_sensor.DOMAIN),
        async_discover,
    )


class RaverBinarySensor(
    RaverAvailability,
    RaverDiscoveryUpdate,
    BinarySensorEntity,
):
    """Representation a Raver binary sensor."""

    _raver_entity: raver_switch.RaverSwitch
    def __init__(self, **kwds: Any) -> None:
        """Initialize the Raver binary sensor."""
        self._delay_listener: Callable | None = None
        self._on_off_state: bool | None = None

        super().__init__(
            **kwds,
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to MQTT events."""
        self._raver_entity.set_on_state_callback(self.on_off_state_updated)
        # print("RAVERENTITDADED", self._raver_entity._cfg.setoptions["114"])
        await super().async_added_to_hass()

    @callback
    def off_delay_listener(self, now: datetime) -> None:
        """Switch device off after a delay."""
        self._delay_listener = None
        self._on_off_state = False
        self.async_write_ha_state()

    @callback
    def on_off_state_updated(self, state: bool, **kwargs: Any) -> None:
        """Handle state updates."""
        self._on_off_state = state

        if self._delay_listener is not None:
            self._delay_listener()
            self._delay_listener = None

        off_delay = self._raver_entity.off_delay
        if self._on_off_state and off_delay is not None:
            self._delay_listener = evt.async_call_later(
                self.hass, off_delay, self.off_delay_listener
            )

        self.async_write_ha_state()

    @property
    def force_update(self) -> bool:
        """Force update."""
        return True

    @property
    def is_on(self) -> bool | None:
        """Return true if the binary sensor is on."""
        return self._on_off_state

    @property
    def device_class(self):
        """Return Device class."""
        # print("im here", self._raver_entity._cfg.setoptions)
        if self._raver_entity._cfg.setoptions["999"] == 1:
            return "garage_door"
        elif self._raver_entity._cfg.setoptions["999"] == 2:
            return "container"
        elif self._raver_entity._cfg.setoptions["999"] == 3:
            return "alarm"
        elif self._raver_entity._cfg.setoptions["999"] == 7:
            return "bistable"
        else:
            return None