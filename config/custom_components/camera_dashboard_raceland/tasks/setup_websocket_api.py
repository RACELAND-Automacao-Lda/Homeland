"""Register WS API endpoints for HACS."""
from __future__ import annotations
import logging
from jinja2 import Template

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv
import voluptuous as vol

from homeassistant.helpers import entity_registry as er

from homeassistant.components.websocket_api import (
    async_register_command,
    ActiveConnection,
)

from .base import CameraDashboardTask
from ..base import CameraBase
from ..const import (
    DOMAIN,
    SetupStage,
    STORAGE_FILE,
    CONF_INTEGRATION,
    CONF_RTSP_TRANSPORT,
    CONF_INTEGRATION_DEFAULT,
)
from ..helpers import create_entity, load_from_storage, save_to_storage


from homeassistant.const import (
    CONF_ENTITY_ID,
    CONF_AUTHENTICATION,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_VERIFY_SSL,
    HTTP_BASIC_AUTHENTICATION,
    HTTP_DIGEST_AUTHENTICATION,
)
from homeassistant.components.generic.const import (
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE,
    CONF_CONTENT_TYPE,
    CONF_FRAMERATE,
    CONF_LIMIT_REFETCH_TO_URL_CHANGE,
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE,
)

from homeassistant.components.camera import DEFAULT_CONTENT_TYPE

_LOGGER = logging.getLogger(__name__)


CONF_CHANNEL = "channel"
CONF_STILL_URL_DOOR = "still_url_door"
CONF_STREAM_SOURCE_DOOR = "stream_source_door"
CONF_URL_IP = "ip"
CONF_ADD_MULTI_CHANNELS = "add_multi_channels"


async def async_setup_task(hacs: CameraBase, hass: HomeAssistant) -> Task:
    """Set up this task."""
    return Task(hacs=hacs, hass=hass)


