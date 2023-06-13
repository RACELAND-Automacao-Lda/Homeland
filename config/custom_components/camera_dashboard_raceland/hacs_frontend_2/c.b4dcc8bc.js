import{_ as t,d as e,g as s,t as i,x as a,o as n,q as o}from"./main-b570e60a.js";import{s as c}from"./c.2aff7a3c.js";import{j as r,a as h,k as d}from"./c.5a5021e9.js";import{X as l,Z as u,a0 as f}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([o("hui-select-entity-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return l(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const t=this.hass.states[this._config.entity];return t?a`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        hideName
      >
        <ha-select
          .label=${this._config.name||r(t)}
          .value=${t.state}
          .disabled=${t.state===h}
          naturalMenuWidth
          @selected=${this._selectedChanged}
          @click=${c}
          @closed=${c}
        >
          ${t.attributes.options?t.attributes.options.map((e=>a`
                    <mwc-list-item .value=${e}
                      >${t.attributes.device_class&&this.hass.localize(`component.select.state.${t.attributes.device_class}.${e}`)||this.hass.localize(`component.select.state._.${e}`)||e}
                    </mwc-list-item>
                  `)):""}
        </ha-select>
      </hui-generic-entity-row>
    `:a`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      hui-generic-entity-row {
        display: flex;
        align-items: center;
      }
      ha-select {
        width: 100%;
      }
    `}},{kind:"method",key:"_selectedChanged",value:function(t){const e=this.hass.states[this._config.entity],s=t.target.value;s!==e.state&&(d("light"),f(this.hass,e.entity_id,s))}}]}}),e);
