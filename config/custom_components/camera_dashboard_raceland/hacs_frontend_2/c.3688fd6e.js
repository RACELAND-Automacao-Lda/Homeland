import{_ as t,d as i,g as s,t as e,x as o,o as n,q as c}from"./main-b570e60a.js";import{h as a}from"./c.5a5021e9.js";import{X as r,Z as h}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([c("hui-lock-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return r(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o``;const t=this.hass.states[this._config.entity];return t?o`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <mwc-button
          @click=${this._callService}
          .disabled=${a.includes(t.state)}
          class="text-content"
        >
          ${"locked"===t.state?this.hass.localize("ui.card.lock.unlock"):this.hass.localize("ui.card.lock.lock")}
        </mwc-button>
      </hui-generic-entity-row>
    `:o`
        <hui-warning>
          ${h(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      mwc-button {
        margin-right: -0.57em;
      }
    `}},{kind:"method",key:"_callService",value:function(t){t.stopPropagation();const i=this.hass.states[this._config.entity];this.hass.callService("lock","locked"===i.state?"unlock":"lock",{entity_id:i.entity_id})}}]}}),i);
