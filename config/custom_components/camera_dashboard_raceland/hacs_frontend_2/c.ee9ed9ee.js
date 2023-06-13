import{_ as t,d as i,g as e,t as a,x as s,o as n,q as o}from"./main-b570e60a.js";import{s as h,a as r}from"./c.d092743c.js";import{j as d,h as u,U as c}from"./c.5a5021e9.js";import{X as l,Z as f}from"./c.4d0662f5.js";import"./c.4086c047.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.a6c70980.js";t([o("hui-input-datetime-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return l(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s``;const t=this.hass.states[this._config.entity];if(!t)return s`
        <hui-warning>
          ${f(this.hass,this._config.entity)}
        </hui-warning>
      `;const i=this._config.name||d(t);return s`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .hideName=${t.attributes.has_date&&t.attributes.has_time}
      >
        ${t.attributes.has_date?s`
              <ha-date-input
                .label=${t.attributes.has_time?i:void 0}
                .locale=${this.hass.locale}
                .disabled=${u.includes(t.state)}
                .value=${h(t)}
                @value-changed=${this._dateChanged}
              >
              </ha-date-input>
            `:""}
        ${t.attributes.has_time?s`
              <ha-time-input
                .value=${t.state===c?"":t.attributes.has_date?t.state.split(" ")[1]:t.state}
                .locale=${this.hass.locale}
                .disabled=${u.includes(t.state)}
                @value-changed=${this._timeChanged}
                @click=${this._stopEventPropagation}
              ></ha-time-input>
            `:""}
      </hui-generic-entity-row>
    `}},{kind:"method",key:"_stopEventPropagation",value:function(t){t.stopPropagation()}},{kind:"method",key:"_timeChanged",value:function(t){const i=this.hass.states[this._config.entity];r(this.hass,i.entity_id,t.detail.value,i.attributes.has_date?i.state.split(" ")[0]:void 0),t.target.blur()}},{kind:"method",key:"_dateChanged",value:function(t){const i=this.hass.states[this._config.entity];r(this.hass,i.entity_id,i.attributes.has_time?i.state.split(" ")[1]:void 0,t.detail.value),t.target.blur()}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-date-input + ha-time-input {
        margin-left: 4px;
      }
    `}}]}}),i);
