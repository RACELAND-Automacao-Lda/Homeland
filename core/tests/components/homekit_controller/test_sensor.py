"""Basic checks for HomeKit sensor."""
from aiohomekit.model.characteristics import CharacteristicsTypes
from aiohomekit.model.services import ServicesTypes
from aiohomekit.protocol.statuscodes import HapStatusCode

from homeassistant.components.sensor import SensorDeviceClass

from tests.components.homekit_controller.common import Helper, setup_test_component


def create_temperature_sensor_service(accessory):
    """Define temperature characteristics."""
    service = accessory.add_service(ServicesTypes.TEMPERATURE_SENSOR)

    cur_state = service.add_char(CharacteristicsTypes.TEMPERATURE_CURRENT)
    cur_state.value = 0


def create_humidity_sensor_service(accessory):
    """Define humidity characteristics."""
    service = accessory.add_service(ServicesTypes.HUMIDITY_SENSOR)

    cur_state = service.add_char(CharacteristicsTypes.RELATIVE_HUMIDITY_CURRENT)
    cur_state.value = 0


def create_light_level_sensor_service(accessory):
    """Define light level characteristics."""
    service = accessory.add_service(ServicesTypes.LIGHT_SENSOR)

    cur_state = service.add_char(CharacteristicsTypes.LIGHT_LEVEL_CURRENT)
    cur_state.value = 0


def create_carbon_dioxide_level_sensor_service(accessory):
    """Define carbon dioxide level characteristics."""
    service = accessory.add_service(ServicesTypes.CARBON_DIOXIDE_SENSOR)

    cur_state = service.add_char(CharacteristicsTypes.CARBON_DIOXIDE_LEVEL)
    cur_state.value = 0


def create_battery_level_sensor(accessory):
    """Define battery level characteristics."""
    service = accessory.add_service(ServicesTypes.BATTERY_SERVICE)

    cur_state = service.add_char(CharacteristicsTypes.BATTERY_LEVEL)
    cur_state.value = 100

    low_battery = service.add_char(CharacteristicsTypes.STATUS_LO_BATT)
    low_battery.value = 0

    charging_state = service.add_char(CharacteristicsTypes.CHARGING_STATE)
    charging_state.value = 0

    return service


async def test_temperature_sensor_read_state(hass, utcnow):
    """Test reading the state of a HomeKit temperature sensor accessory."""
    helper = await setup_test_component(
        hass, create_temperature_sensor_service, suffix="temperature"
    )

    state = await helper.async_update(
        ServicesTypes.TEMPERATURE_SENSOR,
        {
            CharacteristicsTypes.TEMPERATURE_CURRENT: 10,
        },
    )
    assert state.state == "10"

    state = await helper.async_update(
        ServicesTypes.TEMPERATURE_SENSOR,
        {
            CharacteristicsTypes.TEMPERATURE_CURRENT: 20,
        },
    )
    assert state.state == "20"

    assert state.attributes["device_class"] == SensorDeviceClass.TEMPERATURE


async def test_temperature_sensor_not_added_twice(hass, utcnow):
    """A standalone temperature sensor should not get a characteristic AND a service entity."""
    helper = await setup_test_component(
        hass, create_temperature_sensor_service, suffix="temperature"
    )

    for state in hass.states.async_all():
        if state.entity_id.startswith("button"):
            continue
        assert state.entity_id == helper.entity_id


async def test_humidity_sensor_read_state(hass, utcnow):
    """Test reading the state of a HomeKit humidity sensor accessory."""
    helper = await setup_test_component(
        hass, create_humidity_sensor_service, suffix="humidity"
    )

    state = await helper.async_update(
        ServicesTypes.HUMIDITY_SENSOR,
        {
            CharacteristicsTypes.RELATIVE_HUMIDITY_CURRENT: 10,
        },
    )
    assert state.state == "10"

    state = await helper.async_update(
        ServicesTypes.HUMIDITY_SENSOR,
        {
            CharacteristicsTypes.RELATIVE_HUMIDITY_CURRENT: 20,
        },
    )
    assert state.state == "20"

    assert state.attributes["device_class"] == SensorDeviceClass.HUMIDITY


async def test_light_level_sensor_read_state(hass, utcnow):
    """Test reading the state of a HomeKit temperature sensor accessory."""
    helper = await setup_test_component(
        hass, create_light_level_sensor_service, suffix="light_level"
    )

    state = await helper.async_update(
        ServicesTypes.LIGHT_SENSOR,
        {
            CharacteristicsTypes.LIGHT_LEVEL_CURRENT: 10,
        },
    )
    assert state.state == "10"

    state = await helper.async_update(
        ServicesTypes.LIGHT_SENSOR,
        {
            CharacteristicsTypes.LIGHT_LEVEL_CURRENT: 20,
        },
    )
    assert state.state == "20"

    assert state.attributes["device_class"] == SensorDeviceClass.ILLUMINANCE


