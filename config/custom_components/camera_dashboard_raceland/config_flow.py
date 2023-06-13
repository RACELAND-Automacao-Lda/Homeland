"""Adds config flow for HACS."""
from email.policy import default
from unittest.mock import DEFAULT
from homeassistant import config_entries
from homeassistant.core import callback

import voluptuous as vol


from .const import DOMAIN

CONF_DEV_MODE = "dev_mode"

import logging 
_LOGGER = logging.getLogger(__name__)

class cameraDashboardConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for Camera Dashboard."""
    async def async_step_user(self, user_input = None):
        errors = {}
        data = {}
        if user_input is not None:
            data[CONF_DEV_MODE] = user_input[CONF_DEV_MODE]

            return self.async_create_entry(title="Camera Dashboard", data=data)

        data_schema = {
            vol.Required(CONF_DEV_MODE): bool,
        }

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(data_schema),
            errors=errors,
        )

    # @staticmethod
    # @callback
    # def async_get_options_flow(config_entry):
    #     """Get the options flow for this handler."""
    #     return OptionsFlowHandler(config_entry)

# class OptionsFlowHandler(config_entries.OptionsFlow):
#     """Handles options flow for the component."""

#     def __init__(self, config_entry):
#         self.config_entry = config_entry

#     @callback
#     def _save_config(self, data):
#         """Save the updated options."""
#         return self.async_create_entry(title="", data=data)


#     async def async_step_init(
#         self, user_input = None
#     ):
#         """Manage the options for the custom component."""
#         _LOGGER.warn("File %s",user_input)
#         if user_input is not None:
#             return self._save_config(user_input)
            
#         options_schema = {
#             vol.Required(CONF_DEV_MODE, default = self.hass.data[DOMAIN].configuration.dev_mode): bool,
#         }

#         return self.async_show_form(
#             step_id="init", data_schema=options_schema
#         )