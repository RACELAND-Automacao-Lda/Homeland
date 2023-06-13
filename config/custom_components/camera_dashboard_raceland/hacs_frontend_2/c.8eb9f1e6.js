import{_ as e,d as i,g as t,t as a,x as s,f as n,q as o}from"./main-b570e60a.js";import{al as c,am as h,an as l,ao as r,aq as d}from"./c.5a5021e9.js";import"./c.509948f5.js";import"./c.6d56dc75.js";import{b as u}from"./c.08872315.js";import"./c.2aff7a3c.js";import"./c.0b900d77.js";const f=c(u,h({entity:l(r()),theme:l(r())})),g=["media_player"];let m=e([o("hui-media-control-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){d(e,f),this._config=e}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_theme",value:function(){return this._config.theme||""}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          .includeDomains=${g}
          @change=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
        <!-- <hui-theme-select-editor
          .hass=${this.hass}
          .value=${this._theme}
          .configValue=${"theme"}
          @value-changed=${this._valueChanged}
        ></hui-theme-select-editor> -->
      </div>
    `:s``}},{kind:"method",key:"_valueChanged",value:function(e){if(!this._config||!this.hass)return;const i=e.target;this[`_${i.configValue}`]!==i.value&&(i.configValue&&(""===i.value?(this._config={...this._config},delete this._config[i.configValue]):this._config={...this._config,[i.configValue]:i.value}),n(this,"config-changed",{config:this._config}))}}]}}),i);export{m as HuiMediaControlCardEditor};
