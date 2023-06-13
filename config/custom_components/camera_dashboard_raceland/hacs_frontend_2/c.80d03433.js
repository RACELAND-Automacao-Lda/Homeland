import{_ as e,d as t,g as i,t as a,x as s,f as o,q as n}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as c,am as r,an as h,ar as m,ao as l,ax as d,ap as f,as as u,aq as _}from"./c.5a5021e9.js";import"./c.591c1a78.js";import{p as g}from"./c.a01ae87b.js";import{e as p}from"./c.1d43e39e.js";import{b}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.ff74f86a.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.fbe33aec.js";const k=c(b,r({title:h(m([l(),d()])),theme:h(l()),columns:h(d()),show_name:h(f()),show_state:h(f()),show_icon:h(f()),state_color:h(f()),entities:u(p)})),j=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"columns",selector:{number:{min:1,mode:"box"}}},{name:"theme",selector:{theme:{}}}]},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"state_color",selector:{boolean:{}}}];let v=e([n("hui-glance-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[a()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){_(e,k),this._config=e,this._configEntities=g(e.entities)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return s``;const e={show_name:!0,show_icon:!0,show_state:!0,...this._config};return s`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${j}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <hui-entity-editor
        .hass=${this.hass}
        .entities=${this._configEntities}
        @entities-changed=${this._entitiesChanged}
      ></hui-entity-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;o(this,"config-changed",{config:t})}},{kind:"method",key:"_entitiesChanged",value:function(e){let t=this._config;t={...t,entities:e.detail.entities},this._configEntities=g(this._config.entities),o(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.glance.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),t);export{v as HuiGlanceCardEditor};
