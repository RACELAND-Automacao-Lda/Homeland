"""Support for Raver covers."""
from __future__ import annotations

from typing import Any

from .haraver import const as raver_const, shutter as raver_shutter
from .haraver.entity import RaverEntity as HARaverEntity
from .haraver.models import DiscoveryHashType

from homeassistant.components import cover
from homeassistant.components.cover import CoverEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DATA_REMOVE_DISCOVER_COMPONENT
from .discovery import RAVER_DISCOVERY_ENTITY_NEW
from .mixins import RaverAvailability, RaverDiscoveryUpdate


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Raver cover dynamically through discovery."""

    @callback
    def async_discover(
        raver_entity: HARaverEntity, discovery_hash: DiscoveryHashType
    ) -> None:
        """Discover and add a Raver cover."""
        async_add_entities(
            [RaverCover(raver_entity=raver_entity, discovery_hash=discovery_hash)]
        )

    hass.data[
        DATA_REMOVE_DISCOVER_COMPONENT.format(cover.DOMAIN)
    ] = async_dispatcher_connect(
        hass,
        RAVER_DISCOVERY_ENTITY_NEW.format(cover.DOMAIN),
        async_discover,
    )


class RaverCover(
    RaverAvailability,
    RaverDiscoveryUpdate,
    CoverEntity,
):
    """Representation of a Raver cover."""

    _raver_entity: raver_shutter.RaverShutter

    def __init__(self, **kwds: Any) -> None:
        """Initialize the Raver cover."""
        self._direction: int | None = None
        self._position: int | None = None

        super().__init__(
            **kwds,
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to MQTT events."""
        self._raver_entity.set_on_state_callback(self.cover_state_updated)
        await super().async_added_to_hass()

    @callback
    def cover_state_updated(self, state: bool, **kwargs: Any) -> None:
        """Handle state updates."""
        self._direction = kwargs["direction"]
        self._position = kwargs["position"]
        self.async_write_ha_state()

    @property
    def current_cover_position(self) -> int | None:
        """Return current position of cover.

        None is unknown, 0 is closed, 100 is fully open.
        """
        return self._position

    @property
    def supported_features(self) -> int:
        """Flag supported features."""
        return (
            cover.SUPPORT_OPEN
            | cover.SUPPORT_CLOSE
            | cover.SUPPORT_STOP
            | cover.SUPPORT_SET_POSITION
        )

    @property
    def is_opening(self) -> bool:
        """Return if the cover is opening or not."""
        return self._direction == raver_const.SHUTTER_DIRECTION_UP

    @property
    def is_closing(self) -> bool:
        """Return if the cover is closing or not."""
        return self._direction == raver_const.SHUTTER_DIRECTION_DOWN

    @property
    def is_closed(self) -> bool | None:
        """Return if the cover is closed or not."""
        if self._position is None:
            return None
        return self._position == 0

    async def async_open_cover(self, **kwargs: Any) -> None:
        """Open the cover."""
        await self._raver_entity.open()

    async def async_close_cover(self, **kwargs: Any) -> None:
        """Close cover."""
        await self._raver_entity.close()

    async def async_set_cover_position(self, **kwargs: Any) -> None:
        """Move the cover to a specific position."""
        position = kwargs[cover.ATTR_POSITION]
        await self._raver_entity.set_position(position)

    async def async_stop_cover(self, **kwargs: Any) -> None:
        """Stop the cover."""
        await self._raver_entity.stop()
    
    @property ##METI ESTE DEVICE CLASS AQUI MAS NAO ENCONTREI ONDE SE DEFINEM ONDE SAO OS DEVICE CLASSES
    def device_class(self):
        """Return Device class."""
        if self._raver_entity._cfg.setoptions["999"] == 5:
            return "curtain"
        elif self._raver_entity._cfg.setoptions["999"] == 6:
            return "shutter"
        else:
            return None
