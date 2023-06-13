import{o as t,i,s as o,n as e,l as s,k as a,_ as n,y as r,a as l,U as c,b as d,c as h,h as p,d as u,e as v,t as m,f as g}from"./curtain-card-ca4021a4.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(i,o){return t({descriptor:t=>{const e={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(o){const o="symbol"==typeof t?Symbol():"__"+t;e.get=function(){var t,e;return void 0===this[o]&&(this[o]=null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i))&&void 0!==e?e:null),this[o]}}return e}})}const x=i`
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
  `;let f=class extends o{constructor(){super(...arguments),this._mouseDown=t=>{var i,o,e,s,a,n;t.cancelable&&t.preventDefault(),this.isUpdating=!0,null===(i=this.shadowRoot)||void 0===i||i.addEventListener("mousemove",this._mouseMove),null===(o=this.shadowRoot)||void 0===o||o.addEventListener("touchmove",this._mouseMove),null===(e=this.shadowRoot)||void 0===e||e.addEventListener("pointermove",this._mouseMove),null===(s=this.shadowRoot)||void 0===s||s.addEventListener("mouseup",this._mouseUp),null===(a=this.shadowRoot)||void 0===a||a.addEventListener("touchend",this._mouseUp),null===(n=this.shadowRoot)||void 0===n||n.addEventListener("pointerup",this._mouseUp)},this._mouseMove=t=>{const i=100*(t.pageY-this.getPictureTop(this.slide))/this.maxPosition;null==this||this.setPickerPosition(i)},this._mouseUp=t=>{this.isUpdating=!1,this.updateComplete.then(()=>{var i,o,e,s,a,n;let r=t.pageY-this.getPictureTop(this.slide);r<this.minPosition&&(r=null==this?void 0:this.minPosition),r>this.maxPosition&&(r=null==this?void 0:this.maxPosition);const l=100*(r-this.minPosition)/(this.maxPosition-this.minPosition);null==this||this.setPickerPosition(100*r/this.maxPosition),this.invertPercentage?this.updateBlindPosition(this.hass,this.config.entity,l):this.updateBlindPosition(this.hass,this.config.entity,100-l),null===(i=this.shadowRoot)||void 0===i||i.removeEventListener("mousemove",this._mouseMove),null===(o=this.shadowRoot)||void 0===o||o.removeEventListener("touchmove",this._mouseMove),null===(e=this.shadowRoot)||void 0===e||e.removeEventListener("pointermove",this._mouseMove),null===(s=this.shadowRoot)||void 0===s||s.removeEventListener("mouseup",this._mouseUp),null===(a=this.shadowRoot)||void 0===a||a.removeEventListener("touchend",this._mouseUp),null===(n=this.shadowRoot)||void 0===n||n.removeEventListener("pointerup",this._mouseUp)})},this.computeActiveState=t=>{const i=t.entity_id.split(".")[0];let o=t.state;return"climate"===i&&(o=t.attributes.hvac_action),o},this.computeObjectId=t=>t.substr(t.indexOf(".")+1),this.computeStateName=t=>void 0===t.attributes.friendly_name?this.computeObjectId(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}async showDialog(t){this._params=t,this.curtainInfo=this._params.curtainInfo,this.config=this.curtainInfo}closeDialog(){this._params=void 0,e(this,"dialog-closed",{dialog:this.localName})}async firstUpdated(t){super.firstUpdated(t),e(this,"config-changed",{config:this.config})}setConfig(t){if(!t)throw new Error(s("common.invalid_configuration"));t.test_gui&&a().setEditMode(!0)}shouldUpdate(t){return!!this.config&&n(this,t,!0)}render(){var t,i;return this.config.show_warning?this._showWarning(s("common.show_warning")):this.config.show_error?this._showError(s("common.show_error")):this._params?(this.stateObj=this.hass.states[this.config.entity],r`
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
                .title=${name}
              >
              ${name}
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
          <div
        class="sc-blind-position ${l({positionNull:this.stateObj.state===c})}"
        @change=${this.setPickerPosition(100-this.stateObj.attributes.current_position)}
      >
        ${this.stateObj.attributes.current_position} %
      </div>
      <div class="container">
        <div
          class="sc-blind-middle"
          .disabled=${d.includes(this.stateObj.state)}
        >
          <div class="sc-blind-selector">
            <div
              class="blindOpen ${l({"state-on":"open"===this.stateObj.state||"opening"===this.stateObj.state||"closing"===this.stateObj.state,"state-unavailable":this.stateObj.state===c})}"
            >
              <svg
                class="sc-blind-selector-picture
                ${l({"state-unavailable":this.stateObj.state===c})}"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
              >
                <path
                  d="M21.9365 1.91671H2.06314C1.92857 1.91669 1.79937 1.96952 1.70336 2.06381C1.60735 2.15811 1.55221 2.28633 1.5498 2.42088V3.08088C1.55491 3.1872 1.59294 3.28931 1.65863 3.37307C1.72432 3.45683 1.81443 3.51809 1.91647 3.54838V20.5617C1.91647 20.834 2.02464 21.0951 2.21718 21.2877C2.40971 21.4802 2.67085 21.5884 2.94314 21.5884H20.9098C21.2259 21.5884 21.529 21.4628 21.7524 21.2393C21.9759 21.0159 22.1015 20.7128 22.1015 20.3967V3.54838C22.2032 3.51599 22.2924 3.45266 22.3565 3.36722C22.4205 3.28178 22.4564 3.17848 22.459 3.07171V2.41171C22.4542 2.27717 22.3967 2.14989 22.299 2.0573C22.2013 1.96471 22.0711 1.91422 21.9365 1.91671ZM20.9006 20.4884H12.5956V3.57588H20.9923V20.3967C20.9902 20.4203 20.9799 20.4425 20.9632 20.4592C20.9464 20.476 20.9243 20.4863 20.9006 20.4884ZM3.0073 3.57588H11.404V20.4884H3.0073V3.57588Z"
                />
              </svg>
            </div>
            <div
              class="sc-blind-selector-slide
            ${l({"state-unavailable":this.stateObj.state===c})}"
            ></div>
            <!-- <svg
              class="sc-blind-selector-picker ${l({"state-unavailable":this.stateObj.state===c})}"
              viewBox="0 0 50 50"
              height="100%"
              width="100%"
            >
              <path
                d="M -44.58 5.54 C -44.75 5.54 -44.88 5.67 -44.88 5.84 V 44.66 C -44.88 44.79 -44.79 44.87 -44.68 44.92 C -44.65 44.93 -44.62 44.96 -44.58 44.96 H -43.98 V 5.54 H -44.58 Z"
                fill="#B3B3B3"
              />
            </svg> -->
          </div>
          ${d.includes(this.stateObj.state)?r` <unavailable-icon
                class="icon-unavailable"
              ></unavailable-icon>`:r``}
          <div id="buttons">
            <div class="buttons">
              <button
                class="openButton ${l({"state-on":"opening"===this.stateObj.state,"state-unavailable":this.stateObj.state===c})}"
                .label=${this.hass.localize("ui.dialogs.more_info_control.opencover")}
                @click=${this.stateObj.invert?this.onCloseTap:this.onOpenTap}
              >
                <ha-svg-icon
                  id="arrow-icon"
                  .path=${"M3.4375 16.1041L13 6.56246L22.5625 16.1041L25.5 13.1666L13 0.666626L0.5 13.1666L3.4375 16.1041Z"}
                >
                </ha-svg-icon>
              </button>
            </div>
            ${h(this.stateObj)?r`
                  <div class="buttons">
                    <button
                      .disabled=${d.includes(null===(t=this.stateObj)||void 0===t?void 0:t.state)}
                      class="pause ${l({"state-unavailable":(null===(i=this.stateObj)||void 0===i?void 0:i.state)===c})}"
                      .label=${this.hass.localize("ui.dialogs.more_info_control.stopcover")}
                      @click=${this.onStopTap}
                    >
                      <svg id="arrow-icon-middle" viewBox="0 0 24 24">
                        <path
                          d="M17.1667 29.5833H25.5V0.416626H17.1667V29.5833ZM0.5 29.5833H8.83333V0.416626H0.5V29.5833Z"
                        />
                      </svg>
                    </button>
                  </div>
                `:r` <div class="buttons-none"></div>`}
            <div class="buttons">
              <button
                class="closeButton ${l({"state-on":"closing"===this.stateObj.state,"state-unavailable":this.stateObj.state===c})}"
                .label=${this.hass.localize("ui.dialogs.more_info_control.closecover")}
                .path=${"M3.4375 0.391357L13 9.95386L22.5625 0.391357L25.5 3.34969L13 15.8497L0.5 3.34969L3.4375 0.391357Z"}
                @click=${this.stateObj.invert?this.onOpenTap:this.onCloseTap}
              >
                <ha-svg-icon
                  id="arrow-icon"
                  .path=${"M3.4375 0.391357L13 9.95386L22.5625 0.391357L25.5 3.34969L13 15.8497L0.5 3.34969L3.4375 0.391357Z"}
                >
                </ha-svg-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
            <div id="name">${name}</div>
            ${this.stateObj.state===c?r``:r`<div id="tap" >${s("common.tap")}</div>`}
          </div>
          <div slot="secondaryAction" class="options">
            <mwc-button class="button-cancel" @click=${this._cancel}>
            cancelar</mwc-button>
          </div>
          ${this.stateObj.state===c?r`
                  <unavailable-icon></unavailable-icon>`:r``}
        </ha-dialog>
    `):r``}getPictureTop(t){if(!t)return null;const i=t.getBoundingClientRect(),o=document.body,e=document.documentElement,s=window.pageYOffset||e.scrollTop||o.scrollTop,a=e.clientTop||o.clientTop||0;return i.top+s-a}setPickerPosition(t){let i=this.maxPosition/100*t;i<this.minPosition&&(i=this.minPosition),i>this.maxPosition&&(i=this.maxPosition);const o=i-(this.maxPosition-this.minPosition),e=i-this.minPosition;this.hasUpdated?this.picker&&this.slide&&(this.slide.style.height=e+"px",this.picker.style.top=o+"px"):this.updateComplete.then(()=>{this.picker&&this.slide&&(this.slide.style.height=e+"px",this.picker.style.top=o+"px")})}updateBlindPosition(t,i,o){const e=Math.round(o);t.callService("cover","set_cover_position",{entity_id:i,position:e})}onOpenTap(){this.hass.callService("cover","open_cover",{entity_id:this.config.entity})}onStopTap(){this.hass.callService("cover","stop_cover",{entity_id:this.config.entity})}onCloseTap(){this.hass.callService("cover","close_cover",{entity_id:this.config.entity})}_cancel(t){t&&t.stopPropagation(),this.closeDialog()}_handleAction(t){this.hass&&this.config&&t.type&&p(this,this.hass,this.config,"tap")}_showWarning(t){return r`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:this.config}),r`
      ${i}
    `}static get styles(){return[x,i`
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
        .current_position,
      .tilt {
        max-height: 0px;
        overflow: hidden;
      }

      .has-set_position .current_position,
      .has-current_position .current_position,
      .has-open_tilt .tilt,
      .has-close_tilt .tilt,
      .has-stop_tilt .tilt,
      .has-set_tilt_position .tilt,
      .has-current_tilt_position .tilt {
        max-height: 208px;
      }

      .title {
        margin: 5px 0 8px;
        color: var(--primary-text-color);
      }
      svg {
        display: block;
        .state-on {
          transform: scale(0);
        }
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      .buttons:hover {
        cursor: pointer;
      }

      .hassbut.state-off {
        text-align: left;
      }

      .hassbut.state-on {
        text-align: left;
      }

      .hassbut {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .blind-closed {
        position: absolute;
        top: 0;
      }
      .ha-status-icon {
        display: flex;
        justify-content: center;
      }
      .sc-blind-selector {
        position: absolute;
        top: 5px;
        left: -33px;
        width: 210px;
        height: 210px;
      }
      .sc-blind-position {
        display: flex;
        color: var(--secondary-text-color);
        font-size: 18px;
        width: 100%;
        position: relative;
        top: 24px;
        justify-content: center;
      }
      .sc-blind-label {
        color: var(--primary-text-color);
        padding-top: 5px;
        height: 100%;
        padding-bottom: 23px;
        font-size: 2.3rem;
        font-weight: 450;
        white-space: nowrap;
        display: inline-block;
        overflow-x: hidden;
        max-width: 80%;
        text-overflow: ellipsis;
        justify-content: space-between;
      }
      .sc-blind-selector-picture {
        position: relative;
        fill: #666666;
      }
      .top-bar {
        position: absolute;
        fill: #666666;
        width: 100%;
        top: 0px;
        right: 0px;
      }
      .sc-blind-selector-slide {
        background-color: var(--slider-track-color);
        position: absolute;
        cursor: row-resize;
        height: 100%;
        max-width: 230px;
        min-width: 174px;
        max-height: 156px;
        top: 33px;
        left: 19px;
      }
      .sc-blind-selector-picker {
        cursor: row-resize;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
      .sc-blind-middle {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        width: 200px;
        height: 200px;
      }
      .window {
        overflow-y: hidden;
        width: 230px;
        height: 172px;
        position: absolute;
        left: 98px;
      }
      .container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        margin-bottom: 25px;
      }
      #buttons {
        height: 83%;
        top: 22px;
        position: absolute;
        left: 170px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .buttons {
        height: 33px;
        width: 43px;
        margin: 15px 0;
      }
      .buttons-none {
        height: 33px;
        width: 33px;
        margin: 33px 0;
      }
      .state-div {
        align-items: left;
        padding-top: 19px;
        padding-bottom: 6px;
      }

      .name-div {
        align-items: left;
        padding: 12% 100% 1% 0%;
      }

      #arrow-icon {
        margin-top: 5px;
        height: 20px;
        width: 15px;
        fill: var(--card-background-color);
      }

      #arrow-icon-middle {
        height: 20px;
        width: 15px;
        fill: var(--card-background-color);
      }
      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      @media only screen and (max-width: 600px) {
        #arrow-icon {
          margin-top: 4px;
          height: 20px;
          width: 15px;
          fill: var(--card-background-color);
        }
        #arrow-icon-middle {
          padding: 0;
          margin: 0;
          height: 20px;
          width: 15px;
          fill: var(--card-background-color);
        }
        .sc-blind-position {
          display: flex;
          color: var(--secondary-text-color);
          font-size: 18px;
          width: 100%;
          position: relative;
          top: 24px;
          justify-content: center;
        }
      }

      .positionNull {
        display: none;
      }
      button {
        background-color: var(--secondary-text-color);
        cursor: pointer;
        fill: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: visible;
        width: 43px;
        height: 43px;
        border-radius: 8px;
        border-width: 0;
      }
      .openButton.state-on {
        background-color: var(--header-card-picker-background) !important;
      }
      .openButton.state-on > #arrow-icon {
        fill: var(--accent-color);
      }
      .blindOpen.state-on > svg {
        fill: var(--accent-color);
      }
      .closeButton.state-on {
        background-color: var(--header-card-picker-background) !important;
      }
      .closeButton.state-on > #arrow-icon {
        fill: var(--accent-color);
      }
      .state-unavailable {
        color: var(--state-icon-unavailable-color, #bdbdbd);
        pointer-events: none;
      }
      .icon-unavailable {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 32%;
      }
      .pause:active,
      .blindOpen:active,
      .closeButton:active {
        background-color: var(--header-card-picker-background) !important;
      }
      .pause:active > #arrow-icon {
        fill: var(--accent-color);
      }
    `]}};u([v({attribute:!1})],f.prototype,"hass",void 0),u([m()],f.prototype,"config",void 0),u([m()],f.prototype,"_params",void 0),u([v({attribute:!1})],f.prototype,"stateObj",void 0),u([m()],f.prototype,"curtainInfo",void 0),u([b(".sc-blind-selector-picker")],f.prototype,"picker",void 0),u([b(".sc-blind-selector-slide")],f.prototype,"slide",void 0),u([b(".sc-blind-selector-picture")],f.prototype,"picture",void 0),u([v({attribute:!1})],f.prototype,"isUpdating",void 0),u([v({attribute:!1})],f.prototype,"invertPercentage",void 0),f=u([g("curtain-dialog")],f);export{f as HuiConfirmCurtain,x as haStyleDialog};
