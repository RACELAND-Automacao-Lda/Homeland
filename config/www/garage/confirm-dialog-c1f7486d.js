import{i as t,s as a,n as o,l as e,k as i,_ as s,y as n,o as r,a as c,U as l,h as d,b as h,e as g,t as m,c as u}from"./garage-card-731b96e4.js";const f=t`
    /* mwc-dialog (ha-dialog) styles */
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --justify-action-buttons: space-between;
      --mdc-switch__pointer_events: auto;
    }
    ha-dialog .form {
      padding-bottom: 24px;
      color: var(--primary-text-color);
    }
    .heading {
        border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
    }
    a {
      color: var(--accent-color) !important;
    }
    /* make dialog fullscreen on small screens */
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-dialog {
        --mdc-dialog-min-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-max-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-min-height: 100%;
        --mdc-dialog-max-height: 100%;
        --vertial-align-dialog: flex-end;
        --ha-dialog-border-radius: 0px;
      }
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    .error {
      color: var(--error-color);
    }
  `;let v=class extends a{constructor(){super(...arguments),this.computeActiveState=t=>{const a=t.entity_id.split(".")[0];let o=t.state;return"climate"===a&&(o=t.attributes.hvac_action),o},this.computeObjectId=t=>t.substr(t.indexOf(".")+1),this.computeStateName=t=>void 0===t.attributes.friendly_name?this.computeObjectId(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}async showDialog(t){this._params=t,this.garageInfo=this._params.garageInfo,this.config=this.garageInfo}closeDialog(){this._params=void 0,o(this,"dialog-closed",{dialog:this.localName})}async firstUpdated(t){super.firstUpdated(t),o(this,"config-changed",{config:this.config})}setConfig(t){if(!t)throw new Error(e("common.invalid_configuration"));t.test_gui&&i().setEditMode(!0)}shouldUpdate(t){return!!this.config&&s(this,t,!0)}render(){if(this.config.show_warning)return this._showWarning(e("common.show_warning"));if(this.config.show_error)return this._showError(e("common.show_error"));if(!this._params)return n``;const t=this.config.entity?this.hass.states[this.config.entity]:void 0,a=this.hass.states[this.config.sensor],o=this.config.show_name?this.config.name||(t?this.computeStateName(t):""):"";return n`
      <ha-dialog
          open
          scrimClickAction
          hideActions
          @closed=${this.closeDialog}
          .heading=${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.header")}
        >
          <div slot="heading" class="heading">
            <ha-header-bar>
              <div
                slot="title"
                class="main-title"
                .title=${o}
              >
              ${o}
              </div>
              <ha-icon-button
              slot="navigationIcon"
              dialogAction="cancel"
              .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
              id="cancel"
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
            ></ha-icon-button>
            </ha-header-bar>
          </div>
          <div class="contentFather">
            <ha-card
            @click=${this._handleAction}
            class=${r({"state-on":"on"===c(a?this.computeActiveState(a):"on"),"state-off":"off"===c(a?this.computeActiveState(a):"off"),"no-sensor":void 0===a,"state-unavailable":(null==t?void 0:t.state)===l||(null==a?void 0:a.state)===l})}>
                <div class="row">
                    <svg viewBox="-10 -8 70 70" height="100%" width="100%" class="svg-icon">
                        <path id="svg" class=${r({"state-on":"on"===c(a?this.computeActiveState(a):"on"),"state-off":"off"===c(a?this.computeActiveState(a):"off"),"no-sensor-body":void 0===a,"state-unavailable":(null==t?void 0:t.state)===l||(null==a?void 0:a.state)===l})}  d="M 25 3 C 18.3633 3 13 8.3633 13 15 L 13 20 L 37 20 L 37 15 C 37 8.3633 31.6367 3 25 3 Z M 25 5 C 30.5664 5 35 9.4336 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4336 19.4336 5 25 5 Z M 25 3"/>
                        <path id="svg" class=${r({"state-on-body":"on"===c(a?this.computeActiveState(a):"on"),"state-off-body":"off"===c(a?this.computeActiveState(a):"off"),"no-sensor-body":void 0===a,"state-unavailable":(null==t?void 0:t.state)===l||(null==a?void 0:a.state)===l})} d="M 35 20 L 37 20 L 9 20 C 7.3008 20 6 21.3008 6 23 L 6 47 C 6 48.6992 7.3008 50 9 50 L 41 50 C 42.6992 50 44 48.6992 44 47 L 44 23 C 44 21.3008 42.6992 20 41 20 L 35 20 M 35 20 V 20 H 37 M 37 20 M 35 20 L 35 15 L 37 15 L 37 20 Z Z Z Z M 25 30 C 26.6992 30 28 31.3008 28 33 C 28 33.8984 27.6016 34.6875 27 35.1875 L 27 38 C 27 39.1016 26.1016 40 25 40 C 23.8984 40 23 39.1016 23 38 L 23 35.1875 C 22.3984 34.6875 22 33.8984 22 33 C 22 31.3008 23.3008 30 25 30 Z"/>
                    </svg>
                </div>
            </ha-card>
            <div id="name">${o}</div>
            ${(null==t?void 0:t.state)===l&&(null==a?void 0:a.state)===l?n``:n`<div id="tap" >${e("common.tap")}</div>`}
          </div>
          <div slot="secondaryAction" class="options">
            <mwc-button class="button-cancel" @click=${this._cancel}>
            cancelar</mwc-button>
          </div>
          ${(null==t?void 0:t.state)===l||(null==a?void 0:a.state)===l?n`
                  <unavailable-icon></unavailable-icon>`:n``}
        </ha-dialog>
    `}_cancel(t){t&&t.stopPropagation(),this.closeDialog()}_handleAction(t){this.hass&&this.config&&t.type&&d(this,this.hass,this.config,"tap")}_showWarning(t){return n`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const a=document.createElement("hui-error-card");return a.setConfig({type:"error",error:t,origConfig:this.config}),n`
      ${a}
    `}static get styles(){return[f,t`
      ha-header-bar {
        --mdc-theme-on-primary: var(--primary-text-color);
        --mdc-theme-primary: var(--mdc-theme-surface);
        flex-shrink: 0;
        }
        .contentFather {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 30px 0px;
        }
        ha-card {
            border-radius: 2.8rem;
            width: 60%;
            height: 60%;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }
        #name {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 450;
            margin-top: 8%;
            margin-bottom: 3%;
        }
        unavailable-icon {
            position: absolute;
            top: 42%;
            scale: 2.5;
        }
        @media all and (max-width: 600px) {
            .contentFather {
                margin-top: 35%;
                display: flex;
                justify-content: center;
            }
            unavailable-icon {
                position: absolute;
                top: 36%;
                scale: 2.5;
            }
        }
        .main-title {
            user-select: none;
            -webkit-user-select : none;
            -moz-user-select    : none;
            -khtml-user-select  : none;
            -ms-user-select     : none;
        }
        ha-card.state-on {
            background-color: var(--accent-color);
        }
        ha-card.state-off {
            background-color: var(--header-card-picker-background);
        }
        ha-card.no-sensor {
            background-color: var(--accent-color);
        }
        .state-on {
            fill: var(--card-background-color, #44739e);
            transform: matrix(1, 0, 0, 1, 0, -4.7);
            transition: 0.5s ease-out;
        }
        .state-off {
            fill: var(--paper-item-icon-color, #44739e);
            transform: matrix(1, 0, 0, 1, 0, 0);
            transition: 0.5s ease-out;
        }
        .no-sensor .no-sensor-body {
            fill: var(--card-background-color, #44739e);
        }
        .state-on-body {
            fill: var(--card-background-color, #44739e);
            transition: 0.5s ease-out;
        }
        .state-off-body {
            fill: var(--paper-item-icon-color, #44739e);
            transition: 0.5s ease-out;
        }
        .svg-icon{
            transform: scale(0.7);
        }
        .state-unavailable {
            fill: var(--state-unavailable-color);
        }
    `]}};h([g({attribute:!1})],v.prototype,"hass",void 0),h([m()],v.prototype,"config",void 0),h([m()],v.prototype,"_params",void 0),h([m()],v.prototype,"garageInfo",void 0),v=h([u("confirm-dialog")],v);export{v as HuiConfirmGarage,f as haStyleDialog};
