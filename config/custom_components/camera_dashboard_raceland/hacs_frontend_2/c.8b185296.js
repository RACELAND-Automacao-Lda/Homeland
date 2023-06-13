import{_ as e,d as i,g as t,t as a,x as s,f as o,q as c}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as n,am as r,an as h,as as l,ao as d,ax as m,aq as u}from"./c.5a5021e9.js";import"./c.4dbb7445.js";import{b as f}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.509948f5.js";import"./c.0b900d77.js";const p=n(f,r({entities:h(l(d())),title:h(d()),hours_to_show:h(m()),theme:h(d())})),g=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"theme",selector:{theme:{}}},{name:"hours_to_show",selector:{number:{mode:"box",min:1}}}]}];let k=e([c("hui-logbook-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){u(e,p),this._config=e}},{kind:"get",key:"_entities",value:function(){return this._config.entities||[]}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${g}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <h3>
        ${`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})`}
      </h3>
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this._entities}
        @value-changed=${this._entitiesChanged}
      >
      </ha-entities-picker>
    `:s``}},{kind:"method",key:"_entitiesChanged",value:function(e){this._config={...this._config,entities:e.detail.value},o(this,"config-changed",{config:this._config})}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.logbook.${e.name}`)}}]}}),i);export{k as HuiLogbookCardEditor};
