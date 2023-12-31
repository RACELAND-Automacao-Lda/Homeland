"""Raver binary sensor."""
from __future__ import annotations

import logging
from abc import ABC, abstractmethod
from typing import Any, Callable

import attr

from .const import AUTOMATION_TYPE_TRIGGER
from .mqtt import ReceiveMessage, RaverMQTTClient

_LOGGER = logging.getLogger(__name__)


@attr.s(slots=True, frozen=True)
class RaverTriggerConfig(ABC):
    """Raver trigger configuation."""

    event: str = attr.ib()
    idx: int = attr.ib()
    mac: str = attr.ib()
    subtype: str = attr.ib()
    source: str = attr.ib()
    trigger_topic: str = attr.ib()
    type: str = attr.ib()

    @property
    @abstractmethod
    def is_active(self) -> int:
        """Return if the trigger is active."""

    @property
    @abstractmethod
    def trigger_id(self) -> str:
        """Return trigger id."""


class RaverTrigger:
    """Representation of a Raver trigger."""

    def __init__(
        self, config: RaverTriggerConfig, mqtt_client: RaverMQTTClient, **_kwds: Any
    ):
        """Initialize."""
        self._sub_state: dict | None = None
        self.cfg = config
        self._mqtt_client = mqtt_client
        self._on_trigger_callback: Callable | None = None

    def config_same(self, new_config: RaverTriggerConfig) -> bool:
        """Return if updated config is same as current config."""
        return self.cfg == new_config

    def config_update(self, new_config: RaverTriggerConfig) -> None:
        """Update config."""
        self.cfg = new_config

    def set_on_trigger_callback(self, on_trigger_callback: Callable) -> None:
        """Set callback for triggere."""
        self._on_trigger_callback = on_trigger_callback

    def _trig_message_received(self, msg: ReceiveMessage) -> None:
        """Handle new MQTT messages."""

    async def subscribe_topics(self) -> None:
        """Subscribe to topics."""

        topics = {
            "trigger_topic": {
                "event_loop_safe": True,
                "topic": self.cfg.trigger_topic,
                "msg_callback": lambda msg: self._trig_message_received(  # pylint: disable=unnecessary-lambda
                    msg
                ),
            }
        }

        self._sub_state = await self._mqtt_client.subscribe(
            self._sub_state,
            topics,
        )

    async def unsubscribe_topics(self) -> None:
        """Unsubscribe to all MQTT topics."""
        self._sub_state = await self._mqtt_client.unsubscribe(self._sub_state)

    @property
    def automation_type(self) -> str:
        """Return the automation type."""
        return AUTOMATION_TYPE_TRIGGER
