import{_ as t,d as e,g as a,t as s,k as i,l as o,x as r,o as c}from"./main-b570e60a.js";import{z as d,s as n}from"./c.5a5021e9.js";import{C as h,S as l,f as m,u as f}from"./c.4d0662f5.js";import"./c.81a9389e.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.a5b80b3f.js";let u=t(null,(function(t,e){class u extends e{constructor(...e){super(...e),t(this)}}return{F:u,d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[s()],key:"_cameraPrefs",value:void 0},{kind:"field",decorators:[s()],key:"_attached",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){i(o(u.prototype),"connectedCallback",this).call(this),this._attached=!0}},{kind:"method",key:"disconnectedCallback",value:function(){i(o(u.prototype),"disconnectedCallback",this).call(this),this._attached=!1}},{kind:"method",key:"render",value:function(){return this._attached&&this.hass&&this.stateObj?r`
      <ha-camera-stream
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        allow-exoplayer
        controls
      ></ha-camera-stream>
      ${this._cameraPrefs,void 0}
    `:r``}},{kind:"method",key:"updated",value:function(t){if(!t.has("stateObj"))return;const e=t.get("stateObj"),a=e?e.entity_id:void 0,s=this.stateObj?this.stateObj.entity_id:void 0;s!==a&&s&&d(this.hass,"stream")&&n(this.stateObj,h)&&this.stateObj.attributes.frontend_stream_type===l&&this._fetchCameraPrefs()}},{kind:"method",key:"_fetchCameraPrefs",value:async function(){this._cameraPrefs=await m(this.hass,this.stateObj.entity_id)}},{kind:"method",key:"_handleCheckboxChanged",value:async function(t){const e=t.currentTarget;try{this._cameraPrefs=await f(this.hass,this.stateObj.entity_id,{preload_stream:e.checked})}catch(t){alert(t.message),e.checked=!e.checked}}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: block;
        position: relative;
        padding-bottom: 20px;
      }
      ha-formfield {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding-right: 16px;
        border-bottom-left-radius: 4px;
      }
    `}}]}}),e);customElements.define("more-info-camera",u);
