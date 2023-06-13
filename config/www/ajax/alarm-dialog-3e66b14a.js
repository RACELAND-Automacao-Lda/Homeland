import{i,s as t,n as a,l as e,k as o,_ as r,y as s,o as n,U as l,a as d,b as c,c as h,e as g,t as m,d as p,f as v}from"./ajax-card-709e51c3.js";const u=i`
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
  `,b=["1","2","3","4","5","6","7","8","9","","0","clear"],f=["arm_away","arm_home","fire_alarm"],x=["disarm"],y="text",w="number";let _=class extends t{constructor(){super(...arguments),this._shouldRenderRipple=!0}async showDialog(i){this._params=i,this.alarmInfo=this._params.alarmInfo,this.config=this.alarmInfo}closeDialog(){this._params=void 0,a(this,"dialog-closed",{dialog:this.localName})}async firstUpdated(i){super.firstUpdated(i),a(this,"config-changed",{config:this.config})}setConfig(i){if(!i)throw new Error(e("common.invalid_configuration"));i.test_gui&&o().setEditMode(!0)}shouldUpdate(i){return!!this.config&&r(this,i,!0)}render(){var i,t,a,o,r,h,g,m,p,v,u,b,f,x,y,w;return this.config.show_warning?this._showWarning(e("common.show_warning")):this.config.show_error?this._showError(e("common.show_error")):this._params?(this.stateObj=this.hass.states[this.config.entity],s`
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
              >
              ${this.config.name?this.config.name:this.config.entity}
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
            <div class="states">
              <div class="state-icon">
              <ha-svg-icon
              id="state-icon"
                class=${n({[null===(i=this.stateObj)||void 0===i?void 0:i.state.replace(/armed_\w+/g,"armed")]:!0,"state-unavailable":(null===(t=this.stateObj)||void 0===t?void 0:t.state)===l})}
                  slot="icon"
                  .path=${d(null===(a=this.stateObj)||void 0===a?void 0:a.state)}
                >
                </ha-svg-icon>
              </div>
              <div class="state-name">
                  ${e("states."+(null===(o=this.stateObj)||void 0===o?void 0:o.state))}
              </div>
            </div>
            <div class="actions">
              <ha-card
                    class=${n({"button-disarm-on":"disarmed"===(null===(r=this.stateObj)||void 0===r?void 0:r.state)})}
                  .action=${"disarmed"}
                  @click=${this._handleActionDisarm}
                  outlined
                  role="button"
              >
                ${this._shouldRenderRipple?s`<mwc-ripple></mwc-ripple>`:null}
                <div class="tile">
                  <div class="icon-container" role="button" tabindex="0">
                          <ha-svg-icon
                          class="disarmed"
                            .path=${d("disarmed")}
                            style=${c({height:this.config.icon_height?this.config.icon_height:""})}
                          ></ha-svg-icon>
                  </div>
                  <div class="info" role="button" tabindex="0">
                  <span
                    class=${n({primary:!1===this.hass.themes.darkMode,"primary-dark":!0===this.hass.themes.darkMode,unavailable:(null===(h=this.stateObj)||void 0===h?void 0:h.state)===l,"primary-on":"disarmed"===(null===(g=this.stateObj)||void 0===g?void 0:g.state)&&!0===this.hass.themes.darkMode})}
                  >${e("states.disarmed")}</span>
                  </div>
                </div>
              </ha-card>
              <ha-card
                    class=${n({"button-armed-on":"armed_night"===(null===(m=this.stateObj)||void 0===m?void 0:m.state)})}
                  .action=${"armed_night"}
                  @click=${this._handleActionArmHome}
                  outlined
                  role="button"
              >
                ${this._shouldRenderRipple?s`<mwc-ripple></mwc-ripple>`:null}
                <div class="tile">
                  <div class="icon-container" role="button" tabindex="0">
                          <ha-svg-icon
                          class="armed-night"
                            .path=${d("armed_night")}
                            style=${c({height:this.config.icon_height?this.config.icon_height:""})}
                          ></ha-svg-icon>
                  </div>
                  <div class="info" role="button" tabindex="0">
                  <span
                    class=${n({primary:!1===this.hass.themes.darkMode,"primary-dark":!0===this.hass.themes.darkMode,unavailable:(null===(p=this.stateObj)||void 0===p?void 0:p.state)===l,"primary-on":"armed_night"===(null===(v=this.stateObj)||void 0===v?void 0:v.state)&&!0===this.hass.themes.darkMode})}
                  >${e("states.armed_night")}</span>
                  </div>
                </div>
              </ha-card>
              <ha-card
                    class=${n({"button-armed-on":"armed_away"===(null===(u=this.stateObj)||void 0===u?void 0:u.state)})}
                  .action=${"armed_away"}
                  @click=${this._handleActionArmAway}
                  outlined
                  role="button"
              >
                ${this._shouldRenderRipple?s`<mwc-ripple></mwc-ripple>`:null}
                <div class="tile">
                  <div class="icon-container" role="button" tabindex="0">
                          <ha-svg-icon
                          class="armed-away"
                            .path=${d("armed_away")}
                            style=${c({height:this.config.icon_height?this.config.icon_height:""})}
                          ></ha-svg-icon>
                  </div>
                  <div class="info" role="button" tabindex="0">
                  <span
                    class=${n({primary:!1===this.hass.themes.darkMode,"primary-dark":!0===this.hass.themes.darkMode,unavailable:(null===(b=this.stateObj)||void 0===b?void 0:b.state)===l,"primary-on":"armed_away"===(null===(f=this.stateObj)||void 0===f?void 0:f.state)&&!0===this.hass.themes.darkMode})}
                  >${e("states.armed_away")}</span>
                  </div>
                </div>
              </ha-card>
              <ha-card
                    class=${n({"button-armed-on":"triggered"===(null===(x=this.stateObj)||void 0===x?void 0:x.state)})}
                  .action=${"triggered"}
                  @click=${this._handleActionTrigger}
                  outlined
                  role="button"
              >
                ${this._shouldRenderRipple?s`<mwc-ripple></mwc-ripple>`:null}
                <div class="tile">
                  <div class="icon-container" role="button" tabindex="0">
                          <ha-svg-icon
                          class="triggered"
                            .path=${d("triggered")}
                            style=${c({height:this.config.icon_height?this.config.icon_height:""})}
                          ></ha-svg-icon>
                  </div>
                  <div class="info" role="button" tabindex="0">
                  <span
                    class=${n({primary:!1===this.hass.themes.darkMode,"primary-dark":!0===this.hass.themes.darkMode,unavailable:(null===(y=this.stateObj)||void 0===y?void 0:y.state)===l,"primary-on":"triggered"===(null===(w=this.stateObj)||void 0===w?void 0:w.state)&&!0===this.hass.themes.darkMode})}
                  >${e("actions.trigger")}</span>
                  </div>
                </div>
              </ha-card>
            </div>
          </div>
          <div slot="secondaryAction" class="options">
            <mwc-button class="button-cancel" @click=${this._cancel}>
            cancelar</mwc-button>
          </div>
        </ha-dialog>
    `):s``}_handleActionDisarm(){this.hass.callService("switch","toggle",{entity_id:this.config.entity_disarm})}_handleActionArmAway(){this.hass.callService("switch","toggle",{entity_id:this.config.entity_arm_away})}_handleActionArmHome(){this.hass.callService("switch","toggle",{entity_id:this.config.entity_arm_home})}_handleActionTrigger(){this.hass.callService("switch","toggle",{entity_id:this.config.entity_trigger})}_cancel(i){i&&i.stopPropagation(),this.closeDialog()}_showWarning(i){return s`
      <hui-warning>${i}</hui-warning>
    `}_showError(i){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:i,origConfig:this.config}),s`
      ${t}
    `}static get styles(){return[u,i`
      #state-icon.triggered {
        fill: #CC1B00;
        animation: pulse 1s infinite;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .states {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        margin-top: 30px;
      }
      .state-icon {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 85px;
        align-items: center;
      }
      .state-name {
        margin-top: 10px;
        font-weight: 500;
        font-size: 15px;
      }
      #state-icon {
        width: 100px;
        height: 88px;
      }
      .actions{
        /* margin: 20px auto; */
        width:330px;
        height:140px;
        display:grid;
        grid-template-columns: 160px 160px;
        grid-row: auto auto;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
      }
      .button-disarm-on {
        background-color: #D6E4C5 !important;
        transition: 0.6s ease-out;
      }
      .button-armed-on {
        background-color: #FFA99C !important;
        transition: 0.6s ease-out;
      }
      ha-header-bar {
        --mdc-theme-on-primary: var(--primary-text-color);
        --mdc-theme-primary: var(--mdc-theme-surface);
        flex-shrink: 0;
        }
        #icons {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          align-content: center;
          width: 84%;
          height: 50px;
          margin-bottom: 4%;
        }
        state-card-content {
          margin-bottom: 5%;
        }
        ha-svg-icon {
          width: 24px;
          height: 24px;
        }
        .disarmed {
          fill: var(--alarm-color-disarmed, var(--label-badge-green));
        }
        .armed-night {
          fill: var(--alarm-color-armed, var(--label-badge-red));
        }
        .armed-away {
          fill: var(--alarm-color-armed, var(--label-badge-red));
        }
        .armed {
          fill: var(--alarm-color-armed, var(--label-badge-red));
        }
        .triggered {
          fill: #CC1B00;
        }
        .contentFather {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding-bottom: 30px;
        }
        unavailable-icon {
            position: absolute;
            top: 42%;
            scale: 2.5;
        }
        @media all and (max-width: 600px) {
            .contentFather {
                /* margin-top: 35%; */
                display: flex;
                justify-content: center;
            }
            unavailable-icon {
                position: absolute;
                top: 36%;
                scale: 2.5;
            }
            state-card-content {
              margin-bottom: 25%;
            }
            #icons {
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              align-content: center;
              width: 107%;
              height: 50px;
              margin-bottom: 4%;
            }
        }
        .main-title {
            user-select: none;
            -webkit-user-select : none;
            -moz-user-select    : none;
            -khtml-user-select  : none;
            -ms-user-select     : none;
        }
        .state {
      font-size: 0.9rem;
      color: var(--secondary-text-color);
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 90%;
    }
    .primary {
      height: 20px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: var(--primary-text-color);
    }
    .primary-dark {
      height: 20px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: var(--primary-text-color);
    }
    .primary-on {
      height: 20px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: var( --primary-background-color, var(--primary-background) );
    }
    .secondary {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    :host {
      --tile-color: rgb(var(--rgb-state-inactive-color));
      -webkit-tap-highlight-color: transparent;
      background: var( --ha-card-background, var(--card-background-color, white) );
      border-radius: var(--ha-card-border-radius, 4px);
    }
    ha-card:has(ha-tile-info:focus-visible) {
      border-color: var(--tile-color);
      box-shadow: 0 0 0 1px var(--tile-color);
    }
    ha-card {
      --mdc-ripple-color: var(--tile-color);
      height: 100%;
      overflow: hidden;
      background: var( --primary-background-color, var(--primary-background) );
      // For safari overflow hidden
      z-index: 0;
    }
    ha-card.disabled {
      --tile-color: rgb(var(--rgb-disabled-color));
    }
    [role="button"] {
      cursor: pointer;
    }
    [role="button"]:focus {
      outline: none;
    }
    .tile {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .icon-container {
      width: 17%;
      position: relative;
      flex: none;
      margin-right: 12px;
      margin-inline-start: 12px;
      margin-inline-end: initial;
      direction: var(--direction);
      transition: transform 180ms ease-in-out;
    }
    .icon-container .icon {
      --tile-icon-color: var(--tile-color);
    }
    .icon-container .badge {
      position: absolute;
      top: -3px;
      right: -3px;
    }
    .icon-container[role="button"]:focus-visible,
    .icon-container[role="button"]:active {
      transform: scale(1.2);
    }
    .info {
      position: relative;
      padding: 10px 7px;
      flex: 1;
      min-width: 0;
      min-height: 40px;
      transition: background-color 180ms ease-in-out;
    }
    ha-svg-icon {
      --mdc-icon-size: 97%;
    }
    `]}};h([g({attribute:!1})],_.prototype,"hass",void 0),h([m()],_.prototype,"config",void 0),h([m()],_.prototype,"_params",void 0),h([m()],_.prototype,"alarmInfo",void 0),h([g({attribute:!1})],_.prototype,"stateObj",void 0),h([p("#alarmCode")],_.prototype,"_input",void 0),h([m()],_.prototype,"_shouldRenderRipple",void 0),_=h([v("alarm-dialog")],_);export{f as ARM_ACTIONS,b as BUTTONS,x as DISARM_ACTIONS,w as FORMAT_NUMBER,y as FORMAT_TEXT,_ as HuiMoreInfoAlarm,u as haStyleDialog};
