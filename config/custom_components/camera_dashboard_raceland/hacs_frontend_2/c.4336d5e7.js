import{_ as t,d as i,g as s,t as e,x as n,o,q as a}from"./main-b570e60a.js";import{e as r,L as h}from"./c.5a5021e9.js";import{X as c,Z as u,o as d}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([a("hui-group-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"_computeCanToggle",value:function(t,i){return i.some((i=>{const s=r(i);var e;return"group"===s?this._computeCanToggle(t,null===(e=this.hass)||void 0===e?void 0:e.states[i].attributes.entity_id):h.has(s)}))}},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return c(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n``;const t=this.hass.states[this._config.entity];return t?n`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${this._computeCanToggle(this.hass,t.attributes.entity_id)?n`
              <ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${t}
              ></ha-entity-toggle>
            `:n`
              <div class="text-content">
                ${d(this.hass.localize,t,this.hass.locale)}
              </div>
            `}
      </hui-generic-entity-row>
    `:n`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return o``}}]}}),i);
