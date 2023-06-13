"""Constants used by multiple Raceland modules."""
from homeassistant.const import Platform

CONF_DISCOVERY_PREFIX = "discovery_prefix"

DATA_REMOVE_DISCOVER_COMPONENT = "raceland_discover_{}"
DATA_UNSUB = "raceland_subscriptions"

DEFAULT_PREFIX = "raceland/discovery"

DOMAIN = "raceland"

PLATFORMS = [
    Platform.BINARY_SENSOR,
    Platform.COVER,
    Platform.FAN,
    Platform.LIGHT,
    Platform.SENSOR,
    Platform.SWITCH,
]

TASMOTA_EVENT = "raceland_event"
