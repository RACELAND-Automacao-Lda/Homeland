import{_ as t,d as i,g as s,t as e,x as a,o as n,q as o}from"./main-b570e60a.js";import{X as r,Z as c}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([o("hui-climate-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return r(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const t=this.hass.states[this._config.entity];return t?a`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <ha-climate-state .hass=${this.hass} .stateObj=${t}>
        </ha-climate-state>
      </hui-generic-entity-row>
    `:a`
        <hui-warning>
          ${c(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-climate-state {
        text-align: right;
      }
    `}}]}}),i);
