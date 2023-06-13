import{_ as i,d as t,g as e,x as o,Q as a,y as n,o as s,q as c}from"./main-b570e60a.js";import{Q as r,R as d,T as h}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let l=i([c("hui-picture-header-footer")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"method",static:!0,key:"getStubConfig",value:function(){return{image:"https://www.home-assistant.io/images/lovelace/header-footer/balloons-header.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"type",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(i){if(!i||!i.image)throw new Error("Image required");this._config=i}},{kind:"method",key:"shouldUpdate",value:function(i){return 1!==i.size||!i.has("hass")||!i.get("hass")}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o``;const i=Boolean(this._config.tap_action||this._config.hold_action);return o`
      <img
        @action=${this._handleAction}
        .actionHandler=${r({hasHold:d(this._config.hold_action),hasDoubleClick:d(this._config.double_tap_action)})}
        tabindex=${a(i?0:void 0)}
        class=${n({clickable:i})}
        src=${this.hass.hassUrl(this._config.image)}
      />
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      img.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(i){h(this,this.hass,this._config,i.detail.action)}}]}}),t);export{l as HuiPictureHeaderFooter};
