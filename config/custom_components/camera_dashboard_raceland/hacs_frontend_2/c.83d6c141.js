import{_ as t,d as e,g as s,k as i,l as a,f as r,x as o,o as c,q as n}from"./main-b570e60a.js";import"./c.309a65b6.js";import{as as d}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.bc207e00.js";let h=t([n("hui-starting-card")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(t){}},{kind:"method",key:"updated",value:function(t){i(a(n.prototype),"updated",this).call(this,t),t.has("hass")&&this.hass.config&&this.hass.config.state!==d&&r(this,"config-refresh")}},{kind:"method",key:"render",value:function(){return this.hass?o`
      <div class="content">
        <ha-circular-progress active></ha-circular-progress>
        ${this.hass.localize("ui.panel.lovelace.cards.starting.description")}
      </div>
    `:o``}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: block;
        height: calc(100vh - var(--header-height));
      }
      ha-circular-progress {
        padding-bottom: 20px;
      }
      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}}]}}),e);export{h as HuiStartingCard};
