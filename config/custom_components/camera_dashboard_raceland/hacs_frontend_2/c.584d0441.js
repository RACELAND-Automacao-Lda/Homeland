import{_ as t,d as i,g as e,t as o,x as s,q as n}from"./main-b570e60a.js";import{L as a,e as r}from"./c.5a5021e9.js";import{U as c}from"./c.4d0662f5.js";import"./c.d3b46975.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let d=t([n("hui-buttons-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"method",static:!0,key:"getStubConfig",value:function(){return{entities:[]}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(t){this._configEntities=c(t.entities).map((t=>({tap_action:{action:t.entity&&a.has(r(t.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},...t})))}},{kind:"method",key:"render",value:function(){return s`
      <hui-buttons-base
        .hass=${this.hass}
        .configEntities=${this._configEntities}
      ></hui-buttons-base>
    `}}]}}),i);export{d as HuiButtonsRow};
