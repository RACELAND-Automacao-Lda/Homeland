import{_ as e,d as a,g as t,t as i,x as s,f as o,q as r}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as c,am as n,an as l,ao as d,aq as m}from"./c.5a5021e9.js";import{b as u}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";const f=c(u,n({title:l(d()),url:l(d()),aspect_ratio:l(d())})),h=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"url",required:!0,selector:{text:{}}},{name:"aspect_ratio",selector:{text:{}}}]}];let p=e([r("hui-iframe-card-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){m(e,f),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${h}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:s``}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),a);export{p as HuiIframeCardEditor};