class Task(CameraDashboardTask):
    """Setup the HACS websocket API."""

    stages = [SetupStage.SETUP]

    async def async_execute(self) -> None:
        """Execute the task."""
        async_register_command(self.hass, send_camera_database_to_frontend)
        async_register_command(self.hass, register_camera)
        async_register_command(self.hass, register_model_camera)
        async_register_command(self.hass, edit_camera)
        async_register_command(self.hass, remove_camera_entity)
        async_register_command(self.hass, send_camera_information_to_frontend)
        async_register_command(self.hass, send_camera_list_to_frontend)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_db",
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_database_to_frontend(hass, connection, msg):
    camera_database = hass.data[DOMAIN].camera_database
    connection.send_message(websocket_api.result_message(msg["id"], camera_database))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_camera",
        vol.Optional(CONF_INTEGRATION, CONF_INTEGRATION_DEFAULT): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [
                HTTP_BASIC_AUTHENTICATION.capitalize(),
                HTTP_DIGEST_AUTHENTICATION.capitalize(),
            ]
        ),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT, default="tcp"): cv.string,
        vol.Optional(CONF_FRAMERATE, default=2): vol.Any(
            cv.small_float, cv.positive_int
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_camera(hass, connection, msg):
    camera_info = {
        CONF_INTEGRATION: msg.get(CONF_INTEGRATION, CONF_INTEGRATION_DEFAULT),
        CONF_NAME: msg[CONF_NAME],
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(
            CONF_AUTHENTICATION, HTTP_DIGEST_AUTHENTICATION
        ).lower(),
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
            CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
        ),
        CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE),
        CONF_RTSP_TRANSPORT: msg.get(
            CONF_RTSP_TRANSPORT,
        ),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2),
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        CONF_USERNAME: msg.get(CONF_USERNAME, None),
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
    }

    entity = create_entity(hass, camera_info)
    if entity:
        camera_info["unique_id"] = entity._attr_unique_id
        camera_list = await load_from_storage(hass, STORAGE_FILE)
        camera_list.append(camera_info)
        await save_to_storage(hass, camera_list, key=STORAGE_FILE)

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_model_camera",
        vol.Required(CONF_NAME): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(CONF_URL_IP): cv.string,
        vol.Optional(CONF_STILL_URL_DOOR): cv.string,
        vol.Optional(CONF_STREAM_SOURCE_DOOR): cv.string,
        vol.Optional(CONF_CHANNEL): cv.string,
        vol.Optional(CONF_ADD_MULTI_CHANNELS, default=False): cv.string,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [
                HTTP_BASIC_AUTHENTICATION.capitalize(),
                HTTP_DIGEST_AUTHENTICATION.capitalize(),
            ]
        ),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT, default=None): cv.string,
        vol.Optional(CONF_FRAMERATE, default=2): vol.Any(
            cv.small_float, cv.positive_int
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_model_camera(hass, connection, msg):
    new_camera_information = []

    if msg.get(CONF_STILL_URL_DOOR, None):
        msg[CONF_STILL_URL_DOOR] = ":" + msg.get(CONF_STILL_URL_DOOR, None)

    if msg.get(CONF_STREAM_SOURCE_DOOR, None):
        msg[CONF_STREAM_SOURCE_DOOR] = ":" + msg.get(CONF_STREAM_SOURCE_DOOR, None)

    n_channels = int(msg.get(CONF_CHANNEL, 1))
    if n_channels > 1 and msg[CONF_ADD_MULTI_CHANNELS] == "true":
        for i in range(n_channels):
            data = msg
            data[CONF_CHANNEL] = str(i + 1)

            if msg.get(CONF_STILL_IMAGE_URL):
                still_image_url = Template(msg.get(CONF_STILL_IMAGE_URL)).render(data)
            else:
                still_image_url = None

            if msg.get(CONF_STREAM_SOURCE):
                stream_source = Template(msg.get(CONF_STREAM_SOURCE)).render(data)
            else:
                stream_source = None

            camera_info = {
                CONF_INTEGRATION: CONF_INTEGRATION_DEFAULT,
                CONF_NAME: msg[CONF_NAME] + " " + data["channel"],
                CONF_STILL_IMAGE_URL: still_image_url,
                CONF_STREAM_SOURCE: stream_source,
                CONF_USERNAME: msg.get(CONF_USERNAME, None),
                CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
                CONF_AUTHENTICATION: msg.get(
                    CONF_AUTHENTICATION, HTTP_DIGEST_AUTHENTICATION
                ).lower(),
                CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
                    CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
                ),
                CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE),
                CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT),
                CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2),
                CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
            }
            entity = create_entity(hass, camera_info)
            camera_info["unique_id"] = entity._attr_unique_id
            new_camera_information.append(camera_info)

    else:
        data = msg
        data[CONF_CHANNEL] = 1

        if msg.get(CONF_STILL_IMAGE_URL):
            still_image_url = Template(msg.get(CONF_STILL_IMAGE_URL)).render(data)
        else:
            still_image_url = None

        if msg.get(CONF_STREAM_SOURCE):
            stream_source = Template(msg.get(CONF_STREAM_SOURCE)).render(data)
        else:
            stream_source = None

        camera_info = {
            CONF_INTEGRATION: CONF_INTEGRATION_DEFAULT,
            CONF_NAME: msg[CONF_NAME],
            CONF_STILL_IMAGE_URL: still_image_url,
            CONF_STREAM_SOURCE: stream_source,
            CONF_USERNAME: msg.get(CONF_USERNAME, None),
            CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
            CONF_AUTHENTICATION: msg.get(
                CONF_AUTHENTICATION, HTTP_DIGEST_AUTHENTICATION
            ).lower(),
            CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
                CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
            ),
            CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE),
            CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT),
            CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2),
            CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        }
        entity = create_entity(hass, camera_info)
        camera_info["unique_id"] = entity._attr_unique_id
        new_camera_information.append(camera_info)

    # At the end add every camera information in bulk
    camera_list = await load_from_storage(hass, STORAGE_FILE)
    camera_list.extend(new_camera_information)
    await save_to_storage(hass, camera_list, key=STORAGE_FILE)

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/edit_camera",
        vol.Required(CONF_INTEGRATION): cv.string,
        vol.Required(CONF_ENTITY_ID): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Required("unique_id"): cv.string,
        vol.Required(CONF_CONTENT_TYPE): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        # vol.Optional("record_video_of_camera"): cv.boolean,
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [
                HTTP_BASIC_AUTHENTICATION.capitalize(),
                HTTP_DIGEST_AUTHENTICATION.capitalize(),
            ]
        ),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT): cv.string,
        vol.Optional(CONF_FRAMERATE, default=2): vol.Any(
            cv.small_float, cv.positive_int
        ),
        vol.Optional(CONF_LIMIT_REFETCH_TO_URL_CHANGE, default=False): cv.boolean,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def edit_camera(hass, connection, msg):
    integration = msg[CONF_INTEGRATION]
    camera_info = {
        CONF_INTEGRATION: msg[CONF_INTEGRATION],
        CONF_NAME: msg[CONF_NAME],
        CONF_ENTITY_ID: msg[CONF_ENTITY_ID],
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(
            CONF_AUTHENTICATION, HTTP_BASIC_AUTHENTICATION
        ).lower(),
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
            CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
        ),
        CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE),
        CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2),
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        CONF_USERNAME: msg.get(CONF_USERNAME, None),
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
        "unique_id": msg["unique_id"],
    }

    if camera_info[CONF_RTSP_TRANSPORT] == "None":
        camera_info[CONF_RTSP_TRANSPORT] = None

    entity_registry = er.async_get(hass)
    entity_registry.async_remove(msg["entityID"])
    entity = create_entity(hass, camera_info, identifier=camera_info["unique_id"])
    if entity:
        camera_list = await load_from_storage(hass, STORAGE_FILE)
        for cam in camera_list.copy():
            if cam["unique_id"] == camera_info["unique_id"]:
                camera_list.remove(cam)  # Remove old info
                camera_list.append(camera_info)  # Add new info
            await save_to_storage(hass, camera_list, key=STORAGE_FILE)

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/remove_camera",
        vol.Required("unique_id"): cv.string,
        vol.Required("entityID"): cv.string,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def remove_camera_entity(
    hass: HomeAssistant, connection: ActiveConnection, msg: dict
) -> None:
    """Delete camera."""
    unique_id = msg["unique_id"]
    entity_id = msg["entityID"]

    entity_registry = er.async_get(hass)
    if not (entity_registry.async_get(entity_id)):
        connection.send_error(
            msg["id"], websocket_api.const.ERR_NOT_FOUND, "Entity not found"
        )
        return

    entity_registry.async_remove(entity_id)  # Remove the entity from the registry.
    # remove from storage
    camera_list = await load_from_storage(hass, STORAGE_FILE)
    for cam in camera_list:
        if cam["unique_id"] == unique_id:
            camera_list.remove(cam)
            await save_to_storage(hass, camera_list, key=STORAGE_FILE)
            break

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_information",
        vol.Required("entity_id"): cv.string,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_information_to_frontend(hass, connection, msg):
    """Fetch camera information, through entity_id to send to the frontend"""
    entity_id = msg["entity_id"]
    # Get corresponding entity_id from entity_registry
    entity_registry = await er.async_get_registry(hass)
    entity = entity_registry.async_get(entity_id)

    if entity is not None:
        entity_unique_id = entity.unique_id

        # Get the camera_info from the storage using the unique_id
        cameras_info = await load_from_storage(hass, STORAGE_FILE)
        for camera_info in cameras_info:
            if camera_info["unique_id"] == entity_unique_id:
                camera_info["entityID"] = entity_id
                connection.send_message(
                    websocket_api.result_message(msg["id"], camera_info)
                )
    else:
        connection.send_message(websocket_api.result_message(msg["id"], None))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_list",
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_list_to_frontend(hass, connection, msg):
    """Fetch camera information, through entity_id to send to the frontend"""
    # Get corresponding entity_id from entity_registry

    cameras_info = await load_from_storage(hass, STORAGE_FILE)

    if cameras_info is not None:
        connection.send_message(websocket_api.result_message(msg["id"], cameras_info))
    else:
        connection.send_message(websocket_api.result_message(msg["id"], None))
