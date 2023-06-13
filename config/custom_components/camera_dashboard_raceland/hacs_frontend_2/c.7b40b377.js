import{_ as t,d as i,g as e,k as a,l as o,S as s,x as n,Q as c,y as h,o as r,q as d}from"./main-b570e60a.js";import{Q as l,R as u,T as f}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let g=t([d("hui-picture-card")],(function(t,i){class d extends i{constructor(...i){super(...i),t(this)}}return{F:d,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.9f2969f7.js"),document.createElement("hui-picture-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"/local/logoauto_og.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return 1!==t.size||!t.has("hass")||!t.get("hass")}},{kind:"method",key:"updated",value:function(t){if(a(o(d.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||s(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?n`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${l({hasHold:u(this._config.hold_action),hasDoubleClick:u(this._config.double_tap_action)})}
        tabindex=${c(u(this._config.tap_action)?"0":void 0)}
        class=${h({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)})}
      >
        <img src=${this.hass.hassUrl(this._config.image)} />
      </ha-card>
    `:n``}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-card {
        overflow: hidden;
        height: 100%;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
      }

      ha-card.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(t){f(this,this.hass,this._config,t.detail.action)}}]}}),i);export{g as HuiPictureCard};
