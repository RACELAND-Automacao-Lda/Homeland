import{_ as e,d as a,g as i,t,c as s,x as c,f as o,o as n,q as l}from"./main-b570e60a.js";import"./c.4dbb7445.js";import"./c.9e58f139.js";import{al as r,am as d,an as h,ar as m,ao as u,ap as f,as as p,aq as v}from"./c.5a5021e9.js";import{b as k}from"./c.08872315.js";import"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.f9bdd698.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";const g=r(k,d({title:h(m([u(),f()])),initial_view:h(u()),theme:h(u()),entities:p(u())})),_=["dayGridMonth","dayGridDay","listWeek"];let j=e([l("hui-calendar-card-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){v(e,g),this._config=e}},{kind:"field",key:"_schema",value:()=>s((e=>[{name:"",type:"grid",schema:[{name:"title",required:!1,selector:{text:{}}},{name:"initial_view",required:!1,selector:{select:{options:_.map((a=>[a,e(`ui.panel.lovelace.editor.card.calendar.views.${a}`)]))}}}]},{name:"theme",required:!1,selector:{theme:{}}}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const e=this._schema(this.hass.localize),a={initial_view:"dayGridMonth",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${a}
        .schema=${e}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <h3>
        ${this.hass.localize("ui.panel.lovelace.editor.card.calendar.calendar_entities")+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")"}
      </h3>
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this._config.entities}
        .includeDomains=${["calendar"]}
        @value-changed=${this._entitiesChanged}
      >
      </ha-entities-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){const a=e.detail.value;o(this,"config-changed",{config:a})}},{kind:"method",key:"_entitiesChanged",value:function(e){const a={...this._config,entities:e.detail.value};o(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"title"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.title"):this.hass.localize(`ui.panel.lovelace.editor.card.calendar.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>n`
    ha-form {
      display: block;
      overflow: auto;
    }
  `}]}}),a);export{j as HuiCalendarCardEditor};
