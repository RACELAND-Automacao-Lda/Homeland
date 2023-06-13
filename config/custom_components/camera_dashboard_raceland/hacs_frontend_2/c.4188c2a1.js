import{_ as t,d as i,g as s,x as e,q as a}from"./main-b570e60a.js";import{X as o,Z as r}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([a("hui-humidifier-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s()],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return o(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return e``;const t=this.hass.states[this._config.entity];return t?e`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .secondaryText=${t.attributes.humidity?`${this.hass.localize("ui.card.humidifier.humidity")}:\n            ${t.attributes.humidity} %${t.attributes.mode?` (${this.hass.localize(`state_attributes.humidifier.mode.${t.attributes.mode}`)||t.attributes.mode})`:""}`:""}
      >
        <ha-entity-toggle
          .hass=${this.hass}
          .stateObj=${t}
        ></ha-entity-toggle>
      </hui-generic-entity-row>
    `:e`
        <hui-warning>
          ${r(this.hass,this._config.entity)}
        </hui-warning>
      `}}]}}),i);
