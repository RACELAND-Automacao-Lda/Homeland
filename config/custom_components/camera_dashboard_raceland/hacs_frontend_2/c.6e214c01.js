import{_ as e,d as i,g as t,t as s,x as a,f as o,o as n,q as r}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as c,am as d,as as h,an as m,ao as f,ax as l,aq as u}from"./c.5a5021e9.js";import"./c.591c1a78.js";import{p as g}from"./c.a01ae87b.js";import{e as p}from"./c.1d43e39e.js";import{b as _}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.ff74f86a.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.fbe33aec.js";const k=c(_,d({entities:h(p),title:m(f()),hours_to_show:m(l()),refresh_interval:m(l())})),b=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"hours_to_show",selector:{number:{min:1,mode:"box"}}},{name:"refresh_interval",selector:{number:{min:1,mode:"box"}}}]}];let v=e([r("hui-history-graph-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){u(e,k),this._config=e,this._configEntities=g(e.entities)}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${b}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <hui-entity-editor
        .hass=${this.hass}
        .entities=${this._configEntities}
        @entities-changed=${this._entitiesChanged}
      ></hui-entity-editor>
    `:a``}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_entitiesChanged",value:function(e){let i=this._config;i={...i,entities:e.detail.entities},this._configEntities=g(i.entities),o(this,"config-changed",{config:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>n`
    ha-form {
      margin-bottom: 24px;
    }
  `}]}}),i);export{v as HuiHistoryGraphCardEditor};