async def test_carbon_dioxide_level_sensor_read_state(hass, utcnow):
    """Test reading the state of a HomeKit carbon dioxide sensor accessory."""
    helper = await setup_test_component(
        hass, create_carbon_dioxide_level_sensor_service, suffix="co2"
    )

    state = await helper.async_update(
        ServicesTypes.CARBON_DIOXIDE_SENSOR,
        {
            CharacteristicsTypes.CARBON_DIOXIDE_LEVEL: 10,
        },
    )
    assert state.state == "10"

    state = await helper.async_update(
        ServicesTypes.CARBON_DIOXIDE_SENSOR,
        {
            CharacteristicsTypes.CARBON_DIOXIDE_LEVEL: 20,
        },
    )
    assert state.state == "20"


async def test_battery_level_sensor(hass, utcnow):
    """Test reading the state of a HomeKit battery level sensor."""
    helper = await setup_test_component(
        hass, create_battery_level_sensor, suffix="battery"
    )

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 100,
        },
    )
    assert state.state == "100"
    assert state.attributes["icon"] == "mdi:battery"

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 20,
        },
    )
    assert state.state == "20"
    assert state.attributes["icon"] == "mdi:battery-20"

    assert state.attributes["device_class"] == SensorDeviceClass.BATTERY


async def test_battery_charging(hass, utcnow):
    """Test reading the state of a HomeKit battery's charging state."""
    helper = await setup_test_component(
        hass, create_battery_level_sensor, suffix="battery"
    )

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 0,
            CharacteristicsTypes.CHARGING_STATE: 1,
        },
    )
    assert state.attributes["icon"] == "mdi:battery-outline"

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 20,
        },
    )
    assert state.attributes["icon"] == "mdi:battery-charging-20"


async def test_battery_low(hass, utcnow):
    """Test reading the state of a HomeKit battery's low state."""
    helper = await setup_test_component(
        hass, create_battery_level_sensor, suffix="battery"
    )

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 1,
            CharacteristicsTypes.STATUS_LO_BATT: 0,
        },
    )
    assert state.attributes["icon"] == "mdi:battery-10"

    state = await helper.async_update(
        ServicesTypes.BATTERY_SERVICE,
        {
            CharacteristicsTypes.BATTERY_LEVEL: 1,
            CharacteristicsTypes.STATUS_LO_BATT: 1,
        },
    )
    assert state.attributes["icon"] == "mdi:battery-alert"


def create_switch_with_sensor(accessory):
    """Define battery level characteristics."""
    service = accessory.add_service(ServicesTypes.OUTLET)

    realtime_energy = service.add_char(
        CharacteristicsTypes.VENDOR_KOOGEEK_REALTIME_ENERGY
    )
    realtime_energy.value = 0
    realtime_energy.format = "float"
    realtime_energy.perms.append("ev")

    cur_state = service.add_char(CharacteristicsTypes.ON)
    cur_state.value = True

    return service


async def test_switch_with_sensor(hass, utcnow):
    """Test a switch service that has a sensor characteristic is correctly handled."""
    helper = await setup_test_component(hass, create_switch_with_sensor)

    # Helper will be for the primary entity, which is the outlet. Make a helper for the sensor.
    energy_helper = Helper(
        hass,
        "sensor.testdevice_power",
        helper.pairing,
        helper.accessory,
        helper.config_entry,
    )

    state = await energy_helper.async_update(
        ServicesTypes.OUTLET,
        {
            CharacteristicsTypes.VENDOR_KOOGEEK_REALTIME_ENERGY: 1,
        },
    )
    assert state.state == "1"

    state = await energy_helper.async_update(
        ServicesTypes.OUTLET,
        {
            CharacteristicsTypes.VENDOR_KOOGEEK_REALTIME_ENERGY: 50,
        },
    )
    assert state.state == "50"


async def test_sensor_unavailable(hass, utcnow):
    """Test a sensor becoming unavailable."""
    helper = await setup_test_component(hass, create_switch_with_sensor)

    # Find the energy sensor and mark it as offline
    outlet = helper.accessory.services.first(service_type=ServicesTypes.OUTLET)
    realtime_energy = outlet[CharacteristicsTypes.VENDOR_KOOGEEK_REALTIME_ENERGY]
    realtime_energy.status = HapStatusCode.UNABLE_TO_COMMUNICATE

    # Helper will be for the primary entity, which is the outlet. Make a helper for the sensor.
    energy_helper = Helper(
        hass,
        "sensor.testdevice_power",
        helper.pairing,
        helper.accessory,
        helper.config_entry,
    )

    # Outlet has non-responsive characteristics so should be unavailable
    state = await helper.poll_and_get_state()
    assert state.state == "unavailable"

    # Energy sensor has non-responsive characteristics so should be unavailable
    state = await energy_helper.poll_and_get_state()
    assert state.state == "unavailable"