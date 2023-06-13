import{_ as t,d as e,g as a,t as i,H as o,R as s,k as n,l,S as r,x as c,y as d,U as h,L as m,f as u,o as p,q as f}from"./main-b570e60a.js";import{aP as g,a as v}from"./c.5a5021e9.js";import{F as _,c as b}from"./c.1d918317.js";import{W as y,Z as k}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";const w=["1","2","3","4","5","6","7","8","9","","0","clear"];t([f("hui-alarm-panel-card")],(function(t,e){class f extends e{constructor(...e){super(...e),t(this)}}return{F:f,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.4338e1c0.js"),document.createElement("hui-alarm-panel-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,a){return{type:"alarm-panel",states:["arm_home","arm_away"],entity:y(t,1,e,a,["alarm_control_panel"])[0]||""}}},{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"field",decorators:[o("#alarmCode")],key:"_input",value:void 0},{kind:"field",decorators:[a({type:String})],key:"layout",value:()=>"big"},{kind:"field",decorators:[i()],key:"_shouldRenderRipple",value:()=>!1},{kind:"field",decorators:[i()],key:"_show_lock",value:()=>!1},{kind:"field",decorators:[s("mwc-ripple")],key:"_ripple",value:void 0},{kind:"method",key:"getCardSize",value:async function(){if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&t.attributes.code_format===_?9:4}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity||"alarm_control_panel"!==t.entity.split(".")[0])throw new Error("Invalid configuration");this._config={states:["arm_away","arm_home"],...t}}},{kind:"method",key:"updated",value:function(t){if(n(l(f.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const e=t.get("hass"),a=t.get("_config");e&&a&&e.themes===this.hass.themes&&a.theme===this._config.theme||r(this,this.hass.themes,this._config.theme),!e||"disarmed"!==e.states[this._config.entity].state&&"arming"!==e.states[this._config.entity].state||"disarmed"===this.hass.states[this._config.entity].state||"arming"===this.hass.states[this._config.entity].state||(this._show_lock=!0,setTimeout((()=>{this._show_lock=!1}),1500))}},{kind:"method",key:"shouldUpdate",value:function(t){if(t.has("_config"))return!0;const e=t.get("hass");return!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale||e.states[this._config.entity]!==this.hass.states[this._config.entity]}},{kind:"method",key:"render",value:function(){var t,e,a;if(!this._config||!this.hass)return c``;const i=this.hass.states[this._config.entity];if(!i)return c`
        <hui-warning> ${k(this.hass)} </hui-warning>
      `;const o=this._stateDisplay(i.state);return console.log("CONFIG",this._config),c`
      ${"big"===this.layout?c`
            <ha-card>
              <div
                class=${d({blur_this_b:!0===this._show_lock,content_main:!1===this._show_lock})}
              >
                <h1
                  class=${d({"card-header":0!==(null===(t=this._config.states)||void 0===t?void 0:t.length),"card-header-center":0===(null===(e=this._config.states)||void 0===e?void 0:e.length)})}
                >
                  ${this._config.name||i.attributes.friendly_name||o}
                  <ha-chip
                    hasIcon
                    class=${d({[i.state]:!0})}
                    @click=${this._handleMoreInfo}
                  >
                    <ha-svg-icon
                      slot="icon"
                      .path=${g(i.state)}
                    >
                    </ha-svg-icon>
                    ${o}
                  </ha-chip>
                </h1>
                ${0===(null===(a=this._config.states)||void 0===a?void 0:a.length)?c``:c`
                      <div id="armActions" class="actions">
                        ${("disarmed"===i.state?this._config.states:["disarm"]).map((t=>c`
                            <mwc-button
                              .action=${t}
                              @click=${this._handleActionClick}
                              outlined
                            >
                              ${this._actionDisplay(t)}
                            </mwc-button>
                          `))}
                      </div>
                    `}
                ${i.attributes.code_format?c`
                      <ha-textfield
                        id="alarmCode"
                        .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                        type="password"
                        .inputmode=${i.attributes.code_format===_?"numeric":"text"}
                      ></ha-textfield>
                    `:c``}
                ${i.attributes.code_format!==_?c``:c`
                      <div id="keypad">
                        ${w.map((t=>""===t?c` <mwc-button disabled></mwc-button> `:c`
                                <mwc-button
                                  .value=${t}
                                  @click=${this._handlePadClick}
                                  outlined
                                  class=${d({numberkey:"clear"!==t})}
                                >
                                  ${"clear"===t?this.hass.localize("ui.card.alarm_control_panel.clear_code"):t}
                                </mwc-button>
                              `))}
                      </div>
                    `}
              </div>
              ${this._show_lock?c`
                    <svg
                      viewBox="-10 -8 70 70"
                      height="100%"
                      width="100%"
                      class="svg-icon"
                    >
                      <path
                        id="svg-lock"
                        d="M 25 3 C 18.3633 3 13 8.3633 13 15 L 13 20 L 37 20 L 37 15 C 37 8.3633 31.6367 3 25 3 Z M 25 5 C 30.5664 5 35 9.4336 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4336 19.4336 5 25 5 Z M 25 3"
                      />
                      <path
                        id="svg-base"
                        d="M 35 20 L 37 20 L 9 20 C 7.3008 20 6 21.3008 6 23 L 6 47 C 6 48.6992 7.3008 50 9 50 L 41 50 C 42.6992 50 44 48.6992 44 47 L 44 23 C 44 21.3008 42.6992 20 41 20 L 35 20 M 35 20 V 20 H 37 M 37 20 M 35 20 L 35 15 L 37 15 L 37 20 Z Z Z Z M 25 30 C 26.6992 30 28 31.3008 28 33 C 28 33.8984 27.6016 34.6875 27 35.1875 L 27 38 C 27 39.1016 26.1016 40 25 40 C 23.8984 40 23 39.1016 23 38 L 23 35.1875 C 22.3984 34.6875 22 33.8984 22 33 C 22 31.3008 23.3008 30 25 30 Z"
                      />
                    </svg>
                  `:c``}
            </ha-card>
          `:c`
            <ha-card
              @click=${this._handleMoreInfo}
              @focus=${this.handleRippleFocus}
              @blur=${this.handleRippleBlur}
              @mousedown=${this.handleRippleActivate}
              @mouseup=${this.handleRippleDeactivate}
              @touchstart=${this.handleRippleActivate}
              @touchend=${this.handleRippleDeactivate}
              @touchcancel=${this.handleRippleDeactivate}
              class=${d({"small-card":"small"===this.layout,"medium-card":"medium"===this.layout,unavailable:i.state===v})}
            >
              <div
                class=${d({blur_this_b:!0===this._show_lock,content_main:!1===this._show_lock})}
              >
                ${this._show_lock?c``:c`
                      <ha-svg-icon
                        class="ha-status-icon-small
                    ${d({[i.state.replace(/armed_\w+/g,"armed")]:!0})}
                  "
                        .path=${g(i.state)}
                      >
                      </ha-svg-icon>
                    `}
                ${this._show_lock?c``:c`
                      <div
                        class=${d({"label-small":"small"===this.layout,"label-medium":"medium"===this.layout})}
                      >
                        ${this._config.name||i.attributes.friendly_name||o}
                      </div>
                    `}
              </div>
              ${this._show_lock?c`
                    <svg
                      viewBox="-10 -8 70 70"
                      height="100%"
                      width="100%"
                      class="svg-icon"
                    >
                      <path
                        id="svg-lock"
                        d="M 25 3 C 18.3633 3 13 8.3633 13 15 L 13 20 L 37 20 L 37 15 C 37 8.3633 31.6367 3 25 3 Z M 25 5 C 30.5664 5 35 9.4336 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4336 19.4336 5 25 5 Z M 25 3"
                      />
                      <path
                        id="svg-base"
                        d="M 35 20 L 37 20 L 9 20 C 7.3008 20 6 21.3008 6 23 L 6 47 C 6 48.6992 7.3008 50 9 50 L 41 50 C 42.6992 50 44 48.6992 44 47 L 44 23 C 44 21.3008 42.6992 20 41 20 L 35 20 M 35 20 V 20 H 37 M 37 20 M 35 20 L 35 15 L 37 15 L 37 20 Z Z Z Z M 25 30 C 26.6992 30 28 31.3008 28 33 C 28 33.8984 27.6016 34.6875 27 35.1875 L 27 38 C 27 39.1016 26.1016 40 25 40 C 23.8984 40 23 39.1016 23 38 L 23 35.1875 C 22.3984 34.6875 22 33.8984 22 33 C 22 31.3008 23.3008 30 25 30 Z"
                      />
                    </svg>
                  `:c``}
              ${this._shouldRenderRipple?c`<mwc-ripple></mwc-ripple>`:""}
              ${i.state===v?c` <unavailable-icon></unavailable-icon>`:c``}
            </ha-card>
          `}
    `}},{kind:"field",key:"_rippleHandlers",value(){return new h((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",decorators:[m({passive:!0})],key:"handleRippleActivate",value:function(t){this._rippleHandlers.startPress(t)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"method",key:"_actionDisplay",value:function(t){return this.hass.localize(`ui.card.alarm_control_panel.${t}`)}},{kind:"method",key:"_stateDisplay",value:function(t){return t===v?this.hass.localize("state.default.unavailable"):this.hass.localize(`component.alarm_control_panel.state._.${t}`)||t}},{kind:"method",key:"_handlePadClick",value:function(t){const e=t.currentTarget.value;this._input.value="clear"===e?"":this._input.value+e}},{kind:"method",key:"_handleActionClick",value:function(t){const e=this._input;b(this.hass,this._config.entity,t.currentTarget.action,(null==e?void 0:e.value)||void 0),e&&(e.value="")}},{kind:"method",key:"_handleMoreInfo",value:function(){u(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return p`
      .unavailable {
        pointer-events: none;
      }
      unavailable-icon {
        position: absolute;
        top: 11px;
        right: 10%;
      }

      ha-card:focus {
        outline: none;
      }

      .ha-status-icon-small {
        width: 63%;
        /* margin-left: 5%; */
        height: auto;
        color: var(--paper-item-icon-color, #7b7b7b);
        --mdc-icon-size: 100%;
      }
      .svg-icon {
        fill: var(--paper-item-icon-color, #44739e);
      }

      ha-state-icon,
      span {
        outline: none;
      }
      unavailable-icon {
        position: absolute;
        top: 11px;
        right: 10%;
      }
      .state {
        font-size: 0.9rem;
        color: var(--secondary-text-color);
      }

      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        --alarm-color-autoarm: rgba(0, 153, 255, 0.1);
        --alarm-state-color: var(--alarm-color-armed);
      }
      .small-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 4% 0;
        font-size: 1.2rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        overflow: hidden;
        border-radius: 1.5rem;
        font-weight: 450;
        /* aspect-ratio: 1; */
      }
      .medium-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 4% 0;
        font-size: 1.8rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        overflow: hidden;
        border-radius: 1.5rem;
        font-weight: 450;
        /* aspect-ratio: 1; */
      }

      .label-small {
        padding: 5%;
        padding-bottom: 4%;
        margin-bottom: 4%;
        /* margin-left: 7%; */
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 100px;
        float: left;
        text-overflow: ellipsis;
      }

      .label-medium {
        padding: 5%;
        padding-bottom: 4%;
        margin-bottom: 4%;
        /* margin-left: 7%; */
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 160px;
        float: left;
        text-overflow: ellipsis;
      }

      ha-chip {
        --ha-chip-background-color: var(--alarm-state-color);
        --primary-text-color: var(--text-primary-color);
        line-height: initial;
      }

      .card-header {
        display: flex;
        padding: 0 6%;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 400;
        box-sizing: border-box;
      }
      .card-header-center {
        display: flex;
        padding: 0 6%;
        justify-content: space-between;
        flex-direction: column;
        height: 65px;
        align-items: center;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 400;
        box-sizing: border-box;
      }

      ha-chip {
        animation: none;
      }
      .unavailable {
        --alarm-state-color: var(--state-unavailable-color);
      }

      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
        animation: none;
      }

      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }

      .arming {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      .unavailable {
        --alarm-state-color: var(--state-unavailable-color);
      }

      .ha-status-icon-small.disarmed {
        fill: var(--alarm-color-disarmed);
        transition: 0.6s ease-out;
      }

      .ha-status-icon-small.triggered {
        fill: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }

      .ha-status-icon-small.arming {
        fill: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      .ha-status-icon-small.pending {
        fill: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      .ha-status-icon-small.armed {
        fill: var(--alarm-color-armed);
        transition: 0.6s ease-out;
      }
      ha-svg-icon {
        transition: 0.6s ease-out;
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

      @keyframes lock {
        0% {
          transform: matrix(1, 0, 0, 1, 0, -4.7);
          fill: var(--paper-item-icon-color, #44739e);
        }
        100% {
          transform: matrix(1, 0, 0, 1, 0, 0);
          fill: var(--accent-color);
        }
      }
      @keyframes lock-color {
        0% {
          fill: var(--paper-item-icon-color, #44739e);
        }
        100% {
          fill: var(--accent-color);
        }
      }

      ha-textfield {
        display: block;
        margin: 8px;
        max-width: 150px;
        text-align: center;
      }

      .state {
        margin-left: 16px;
        position: relative;
        bottom: 16px;
        color: var(--alarm-state-color);
        animation: none;
      }

      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
        max-width: 300px;
      }

      #keypad mwc-button {
        padding: 8px;
        width: 30%;
        box-sizing: border-box;
      }

      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .actions mwc-button {
        margin: 0 4px 4px;
      }

      mwc-button#disarm {
        color: var(--error-color);
      }

      mwc-button.numberkey {
        --mdc-typography-button-font-size: var(--keypad-font-size, 0.875rem);
      }

      .blur_this_b {
        transition: 0.8s ease-out;
        filter: blur(1.5rem);
      }
      .content_main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: 0.6s ease-out;
      }
      .svg-icon {
        position: absolute;
        width: 60%;
      }
      #svg-lock {
        animation: lock 1.5s ease-out;
      }
      #svg-base {
        animation: lock-color 1.5s ease-out;
      }
    `}}]}}),e);
