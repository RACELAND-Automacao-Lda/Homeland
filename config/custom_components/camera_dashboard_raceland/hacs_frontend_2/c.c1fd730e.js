import{_ as t,d as e,g as i,t as s,x as a,o as n,q as o}from"./main-b570e60a.js";import{s as c}from"./c.2aff7a3c.js";import{j as h,h as r,k as d}from"./c.5a5021e9.js";import{X as l,Z as u,$ as f}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([o("hui-input-select-entity-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return l(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const t=this.hass.states[this._config.entity];return t?a`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        hideName
      >
        <ha-select
          .label=${this._config.name||h(t)}
          .value=${t.state}
          .disabled=${r.includes(t.state)}
          naturalMenuWidth
          @selected=${this._selectedChanged}
          @click=${c}
          @closed=${c}
        >
          ${t.attributes.options?t.attributes.options.map((t=>a`<mwc-list-item .value=${t}
                    >${t}</mwc-list-item
                  >`)):""}
        </ha-select>
      </hui-generic-entity-row>
    `:a`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"field",static:!0,key:"styles",value:()=>n`
    hui-generic-entity-row {
      display: flex;
      align-items: center;
    }
    ha-select {
      width: 100%;
      --ha-select-min-width: 0;
    }
  `},{kind:"method",key:"_selectedChanged",value:function(t){const e=this.hass.states[this._config.entity],i=t.target.value;i!==e.state&&(d("light"),f(this.hass,e.entity_id,i))}}]}}),e);
