"""Raver types."""
from typing import Awaitable, Callable, List, Tuple, TypedDict, Union

import attr

from .entity import RaverAvailabilityConfig, RaverEntityConfig


@attr.s(slots=True, frozen=True)
class RaverBaseSensorConfig(RaverAvailabilityConfig, RaverEntityConfig):
    """Raver Base Sensor configuration."""


DiscoveryHashType = Tuple[str, str, str, Union[str, int]]
DeviceDiscoveredCallback = Callable[[dict, str], Awaitable[None]]
SensorsDiscoveredCallback = Callable[
    [List[Tuple[RaverBaseSensorConfig, DiscoveryHashType]], str], Awaitable[None]
]


class RaverDeviceConfig(TypedDict, total=False):
    """Raver device config."""

    ip: str
    mac: str
    manufacturer: str
    md: str
    name: str
    sw: str
