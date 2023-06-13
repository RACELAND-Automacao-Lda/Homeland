This file will be used to track changes between releases.

# RacelandHA Changelog

## v0.0.1

### Core
- [dev setup] .devcontainer/devcontainer.json added mounts
- [dev setup] Dockerfile update server ('pip3 install --no-cache-dir --index-url ${WHEELS_LINKS}')
- [dev setup] requirements.txt change broadlink and frontend
- [dev setup] homeassistant/package_constraints.txt
<- [public private dashboard] homeassistant/auth/_init_.py
<- [public private dashboard] homeassistant/components/config/auth.py
- [camera mjpeg] homeassistant/components/mjpeg added reload service in camera.py added services.yaml

### Frontend

- [rebranding] public change icons and images
- [more-info-light rework] package.json add @ctrl/tinycolor, github:thomasloven/lovelace-card-tools, custom-card-helpers
- [rebranding] translations/frontend/pt.json and src/translations/en.json change app name find and replace Home Assistant with RacelandHA
- [rebranding] src/auth/ha-authorize.ts remover paragrafo ui.panel.page-authorize.authorizing_client
- [rework script] src/common/const.ts add script to DOMAINS_TOGGLE 
- [filters] src/components/entity/ha-entity-picker.ts add filtering functionality
- [rebranding] src/components/ha-icons.ts add pt translations and remove hass prefix
- !!src/components/ha-settings-row.ts remove div description
- [filters] src/components/ha-sidebar.ts change app name and add panel filtering
<- [public private dashboard] src/data/user.ts add username to websocket in create and delete user
- [more-info-light rework] src/dialogs/more-info/controls/ change more-info-light id and add more-info-light2.ts
- [rework script] src/dialogs/more-info/ha-more-info-dialog.ts remove script from EDITABLE_DOMAINS and add should shouldShowEditIcon condition
- [rebranding] src/html/authorize.html.template remove text Home Assistant
- [rebranding] src/html/index.html.template changed splash screen svg
- [rebranding] src/html/onboarding.html.template changed title
- [filters] src/panels/config/automation/ha-config-automation.ts add filter to exclude automations
- [configs] src/panels/config/dashboard/ha-config-dashboard.ts remove cloud option
- [filters] src/panels/config/integrations/ha-config-integrations.ts filter integrations
<- [public private dashboard] src/panels/config/users/dialog-add-user.ts Implement dashboard creation after creating user
<- [public private dashboard] src/panels/config/users/dialog-user-detail.ts Implement dashboard deletion
<- [public private dashboard] src/panels/config/users/ha-config-user.ts add fetch create and delete private dashboard
<- [public private dashboard] src/panels/config/users/show-dialog-add-user.ts change types
- [configs] src/panels/config/ha-panel-config.ts change configuration dashboard menu options
- [cards] src/panels/lovelace/cards/hui-button-card.ts change domains style and css
- [cards] src/panels/lovelace/cards/hui-entities-card.ts change css
- [cards] src/panels/lovelace/cards/hui-grid-card.ts change css
- [cards] src/panels/lovelace/cards/hui-light-card.ts change css
- [cards] src/panels/lovelace/cards/hui-markdown-card.ts change css add word-wrap:break-word;
- [cards] src/panels/lovelace/cards/hui-media-control-card.ts change css 
- [cards] src/panels/lovelace/cards/hui-picture-glance-card.ts change css 
- [cards] src/panels/lovelace/cards/hui-weather-forecast-card.ts change css 
- [filters] src/panels/lovelace/components/hui-entity-editor.ts changed domains
- [rework card editor] src/panels/lovelace/editor/card-editor/hui-card-picker.ts added card filter and changed cards container
- [rework card editor] src/panels/lovelace/editor/card-editor/hui-dialog-create-card.ts remove tab bar
- [rework card editor] src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts hide code editor and help button
- [card editor configs] src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts chanded domains
- [card editor configs] src/panels/lovelace/editor/config-elements/hui-grid-card-editor.ts changed from input to dropdown
- [theme and view rework] src/panels/lovelace/editor/view-editor/view-editor.ts changed theme name and default selected view
- [filters] src/panels/lovelace/editor/lovelace-cards.ts filter lovelace cards
- [view rework] src/panels/lovelace/views/const.ts changed default view
- [dashboard header rework] src/panels/hui-root.ts changed menu options
- ![profile rework] removed: ha-advanced-mode-row.ts, ha-enable-shortcuts-row.ts, ha-force-narrow-row.ts, ha-long-lived-access-tokens-card.ts, ha-mfa-modules-card.ts, ha-pick-dashboard-row.ts, ha-push-notifications-row.js, ha-refresh-tokens-card.ts, ha-set-vibrate-row.ts
- ![profile rework] ha-panel-profile.ts hide card-content and change to grid in css
- ![profile rework] ha-pick-language-row hide ha-settings-row narrow and add padding
- [profile and theme rework] src/panels/profile/ha-pick-theme-row.ts  fixed _supportsModeSelection, changed dropdown menu and changed default theme
- ![profile rework] src/panels/profile/ha-pick-time-format-row.ts hide ha-settings-row add css to dropdown menu
- [rebranding] src/util/documentation-url.ts changed docs urls
- [rebranding] src/util/brands-url.ts changed brands urls and update on cpanel

### Docker
- updated build 

### Docker base Alpine
- updated build

### Docker base Python
- updated build
