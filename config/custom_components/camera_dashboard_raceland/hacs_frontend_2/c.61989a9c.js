import{_ as a,d as e,g as t,t as i,x as s,f as o,q as r}from"./main-b570e60a.js";import{al as n,am as c,an as l,ao as d,ap as h,aq as m}from"./c.5a5021e9.js";import"./c.9e58f139.js";import{b as u}from"./c.08872315.js";import"./c.2aff7a3c.js";import"./c.f9bdd698.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";const f=n(u,c({area:l(d()),navigation_path:l(d()),theme:l(d()),show_camera:l(h())})),p=[{name:"area",selector:{area:{}}},{name:"show_camera",required:!1,selector:{boolean:{}}},{name:"",type:"grid",schema:[{name:"navigation_path",required:!1,selector:{text:{}}},{name:"theme",required:!1,selector:{theme:{}}}]}];let v=a([r("hui-area-card-editor")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(a){m(a,f),this._config=a}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${p}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:s``}},{kind:"method",key:"_valueChanged",value:function(a){const e=a.detail.value;o(this,"config-changed",{config:e})}},{kind:"field",key:"_computeLabelCallback",value(){return a=>{switch(a.name){case"area":return this.hass.localize("ui.panel.lovelace.editor.card.area.name");case"navigation_path":return this.hass.localize("ui.panel.lovelace.editor.action-editor.navigation_path")}return this.hass.localize(`ui.panel.lovelace.editor.card.area.${a.name}`)}}}]}}),e);export{v as HuiAreaCardEditor};
