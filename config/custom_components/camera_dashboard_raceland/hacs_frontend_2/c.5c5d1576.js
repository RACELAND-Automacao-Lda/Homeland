import{_ as i,d as e,t as o,x as r,J as n,o as t,q as d}from"./main-b570e60a.js";i([d("hui-divider-row")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){if(!i)throw new Error("Error in card configuration.");this._config=i}},{kind:"method",key:"render",value:function(){return this._config?r`<div
      style=${this._config.style?n(this._config.style):""}
    ></div>`:r``}},{kind:"get",static:!0,key:"styles",value:function(){return t`
      div {
        height: 1px;
        background-color: var(--entities-divider-color, var(--divider-color));
      }
    `}}]}}),e);
