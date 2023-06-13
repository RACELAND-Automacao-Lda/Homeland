"""Constants used by multiple raver modules."""
from homeassistant.const import Platform

CONF_DISCOVERY_PREFIX = "discovery_prefix"

DATA_REMOVE_DISCOVER_COMPONENT = "raver_discover_{}"
DATA_UNSUB = "raver_subscriptions"

DEFAULT_PREFIX = "raver/discovery"

DOMAIN = "raver"

PLATFORMS = [
    Platform.BINARY_SENSOR,
    Platform.COVER,
    Platform.FAN,
    Platform.LIGHT,
    Platform.SENSOR,
    Platform.SWITCH,
]

RAVER_EVENT = "raver_event"
