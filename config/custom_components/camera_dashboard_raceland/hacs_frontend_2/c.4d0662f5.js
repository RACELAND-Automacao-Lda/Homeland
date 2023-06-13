import{e,i as t,n,m as i,B as a,A as o,s as r,r as s,a as l,b as c,f as d,c as u,_ as h,d as f,g as p,t as v,x as g,h as m,j as y,k as b,l as _,o as k,p as w,q as x,u as E,v as S,P as T,w as D,y as C,z as A,C as $,D as R,E as I,F as O,G as M,H as z,I as j,J as N,K as P,L as H,M as L,N as B,O as U,T as F,Q as V,R as W,S as G,U as q,V as Y,W as Q,X as Z,Y as X,Z as J,$ as K,a0 as ee,a1 as te,a2 as ne,a3 as ie,a4 as ae,a5 as oe,a6 as re,a7 as se,a8 as le,a9 as ce,aa as de,ab as ue,ac as he,ad as fe,ae as pe,af as ve,ag as ge,ah as me,ai as ye,aj as be,ak as _e,al as ke,am as we,an as xe,ao as Ee,ap as Se,aq as Te,ar as De,as as Ce,at as Ae,au as $e,av as Re,aw as Ie,ax as Oe}from"./main-b570e60a.js";import{c as Me,e as ze,a as je}from"./c.84af24de.js";import"./c.17776df6.js";import{p as Ne,u as Pe,U as He,a as Le,i as Be,f as Ue,c as Fe,b as Ve,d as We,e as Ge,B as qe,g as Ye,h as Qe,s as Ze,D as Xe,j as Je,k as Ke,S as et,l as tt,m as nt,n as it,o as at,q as ot,r as rt,t as st,v as lt,w as ct,x as dt,y as ut,z as ht,A as ft,C as pt,E as vt,F as gt,G as mt,H as yt,I as bt,J as _t,K as kt,L as wt,M as xt,N as Et,O as St,P as Tt,Q as Dt,R as Ct,T as At,V as $t,W as Rt,X as It,Y as Ot,Z as Mt,_ as zt,$ as jt,a0 as Nt,a1 as Pt,a2 as Ht,a3 as Lt,a4 as Bt,a5 as Ut,a6 as Ft,a7 as Vt}from"./c.5a5021e9.js";import{s as Wt,n as Gt,d as qt}from"./c.2aff7a3c.js";import{e as Yt}from"./c.309a65b6.js";import{c as Qt}from"./c.bc207e00.js";const Zt=e(class extends t{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){if(n(this.it)&&(!n(t)||this.it.strings!==t.strings)){const t=i(e).pop();let n=this.et.get(this.it.strings);if(void 0===n){const e=document.createDocumentFragment();n=a(o,e),n.setConnected(!1),this.et.set(this.it.strings,n)}r(n,[t]),s(n,void 0,t)}if(n(t)){if(!n(this.it)||this.it.strings!==t.strings){const n=this.et.get(t.strings);if(void 0!==n){const t=i(n).pop();l(e),s(e,void 0,t),r(e,[t])}}this.it=t}else this.it=void 0;return this.render(t)}}),Xt=(e,t)=>{const n=(null==t?void 0:t.replace)||!1;var i;n?c.history.replaceState(null!==(i=c.history.state)&&void 0!==i&&i.root?{root:!0}:null,"",e):c.history.pushState(null,"",e),d(c,"location-changed",{replace:n})},Jt="NOT_RUNNING";Ne&&await Ne;const Kt=(e,t)=>en(t).format(e),en=u((e=>new Intl.DateTimeFormat("en"!==e.language||Pe(e)?e.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:Pe(e)}))),tn=(e,t)=>nn(t).format(e),nn=u((e=>new Intl.DateTimeFormat("en"!==e.language||Pe(e)?e.language:"en-u-hc-h23",{hour:Pe(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Pe(e)}))),an=(e,t)=>on(t).format(e),on=u((e=>new Intl.DateTimeFormat("en"!==e.language||Pe(e)?e.language:"en-u-hc-h23",{weekday:"long",hour:Pe(e)?"numeric":"2-digit",minute:"2-digit",hour12:Pe(e)}))),rn=(e,t,n,i)=>{const a=void 0!==i?i:t.state;if(a===He||a===Le)return e(`state.default.${a}`);if(Be(t)){if("monetary"===t.attributes.device_class)try{return Ue(a,n,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return`${Ue(a,n)}${t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:""}`}const o=Fe(t);if("input_datetime"===o){if(void 0===i){let e;return t.attributes.has_date&&t.attributes.has_time?(e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),Ve(e,n)):t.attributes.has_date?(e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),We(e,n)):t.attributes.has_time?(e=new Date,e.setHours(t.attributes.hour,t.attributes.minute),Kt(e,n)):t.state}try{const e=i.split(" ");if(2===e.length)return Ve(new Date(e.join("T")),n);if(1===e.length){if(i.includes("-"))return We(new Date(`${i}T00:00`),n);if(i.includes(":")){const e=new Date;return Kt(new Date(`${e.toISOString().split("T")[0]}T${i}`),n)}}return i}catch(e){return i}}if("humidifier"===o&&"on"===a&&t.attributes.humidity)return`${t.attributes.humidity} %`;if("counter"===o||"number"===o||"input_number"===o)return Ue(a,n);if("button"===o||"input_button"===o||"scene"===o||"sensor"===o&&"timestamp"===t.attributes.device_class)try{return Ve(new Date(a),n)}catch(e){return a}return t.attributes.device_class&&e(`component.${o}.state.${t.attributes.device_class}.${a}`)||e(`component.${o}.state._.${a}`)||a},sn="ui.components.logbook.messages",ln=["proximity","sensor"],cn={},dn=async(e,t,n,i,a)=>{const o=await e.loadBackendTranslation("device_class");return un(e,o,await hn(e,t,n,i,a))},un=(e,t,n)=>{for(const i of n){const n=e.states[i.entity_id];i.state&&n&&(i.message=pn(e,t,i.state,n,Ge(i.entity_id)))}return n},hn=async(e,t,n,i,a)=>{const o="*";i||(i=o);const r=`${t}${n}`;if(cn[r]||(cn[r]={}),i in cn[r])return cn[r][i];if(i!==o&&cn[r][o]){return(await cn[r][o]).filter((e=>e.entity_id===i))}return cn[r][i]=fn(e,t,n,i!==o?i:void 0,a).then((e=>e.reverse())),cn[r][i]},fn=async(e,t,n,i,a,o)=>{const r=new URLSearchParams;return n&&r.append("end_time",n),i&&r.append("entity",i),a&&r.append("entity_matches_only",""),o&&r.append("context_id",o),e.callApi("GET",`logbook/${t}?${r.toString()}`)},pn=(e,t,n,i,a)=>{switch(a){case"device_tracker":case"person":return"not_home"===n?t(`${sn}.was_away`):"home"===n?t(`${sn}.was_at_home`):t(`${sn}.was_at_state`,"state",n);case"sun":return t("above_horizon"===n?`${sn}.rose`:`${sn}.set`);case"binary_sensor":{const e=n===qe,a=n===Ye,o=i.attributes.device_class;switch(o){case"battery":if(e)return t(`${sn}.was_low`);if(a)return t(`${sn}.was_normal`);break;case"connectivity":if(e)return t(`${sn}.was_connected`);if(a)return t(`${sn}.was_disconnected`);break;case"door":case"garage_door":case"opening":case"window":if(e)return t(`${sn}.was_opened`);if(a)return t(`${sn}.was_closed`);break;case"lock":if(e)return t(`${sn}.was_unlocked`);if(a)return t(`${sn}.was_locked`);break;case"plug":if(e)return t(`${sn}.was_plugged_in`);if(a)return t(`${sn}.was_unplugged`);break;case"presence":if(e)return t(`${sn}.was_at_home`);if(a)return t(`${sn}.was_away`);break;case"safety":if(e)return t(`${sn}.was_unsafe`);if(a)return t(`${sn}.was_safe`);break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(e)return t(`${sn}.detected_device_class`,{device_class:t(`component.binary_sensor.device_class.${o}`)});if(a)return t(`${sn}.cleared_device_class`,{device_class:t(`component.binary_sensor.device_class.${o}`)});break;case"tamper":if(e)return t(`${sn}.detected_tampering`);if(a)return t(`${sn}.cleared_tampering`)}break}case"cover":switch(n){case"open":return t(`${sn}.was_opened`);case"opening":return t(`${sn}.is_opening`);case"closing":return t(`${sn}.is_closing`);case"closed":return t(`${sn}.was_closed`)}break;case"lock":if("unlocked"===n)return t(`${sn}.was_unlocked`);if("locked"===n)return t(`${sn}.was_locked`)}return n===qe?t(`${sn}.turned_on`):n===Ye?t(`${sn}.turned_off`):Qe.includes(n)?t(`${sn}.became_unavailable`):e.localize(`${sn}.changed_to_state`,"state",i?rn(t,i,e.locale,n):n)},vn=()=>import("./c.54000694.js");function gn(e,t,n){const i=e;let a;i.lastChild&&i.lastChild.tagName===t?a=i.lastChild:(i.lastChild&&i.removeChild(i.lastChild),a=document.createElement(t.toLowerCase())),a.setProperties?a.setProperties(n):Object.keys(n).forEach((e=>{a[e]=n[e]})),null===a.parentNode&&i.appendChild(a)}const mn=(e,t)=>{const n=e.services[t];return!!n&&("lock"===t?"lock"in n:"cover"===t?"open_cover"in n:"turn_on"in n)},yn=(e,t)=>{if(t.state===Le)return"display";const n=Fe(t);return Xe.includes(n)?n:((e,t)=>{const n=Fe(t);var i,a;return"group"===n?!(null===(i=t.attributes)||void 0===i||null===(a=i.entity_id)||void 0===a||!a.some((t=>{const n=e.states[t];if(!n)return!1;const i=Fe(n);return mn(e,i)}))||"on"!==t.state&&"off"!==t.state):"climate"===n?Ze(t,4096):mn(e,n)})(e,t)&&"hidden"!==t.attributes.control?"toggle":"display"},bn=e=>void 0!==e&&!et.includes(e.state)&&!Qe.includes(e.state);let _n=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"field",decorators:[p()],key:"label",value:void 0},{kind:"field",decorators:[v()],key:"_isOn",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.stateObj)return g` <ha-switch disabled></ha-switch> `;if(this.stateObj.attributes.assumed_state||this.stateObj.state===He)return g`
        <ha-icon-button
          .label=${`Turn ${Je(this.stateObj)} off`}
          .path=${m}
          .disabled=${this.stateObj.state===Le}
          @click=${this._turnOff}
          class=${this._isOn||this.stateObj.state===He?"":"state-active"}
        ></ha-icon-button>
        <ha-icon-button
          .label=${`Turn ${Je(this.stateObj)} on`}
          .path=${y}
          .disabled=${this.stateObj.state===Le}
          @click=${this._turnOn}
          class=${this._isOn?"state-active":""}
        ></ha-icon-button>
      `;const e=g`
      <!-- <div class="container disable-checkbox"> -->
      <ha-switch
        aria-label=${`Toggle ${Je(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        .disabled=${this.stateObj.state===Le}
        @change=${this._toggleChanged}
      ></ha-switch>
      <!-- </div> -->
    `;return this.label?g`
      <ha-formfield .label=${this.label}>${e}</ha-formfield>
    `:e}},{kind:"method",key:"firstUpdated",value:function(e){b(_(n.prototype),"firstUpdated",this).call(this,e),this.addEventListener("click",(e=>e.stopPropagation()))}},{kind:"method",key:"willUpdate",value:function(e){b(_(n.prototype),"willUpdate",this).call(this,e),e.has("stateObj")&&(this._isOn=bn(this.stateObj))}},{kind:"method",key:"_toggleChanged",value:function(e){const t=e.target.checked;t!==this._isOn&&this._callService(t)}},{kind:"method",key:"_turnOn",value:function(){this._callService(!0)}},{kind:"method",key:"_turnOff",value:function(){this._callService(!1)}},{kind:"method",key:"_callService",value:async function(e){if(!this.hass||!this.stateObj)return;Ke("light");const t=Fe(this.stateObj);let n,i;"lock"===t?(n="lock",i=e?"unlock":"lock"):"cover"===t?(n="cover",i=e?"open_cover":"close_cover"):"group"===t?(n="homeassistant",i=e?"turn_on":"turn_off"):(n=t,i=e?"turn_on":"turn_off");const a=this.stateObj;this._isOn=e,await this.hass.callService(n,i,{entity_id:this.stateObj.entity_id}),setTimeout((async()=>{this.stateObj===a&&(this._isOn=bn(this.stateObj))}),2e3)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        white-space: nowrap;
        /* min-width: 38px; */
        height: 40px;
      }
      ha-icon-button {
        --mdc-icon-button-size: 40px;
        color: var(--ha-icon-button-inactive-color, var(--primary-text-color));
        transition: color 0.5s;
      }
      ha-icon-button.state-active {
        color: var(--ha-icon-button-active-color, var(--primary-color));
      }
      ha-switch {
        padding: 9px 0px;
      }
      /*
      .container.disable-checkbox {
        display: block;
        pointer-events: inherit;
      } */
    `}}]}}),f);customElements.define("ha-entity-toggle",_n);var kn=function(){return kn=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},kn.apply(this,arguments)};var wn={second:45,minute:45,hour:22,day:5};Ne&&await Ne;const xn=u((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),En=(e,t,n,i=!0)=>{const a=function(e,t,n){void 0===t&&(t=Date.now()),void 0===n&&(n={});var i=kn(kn({},wn),n||{}),a=(+e-+t)/1e3;if(Math.abs(a)<i.second)return{value:Math.round(a),unit:"second"};var o=a/60;if(Math.abs(o)<i.minute)return{value:Math.round(o),unit:"minute"};var r=a/3600;if(Math.abs(r)<i.hour)return{value:Math.round(r),unit:"hour"};var s=a/86400;if(Math.abs(s)<i.day)return{value:Math.round(s),unit:"day"};var l=new Date(e),c=new Date(t),d=l.getFullYear()-c.getFullYear();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"year"};var u=12*d+l.getMonth()-c.getMonth();if(Math.round(Math.abs(u))>0)return{value:Math.round(u),unit:"month"};var h=a/604800;return{value:Math.round(h),unit:"week"}}(e,n);return i?xn(t).format(a.value,a.unit):Intl.NumberFormat(t.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};h([x("ha-relative-time")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"datetime",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"capitalize",value:()=>!1},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._clearInterval()}},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this.datetime&&this._startInterval()}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"firstUpdated",value:function(e){b(_(n.prototype),"firstUpdated",this).call(this,e),this._updateRelative()}},{kind:"method",key:"update",value:function(e){b(_(n.prototype),"update",this).call(this,e),this._updateRelative()}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._interval=window.setInterval((()=>this._updateRelative()),6e4)}},{kind:"method",key:"_updateRelative",value:function(){if(this.datetime){const e=En(new Date(this.datetime),this.hass.locale);this.innerHTML=this.capitalize?tt(e):e}else this.innerHTML=this.hass.localize("ui.components.relative_time.never")}}]}}),w),h([x("state-info")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return g``;const e=Je(this.stateObj);return g`<state-badge
        .stateObj=${this.stateObj}
        .stateColor=${!0}
      ></state-badge>
      <div class="info">
        <div class="name" .title=${e} .inDialog=${this.inDialog}>
          ${e}
        </div>
        ${this.inDialog?g`<div class="time-ago">
              <ha-relative-time
                id="last_changed"
                .hass=${this.hass}
                .datetime=${this.stateObj.last_changed}
                capitalize
              ></ha-relative-time>
              <paper-tooltip animation-delay="0" for="last_changed">
                <div>
                  <div class="row">
                    <span class="column-name">
                      ${this.hass.localize("ui.dialogs.more_info_control.last_changed")}:
                    </span>
                    <ha-relative-time
                      .hass=${this.hass}
                      .datetime=${this.stateObj.last_changed}
                      capitalize
                    ></ha-relative-time>
                  </div>
                  <div class="row">
                    <span>
                      ${this.hass.localize("ui.dialogs.more_info_control.last_updated")}:
                    </span>
                    <ha-relative-time
                      .hass=${this.hass}
                      .datetime=${this.stateObj.last_updated}
                      capitalize
                    ></ha-relative-time>
                  </div>
                </div>
              </paper-tooltip>
            </div>`:g`<div class="extra-info"><slot></slot></div>`}
      </div> `}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!e.has("hass"))return;const t=e.get("hass");t&&t.locale===this.hass.locale||(this.rtl=Me(this.hass))}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        min-width: 120px;
        white-space: nowrap;
      }

      state-badge {
        float: left;
      }
      :host([rtl]) state-badge {
        float: right;
      }

      .info {
        margin-left: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }

      :host([rtl]) .info {
        margin-right: 56px;
        margin-left: 0;
        text-align: right;
      }

      .name {
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .name[in-dialog],
      :host([secondary-line]) .name {
        line-height: 20px;
      }

      .time-ago,
      .extra-info,
      .extra-info > * {
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
        width: 100%;
        justify-content: space-between;
        margin: 0 2px 4px 0;
      }

      .row:last-child {
        margin-bottom: 0px;
      }
    `}}]}}),f),h([x("state-card-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"method",key:"render",value:function(){const e=this.stateObj;return g`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${e}
          .inDialog=${this.inDialog}
        ></state-info>
        <mwc-button
          @click=${this._pressButton}
          .disabled=${e.state===Le}
        >
          ${this.hass.localize("ui.card.button.press")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"_pressButton",value:function(e){e.stopPropagation(),this.hass.callService("button","press",{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return E}}]}}),f);const Sn=S`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;Sn.setAttribute("style","display: none;"),document.head.appendChild(Sn.content);const Tn="none",Dn=1,Cn=2,An=4,$n=8,Rn=16,In=32,On=64,Mn={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},zn=(e,t)=>Mn[e]-Mn[t];h([x("ha-climate-state")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){const e=this._computeCurrentStatus();return g`<div class="target">
        ${"unknown"!==this.stateObj.state?g`<span class="state-label">
              ${this._localizeState()}
              ${this.stateObj.attributes.preset_mode&&this.stateObj.attributes.preset_mode!==Tn?g`-
                  ${this.hass.localize(`state_attributes.climate.preset_mode.${this.stateObj.attributes.preset_mode}`)||this.stateObj.attributes.preset_mode}`:""}
            </span>`:""}
        <div class="unit">${this._computeTarget()}</div>
      </div>

      ${e?g`<div class="current">
            ${this.hass.localize("ui.card.climate.currently")}:
            <div class="unit">${e}</div>
          </div>`:""}`}},{kind:"method",key:"_computeCurrentStatus",value:function(){if(this.hass&&this.stateObj)return null!=this.stateObj.attributes.current_temperature?`${Ue(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.current_humidity?`${Ue(this.stateObj.attributes.current_humidity,this.hass.locale)} %`:void 0}},{kind:"method",key:"_computeTarget",value:function(){return this.hass&&this.stateObj?null!=this.stateObj.attributes.target_temp_low&&null!=this.stateObj.attributes.target_temp_high?`${Ue(this.stateObj.attributes.target_temp_low,this.hass.locale)}-${Ue(this.stateObj.attributes.target_temp_high,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.temperature?`${Ue(this.stateObj.attributes.temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.target_humidity_low&&null!=this.stateObj.attributes.target_humidity_high?`${Ue(this.stateObj.attributes.target_humidity_low,this.hass.locale)}-${Ue(this.stateObj.attributes.target_humidity_high,this.hass.locale)} %`:null!=this.stateObj.attributes.humidity?`${Ue(this.stateObj.attributes.humidity,this.hass.locale)} %`:"":""}},{kind:"method",key:"_localizeState",value:function(){const e=this.hass.localize(`component.climate.state._.${this.stateObj.state}`);return this.stateObj.attributes.hvac_action?`${this.hass.localize(`state_attributes.climate.hvac_action.${this.stateObj.attributes.hvac_action}`)} (${e})`:e}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;
      }

      .target {
        color: var(--primary-text-color);
      }

      .current {
        color: var(--secondary-text-color);
      }

      .state-label {
        font-weight: bold;
        text-transform: capitalize;
      }

      .unit {
        display: inline-block;
        direction: ltr;
      }
    `}}]}}),f);customElements.define("state-card-climate",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});var jn=D((e=>class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}));class Nn extends(jn(T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}_localizeState(e){return rn(this.hass.localize,e,this.hass.locale)}}customElements.define("state-card-configurator",Nn);const Pn=e=>Ze(e,1),Hn=e=>Ze(e,2),Ln=e=>Ze(e,8),Bn=e=>Ze(e,16),Un=e=>Ze(e,32),Fn=e=>Ze(e,64);function Vn(e){const t=Pn(e)||Hn(e)||Ln(e);return(Bn(e)||Un(e)||Fn(e))&&!t}h([x("ha-cover-controls")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.stateObj?g`
      <div class="state">
        <ha-icon-button
          class=${C({hidden:!Pn(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.open_cover")}
          @click=${this._onOpenTap}
          .disabled=${this._computeOpenDisabled()}
          .path=${nt(this.stateObj)}
        >
        </ha-icon-button>
        <ha-icon-button
          class=${C({hidden:!Ln(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.stop_cover")}
          .path=${A}
          @click=${this._onStopTap}
          .disabled=${this.stateObj.state===Le}
        ></ha-icon-button>
        <ha-icon-button
          class=${C({hidden:!Hn(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.close_cover")}
          @click=${this._onCloseTap}
          .disabled=${this._computeClosedDisabled()}
          .path=${it(this.stateObj)}
        >
        </ha-icon-button>
      </div>
    `:g``}},{kind:"method",key:"_computeOpenDisabled",value:function(){if(this.stateObj.state===Le)return!0;const e=!0===this.stateObj.attributes.assumed_state;return((void 0!==(t=this.stateObj).attributes.current_position?100===t.attributes.current_position:"open"===t.state)||function(e){return"opening"===e.state}(this.stateObj))&&!e;var t}},{kind:"method",key:"_computeClosedDisabled",value:function(){if(this.stateObj.state===Le)return!0;const e=!0===this.stateObj.attributes.assumed_state;return((void 0!==(t=this.stateObj).attributes.current_position?0===t.attributes.current_position:"closed"===t.state)||function(e){return"closing"===e.state}(this.stateObj))&&!e;var t}},{kind:"method",key:"_onOpenTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","open_cover",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_onCloseTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","close_cover",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_onStopTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","stop_cover",{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      .state {
        white-space: nowrap;
      }
      .hidden {
        visibility: hidden !important;
      }
    `}}]}}),f),h([x("ha-cover-tilt-controls")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.stateObj?g` <ha-icon-button
        class=${C({invisible:!Bn(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.open_tilt_cover")}
        .path=${$}
        @click=${this._onOpenTiltTap}
        .disabled=${this._computeOpenDisabled()}
      ></ha-icon-button>
      <ha-icon-button
        class=${C({invisible:!Fn(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.stop_cover")}
        .path=${A}
        @click=${this._onStopTiltTap}
        .disabled=${this.stateObj.state===Le}
      ></ha-icon-button>
      <ha-icon-button
        class=${C({invisible:!Un(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.close_tilt_cover")}
        .path=${R}
        @click=${this._onCloseTiltTap}
        .disabled=${this._computeClosedDisabled()}
      ></ha-icon-button>`:g``}},{kind:"method",key:"_computeOpenDisabled",value:function(){if(this.stateObj.state===Le)return!0;const e=!0===this.stateObj.attributes.assumed_state;return 100===this.stateObj.attributes.current_tilt_position&&!e}},{kind:"method",key:"_computeClosedDisabled",value:function(){if(this.stateObj.state===Le)return!0;const e=!0===this.stateObj.attributes.assumed_state;return 0===this.stateObj.attributes.current_tilt_position&&!e}},{kind:"method",key:"_onOpenTiltTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","open_cover_tilt",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_onCloseTiltTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","close_cover_tilt",{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_onStopTiltTap",value:function(e){e.stopPropagation(),this.hass.callService("cover","stop_cover_tilt",{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        white-space: nowrap;
      }
      .invisible {
        visibility: hidden !important;
      }
    `}}]}}),f),h([x("state-card-cover")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"method",key:"render",value:function(){return g`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${this.stateObj}
          .inDialog=${this.inDialog}
        ></state-info>
        <!-- <ha-cover-controls
          .hass=${this.hass}
          .hidden=${Vn(this.stateObj)}
          .stateObj=${this.stateObj}
        ></ha-cover-controls>
        <ha-cover-tilt-controls
          .hass=${this.hass}
          .hidden=${!Vn(this.stateObj)}
          .stateObj=${this.stateObj}
        ></ha-cover-tilt-controls> -->
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[E,k`
        :host {
          line-height: 1.5;
        }
      `]}}]}}),f);const Wn={date:We,datetime:Ve,time:Kt},Gn=["relative","total"];h([x("hui-timestamp-display")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"ts",value:void 0},{kind:"field",decorators:[p()],key:"format",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"capitalize",value:()=>!1},{kind:"field",decorators:[v()],key:"_relative",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this._connected=!0,this._startInterval()}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._connected=!1,this._clearInterval()}},{kind:"method",key:"render",value:function(){if(!this.ts||!this.hass)return g``;if(isNaN(this.ts.getTime()))return g`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid")}`;const e=this._format;return Gn.includes(e)?g` ${this._relative} `:e in Wn?g` ${Wn[e](this.ts,this.hass.locale)} `:g`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid_format")}`}},{kind:"method",key:"updated",value:function(e){b(_(n.prototype),"updated",this).call(this,e),e.has("format")&&this._connected&&(Gn.includes("relative")?this._startInterval():this._clearInterval())}},{kind:"get",key:"_format",value:function(){return this.format||"relative"}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._connected&&Gn.includes(this._format)&&(this._updateRelative(),this._interval=window.setInterval((()=>this._updateRelative()),1e3))}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_updateRelative",value:function(){this.ts&&this.hass.localize&&(this._relative="relative"===this._format?En(this.ts,this.hass.locale):En(new Date,this.hass.locale,this.ts,!1),this._relative=this.capitalize?tt(this._relative):this._relative)}}]}}),f),h([x("state-card-display")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"method",key:"render",value:function(){return g`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${this.stateObj}
          .inDialog=${this.inDialog}
        >
        </state-info>
        <div
          class="state ${C({"has-unit_of_measurement":"unit_of_measurement"in this.stateObj.attributes})}"
        >
          ${"sensor"!==Ge(this.stateObj.entity_id)||this.stateObj.attributes.device_class!==at||Qe.includes(this.stateObj.state)?rn(this.hass.localize,this.stateObj,this.hass.locale):g` <hui-timestamp-display
                .hass=${this.hass}
                .ts=${new Date(this.stateObj.state)}
                format="datetime"
                capitalize
              ></hui-timestamp-display>`}
        </div>
      </div>
    `}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!e.has("hass"))return;const t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=Me(this.hass))}},{kind:"get",static:!0,key:"styles",value:function(){return[E,k`
        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          flex: 0 0 auto;
          overflow-wrap: break-word;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      `]}}]}}),f),h([x("state-card-input_button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"method",key:"render",value:function(){const e=this.stateObj;return g`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${e}
          .inDialog=${this.inDialog}
        ></state-info>
        <mwc-button
          @click=${this._pressButton}
          .disabled=${e.state===Le}
        >
          ${this.hass.localize("ui.card.button.press")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"_pressButton",value:function(e){e.stopPropagation(),this.hass.callService("input_button","press",{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return E}}]}}),f);var qn=new Set;const Yn={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(qn.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():I||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=O(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(qn.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?qn.delete(this):qn.add(this)}};class Qn extends(M([Yn],T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        ha-textfield {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <ha-textfield
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="[[value]]"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          on-input="onInput"
          hidden="[[hiddenbox]]"
          suffix="[[stateObj.attributes.unit_of_measurement]]"
        >
        </ha-textfield>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[formattedState]]
        </div>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}ready(){if(super.ready(),"function"==typeof ResizeObserver){new ResizeObserver((e=>{e.forEach((()=>{this.hiddenState()}))})).observe(this.$.input_number_card)}else this.addEventListener("iron-resize",this.hiddenState)}static get properties(){return{hass:Object,hiddenbox:{type:Boolean,value:!0},hiddenslider:{type:Boolean,value:!0},inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,formattedState:String,mode:String}}hiddenState(){if("slider"!==this.mode)return;const e=this.$.slider.offsetWidth;e<100?this.$.sliderstate.hidden=!0:e>=145&&(this.$.sliderstate.hidden=!1)}stateObjectChanged(e){const t=this.mode;this.setProperties({min:Number(e.attributes.min),max:Number(e.attributes.max),step:Number(e.attributes.step),value:Number(e.state),formattedState:rn(this.hass.localize,e,this.hass.locale,e.state),mode:String(e.attributes.mode),maxlength:String(e.attributes.max).length,hiddenbox:"box"!==e.attributes.mode,hiddenslider:"slider"!==e.attributes.mode}),"slider"===this.mode&&"slider"!==t&&this.hiddenState()}onInput(e){this.value=e.target.value}selectedValueChanged(){this.value!==Number(this.stateObj.state)&&this.hass.callService("input_number","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(e){e.stopPropagation()}}customElements.define("state-card-input_number",Qn);const Zn=(e,t,n)=>e.callService("input_select","select_option",{option:n,entity_id:t});h([x("state-card-input_select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <ha-select
        .label=${Je(this.stateObj)}
        .value=${this.stateObj.state}
        .disabled=${Qe.includes(this.stateObj.state)}
        naturalMenuWidth
        fixedMenuPosition
        @selected=${this._selectedOptionChanged}
        @closed=${Wt}
      >
        ${this.stateObj.attributes.options.map((e=>g`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
      </ha-select>
    `}},{kind:"method",key:"_selectedOptionChanged",value:async function(e){const t=e.target.value;t!==this.stateObj.state&&await Zn(this.hass,this.stateObj.entity_id,t)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: flex;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      ha-select {
        width: 100%;
      }
    `}}]}}),f);customElements.define("state-card-input_text",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-textfield {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-textfield
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="[[value]]"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-input="onInput"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </ha-textfield>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},pattern:String,value:String}}stateObjectChanged(e){this.value=e.state}onInput(e){this.value=e.target.value}selectedValueChanged(){this.value!==this.stateObj.state&&this.hass.callService("input_text","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(e){e.stopPropagation()}});class Xn extends(jn(T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},inDialog:{type:Boolean,value:!1},isLocked:Boolean}}_stateObjChanged(e){e&&(this.isLocked="locked"===e.state)}_callService(e){e.stopPropagation();const t=e.target.dataset.service,n={entity_id:this.stateObj.entity_id};this.hass.callService("lock",t,n)}}customElements.define("state-card-lock",Xn);class Jn{constructor(e,t){this.hass=e,this.stateObj=t,this._attr=t.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){let e=this._attr.media_position;return this.isPlaying&&(e+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),e}get supportsPause(){return Ze(this.stateObj,1)}get supportsVolumeSet(){return Ze(this.stateObj,4)}get supportsVolumeMute(){return Ze(this.stateObj,8)}get supportsPreviousTrack(){return Ze(this.stateObj,16)}get supportsNextTrack(){return Ze(this.stateObj,32)}get supportsTurnOn(){return Ze(this.stateObj,128)}get supportsTurnOff(){return Ze(this.stateObj,256)}get supportsPlayMedia(){return Ze(this.stateObj,512)}get supportsVolumeButtons(){return Ze(this.stateObj,1024)}get supportsSelectSource(){return Ze(this.stateObj,2048)}get supportsSelectSoundMode(){return Ze(this.stateObj,65536)}get supportsPlay(){return Ze(this.stateObj,16384)}get primaryTitle(){return ot(this._attr.media_title)}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){let e=this._attr.media_series_title;return this._attr.media_season&&(e+=" S"+this._attr.media_season,this._attr.media_episode&&(e+="E"+this._attr.media_episode)),e}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(e){this.callService("volume_set",{volume_level:e})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(e){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:e})}volumeUp(){this.callService("volume_up")}selectSource(e){this.callService("select_source",{source:e})}selectSoundMode(e){this.callService("select_sound_mode",{sound_mode:e})}callService(e,t={}){t.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",e,t)}}class Kn extends(jn(T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)"}}}computePlayerObj(e,t){return new Jn(e,t)}computePrimaryText(e,t){return t.primaryTitle||rn(e,t.stateObj,this.hass.locale)}}customElements.define("state-card-media_player",Kn);class ei extends(M([Yn],T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        ha-textfield {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <ha-textfield
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="[[value]]"
          type="number"
          on-input="onInput"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </ha-textfield>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}ready(){if(super.ready(),"function"==typeof ResizeObserver){new ResizeObserver((e=>{e.forEach((()=>{this.hiddenState()}))})).observe(this.$.number_card)}else this.addEventListener("iron-resize",(()=>this.hiddenState()))}static get properties(){return{hass:Object,hiddenbox:{type:Boolean,value:!0},hiddenslider:{type:Boolean,value:!0},inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,mode:String}}hiddenState(){if("slider"!==this.mode)return;const e=this.$.slider.offsetWidth;e<100?this.$.sliderstate.hidden=!0:e>=145&&(this.$.sliderstate.hidden=!1)}stateObjectChanged(e){const t=this.mode,n=Number(e.attributes.min),i=Number(e.attributes.max),a=Number(e.attributes.step),o=(i-n)/a;this.setProperties({min:n,max:i,step:a,value:Number(e.state),mode:String(e.attributes.mode),maxlength:String(e.attributes.max).length,hiddenbox:"slider"===e.attributes.mode||"auto"===e.attributes.mode&&o<=256,hiddenslider:"box"===e.attributes.mode||"auto"===e.attributes.mode&&o>256}),"slider"===this.mode&&"slider"!==t&&this.hiddenState()}onInput(e){this.value=e.target.value}selectedValueChanged(){this.value!==Number(this.stateObj.state)&&this.hass.callService("number","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(e){e.stopPropagation()}}customElements.define("state-card-number",ei);const ti=(e,t)=>e.callService("scene","turn_on",{entity_id:t});class ni extends(jn(T)){static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="_activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}_activateScene(e){e.stopPropagation(),ti(this.hass,this.stateObj.entity_id)}}customElements.define("state-card-scene",ni),h([x("state-card-script")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"method",key:"render",value:function(){const e=this.stateObj;return g`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${e}
          .inDialog=${this.inDialog}
        ></state-info>
        ${"on"===e.state?g`<mwc-button @click=${this._cancelScript}>
              ${"single"!==e.attributes.mode&&(e.attributes.current||0)>0?this.hass.localize("ui.card.script.cancel_multiple","number",e.attributes.current):this.hass.localize("ui.card.script.cancel")}
            </mwc-button>`:""}
        ${"off"===e.state||e.attributes.max?g`<mwc-button
              @click=${this._runScript}
              .disabled=${Qe.includes(e.state)||!rt(e)}
            >
              ${this.hass.localize("ui.card.script.run")}
            </mwc-button>`:""}
      </div>
    `}},{kind:"method",key:"_cancelScript",value:function(e){e.stopPropagation(),this._callService("turn_off")}},{kind:"method",key:"_runScript",value:function(e){e.stopPropagation(),this._callService("turn_on")}},{kind:"method",key:"_callService",value:function(e){this.hass.callService("script",e,{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return E}}]}}),f);const ii=(e,t,n)=>e.callService("select","select_option",{option:n},{entity_id:t});h([x("state-card-select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <ha-select
        .value=${this.stateObj.state}
        .label=${Je(this.stateObj)}
        .disabled=${this.stateObj.state===Le}
        naturalMenuWidth
        fixedMenuPosition
        @selected=${this._selectedOptionChanged}
        @closed=${Wt}
      >
        ${this.stateObj.attributes.options.map((e=>g`
              <mwc-list-item .value=${e}>
                ${this.stateObj.attributes.device_class&&this.hass.localize(`component.select.state.${this.stateObj.attributes.device_class}.${e}`)||this.hass.localize(`component.select.state._.${e}`)||e}
              </mwc-list-item>
            `))}
      </ha-select>
    `}},{kind:"method",key:"_selectedOptionChanged",value:function(e){const t=e.target.value;t!==this.stateObj.state&&ii(this.hass,this.stateObj.entity_id,t)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: flex;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      ha-select {
        width: 100%;
      }
    `}}]}}),f);const ai=e=>e<10?`0${e}`:e;function oi(e){const t=Math.floor(e/3600),n=Math.floor(e%3600/60),i=Math.floor(e%3600%60);return t>0?`${t}:${ai(n)}:${ai(i)}`:n>0?`${n}:${ai(i)}`:i>0?""+i:null}const ri=e=>{if(!e.attributes.remaining)return;let t=function(e){const t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+t[2]}(e.attributes.remaining);if("active"===e.state){const n=(new Date).getTime(),i=new Date(e.last_changed).getTime();t=Math.max(t-(n-i)/1e3,0)}return t},si=(e,t,n)=>{if(!t)return null;if("idle"===t.state||0===n)return rn(e.localize,t,e.locale);let i=oi(n||0);return"paused"===t.state&&(i=`${i} (${rn(e.localize,t,e.locale)})`),i};customElements.define("state-card-timer",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
          white-space: nowrap;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_displayState(timeRemaining, stateObj)]]</div>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},timeRemaining:Number,inDialog:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback(),this.startInterval(this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this.clearInterval()}stateObjChanged(e){this.startInterval(e)}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}startInterval(e){this.clearInterval(),this.calculateRemaining(e),"active"===e.state&&(this._updateRemaining=setInterval((()=>this.calculateRemaining(this.stateObj)),1e3))}calculateRemaining(e){this.timeRemaining=ri(e)}_displayState(e,t){return si(this.hass,t,e)}});customElements.define("state-card-toggle",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});const li={cleaning:{action:"return_to_base",service:"return_to_base"},docked:{action:"start_cleaning",service:"start"},idle:{action:"start_cleaning",service:"start"},off:{action:"turn_on",service:"turn_on"},on:{action:"turn_off",service:"turn_off"},paused:{action:"resume_cleaning",service:"start"}};class ci extends(jn(T)){static get template(){return S`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `}static get properties(){return{hass:Object,stateObj:Object,_interceptable:{type:Boolean,computed:"_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"}}}_computeInterceptable(e,t){return e in li&&0!==t}_computeLabel(e,t){return t?this.localize(`ui.card.vacuum.actions.${li[e].action}`):this.localize(`component.vacuum._.${e}`)}_callService(e){e.stopPropagation();const t=this.stateObj,n=li[t.state].service;this.hass.callService("vacuum",n,{entity_id:t.entity_id})}}customElements.define("ha-vacuum-state",ci);customElements.define("state-card-vacuum",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});class di extends(jn(T)){static get template(){return S`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object}}computeTarget(e,t){return e&&t?null!=t.attributes.target_temp_low&&null!=t.attributes.target_temp_high?`${Ue(t.attributes.target_temp_low,this.hass.locale)} – ${Ue(t.attributes.target_temp_high,this.hass.locale)} ${e.config.unit_system.temperature}`:null!=t.attributes.temperature?`${Ue(t.attributes.temperature,this.hass.locale)} ${e.config.unit_system.temperature}`:"":null}_localizeState(e){return rn(this.hass.localize,e,this.hass.locale)}}customElements.define("ha-water_heater-state",di);customElements.define("state-card-water_heater",class extends T{static get template(){return S`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `}static get stateInfoTemplate(){return S`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});function ui(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),i=e.getDate(),a=new Date(0);return a.setFullYear(t,n,i-1),a.setHours(0,0,0,0),a}customElements.define("state-card-content",class extends T{static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}static get observers(){return["inputChanged(hass, inDialog, stateObj)"]}inputChanged(e,t,n){let i;n&&e&&(i=n.attributes&&"custom_ui_state_card"in n.attributes?n.attributes.custom_ui_state_card:"state-card-"+yn(e,n),gn(this,i.toUpperCase(),{hass:e,stateObj:n,inDialog:t}))}}),h([x("ha-expansion-panel")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[p()],key:"header",value:void 0},{kind:"field",decorators:[p()],key:"secondary",value:void 0},{kind:"field",decorators:[v()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[z(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <!-- <div
        id="summary"
        @click=${this._toggleContainer}
        @keydown=${this._toggleContainer}
        role="button"
        tabindex="0"
        aria-expanded=${this.expanded}
        aria-controls="sect1"
      >
        <slot class="header" name="header">
          ${this.header}
          <slot class="secondary" name="secondary">${this.secondary}</slot>
        </slot>
        <ha-svg-icon
          .path=${j}
          class="summary-icon ${C({expanded:this.expanded})}"
        ></ha-svg-icon>
      </div>
      <div
        class="container ${C({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?g`<slot></slot>`:""}
      </div> -->
    `}},{kind:"method",key:"willUpdate",value:function(e){e.has("expanded")&&this.expanded&&(this._showContent=this.expanded)}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const t=!this.expanded;d(this,"expanded-will-change",{expanded:t}),t&&(this._showContent=!0,await Gt());const n=this._container.scrollHeight;this._container.style.height=`${n}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,d(this,"expanded-changed",{expanded:this.expanded})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 4px);
      }

      #summary {
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      #summary:focus {
        background: var(--input-fill-color);
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        margin-left: auto;
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        max-width: 20px;
      }

      .header {
        display: block;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}]}}),f),h([x("ha-attributes")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"field",decorators:[p({attribute:"extra-filters"})],key:"extraFilters",value:void 0},{kind:"field",decorators:[v()],key:"_expanded",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.stateObj)return g``;const e=this.computeDisplayAttributes(st.concat(this.extraFilters?this.extraFilters.split(","):[]));return 0===e.length?g``:g`
      <ha-expansion-panel
        .header=${this.hass.localize("ui.components.attributes.expansion_header")}
        outlined
        @expanded-will-change=${this.expandedChanged}
      >
        <div class="attribute-container">
          ${this._expanded?g`
                ${e.map((e=>g`
                    <div class="data-entry">
                      <div class="key">${lt(e)}</div>
                      <div class="value">
                        ${this.formatAttribute(e)}
                      </div>
                    </div>
                  `))}
              `:""}
        </div>
      </ha-expansion-panel>
      ${this.stateObj.attributes.attribution?g`
            <div class="attribution">
              ${this.stateObj.attributes.attribution}
            </div>
          `:""}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[E,k`
        .attribute-container {
          margin-bottom: 8px;
        }
        .data-entry {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .data-entry .value {
          max-width: 60%;
          overflow-wrap: break-word;
          text-align: right;
        }
        .key {
          flex-grow: 1;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
          margin-top: 16px;
        }
        pre {
          font-family: inherit;
          font-size: inherit;
          margin: 0px;
          overflow-wrap: break-word;
          white-space: pre-line;
        }
        hr {
          border-color: var(--divider-color);
          border-bottom: none;
          margin: 16px 0;
        }
      `]}},{kind:"method",key:"computeDisplayAttributes",value:function(e){return this.stateObj?Object.keys(this.stateObj.attributes).filter((t=>-1===e.indexOf(t))):[]}},{kind:"method",key:"formatAttribute",value:function(e){if(!this.stateObj)return"—";const t=this.stateObj.attributes[e];return ct(this.hass,t)}},{kind:"method",key:"expandedChanged",value:function(e){this._expanded=e.detail.expanded}}]}}),f),h([x("more-info-default")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?g`<ha-attributes
      .hass=${this.hass}
      .stateObj=${this.stateObj}
    ></ha-attributes>`:g``}}]}}),f);const hi=(e,t,n=!0,i=!0)=>{let a,o=0;return(...r)=>{const s=()=>{o=!1===n?0:Date.now(),a=void 0,e(...r)},l=Date.now();o||!1!==n||(o=l);const c=t-(l-o);c<=0||c>t?(a&&(clearTimeout(a),a=void 0),o=l,e(...r)):a||!1===i||(a=window.setTimeout(s,c))}},fi=["#44739e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067","#f43600","#4ba93b","#5779bb","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function pi(e){return fi[e%fi.length]}function vi(e,t){return t.getPropertyValue(`--graph-color-${e+1}`)||pi(e)}const gi=(e,t,n)=>{let i;return i=t?Math.max(e,t):e,i=n?Math.min(e,n):e,i};h([x("ha-chart-base")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[p({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[p({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[p({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[p({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[v()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[v()],key:"_tooltip",value:void 0},{kind:"field",decorators:[v()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((e,t)=>{e.hidden&&this._hiddenDatasets.add(t)}))}},{kind:"method",key:"willUpdate",value:function(e){if(b(_(n.prototype),"willUpdate",this).call(this,e),this.hasUpdated&&this.chart){if(e.has("plugins"))return this.chart.destroy(),void this._setupChart();e.has("chartType")&&(this.chart.config.type=this.chartType),e.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((e,t)=>{e.hidden=this._hiddenDatasets.has(t)})),this.chart.data=this.data),e.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var e,t,n,i;return g`
      ${!0===(null===(e=this.options)||void 0===e||null===(t=e.plugins)||void 0===t||null===(n=t.legend)||void 0===n?void 0:n.display)?g`<div class="chartLegend">
            <ul>
              ${this.data.datasets.map(((e,t)=>g`<li
                  .datasetIndex=${t}
                  @click=${this._legendClick}
                  class=${C({hidden:this._hiddenDatasets.has(t)})}
                  .title=${e.label}
                >
                  <div
                    class="bullet"
                    style=${N({backgroundColor:e.backgroundColor,borderColor:e.borderColor})}
                  ></div>
                  <div class="label">${e.label}</div>
                </li>`))}
            </ul>
          </div>`:""}
      <div
        class="chartContainer"
        style=${N({height:`${null!==(i=this.height)&&void 0!==i?i:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden"})}
      >
        <canvas></canvas>
        ${this._tooltip?g`<div
              class="chartTooltip ${C({[this._tooltip.yAlign]:!0})}"
              style=${N({top:this._tooltip.top,left:this._tooltip.left})}
            >
              <div class="title">${this._tooltip.title}</div>
              ${this._tooltip.beforeBody?g`<div class="beforeBody">
                    ${this._tooltip.beforeBody}
                  </div>`:""}
              <div>
                <ul>
                  ${this._tooltip.body.map(((e,t)=>g`<li>
                      <div
                        class="bullet"
                        style=${N({backgroundColor:this._tooltip.labelColors[t].backgroundColor,borderColor:this._tooltip.labelColors[t].borderColor})}
                      ></div>
                      ${e.lines.join("\n")}
                    </li>`))}
                </ul>
              </div>
              ${this._tooltip.footer.length?g`<div class="footer">
                    ${this._tooltip.footer.map((e=>g`${e}<br />`))}
                  </div>`:""}
            </div>`:""}
      </div>
    `}},{kind:"method",key:"_setupChart",value:async function(){const e=this.renderRoot.querySelector("canvas").getContext("2d"),t=(await import("./c.469a2b19.js")).Chart,n=getComputedStyle(this);t.defaults.borderColor=n.getPropertyValue("--divider-color"),t.defaults.color=n.getPropertyValue("--secondary-text-color"),this.chart=new t(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var e,t,n,i,a;return{...this.options,plugins:{...null===(e=this.options)||void 0===e?void 0:e.plugins,tooltip:{...null===(t=this.options)||void 0===t||null===(n=t.plugins)||void 0===n?void 0:n.tooltip,enabled:!1,external:e=>this._handleTooltip(e)},legend:{...null===(i=this.options)||void 0===i||null===(a=i.plugins)||void 0===a?void 0:a.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var e,t;return[...this.plugins||[],{id:"afterRenderHook",afterRender:e=>{this._chartHeight=e.height},legend:{...null===(e=this.options)||void 0===e||null===(t=e.plugins)||void 0===t?void 0:t.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(e){if(!this.chart)return;const t=e.currentTarget.datasetIndex;this.chart.isDatasetVisible(t)?(this.chart.setDatasetVisibility(t,!1),this._hiddenDatasets.add(t)):(this.chart.setDatasetVisibility(t,!0),this._hiddenDatasets.delete(t)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(e){var t,n,i;0!==e.tooltip.opacity?this._tooltip={...e.tooltip,top:this.chart.canvas.offsetTop+e.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(t=e.tooltip.caretX,n=100,i=this.clientWidth-100,Math.min(Math.max(t,n),i))-100+"px"}:this._tooltip=void 0}},{kind:"field",key:"updateChart",value(){return e=>{this.chart&&this.chart.update(e)}}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
      }
      .chartContainer {
        overflow: hidden;
        height: 0;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      canvas {
        max-height: var(--chart-max-height, 400px);
      }
      .chartLegend {
        text-align: center;
      }
      .chartLegend li {
        cursor: pointer;
        display: inline-grid;
        grid-auto-flow: column;
        padding: 0 8px;
        box-sizing: border-box;
        align-items: center;
        color: var(--secondary-text-color);
      }
      .chartLegend .hidden {
        text-decoration: line-through;
      }
      .chartLegend .label {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .chartLegend .bullet,
      .chartTooltip .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        display: inline-block;
        height: 16px;
        margin-right: 6px;
        width: 16px;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      .chartTooltip .bullet {
        align-self: baseline;
      }
      :host([rtl]) .chartLegend .bullet,
      :host([rtl]) .chartTooltip .bullet {
        margin-right: inherit;
        margin-left: 6px;
      }
      .chartTooltip {
        padding: 8px;
        font-size: 90%;
        position: absolute;
        background: rgba(80, 80, 80, 0.9);
        color: white;
        border-radius: 4px;
        pointer-events: none;
        z-index: 1000;
        width: 200px;
        box-sizing: border-box;
      }
      :host([rtl]) .chartTooltip {
        direction: rtl;
      }
      .chartLegend ul,
      .chartTooltip ul {
        display: inline-block;
        padding: 0 0px;
        margin: 8px 0 0 0;
        width: 100%;
      }
      .chartTooltip ul {
        margin: 0 4px;
      }
      .chartTooltip li {
        display: flex;
        white-space: pre-line;
        align-items: center;
        line-height: 16px;
        padding: 4px 0;
      }
      .chartTooltip .title {
        text-align: center;
        font-weight: 500;
      }
      .chartTooltip .footer {
        font-weight: 500;
      }
      .chartTooltip .beforeBody {
        text-align: center;
        font-weight: 300;
        word-break: break-all;
      }
    `}}]}}),f);const mi=e=>{const t=parseFloat(e);return isFinite(t)?t:null};let yi=h(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"data",value:()=>[]},{kind:"field",decorators:[p()],key:"names",value:()=>!1},{kind:"field",decorators:[p()],key:"unit",value:void 0},{kind:"field",decorators:[p()],key:"identifier",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"isSingleDevice",value:()=>!1},{kind:"field",decorators:[p({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[v()],key:"_chartData",value:void 0},{kind:"field",decorators:[v()],key:"_chartOptions",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        chart-type="line"
      ></ha-chart-base>
    `}},{kind:"method",key:"willUpdate",value:function(e){this.hasUpdated||(this._chartOptions={parsing:!1,animation:!1,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetimeseconds"}},y:{ticks:{maxTicksLimit:7},title:{display:!0,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:e=>`${e.dataset.label}: ${Ue(e.parsed.y,this.hass.locale)} ${this.unit}`}},filler:{propagate:!0},legend:{display:!this.isSingleDevice,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.1,borderWidth:1.5},point:{hitRadius:5}},locale:dt(this.hass.locale)}),e.has("data")&&this._generateData()}},{kind:"method",key:"_generateData",value:function(){let e=0;const t=getComputedStyle(this),n=this.data,i=[];let a;if(0===n.length)return;a=this.endTime||new Date(Math.max(...n.map((e=>new Date(e.states[e.states.length-1].last_changed).getTime())))),a>new Date&&(a=new Date);const o=this.names||{};n.forEach((n=>{const r=n.domain,s=o[n.entity_id]||n.name;let l=null;const c=[],d=(e,t)=>{t&&(e>a||(c.forEach(((n,i)=>{null===t[i]&&l&&null!==l[i]&&n.data.push({x:e.getTime(),y:l[i]}),n.data.push({x:e.getTime(),y:t[i]})})),l=t))},u=(n,i=!1,a)=>{a||(a=vi(e,t),e++),c.push({label:n,fill:!!i&&"origin",borderColor:a,backgroundColor:a+"7F",stepped:"before",pointRadius:0,data:[]})};if("thermostat"===r||"climate"===r||"water_heater"===r){const e=n.states.some((e=>{var t;return null===(t=e.attributes)||void 0===t?void 0:t.hvac_action})),i="climate"===r&&e?e=>{var t;return"heating"===(null===(t=e.attributes)||void 0===t?void 0:t.hvac_action)}:e=>"heat"===e.state,a="climate"===r&&e?e=>{var t;return"cooling"===(null===(t=e.attributes)||void 0===t?void 0:t.hvac_action)}:e=>"cool"===e.state,o=n.states.some(i),l=n.states.some(a),c=n.states.some((e=>e.attributes&&e.attributes.target_temp_high!==e.attributes.target_temp_low));u(`${this.hass.localize("ui.card.climate.current_temperature",{name:s})}`),o&&u(`${this.hass.localize("ui.card.climate.heating",{name:s})}`,!0,t.getPropertyValue("--state-climate-heat-color")),l&&u(`${this.hass.localize("ui.card.climate.cooling",{name:s})}`,!0,t.getPropertyValue("--state-climate-cool-color")),c?(u(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:s,mode:this.hass.localize("ui.card.climate.high")})}`),u(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:s,mode:this.hass.localize("ui.card.climate.low")})}`)):u(`${this.hass.localize("ui.card.climate.target_temperature_entity",{name:s})}`),n.states.forEach((e=>{if(!e.attributes)return;const t=mi(e.attributes.current_temperature),n=[t];if(o&&n.push(i(e)?t:null),l&&n.push(a(e)?t:null),c){const t=mi(e.attributes.target_temp_high),i=mi(e.attributes.target_temp_low);n.push(t,i),d(new Date(e.last_changed),n)}else{const t=mi(e.attributes.temperature);n.push(t),d(new Date(e.last_changed),n)}}))}else if("humidifier"===r)u(`${this.hass.localize("ui.card.humidifier.target_humidity_entity",{name:s})}`),u(`${this.hass.localize("ui.card.humidifier.on_entity",{name:s})}`,!0),n.states.forEach((e=>{if(!e.attributes)return;const t=mi(e.attributes.humidity),n=[t];n.push("on"===e.state?t:null),d(new Date(e.last_changed),n)}));else{let e,t;u(s);let i=null;n.states.forEach((n=>{const a=mi(n.state),o=new Date(n.last_changed);if(null!==a&&i){var r;const n=o.getTime(),s=i.getTime(),l=null===(r=t)||void 0===r?void 0:r.getTime();d(i,[(s-l)/(n-l)*(a-e)+e]),d(new Date(s+1),[null]),d(o,[a]),t=o,e=a,i=null}else null!==a&&null===i?(d(o,[a]),t=o,e=a):null===a&&null===i&&void 0!==e&&(i=o)}))}d(a,l),Array.prototype.push.apply(i,c)})),this._chartData={datasets:i}}}]}}),f);customElements.define("state-history-chart-line",yi);const bi=new Set(["battery_charging","connectivity","light","moving","plug","power","presence","running"]),_i=new Set(["on","off","home","not_home","unavailable","unknown","idle"]),ki=new Map;let wi=0;const xi=(e,t,n)=>{if("on"!==e&&"off"!==e||!(e=>e&&"binary_sensor"===Ge(e.entity_id)&&"device_class"in e.attributes&&!bi.has(e.attributes.device_class))(t)||(e="on"===e?"off":"on"),ki.has(e))return ki.get(e);if(_i.has(e)){const t=n.getPropertyValue(`--state-${e}-color`);return ki.set(e,t),t}const i=vi(wi,n);return wi++,ki.set(e,i),i};h([x("state-history-chart-timeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"data",value:()=>[]},{kind:"field",decorators:[p()],key:"names",value:()=>!1},{kind:"field",decorators:[p()],key:"unit",value:void 0},{kind:"field",decorators:[p()],key:"identifier",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"isSingleDevice",value:()=>!1},{kind:"field",decorators:[p({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[v()],key:"_chartData",value:void 0},{kind:"field",decorators:[v()],key:"_chartOptions",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        .height=${30*this.data.length+30}
        chart-type="timeline"
      ></ha-chart-base>
    `}},{kind:"method",key:"willUpdate",value:function(e){this.hasUpdated||(this._chartOptions={maintainAspectRatio:!1,parsing:!1,animation:!1,scales:{x:{type:"timeline",position:"bottom",adapters:{date:{locale:this.hass.locale}},ticks:{autoSkip:!0,maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},grid:{offset:!1},time:{tooltipFormat:"datetimeseconds"}},y:{type:"category",barThickness:20,offset:!0,grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:1!==this.data.length},afterSetDimensions:e=>{e.maxWidth=.18*e.chart.width},position:Me(this.hass)?"right":"left"}},plugins:{tooltip:{mode:"nearest",callbacks:{title:e=>e[0].chart.data.labels[e[0].datasetIndex],beforeBody:e=>e[0].dataset.label||"",label:e=>{const t=e.dataset.data[e.dataIndex];return[t.label||"",ut(t.start,this.hass.locale),ut(t.end,this.hass.locale)]},labelColor:e=>({borderColor:e.dataset.data[e.dataIndex].color,backgroundColor:e.dataset.data[e.dataIndex].color})}},filler:{propagate:!0}},locale:dt(this.hass.locale)}),e.has("data")&&this._generateData()}},{kind:"method",key:"_generateData",value:function(){const e=getComputedStyle(this);let t=this.data;t||(t=[]);const n=new Date(t.reduce(((e,t)=>Math.min(e,new Date(t.data[0].last_changed).getTime())),(new Date).getTime()));let i=this.endTime||new Date(t.reduce(((e,t)=>Math.max(e,new Date(t.data[t.data.length-1].last_changed).getTime())),n.getTime()));i>new Date&&(i=new Date);const a=[],o=[],r=this.names||{};t.forEach((t=>{let s,l=null,c=null,d=n;const u=r[t.entity_id]||t.name,h=[];t.data.forEach((n=>{let a=n.state;a||(a=null),new Date(n.last_changed)>i||(null===l?(l=a,c=n.state_localize,d=new Date(n.last_changed)):a!==l&&(s=new Date(n.last_changed),h.push({start:d,end:s,label:c,color:xi(l,this.hass.states[t.entity_id],e)}),l=a,c=n.state_localize,d=s))})),null!==l&&h.push({start:d,end:i,label:c,color:xi(l,this.hass.states[t.entity_id],e)}),o.push({data:h,label:t.entity_id}),a.push(u)})),this._chartData={labels:a,datasets:o}}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-chart-base {
        --chart-max-height: none;
      }
    `}}]}}),f),h([x("state-history-charts")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"historyData",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"names",value:()=>!1},{kind:"field",decorators:[p({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[p({type:Boolean,attribute:"up-to-now"})],key:"upToNow",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"no-single"})],key:"noSingle",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"method",key:"render",value:function(){if(!ht(this.hass,"history"))return g` <div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`;if(this.isLoadingData&&!this.historyData)return g` <div class="info">
        ${this.hass.localize("ui.components.history_charts.loading_history")}
      </div>`;if(this._isHistoryEmpty())return g` <div class="info">
        ${this.hass.localize("ui.components.history_charts.no_history_found")}
      </div>`;const e=this.upToNow?new Date:this.endTime||new Date;return g`
      ${this.historyData.timeline.length?g`
            <state-history-chart-timeline
              .hass=${this.hass}
              .data=${this.historyData.timeline}
              .endTime=${e}
              .noSingle=${this.noSingle}
              .names=${this.names}
            ></state-history-chart-timeline>
          `:g``}
      ${this.historyData.line.map((t=>g`
          <state-history-chart-line
            .hass=${this.hass}
            .unit=${t.unit}
            .data=${t.data}
            .identifier=${t.identifier}
            .isSingleDevice=${!this.noSingle&&t.data&&1===t.data.length}
            .endTime=${e}
            .names=${this.names}
          ></state-history-chart-line>
        `))}
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return!(1===e.size&&e.has("hass"))}},{kind:"method",key:"_isHistoryEmpty",value:function(){const e=!this.historyData||!this.historyData.timeline||!this.historyData.line||0===this.historyData.timeline.length&&0===this.historyData.line.length;return!this.isLoadingData&&e}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
        /* height of single timeline chart = 60px */
        min-height: 60px;
      }
      .info {
        text-align: center;
        line-height: 60px;
        color: var(--secondary-text-color);
      }
    `}}]}}),f);const Ei=["climate","humidifier","water_heater"],Si=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],Ti=(e,t,n,i,a=!1,o,r=!0)=>{let s="history/period";return n&&(s+="/"+n.toISOString()),s+="?filter_entity_id="+t,i&&(s+="&end_time="+i.toISOString()),a&&(s+="&skip_initial_state"),void 0!==o&&(s+=`&significant_changes_only=${Number(o)}`),r&&(s+="&minimal_response"),e.callApi("GET",s)},Di=(e,t)=>e.state===t.state&&(!e.attributes||!t.attributes||Si.every((n=>e.attributes[n]===t.attributes[n]))),Ci=(e,t,n)=>{const i={},a=[];if(!t)return{line:[],timeline:[]};t.forEach((t=>{if(0===t.length)return;const o=t.find((e=>e.attributes&&("unit_of_measurement"in e.attributes||"state_class"in e.attributes)));let r;r=o?o.attributes.unit_of_measurement||" ":{climate:e.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:e.config.unit_system.temperature}[Fe(t[0])],r?r in i?i[r].push(t):i[r]=[t]:a.push(((e,t,n)=>{const i=[],a=n.length-1;for(const o of n)i.length>0&&o.state===i[i.length-1].state||(o.entity_id||(o.attributes=n[a].attributes,o.entity_id=n[a].entity_id),i.push({state_localize:rn(e,o,t),state:o.state,last_changed:o.last_changed}));return{name:Je(n[0]),entity_id:n[0].entity_id,data:i}})(n,e.locale,t))}));return{line:Object.keys(i).map((e=>((e,t)=>{const n=[];for(const e of t){const t=e[e.length-1],i=Fe(t),a=[];for(const t of e){let e;if(Ei.includes(i)){e={state:t.state,last_changed:t.last_updated,attributes:{}};for(const n of Si)n in t.attributes&&(e.attributes[n]=t.attributes[n])}else e=t;a.length>1&&Di(e,a[a.length-1])&&Di(e,a[a.length-2])||a.push(e)}n.push({domain:i,name:Je(t),entity_id:t.entity_id,states:a})}return{unit:e,identifier:t.map((e=>e[0].entity_id)).join(""),data:n}})(e,i[e]))),timeline:a}},Ai=(e,t)=>e.callWS({type:"history/list_statistic_ids",statistic_type:t}),$i=(e,t,n,i,a="hour")=>e.callWS({type:"history/statistics_during_period",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),statistic_ids:i,period:a}),Ri=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const n=e[0].sum;return null===n?t:t-n},Ii=(e,t)=>{let n=null;for(const i of t){if(!(i in e))continue;const t=Ri(e[i]);null!==t&&(null===n?n=t:n+=t)}return n},Oi=(e,t)=>e.some((e=>null!==e[t])),Mi={};const zi=(e,t,n,i,a)=>{const o=n.cacheKey,r=new Date,s=new Date(r);s.setHours(s.getHours()-n.hoursToShow);let l=s,c=!1,d=Mi[o+`_${n.hoursToShow}`];if(d&&l>=d.startTime&&l<=d.endTime&&d.language===a){if(l=d.endTime,c=!0,r<=d.endTime)return d.prom}else d=Mi[o]=function(e,t,n){return{prom:Promise.resolve({line:[],timeline:[]}),language:e,startTime:t,endTime:n,data:{line:[],timeline:[]}}}(a,s,r);const u=d.prom;return d.prom=(async()=>{let n;try{n=(await Promise.all([u,Ti(e,t,l,r,c)]))[1]}catch(e){throw delete Mi[o],e}const a=Ci(e,n,i);return c?(ji(a.line,d.data.line),Ni(a.timeline,d.data.timeline),Hi(s,d.data)):d.data=a,d.data})(),d.startTime=s,d.endTime=r,d.prom},ji=(e,t)=>{e.forEach((e=>{const n=e.unit,i=t.find((e=>e.unit===n));i?e.data.forEach((e=>{const t=i.data.find((t=>e.entity_id===t.entity_id));t?t.states=t.states.concat(e.states):i.data.push(e)})):t.push(e)}))},Ni=(e,t)=>{e.forEach((e=>{const n=t.find((t=>t.entity_id===e.entity_id));n?n.data=n.data.concat(e.data):t.push(e)}))},Pi=(e,t)=>{if(0===t.length)return t;const n=t.findIndex((t=>new Date(t.last_changed)>e));if(0===n)return t;const i=-1===n?t.length-1:n-1;return t[i].last_changed=e,t.slice(i)},Hi=(e,t)=>{t.line.forEach((t=>{t.data.forEach((t=>{t.states=Pi(e,t.states)}))})),t.timeline.forEach((t=>{t.data=Pi(e,t.data)}))};h([x("ha-more-info-history")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"entityId",value:void 0},{kind:"field",decorators:[v()],key:"_stateHistory",value:void 0},{kind:"field",key:"_showMoreHref",value:()=>""},{kind:"field",key:"_throttleGetStateHistory",value(){return hi((()=>{this._getStateHistory()}),1e4)}},{kind:"method",key:"render",value:function(){return this.entityId?g`${ht(this.hass,"history")?g` <div class="header">
            <div class="title">
              ${this.hass.localize("ui.dialogs.more_info_control.history")}
            </div>
            <a href=${this._showMoreHref} @click=${this._close}
              >${this.hass.localize("ui.dialogs.more_info_control.show_more")}</a
            >
          </div>
          <state-history-charts
            up-to-now
            .hass=${this.hass}
            .historyData=${this._stateHistory}
            .isLoadingData=${!this._stateHistory}
          ></state-history-charts>`:""}`:g``}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),e.has("entityId")){if(this._stateHistory=void 0,!this.entityId)return;return this._showMoreHref=`/history?entity_id=${this.entityId}&start_date=${ui().toISOString()}`,void this._throttleGetStateHistory()}if(!this.entityId||!e.has("hass"))return;const t=e.get("hass");t&&this.hass.states[this.entityId]!==(null==t?void 0:t.states[this.entityId])&&setTimeout(this._throttleGetStateHistory,1e3)}},{kind:"method",key:"_getStateHistory",value:async function(){ht(this.hass,"history")&&(this._stateHistory=await zi(this.hass,this.entityId,{cacheKey:`more_info.${this.entityId}`,hoursToShow:24},this.hass.localize,this.hass.language))}},{kind:"method",key:"_close",value:function(){setTimeout((()=>d(this,"closed")),500)}},{kind:"get",static:!0,key:"styles",value:function(){return[k`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .header > a,
        a:visited {
          color: var(--accent-color);
        }
        .title {
          font-family: var(--paper-font-title_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-title_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-subhead_-_font-size);
          font-weight: var(--paper-font-title_-_font-weight);
          letter-spacing: var(--paper-font-title_-_letter-spacing);
          line-height: var(--paper-font-title_-_line-height);
        }
      `]}}]}}),f);let Li,Bi;async function Ui(){return Bi||async function(){if(Li)return(await Li).default;Li=window.ResizeObserver;try{new Li((function(){}))}catch(e){Li=import("./c.24bd2446.js"),Li=(await Li).default}return Bi=Li}()}const Fi=Symbol("scrollerRef");let Vi="attachShadow"in Element.prototype&&(!("ShadyDOM"in window)||!window.ShadyDOM.inUse);const Wi="uni-virtualizer-host";let Gi=null;function qi(e,t){return`\n    ${e} {\n      display: block;\n      position: relative;\n      contain: strict;\n      height: 150px;\n      overflow: auto;\n    }\n    ${t} {\n      box-sizing: border-box;\n    }`}class Yi{constructor(e){this._benchmarkStart=null,this._layout=null,this._scrollTarget=null,this._sizer=null,this._scrollSize=null,this._scrollErr=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._container=null,this._containerElement=null,this._containerInlineStyle=null,this._containerStylesheet=null,this._containerSize=null,this._containerRO=null,this._childrenRO=null,this._mutationObserver=null,this._mutationPromise=null,this._mutationPromiseResolver=null,this._mutationsObserved=!1,this._loadListener=this._childLoaded.bind(this),this._scrollToIndex=null,this._items=[],this._totalItems=null,this._first=0,this._last=0,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._first=-1,this._last=-1,e&&Object.assign(this,e)}set items(e){e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}get totalItems(){return null===this._totalItems?this._items.length:this._totalItems}set totalItems(e){if("number"!=typeof e&&null!==e)throw new Error("New value must be a number.");e!==this._totalItems&&(this._totalItems=e,this._schedule(this._updateLayout))}get container(){return this._container}set container(e){e!==this._container&&(this._container&&this._children.forEach((e=>e.parentNode.removeChild(e))),this._container=e,this._schedule(this._updateLayout),this._initResizeObservers().then((()=>{const t=this._containerElement,n=e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.host:e;t!==n&&(this._containerRO.disconnect(),this._containerSize=null,t?(this._containerInlineStyle?t.setAttribute("style",this._containerInlineStyle):t.removeAttribute("style"),this._containerInlineStyle=null,t===this._scrollTarget&&(t.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._sizer.remove()),t.removeEventListener("load",this._loadListener,!0),this._mutationObserver.disconnect()):addEventListener("scroll",this,{passive:!0}),this._containerElement=n,n&&(this._containerInlineStyle=n.getAttribute("style")||null,this._applyContainerStyles(),n===this._scrollTarget&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild)),this._schedule(this._updateLayout),this._containerRO.observe(n),this._mutationObserver.observe(n,{childList:!0}),this._mutationPromise=new Promise((e=>this._mutationPromiseResolver=e)),this._layout&&this._layout.listenForChildLoadEvents&&n.addEventListener("load",this._loadListener,!0)))})))}get layout(){return this._layout}set layout(e){if(this._layout===e)return;let t,n;if("object"==typeof e?(void 0!==e.type&&(t=e.type,delete e.type),n=e):t=e,"function"==typeof t){if(this._layout instanceof t)return void(n&&(this._layout.config=n));t=new t(n)}this._layout&&(this._measureCallback=null,this._measureChildOverride=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),delete this.container[Fi],this.container.removeEventListener("load",this._loadListener,!0),this._containerElement&&this._sizeContainer(void 0)),this._layout=t,this._layout&&(this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._container[Fi]=this,this._layout.listenForChildLoadEvents&&this._container.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout))}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter((t=>t.startTime>=this._benchmarkStart&&t.startTime<e)).reduce(((e,t)=>e+t.duration),0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){const e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<t.length;i++){const a=t[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(a))&&(e[o]=n.call(this,a,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},function(e){const t=window.getComputedStyle(e);return{marginTop:Qi(t.marginTop),marginRight:Qi(t.marginRight),marginBottom:Qi(t.marginBottom),marginLeft:Qi(t.marginLeft)}}(e))}get scrollTarget(){return this._scrollTarget}set scrollTarget(e){e===window&&(e=null),this._scrollTarget!==e&&(this._sizeContainer(void 0),this._scrollTarget&&(this._scrollTarget.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._scrollTarget===this._containerElement&&this._sizer.remove()),this._scrollTarget=e,e&&(e.addEventListener("scroll",this,{passive:!0}),e===this._containerElement&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild))))}set scrollToIndex(e){this._scrollToIndex=e,this._schedule(this._updateLayout)}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(){const{_rangeChanged:e,_itemsChanged:t}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||t)&&(this._notifyRange(),this._rangeChanged=!1,this._itemsChanged=!1,await this._mutationPromise),this._layout.measureChildren&&this._children.forEach((e=>this._childrenRO.observe(e))),this._positionChildren(this._childrenPos),this._sizeContainer(this._scrollSize),this._scrollErr&&(this._correctScrollError(this._scrollErr),this._scrollErr=null),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout.totalItems=this._totalItems,null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(this._itemsChanged),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){}window.performance.mark("uv-start")}this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":this._scrollTarget&&e.target!==this._scrollTarget||this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=e.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollErr=e.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=e.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(e.detail),this._schedule(this._updateDOM);break;default:console.warn("event not handled",e)}}async _initResizeObservers(){if(null===this._containerRO){const e=await Ui();this._containerRO=new e((e=>this._containerSizeChanged(e[0].contentRect))),this._childrenRO=new e(this._childrenSizeChanged.bind(this)),this._mutationObserver=new MutationObserver(this._observeMutations.bind(this))}}_applyContainerStyles(){if(Vi){if(null===this._containerStylesheet){(this._containerStylesheet=document.createElement("style")).textContent=qi(":host","::slotted(*)")}const e=this._containerElement.shadowRoot||this._containerElement.attachShadow({mode:"open"}),t=e.querySelector("slot:not([name])");e.appendChild(this._containerStylesheet),t||e.appendChild(document.createElement("slot"))}else Gi||(Gi=document.createElement("style"),Gi.textContent=qi(`.${Wi}`,`.${Wi} > *`),document.head.appendChild(Gi)),this._containerElement&&this._containerElement.classList.add(Wi)}_createContainerSizer(){const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.innerHTML="&nbsp;",e.id="uni-virtualizer-spacer",e}get _children(){const e=[];let t=this.container.firstElementChild;for(;t;)"uni-virtualizer-spacer"!==t.id&&e.push(t),t=t.nextElementSibling;return e}_updateView(){if(!this.container||!this._containerElement||!this._layout)return;let e,t,n,i;if(this._scrollTarget===this._containerElement&&null!==this._containerSize)e=this._containerSize.width,t=this._containerSize.height,i=this._containerElement.scrollLeft,n=this._containerElement.scrollTop;else{const a=this._containerElement.getBoundingClientRect(),o=this._scrollTarget?this._scrollTarget.getBoundingClientRect():{top:a.top+window.pageYOffset,left:a.left+window.pageXOffset,width:innerWidth,height:innerHeight},r=o.width,s=o.height,l=Math.max(0,Math.min(r,a.left-o.left)),c=Math.max(0,Math.min(s,a.top-o.top));e=("vertical"===this._layout.direction?Math.max(0,Math.min(r,a.right-o.left)):r)-l,t=("vertical"===this._layout.direction?s:Math.max(0,Math.min(s,a.bottom-o.top)))-c,i=Math.max(0,-(a.left-o.left)),n=Math.max(0,-(a.top-o.top))}this._layout.viewportSize={width:e,height:t},this._layout.viewportScroll={top:n,left:i}}_sizeContainer(e){if(this._scrollTarget===this._containerElement){const t=e&&e.width?e.width-1:0,n=e&&e.height?e.height-1:0;this._sizer&&(this._sizer.style.transform=`translate(${t}px, ${n}px)`)}else if(this._containerElement){const t=this._containerElement.style;t.minWidth=e&&e.width?e.width+"px":null,t.minHeight=e&&e.height?e.height+"px":null}}_positionChildren(e){if(e){const t=this._children;Object.keys(e).forEach((n=>{const i=n-this._first,a=t[i];if(a){const{top:t,left:i,width:o,height:r}=e[n];a.style.position="absolute",a.style.transform=`translate(${i}px, ${t}px)`,void 0!==o&&(a.style.width=o+"px"),void 0!==r&&(a.style.height=r+"px")}}))}}async _adjustRange(e){const{_first:t,_last:n,_firstVisible:i,_lastVisible:a}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==a}_correctScrollError(e){this._scrollTarget?(this._scrollTarget.scrollTop-=e.top,this._scrollTarget.scrollLeft-=e.left):window.scroll(window.pageXOffset-e.left,window.pageYOffset-e.top)}_notifyRange(){this._container.dispatchEvent(new CustomEvent("rangeChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_notifyVisibility(){this._container.dispatchEvent(new CustomEvent("visibilityChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_containerSizeChanged(e){const{width:t,height:n}=e;this._containerSize={width:t,height:n},this._schedule(this._updateLayout)}async _observeMutations(){this._mutationsObserved||(this._mutationsObserved=!0,this._mutationPromiseResolver(),this._mutationPromise=new Promise((e=>this._mutationPromiseResolver=e)),this._mutationsObserved=!1)}_childLoaded(){}_childrenSizeChanged(e){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren(),this._schedule(this._updateLayout)}}function Qi(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}const Zi=e=>e;const Xi=e(class extends ft{constructor(e){if(super(e),this.first=0,this.last=-1,e.type!==P.CHILD)throw new Error("The scroll directive can only be used in child expressions")}render(e){e&&(this.renderItem=e.renderItem,this.keyFunction=e.keyFunction);const t=[];if(this.first>=0&&this.last>=this.first)for(let e=this.first;e<this.last+1;e++)t.push(this.items[e]);return Qt(t,this.keyFunction||Zi,this.renderItem)}update(e,[t]){var n;if(this.scroller||this._initialize(e,t)){const{scroller:e}=this;return this.items=e.items=t.items,e.totalItems=t.totalItems||(null===(n=t.items)||void 0===n?void 0:n.length)||0,e.layout=t.layout,e.scrollTarget=t.scrollTarget||this.container,t.scrollToIndex&&(e.scrollToIndex=t.scrollToIndex),this.render(t)}return o}_initialize(e,t){const n=this.container=e.parentNode;return n&&1===n.nodeType?(this.scroller=new Yi({container:n}),n.addEventListener("rangeChanged",(e=>{this.first=e.detail.first,this.last=e.detail.last,this.setValue(this.render())})),!0):(Promise.resolve().then((()=>this.update(e,[t]))),!1)}});function Ji(e,t,n,i){var a,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,n,r):a(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}let Ki=class extends f{constructor(){super(...arguments),this.scrollTarget=this}createRenderRoot(){return this}set layout(e){this._layout=e,this.requestUpdate()}get layout(){return this[Fi].layout}async scrollToIndex(e,t="start"){this._scrollToIndex={index:e,position:t},this.requestUpdate(),await this.updateComplete,this._scrollToIndex=null}render(){const{items:e,renderItem:t,keyFunction:n,scrollTarget:i}=this,a=this._layout;return g`
            ${Xi({items:e,renderItem:t,layout:a,keyFunction:n,scrollTarget:i,scrollToIndex:this._scrollToIndex})}
        `}};Ji([p()],Ki.prototype,"renderItem",void 0),Ji([p({attribute:!1})],Ki.prototype,"items",void 0),Ji([p({attribute:!1})],Ki.prototype,"scrollTarget",void 0),Ji([p()],Ki.prototype,"keyFunction",void 0),Ji([p({attribute:!1})],Ki.prototype,"layout",null),Ki=Ji([x("lit-virtualizer")],Ki);const ea=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){this[`__${String(t.key)}`]=e},get(){return this[`__${String(t.key)}`]},enumerable:!0,configurable:!0},finisher(n){const i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){if(i.call(this),this[t.key]){const n=this.renderRoot.querySelector(e);if(!n)return;n.scrollTop=this[t.key]}}}});h([x("ha-logbook")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"userIdToName",value:()=>({})},{kind:"field",decorators:[p({attribute:!1})],key:"traceContexts",value:()=>({})},{kind:"field",decorators:[p({attribute:!1})],key:"entries",value:()=>[]},{kind:"field",decorators:[p({type:Boolean,attribute:"narrow"})],key:"narrow",value:()=>!1},{kind:"field",decorators:[p({attribute:"rtl",type:Boolean})],key:"_rtl",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"no-name"})],key:"noName",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:()=>!1},{kind:"field",decorators:[ea(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass"),n=void 0===t||t.locale!==this.hass.locale;return e.has("entries")||e.has("traceContexts")||n}},{kind:"method",key:"updated",value:function(e){const t=e.get("hass");void 0!==t&&t.language===this.hass.language||(this._rtl=Me(this.hass))}},{kind:"method",key:"render",value:function(){var e;return null!==(e=this.entries)&&void 0!==e&&e.length?g`
      <div
        class="container ha-scrollbar ${C({narrow:this.narrow,rtl:this._rtl,"no-name":this.noName,"no-icon":this.noIcon})}"
        @scroll=${this._saveScrollPos}
      >
        ${this.virtualize?g`<lit-virtualizer
              scroller
              class="ha-scrollbar"
              .items=${this.entries}
              .renderItem=${this._renderLogbookItem}
            >
            </lit-virtualizer>`:this.entries.map(((e,t)=>this._renderLogbookItem(e,t)))}
      </div>
    `:g`
        <div class="container no-entries" .dir=${ze(this._rtl)}>
          ${this.hass.localize("ui.components.logbook.entries_not_found")}
        </div>
      `}},{kind:"field",key:"_renderLogbookItem",value(){return(e,t)=>{if(!e||void 0===t)return g``;const n=this.entries[t-1],i=e.entity_id?this.hass.states[e.entity_id]:void 0,a=e.context_user_id&&this.userIdToName[e.context_user_id],o=e.entity_id?Ge(e.entity_id):e.domain;return g`
      <div class="entry-container">
        ${0===t||null!=e&&e.when&&null!=n&&n.when&&new Date(e.when).toDateString()!==new Date(n.when).toDateString()?g`
              <h4 class="date">
                ${We(new Date(e.when),this.hass.locale)}
              </h4>
            `:g``}

        <div class="entry ${C({"no-entity":!e.entity_id})}">
          <div class="icon-message">
            ${this.noIcon?"":g`
                  <state-badge
                    .hass=${this.hass}
                    .overrideIcon=${e.icon||(e.domain&&!i?pt(e.domain):void 0)}
                    .overrideImage=${vt.has(o)?"":(null==i?void 0:i.attributes.entity_picture_local)||(null==i?void 0:i.attributes.entity_picture)}
                    .stateObj=${i}
                    .stateColor=${!1}
                  ></state-badge>
                `}
            <div class="message-relative_time">
              <div class="message">
                ${this.noName?"":g`<a
                      href="#"
                      @click=${this._entityClicked}
                      .entityId=${e.entity_id}
                      ><span class="name">${e.name}</span></a
                    >`}
                ${e.message}
                ${a?` ${this.hass.localize("ui.components.logbook.by")} ${a}`:e.context_event_type?"call_service"===e.context_event_type?` ${this.hass.localize("ui.components.logbook.by_service")}\n                  ${e.context_domain}.${e.context_service}`:e.context_entity_id===e.entity_id?` ${this.hass.localize("ui.components.logbook.by")}\n                  ${e.context_name?e.context_name:e.context_event_type}`:g` ${this.hass.localize("ui.components.logbook.by")}
                      <a
                        href="#"
                        @click=${this._entityClicked}
                        .entityId=${e.context_entity_id}
                        class="name"
                        >${e.context_entity_id_name}</a
                      >`:""}
              </div>
              <div class="secondary">
                <span
                  >${tn(new Date(e.when),this.hass.locale)}</span
                >
                -
                <ha-relative-time
                  .hass=${this.hass}
                  .datetime=${e.when}
                  capitalize
                ></ha-relative-time>
                ${"automation"===e.domain&&e.context_id in this.traceContexts?g`
                      -
                      <a
                        href=${`/config/automation/trace/${this.traceContexts[e.context_id].item_id}?run_id=${this.traceContexts[e.context_id].run_id}`}
                        @click=${this._close}
                        >${this.hass.localize("ui.components.logbook.show_trace")}</a
                      >
                    `:""}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}},{kind:"method",decorators:[H({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_entityClicked",value:function(e){const t=e.currentTarget.entityId;t&&(e.preventDefault(),e.stopPropagation(),d(this,"hass-more-info",{entityId:t}))}},{kind:"method",key:"_close",value:function(){setTimeout((()=>d(this,"closed")),500)}},{kind:"get",static:!0,key:"styles",value:function(){return[E,L,k`
        :host([virtualize]) {
          display: block;
          height: 100%;
        }

        .rtl {
          direction: ltr;
        }

        .entry-container {
          width: 100%;
        }

        .entry {
          display: flex;
          width: 100%;
          line-height: 2em;
          padding: 8px 16px;
          box-sizing: border-box;
          border-top: 1px solid var(--divider-color);
        }

        .entry.no-entity,
        .no-name .entry {
          cursor: default;
        }

        .entry:hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.04);
        }

        .narrow:not(.no-icon) .time {
          margin-left: 32px;
        }

        .message-relative_time {
          display: flex;
          flex-direction: column;
        }

        .secondary {
          font-size: 12px;
          line-height: 1.7;
        }

        .secondary a {
          color: var(--secondary-text-color);
        }

        .date {
          margin: 8px 0;
          padding: 0 16px;
        }

        .narrow .date {
          padding: 0 8px;
        }

        .rtl .date {
          direction: rtl;
        }

        .icon-message {
          display: flex;
          align-items: center;
        }

        .no-entries {
          text-align: center;
          color: var(--secondary-text-color);
        }

        state-badge {
          margin-right: 16px;
          flex-shrink: 0;
          color: var(--state-icon-color);
        }

        .message {
          color: var(--primary-text-color);
        }

        .no-name .message:first-letter {
          text-transform: capitalize;
        }

        a {
          color: var(--accent-color);
        }

        .container {
          max-height: var(--logbook-max-height);
        }

        .container,
        lit-virtualizer {
          height: 100%;
        }

        lit-virtualizer {
          contain: size layout !important;
        }

        .narrow .entry {
          line-height: 1.5;
          padding: 8px;
        }

        .narrow .icon-message state-badge {
          margin-left: 0;
        }
      `]}}]}}),f),h([x("ha-more-info-logbook")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"entityId",value:void 0},{kind:"field",decorators:[v()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[v()],key:"_traceContexts",value:void 0},{kind:"field",decorators:[v()],key:"_userIdToName",value:()=>({})},{kind:"field",key:"_lastLogbookDate",value:void 0},{kind:"field",key:"_fetchUserPromise",value:void 0},{kind:"field",key:"_error",value:void 0},{kind:"field",key:"_showMoreHref",value:()=>""},{kind:"field",key:"_throttleGetLogbookEntries",value(){return hi((()=>{this._getLogBookData()}),1e4)}},{kind:"method",key:"render",value:function(){if(!this.entityId)return g``;return this.hass.states[this.entityId]?g`
      ${ht(this.hass,"logbook")?this._error?g`<div class="no-entries">
              ${`${this.hass.localize("ui.components.logbook.retrieval_error")}: ${this._error}`}
            </div>`:this._logbookEntries?this._logbookEntries.length?g`
              <div class="header">
                <div class="title">
                  ${this.hass.localize("ui.dialogs.more_info_control.logbook")}
                </div>
                <a href=${this._showMoreHref} @click=${this._close}
                  >${this.hass.localize("ui.dialogs.more_info_control.show_more")}</a
                >
              </div>
              <ha-logbook
                narrow
                no-icon
                no-name
                relative-time
                .hass=${this.hass}
                .entries=${this._logbookEntries}
                .traceContexts=${this._traceContexts}
                .userIdToName=${this._userIdToName}
              ></ha-logbook>
            `:g`<div class="no-entries">
              ${this.hass.localize("ui.components.logbook.entries_not_found")}
            </div>`:g`
              <ha-circular-progress
                active
                alt=${this.hass.localize("ui.common.loading")}
              ></ha-circular-progress>
            `:""}
    `:g``}},{kind:"method",key:"firstUpdated",value:function(){this._fetchUserPromise=this._fetchUserNames()}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),e.has("entityId")){if(this._lastLogbookDate=void 0,this._logbookEntries=void 0,!this.entityId)return;return this._showMoreHref=`/logbook?entity_id=${this.entityId}&start_date=${ui().toISOString()}`,void this._throttleGetLogbookEntries()}if(!this.entityId||!e.has("hass"))return;const t=e.get("hass");t&&this.hass.states[this.entityId]!==(null==t?void 0:t.states[this.entityId])&&setTimeout(this._throttleGetLogbookEntries,1e3)}},{kind:"method",key:"_getLogBookData",value:async function(){if(!ht(this.hass,"logbook"))return;const e=this._lastLogbookDate||new Date((new Date).getTime()-864e5),t=new Date;let n,i;try{var a;[n,i]=await Promise.all([dn(this.hass,e.toISOString(),t.toISOString(),this.entityId,!0),null!==(a=this.hass.user)&&void 0!==a&&a.is_admin?(o=this.hass,o.callWS({type:"trace/contexts",domain:r,item_id:s})):{},this._fetchUserPromise])}catch(e){this._error=e.message}var o,r,s;this._logbookEntries=this._logbookEntries?[...n,...this._logbookEntries]:n,this._lastLogbookDate=t,this._traceContexts=i}},{kind:"method",key:"_fetchUserNames",value:async function(){var e;const t={},n=(null===(e=this.hass.user)||void 0===e?void 0:e.is_admin)&&gt(this.hass);if(Object.values(this.hass.states).forEach((e=>{e.attributes.user_id&&"person"===Fe(e)&&(this._userIdToName[e.attributes.user_id]=e.attributes.friendly_name)})),n){const e=await n;for(const n of e)n.id in t||(t[n.id]=n.name)}this._userIdToName=t}},{kind:"method",key:"_close",value:function(){setTimeout((()=>d(this,"closed")),500)}},{kind:"get",static:!0,key:"styles",value:function(){return[E,k`
        .no-entries {
          text-align: center;
          padding: 16px;
          color: var(--secondary-text-color);
        }
        ha-logbook {
          --logbook-max-height: 250px;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-logbook {
            --logbook-max-height: unset;
          }
        }
        ha-circular-progress {
          display: flex;
          justify-content: center;
        }
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .header > a,
        a:visited {
          color: var(--accent-color);
        }
        .title {
          font-family: var(--paper-font-title_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-title_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-subhead_-_font-size);
          font-weight: var(--paper-font-title_-_font-weight);
          letter-spacing: var(--paper-font-title_-_letter-spacing);
          line-height: var(--paper-font-title_-_line-height);
        }
      `]}}]}}),f);const ta={alarm_control_panel:()=>import("./c.f3211140.js"),automation:()=>import("./c.7598bd92.js"),camera:()=>import("./c.3dc005ef.js"),climate:()=>import("./c.d104aa62.js"),configurator:()=>import("./c.8ebb01a3.js"),counter:()=>import("./c.cf8c8c7e.js"),cover:()=>import("./c.61c45e5b.js"),fan:()=>import("./c.7cac74c2.js"),group:()=>import("./c.d672484c.js"),humidifier:()=>import("./c.d622c4b5.js"),input_datetime:()=>import("./c.9f835144.js"),light:()=>import("./c.15e9be46.js"),lock:()=>import("./c.173c2a3c.js"),media_player:()=>import("./c.3f26cfcb.js"),person:()=>import("./c.8388ff6d.js"),remote:()=>import("./c.0966e3ba.js"),script:()=>import("./c.2570dac5.js"),sun:()=>import("./c.a449b6ee.js"),timer:()=>import("./c.6717dbc8.js"),vacuum:()=>import("./c.84d5480a.js"),water_heater:()=>import("./c.75a0ffd2.js"),weather:()=>import("./c.187e9a93.js")},na=e=>mt.includes(e)?e:yt.includes(e)?"hidden":"default",ia=e=>{e in ta&&ta[e]()};let aa=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p()],key:"label",value:void 0},{kind:"field",decorators:[p()],key:"description",value:void 0},{kind:"field",decorators:[p()],key:"image",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div class="value">
            <slot></slot>
          </div>
          ${this.label?g`
                <div
                  class=${C({label:!0,big:this.label.length>5})}
                >
                  <span>${this.label}</span>
                </div>
              `:""}
        </div>
        ${this.description?g`<div class="title">${this.description}</div>`:""}
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[k`
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
          padding: var(--ha-label-badge-padding, 0 0 0 0);
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `]}},{kind:"method",key:"updated",value:function(e){b(_(n.prototype),"updated",this).call(this,e),e.has("image")&&(this.shadowRoot.getElementById("badge").style.backgroundImage=this.image?`url(${this.image})`:"")}}]}}),f);customElements.define("ha-label-badge",aa),h([x("ha-state-label-badge")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[p()],key:"name",value:void 0},{kind:"field",decorators:[p()],key:"icon",value:void 0},{kind:"field",decorators:[p()],key:"image",value:void 0},{kind:"field",decorators:[v()],key:"_timerTimeRemaining",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this._connected=!0,this.startInterval(this.state)}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._connected=!1,this.clearInterval()}},{kind:"method",key:"render",value:function(){var e;const t=this.state;if(!t)return g`
        <ha-label-badge
          class="warning"
          label=${this.hass.localize("state_badge.default.error")}
          description=${this.hass.localize("state_badge.default.entity_not_found")}
        >
          <ha-svg-icon .path=${B}></ha-svg-icon>
        </ha-label-badge>
      `;const n=Fe(t),i=this.icon||this._computeShowIcon(n,t),a=this.icon?"":this.image?this.image:t.attributes.entity_picture_local||t.attributes.entity_picture,o=a||i?void 0:this._computeValue(n,t);return g`
      <ha-label-badge
        class=${C({[n]:!0,"has-unit_of_measurement":"unit_of_measurement"in t.attributes})}
        .image=${a}
        .label=${this._computeLabel(n,t,this._timerTimeRemaining)}
        .description=${null!==(e=this.name)&&void 0!==e?e:Je(t)}
      >
        ${!a&&i?g`<ha-state-icon
              .icon=${this.icon}
              .state=${t}
            ></ha-state-icon>`:""}
        ${!o||a||i?"":g`<span class=${o&&o.length>4?"big":""}
              >${o}</span
            >`}
      </ha-label-badge>
    `}},{kind:"method",key:"updated",value:function(e){b(_(n.prototype),"updated",this).call(this,e),this._connected&&e.has("state")&&this.startInterval(this.state)}},{kind:"method",key:"_computeValue",value:function(e,t){switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":case"updater":return null;case"sensor":if("moon__phase"===t.attributes.device_class)return null;default:return t.state===He||t.state===Le?"—":Be(t)?Ue(t.state,this.hass.locale):rn(this.hass.localize,t,this.hass.locale)}}},{kind:"method",key:"_computeShowIcon",value:function(e,t){if(t.state===Le)return!1;switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"updater":case"person":case"scene":case"sun":case"timer":return!0;case"sensor":return"moon__phase"===t.attributes.device_class;default:return!1}}},{kind:"method",key:"_computeLabel",value:function(e,t,n){return t.state===Le||["device_tracker","alarm_control_panel","person"].includes(e)?this.hass.localize(`state_badge.${e}.${t.state}`)||this.hass.localize(`state_badge.default.${t.state}`)||t.state:"timer"===e?oi(n):t.attributes.unit_of_measurement||null}},{kind:"method",key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)}))},{kind:"method",key:"startInterval",value:function(e){this.clearInterval(),e&&"timer"===Fe(e)&&(this.calculateTimerRemaining(e),"active"===e.state&&(this._updateRemaining=window.setInterval((()=>this.calculateTimerRemaining(this.state)),1e3)))}},{kind:"method",key:"calculateTimerRemaining",value:function(e){this._timerTimeRemaining=ri(e)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        cursor: pointer;
      }
      .big {
        font-size: 70%;
      }
      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }
    `}}]}}),f);const oa=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let n,i;if(Array.isArray(e)){if(i=e.length,i!==t.length)return!1;for(n=i;0!=n--;)if(!oa(e[n],t[n]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;for(n of e.entries())if(!oa(n[1],t.get(n[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!==t.length)return!1;for(n=i;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const a=Object.keys(e);if(i=a.length,i!==Object.keys(t).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;for(n=i;0!=n--;){const i=a[n];if(!oa(e[i],t[i]))return!1}return!0}return e!=e&&t!=t},ra="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class sa extends HTMLElement{constructor(){super(),U(this,"holdTime",500),U(this,"ripple",void 0),U(this,"timer",void 0),U(this,"held",!1),U(this,"cancelled",!1),U(this,"dblClickTimeout",void 0),this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ra?"100px":"50px",height:ra?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)}),{passive:!0})}))}bind(e,t={}){e.actionHandler&&oa(t,e.actionHandler.options)||(e.actionHandler?(e.removeEventListener("touchstart",e.actionHandler.start),e.removeEventListener("touchend",e.actionHandler.end),e.removeEventListener("touchcancel",e.actionHandler.end),e.removeEventListener("mousedown",e.actionHandler.start),e.removeEventListener("click",e.actionHandler.end),e.removeEventListener("keyup",e.actionHandler.handleEnter)):e.addEventListener("contextmenu",(e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1})),e.actionHandler={options:t},t.disabled||(e.actionHandler.start=e=>{let n,i;this.cancelled=!1,e.touches?(n=e.touches[0].pageX,i=e.touches[0].pageY):(n=e.pageX,i=e.pageY),t.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(n,i),this.held=!0,Ke("heavy")}),this.holdTime))},e.actionHandler.end=e=>{if(["touchend","touchcancel"].includes(e.type)&&this.cancelled&&!this.held)return;const n=e.target;e.cancelable&&e.preventDefault(),t.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),t.hasHold&&this.held?d(n,"action",{action:"hold"}):t.hasDoubleClick?"click"===e.type&&e.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,d(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,d(n,"action",{action:"double_tap"})):d(n,"action",{action:"tap"})},e.actionHandler.handleEnter=e=>{13===e.keyCode&&e.currentTarget.actionHandler.end(e)},e.addEventListener("touchstart",(t=>{e.actionHandler.start(t)}),{passive:!0}),e.addEventListener("touchend",(t=>{e.actionHandler.end(t)})),e.addEventListener("touchcancel",(t=>{e.actionHandler.end(t)})),e.addEventListener("mousedown",e.actionHandler.start,{passive:!0}),e.addEventListener("click",e.actionHandler.end),e.addEventListener("keyup",e.actionHandler.handleEnter)))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler",sa);const la=(e,t)=>{const n=(()=>{const e=document.body;if(e.querySelector("action-handler"))return e.querySelector("action-handler");const t=document.createElement("action-handler");return e.appendChild(t),t})();n&&n.bind(e,t)},ca=e(class extends t{update(e,[t]){return la(e.element,t),F}render(e){}}),da=(e,t)=>((e,t,n=!0)=>{const i=Ge(t),a="group"===i?"homeassistant":i;let o;switch(i){case"lock":o=n?"unlock":"lock";break;case"cover":o=n?"open_cover":"close_cover";break;case"button":case"input_button":o="press";break;default:o=n?"turn_on":"turn_off"}return e.callService(a,o,{entity_id:t})})(e,t,et.includes(e.states[t].state)),ua=async(e,t,n,i)=>{let a;if("double_tap"===i&&n.double_tap_action?a=n.double_tap_action:"hold"===i&&n.hold_action?a=n.hold_action:"tap"===i&&n.tap_action&&(a=n.tap_action),a||(a={action:"more-info"}),a.confirmation&&(!a.confirmation.exemptions||!a.confirmation.exemptions.some((e=>e.user===t.user.id)))){let n;if(Ke("warning"),"call-service"===a.action){const[e,i]=a.service.split(".",2),o=t.services;if(e in o&&i in o[e]){const a=await t.loadBackendTranslation("title");n=`${bt(a,e)}: ${o[e][i].name||i}`}}if(!await _t(e,{text:a.confirmation.text||t.localize("ui.panel.lovelace.cards.actions.action_confirmation","action",n||t.localize("ui.panel.lovelace.editor.action-editor.actions."+a.action)||a.action)}))return}switch(a.action){case"more-info":n.entity||n.camera_image?d(e,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image}):(kt(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_entity_more_info")}),Ke("failure"));break;case"navigate":a.navigation_path?Xt(a.navigation_path):(kt(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_navigation_path")}),Ke("failure"));break;case"url":a.url_path?window.open(a.url_path):(kt(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_url")}),Ke("failure"));break;case"toggle":n.entity?(da(t,n.entity),Ke("light")):(kt(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_entity_toggle")}),Ke("failure"));break;case"call-service":{if(!a.service)return kt(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_service")}),void Ke("failure");const[n,i]=a.service.split(".",2);t.callService(n,i,a.service_data,a.target),Ke("light");break}case"fire-dom-event":d(e,"ll-custom",a)}};function ha(e){return void 0!==e&&"none"!==e.action}h([x("hui-state-label-badge")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return g`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${e}
        .name=${this._config.name}
        .icon=${this._config.icon}
        .image=${this._config.image}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)||this._config.entity?"0":void 0)}
      ></ha-state-label-badge>
    `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-state-label-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 4px;
      }
      ha-state-label-badge {
        display: inline-block;
        padding: 4px 2px 4px 2px;
        margin: -4px -2px -4px -2px;
      }
    `}}]}}),f);const fa="custom:",pa=window;"customCards"in pa||(pa.customCards=[]);const va=pa.customCards,ga=e=>va.find((t=>t.type===e)),ma=(e,t)=>{const n=document.createElement(e);return n.setConfig(t),n},ya=(e,t)=>(e=>{const t=document.createElement("hui-error-card");return customElements.get("hui-error-card")?t.setConfig(e):(import("./c.b575e31f.js"),customElements.whenDefined("hui-error-card").then((()=>{customElements.upgrade(t),t.setConfig(e)}))),t})(((e,t)=>({type:"error",error:e,origConfig:t}))(e,t)),ba=e=>e.startsWith(fa)?e.substr(fa.length):void 0,_a=(e,t,n,i,a,o)=>{try{return ka(e,t,n,i,a,o)}catch(n){return console.error(e,t.type,n),ya(n.message,t)}},ka=(e,t,n,i,a,o)=>{if(!t||"object"!=typeof t)throw new Error("Config is not an object");if(!(t.type||o||a&&"entity"in t))throw new Error("No card type configured");const r=t.type?ba(t.type):void 0;if(r)return((e,t)=>{if(customElements.get(e))return ma(e,t);const n=ya(`Custom element doesn't exist: ${e}.`,t);if(!e.includes("-"))return n;n.style.display="None";const i=window.setTimeout((()=>{n.style.display=""}),2e3);return customElements.whenDefined(e).then((()=>{clearTimeout(i),d(n,"ll-rebuild")})),n})(r,t);let s;if(a&&!t.type&&t.entity){s=`${a[t.entity.split(".",1)[0]]||a._domain_not_found}-entity`}else s=t.type||o;if(void 0===s)throw new Error("No type specified");const l=`hui-${s}-${e}`;if(i&&s in i)return i[s](),((e,t)=>{if(customElements.get(e))return ma(e,t);const n=document.createElement(e);return customElements.whenDefined(e).then((()=>{try{customElements.upgrade(n),n.setConfig(t)}catch(e){d(n,"ll-rebuild")}})),n})(l,t);if(n&&n.has(s))return ma(l,t);throw new Error(`Unknown type encountered: ${s}`)},wa=async(e,t,n,i)=>{const a=ba(e);if(a){const e=customElements.get(a);if(e)return e;if(!a.includes("-"))throw new Error(`Custom element not found: ${a}`);return new Promise(((e,t)=>{setTimeout((()=>t(new Error(`Custom element not found: ${a}`))),2e3),customElements.whenDefined(a).then((()=>e(customElements.get(a))))}))}const o=`hui-${e}-${t}`,r=customElements.get(o);if(n&&n.has(e))return r;if(i&&e in i)return r||i[e]().then((()=>customElements.get(o)));throw new Error(`Unknown type: ${e}`)},xa=/^(\w+)\.(\w+)$/,Ea=e=>xa.test(e),Sa=(e,t,n,i,a,o)=>{const r=[];null!=a&&a.length&&r.push((e=>a.includes(Ge(e)))),o&&r.push((t=>e.states[t]&&o(e.states[t])));const s=((e,t,n)=>{(!n||n>e.length)&&(n=e.length);const i=[];for(let a=0;a<e.length&&i.length<n;a++){let n=!0;for(const i of t)if(!i(e[a])){n=!1;break}n&&i.push(e[a])}return i})(n,r,t);if(s.length<t&&i.length){const n=Sa(e,t-s.length,i,[],a,o);s.push(...n)}return s},Ta=e=>e.config.state!==Jt?e.localize("ui.panel.lovelace.warning.entity_not_found","entity"):e.localize("ui.panel.lovelace.warning.starting");h([x("hui-warning")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return g`<ha-alert alert-type="warning"><slot></slot></ha-alert> `}}]}}),f),h([x("unavailable-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return g`
      <svg
        class="unavailableIcon"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.12 7.01043L3.87 39.7804C2.64 41.9804 4.24 44.6904 6.75 44.6904H43.25C45.77 44.6904 47.36 41.9804 46.13 39.7804L27.88 7.01043C26.63 4.75043 23.37 4.75043 22.12 7.01043Z"
          fill="#FF0000"
        />
        <path
          d="M25.0001 34.6201C24.3901 34.6201 23.8701 34.1601 23.8501 33.5901L23.1901 14.6201C23.1401 13.1201 23.9501 11.8301 25.0101 11.8301C26.0601 11.8301 26.8801 13.1201 26.8301 14.6201L26.1701 33.5901C26.1301 34.1601 25.6101 34.6201 25.0001 34.6201Z"
          fill="white"
        />
        <path
          d="M25.0001 40.2396C26.0052 40.2396 26.8201 39.4248 26.8201 38.4196C26.8201 37.4145 26.0052 36.5996 25.0001 36.5996C23.9949 36.5996 23.1801 37.4145 23.1801 38.4196C23.1801 39.4248 23.9949 40.2396 25.0001 40.2396Z"
          fill="white"
        />
      </svg>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      .unavailableIcon {
        width: 22px;
        height: 22px;
      }
    `}}]}}),f);let Da=h([x("hui-button-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.25135b5b.js"),document.createElement("hui-button-card-editor")}},{kind:"field",decorators:[p({type:Boolean})],key:"dialog",value:()=>!1},{kind:"field",decorators:[p({type:String})],key:"layout",value:()=>"big"},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"button",tap_action:{action:"toggle"},entity:Sa(e,1,t,n,["light","switch"])[0]||""}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",decorators:[W("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[v()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"getCardSize",value:function(){var e,t;return(null!==(e=this._config)&&void 0!==e&&e.show_icon?4:0)+(null!==(t=this._config)&&void 0!==t&&t.show_name?1:0)}},{kind:"method",key:"setConfig",value:function(e){if(e.entity&&!Ea(e.entity))throw new Error("Invalid entity");this._config={tap_action:{action:e.entity&&wt.has(Ge(e.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},show_icon:!0,show_name:!0,state_color:!0,...e}}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config"))return!0;const t=e.get("hass");return!t||t.themes!==this.hass.themes||t.locale!==this.hass.locale||Boolean(this._config.entity)&&t.states[this._config.entity]!==this.hass.states[this._config.entity]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this._config.entity?this.hass.states[this._config.entity]:void 0;if(this._config.entity&&!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=this._config.show_name?this._config.name||(e?Je(e):""):"";return g`
      <ha-card
        class=${C({"big-card":"big"===this.layout,"small-card":"small"===this.layout,"medium-card":"medium"===this.layout,unavailable:Qe.includes(e.state)})}
        @action=${this._handleAction}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        role="button"
        aria-label=${this._config.name||(e?Je(e):"")}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
        @keydown=${this._handleKeyDown}
      >
        ${this._config.show_icon?g`
              <ha-state-icon
                class=${C({"ha-status-icon":"big"===this.layout,"ha-status-icon-small":"medium"===this.layout||"small"===this.layout})}
                tabindex="-1"
                data-domain=${V(this._config.state_color&&e?Fe(e):void 0)}
                data-state=${V(e?xt(e):void 0)}
                .icon=${this._config.icon}
                .state=${e}
                style=${N({filter:e?this._computeBrightness(e):"",color:e?this._computeColor(e):"",height:this._config.icon_height?this._config.icon_height:""})}
              ></ha-state-icon>
            `:""}
        ${this._config.show_name?g`<span
              class=${C({"rect-card":"big"===this.layout,"rect-card-small":"small"===this.layout,"rect-card-medium":"medium"===this.layout})}
              tabindex="-1"
              .title=${t}
              >${t}</span
            >`:""}
        ${this._config.show_state&&e?g`<span class="state">
              ${rn(this.hass.localize,e,this.hass.locale)}
            </span>`:""}
        ${this._shouldRenderRipple?g`<mwc-ripple></mwc-ripple>`:""}
        ${Qe.includes(e.state)?g` <unavailable-icon></unavailable-icon>`:g``}
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||G(this,this.hass.themes,this._config.theme)}},{kind:"field",key:"_rippleHandlers",value(){return new q((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",key:"_handleKeyDown",value:function(e){"Enter"!==e.key&&" "!==e.key||ua(this,this.hass,this._config,"tap")}},{kind:"method",decorators:[H({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}},{kind:"get",static:!0,key:"styles",value:function(){return[Et,k`
        .big-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4% 0;
          font-size: 2.3rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }

        .medium-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          padding: 4% 0;
          font-size: 1.8rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }
        .small-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          padding: 4% 0;
          font-size: 1.2rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }

        ha-card:focus {
          outline: none;
        }

        .ha-status-icon {
          width: 40%;
          height: auto;
          color: var(--paper-item-icon-color, #7b7b7b);
          --mdc-icon-size: 100%;
        }

        .ha-status-icon-small {
          width: 63%;
          height: auto;
          color: var(--paper-item-icon-color, #7b7b7b);
          --mdc-icon-size: 100%;
        }

        ha-state-icon,
        span {
          outline: none;
        }
        unavailable-icon {
          position: absolute;
          top: 11px;
          right: 10%;
        }
        .rect-card-small {
          padding: 5%;
          padding-bottom: 4%;
          margin-bottom: 4%;
          margin-left: 7%;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          max-width: 110px;
          float: left;
          text-overflow: ellipsis;
        }

        .rect-card-medium {
          padding: 5%;
          padding-bottom: 4%;
          margin-bottom: 4%;
          margin-left: 7%;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          max-width: 200px;
          float: left;
          text-overflow: ellipsis;
        }

        .rect-card {
          padding: 5%;
          white-space: nowrap;
          overflow: hidden;
          max-width: 350px;
          text-overflow: ellipsis;
        }
        .state {
          font-size: 0.9rem;
          color: var(--secondary-text-color);
        }
      `]}},{kind:"method",key:"_computeBrightness",value:function(e){var t;if(!e.attributes.brightness||null===(t=this._config)||void 0===t||!t.state_color)return"";return`brightness(${(e.attributes.brightness+245)/5}%)`}},{kind:"method",key:"_computeColor",value:function(e){var t;return null!==(t=this._config)&&void 0!==t&&t.state_color&&e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:""}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}}]}}),f);const Ca=e=>"string"==typeof e?e:e.dateTime?e.dateTime:e.date?e.date:void 0;var Aa,$a,Ra,Ia,Oa,Ma,za,ja,Na={},Pa=[],Ha=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function La(e,t){for(var n in t)e[n]=t[n];return e}function Ba(e){var t=e.parentNode;t&&t.removeChild(e)}function Ua(e,t,n){var i,a,o,r={};for(o in t)"key"==o?i=t[o]:"ref"==o?a=t[o]:r[o]=t[o];if(arguments.length>2&&(r.children=arguments.length>3?Aa.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return Fa(e,r,i,a,null)}function Fa(e,t,n,i,a){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++Ra:a};return null==a&&null!=$a.vnode&&$a.vnode(o),o}function Va(e){return e.children}function Wa(e,t){this.props=e,this.context=t}function Ga(e,t){if(null==t)return e.__?Ga(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?Ga(e):null}function qa(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return qa(e)}}function Ya(e){(!e.__d&&(e.__d=!0)&&Ia.push(e)&&!Qa.__r++||Oa!==$a.debounceRendering)&&((Oa=$a.debounceRendering)||Ma)(Qa)}function Qa(){var e,t,n,i,a,o,r,s;for(Ia.sort(za);e=Ia.shift();)e.__d&&(t=Ia.length,i=void 0,a=void 0,r=(o=(n=e).__v).__e,(s=n.__P)&&(i=[],(a=La({},o)).__v=o.__v+1,oo(s,o,a,n.__n,void 0!==s.ownerSVGElement,null!=o.__h?[r]:null,i,null==r?Ga(o):r,o.__h),ro(i,o),o.__e!=r&&qa(o)),Ia.length>t&&Ia.sort(za));Qa.__r=0}function Za(e,t,n,i,a,o,r,s,l,c){var d,u,h,f,p,v,g,m=i&&i.__k||Pa,y=m.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(f=n.__k[d]=null==(f=t[d])||"boolean"==typeof f||"function"==typeof f?null:"string"==typeof f||"number"==typeof f||"bigint"==typeof f?Fa(null,f,null,null,f):Array.isArray(f)?Fa(Va,{children:f},null,null,null):f.__b>0?Fa(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)){if(f.__=n,f.__b=n.__b+1,null===(h=m[d])||h&&f.key==h.key&&f.type===h.type)m[d]=void 0;else for(u=0;u<y;u++){if((h=m[u])&&f.key==h.key&&f.type===h.type){m[u]=void 0;break}h=null}oo(e,f,h=h||Na,a,o,r,s,l,c),p=f.__e,(u=f.ref)&&h.ref!=u&&(g||(g=[]),h.ref&&g.push(h.ref,null,f),g.push(u,f.__c||p,f)),null!=p?(null==v&&(v=p),"function"==typeof f.type&&f.__k===h.__k?f.__d=l=Xa(f,l,e):l=Ka(e,f,h,m,p,l),"function"==typeof n.type&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=e&&(l=Ga(h))}for(n.__e=v,d=y;d--;)null!=m[d]&&("function"==typeof n.type&&null!=m[d].__e&&m[d].__e==n.__d&&(n.__d=eo(i).nextSibling),co(m[d],m[d]));if(g)for(d=0;d<g.length;d++)lo(g[d],g[++d],g[++d])}function Xa(e,t,n){for(var i,a=e.__k,o=0;a&&o<a.length;o++)(i=a[o])&&(i.__=e,t="function"==typeof i.type?Xa(i,t,n):Ka(n,i,i,a,i.__e,t));return t}function Ja(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){Ja(e,t)})):t.push(e)),t}function Ka(e,t,n,i,a,o){var r,s,l;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||a!=o||null==a.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(a),r=null;else{for(s=o,l=0;(s=s.nextSibling)&&l<i.length;l+=1)if(s==a)break e;e.insertBefore(a,o),r=o}return void 0!==r?r:a.nextSibling}function eo(e){var t,n,i;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(i=eo(n)))return i;return null}function to(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Ha.test(t)?n:n+"px"}function no(e,t,n,i,a){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||to(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||to(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i||e.addEventListener(t,o?ao:io,o):e.removeEventListener(t,o?ao:io,o);else if("dangerouslySetInnerHTML"!==t){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function io(e){return this.l[e.type+!1]($a.event?$a.event(e):e)}function ao(e){return this.l[e.type+!0]($a.event?$a.event(e):e)}function oo(e,t,n,i,a,o,r,s,l){var c,d,u,h,f,p,v,g,m,y,b,_,k,w,x,E=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(c=$a.__b)&&c(t);try{e:if("function"==typeof E){if(g=t.props,m=(c=E.contextType)&&i[c.__c],y=c?m?m.props.value:c.__:i,n.__c?v=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(g,y):(t.__c=d=new Wa(g,y),d.constructor=E,d.render=uo),m&&m.sub(d),d.props=g,d.state||(d.state={}),d.context=y,d.__n=i,u=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=La({},d.__s)),La(d.__s,E.getDerivedStateFromProps(g,d.__s))),h=d.props,f=d.state,d.__v=t,u)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,y),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,y)||t.__v===n.__v){for(t.__v!==n.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b]);d._sb=[],d.__h.length&&r.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,y),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,f,p)}))}if(d.context=y,d.props=g,d.__P=e,_=$a.__r,k=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[]}else do{d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25);d.state=d.__s,null!=d.getChildContext&&(i=La(La({},i),d.getChildContext())),u||null==d.getSnapshotBeforeUpdate||(p=d.getSnapshotBeforeUpdate(h,f)),x=null!=c&&c.type===Va&&null==c.key?c.props.children:c,Za(e,Array.isArray(x)?x:[x],t,n,i,a,o,r,s,l),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),v&&(d.__E=d.__=null),d.__e=!1}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=so(n.__e,t,n,i,a,o,r,l);(c=$a.diffed)&&c(t)}catch(e){t.__v=null,(l||null!=o)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),$a.__e(e,t,n)}}function ro(e,t){$a.__c&&$a.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){$a.__e(e,t.__v)}}))}function so(e,t,n,i,a,o,r,s){var l,c,d,u=n.props,h=t.props,f=t.type,p=0;if("svg"===f&&(a=!0),null!=o)for(;p<o.length;p++)if((l=o[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:3===l.nodeType)){e=l,o[p]=null;break}if(null==e){if(null===f)return document.createTextNode(h);e=a?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),o=null,s=!1}if(null===f)u===h||s&&e.data===h||(e.data=h);else{if(o=o&&Aa.call(e.childNodes),c=(u=n.props||Na).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!s){if(null!=o)for(u={},p=0;p<e.attributes.length;p++)u[e.attributes[p].name]=e.attributes[p].value;(d||c)&&(d&&(c&&d.__html==c.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,i,a){var o;for(o in n)"children"===o||"key"===o||o in t||no(e,o,null,n[o],i);for(o in t)a&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||no(e,o,t[o],n[o],i)}(e,h,u,a,s),d)t.__k=[];else if(p=t.props.children,Za(e,Array.isArray(p)?p:[p],t,n,i,a&&"foreignObject"!==f,o,r,o?o[0]:n.__k&&Ga(n,0),s),null!=o)for(p=o.length;p--;)null!=o[p]&&Ba(o[p]);s||("value"in h&&void 0!==(p=h.value)&&(p!==e.value||"progress"===f&&!p||"option"===f&&p!==u.value)&&no(e,"value",p,u.value,!1),"checked"in h&&void 0!==(p=h.checked)&&p!==e.checked&&no(e,"checked",p,u.checked,!1))}return e}function lo(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){$a.__e(e,n)}}function co(e,t,n){var i,a;if($a.unmount&&$a.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||lo(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){$a.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&co(i[a],t,n||"function"!=typeof e.type);n||null==e.__e||Ba(e.__e),e.__=e.__e=e.__d=void 0}function uo(e,t,n){return this.constructor(e,n)}function ho(e,t,n){var i,a,o;$a.__&&$a.__(e,t),a=(i="function"==typeof n)?null:n&&n.__k||t.__k,o=[],oo(t,e=(!i&&n||t).__k=Ua(Va,null,[e]),a||Na,Na,void 0!==t.ownerSVGElement,!i&&n?[n]:a?null:t.firstChild?Aa.call(t.childNodes):null,o,!i&&n?n:a?a.__e:t.firstChild,i),ro(o,e)}Aa=Pa.slice,$a={__e:function(e,t,n,i){for(var a,o,r;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&null!=o.getDerivedStateFromError&&(a.setState(o.getDerivedStateFromError(e)),r=a.__d),null!=a.componentDidCatch&&(a.componentDidCatch(e,i||{}),r=a.__d),r)return a.__E=a}catch(t){e=t}throw e}},Ra=0,Wa.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=La({},this.state),"function"==typeof e&&(e=e(La({},n),this.props)),e&&La(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Ya(this))},Wa.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ya(this))},Wa.prototype.render=Va,Ia=[],Ma="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,za=function(e,t){return e.__v.__b-t.__v.__b},Qa.__r=0,ja=0;var fo,po,vo,go=[],mo=[],yo=$a.__b,bo=$a.__r,_o=$a.diffed,ko=$a.__c,wo=$a.unmount;function xo(){for(var e;e=go.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(To),e.__H.__h.forEach(Do),e.__H.__h=[]}catch(t){e.__H.__h=[],$a.__e(t,e.__v)}}$a.__b=function(e){fo=null,yo&&yo(e)},$a.__r=function(e){bo&&bo(e);var t=(fo=e.__c).__H;t&&(po===fo?(t.__h=[],fo.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=mo,e.__N=e.i=void 0}))):(t.__h.forEach(To),t.__h.forEach(Do),t.__h=[])),po=fo},$a.diffed=function(e){_o&&_o(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==go.push(t)&&vo===$a.requestAnimationFrame||((vo=$a.requestAnimationFrame)||So)(xo)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==mo&&(e.__=e.__V),e.i=void 0,e.__V=mo}))),po=fo=null},$a.__c=function(e,t){t.some((function(e){try{e.__h.forEach(To),e.__h=e.__h.filter((function(e){return!e.__||Do(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],$a.__e(n,e.__v)}})),ko&&ko(e,t)},$a.unmount=function(e){wo&&wo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{To(e)}catch(e){t=e}})),n.__H=void 0,t&&$a.__e(t,n.__v))};var Eo="function"==typeof requestAnimationFrame;function So(e){var t,n=function(){clearTimeout(i),Eo&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Eo&&(t=requestAnimationFrame(n))}function To(e){var t=fo,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),fo=t}function Do(e){var t=fo;e.__c=e.__(),fo=t}function Co(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var i in t)if("__source"!==i&&e[i]!==t[i])return!0;return!1}function Ao(e){this.props=e}(Ao.prototype=new Wa).isPureReactComponent=!0,Ao.prototype.shouldComponentUpdate=function(e,t){return Co(this.props,e)||Co(this.state,t)};var $o=$a.__b;$a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$o&&$o(e)};var Ro=$a.__e;$a.__e=function(e,t,n,i){if(e.then)for(var a,o=t;o=o.__;)if((a=o.__c)&&a.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t);Ro(e,t,n,i)};var Io=$a.unmount;function Oo(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return Oo(e,t,n)}))),e}function Mo(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return Mo(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function zo(){this.__u=0,this.t=null,this.__b=null}function jo(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function No(){this.u=null,this.o=null}$a.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),Io&&Io(e)},(zo.prototype=new Wa).__c=function(e,t){var n=t.__c,i=this;null==i.t&&(i.t=[]),i.t.push(n);var a=jo(i.__v),o=!1,r=function(){o||(o=!0,n.__R=null,a?a(s):s())};n.__R=r;var s=function(){if(!--i.__u){if(i.state.__a){var e=i.state.__a;i.__v.__k[0]=Mo(e,e.__c.__P,e.__c.__O)}var t;for(i.setState({__a:i.__b=null});t=i.t.pop();)t.forceUpdate()}},l=!0===t.__h;i.__u++||l||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(r,r)},zo.prototype.componentWillUnmount=function(){this.t=[]},zo.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Oo(this.__b,n,i.__O=i.__P)}this.__b=null}var a=t.__a&&Ua(Va,null,e.fallback);return a&&(a.__h=null),[Ua(Va,null,t.__a?null:e.children),a]};var Po=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Ho(e){return this.getChildContext=function(){return e.context},e.children}function Lo(e){var t=this,n=e.i;t.componentWillUnmount=function(){ho(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),ho(Ua(Ho,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}(No.prototype=new Wa).__a=function(e){var t=this,n=jo(t.__v),i=t.o.get(e);return i[0]++,function(a){var o=function(){t.props.revealOrder?(i.push(a),Po(t,e,i)):a()};n?n(o):o()}},No.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ja(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},No.prototype.componentDidUpdate=No.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){Po(e,n,t)}))};var Bo="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Uo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Fo=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Vo=/[A-Z0-9]/g,Wo="undefined"!=typeof document,Go=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};Wa.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(Wa.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var qo=$a.event;function Yo(){}function Qo(){return this.cancelBubble}function Zo(){return this.defaultPrevented}$a.event=function(e){return qo&&(e=qo(e)),e.persist=Yo,e.isPropagationStopped=Qo,e.isDefaultPrevented=Zo,e.nativeEvent=e};var Xo={enumerable:!1,configurable:!0,get:function(){return this.class}},Jo=$a.vnode;$a.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,i={};for(var a in t){var o=t[a];if(!("value"===a&&"defaultValue"in t&&null==o||Wo&&"children"===a&&"noscript"===n||"class"===a||"className"===a)){var r=a.toLowerCase();"defaultValue"===a&&"value"in t&&null==t.value?a="value":"download"===a&&!0===o?o="":"ondoubleclick"===r?a="ondblclick":"onchange"!==r||"input"!==n&&"textarea"!==n||Go(t.type)?"onfocus"===r?a="onfocusin":"onblur"===r?a="onfocusout":Fo.test(a)?a=r:-1===n.indexOf("-")&&Uo.test(a)?a=a.replace(Vo,"-$&").toLowerCase():null===o&&(o=void 0):r=a="oninput","oninput"===r&&i[a=r]&&(a="oninputCapture"),i[a]=o}}"select"==n&&i.multiple&&Array.isArray(i.value)&&(i.value=Ja(t.children).forEach((function(e){e.props.selected=-1!=i.value.indexOf(e.props.value)}))),"select"==n&&null!=i.defaultValue&&(i.value=Ja(t.children).forEach((function(e){e.props.selected=i.multiple?-1!=i.defaultValue.indexOf(e.props.value):i.defaultValue==e.props.value}))),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",Xo)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),e.props=i}(e),e.$$typeof=Bo,Jo&&Jo(e)};var Ko=$a.__r;$a.__r=function(e){Ko&&Ko(e),e.__c};var er=$a.diffed;$a.diffed=function(e){er&&er(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value)};var tr="undefined"!=typeof globalThis?globalThis:window;tr.FullCalendarVDom?console.warn("FullCalendar VDOM already loaded"):tr.FullCalendarVDom={Component:Wa,createElement:Ua,render:ho,createRef:function(){return{current:null}},Fragment:Va,createContext:function(e){var t=function(e,t){var n={__c:t="__cC"+ja++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i;return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Ya(e)}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(e),n=t.Provider;return t.Provider=function(){var e=this,t=!this.getChildContext,i=n.apply(this,arguments);if(t){var a=[];this.shouldComponentUpdate=function(t){e.props.value!==t.value&&a.forEach((function(e){e.context=t.value,e.forceUpdate()}))},this.sub=function(e){a.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){a.splice(a.indexOf(e),1),t&&t.call(e)}}}return i},t},createPortal:function(e,t){var n=Ua(Lo,{__v:e,i:t});return n.containerInfo=t,n},flushToDom:function(){var e=$a.debounceRendering,t=[];function n(e){t.push(e)}$a.debounceRendering=n,ho(Ua(nr,{}),document.createElement("div"));for(;t.length;)t.shift()();$a.debounceRendering=e},unmountComponentAtNode:function(e){ho(null,e)}};var nr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){return Ua("div",{})},t.prototype.componentDidMount=function(){this.setState({})},t}(Wa);if("undefined"==typeof FullCalendarVDom)throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");var ir=FullCalendarVDom.Component,ar=FullCalendarVDom.createElement,or=FullCalendarVDom.render,rr=FullCalendarVDom.createRef,sr=FullCalendarVDom.Fragment,lr=FullCalendarVDom.createContext,cr=FullCalendarVDom.createPortal,dr=FullCalendarVDom.flushToDom,ur=FullCalendarVDom.unmountComponentAtNode,hr=function(){function e(e,t){this.context=e,this.internalEventSource=t}return e.prototype.remove=function(){this.context.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.context.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId],isRefetch:!0})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"format",{get:function(){return this.internalEventSource.meta.format},enumerable:!1,configurable:!0}),e}();function fr(e){e.parentNode&&e.parentNode.removeChild(e)}function pr(e,t){if(e.closest)return e.closest(t);if(!document.documentElement.contains(e))return null;do{if(vr(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}function vr(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}var gr=/(top|left|right|bottom|width|height)$/i;function mr(e,t){for(var n in t)yr(e,n,t[n])}function yr(e,t,n){null==n?e.style[t]="":"number"==typeof n&&gr.test(t)?e.style[t]=n+"px":e.style[t]=n}function br(e){var t,n;return null!==(n=null===(t=e.composedPath)||void 0===t?void 0:t.call(e)[0])&&void 0!==n?n:e.target}function _r(e){return e.getRootNode?e.getRootNode():document}function kr(e){e.preventDefault()}function wr(e,t){return function(n){var i=pr(n.target,e);i&&t.call(i,n,i)}}function xr(e,t,n,i){var a=wr(n,i);return e.addEventListener(t,a),function(){e.removeEventListener(t,a)}}var Er=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];var Sr=0;function Tr(){return String(Sr+=1)}function Dr(){document.body.classList.add("fc-not-allowed")}function Cr(){document.body.classList.remove("fc-not-allowed")}function Ar(e,t,n){return n.func?n.func(e,t):function(e,t){if(!e&&!t)return 0;if(null==t)return-1;if(null==e)return 1;if("string"==typeof e||"string"==typeof t)return String(e).localeCompare(String(t));return e-t}(e[n.field],t[n.field])*(n.order||1)}function $r(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function Rr(e,t){return e-t}function Ir(e){return e%1==0}function Or(e){var t=e.querySelector(".fc-scrollgrid-shrink-frame"),n=e.querySelector(".fc-scrollgrid-shrink-cushion");if(!t)throw new Error("needs fc-scrollgrid-shrink-frame className");if(!n)throw new Error("needs fc-scrollgrid-shrink-cushion className");return e.getBoundingClientRect().width-t.getBoundingClientRect().width+n.getBoundingClientRect().width}var Mr=["sun","mon","tue","wed","thu","fri","sat"];function zr(e,t){var n=Wr(e);return n[2]+=7*t,Gr(n)}function jr(e,t){var n=Wr(e);return n[2]+=t,Gr(n)}function Nr(e,t){var n=Wr(e);return n[6]+=t,Gr(n)}function Pr(e,t){return(t.valueOf()-e.valueOf())/864e5}function Hr(e,t){return Yr(e)===Yr(t)?Math.round(Pr(e,t)):null}function Lr(e){return Gr([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function Br(e,t,n,i){var a=Gr([t,0,1+Ur(t,n,i)]),o=Lr(e),r=Math.round(Pr(a,o));return Math.floor(r/7)+1}function Ur(e,t,n){var i=7+t-n;return-((7+Gr([e,0,i]).getUTCDay()-t)%7)+i-1}function Fr(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function Vr(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Wr(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function Gr(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function qr(e){return!isNaN(e.valueOf())}function Yr(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}function Qr(e,t,n,i){return{instanceId:Tr(),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==i?null:i}}var Zr=Object.prototype.hasOwnProperty;function Xr(e,t){var n={};if(t)for(var i in t){for(var a=[],o=e.length-1;o>=0;o-=1){var r=e[o][i];if("object"==typeof r&&r)a.unshift(r);else if(void 0!==r){n[i]=r;break}}a.length&&(n[i]=Xr(a))}for(o=e.length-1;o>=0;o-=1){var s=e[o];for(var l in s)l in n||(n[l]=s[l])}return n}function Jr(e,t){var n={};for(var i in e)t(e[i],i)&&(n[i]=e[i]);return n}function Kr(e,t){var n={};for(var i in e)n[i]=t(e[i],i);return n}function es(e){for(var t={},n=0,i=e;n<i.length;n++){t[i[n]]=!0}return t}function ts(e){var t=[];for(var n in e)t.push(e[n]);return t}function ns(e,t){if(e===t)return!0;for(var n in e)if(Zr.call(e,n)&&!(n in t))return!1;for(var n in t)if(Zr.call(t,n)&&e[n]!==t[n])return!1;return!0}function is(e,t){var n=[];for(var i in e)Zr.call(e,i)&&(i in t||n.push(i));for(var i in t)Zr.call(t,i)&&e[i]!==t[i]&&n.push(i);return n}function as(e,t,n){if(void 0===n&&(n={}),e===t)return!0;for(var i in t)if(!(i in e)||!os(e[i],t[i],n[i]))return!1;for(var i in e)if(!(i in t))return!1;return!0}function os(e,t,n){return e===t||!0===n||!!n&&n(e,t)}function rs(e,t,n){var i=n.dateEnv,a=n.pluginHooks,o=n.options,r=e.defs,s=e.instances;for(var l in s=Jr(s,(function(e){return!r[e.defId].recurringDef})),r){var c=r[l];if(c.recurringDef){var d=c.recurringDef.duration;d||(d=c.allDay?o.defaultAllDayEventDuration:o.defaultTimedEventDuration);for(var u=0,h=ss(c,d,t,i,a.recurringTypes);u<h.length;u++){var f=h[u],p=Qr(l,{start:f,end:i.add(f,d)});s[p.instanceId]=p}}}return{defs:r,instances:s}}function ss(e,t,n,i,a){var o=a[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:i.subtract(n.start,t),end:n.end},i);return e.allDay&&(o=o.map(Lr)),o}var ls=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function cs(e,t){var n;return"string"==typeof e?function(e){var t=ls.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?ds(e):"number"==typeof e?ds(((n={})[t||"milliseconds"]=e,n)):null}function ds(e){var t={years:e.years||e.year||0,months:e.months||e.month||0,days:e.days||e.day||0,milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)},n=e.weeks||e.week;return n&&(t.days+=7*n,t.specifiedWeeks=!0),t}function us(e){return hs(e)/864e5}function hs(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function fs(e){var t=e.milliseconds;if(t){if(t%1e3!=0)return{unit:"millisecond",value:t};if(t%6e4!=0)return{unit:"second",value:t/1e3};if(t%36e5!=0)return{unit:"minute",value:t/6e4};if(t)return{unit:"hour",value:t/36e5}}return e.days?e.specifiedWeeks&&e.days%7==0?{unit:"week",value:e.days/7}:{unit:"day",value:e.days}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function ps(e){return e.toISOString().replace(/T.*$/,"")}function vs(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",i=Math.abs(e),a=Math.floor(i/60),o=Math.round(i%60);return t?n+$r(a,2)+":"+$r(o,2):"GMT"+n+a+(o?":"+$r(o,2):"")}function gs(e,t,n){if(e===t)return!0;var i,a=e.length;if(a!==t.length)return!1;for(i=0;i<a;i+=1)if(!(n?n(e[i],t[i]):e[i]===t[i]))return!1;return!0}function ms(e,t,n){var i,a;return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];if(i){if(!gs(i,o)){n&&n(a);var s=e.apply(this,o);t&&t(s,a)||(a=s)}}else a=e.apply(this,o);return i=o,a}}function ys(e,t,n){var i,a,o=this;return function(r){if(i){if(!ns(i,r)){n&&n(a);var s=e.call(o,r);t&&t(s,a)||(a=s)}}else a=e.call(o,r);return i=r,a}}var bs={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},_s={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},ks=/\s*([ap])\.?m\.?/i,ws=/,/g,xs=/\s+/g,Es=/\u200e/g,Ss=/UTC|GMT/,Ts=function(){function e(e){var t={},n={},i=0;for(var a in e)a in bs?(n[a]=e[a],i=Math.max(bs[a],i)):(t[a]=e[a],a in _s&&(i=Math.max(_s[a],i)));this.standardDateProps=t,this.extendedSettings=n,this.severity=i,this.buildFormattingFunc=ms(Ds)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n,i){var a=this.standardDateProps,o=this.extendedSettings,r=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5;if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4;if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2;if(Yr(e)!==Yr(t))return 1;return 0}(e.marker,t.marker,n.calendarSystem);if(!r)return this.format(e,n);var s=r;!(s>1)||"numeric"!==a.year&&"2-digit"!==a.year||"numeric"!==a.month&&"2-digit"!==a.month||"numeric"!==a.day&&"2-digit"!==a.day||(s=1);var l=this.format(e,n),c=this.format(t,n);if(l===c)return l;var d=Ds(function(e,t){var n={};for(var i in e)(!(i in _s)||_s[i]<=t)&&(n[i]=e[i]);return n}(a,s),o,n),u=d(e),h=d(t),f=function(e,t,n,i){var a=0;for(;a<e.length;){var o=e.indexOf(t,a);if(-1===o)break;var r=e.substr(0,o);a=o+t.length;for(var s=e.substr(a),l=0;l<n.length;){var c=n.indexOf(i,l);if(-1===c)break;var d=n.substr(0,c);l=c+i.length;var u=n.substr(l);if(r===d&&s===u)return{before:r,after:s}}}return null}(l,u,c,h),p=o.separator||i||n.defaultSeparator||"";return f?f.before+u+p+h+f.after:l+p+c},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";case 2:return"day";default:return"time"}},e}();function Ds(e,t,n){var i=Object.keys(e).length;return 1===i&&"short"===e.timeZoneName?function(e){return vs(e.timeZoneOffset)}:0===i&&t.week?function(e){return function(e,t,n,i){var a=[];"narrow"===i?a.push(t):"short"===i&&a.push(t," ");a.push(n.simpleNumberFormat.format(e)),"rtl"===n.options.direction&&a.reverse();return a.join("")}(n.computeWeekNumber(e.marker),n.weekText,n.locale,t.week)}:function(e,t,n){e=Q({},e),t=Q({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"));"long"===e.timeZoneName&&(e.timeZoneName="short");t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var i,a=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var o=Q({},e);delete o.minute,i=new Intl.DateTimeFormat(n.locale.codes,o)}return function(o){var r=o.marker;return function(e,t,n,i,a){e=e.replace(Es,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1;e=e.replace(Ss,(function(){return n=!0,t})),n||(e+=" "+t);return e}(e,"UTC"===a.timeZone||null==t.timeZoneOffset?"UTC":vs(t.timeZoneOffset)));i.omitCommas&&(e=e.replace(ws,"").trim());i.omitZeroMinute&&(e=e.replace(":00",""));!1===i.meridiem?e=e.replace(ks,"").trim():"narrow"===i.meridiem?e=e.replace(ks,(function(e,t){return t.toLocaleLowerCase()})):"short"===i.meridiem?e=e.replace(ks,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===i.meridiem&&(e=e.replace(ks,(function(e){return e.toLocaleLowerCase()})));return e=e.replace(xs," "),e=e.trim(),e}((i&&!r.getUTCMinutes()?i:a).format(r),o,e,t,n)}}(e,t,n)}function Cs(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}function As(e,t,n,i){var a=Cs(e,n.calendarSystem);return{date:a,start:a,end:t?Cs(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,defaultSeparator:i||n.defaultSeparator}}var $s=function(){function e(e){this.cmdStr=e}return e.prototype.format=function(e,t,n){return t.cmdFormatter(this.cmdStr,As(e,null,t,n))},e.prototype.formatRange=function(e,t,n,i){return n.cmdFormatter(this.cmdStr,As(e,t,n,i))},e}(),Rs=function(){function e(e){this.func=e}return e.prototype.format=function(e,t,n){return this.func(As(e,null,t,n))},e.prototype.formatRange=function(e,t,n,i){return this.func(As(e,t,n,i))},e}();function Is(e){return"object"==typeof e&&e?new Ts(e):"string"==typeof e?new $s(e):"function"==typeof e?new Rs(e):null}var Os={navLinkDayClick:Us,navLinkWeekClick:Us,duration:cs,bootstrapFontAwesome:Us,buttonIcons:Us,customButtons:Us,defaultAllDayEventDuration:cs,defaultTimedEventDuration:cs,nextDayThreshold:cs,scrollTime:cs,scrollTimeReset:Boolean,slotMinTime:cs,slotMaxTime:cs,dayPopoverFormat:Is,slotDuration:cs,snapDuration:cs,headerToolbar:Us,footerToolbar:Us,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:Is,dayHeaderClassNames:Us,dayHeaderContent:Us,dayHeaderDidMount:Us,dayHeaderWillUnmount:Us,dayCellClassNames:Us,dayCellContent:Us,dayCellDidMount:Us,dayCellWillUnmount:Us,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:Us,weekNumbers:Boolean,weekNumberClassNames:Us,weekNumberContent:Us,weekNumberDidMount:Us,weekNumberWillUnmount:Us,editable:Boolean,viewClassNames:Us,viewDidMount:Us,viewWillUnmount:Us,nowIndicator:Boolean,nowIndicatorClassNames:Us,nowIndicatorContent:Us,nowIndicatorDidMount:Us,nowIndicatorWillUnmount:Us,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:Us,locale:Us,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:Us,eventOrder:function(e){var t,n,i=[],a=[];for("string"==typeof e?a=e.split(/\s*,\s*/):"function"==typeof e?a=[e]:Array.isArray(e)&&(a=e),t=0;t<a.length;t+=1)"string"==typeof(n=a[t])?i.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&i.push({func:n});return i},eventOrderStrict:Boolean,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:Us,contentHeight:Us,direction:String,weekNumberFormat:Is,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,progressiveEventRendering:Boolean,businessHours:Us,initialDate:Us,now:Us,eventDataTransform:Us,stickyHeaderDates:Us,stickyFooterScrollbar:Us,viewHeight:Us,defaultAllDay:Boolean,eventSourceFailure:Us,eventSourceSuccess:Us,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:Us,eventConstraint:Us,eventAllow:Us,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:Us,eventContent:Us,eventDidMount:Us,eventWillUnmount:Us,selectConstraint:Us,selectOverlap:Us,selectAllow:Us,droppable:Boolean,unselectCancel:String,slotLabelFormat:Us,slotLaneClassNames:Us,slotLaneContent:Us,slotLaneDidMount:Us,slotLaneWillUnmount:Us,slotLabelClassNames:Us,slotLabelContent:Us,slotLabelDidMount:Us,slotLabelWillUnmount:Us,dayMaxEvents:Us,dayMaxEventRows:Us,dayMinWidth:Number,slotLabelInterval:cs,allDayText:String,allDayClassNames:Us,allDayContent:Us,allDayDidMount:Us,allDayWillUnmount:Us,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:Is,rerenderDelay:Number,moreLinkText:Us,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMaxStack:Number,eventMinHeight:Number,eventMinWidth:Number,eventShortHeight:Number,slotEventOverlap:Boolean,plugins:Us,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:cs,hiddenDays:Us,monthMode:Boolean,fixedWeekCount:Boolean,validRange:Us,visibleRange:Us,titleFormat:Us,noEventsText:String,moreLinkClick:Us,moreLinkClassNames:Us,moreLinkContent:Us,moreLinkDidMount:Us,moreLinkWillUnmount:Us},Ms={eventDisplay:"auto",defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",dayHeaders:!0,initialView:"",aspectRatio:1.35,headerToolbar:{start:"title",center:"",end:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,nowIndicator:!1,scrollTime:"06:00:00",scrollTimeReset:!0,slotMinTime:"00:00:00",slotMaxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1,eventMinHeight:15,eventMinWidth:30,eventShortHeight:30},zs={datesSet:Us,eventsSet:Us,eventAdd:Us,eventChange:Us,eventRemove:Us,windowResize:Us,eventClick:Us,eventMouseEnter:Us,eventMouseLeave:Us,select:Us,unselect:Us,loading:Us,_unmount:Us,_beforeprint:Us,_afterprint:Us,_noEventDrop:Us,_noEventResize:Us,_resize:Us,_scrollRequest:Us},js={buttonText:Us,views:Us,plugins:Us,initialEvents:Us,events:Us,eventSources:Us},Ns={headerToolbar:Ps,footerToolbar:Ps,buttonText:Ps,buttonIcons:Ps};function Ps(e,t){return"object"==typeof e&&"object"==typeof t&&e&&t?ns(e,t):e===t}var Hs={type:String,component:Us,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:Us,usesMinMaxTime:Boolean,classNames:Us,content:Us,didMount:Us,willUnmount:Us};function Ls(e){return Xr(e,Ns)}function Bs(e,t){var n={},i={};for(var a in t)a in e&&(n[a]=t[a](e[a]));for(var a in e)a in t||(i[a]=e[a]);return{refined:n,extra:i}}function Us(e){return e}function Fs(e,t,n,i){for(var a={defs:{},instances:{}},o=al(n),r=0,s=e;r<s.length;r++){var l=nl(s[r],t,n,i,o);l&&Vs(l,a)}return a}function Vs(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function Ws(e,t){var n=e.instances[t];if(n){var i=e.defs[n.defId],a=qs(e,(function(e){return t=i,n=e,Boolean(t.groupId&&t.groupId===n.groupId);var t,n}));return a.defs[i.defId]=i,a.instances[n.instanceId]=n,a}return{defs:{},instances:{}}}function Gs(e,t){return{defs:Q(Q({},e.defs),t.defs),instances:Q(Q({},e.instances),t.instances)}}function qs(e,t){var n=Jr(e.defs,t),i=Jr(e.instances,(function(e){return n[e.defId]}));return{defs:n,instances:i}}function Ys(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Qs={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:Us,overlap:Us,allow:Us,className:Ys,classNames:Ys,color:String,backgroundColor:String,borderColor:String,textColor:String},Zs={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Xs(e,t){var n=function(e,t){return Array.isArray(e)?Fs(e,null,t,!0):"object"==typeof e&&e?Fs([e],null,t,!0):null!=e?String(e):null}(e.constraint,t);return{display:e.display||null,startEditable:null!=e.startEditable?e.startEditable:e.editable,durationEditable:null!=e.durationEditable?e.durationEditable:e.editable,constraints:null!=n?[n]:[],overlap:null!=e.overlap?e.overlap:null,allows:null!=e.allow?[e.allow]:[],backgroundColor:e.backgroundColor||e.color||"",borderColor:e.borderColor||e.color||"",textColor:e.textColor||"",classNames:(e.className||[]).concat(e.classNames||[])}}function Js(e,t){return{display:null!=t.display?t.display:e.display,startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var Ks={id:String,groupId:String,title:String,url:String},el={start:Us,end:Us,date:Us,allDay:Boolean},tl=Q(Q(Q({},Ks),el),{extendedProps:Us});function nl(e,t,n,i,a){void 0===a&&(a=al(n));var o=il(e,n,a),r=o.refined,s=o.extra,l=function(e,t){var n=null;e&&(n=e.defaultAllDay);null==n&&(n=t.options.defaultAllDay);return n}(t,n),c=function(e,t,n,i){for(var a=0;a<i.length;a+=1){var o=i[a].parse(e,n);if(o){var r=e.allDay;return null==r&&null==(r=t)&&null==(r=o.allDayGuess)&&(r=!1),{allDay:r,duration:o.duration,typeData:o.typeData,typeId:a}}}return null}(r,l,n.dateEnv,n.pluginHooks.recurringTypes);if(c)return(d=ol(r,s,t?t.sourceId:"",c.allDay,Boolean(c.duration),n)).recurringDef={typeId:c.typeId,typeData:c.typeData,duration:c.duration},{def:d,instance:null};var d,u=function(e,t,n,i){var a,o,r=e.allDay,s=null,l=!1,c=null,d=null!=e.start?e.start:e.date;if(a=n.dateEnv.createMarkerMeta(d),a)s=a.marker;else if(!i)return null;null!=e.end&&(o=n.dateEnv.createMarkerMeta(e.end));null==r&&(r=null!=t?t:(!a||a.isTimeUnspecified)&&(!o||o.isTimeUnspecified));r&&s&&(s=Lr(s));o&&(c=o.marker,r&&(c=Lr(c)),s&&c<=s&&(c=null));c?l=!0:i||(l=n.options.forceEventDuration||!1,c=n.dateEnv.add(s,r?n.options.defaultAllDayEventDuration:n.options.defaultTimedEventDuration));return{allDay:r,hasEnd:l,range:{start:s,end:c},forcedStartTzo:a?a.forcedTzo:null,forcedEndTzo:o?o.forcedTzo:null}}(r,l,n,i);return u?{def:d=ol(r,s,t?t.sourceId:"",u.allDay,u.hasEnd,n),instance:Qr(d.defId,u.range,u.forcedStartTzo,u.forcedEndTzo)}:null}function il(e,t,n){return void 0===n&&(n=al(t)),Bs(e,n)}function al(e){return Q(Q(Q({},Qs),tl),e.pluginHooks.eventRefiners)}function ol(e,t,n,i,a,o){for(var r={title:e.title||"",groupId:e.groupId||"",publicId:e.id||"",url:e.url||"",recurringDef:null,defId:Tr(),sourceId:n,allDay:i,hasEnd:a,ui:Xs(e,o),extendedProps:Q(Q({},e.extendedProps||{}),t)},s=0,l=o.pluginHooks.eventDefMemberAdders;s<l.length;s++){var c=l[s];Q(r,c(e))}return Object.freeze(r.ui.classNames),Object.freeze(r.extendedProps),r}function rl(e){var t=Math.floor(Pr(e.start,e.end))||1,n=Lr(e.start);return{start:n,end:jr(n,t)}}function sl(e,t){void 0===t&&(t=cs(0));var n=null,i=null;if(e.end){i=Lr(e.end);var a=e.end.valueOf()-i.valueOf();a&&a>=hs(t)&&(i=jr(i,1))}return e.start&&(n=Lr(e.start),i&&i<=n&&(i=jr(n,1))),{start:n,end:i}}function ll(e,t,n,i){return"year"===i?cs(n.diffWholeYears(e,t),"year"):"month"===i?cs(n.diffWholeMonths(e,t),"month"):(o=t,r=Lr(a=e),s=Lr(o),{years:0,months:0,days:Math.round(Pr(r,s)),milliseconds:o.valueOf()-s.valueOf()-(a.valueOf()-r.valueOf())});var a,o,r,s}function cl(e,t){var n,i,a=[],o=t.start;for(e.sort(dl),n=0;n<e.length;n+=1)(i=e[n]).start>o&&a.push({start:o,end:i.start}),i.end>o&&(o=i.end);return o<t.end&&a.push({start:o,end:t.end}),a}function dl(e,t){return e.start.valueOf()-t.start.valueOf()}function ul(e,t){var n=e.start,i=e.end,a=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(i=null===i?t.end:new Date(Math.min(i.valueOf(),t.end.valueOf()))),(null===n||null===i||n<i)&&(a={start:n,end:i}),a}function hl(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function fl(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function pl(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function vl(e,t,n,i){var a={},o={},r={},s=[],l=[],c=yl(e.defs,t);for(var d in e.defs){"inverse-background"===(f=c[(_=e.defs[d]).defId]).display&&(_.groupId?(a[_.groupId]=[],r[_.groupId]||(r[_.groupId]=_)):o[d]=[])}for(var u in e.instances){var h=e.instances[u],f=c[(_=e.defs[h.defId]).defId],p=h.range,v=!_.allDay&&i?sl(p,i):p,g=ul(v,n);g&&("inverse-background"===f.display?_.groupId?a[_.groupId].push(g):o[h.defId].push(g):"none"!==f.display&&("background"===f.display?s:l).push({def:_,ui:f,instance:h,range:g,isStart:v.start&&v.start.valueOf()===g.start.valueOf(),isEnd:v.end&&v.end.valueOf()===g.end.valueOf()}))}for(var m in a)for(var y=0,b=cl(a[m],n);y<b.length;y++){var _,k=b[y];f=c[(_=r[m]).defId];s.push({def:_,ui:f,instance:null,range:k,isStart:!1,isEnd:!1})}for(var d in o)for(var w=0,x=cl(o[d],n);w<x.length;w++){k=x[w];s.push({def:e.defs[d],ui:c[d],instance:null,range:k,isStart:!1,isEnd:!1})}return{bg:s,fg:l}}function gl(e,t){e.fcSeg=t}function ml(e){return e.fcSeg||e.parentNode.fcSeg||null}function yl(e,t){return Kr(e,(function(e){return bl(e,t)}))}function bl(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),function(e){return e.reduce(Js,Zs)}(n)}function _l(e,t){var n=e.map(kl);return n.sort((function(e,n){return function(e,t,n){var i,a;for(i=0;i<n.length;i+=1)if(a=Ar(e,t,n[i]))return a;return 0}(e,n,t)})),n.map((function(e){return e._seg}))}function kl(e){var t=e.eventRange,n=t.def,i=t.instance?t.instance.range:t.range,a=i.start?i.start.valueOf():0,o=i.end?i.end.valueOf():0;return Q(Q(Q({},n.extendedProps),n),{id:n.publicId,start:a,end:o,duration:o-a,allDay:Number(n.allDay),_seg:e})}function wl(e,t){for(var n=t.pluginHooks.isDraggableTransformers,i=e.eventRange,a=i.def,o=i.ui,r=o.startEditable,s=0,l=n;s<l.length;s++){r=(0,l[s])(r,a,o,t)}return r}function xl(e,t){return e.isStart&&e.eventRange.ui.durationEditable&&t.options.eventResizableFromStart}function El(e,t){return e.isEnd&&e.eventRange.ui.durationEditable}function Sl(e,t,n,i,a,o,r){var s=n.dateEnv,l=n.options,c=l.displayEventTime,d=l.displayEventEnd,u=e.eventRange.def,h=e.eventRange.instance;null==c&&(c=!1!==i),null==d&&(d=!1!==a);var f=h.range.start,p=h.range.end,v=o||e.start||e.eventRange.range.start,g=r||e.end||e.eventRange.range.end,m=Lr(f).valueOf()===Lr(v).valueOf(),y=Lr(Nr(p,-1)).valueOf()===Lr(Nr(g,-1)).valueOf();return c&&!u.allDay&&(m||y)?(v=m?f:v,g=y?p:g,d&&u.hasEnd?s.formatRange(v,g,t,{forcedStartTzo:o?null:h.forcedStartTzo,forcedEndTzo:r?null:h.forcedEndTzo}):s.format(v,t,{forcedTzo:o?null:h.forcedStartTzo})):""}function Tl(e,t,n){var i=e.eventRange.range;return{isPast:i.end<(n||t.start),isFuture:i.start>=(n||t.end),isToday:t&&pl(t,i.start)}}var Dl={start:Us,end:Us,allDay:Boolean};function Cl(e,t,n){var i=function(e,t){var n=Bs(e,Dl),i=n.refined,a=n.extra,o=i.start?t.createMarkerMeta(i.start):null,r=i.end?t.createMarkerMeta(i.end):null,s=i.allDay;null==s&&(s=o&&o.isTimeUnspecified&&(!r||r.isTimeUnspecified));return Q({range:{start:o?o.marker:null,end:r?r.marker:null},allDay:s},a)}(e,t),a=i.range;if(!a.start)return null;if(!a.end){if(null==n)return null;a.end=t.add(a.start,n)}return i}function Al(e,t,n){return Q(Q({},$l(e,t,n)),{timeZone:t.timeZone})}function $l(e,t,n){return{start:t.toDate(e.start),end:t.toDate(e.end),startStr:t.formatIso(e.start,{omitTime:n}),endStr:t.formatIso(e.end,{omitTime:n})}}function Rl(e,t,n){n.emitter.trigger("select",Q(Q({},Il(e,n)),{jsEvent:t?t.origEvent:null,view:n.viewApi||n.calendarApi.view}))}function Il(e,t){for(var n,i,a={},o=0,r=t.pluginHooks.dateSpanTransforms;o<r.length;o++){var s=r[o];Q(a,s(e,t))}return Q(a,(n=e,i=t.dateEnv,Q(Q({},$l(n.range,i,n.allDay)),{allDay:n.allDay}))),a}function Ol(e,t,n){var i=n.dateEnv,a=n.options,o=t;return e?(o=Lr(o),o=i.add(o,a.defaultAllDayEventDuration)):o=i.add(o,a.defaultTimedEventDuration),o}function Ml(e,t,n,i){var a=yl(e.defs,t),o={defs:{},instances:{}};for(var r in e.defs){var s=e.defs[r];o.defs[r]=zl(s,a[r],n,i)}for(var l in e.instances){var c=e.instances[l];s=o.defs[c.defId];o.instances[l]=jl(c,s,a[c.defId],n,i)}return o}function zl(e,t,n,i){var a=n.standardProps||{};null==a.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(a.hasEnd=!0);var o=Q(Q(Q({},e),a),{ui:Q(Q({},e.ui),a.ui)});n.extendedProps&&(o.extendedProps=Q(Q({},o.extendedProps),n.extendedProps));for(var r=0,s=i.pluginHooks.eventDefMutationAppliers;r<s.length;r++){(0,s[r])(o,n,i)}return!o.hasEnd&&i.options.forceEventDuration&&(o.hasEnd=!0),o}function jl(e,t,n,i,a){var o=a.dateEnv,r=i.standardProps&&!0===i.standardProps.allDay,s=i.standardProps&&!1===i.standardProps.hasEnd,l=Q({},e);return r&&(l.range=rl(l.range)),i.datesDelta&&n.startEditable&&(l.range={start:o.add(l.range.start,i.datesDelta),end:o.add(l.range.end,i.datesDelta)}),i.startDelta&&n.durationEditable&&(l.range={start:o.add(l.range.start,i.startDelta),end:l.range.end}),i.endDelta&&n.durationEditable&&(l.range={start:l.range.start,end:o.add(l.range.end,i.endDelta)}),s&&(l.range={start:l.range.start,end:Ol(t.allDay,l.range.start,a)}),t.allDay&&(l.range={start:Lr(l.range.start),end:Lr(l.range.end)}),l.range.end<l.range.start&&(l.range.end=Ol(t.allDay,l.range.start,a)),l}var Nl=function(){function e(e,t,n){this.type=e,this.getCurrentData=t,this.dateEnv=n}return Object.defineProperty(e.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.getCurrentData().viewTitle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)},enumerable:!1,configurable:!0}),e.prototype.getOption=function(e){return this.getCurrentData().options[e]},e}(),Pl={id:String,defaultAllDay:Boolean,url:String,format:String,events:Us,eventDataTransform:Us,success:Us,failure:Us};function Hl(e,t,n){var i;if(void 0===n&&(n=Ll(t)),"string"==typeof e?i={url:e}:"function"==typeof e||Array.isArray(e)?i={events:e}:"object"==typeof e&&e&&(i=e),i){var a=Bs(i,n),o=a.refined,r=a.extra,s=function(e,t){for(var n=t.pluginHooks.eventSourceDefs,i=n.length-1;i>=0;i-=1){var a=n[i].parseMeta(e);if(a)return{sourceDefId:i,meta:a}}return null}(o,t);if(s)return{_raw:e,isFetching:!1,latestFetchId:"",fetchRange:null,defaultAllDay:o.defaultAllDay,eventDataTransform:o.eventDataTransform,success:o.success,failure:o.failure,publicId:o.id||"",sourceId:Tr(),sourceDefId:s.sourceDefId,meta:s.meta,ui:Xs(o,t),extendedProps:r}}return null}function Ll(e){return Q(Q(Q({},Qs),Pl),e.pluginHooks.eventSourceRefiners)}function Bl(e,t){return"function"==typeof e&&(e=e()),null==e?t.createNowMarker():t.createMarker(e)}var Ul=function(){function e(){}return e.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData()},e.prototype.dispatch=function(e){return this.currentDataManager.dispatch(e)},Object.defineProperty(e.prototype,"view",{get:function(){return this.getCurrentData().viewApi},enumerable:!1,configurable:!0}),e.prototype.batchRendering=function(e){e()},e.prototype.updateSize=function(){this.trigger("_resize",!0)},e.prototype.setOption=function(e,t){this.dispatch({type:"SET_OPTION",optionName:e,rawOptionValue:t})},e.prototype.getOption=function(e){return this.currentDataManager.currentCalendarOptionsInput[e]},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales)},e.prototype.on=function(e,t){var n=this.currentDataManager;n.currentCalendarOptionsRefiners[e]?n.emitter.on(e,t):console.warn("Unknown listener name '"+e+"'")},e.prototype.off=function(e,t){this.currentDataManager.emitter.off(e,t)},e.prototype.trigger=function(e){for(var t,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];(t=this.currentDataManager.emitter).trigger.apply(t,Z([e],n))},e.prototype.changeView=function(e,t){var n=this;this.batchRendering((function(){if(n.unselect(),t)if(t.start&&t.end)n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e}),n.dispatch({type:"SET_OPTION",optionName:"visibleRange",rawOptionValue:t});else{var i=n.getCurrentData().dateEnv;n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e,dateMarker:i.createMarker(t)})}else n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e})}))},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.getCurrentData().viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"CHANGE_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"CHANGE_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,i=this.getCurrentData(),a=i.viewSpecs,o=i.toolbarConfig,r=[].concat(o.viewsWithButtons);for(var s in a)r.push(s);for(t=0;t<r.length;t+=1)if((n=a[r[t]])&&n.singleUnit===e)return n;return null},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,-1)})},e.prototype.nextYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,1)})},e.prototype.today=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Bl(e.calendarOptions.now,e.dateEnv)})},e.prototype.gotoDate=function(e){var t=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=this.getCurrentData(),n=cs(e);n&&(this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.add(t.currentDate,n)}))},e.prototype.getDate=function(){var e=this.getCurrentData();return e.dateEnv.toDate(e.currentDate)},e.prototype.formatDate=function(e,t){var n=this.getCurrentData().dateEnv;return n.format(n.createMarker(e),Is(t))},e.prototype.formatRange=function(e,t,n){var i=this.getCurrentData().dateEnv;return i.formatRange(i.createMarker(e),i.createMarker(t),Is(n),n)},e.prototype.formatIso=function(e,t){var n=this.getCurrentData().dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.select=function(e,t){var n;n=null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t};var i=this.getCurrentData(),a=Cl(n,i.dateEnv,cs({days:1}));a&&(this.dispatch({type:"SELECT_DATES",selection:a}),Rl(a,null,i))},e.prototype.unselect=function(e){var t=this.getCurrentData();t.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),function(e,t){t.emitter.trigger("unselect",{jsEvent:e?e.origEvent:null,view:t.viewApi||t.calendarApi.view})}(e,t))},e.prototype.addEvent=function(e,t){if(e instanceof Fl){var n=e._def,i=e._instance;return this.getCurrentData().eventStore.defs[n.defId]||(this.dispatch({type:"ADD_EVENTS",eventStore:Vs({def:n,instance:i})}),this.triggerEventAdd(e)),e}var a,o=this.getCurrentData();if(t instanceof hr)a=t.internalEventSource;else if("boolean"==typeof t)t&&(a=ts(o.eventSources)[0]);else if(null!=t){var r=this.getEventSourceById(t);if(!r)return console.warn('Could not find an event source with ID "'+t+'"'),null;a=r.internalEventSource}var s=nl(e,a,o,!1);if(s){var l=new Fl(o,s.def,s.def.recurringDef?null:s.instance);return this.dispatch({type:"ADD_EVENTS",eventStore:Vs(s)}),this.triggerEventAdd(l),l}return null},e.prototype.triggerEventAdd=function(e){var t=this;this.getCurrentData().emitter.trigger("eventAdd",{event:e,relatedEvents:[],revert:function(){t.dispatch({type:"REMOVE_EVENTS",eventStore:Vl(e)})}})},e.prototype.getEventById=function(e){var t=this.getCurrentData(),n=t.eventStore,i=n.defs,a=n.instances;for(var o in e=String(e),i){var r=i[o];if(r.publicId===e){if(r.recurringDef)return new Fl(t,r,null);for(var s in a){var l=a[s];if(l.defId===r.defId)return new Fl(t,r,l)}}}return null},e.prototype.getEvents=function(){var e=this.getCurrentData();return Wl(e.eventStore,e)},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.getEventSources=function(){var e=this.getCurrentData(),t=e.eventSources,n=[];for(var i in t)n.push(new hr(e,t[i]));return n},e.prototype.getEventSourceById=function(e){var t=this.getCurrentData(),n=t.eventSources;for(var i in e=String(e),n)if(n[i].publicId===e)return new hr(t,n[i]);return null},e.prototype.addEventSource=function(e){var t=this.getCurrentData();if(e instanceof hr)return t.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var n=Hl(e,t);return n?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[n]}),new hr(t,n)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES",isRefetch:!0})},e.prototype.scrollToTime=function(e){var t=cs(e);t&&this.trigger("_scrollRequest",{time:t})},e}(),Fl=function(){function e(e,t,n){this._context=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,i;if(e in el)console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if("id"===e)t=Ks[e](t),this.mutate({standardProps:{publicId:t}});else if(e in Ks)t=Ks[e](t),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in Qs){var a=Qs[e](t);"color"===e?a={backgroundColor:t,borderColor:t}:"editable"===e?a={startEditable:t,durationEditable:t}:((i={})[e]=t,a=i),this.mutate({standardProps:{ui:a}})}else console.warn("Could not set prop '"+e+"'. Use setExtendedProp instead.")},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._context.dateEnv,i=n.createMarker(e);if(i&&this._instance){var a=ll(this._instance.range.start,i,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:a}):this.mutate({startDelta:a})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,i=this._context.dateEnv;if((null==e||(n=i.createMarker(e)))&&this._instance)if(n){var a=ll(this._instance.range.end,n,i,t.granularity);this.mutate({endDelta:a})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var i,a,o,r=this._context.dateEnv,s={allDay:n.allDay},l=r.createMarker(e);if(l&&((null==t||(i=r.createMarker(t)))&&this._instance)){var c=this._instance.range;!0===n.allDay&&(c=rl(c));var d=ll(c.start,l,r,n.granularity);if(i){var u=ll(c.end,i,r,n.granularity);o=u,(a=d).years===o.years&&a.months===o.months&&a.days===o.days&&a.milliseconds===o.milliseconds?this.mutate({datesDelta:d,standardProps:s}):this.mutate({startDelta:d,endDelta:u,standardProps:s})}else s.hasEnd=!1,this.mutate({datesDelta:d,standardProps:s})}},e.prototype.moveStart=function(e){var t=cs(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=cs(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=cs(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},i=t.maintainDuration;null==i&&(i=this._context.options.allDayMaintainDuration),this._def.allDay!==e&&(n.hasEnd=i),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._context.dateEnv,n=this._instance,i=Is(e);return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,i,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,i,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(t){var n=this._instance;if(n){var i=this._def,a=this._context,o=a.getCurrentData().eventStore,r=Ws(o,n.instanceId);r=Ml(r,{"":{display:"",startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}},t,a);var s=new e(a,i,n);this._def=r.defs[i.defId],this._instance=r.instances[n.instanceId],a.dispatch({type:"MERGE_EVENTS",eventStore:r}),a.emitter.trigger("eventChange",{oldEvent:s,event:this,relatedEvents:Wl(r,a,n),revert:function(){a.dispatch({type:"RESET_EVENTS",eventStore:o})}})}},e.prototype.remove=function(){var e=this._context,t=Vl(this);e.dispatch({type:"REMOVE_EVENTS",eventStore:t}),e.emitter.trigger("eventRemove",{event:this,relatedEvents:[],revert:function(){e.dispatch({type:"MERGE_EVENTS",eventStore:t})}})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new hr(this._context,this._context.getCurrentData().eventSources[e]):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startStr",{get:function(){var e=this._instance;return e?this._context.dateEnv.formatIso(e.range.start,{omitTime:this._def.allDay,forcedTzo:e.forcedStartTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endStr",{get:function(){var e=this._instance;return e&&this._def.hasEnd?this._context.dateEnv.formatIso(e.range.end,{omitTime:this._def.allDay,forcedTzo:e.forcedEndTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){return this._def.ui.display||"auto"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!1,configurable:!0}),e.prototype.toPlainObject=function(e){void 0===e&&(e={});var t=this._def,n=t.ui,i=this.startStr,a=this.endStr,o={};return t.title&&(o.title=t.title),i&&(o.start=i),a&&(o.end=a),t.publicId&&(o.id=t.publicId),t.groupId&&(o.groupId=t.groupId),t.url&&(o.url=t.url),n.display&&"auto"!==n.display&&(o.display=n.display),e.collapseColor&&n.backgroundColor&&n.backgroundColor===n.borderColor?o.color=n.backgroundColor:(n.backgroundColor&&(o.backgroundColor=n.backgroundColor),n.borderColor&&(o.borderColor=n.borderColor)),n.textColor&&(o.textColor=n.textColor),n.classNames.length&&(o.classNames=n.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?Q(o,t.extendedProps):o.extendedProps=t.extendedProps),o},e.prototype.toJSON=function(){return this.toPlainObject()},e}();function Vl(e){var t,n,i=e._def,a=e._instance;return{defs:(t={},t[i.defId]=i,t),instances:a?(n={},n[a.instanceId]=a,n):{}}}function Wl(e,t,n){var i=e.defs,a=e.instances,o=[],r=n?n.instanceId:"";for(var s in a){var l=a[s],c=i[l.defId];l.instanceId!==r&&o.push(new Fl(t,c,l))}return o}var Gl={};var ql,Yl=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return Gr(e)},e.prototype.markerToArray=function(e){return Wr(e)},e}();ql=Yl,Gl["gregory"]=ql;var Ql=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;var Zl=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new Gl[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekText=null!=e.weekText?e.weekText:e.locale.options.weekText,this.cmdFormatter=e.cmdFormatter,this.defaultSeparator=e.defaultSeparator}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):Gr(Fr(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=Gr(e)),null!==t&&qr(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=function(e){var t=Ql.exec(e);if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(qr(n)){var i=null;return t[13]&&(i=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:i}}}return null}(e);if(null===t)return null;var n=t.marker,i=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):i=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:i}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return Yr(e)===Yr(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return Yr(e)===Yr(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:(n=function(e,t){var n=Hr(e,t);return null!==n&&n%7==0?n/7:null}(e,t),null!==n?{unit:"week",value:n}:null!==(n=Hr(e,t))?{unit:"day",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t),Ir(n)?{unit:"hour",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t),Ir(n)?{unit:"minute",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t),Ir(n)?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}))))},e.prototype.countDurationsBetween=function(e,t,n){var i;return n.years&&null!==(i=this.diffWholeYears(e,t))?i/(us(n)/365):n.months&&null!==(i=this.diffWholeMonths(e,t))?i/function(e){return us(e)/30}(n):n.days&&null!==(i=Hr(e,t))?i/us(n):(t.valueOf()-e.valueOf())/hs(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?Lr(e):"hour"===t?function(e){return Gr([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return Gr([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return Gr([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):null},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var i=e.getUTCFullYear(),a=Br(e,i,t,n);if(a<1)return Br(e,i-1,t,n);var o=Br(e,i+1,t,n);return o>=1?Math.min(a,o):a}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,i){return void 0===i&&(i={}),i.isEndExclusive&&(t=Nr(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=i.forcedStartTzo?i.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=i.forcedEndTzo?i.forcedEndTzo:this.offsetForMarker(t)},this,i.defaultSeparator)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1);var i=e.toISOString();return i=i.replace(".000",""),n&&(i=i.replace("T00:00:00Z","")),i.length>10&&(null==t?i=i.replace("Z",""):0!==t&&(i=i.replace("Z",vs(t,!0)))),i}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?Gr(Fr(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?Gr(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-Vr(Wr(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Wr(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?Vr(Wr(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Wr(e))*60):new Date(e.valueOf()-(t||0))},e}(),Xl=[],Jl={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"};function Kl(e){for(var t=e.length>0?e[0].code:"en",n=Xl.concat(e),i={en:Jl},a=0,o=n;a<o.length;a++){var r=o[a];i[r.code]=r}return{map:i,defaultCode:t}}function ec(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),i=function(e,t){for(var n=0;n<e.length;n+=1)for(var i=e[n].toLocaleLowerCase().split("-"),a=i.length;a>0;a-=1){var o=i.slice(0,a).join("-");if(t[o])return t[o]}return null}(n,t)||Jl;return tc(e,n,i)}(e,t):tc(e.code,[e.code],e)}function tc(e,t,n){var i=Xr([Jl,n],["buttonText"]);delete i.code;var a=i.week;return delete i.week,{codeArg:e,codes:t,week:a,simpleNumberFormat:new Intl.NumberFormat(e),options:i}}var nc,ic={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],display:"inverse-background",classNames:"fc-non-business",groupId:"_businessHours"};function ac(e,t){return Fs(function(e){var t;t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[];return t=t.map((function(e){return Q(Q({},ic),e)}))}(e),null,t)}function oc(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function rc(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function sc(){return null==nc&&(nc=function(){if("undefined"==typeof document)return!0;var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.innerHTML="<table><tr><td><div></div></td></tr></table>",e.querySelector("table").style.height="100px",e.querySelector("div").style.height="100%",document.body.appendChild(e);var t=e.querySelector("div").offsetHeight>0;return document.body.removeChild(e),t}()),nc}function lc(e,t,n,i){return{dow:e.getUTCDay(),isDisabled:Boolean(i&&!pl(i.activeRange,e)),isOther:Boolean(i&&!pl(i.currentRange,e)),isToday:Boolean(t&&pl(t,e)),isPast:Boolean(n?e<n:!!t&&e<t.start),isFuture:Boolean(n?e>n:!!t&&e>=t.end)}}function cc(e,t){var n=["fc-day","fc-day-"+Mr[e.dow]];return e.isDisabled?n.push("fc-day-disabled"):(e.isToday&&(n.push("fc-day-today"),n.push(t.getClass("today"))),e.isPast&&n.push("fc-day-past"),e.isFuture&&n.push("fc-day-future"),e.isOther&&n.push("fc-day-other")),n}function dc(e,t){return void 0===t&&(t="day"),JSON.stringify({date:ps(e),type:t})}var uc,hc=null;function fc(){return null===hc&&(hc=function(){var e=document.createElement("div");mr(e,{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}),e.innerHTML="<div></div>",document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return fr(e),t}()),hc}function pc(){return uc||(uc=function(){var e=document.createElement("div");e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e);var t=vc(e);return document.body.removeChild(e),t}()),uc}function vc(e){return{x:e.offsetHeight-e.clientHeight,y:e.offsetWidth-e.clientWidth}}function gc(e,t,n){void 0===t&&(t=!1);var i=n?e.getBoundingClientRect():mc(e),a=function(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),i=parseInt(n.borderLeftWidth,10)||0,a=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,r=parseInt(n.borderBottomWidth,10)||0,s=vc(e),l=s.y-i-a,c={borderLeft:i,borderRight:a,borderTop:o,borderBottom:r,scrollbarBottom:s.x-o-r,scrollbarLeft:0,scrollbarRight:0};return fc()&&"rtl"===n.direction?c.scrollbarLeft=l:c.scrollbarRight=l,t&&(c.paddingLeft=parseInt(n.paddingLeft,10)||0,c.paddingRight=parseInt(n.paddingRight,10)||0,c.paddingTop=parseInt(n.paddingTop,10)||0,c.paddingBottom=parseInt(n.paddingBottom,10)||0),c}(e,t),o={left:i.left+a.borderLeft+a.scrollbarLeft,right:i.right-a.borderRight-a.scrollbarRight,top:i.top+a.borderTop,bottom:i.bottom-a.borderBottom-a.scrollbarBottom};return t&&(o.left+=a.paddingLeft,o.right-=a.paddingRight,o.top+=a.paddingTop,o.bottom-=a.paddingBottom),o}function mc(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function yc(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}var bc=function(){function e(){this.handlers={},this.thisContext=null}return e.prototype.setThisContext=function(e){this.thisContext=e},e.prototype.setOptions=function(e){this.options=e},e.prototype.on=function(e,t){!function(e,t,n){(e[t]||(e[t]=[])).push(n)}(this.handlers,e,t)},e.prototype.off=function(e,t){!function(e,t,n){n?e[t]&&(e[t]=e[t].filter((function(e){return e!==n}))):delete e[t]}(this.handlers,e,t)},e.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=this.handlers[e]||[],a=this.options&&this.options[e],o=0,r=[].concat(a||[],i);o<r.length;o++){r[o].apply(this.thisContext,t)}},e.prototype.hasHandlers=function(e){return this.handlers[e]&&this.handlers[e].length||this.options&&this.options[e]},e}();var _c=function(){function e(e,t,n,i){this.els=t;var a=this.originClientRect=e.getBoundingClientRect();n&&this.buildElHorizontals(a.left),i&&this.buildElVerticals(a.top)}return e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],i=0,a=this.els;i<a.length;i++){var o=a[i].getBoundingClientRect();t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],i=0,a=this.els;i<a.length;i++){var o=a[i].getBoundingClientRect();t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,i=this.rights,a=n.length;for(t=0;t<a;t+=1)if(e>=n[t]&&e<i[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,i=this.bottoms,a=n.length;for(t=0;t<a;t+=1)if(e>=n[t]&&e<i[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),kc=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),wc=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Y(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(kc),xc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(kc),Ec=function(){function e(e){this.iconOverrideOption&&this.setIconOverride(e[this.iconOverrideOption])}return e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){for(n in t=Q({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e,t){var n;return(n=t&&this.rtlIconClasses&&this.rtlIconClasses[e]||this.iconClasses[e])?this.baseIconClass+" "+n:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();Ec.prototype.classes={},Ec.prototype.iconClasses={},Ec.prototype.baseIconClass="",Ec.prototype.iconOverridePrefix="";var Sc=function(){function e(e,t,n,i){var a=this;this.execFunc=e,this.emitter=t,this.scrollTime=n,this.scrollTimeReset=i,this.handleScrollRequest=function(e){a.queuedRequest=Q({},a.queuedRequest||{},e),a.drain()},t.on("_scrollRequest",this.handleScrollRequest),this.fireInitialScroll()}return e.prototype.detach=function(){this.emitter.off("_scrollRequest",this.handleScrollRequest)},e.prototype.update=function(e){e&&this.scrollTimeReset?this.fireInitialScroll():this.drain()},e.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime})},e.prototype.drain=function(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)},e}(),Tc=lr({});function Dc(e,t,n,i,a,o,r,s,l,c,d,u,h){return{dateEnv:a,options:n,pluginHooks:r,emitter:c,dispatch:s,getCurrentData:l,calendarApi:d,viewSpec:e,viewApi:t,dateProfileGenerator:i,theme:o,isRtl:"rtl"===n.direction,addResizeHandler:function(e){c.on("_resize",e)},removeResizeHandler:function(e){c.off("_resize",e)},createScrollResponder:function(e){return new Sc(e,c,cs(n.scrollTime),n.scrollTimeReset)},registerInteractiveComponent:u,unregisterInteractiveComponent:h}}var Cc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.debug&&console.log(is(e,this.props),is(t,this.state)),!as(this.props,e,this.propEquality)||!as(this.state,t,this.stateEquality)},t.addPropsEquality=$c,t.addStateEquality=Rc,t.contextType=Tc,t}(ir);Cc.prototype.propEquality={},Cc.prototype.stateEquality={};var Ac=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.contextType=Tc,t}(Cc);function $c(e){var t=Object.create(this.prototype.propEquality);Q(t,e),this.prototype.propEquality=t}function Rc(e){var t=Object.create(this.prototype.stateEquality);Q(t,e),this.prototype.stateEquality=t}function Ic(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var Oc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.uid=Tr(),t}return Y(t,e),t.prototype.prepareHits=function(){},t.prototype.queryHit=function(e,t,n,i){return null},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!pr(e,".fc-event-mirror")},t.prototype.isValidDateDownEl=function(e){return!(pr(e,".fc-event:not(.fc-bg-event)")||pr(e,".fc-more-link")||pr(e,"a[data-navlink]")||pr(e,".fc-popover"))},t}(Ac);function Mc(e){return{id:Tr(),deps:e.deps||[],reducers:e.reducers||[],isLoadingFuncs:e.isLoadingFuncs||[],contextInit:[].concat(e.contextInit||[]),eventRefiners:e.eventRefiners||{},eventDefMemberAdders:e.eventDefMemberAdders||[],eventSourceRefiners:e.eventSourceRefiners||{},isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],viewContainerAppends:e.viewContainerAppends||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,initialView:e.initialView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{},scrollGridImpl:e.scrollGridImpl||null,contentTypeHandlers:e.contentTypeHandlers||{},listenerRefiners:e.listenerRefiners||{},optionRefiners:e.optionRefiners||{},propSetHandlers:e.propSetHandlers||{}}}function zc(){var e,t=[],n=[];return function(i,a){return e&&gs(i,t)&&gs(a,n)||(e=function(e,t){var n={},i={reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function a(e){for(var t=0,o=e;t<o.length;t++){var r=o[t];n[r.id]||(n[r.id]=!0,a(r.deps),l=r,i={reducers:(s=i).reducers.concat(l.reducers),isLoadingFuncs:s.isLoadingFuncs.concat(l.isLoadingFuncs),contextInit:s.contextInit.concat(l.contextInit),eventRefiners:Q(Q({},s.eventRefiners),l.eventRefiners),eventDefMemberAdders:s.eventDefMemberAdders.concat(l.eventDefMemberAdders),eventSourceRefiners:Q(Q({},s.eventSourceRefiners),l.eventSourceRefiners),isDraggableTransformers:s.isDraggableTransformers.concat(l.isDraggableTransformers),eventDragMutationMassagers:s.eventDragMutationMassagers.concat(l.eventDragMutationMassagers),eventDefMutationAppliers:s.eventDefMutationAppliers.concat(l.eventDefMutationAppliers),dateSelectionTransformers:s.dateSelectionTransformers.concat(l.dateSelectionTransformers),datePointTransforms:s.datePointTransforms.concat(l.datePointTransforms),dateSpanTransforms:s.dateSpanTransforms.concat(l.dateSpanTransforms),views:Q(Q({},s.views),l.views),viewPropsTransformers:s.viewPropsTransformers.concat(l.viewPropsTransformers),isPropsValid:l.isPropsValid||s.isPropsValid,externalDefTransforms:s.externalDefTransforms.concat(l.externalDefTransforms),viewContainerAppends:s.viewContainerAppends.concat(l.viewContainerAppends),eventDropTransformers:s.eventDropTransformers.concat(l.eventDropTransformers),calendarInteractions:s.calendarInteractions.concat(l.calendarInteractions),componentInteractions:s.componentInteractions.concat(l.componentInteractions),themeClasses:Q(Q({},s.themeClasses),l.themeClasses),eventSourceDefs:s.eventSourceDefs.concat(l.eventSourceDefs),cmdFormatter:l.cmdFormatter||s.cmdFormatter,recurringTypes:s.recurringTypes.concat(l.recurringTypes),namedTimeZonedImpl:l.namedTimeZonedImpl||s.namedTimeZonedImpl,initialView:s.initialView||l.initialView,elementDraggingImpl:s.elementDraggingImpl||l.elementDraggingImpl,optionChangeHandlers:Q(Q({},s.optionChangeHandlers),l.optionChangeHandlers),scrollGridImpl:l.scrollGridImpl||s.scrollGridImpl,contentTypeHandlers:Q(Q({},s.contentTypeHandlers),l.contentTypeHandlers),listenerRefiners:Q(Q({},s.listenerRefiners),l.listenerRefiners),optionRefiners:Q(Q({},s.optionRefiners),l.optionRefiners),propSetHandlers:Q(Q({},s.propSetHandlers),l.propSetHandlers)})}var s,l}return e&&a(e),a(t),i}(i,a)),t=i,n=a,e}}var jc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t}(Ec);function Nc(e,t,n,i){if(t[e])return t[e];var a=function(e,t,n,i){var a=n[e],o=i[e],r=function(e){return a&&null!==a[e]?a[e]:o&&null!==o[e]?o[e]:null},s=r("component"),l=r("superType"),c=null;if(l){if(l===e)throw new Error("Can't have a custom view type that references itself");c=Nc(l,t,n,i)}!s&&c&&(s=c.component);if(!s)return null;return{type:e,component:s,defaults:Q(Q({},c?c.defaults:{}),a?a.rawOptions:{}),overrides:Q(Q({},c?c.overrides:{}),o?o.rawOptions:{})}}(e,t,n,i);return a&&(t[e]=a),a}jc.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"},jc.prototype.baseIconClass="fc-icon",jc.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},jc.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"},jc.prototype.iconOverrideOption="buttonIcons",jc.prototype.iconOverrideCustomButtonOption="icon",jc.prototype.iconOverridePrefix="fc-icon-";var Pc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=rr(),t.handleRootEl=function(e){Ic(t.rootElRef,e),t.props.elRef&&Ic(t.props.elRef,e)},t}return Y(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.hookProps;return ar(Uc,{hookProps:n,didMount:t.didMount,willUnmount:t.willUnmount,elRef:this.handleRootEl},(function(i){return ar(Lc,{hookProps:n,content:t.content,defaultContent:t.defaultContent,backupElRef:e.rootElRef},(function(e,a){return t.children(i,Vc(t.classNames,n),e,a)}))}))},t}(Ac),Hc=lr(0);function Lc(e){return ar(Hc.Consumer,null,(function(t){return ar(Bc,Q({renderId:t},e))}))}var Bc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.innerElRef=rr(),t}return Y(t,e),t.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent())},t.prototype.componentDidMount=function(){this.updateCustomContent()},t.prototype.componentDidUpdate=function(){this.updateCustomContent()},t.prototype.componentWillUnmount=function(){this.customContentInfo&&this.customContentInfo.destroy&&this.customContentInfo.destroy()},t.prototype.renderInnerContent=function(){var e=this.customContentInfo,t=this.getInnerContent(),n=this.getContentMeta(t);return e&&e.contentKey===n.contentKey?e&&(e.contentVal=t[n.contentKey]):(e&&(e.destroy&&e.destroy(),e=this.customContentInfo=null),n.contentKey&&(e=this.customContentInfo=Q({contentKey:n.contentKey,contentVal:t[n.contentKey]},n.buildLifecycleFuncs()))),e?[]:t},t.prototype.getInnerContent=function(){var e=this.props,t=Wc(e.content,e.hookProps);return void 0===t&&(t=Wc(e.defaultContent,e.hookProps)),null==t?null:t},t.prototype.getContentMeta=function(e){var t=this.context.pluginHooks.contentTypeHandlers,n="",i=null;if(e)for(var a in t)if(void 0!==e[a]){n=a,i=t[a];break}return{contentKey:n,buildLifecycleFuncs:i}},t.prototype.updateCustomContent=function(){this.customContentInfo&&this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,this.customContentInfo.contentVal)},t}(Ac),Uc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Ic(t.props.elRef,e)},t}return Y(t,e),t.prototype.render=function(){return this.props.children(this.handleRootEl)},t.prototype.componentDidMount=function(){var e=this.props.didMount;e&&e(Q(Q({},this.props.hookProps),{el:this.rootEl}))},t.prototype.componentWillUnmount=function(){var e=this.props.willUnmount;e&&e(Q(Q({},this.props.hookProps),{el:this.rootEl}))},t}(Ac);function Fc(){var e,t,n=[];return function(i,a){return t&&ns(t,a)&&i===e||(e=i,t=a,n=Vc(i,a)),n}}function Vc(e,t){return"function"==typeof e&&(e=e(t)),Ys(e)}function Wc(e,t){return"function"==typeof e?e(t,ar):e}var Gc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.normalizeClassNames=Fc(),t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,i={view:t.viewApi},a=this.normalizeClassNames(n.viewClassNames,i);return ar(Uc,{hookProps:i,didMount:n.viewDidMount,willUnmount:n.viewWillUnmount,elRef:e.elRef},(function(t){return e.children(t,["fc-"+e.viewSpec.type+"-view","fc-view"].concat(a))}))},t}(Ac);function qc(e){return Kr(e,Yc)}function Yc(e){var t,n="function"==typeof e?{component:e}:e,i=n.component;return n.content&&(t=n,i=function(e){return ar(Tc.Consumer,null,(function(n){return ar(Gc,{viewSpec:n.viewSpec},(function(i,a){var o=Q(Q({},e),{nextDayThreshold:n.options.nextDayThreshold});return ar(Pc,{hookProps:o,classNames:t.classNames,content:t.content,didMount:t.didMount,willUnmount:t.willUnmount,elRef:i},(function(e,t,n,i){return ar("div",{className:a.concat(t).join(" "),ref:e},i)}))}))}))}),{superType:n.type,component:i,rawOptions:n}}function Qc(e,t,n,i){var a=qc(e),o=qc(t.views),r=function(e,t){var n,i={};for(n in e)Nc(n,i,e,t);for(n in t)Nc(n,i,e,t);return i}(a,o);return Kr(r,(function(e){return function(e,t,n,i,a){var o=e.overrides.duration||e.defaults.duration||i.duration||n.duration,r=null,s="",l="",c={};if(o&&(r=function(e){var t=JSON.stringify(e),n=Zc[t];void 0===n&&(n=cs(e),Zc[t]=n);return n}(o),r)){var d=fs(r);s=d.unit,1===d.value&&(l=s,c=t[s]?t[s].rawOptions:{})}var u=function(t){var n=t.buttonText||{},i=e.defaults.buttonTextKey;return null!=i&&null!=n[i]?n[i]:null!=n[e.type]?n[e.type]:null!=n[l]?n[l]:null};return{type:e.type,component:e.component,duration:r,durationUnit:s,singleUnit:l,optionDefaults:e.defaults,optionOverrides:Q(Q({},c),e.overrides),buttonTextOverride:u(i)||u(n)||e.overrides.buttonText,buttonTextDefault:u(a)||e.defaults.buttonText||u(Ms)||e.type}}(e,o,t,n,i)}))}var Zc={};var Xc=function(){function e(e){this.props=e,this.nowDate=Bl(e.nowInput,e.dateEnv),this.initHiddenDays()}return e.prototype.buildPrev=function(e,t,n){var i=this.props.dateEnv,a=i.subtract(i.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(a,-1,n)},e.prototype.buildNext=function(e,t,n){var i=this.props.dateEnv,a=i.add(i.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(a,1,n)},e.prototype.build=function(e,t,n){void 0===n&&(n=!0);var i,a,o,r,s,l,c,d,u=this.props;return i=this.buildValidRange(),i=this.trimHiddenDays(i),n&&(c=e,e=null!=(d=i).start&&c<d.start?d.start:null!=d.end&&c>=d.end?new Date(d.end.valueOf()-1):c),a=this.buildCurrentRangeInfo(e,t),o=/^(year|month|week|day)$/.test(a.unit),r=this.buildRenderRange(this.trimHiddenDays(a.range),a.unit,o),s=r=this.trimHiddenDays(r),u.showNonCurrentDates||(s=ul(s,a.range)),s=ul(s=this.adjustActiveRange(s),i),l=hl(a.range,i),{validRange:i,currentRange:a.range,currentRangeUnit:a.unit,isRangeAllDay:o,activeRange:s,renderRange:r,slotMinTime:u.slotMinTime,slotMaxTime:u.slotMaxTime,isValid:l,dateIncrement:this.buildDateIncrement(a.duration)}},e.prototype.buildValidRange=function(){var e=this.props.validRangeInput,t="function"==typeof e?e.call(this.props.calendarApi,this.nowDate):e;return this.refineRange(t)||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,i=this.props,a=null,o=null,r=null;return i.duration?(a=i.duration,o=i.durationUnit,r=this.buildRangeFromDuration(e,t,a,o)):(n=this.props.dayCount)?(o="day",r=this.buildRangeFromDayCount(e,t,n)):(r=this.buildCustomVisibleRange(e))?o=i.dateEnv.greatestWholeUnit(r.start,r.end).unit:(o=fs(a=this.getFallbackDuration()).unit,r=this.buildRangeFromDuration(e,t,a,o)),{duration:a,unit:o,range:r}},e.prototype.getFallbackDuration=function(){return cs({day:1})},e.prototype.adjustActiveRange=function(e){var t=this.props,n=t.dateEnv,i=t.usesMinMaxTime,a=t.slotMinTime,o=t.slotMaxTime,r=e.start,s=e.end;return i&&(us(a)<0&&(r=Lr(r),r=n.add(r,a)),us(o)>1&&(s=jr(s=Lr(s),-1),s=n.add(s,o))),{start:r,end:s}},e.prototype.buildRangeFromDuration=function(e,t,n,i){var a,o,r,s=this.props,l=s.dateEnv,c=s.dateAlignment;if(!c){var d=this.props.dateIncrement;c=d&&hs(d)<hs(n)?fs(d).unit:i}function u(){a=l.startOf(e,c),o=l.add(a,n),r={start:a,end:o}}return us(n)<=1&&this.isHiddenDay(a)&&(a=Lr(a=this.skipHiddenDays(a,t))),u(),this.trimHiddenDays(r)||(e=this.skipHiddenDays(e,t),u()),r},e.prototype.buildRangeFromDayCount=function(e,t,n){var i,a=this.props,o=a.dateEnv,r=a.dateAlignment,s=0,l=e;r&&(l=o.startOf(l,r)),l=Lr(l),i=l=this.skipHiddenDays(l,t);do{i=jr(i,1),this.isHiddenDay(i)||(s+=1)}while(s<n);return{start:l,end:i}},e.prototype.buildCustomVisibleRange=function(e){var t=this.props,n=t.visibleRangeInput,i="function"==typeof n?n.call(t.calendarApi,t.dateEnv.toDate(e)):n,a=this.refineRange(i);return!a||null!=a.start&&null!=a.end?a:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.props.dateIncrement;return n||((t=this.props.dateAlignment)?cs(1,t):e||cs({days:1}))},e.prototype.refineRange=function(e){if(e){var t=(n=e,i=this.props.dateEnv,a=null,o=null,n.start&&(a=i.createMarker(n.start)),n.end&&(o=i.createMarker(n.end)),a||o?a&&o&&o<a?null:{start:a,end:o}:null);return t&&(t=sl(t)),t}var n,i,a,o;return null},e.prototype.initHiddenDays=function(){var e,t=this.props.hiddenDays||[],n=[],i=0;for(!1===this.props.weekends&&t.push(0,6),e=0;e<7;e+=1)(n[e]=-1!==t.indexOf(e))||(i+=1);if(!i)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=jr(e,t);return e},e}();function Jc(e,t,n){var i=t?t.activeRange:null;return td({},function(e,t){var n=Ll(t),i=[].concat(e.eventSources||[]),a=[];e.initialEvents&&i.unshift(e.initialEvents);e.events&&i.unshift(e.events);for(var o=0,r=i;o<r.length;o++){var s=Hl(r[o],t,n);s&&a.push(s)}return a}(e,n),i,n)}function Kc(e,t,n,i){var a,o,r=n?n.activeRange:null;switch(t.type){case"ADD_EVENT_SOURCES":return td(e,t.sources,r,i);case"REMOVE_EVENT_SOURCE":return a=e,o=t.sourceId,Jr(a,(function(e){return e.sourceId!==o}));case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return n?nd(e,r,i):e;case"FETCH_EVENT_SOURCES":return id(e,t.sourceIds?es(t.sourceIds):od(e,i),r,t.isRefetch||!1,i);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,i){var a,o=e[t];if(o&&n===o.latestFetchId)return Q(Q({},e),((a={})[t]=Q(Q({},o),{isFetching:!1,fetchRange:i}),a));return e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}}function ed(e){for(var t in e)if(e[t].isFetching)return!0;return!1}function td(e,t,n,i){for(var a={},o=0,r=t;o<r.length;o++){var s=r[o];a[s.sourceId]=s}return n&&(a=nd(a,n,i)),Q(Q({},e),a)}function nd(e,t,n){return id(e,Jr(e,(function(e){return function(e,t,n){if(!rd(e,n))return!e.latestFetchId;return!n.options.lazyFetching||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end}(e,t,n)})),t,!1,n)}function id(e,t,n,i,a){var o={};for(var r in e){var s=e[r];t[r]?o[r]=ad(s,n,i,a):o[r]=s}return o}function ad(e,t,n,i){var a=i.options,o=i.calendarApi,r=i.pluginHooks.eventSourceDefs[e.sourceDefId],s=Tr();return r.fetch({eventSource:e,range:t,isRefetch:n,context:i},(function(n){var r=n.rawEvents;a.eventSourceSuccess&&(r=a.eventSourceSuccess.call(o,r,n.xhr)||r),e.success&&(r=e.success.call(o,r,n.xhr)||r),i.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:s,fetchRange:t,rawEvents:r})}),(function(n){console.warn(n.message,n),a.eventSourceFailure&&a.eventSourceFailure.call(o,n),e.failure&&e.failure(n),i.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:s,fetchRange:t,error:n})})),Q(Q({},e),{isFetching:!0,latestFetchId:s})}function od(e,t){return Jr(e,(function(e){return rd(e,t)}))}function rd(e,t){return!t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange}function sd(e,t,n,i,a){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,i,a,o){if(t&&n===t.latestFetchId){var r=Fs(function(e,t,n){var i=n.options.eventDataTransform,a=t?t.eventDataTransform:null;a&&(e=ld(e,a));i&&(e=ld(e,i));return e}(a,t,o),t,o);return i&&(r=rs(r,i,o)),Gs(cd(e,t.sourceId),r)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,a);case"ADD_EVENTS":return function(e,t,n,i){n&&(t=rs(t,n,i));return Gs(e,t)}(e,t.eventStore,i?i.activeRange:null,a);case"RESET_EVENTS":return t.eventStore;case"MERGE_EVENTS":return Gs(e,t.eventStore);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return i?rs(e,i.activeRange,a):e;case"REMOVE_EVENTS":return function(e,t){var n=e.defs,i=e.instances,a={},o={};for(var r in n)t.defs[r]||(a[r]=n[r]);for(var s in i)!t.instances[s]&&a[i[s].defId]&&(o[s]=i[s]);return{defs:a,instances:o}}(e,t.eventStore);case"REMOVE_EVENT_SOURCE":return cd(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return qs(e,(function(e){return!e.sourceId}));case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};default:return e}}function ld(e,t){var n;if(t){n=[];for(var i=0,a=e;i<a.length;i++){var o=a[i],r=t(o);r?n.push(r):null==r&&n.push(o)}}else n=e;return n}function cd(e,t){return qs(e,(function(e){return e.sourceId!==t}))}function dd(e,t){switch(t.type){case"UNSELECT_DATES":return null;case"SELECT_DATES":return t.selection;default:return e}}function ud(e,t){switch(t.type){case"UNSELECT_EVENT":return"";case"SELECT_EVENT":return t.eventInstanceId;default:return e}}function hd(e,t){var n;switch(t.type){case"UNSET_EVENT_DRAG":return null;case"SET_EVENT_DRAG":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}function fd(e,t){var n;switch(t.type){case"UNSET_EVENT_RESIZE":return null;case"SET_EVENT_RESIZE":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}function pd(e,t,n,i,a){var o=[];return{headerToolbar:e.headerToolbar?vd(e.headerToolbar,e,t,n,i,a,o):null,footerToolbar:e.footerToolbar?vd(e.footerToolbar,e,t,n,i,a,o):null,viewsWithButtons:o}}function vd(e,t,n,i,a,o,r){return Kr(e,(function(e){return function(e,t,n,i,a,o,r){var s="rtl"===t.direction,l=t.customButtons||{},c=n.buttonText||{},d=t.buttonText||{},u=e?e.split(" "):[];return u.map((function(e){return e.split(",").map((function(e){return"title"===e?{buttonName:e}:((t=l[e])?(u=function(e){t.click&&t.click.call(e.target,e,e.target)},(h=i.getCustomButtonIconClass(t))||(h=i.getIconClass(e,s))||(f=t.text)):(n=a[e])?(r.push(e),u=function(){o.changeView(e)},(f=n.buttonTextOverride)||(h=i.getIconClass(e,s))||(f=n.buttonTextDefault)):o[e]&&(u=function(){o[e]()},(f=c[e])||(h=i.getIconClass(e,s))||(f=d[e])),{buttonName:e,buttonClick:u,buttonIcon:h,buttonText:f});var t,n,u,h,f}))}))}(e,t,n,i,a,o,r)}))}function gd(e,t,n,i,a){var o=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+md(t)}(t,n):o=md(n);var r=new XMLHttpRequest;r.open(e,t,!0),"GET"!==e&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onload=function(){if(r.status>=200&&r.status<400){var e=!1,t=void 0;try{t=JSON.parse(r.responseText),e=!0}catch(e){}e?i(t,r):a("Failure parsing JSON",r)}else a("Request failed",r)},r.onerror=function(){a("Request failed",r)},r.send(o)}function md(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function yd(e,t){for(var n=ts(t.getCurrentData().eventSources),i=[],a=0,o=e;a<o.length;a++){for(var r=o[a],s=!1,l=0;l<n.length;l+=1)if(n[l]._raw===r){n.splice(l,1),s=!0;break}s||i.push(r)}for(var c=0,d=n;c<d.length;c++){var u=d[c];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:u.sourceId})}for(var h=0,f=i;h<f.length;h++){var p=f[h];t.calendarApi.addEventSource(p)}}var bd=[Mc({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),Mc({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var i=e.context.dateEnv;!function(e,t,n){var i=!1,a=function(){i||(i=!0,t.apply(this,arguments))},o=function(){i||(i=!0,n&&n.apply(this,arguments))},r=e(a,o);r&&"function"==typeof r.then&&r.then(a,o)}(e.eventSource.meta.bind(null,Al(e.range,i)),(function(e){t({rawEvents:e})}),n)}}]}),Mc({eventSourceRefiners:{method:String,extraParams:Us,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta:function(e){return!e.url||"json"!==e.format&&e.format?null:{url:e.url,format:"json",method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var i=e.eventSource.meta,a=function(e,t,n){var i,a,o,r,s=n.dateEnv,l=n.options,c={};i=e.startParam,null==i&&(i=l.startParam);a=e.endParam,null==a&&(a=l.endParam);o=e.timeZoneParam,null==o&&(o=l.timeZoneParam);r="function"==typeof e.extraParams?e.extraParams():e.extraParams||{};Q(c,r),c[i]=s.formatIso(t.start),c[a]=s.formatIso(t.end),"local"!==s.timeZone&&(c[o]=s.timeZone);return c}(i,e.range,e.context);gd(i.method,i.url,a,(function(e,n){t({rawEvents:e,xhr:n})}),(function(e,t){n({message:e,xhr:t})}))}}]}),Mc({recurringTypes:[{parse:function(e,t){if(e.daysOfWeek||e.startTime||e.endTime||e.startRecur||e.endRecur){var n={daysOfWeek:e.daysOfWeek||null,startTime:e.startTime||null,endTime:e.endTime||null,startRecur:e.startRecur?t.createMarker(e.startRecur):null,endRecur:e.endRecur?t.createMarker(e.endRecur):null},i=void 0;return e.duration&&(i=e.duration),!i&&e.startTime&&e.endTime&&(a=e.endTime,o=e.startTime,i={years:a.years-o.years,months:a.months-o.months,days:a.days-o.days,milliseconds:a.milliseconds-o.milliseconds}),{allDayGuess:Boolean(!e.startTime&&!e.endTime),duration:i,typeData:n}}var a,o;return null},expand:function(e,t,n){var i=ul(t,{start:e.startRecur,end:e.endRecur});return i?function(e,t,n,i){var a=e?es(e):null,o=Lr(n.start),r=n.end,s=[];for(;o<r;){var l=void 0;a&&!a[o.getUTCDay()]||(l=t?i.add(o,t):o,s.push(l)),o=jr(o,1)}return s}(e.daysOfWeek,e.startTime,i,n):[]}}],eventRefiners:{daysOfWeek:Us,startTime:cs,endTime:cs,duration:cs,startRecur:Us,endRecur:Us}}),Mc({optionChangeHandlers:{events:function(e,t){yd([e],t)},eventSources:yd}}),Mc({isLoadingFuncs:[function(e){return ed(e.eventSources)}],contentTypeHandlers:{html:function(){return{render:_d}},domNodes:function(){return{render:kd}}},propSetHandlers:{dateProfile:function(e,t){t.emitter.trigger("datesSet",Q(Q({},Al(e.activeRange,t.dateEnv)),{view:t.viewApi}))},eventStore:function(e,t){var n=t.emitter;n.hasHandlers("eventsSet")&&n.trigger("eventsSet",Wl(e,t))}}})];function _d(e,t){e.innerHTML=t}function kd(e,t){var n=Array.prototype.slice.call(e.childNodes),i=Array.prototype.slice.call(t);if(!gs(n,i)){for(var a=0,o=i;a<o.length;a++){var r=o[a];e.appendChild(r)}n.forEach(fr)}}var wd=function(){function e(e){this.drainedOption=e,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}return e.prototype.request=function(e){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),null==e?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),e))},e.prototype.pause=function(e){void 0===e&&(e="");var t=this.pauseDepths;t[e]=(t[e]||0)+1,this.clearTimeout()},e.prototype.resume=function(e,t){void 0===e&&(e="");var n=this.pauseDepths;if(e in n){if(t)delete n[e];else n[e]-=1,n[e]<=0&&delete n[e];this.tryDrain()}},e.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length},e.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained();this.isRunning=!1}},e.prototype.clear=function(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}},e.prototype.clearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)},e.prototype.drained=function(){this.drainedOption&&this.drainedOption()},e}(),xd=function(){function e(e,t){this.runTaskOption=e,this.drainedOption=t,this.queue=[],this.delayedRunner=new wd(this.drain.bind(this))}return e.prototype.request=function(e,t){this.queue.push(e),this.delayedRunner.request(t)},e.prototype.pause=function(e){this.delayedRunner.pause(e)},e.prototype.resume=function(e,t){this.delayedRunner.resume(e,t)},e.prototype.drain=function(){for(var e=this.queue;e.length;){for(var t=[],n=void 0;n=e.shift();)this.runTask(n),t.push(n);this.drained(t)}},e.prototype.runTask=function(e){this.runTaskOption&&this.runTaskOption(e)},e.prototype.drained=function(e){this.drainedOption&&this.drainedOption(e)},e}();function Ed(e,t,n){var i;return i=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,n.formatRange(i.start,i.end,Is(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=Hr(e.currentRange.start,e.currentRange.end);if(null!==n&&n>1)return{year:"numeric",month:"short",day:"numeric"};return{year:"numeric",month:"long",day:"numeric"}}(e)),{isEndExclusive:e.isRangeAllDay,defaultSeparator:t.titleRangeSeparator})}var Sd=function(){function e(e){var t=this;this.computeOptionsData=ms(this._computeOptionsData),this.computeCurrentViewData=ms(this._computeCurrentViewData),this.organizeRawLocales=ms(Kl),this.buildLocale=ms(ec),this.buildPluginHooks=zc(),this.buildDateEnv=ms(Td),this.buildTheme=ms(Dd),this.parseToolbars=ms(pd),this.buildViewSpecs=ms(Qc),this.buildDateProfileGenerator=ys(Cd),this.buildViewApi=ms(Ad),this.buildViewUiProps=ys(Id),this.buildEventUiBySource=ms($d,ns),this.buildEventUiBases=ms(Rd),this.parseContextBusinessHours=ys(Md),this.buildTitle=ms(Ed),this.emitter=new bc,this.actionRunner=new xd(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.getCurrentData=function(){return t.data},this.dispatch=function(e){t.actionRunner.request(e)},this.props=e,this.actionRunner.pause();var n={},i=this.computeOptionsData(e.optionOverrides,n,e.calendarApi),a=i.calendarOptions.initialView||i.pluginHooks.initialView,o=this.computeCurrentViewData(a,i,e.optionOverrides,n);e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(o.options);var r,s,l,c=(r=i.calendarOptions,s=i.dateEnv,null!=(l=r.initialDate)?s.createMarker(l):Bl(r.now,s)),d=o.dateProfileGenerator.build(c);pl(d.activeRange,c)||(c=d.currentRange.start);for(var u={dateEnv:i.dateEnv,options:i.calendarOptions,pluginHooks:i.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},h=0,f=i.pluginHooks.contextInit;h<f.length;h++){(0,f[h])(u)}for(var p=Jc(i.calendarOptions,d,u),v={dynamicOptionOverrides:n,currentViewType:a,currentDate:c,dateProfile:d,businessHours:this.parseContextBusinessHours(u),eventSources:p,eventUiBases:{},eventStore:{defs:{},instances:{}},renderableEventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(u).selectionConfig},g=Q(Q({},u),v),m=0,y=i.pluginHooks.reducers;m<y.length;m++){var b=y[m];Q(v,b(null,null,g))}Od(v,u)&&this.emitter.trigger("loading",!0),this.state=v,this.updateData(),this.actionRunner.resume()}return e.prototype.resetOptions=function(e,t){var n=this.props;n.optionOverrides=t?Q(Q({},n.optionOverrides),e):e,this.actionRunner.request({type:"NOTHING"})},e.prototype._handleAction=function(e){var t=this,n=t.props,i=t.state,a=t.emitter,o=function(e,t){var n;return"SET_OPTION"===t.type?Q(Q({},e),((n={})[t.optionName]=t.rawOptionValue,n)):e}(i.dynamicOptionOverrides,e),r=this.computeOptionsData(n.optionOverrides,o,n.calendarApi),s=function(e,t){"CHANGE_VIEW_TYPE"===t.type&&(e=t.viewType);return e}(i.currentViewType,e),l=this.computeCurrentViewData(s,r,n.optionOverrides,o);n.calendarApi.currentDataManager=this,a.setThisContext(n.calendarApi),a.setOptions(l.options);var c={dateEnv:r.dateEnv,options:r.calendarOptions,pluginHooks:r.pluginHooks,calendarApi:n.calendarApi,dispatch:this.dispatch,emitter:a,getCurrentData:this.getCurrentData},d=i.currentDate,u=i.dateProfile;this.data&&this.data.dateProfileGenerator!==l.dateProfileGenerator&&(u=l.dateProfileGenerator.build(d)),d=function(e,t){return"CHANGE_DATE"===t.type?t.dateMarker:e}(d,e),u=function(e,t,n,i){var a;switch(t.type){case"CHANGE_VIEW_TYPE":return i.build(t.dateMarker||n);case"CHANGE_DATE":return i.build(t.dateMarker);case"PREV":if((a=i.buildPrev(e,n)).isValid)return a;break;case"NEXT":if((a=i.buildNext(e,n)).isValid)return a}return e}(u,e,d,l.dateProfileGenerator),"PREV"!==e.type&&"NEXT"!==e.type&&pl(u.currentRange,d)||(d=u.currentRange.start);for(var h=Kc(i.eventSources,e,u,c),f=sd(i.eventStore,e,h,u,c),p=ed(h)&&!l.options.progressiveEventRendering&&i.renderableEventStore||f,v=this.buildViewUiProps(c),g=v.eventUiSingleBase,m=v.selectionConfig,y=this.buildEventUiBySource(h),b={dynamicOptionOverrides:o,currentViewType:s,currentDate:d,dateProfile:u,eventSources:h,eventStore:f,renderableEventStore:p,selectionConfig:m,eventUiBases:this.buildEventUiBases(p.defs,g,y),businessHours:this.parseContextBusinessHours(c),dateSelection:dd(i.dateSelection,e),eventSelection:ud(i.eventSelection,e),eventDrag:hd(i.eventDrag,e),eventResize:fd(i.eventResize,e)},_=Q(Q({},c),b),k=0,w=r.pluginHooks.reducers;k<w.length;k++){var x=w[k];Q(b,x(i,e,_))}var E=Od(i,c),S=Od(b,c);!E&&S?a.trigger("loading",!0):E&&!S&&a.trigger("loading",!1),this.state=b,n.onAction&&n.onAction(e)},e.prototype.updateData=function(){var e,t,n,i,a,o,r,s,l,c=this.props,d=this.state,u=this.data,h=this.computeOptionsData(c.optionOverrides,d.dynamicOptionOverrides,c.calendarApi),f=this.computeCurrentViewData(d.currentViewType,h,c.optionOverrides,d.dynamicOptionOverrides),p=this.data=Q(Q(Q({viewTitle:this.buildTitle(d.dateProfile,f.options,h.dateEnv),calendarApi:c.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},h),f),d),v=h.pluginHooks.optionChangeHandlers,g=u&&u.calendarOptions,m=h.calendarOptions;if(g&&g!==m)for(var y in g.timeZone!==m.timeZone&&(d.eventSources=p.eventSources=(o=p.eventSources,r=d.dateProfile,s=p,l=r?r.activeRange:null,id(o,od(o,s),l,!0,s)),d.eventStore=p.eventStore=(e=p.eventStore,t=u.dateEnv,n=p.dateEnv,i=e.defs,a=Kr(e.instances,(function(e){var a=i[e.defId];return a.allDay||a.recurringDef?e:Q(Q({},e),{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})})),{defs:i,instances:a})),v)g[y]!==m[y]&&v[y](m[y],p);c.onData&&c.onData(p)},e.prototype._computeOptionsData=function(e,t,n){var i=this.processRawCalendarOptions(e,t),a=i.refinedOptions,o=i.pluginHooks,r=i.localeDefaults,s=i.availableLocaleData;zd(i.extra);var l=this.buildDateEnv(a.timeZone,a.locale,a.weekNumberCalculation,a.firstDay,a.weekText,o,s,a.defaultRangeSeparator),c=this.buildViewSpecs(o.views,e,t,r),d=this.buildTheme(a,o);return{calendarOptions:a,pluginHooks:o,dateEnv:l,viewSpecs:c,theme:d,toolbarConfig:this.parseToolbars(a,e,d,c,n),localeDefaults:r,availableRawLocales:s.map}},e.prototype.processRawCalendarOptions=function(e,t){var n=Ls([Ms,e,t]),i=n.locales,a=n.locale,o=this.organizeRawLocales(i),r=o.map,s=this.buildLocale(a||o.defaultCode,r).options,l=this.buildPluginHooks(e.plugins||[],bd),c=this.currentCalendarOptionsRefiners=Q(Q(Q(Q(Q({},Os),zs),js),l.listenerRefiners),l.optionRefiners),d={},u=Ls([Ms,s,e,t]),h={},f=this.currentCalendarOptionsInput,p=this.currentCalendarOptionsRefined,v=!1;for(var g in u)"plugins"!==g&&(u[g]===f[g]||Ns[g]&&g in f&&Ns[g](f[g],u[g])?h[g]=p[g]:c[g]?(h[g]=c[g](u[g]),v=!0):d[g]=f[g]);return v&&(this.currentCalendarOptionsInput=u,this.currentCalendarOptionsRefined=h),{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:l,availableLocaleData:o,localeDefaults:s,extra:d}},e.prototype._computeCurrentViewData=function(e,t,n,i){var a=t.viewSpecs[e];if(!a)throw new Error('viewType "'+e+"\" is not available. Please make sure you've loaded all neccessary plugins");var o=this.processRawViewOptions(a,t.pluginHooks,t.localeDefaults,n,i),r=o.refinedOptions;return zd(o.extra),{viewSpec:a,options:r,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:a.optionDefaults.dateProfileGeneratorClass,duration:a.duration,durationUnit:a.durationUnit,usesMinMaxTime:a.optionDefaults.usesMinMaxTime,dateEnv:t.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:r.slotMinTime,slotMaxTime:r.slotMaxTime,showNonCurrentDates:r.showNonCurrentDates,dayCount:r.dayCount,dateAlignment:r.dateAlignment,dateIncrement:r.dateIncrement,hiddenDays:r.hiddenDays,weekends:r.weekends,nowInput:r.now,validRangeInput:r.validRange,visibleRangeInput:r.visibleRange,monthMode:r.monthMode,fixedWeekCount:r.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,t.dateEnv)}},e.prototype.processRawViewOptions=function(e,t,n,i,a){var o=Ls([Ms,e.optionDefaults,n,i,e.optionOverrides,a]),r=Q(Q(Q(Q(Q(Q({},Os),zs),js),Hs),t.listenerRefiners),t.optionRefiners),s={},l=this.currentViewOptionsInput,c=this.currentViewOptionsRefined,d=!1,u={};for(var h in o)o[h]===l[h]?s[h]=c[h]:(o[h]===this.currentCalendarOptionsInput[h]?h in this.currentCalendarOptionsRefined&&(s[h]=this.currentCalendarOptionsRefined[h]):r[h]?s[h]=r[h](o[h]):u[h]=o[h],d=!0);return d&&(this.currentViewOptionsInput=o,this.currentViewOptionsRefined=s),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:u}},e}();function Td(e,t,n,i,a,o,r,s){var l=ec(t||r.defaultCode,r.map);return new Zl({calendarSystem:"gregory",timeZone:e,namedTimeZoneImpl:o.namedTimeZonedImpl,locale:l,weekNumberCalculation:n,firstDay:i,weekText:a,cmdFormatter:o.cmdFormatter,defaultSeparator:s})}function Dd(e,t){return new(t.themeClasses[e.themeSystem]||jc)(e)}function Cd(e){return new(e.dateProfileGeneratorClass||Xc)(e)}function Ad(e,t,n){return new Nl(e,t,n)}function $d(e){return Kr(e,(function(e){return e.ui}))}function Rd(e,t,n){var i={"":t};for(var a in e){var o=e[a];o.sourceId&&n[o.sourceId]&&(i[a]=n[o.sourceId])}return i}function Id(e){var t=e.options;return{eventUiSingleBase:Xs({display:t.eventDisplay,editable:t.editable,startEditable:t.eventStartEditable,durationEditable:t.eventDurationEditable,constraint:t.eventConstraint,overlap:"boolean"==typeof t.eventOverlap?t.eventOverlap:void 0,allow:t.eventAllow,backgroundColor:t.eventBackgroundColor,borderColor:t.eventBorderColor,textColor:t.eventTextColor,color:t.eventColor},e),selectionConfig:Xs({constraint:t.selectConstraint,overlap:"boolean"==typeof t.selectOverlap?t.selectOverlap:void 0,allow:t.selectAllow},e)}}function Od(e,t){for(var n=0,i=t.pluginHooks.isLoadingFuncs;n<i.length;n++){if((0,i[n])(e))return!0}return!1}function Md(e){return ac(e.options.businessHours,e)}function zd(e,t){for(var n in e)console.warn("Unknown option '"+n+"'"+(t?" for view '"+t+"'":""))}!function(e){function t(t){var n=e.call(this,t)||this;return n.handleData=function(e){n.dataManager?n.setState(e):n.state=e},n.dataManager=new Sd({optionOverrides:t.optionOverrides,calendarApi:t.calendarApi,onData:n.handleData}),n}Y(t,e),t.prototype.render=function(){return this.props.children(this.state)},t.prototype.componentDidUpdate=function(e){var t=this.props.optionOverrides;t!==e.optionOverrides&&this.dataManager.resetOptions(t)}}(ir);var jd=function(){function e(){this.strictOrder=!1,this.allowReslicing=!1,this.maxCoord=-1,this.maxStackCnt=-1,this.levelCoords=[],this.entriesByLevel=[],this.stackCnts={}}return e.prototype.addSegs=function(e){for(var t=[],n=0,i=e;n<i.length;n++){var a=i[n];this.insertEntry(a,t)}return t},e.prototype.insertEntry=function(e,t){var n=this.findInsertion(e);return this.isInsertionValid(n,e)?(this.insertEntryAt(e,n),1):this.handleInvalidInsertion(n,e,t)},e.prototype.isInsertionValid=function(e,t){return(-1===this.maxCoord||e.levelCoord+t.thickness<=this.maxCoord)&&(-1===this.maxStackCnt||e.stackCnt<this.maxStackCnt)},e.prototype.handleInvalidInsertion=function(e,t,n){return this.allowReslicing&&e.touchingEntry?this.splitEntry(t,e.touchingEntry,n):(n.push(t),0)},e.prototype.splitEntry=function(e,t,n){var i=0,a=[],o=e.span,r=t.span;return o.start<r.start&&(i+=this.insertEntry({index:e.index,thickness:e.thickness,span:{start:o.start,end:r.start}},a)),o.end>r.end&&(i+=this.insertEntry({index:e.index,thickness:e.thickness,span:{start:r.end,end:o.end}},a)),i?(n.push.apply(n,Z([{index:e.index,thickness:e.thickness,span:Hd(r,o)}],a)),i):(n.push(e),0)},e.prototype.insertEntryAt=function(e,t){var n=this.entriesByLevel,i=this.levelCoords;-1===t.lateral?(Ld(i,t.level,t.levelCoord),Ld(n,t.level,[e])):Ld(n[t.level],t.lateral,e),this.stackCnts[Pd(e)]=t.stackCnt},e.prototype.findInsertion=function(e){for(var t=this,n=t.levelCoords,i=t.entriesByLevel,a=t.strictOrder,o=t.stackCnts,r=n.length,s=0,l=-1,c=-1,d=null,u=0,h=0;h<r;h+=1){var f=n[h];if(!a&&f>=s+e.thickness)break;for(var p=i[h],v=void 0,g=Bd(p,e.span.start,Nd),m=g[0]+g[1];(v=p[m])&&v.span.start<e.span.end;){var y=f+v.thickness;y>s&&(s=y,d=v,l=h,c=m),y===s&&(u=Math.max(u,o[Pd(v)]+1)),m+=1}}var b=0;if(d)for(b=l+1;b<r&&n[b]<s;)b+=1;var _=-1;return b<r&&n[b]===s&&(_=Bd(i[b],e.span.end,Nd)[0]),{touchingLevel:l,touchingLateral:c,touchingEntry:d,stackCnt:u,levelCoord:s,level:b,lateral:_}},e.prototype.toRects=function(){for(var e=this.entriesByLevel,t=this.levelCoords,n=e.length,i=[],a=0;a<n;a+=1)for(var o=e[a],r=t[a],s=0,l=o;s<l.length;s++){var c=l[s];i.push(Q(Q({},c),{levelCoord:r}))}return i},e}();function Nd(e){return e.span.end}function Pd(e){return e.index+":"+e.span.start}function Hd(e,t){var n=Math.max(e.start,t.start),i=Math.min(e.end,t.end);return n<i?{start:n,end:i}:null}function Ld(e,t,n){e.splice(t,0,n)}function Bd(e,t,n){var i=0,a=e.length;if(!a||t<n(e[i]))return[0,0];if(t>n(e[a-1]))return[a,0];for(;i<a;){var o=Math.floor(i+(a-i)/2),r=n(e[o]);if(t<r)a=o;else{if(!(t>r))return[o,1];i=o+1}}return[i,0]}var Ud=function(){function e(e){this.component=e.component,this.isHitComboAllowed=e.isHitComboAllowed||null}return e.prototype.destroy=function(){},e}();function Fd(e){var t;return(t={})[e.component.uid]=e,t}var Vd={},Wd=function(){function e(e,t){this.emitter=new bc}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}(),Gd={},qd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this,t=this.props.widgetGroups.map((function(t){return e.renderWidgetGroup(t)}));return ar.apply(void 0,Z(["div",{className:"fc-toolbar-chunk"}],t))},t.prototype.renderWidgetGroup=function(e){for(var t=this.props,n=this.context.theme,i=[],a=!0,o=0,r=e;o<r.length;o++){var s=r[o],l=s.buttonName,c=s.buttonClick,d=s.buttonText,u=s.buttonIcon;if("title"===l)a=!1,i.push(ar("h2",{className:"fc-toolbar-title"},t.title));else{var h=u?{"aria-label":l}:{},f=["fc-"+l+"-button",n.getClass("button")];l===t.activeButton&&f.push(n.getClass("buttonActive"));var p=!t.isTodayEnabled&&"today"===l||!t.isPrevEnabled&&"prev"===l||!t.isNextEnabled&&"next"===l;i.push(ar("button",Q({disabled:p,className:f.join(" "),onClick:c,type:"button"},h),d||(u?ar("span",{className:u}):"")))}}if(i.length>1){var v=a&&n.getClass("buttonGroup")||"";return ar.apply(void 0,Z(["div",{className:v}],i))}return i[0]},t}(Ac),Yd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e,t,n=this.props,i=n.model,a=n.extraClassName,o=!1,r=i.center;return i.left?(o=!0,e=i.left):e=i.start,i.right?(o=!0,t=i.right):t=i.end,ar("div",{className:[a||"","fc-toolbar",o?"fc-toolbar-ltr":""].join(" ")},this.renderSection("start",e||[]),this.renderSection("center",r||[]),this.renderSection("end",t||[]))},t.prototype.renderSection=function(e,t){var n=this.props;return ar(qd,{key:e,widgetGroups:t,title:n.title,activeButton:n.activeButton,isTodayEnabled:n.isTodayEnabled,isPrevEnabled:n.isPrevEnabled,isNextEnabled:n.isNextEnabled})},t}(Ac),Qd=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={availableWidth:null},t.handleEl=function(e){t.el=e,Ic(t.props.elRef,e),t.updateAvailableWidth()},t.handleResize=function(){t.updateAvailableWidth()},t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=e.aspectRatio,i=["fc-view-harness",n||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"],a="",o="";return n?null!==t.availableWidth?a=t.availableWidth/n:o=1/n*100+"%":a=e.height||"",ar("div",{ref:this.handleEl,onClick:e.onClick,className:i.join(" "),style:{height:a,paddingBottom:o}},e.children)},t.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize)},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize)},t.prototype.updateAvailableWidth=function(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})},t}(Ac),Zd=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSegClick=function(e,t){var i=n.component,a=i.context,o=ml(t);if(o&&i.isValidSegDownEl(e.target)){var r=pr(e.target,".fc-event-forced-url"),s=r?r.querySelector("a[href]").href:"";a.emitter.trigger("eventClick",{el:t,event:new Fl(i.context,o.eventRange.def,o.eventRange.instance),jsEvent:e,view:a.viewApi}),s&&!e.defaultPrevented&&(window.location.href=s)}},n.destroy=xr(t.el,"click",".fc-event",n.handleSegClick),n}return Y(t,e),t}(Ud),Xd=function(e){function t(t){var n,i,a,o,r,s=e.call(this,t)||this;return s.handleEventElRemove=function(e){e===s.currentSegEl&&s.handleSegLeave(null,s.currentSegEl)},s.handleSegEnter=function(e,t){ml(t)&&(s.currentSegEl=t,s.triggerEvent("eventMouseEnter",e,t))},s.handleSegLeave=function(e,t){s.currentSegEl&&(s.currentSegEl=null,s.triggerEvent("eventMouseLeave",e,t))},s.removeHoverListeners=(n=t.el,i=".fc-event",a=s.handleSegEnter,o=s.handleSegLeave,xr(n,"mouseover",i,(function(e,t){if(t!==r){r=t,a(e,t);var n=function(e){r=null,o(e,t),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n)}}))),s}return Y(t,e),t.prototype.destroy=function(){this.removeHoverListeners()},t.prototype.triggerEvent=function(e,t,n){var i=this.component,a=i.context,o=ml(n);t&&!i.isValidSegDownEl(t.target)||a.emitter.trigger(e,{el:n,event:new Fl(a,o.eventRange.def,o.eventRange.instance),jsEvent:t,view:a.viewApi})},t}(Ud),Jd=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildViewContext=ms(Dc),t.buildViewPropTransformers=ms(eu),t.buildToolbarProps=ms(Kd),t.handleNavLinkClick=wr("a[data-navlink]",t._handleNavLinkClick.bind(t)),t.headerRef=rr(),t.footerRef=rr(),t.interactionsStore={},t.registerInteractiveComponent=function(e,n){var i=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter,isHitComboAllowed:t.isHitComboAllowed||null}}(e,n),a=[Zd,Xd].concat(t.props.pluginHooks.componentInteractions).map((function(e){return new e(i)}));t.interactionsStore[e.uid]=a,Vd[e.uid]=i},t.unregisterInteractiveComponent=function(e){for(var n=0,i=t.interactionsStore[e.uid];n<i.length;n++){i[n].destroy()}delete t.interactionsStore[e.uid],delete Vd[e.uid]},t.resizeRunner=new wd((function(){t.props.emitter.trigger("_resize",!0),t.props.emitter.trigger("windowResize",{view:t.props.viewApi})})),t.handleWindowResize=function(e){var n=t.props.options;n.handleWindowResize&&e.target===window&&t.resizeRunner.request(n.windowResizeDelay)},t}return Y(t,e),t.prototype.render=function(){var e,t=this.props,n=t.toolbarConfig,i=t.options,a=this.buildToolbarProps(t.viewSpec,t.dateProfile,t.dateProfileGenerator,t.currentDate,Bl(t.options.now,t.dateEnv),t.viewTitle),o=!1,r="";t.isHeightAuto||t.forPrint?r="":null!=i.height?o=!0:null!=i.contentHeight?r=i.contentHeight:e=Math.max(i.aspectRatio,.5);var s=this.buildViewContext(t.viewSpec,t.viewApi,t.options,t.dateProfileGenerator,t.dateEnv,t.theme,t.pluginHooks,t.dispatch,t.getCurrentData,t.emitter,t.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent);return ar(Tc.Provider,{value:s},n.headerToolbar&&ar(Yd,Q({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:n.headerToolbar},a)),ar(Qd,{liquid:o,height:r,aspectRatio:e,onClick:this.handleNavLinkClick},this.renderView(t),this.buildAppendContent()),n.footerToolbar&&ar(Yd,Q({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:n.footerToolbar},a)))},t.prototype.componentDidMount=function(){var e=this.props;this.calendarInteractions=e.pluginHooks.calendarInteractions.map((function(t){return new t(e)})),window.addEventListener("resize",this.handleWindowResize);var t=e.pluginHooks.propSetHandlers;for(var n in t)t[n](e[n],e)},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.pluginHooks.propSetHandlers;for(var i in n)t[i]!==e[i]&&n[i](t[i],t)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear();for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.props.emitter.trigger("_unmount")},t.prototype._handleNavLinkClick=function(e,t){var n=this.props,i=n.dateEnv,a=n.options,o=n.calendarApi,r=t.getAttribute("data-navlink");r=r?JSON.parse(r):{};var s=i.createMarker(r.date),l=r.type,c="day"===l?a.navLinkDayClick:"week"===l?a.navLinkWeekClick:null;"function"==typeof c?c.call(o,i.toDate(s),e):("string"==typeof c&&(l=c),o.zoomTo(s,l))},t.prototype.buildAppendContent=function(){var e=this.props,t=e.pluginHooks.viewContainerAppends.map((function(t){return t(e)}));return ar.apply(void 0,Z([sr,{}],t))},t.prototype.renderView=function(e){for(var t=e.pluginHooks,n=e.viewSpec,i={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},a=0,o=this.buildViewPropTransformers(t.viewPropsTransformers);a<o.length;a++){var r=o[a];Q(i,r.transform(i,e))}var s=n.component;return ar(s,Q({},i))},t}(Cc);function Kd(e,t,n,i,a,o){var r=n.build(a,void 0,!1),s=n.buildPrev(t,i,!1),l=n.buildNext(t,i,!1);return{title:o,activeButton:e.type,isTodayEnabled:r.isValid&&!pl(t.currentRange,a),isPrevEnabled:s.isValid,isNextEnabled:l.isValid}}function eu(e){return e.map((function(e){return new e}))}var tu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={forPrint:!1},t.handleBeforePrint=function(){t.setState({forPrint:!0})},t.handleAfterPrint=function(){t.setState({forPrint:!1})},t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=e.options,n=this.state.forPrint,i=n||"auto"===t.height||"auto"===t.contentHeight,a=i||null==t.height?"":t.height,o=["fc",n?"fc-media-print":"fc-media-screen","fc-direction-"+t.direction,e.theme.getClass("root")];return sc()||o.push("fc-liquid-hack"),e.children(o,a,i,n)},t.prototype.componentDidMount=function(){var e=this.props.emitter;e.on("_beforeprint",this.handleBeforePrint),e.on("_afterprint",this.handleAfterPrint)},t.prototype.componentWillUnmount=function(){var e=this.props.emitter;e.off("_beforeprint",this.handleBeforePrint),e.off("_afterprint",this.handleAfterPrint)},t}(Ac);var nu="fc-col-header-cell";function iu(e){return e.text}var au=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.context,t=e.dateEnv,n=e.options,i=e.theme,a=e.viewApi,o=this.props,r=o.date,s=o.dateProfile,l=lc(r,o.todayRange,null,s),c=[nu].concat(cc(l,i)),d=t.format(r,o.dayHeaderFormat),u=n.navLinks&&!l.isDisabled&&o.colCnt>1?{"data-navlink":dc(r),tabIndex:0}:{},h=Q(Q(Q({date:t.toDate(r),view:a},o.extraHookProps),{text:d}),l);return ar(Pc,{hookProps:h,classNames:n.dayHeaderClassNames,content:n.dayHeaderContent,defaultContent:iu,didMount:n.dayHeaderDidMount,willUnmount:n.dayHeaderWillUnmount},(function(e,t,n,i){return ar("th",Q({ref:e,className:c.concat(t).join(" "),"data-date":l.isDisabled?void 0:ps(r),colSpan:o.colSpan},o.extraDataAttrs),ar("div",{className:"fc-scrollgrid-sync-inner"},!l.isDisabled&&ar("a",Q({ref:n,className:["fc-col-header-cell-cushion",o.isSticky?"fc-sticky":""].join(" ")},u),i)))}))},t}(Ac),ou=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.dateEnv,i=t.theme,a=t.viewApi,o=t.options,r=jr(new Date(2592e5),e.dow),s={dow:e.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},l=[nu].concat(cc(s,i),e.extraClassNames||[]),c=n.format(r,e.dayHeaderFormat),d=Q(Q(Q(Q({date:r},s),{view:a}),e.extraHookProps),{text:c});return ar(Pc,{hookProps:d,classNames:o.dayHeaderClassNames,content:o.dayHeaderContent,defaultContent:iu,didMount:o.dayHeaderDidMount,willUnmount:o.dayHeaderWillUnmount},(function(t,n,i,a){return ar("th",Q({ref:t,className:l.concat(n).join(" "),colSpan:e.colSpan},e.extraDataAttrs),ar("div",{className:"fc-scrollgrid-sync-inner"},ar("a",{className:["fc-col-header-cell-cushion",e.isSticky?"fc-sticky":""].join(" "),ref:i},a)))}))},t}(Ac),ru=function(e){function t(t,n){var i=e.call(this,t,n)||this;return i.initialNowDate=Bl(n.options.now,n.dateEnv),i.initialNowQueriedMs=(new Date).valueOf(),i.state=i.computeTiming().currentState,i}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.state;return e.children(t.nowDate,t.todayRange)},t.prototype.componentDidMount=function(){this.setTimeout()},t.prototype.componentDidUpdate=function(e){e.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())},t.prototype.componentWillUnmount=function(){this.clearTimeout()},t.prototype.computeTiming=function(){var e=this.props,t=this.context,n=Nr(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs),i=t.dateEnv.startOf(n,e.unit),a=t.dateEnv.add(i,cs(1,e.unit)),o=a.valueOf()-n.valueOf();return o=Math.min(864e5,o),{currentState:{nowDate:i,todayRange:su(i)},nextState:{nowDate:a,todayRange:su(a)},waitMs:o}},t.prototype.setTimeout=function(){var e=this,t=this.computeTiming(),n=t.nextState,i=t.waitMs;this.timeoutId=setTimeout((function(){e.setState(n,(function(){e.setTimeout()}))}),i)},t.prototype.clearTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.contextType=Tc,t}(ir);function su(e){var t=Lr(e);return{start:t,end:jr(t,1)}}var lu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createDayHeaderFormatter=ms(cu),t}return Y(t,e),t.prototype.render=function(){var e=this.context,t=this.props,n=t.dates,i=t.dateProfile,a=t.datesRepDistinctDays,o=t.renderIntro,r=this.createDayHeaderFormatter(e.options.dayHeaderFormat,a,n.length);return ar(ru,{unit:"day"},(function(e,t){return ar("tr",null,o&&o("day"),n.map((function(e){return a?ar(au,{key:e.toISOString(),date:e,dateProfile:i,todayRange:t,colCnt:n.length,dayHeaderFormat:r}):ar(ou,{key:e.getUTCDay(),dow:e.getUTCDay(),dayHeaderFormat:r})})))}))},t}(Ac);function cu(e,t,n){return e||function(e,t){return Is(!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"})}(t,n)}var du=function(){function e(e,t){for(var n=e.start,i=e.end,a=[],o=[],r=-1;n<i;)t.isHiddenDay(n)?a.push(r+.5):(r+=1,a.push(r),o.push(n)),n=jr(n,1);this.dates=o,this.indices=a,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(jr(e.end,-1)),i=Math.max(0,t),a=Math.min(this.cnt-1,n);return(i=Math.ceil(i))<=(a=Math.floor(a))?{firstIndex:i,lastIndex:a,isStart:t===i,isEnd:n===a}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(Pr(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),uu=function(){function e(e,t){var n,i,a,o=e.dates;if(t){for(i=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==i;n+=1);a=Math.ceil(o.length/n)}else a=1,n=o.length;this.rowCnt=a,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t+=1){for(var n=[],i=0;i<this.colCnt;i+=1)n.push(this.buildCell(t,i));e.push(n)}return e},e.prototype.buildCell=function(e,t){var n=this.daySeries.dates[e*this.colCnt+t];return{key:n.toISOString(),date:n}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t+=1)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),i=[];if(n)for(var a=n.firstIndex,o=n.lastIndex,r=a;r<=o;){var s=Math.floor(r/t),l=Math.min((s+1)*t,o+1);i.push({row:s,firstCol:r%t,lastCol:(l-1)%t,isStart:n.isStart&&r===a,isEnd:n.isEnd&&l-1===o}),r=l}return i},e}(),hu=function(){function e(){this.sliceBusinessHours=ms(this._sliceBusinessHours),this.sliceDateSelection=ms(this._sliceDateSpan),this.sliceEventStore=ms(this._sliceEventStore),this.sliceEventDrag=ms(this._sliceInteraction),this.sliceEventResize=ms(this._sliceInteraction),this.forceDayIfListItem=!1}return e.prototype.sliceProps=function(e,t,n,i){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];var r=e.eventUiBases,s=this.sliceEventStore.apply(this,Z([e.eventStore,r,t,n],a));return{dateSelectionSegs:this.sliceDateSelection.apply(this,Z([e.dateSelection,r,i],a)),businessHourSegs:this.sliceBusinessHours.apply(this,Z([e.businessHours,t,n,i],a)),fgEventSegs:s.fg,bgEventSegs:s.bg,eventDrag:this.sliceEventDrag.apply(this,Z([e.eventDrag,r,t,n],a)),eventResize:this.sliceEventResize.apply(this,Z([e.eventResize,r,t,n],a)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return this._sliceDateSpan.apply(this,Z([{range:{start:e,end:Nr(e,1)},allDay:!1},{},t],n))},e.prototype._sliceBusinessHours=function(e,t,n,i){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];return e?this._sliceEventStore.apply(this,Z([rs(e,fu(t,Boolean(n)),i),{},t,n],a)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,i){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];if(e){var r=vl(e,t,fu(n,Boolean(i)),i);return{bg:this.sliceEventRanges(r.bg,a),fg:this.sliceEventRanges(r.fg,a)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,i){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];if(!e)return null;var r=vl(e.mutatedEvents,t,fu(n,Boolean(i)),i);return{segs:this.sliceEventRanges(r.fg,a),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent}},e.prototype._sliceDateSpan=function(e,t,n){for(var i=[],a=3;a<arguments.length;a++)i[a-3]=arguments[a];if(!e)return[];for(var o=function(e,t,n){var i=il({editable:!1},n),a=ol(i.refined,i.extra,"",e.allDay,!0,n);return{def:a,ui:bl(a,t),instance:Qr(a.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}(e,t,n),r=this.sliceRange.apply(this,Z([e.range],i)),s=0,l=r;s<l.length;s++){l[s].eventRange=o}return r},e.prototype.sliceEventRanges=function(e,t){for(var n=[],i=0,a=e;i<a.length;i++){var o=a[i];n.push.apply(n,this.sliceEventRange(o,t))}return n},e.prototype.sliceEventRange=function(e,t){var n=e.range;this.forceDayIfListItem&&"list-item"===e.ui.display&&(n={start:n.start,end:jr(n.start,1)});for(var i=this.sliceRange.apply(this,Z([n],t)),a=0,o=i;a<o.length;a++){var r=o[a];r.eventRange=e,r.isStart=e.isStart&&r.isStart,r.isEnd=e.isEnd&&r.isEnd}return i},e}();function fu(e,t){var n=e.activeRange;return t?n:{start:Nr(n.start,e.slotMinTime.milliseconds),end:Nr(n.end,e.slotMaxTime.milliseconds-864e5)}}function pu(e,t,n){var i=e.mutatedEvents.instances;for(var a in i)if(!fl(t.validRange,i[a].range))return!1;return vu({eventDrag:e},n)}function vu(e,t){var n=t.getCurrentData(),i=Q({businessHours:n.businessHours,dateSelection:"",eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginHooks.isPropsValid||gu)(i,t)}function gu(e,t,n,i){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,i){var a=t.getCurrentData(),o=e.eventDrag,r=o.mutatedEvents,s=r.defs,l=r.instances,c=yl(s,o.isEvent?e.eventUiBases:{"":a.selectionConfig});i&&(c=Kr(c,i));var d=(p=e.eventStore,v=o.affectedEvents.instances,{defs:p.defs,instances:Jr(p.instances,(function(e){return!v[e.instanceId]}))}),u=d.defs,h=d.instances,f=yl(u,e.eventUiBases);var p,v;for(var g in l){var m=l[g],y=m.range,b=c[m.defId],_=s[m.defId];if(!mu(b.constraints,y,d,e.businessHours,t))return!1;var k=t.options.eventOverlap,w="function"==typeof k?k:null;for(var x in h){var E=h[x];if(hl(y,E.range)){if(!1===f[E.defId].overlap&&o.isEvent)return!1;if(!1===b.overlap)return!1;if(w&&!w(new Fl(t,u[E.defId],E),new Fl(t,_,m)))return!1}}for(var S=a.eventStore,T=0,D=b.allows;T<D.length;T++){var C=D[T],A=Q(Q({},n),{range:m.range,allDay:_.allDay}),$=S.defs[_.defId],R=S.instances[g],I=void 0;if(I=$?new Fl(t,$,R):new Fl(t,_),!C(Il(A,t),I))return!1}}return!0}(e,t,n,i))&&!(e.dateSelection&&!function(e,t,n,i){var a=e.eventStore,o=a.defs,r=a.instances,s=e.dateSelection,l=s.range,c=t.getCurrentData().selectionConfig;i&&(c=i(c));if(!mu(c.constraints,l,a,e.businessHours,t))return!1;var d=t.options.selectOverlap,u="function"==typeof d?d:null;for(var h in r){var f=r[h];if(hl(l,f.range)){if(!1===c.overlap)return!1;if(u&&!u(new Fl(t,o[f.defId],f),null))return!1}}for(var p=0,v=c.allows;p<v.length;p++){if(!(0,v[p])(Il(Q(Q({},n),s),t),null))return!1}return!0}(e,t,n,i))}function mu(e,t,n,i,a){for(var o=0,r=e;o<r.length;o++){if(!_u(yu(r[o],t,n,i,a),t))return!1}return!0}function yu(e,t,n,i,a){return"businessHours"===e?bu(rs(i,t,a)):"string"==typeof e?bu(qs(n,(function(t){return t.groupId===e}))):"object"==typeof e&&e?bu(rs(e,t,a)):[]}function bu(e){var t=e.instances,n=[];for(var i in t)n.push(t[i].range);return n}function _u(e,t){for(var n=0,i=e;n<i.length;n++){if(fl(i[n],t))return!0}return!1}var ku=/^(visible|hidden)$/,wu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleEl=function(e){t.el=e,Ic(t.props.elRef,e)},t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=e.liquid,n=e.liquidIsAbsolute,i=t&&n,a=["fc-scroller"];return t&&(n?a.push("fc-scroller-liquid-absolute"):a.push("fc-scroller-liquid")),ar("div",{ref:this.handleEl,className:a.join(" "),style:{overflowX:e.overflowX,overflowY:e.overflowY,left:i&&-(e.overcomeLeft||0)||"",right:i&&-(e.overcomeRight||0)||"",bottom:i&&-(e.overcomeBottom||0)||"",marginLeft:!i&&-(e.overcomeLeft||0)||"",marginRight:!i&&-(e.overcomeRight||0)||"",marginBottom:!i&&-(e.overcomeBottom||0)||"",maxHeight:e.maxHeight||""}},e.children)},t.prototype.needsXScrolling=function(){if(ku.test(this.props.overflowX))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),n=e.children,i=0;i<n.length;i+=1){if(n[i].getBoundingClientRect().width>t)return!0}return!1},t.prototype.needsYScrolling=function(){if(ku.test(this.props.overflowY))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),n=e.children,i=0;i<n.length;i+=1){if(n[i].getBoundingClientRect().height>t)return!0}return!1},t.prototype.getXScrollbarWidth=function(){return ku.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight},t.prototype.getYScrollbarWidth=function(){return ku.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth},t}(Ac),xu=function(){function e(e){var t=this;this.masterCallback=e,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=function(e,n){var i=t,a=i.depths,o=i.currentMap,r=!1,s=!1;null!==e?(r=n in o,o[n]=e,a[n]=(a[n]||0)+1,s=!0):(a[n]-=1,a[n]||(delete o[n],delete t.callbackMap[n],r=!0)),t.masterCallback&&(r&&t.masterCallback(null,String(n)),s&&t.masterCallback(e,String(n)))}}return e.prototype.createRef=function(e){var t=this,n=this.callbackMap[e];return n||(n=this.callbackMap[e]=function(n){t.handleValue(n,String(e))}),n},e.prototype.collect=function(e,t,n){return function(e,t,n,i){void 0===t&&(t=0),void 0===i&&(i=1);var a=[];null==n&&(n=Object.keys(e).length);for(var o=t;o<n;o+=i){var r=e[o];void 0!==r&&a.push(r)}return a}(this.currentMap,e,t,n)},e.prototype.getAll=function(){return ts(this.currentMap)},e}();function Eu(e){for(var t=function(e,t){for(var n=e instanceof HTMLElement?[e]:e,i=[],a=0;a<n.length;a+=1)for(var o=n[a].querySelectorAll(t),r=0;r<o.length;r+=1)i.push(o[r]);return i}(e,".fc-scrollgrid-shrink"),n=0,i=0,a=t;i<a.length;i++){var o=a[i];n=Math.max(n,Or(o))}return Math.ceil(n)}function Su(e,t){return e.liquid&&t.liquid}function Tu(e,t){return gs(e,t,ns)}function Du(e,t){for(var n=[],i=0,a=e;i<a.length;i++)for(var o=a[i],r=o.span||1,s=0;s<r;s+=1)n.push(ar("col",{style:{width:"shrink"===o.width?Cu(t):o.width||"",minWidth:o.minWidth||""}}));return ar.apply(void 0,Z(["colgroup",{}],n))}function Cu(e){return null==e?4:e}function Au(e,t){var n=["fc-scrollgrid-section","fc-scrollgrid-section-"+e.type,e.className];return t&&e.liquid&&null==e.maxHeight&&n.push("fc-scrollgrid-section-liquid"),e.isSticky&&n.push("fc-scrollgrid-section-sticky"),n}function $u(e){return ar("div",{className:"fc-scrollgrid-sticky-shim",style:{width:e.clientWidth,minWidth:e.tableMinWidth}})}function Ru(e){var t=e.stickyHeaderDates;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}var Iu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processCols=ms((function(e){return e}),Tu),t.renderMicroColGroup=ms(Du),t.scrollerRefs=new xu,t.scrollerElRefs=new xu(t._handleScrollerEl.bind(t)),t.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},t.handleSizing=function(){t.setState(Q({shrinkWidth:t.computeShrinkWidth()},t.computeScrollerDims()))},t}return Y(t,e),t.prototype.render=function(){var e=this,t=e.props,n=e.state,i=e.context,a=t.sections||[],o=this.processCols(t.cols),r=this.renderMicroColGroup(o,n.shrinkWidth),s=function(e,t){var n=["fc-scrollgrid",t.theme.getClass("table")];return e&&n.push("fc-scrollgrid-liquid"),n}(t.liquid,i);t.collapsibleWidth&&s.push("fc-scrollgrid-collapsible");for(var l,c=a.length,d=0,u=[],h=[],f=[];d<c&&"header"===(l=a[d]).type;)u.push(this.renderSection(l,r)),d+=1;for(;d<c&&"body"===(l=a[d]).type;)h.push(this.renderSection(l,r)),d+=1;for(;d<c&&"footer"===(l=a[d]).type;)f.push(this.renderSection(l,r)),d+=1;var p=!sc();return ar("table",{className:s.join(" "),style:{height:t.height}},Boolean(!p&&u.length)&&ar.apply(void 0,Z(["thead",{}],u)),Boolean(!p&&h.length)&&ar.apply(void 0,Z(["tbody",{}],h)),Boolean(!p&&f.length)&&ar.apply(void 0,Z(["tfoot",{}],f)),p&&ar.apply(void 0,Z(Z(Z(["tbody",{}],u),h),f)))},t.prototype.renderSection=function(e,t){return"outerContent"in e?ar(sr,{key:e.key},e.outerContent):ar("tr",{key:e.key,className:Au(e,this.props.liquid).join(" ")},this.renderChunkTd(e,t,e.chunk))},t.prototype.renderChunkTd=function(e,t,n){if("outerContent"in n)return n.outerContent;var i=this.props,a=this.state,o=a.forceYScrollbars,r=a.scrollerClientWidths,s=a.scrollerClientHeights,l=function(e,t){return null!=t.maxHeight||Su(e,t)}(i,e),c=Su(i,e),d=i.liquid?o?"scroll":l?"auto":"hidden":"visible",u=e.key,h=function(e,t,n){var i=n.expandRows;return"function"==typeof t.content?t.content(n):ar("table",{className:[t.tableClassName,e.syncRowHeights?"fc-scrollgrid-sync-table":""].join(" "),style:{minWidth:n.tableMinWidth,width:n.clientWidth,height:i?n.clientHeight:""}},n.tableColGroupNode,ar("tbody",{},"function"==typeof t.rowContent?t.rowContent(n):t.rowContent))}(e,n,{tableColGroupNode:t,tableMinWidth:"",clientWidth:i.collapsibleWidth||void 0===r[u]?null:r[u],clientHeight:void 0!==s[u]?s[u]:null,expandRows:e.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:function(){}});return ar("td",{ref:n.elRef},ar("div",{className:"fc-scroller-harness"+(c?" fc-scroller-harness-liquid":"")},ar(wu,{ref:this.scrollerRefs.createRef(u),elRef:this.scrollerElRefs.createRef(u),overflowY:d,overflowX:i.liquid?"hidden":"visible",maxHeight:e.maxHeight,liquid:c,liquidIsAbsolute:!0},h)))},t.prototype._handleScrollerEl=function(e,t){var n=function(e,t){for(var n=0,i=e;n<i.length;n++){var a=i[n];if(a.key===t)return a}return null}(this.props.sections,t);n&&Ic(n.chunk.scrollerElRef,e)},t.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(){this.handleSizing()},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},t.prototype.computeShrinkWidth=function(){return function(e){for(var t=0,n=e;t<n.length;t++)if("shrink"===n[t].width)return!0;return!1}(this.props.cols)?Eu(this.scrollerElRefs.getAll()):0},t.prototype.computeScrollerDims=function(){var e=pc(),t=this.scrollerRefs,n=this.scrollerElRefs,i=!1,a={},o={};for(var r in t.currentMap){var s=t.currentMap[r];if(s&&s.needsYScrolling()){i=!0;break}}for(var l=0,c=this.props.sections;l<c.length;l++){r=c[l].key;var d=n.currentMap[r];if(d){var u=d.parentNode;a[r]=Math.floor(u.getBoundingClientRect().width-(i?e.y:0)),o[r]=Math.floor(u.getBoundingClientRect().height)}}return{forceYScrollbars:i,scrollerClientWidths:a,scrollerClientHeights:o}},t}(Ac);Iu.addStateEquality({scrollerClientWidths:ns,scrollerClientHeights:ns});var Ou=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elRef=rr(),t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,i=e.seg,a=i.eventRange,o=a.ui,r={event:new Fl(t,a.def,a.instance),view:t.viewApi,timeText:e.timeText,textColor:o.textColor,backgroundColor:o.backgroundColor,borderColor:o.borderColor,isDraggable:!e.disableDragging&&wl(i,t),isStartResizable:!e.disableResizing&&xl(i,t),isEndResizable:!e.disableResizing&&El(i),isMirror:Boolean(e.isDragging||e.isResizing||e.isDateSelecting),isStart:Boolean(i.isStart),isEnd:Boolean(i.isEnd),isPast:Boolean(e.isPast),isFuture:Boolean(e.isFuture),isToday:Boolean(e.isToday),isSelected:Boolean(e.isSelected),isDragging:Boolean(e.isDragging),isResizing:Boolean(e.isResizing)},s=function(e){var t=["fc-event"];return e.isMirror&&t.push("fc-event-mirror"),e.isDraggable&&t.push("fc-event-draggable"),(e.isStartResizable||e.isEndResizable)&&t.push("fc-event-resizable"),e.isDragging&&t.push("fc-event-dragging"),e.isResizing&&t.push("fc-event-resizing"),e.isSelected&&t.push("fc-event-selected"),e.isStart&&t.push("fc-event-start"),e.isEnd&&t.push("fc-event-end"),e.isPast&&t.push("fc-event-past"),e.isToday&&t.push("fc-event-today"),e.isFuture&&t.push("fc-event-future"),t}(r).concat(o.classNames);return ar(Pc,{hookProps:r,classNames:n.eventClassNames,content:n.eventContent,defaultContent:e.defaultContent,didMount:n.eventDidMount,willUnmount:n.eventWillUnmount,elRef:this.elRef},(function(t,n,i,a){return e.children(t,s.concat(n),i,a,r)}))},t.prototype.componentDidMount=function(){gl(this.elRef.current,this.props.seg)},t.prototype.componentDidUpdate=function(e){var t=this.props.seg;t!==e.seg&&gl(this.elRef.current,t)},t}(Ac),Mu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,i=t.options.eventTimeFormat||e.defaultTimeFormat,a=Sl(n,i,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd);return ar(Ou,{seg:n,timeText:a,disableDragging:e.disableDragging,disableResizing:e.disableResizing,defaultContent:e.defaultContent||zu,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(t,i,a,o,r){return ar("a",Q({className:e.extraClassNames.concat(i).join(" "),style:{borderColor:r.borderColor,backgroundColor:r.backgroundColor},ref:t},function(e){var t=e.eventRange.def.url;return t?{href:t}:{}}(n)),ar("div",{className:"fc-event-main",ref:a,style:{color:r.textColor}},o),r.isStartResizable&&ar("div",{className:"fc-event-resizer fc-event-resizer-start"}),r.isEndResizable&&ar("div",{className:"fc-event-resizer fc-event-resizer-end"}))}))},t}(Ac);function zu(e){return ar("div",{className:"fc-event-main-frame"},e.timeText&&ar("div",{className:"fc-event-time"},e.timeText),ar("div",{className:"fc-event-title-container"},ar("div",{className:"fc-event-title fc-sticky"},e.event.title||ar(sr,null," "))))}var ju=Is({day:"numeric"}),Nu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,i=Pu({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv});return ar(Lc,{hookProps:i,content:n.dayCellContent,defaultContent:e.defaultContent},e.children)},t}(Ac);function Pu(e){var t=e.date,n=e.dateEnv,i=lc(t,e.todayRange,null,e.dateProfile);return Q(Q(Q({date:n.toDate(t),view:e.viewApi},i),{dayNumberText:e.showDayNumber?n.format(t,ju):""}),e.extraProps)}var Hu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=ys(Pu),t.normalizeClassNames=Fc(),t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,i=this.refineHookProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv}),a=cc(i,t.theme).concat(i.isDisabled?[]:this.normalizeClassNames(n.dayCellClassNames,i)),o=i.isDisabled?{}:{"data-date":ps(e.date)};return ar(Uc,{hookProps:i,didMount:n.dayCellDidMount,willUnmount:n.dayCellWillUnmount,elRef:e.elRef},(function(t){return e.children(t,a,o,i.isDisabled)}))},t}(Ac);function Lu(e){return ar("div",{className:"fc-"+e})}var Bu=function(e){return ar(Ou,{defaultContent:Uu,seg:e.seg,timeText:"",disableDragging:!0,disableResizing:!0,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(e,t,n,i,a){return ar("div",{ref:e,className:["fc-bg-event"].concat(t).join(" "),style:{backgroundColor:a.backgroundColor}},i)}))};function Uu(e){return e.event.title&&ar("div",{className:"fc-event-title"},e.event.title)}var Fu=function(e){return ar(Tc.Consumer,null,(function(t){var n=t.dateEnv,i=t.options,a=e.date,o=i.weekNumberFormat||e.defaultFormat,r=n.computeWeekNumber(a),s=n.format(a,o);return ar(Pc,{hookProps:{num:r,text:s,date:a},classNames:i.weekNumberClassNames,content:i.weekNumberContent,defaultContent:Vu,didMount:i.weekNumberDidMount,willUnmount:i.weekNumberWillUnmount},e.children)}))};function Vu(e){return e.text}var Wu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Ic(t.props.elRef,e)},t.handleDocumentMousedown=function(e){var n=br(e);t.rootEl.contains(n)||t.handleCloseClick()},t.handleCloseClick=function(){var e=t.props.onClose;e&&e()},t}return Y(t,e),t.prototype.render=function(){var e=this.context.theme,t=this.props,n=["fc-popover",e.getClass("popover")].concat(t.extraClassNames||[]);return cr(ar("div",Q({className:n.join(" ")},t.extraAttrs,{ref:this.handleRootEl}),ar("div",{className:"fc-popover-header "+e.getClass("popoverHeader")},ar("span",{className:"fc-popover-title"},t.title),ar("span",{className:"fc-popover-close "+e.getIconClass("close"),onClick:this.handleCloseClick})),ar("div",{className:"fc-popover-body "+e.getClass("popoverContent")},t.children)),t.parentEl)},t.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleDocumentMousedown),this.updateSize()},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleDocumentMousedown)},t.prototype.updateSize=function(){var e=this.context.isRtl,t=this.props,n=t.alignmentEl,i=t.alignGridTop,a=this.rootEl,o=function(e){for(var t=yc(e),n=e.getBoundingClientRect(),i=0,a=t;i<a.length;i++){var o=rc(n,a[i].getBoundingClientRect());if(!o)return null;n=o}return n}(n);if(o){var r=a.getBoundingClientRect(),s=i?pr(n,".fc-scrollgrid").getBoundingClientRect().top:o.top,l=e?o.right-r.width:o.left;s=Math.max(s,10),l=Math.min(l,document.documentElement.clientWidth-10-r.width),l=Math.max(l,10);var c=a.offsetParent.getBoundingClientRect();mr(a,{top:s-c.top,left:l-c.left})}},t}(Ac),Gu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,e?t.context.registerInteractiveComponent(t,{el:e,useEventCenter:!1}):t.context.unregisterInteractiveComponent(t)},t}return Y(t,e),t.prototype.render=function(){var e=this.context,t=e.options,n=e.dateEnv,i=this.props,a=i.startDate,o=i.todayRange,r=i.dateProfile,s=n.format(a,t.dayPopoverFormat);return ar(Hu,{date:a,dateProfile:r,todayRange:o,elRef:this.handleRootEl},(function(e,t,n){return ar(Wu,{elRef:e,title:s,extraClassNames:["fc-more-popover"].concat(t),extraAttrs:n,parentEl:i.parentEl,alignmentEl:i.alignmentEl,alignGridTop:i.alignGridTop,onClose:i.onClose},ar(Nu,{date:a,dateProfile:r,todayRange:o},(function(e,t){return t&&ar("div",{className:"fc-more-popover-misc",ref:e},t)})),i.children)}))},t.prototype.queryHit=function(e,t,n,i){var a=this.rootEl,o=this.props;return e>=0&&e<n&&t>=0&&t<i?{dateProfile:o.dateProfile,dateSpan:Q({allDay:!0,range:{start:o.startDate,end:o.endDate}},o.extraDateSpan),dayEl:a,rect:{left:0,top:0,right:n,bottom:i},layer:1}:null},t}(Oc),qu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.linkElRef=rr(),t.state={isPopoverOpen:!1},t.handleClick=function(e){var n=t,i=n.props,a=n.context,o=a.options.moreLinkClick,r=Qu(i).start;function s(e){var t=e.eventRange,n=t.def,i=t.instance,o=t.range;return{event:new Fl(a,n,i),start:a.dateEnv.toDate(o.start),end:a.dateEnv.toDate(o.end),isStart:e.isStart,isEnd:e.isEnd}}"function"==typeof o&&(o=o({date:r,allDay:Boolean(i.allDayDate),allSegs:i.allSegs.map(s),hiddenSegs:i.hiddenSegs.map(s),jsEvent:e,view:a.viewApi})),o&&"popover"!==o?"string"==typeof o&&a.calendarApi.zoomTo(r,o):t.setState({isPopoverOpen:!0})},t.handlePopoverClose=function(){t.setState({isPopoverOpen:!1})},t}return Y(t,e),t.prototype.render=function(){var e=this,t=this.props;return ar(Tc.Consumer,null,(function(n){var i=n.viewApi,a=n.options,o=n.calendarApi,r=a.moreLinkText,s=t.moreCnt,l=Qu(t),c={num:s,shortText:"+"+s,text:"function"==typeof r?r.call(o,s):"+"+s+" "+r,view:i};return ar(sr,null,Boolean(t.moreCnt)&&ar(Pc,{elRef:e.linkElRef,hookProps:c,classNames:a.moreLinkClassNames,content:a.moreLinkContent,defaultContent:t.defaultContent||Yu,didMount:a.moreLinkDidMount,willUnmount:a.moreLinkWillUnmount},(function(n,i,a,o){return t.children(n,["fc-more-link"].concat(i),a,o,e.handleClick)})),e.state.isPopoverOpen&&ar(Gu,{startDate:l.start,endDate:l.end,dateProfile:t.dateProfile,todayRange:t.todayRange,extraDateSpan:t.extraDateSpan,parentEl:e.parentEl,alignmentEl:t.alignmentElRef.current,alignGridTop:t.alignGridTop,onClose:e.handlePopoverClose},t.popoverContent()))}))},t.prototype.componentDidMount=function(){this.updateParentEl()},t.prototype.componentDidUpdate=function(){this.updateParentEl()},t.prototype.updateParentEl=function(){this.linkElRef.current&&(this.parentEl=pr(this.linkElRef.current,".fc-view-harness"))},t}(Ac);function Yu(e){return e.text}function Qu(e){if(e.allDayDate)return{start:e.allDayDate,end:jr(e.allDayDate,1)};var t,n=e.hiddenSegs;return{start:(t=n,t.reduce(Zu).eventRange.range.start),end:Xu(n)}}function Zu(e,t){return e.eventRange.range.start<t.eventRange.range.start?e:t}function Xu(e){return e.reduce(Ju).eventRange.range.end}function Ju(e,t){return e.eventRange.range.end>t.eventRange.range.end?e:t}var Ku=function(e){function t(t,n){void 0===n&&(n={});var i=e.call(this)||this;return i.isRendering=!1,i.isRendered=!1,i.currentClassNames=[],i.customContentRenderId=0,i.handleAction=function(e){switch(e.type){case"SET_EVENT_DRAG":case"SET_EVENT_RESIZE":i.renderRunner.tryDrain()}},i.handleData=function(e){i.currentData=e,i.renderRunner.request(e.calendarOptions.rerenderDelay)},i.handleRenderRequest=function(){if(i.isRendering){i.isRendered=!0;var e=i.currentData;or(ar(tu,{options:e.calendarOptions,theme:e.theme,emitter:e.emitter},(function(t,n,a,o){return i.setClassNames(t),i.setHeight(n),ar(Hc.Provider,{value:i.customContentRenderId},ar(Jd,Q({isHeightAuto:a,forPrint:o},e)))})),i.el)}else i.isRendered&&(i.isRendered=!1,ur(i.el),i.setClassNames([]),i.setHeight(""));dr()},i.el=t,i.renderRunner=new wd(i.handleRenderRequest),new Sd({optionOverrides:n,calendarApi:i,onAction:i.handleAction,onData:i.handleData}),i}return Y(t,e),Object.defineProperty(t.prototype,"view",{get:function(){return this.currentData.viewApi},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this.isRendering;e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()},t.prototype.destroy=function(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())},t.prototype.updateSize=function(){e.prototype.updateSize.call(this),dr()},t.prototype.batchRendering=function(e){this.renderRunner.pause("batchRendering"),e(),this.renderRunner.resume("batchRendering")},t.prototype.pauseRendering=function(){this.renderRunner.pause("pauseRendering")},t.prototype.resumeRendering=function(){this.renderRunner.resume("pauseRendering",!0)},t.prototype.resetOptions=function(e,t){this.currentDataManager.resetOptions(e,t)},t.prototype.setClassNames=function(e){if(!gs(e,this.currentClassNames)){for(var t=this.el.classList,n=0,i=this.currentClassNames;n<i.length;n++){var a=i[n];t.remove(a)}for(var o=0,r=e;o<r.length;o++){a=r[o];t.add(a)}this.currentClassNames=e}},t.prototype.setHeight=function(e){yr(this.el,"height",e)},t}(Ul),eh=St((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=[{code:"af",week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Heeldag",moreLinkText:"Addisionele",noEventsText:"Daar is geen gebeurtenisse nie"},{code:"ar-dz",week:{dow:0,doy:4},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-kw",week:{dow:0,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-ly",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-ma",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-sa",week:{dow:0,doy:6},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-tn",week:{dow:1,doy:4},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"az",week:{dow:1,doy:4},buttonText:{prev:"Əvvəl",next:"Sonra",today:"Bu Gün",month:"Ay",week:"Həftə",day:"Gün",list:"Gündəm"},weekText:"Həftə",allDayText:"Bütün Gün",moreLinkText:function(e){return"+ daha çox "+e},noEventsText:"Göstərmək üçün hadisə yoxdur"},{code:"bg",week:{dow:1,doy:7},buttonText:{prev:"назад",next:"напред",today:"днес",month:"Месец",week:"Седмица",day:"Ден",list:"График"},allDayText:"Цял ден",moreLinkText:function(e){return"+още "+e},noEventsText:"Няма събития за показване"},{code:"bn",week:{dow:0,doy:6},buttonText:{prev:"পেছনে",next:"সামনে",today:"আজ",month:"মাস",week:"সপ্তাহ",day:"দিন",list:"তালিকা"},weekText:"সপ্তাহ",allDayText:"সারাদিন",moreLinkText:function(e){return"+অন্যান্য "+e},noEventsText:"কোনো ইভেন্ট নেই"},{code:"bs",week:{dow:1,doy:7},buttonText:{prev:"Prošli",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Sedmica",day:"Dan",list:"Raspored"},weekText:"Sed",allDayText:"Cijeli dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nema događaja za prikazivanje"},{code:"ca",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Següent",today:"Avui",month:"Mes",week:"Setmana",day:"Dia",list:"Agenda"},weekText:"Set",allDayText:"Tot el dia",moreLinkText:"més",noEventsText:"No hi ha esdeveniments per mostrar"},{code:"cs",week:{dow:1,doy:4},buttonText:{prev:"Dříve",next:"Později",today:"Nyní",month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},weekText:"Týd",allDayText:"Celý den",moreLinkText:function(e){return"+další: "+e},noEventsText:"Žádné akce k zobrazení"},{code:"cy",week:{dow:1,doy:4},buttonText:{prev:"Blaenorol",next:"Nesaf",today:"Heddiw",year:"Blwyddyn",month:"Mis",week:"Wythnos",day:"Dydd",list:"Rhestr"},weekText:"Wythnos",allDayText:"Trwy'r dydd",moreLinkText:"Mwy",noEventsText:"Dim digwyddiadau"},{code:"da",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Næste",today:"I dag",month:"Måned",week:"Uge",day:"Dag",list:"Agenda"},weekText:"Uge",allDayText:"Hele dagen",moreLinkText:"flere",noEventsText:"Ingen arrangementer at vise"},{code:"de-at",week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekText:"KW",allDayText:"Ganztägig",moreLinkText:function(e){return"+ weitere "+e},noEventsText:"Keine Ereignisse anzuzeigen"},{code:"de",week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekText:"KW",allDayText:"Ganztägig",moreLinkText:function(e){return"+ weitere "+e},noEventsText:"Keine Ereignisse anzuzeigen"},{code:"el",week:{dow:1,doy:4},buttonText:{prev:"Προηγούμενος",next:"Επόμενος",today:"Σήμερα",month:"Μήνας",week:"Εβδομάδα",day:"Ημέρα",list:"Ατζέντα"},weekText:"Εβδ",allDayText:"Ολοήμερο",moreLinkText:"περισσότερα",noEventsText:"Δεν υπάρχουν γεγονότα προς εμφάνιση"},{code:"en-au",week:{dow:1,doy:4}},{code:"en-gb",week:{dow:1,doy:4}},{code:"en-nz",week:{dow:1,doy:4}},{code:"eo",week:{dow:1,doy:4},buttonText:{prev:"Antaŭa",next:"Sekva",today:"Hodiaŭ",month:"Monato",week:"Semajno",day:"Tago",list:"Tagordo"},weekText:"Sm",allDayText:"Tuta tago",moreLinkText:"pli",noEventsText:"Neniuj eventoj por montri"},{code:"es",week:{dow:0,doy:6},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekText:"Sm",allDayText:"Todo el día",moreLinkText:"más",noEventsText:"No hay eventos para mostrar"},{code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekText:"Sm",allDayText:"Todo el día",moreLinkText:"más",noEventsText:"No hay eventos para mostrar"},{code:"et",week:{dow:1,doy:4},buttonText:{prev:"Eelnev",next:"Järgnev",today:"Täna",month:"Kuu",week:"Nädal",day:"Päev",list:"Päevakord"},weekText:"näd",allDayText:"Kogu päev",moreLinkText:function(e){return"+ veel "+e},noEventsText:"Kuvamiseks puuduvad sündmused"},{code:"eu",week:{dow:1,doy:7},buttonText:{prev:"Aur",next:"Hur",today:"Gaur",month:"Hilabetea",week:"Astea",day:"Eguna",list:"Agenda"},weekText:"As",allDayText:"Egun osoa",moreLinkText:"gehiago",noEventsText:"Ez dago ekitaldirik erakusteko"},{code:"fa",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"قبلی",next:"بعدی",today:"امروز",month:"ماه",week:"هفته",day:"روز",list:"برنامه"},weekText:"هف",allDayText:"تمام روز",moreLinkText:function(e){return"بیش از "+e},noEventsText:"هیچ رویدادی به نمایش"},{code:"fi",week:{dow:1,doy:4},buttonText:{prev:"Edellinen",next:"Seuraava",today:"Tänään",month:"Kuukausi",week:"Viikko",day:"Päivä",list:"Tapahtumat"},weekText:"Vk",allDayText:"Koko päivä",moreLinkText:"lisää",noEventsText:"Ei näytettäviä tapahtumia"},{code:"fr",buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekText:"Sem.",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"fr-ch",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Courant",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekText:"Sm",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"fr",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Planning"},weekText:"Sem.",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"gl",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Seg",today:"Hoxe",month:"Mes",week:"Semana",day:"Día",list:"Axenda"},weekText:"Sm",allDayText:"Todo o día",moreLinkText:"máis",noEventsText:"Non hai eventos para amosar"},{code:"he",direction:"rtl",buttonText:{prev:"הקודם",next:"הבא",today:"היום",month:"חודש",week:"שבוע",day:"יום",list:"סדר יום"},allDayText:"כל היום",moreLinkText:"אחר",noEventsText:"אין אירועים להצגה",weekText:"שבוע"},{code:"hi",week:{dow:0,doy:6},buttonText:{prev:"पिछला",next:"अगला",today:"आज",month:"महीना",week:"सप्ताह",day:"दिन",list:"कार्यसूची"},weekText:"हफ्ता",allDayText:"सभी दिन",moreLinkText:function(e){return"+अधिक "+e},noEventsText:"कोई घटनाओं को प्रदर्शित करने के लिए"},{code:"hr",week:{dow:1,doy:7},buttonText:{prev:"Prijašnji",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Tjedan",day:"Dan",list:"Raspored"},weekText:"Tje",allDayText:"Cijeli dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nema događaja za prikaz"},{code:"hu",week:{dow:1,doy:4},buttonText:{prev:"vissza",next:"előre",today:"ma",month:"Hónap",week:"Hét",day:"Nap",list:"Lista"},weekText:"Hét",allDayText:"Egész nap",moreLinkText:"további",noEventsText:"Nincs megjeleníthető esemény"},{code:"hy-am",week:{dow:1,doy:4},buttonText:{prev:"Նախորդ",next:"Հաջորդ",today:"Այսօր",month:"Ամիս",week:"Շաբաթ",day:"Օր",list:"Օրվա ցուցակ"},weekText:"Շաբ",allDayText:"Ամբողջ օր",moreLinkText:function(e){return"+ ևս "+e},noEventsText:"Բացակայում է իրադարձությունը ցուցադրելու"},{code:"id",week:{dow:1,doy:7},buttonText:{prev:"mundur",next:"maju",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekText:"Mg",allDayText:"Sehari penuh",moreLinkText:"lebih",noEventsText:"Tidak ada acara untuk ditampilkan"},{code:"is",week:{dow:1,doy:4},buttonText:{prev:"Fyrri",next:"Næsti",today:"Í dag",month:"Mánuður",week:"Vika",day:"Dagur",list:"Dagskrá"},weekText:"Vika",allDayText:"Allan daginn",moreLinkText:"meira",noEventsText:"Engir viðburðir til að sýna"},{code:"it",week:{dow:1,doy:4},buttonText:{prev:"Prec",next:"Succ",today:"Oggi",month:"Mese",week:"Settimana",day:"Giorno",list:"Agenda"},weekText:"Sm",allDayText:"Tutto il giorno",moreLinkText:function(e){return"+altri "+e},noEventsText:"Non ci sono eventi da visualizzare"},{code:"ja",buttonText:{prev:"前",next:"次",today:"今日",month:"月",week:"週",day:"日",list:"予定リスト"},weekText:"週",allDayText:"終日",moreLinkText:function(e){return"他 "+e+" 件"},noEventsText:"表示する予定はありません"},{code:"ka",week:{dow:1,doy:7},buttonText:{prev:"წინა",next:"შემდეგი",today:"დღეს",month:"თვე",week:"კვირა",day:"დღე",list:"დღის წესრიგი"},weekText:"კვ",allDayText:"მთელი დღე",moreLinkText:function(e){return"+ კიდევ "+e},noEventsText:"ღონისძიებები არ არის"},{code:"kk",week:{dow:1,doy:7},buttonText:{prev:"Алдыңғы",next:"Келесі",today:"Бүгін",month:"Ай",week:"Апта",day:"Күн",list:"Күн тәртібі"},weekText:"Не",allDayText:"Күні бойы",moreLinkText:function(e){return"+ тағы "+e},noEventsText:"Көрсету үшін оқиғалар жоқ"},{code:"km",week:{dow:1,doy:4},buttonText:{prev:"មុន",next:"បន្ទាប់",today:"ថ្ងៃនេះ",year:"ឆ្នាំ",month:"ខែ",week:"សប្តាហ៍",day:"ថ្ងៃ",list:"បញ្ជី"},weekText:"សប្តាហ៍",allDayText:"ពេញមួយថ្ងៃ",moreLinkText:"ច្រើនទៀត",noEventsText:"គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ"},{code:"ko",buttonText:{prev:"이전달",next:"다음달",today:"오늘",month:"월",week:"주",day:"일",list:"일정목록"},weekText:"주",allDayText:"종일",moreLinkText:"개",noEventsText:"일정이 없습니다"},{code:"ku",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"پێشتر",next:"دواتر",today:"ئەمڕو",month:"مانگ",week:"هەفتە",day:"ڕۆژ",list:"بەرنامە"},weekText:"هەفتە",allDayText:"هەموو ڕۆژەکە",moreLinkText:"زیاتر",noEventsText:"هیچ ڕووداوێك نیە"},{code:"lb",week:{dow:1,doy:4},buttonText:{prev:"Zréck",next:"Weider",today:"Haut",month:"Mount",week:"Woch",day:"Dag",list:"Terminiwwersiicht"},weekText:"W",allDayText:"Ganzen Dag",moreLinkText:"méi",noEventsText:"Nee Evenementer ze affichéieren"},{code:"lt",week:{dow:1,doy:4},buttonText:{prev:"Atgal",next:"Pirmyn",today:"Šiandien",month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},weekText:"SAV",allDayText:"Visą dieną",moreLinkText:"daugiau",noEventsText:"Nėra įvykių rodyti"},{code:"lv",week:{dow:1,doy:4},buttonText:{prev:"Iepr.",next:"Nāk.",today:"Šodien",month:"Mēnesis",week:"Nedēļa",day:"Diena",list:"Dienas kārtība"},weekText:"Ned.",allDayText:"Visu dienu",moreLinkText:function(e){return"+vēl "+e},noEventsText:"Nav notikumu"},{code:"mk",buttonText:{prev:"претходно",next:"следно",today:"Денес",month:"Месец",week:"Недела",day:"Ден",list:"График"},weekText:"Сед",allDayText:"Цел ден",moreLinkText:function(e){return"+повеќе "+e},noEventsText:"Нема настани за прикажување"},{code:"ms",week:{dow:1,doy:7},buttonText:{prev:"Sebelum",next:"Selepas",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekText:"Mg",allDayText:"Sepanjang hari",moreLinkText:function(e){return"masih ada "+e+" acara"},noEventsText:"Tiada peristiwa untuk dipaparkan"},{code:"nb",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Neste",today:"I dag",month:"Måned",week:"Uke",day:"Dag",list:"Agenda"},weekText:"Uke",allDayText:"Hele dagen",moreLinkText:"til",noEventsText:"Ingen hendelser å vise"},{code:"ne",week:{dow:7,doy:1},buttonText:{prev:"अघिल्लो",next:"अर्को",today:"आज",month:"महिना",week:"हप्ता",day:"दिन",list:"सूची"},weekText:"हप्ता",allDayText:"दिनभरि",moreLinkText:"थप लिंक",noEventsText:"देखाउनको लागि कुनै घटनाहरू छैनन्"},{code:"nl",week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandaag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",moreLinkText:"extra",noEventsText:"Geen evenementen om te laten zien"},{code:"nn",week:{dow:1,doy:4},buttonText:{prev:"Førre",next:"Neste",today:"I dag",month:"Månad",week:"Veke",day:"Dag",list:"Agenda"},weekText:"Veke",allDayText:"Heile dagen",moreLinkText:"til",noEventsText:"Ingen hendelser å vise"},{code:"pl",week:{dow:1,doy:4},buttonText:{prev:"Poprzedni",next:"Następny",today:"Dziś",month:"Miesiąc",week:"Tydzień",day:"Dzień",list:"Plan dnia"},weekText:"Tydz",allDayText:"Cały dzień",moreLinkText:"więcej",noEventsText:"Brak wydarzeń do wyświetlenia"},{code:"pt-br",buttonText:{prev:"Anterior",next:"Próximo",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Lista"},weekText:"Sm",allDayText:"dia inteiro",moreLinkText:function(e){return"mais +"+e},noEventsText:"Não há eventos para mostrar"},{code:"pt",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Seguinte",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Agenda"},weekText:"Sem",allDayText:"Todo o dia",moreLinkText:"mais",noEventsText:"Não há eventos para mostrar"},{code:"ro",week:{dow:1,doy:7},buttonText:{prev:"precedentă",next:"următoare",today:"Azi",month:"Lună",week:"Săptămână",day:"Zi",list:"Agendă"},weekText:"Săpt",allDayText:"Toată ziua",moreLinkText:function(e){return"+alte "+e},noEventsText:"Nu există evenimente de afișat"},{code:"ru",week:{dow:1,doy:4},buttonText:{prev:"Пред",next:"След",today:"Сегодня",month:"Месяц",week:"Неделя",day:"День",list:"Повестка дня"},weekText:"Нед",allDayText:"Весь день",moreLinkText:function(e){return"+ ещё "+e},noEventsText:"Нет событий для отображения"},{code:"sk",week:{dow:1,doy:4},buttonText:{prev:"Predchádzajúci",next:"Nasledujúci",today:"Dnes",month:"Mesiac",week:"Týždeň",day:"Deň",list:"Rozvrh"},weekText:"Ty",allDayText:"Celý deň",moreLinkText:function(e){return"+ďalšie: "+e},noEventsText:"Žiadne akcie na zobrazenie"},{code:"sl",week:{dow:1,doy:7},buttonText:{prev:"Prejšnji",next:"Naslednji",today:"Trenutni",month:"Mesec",week:"Teden",day:"Dan",list:"Dnevni red"},weekText:"Teden",allDayText:"Ves dan",moreLinkText:"več",noEventsText:"Ni dogodkov za prikaz"},{code:"sm",buttonText:{prev:"Talu ai",next:"Mulimuli atu",today:"Aso nei",month:"Masina",week:"Vaiaso",day:"Aso",list:"Faasologa"},weekText:"Vaiaso",allDayText:"Aso atoa",moreLinkText:"sili atu",noEventsText:"Leai ni mea na tutupu"},{code:"sq",week:{dow:1,doy:4},buttonText:{prev:"mbrapa",next:"Përpara",today:"sot",month:"Muaj",week:"Javë",day:"Ditë",list:"Listë"},weekText:"Ja",allDayText:"Gjithë ditën",moreLinkText:function(e){return"+më tepër "+e},noEventsText:"Nuk ka evente për të shfaqur"},{code:"sr-cyrl",week:{dow:1,doy:7},buttonText:{prev:"Претходна",next:"следећи",today:"Данас",month:"Месец",week:"Недеља",day:"Дан",list:"Планер"},weekText:"Сед",allDayText:"Цео дан",moreLinkText:function(e){return"+ још "+e},noEventsText:"Нема догађаја за приказ"},{code:"sr",week:{dow:1,doy:7},buttonText:{prev:"Prethodna",next:"Sledeći",today:"Danas",month:"Mеsеc",week:"Nеdеlja",day:"Dan",list:"Planеr"},weekText:"Sed",allDayText:"Cеo dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nеma događaja za prikaz"},{code:"sv",week:{dow:1,doy:4},buttonText:{prev:"Förra",next:"Nästa",today:"Idag",month:"Månad",week:"Vecka",day:"Dag",list:"Program"},weekText:"v.",allDayText:"Heldag",moreLinkText:"till",noEventsText:"Inga händelser att visa"},{code:"ta-in",week:{dow:1,doy:4},buttonText:{prev:"முந்தைய",next:"அடுத்தது",today:"இன்று",month:"மாதம்",week:"வாரம்",day:"நாள்",list:"தினசரி அட்டவணை"},weekText:"வாரம்",allDayText:"நாள் முழுவதும்",moreLinkText:function(e){return"+ மேலும் "+e},noEventsText:"காண்பிக்க நிகழ்வுகள் இல்லை"},{code:"th",week:{dow:1,doy:4},buttonText:{prev:"ก่อนหน้า",next:"ถัดไป",prevYear:"ปีก่อนหน้า",nextYear:"ปีถัดไป",year:"ปี",today:"วันนี้",month:"เดือน",week:"สัปดาห์",day:"วัน",list:"กำหนดการ"},weekText:"สัปดาห์",allDayText:"ตลอดวัน",moreLinkText:"เพิ่มเติม",noEventsText:"ไม่มีกิจกรรมที่จะแสดง"},{code:"tr",week:{dow:1,doy:7},buttonText:{prev:"geri",next:"ileri",today:"bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},weekText:"Hf",allDayText:"Tüm gün",moreLinkText:"daha fazla",noEventsText:"Gösterilecek etkinlik yok"},{code:"ug",buttonText:{month:"ئاي",week:"ھەپتە",day:"كۈن",list:"كۈنتەرتىپ"},allDayText:"پۈتۈن كۈن"},{code:"uk",week:{dow:1,doy:7},buttonText:{prev:"Попередній",next:"далі",today:"Сьогодні",month:"Місяць",week:"Тиждень",day:"День",list:"Порядок денний"},weekText:"Тиж",allDayText:"Увесь день",moreLinkText:function(e){return"+ще "+e+"..."},noEventsText:"Немає подій для відображення"},{code:"uz",buttonText:{month:"Oy",week:"Xafta",day:"Kun",list:"Kun tartibi"},allDayText:"Kun bo'yi",moreLinkText:function(e){return"+ yana "+e},noEventsText:"Ko'rsatish uchun voqealar yo'q"},{code:"vi",week:{dow:1,doy:4},buttonText:{prev:"Trước",next:"Tiếp",today:"Hôm nay",month:"Tháng",week:"Tuần",day:"Ngày",list:"Lịch biểu"},weekText:"Tu",allDayText:"Cả ngày",moreLinkText:function(e){return"+ thêm "+e},noEventsText:"Không có sự kiện để hiển thị"},{code:"zh-cn",week:{dow:1,doy:4},buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"周",day:"日",list:"日程"},weekText:"周",allDayText:"全天",moreLinkText:function(e){return"另外 "+e+" 个"},noEventsText:"没有事件显示"},{code:"zh-tw",buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"週",day:"天",list:"活動列表"},weekText:"周",allDayText:"整天",moreLinkText:"顯示更多",noEventsText:"没有任何活動"}];t.default=n})),th=Tt(eh),nh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.headerElRef=rr(),t}return Y(t,e),t.prototype.renderSimpleLayout=function(e,t){var n=this.props,i=this.context,a=[],o=Ru(i.options);return e&&a.push({type:"header",key:"header",isSticky:o,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),a.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),ar(Gc,{viewSpec:i.viewSpec},(function(e,t){return ar("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},ar(Iu,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:a}))}))},t.prototype.renderHScrollLayout=function(e,t,n,i){var a=this.context.pluginHooks.scrollGridImpl;if(!a)throw new Error("No ScrollGrid implementation");var o=this.props,r=this.context,s=!o.forPrint&&Ru(r.options),l=!o.forPrint&&function(e){var t=e.stickyFooterScrollbar;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}(r.options),c=[];return e&&c.push({type:"header",key:"header",isSticky:s,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),c.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),l&&c.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:$u}]}),ar(Gc,{viewSpec:r.viewSpec},(function(e,t){return ar("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},ar(a,{liquid:!o.isHeightAuto&&!o.forPrint,collapsibleWidth:o.forPrint,colGroups:[{cols:[{span:n,minWidth:i}]}],sections:c}))}))},t}(Oc);function ih(e,t){for(var n=[],i=0;i<t;i+=1)n[i]=[];for(var a=0,o=e;a<o.length;a++){var r=o[a];n[r.row].push(r)}return n}function ah(e,t){for(var n=[],i=0;i<t;i+=1)n[i]=[];for(var a=0,o=e;a<o.length;a++){var r=o[a];n[r.firstCol].push(r)}return n}function oh(e,t){var n=[];if(e){for(r=0;r<t;r+=1)n[r]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var i=0,a=e.segs;i<a.length;i++){var o=a[i];n[o.row].segs.push(o)}}else for(var r=0;r<t;r+=1)n[r]=null;return n}var rh=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context.options.navLinks?{"data-navlink":dc(e.date),tabIndex:0}:{};return ar(Nu,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:sh},(function(n,i){return(i||e.forceDayTop)&&ar("div",{className:"fc-daygrid-day-top",ref:n},ar("a",Q({className:"fc-daygrid-day-number"},t),i||ar(sr,null," ")))}))},t}(Ac);function sh(e){return e.dayNumberText}var lh=Is({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function ch(e){var t=e.eventRange.ui.display;return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var dh=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props;return ar(Mu,Q({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:lh,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},t}(Ac),uh=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options.eventTimeFormat||lh,i=Sl(e.seg,n,t,!0,e.defaultDisplayEventEnd);return ar(Ou,{seg:e.seg,timeText:i,defaultContent:hh,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(t,n,i,a){return ar("a",Q({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(n).join(" "),ref:t},(o=e.seg,(r=o.eventRange.def.url)?{href:r}:{})),a);var o,r}))},t}(Ac);function hh(e){return ar(sr,null,ar("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&ar("div",{className:"fc-event-time"},e.timeText),ar("div",{className:"fc-event-title"},e.event.title||ar(sr,null," ")))}var fh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.compileSegs=ms(ph),t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.compileSegs(e.singlePlacements),n=t.allSegs,i=t.invisibleSegs;return ar(qu,{dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:n,hiddenSegs:i,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:function(){var t=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return ar(sr,null,n.map((function(n){var i=n.eventRange.instance.instanceId;return ar("div",{className:"fc-daygrid-event-harness",key:i,style:{visibility:t[i]?"hidden":""}},ch(n)?ar(uh,Q({seg:n,isDragging:!1,isSelected:i===e.eventSelection,defaultDisplayEventEnd:!1},Tl(n,e.todayRange))):ar(dh,Q({seg:n,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:i===e.eventSelection,defaultDisplayEventEnd:!1},Tl(n,e.todayRange))))})))}},(function(e,t,n,i,a){return ar("a",{ref:e,className:["fc-daygrid-more-link"].concat(t).join(" "),onClick:a},i)}))},t}(Ac);function ph(e){for(var t=[],n=[],i=0,a=e;i<a.length;i++){var o=a[i];t.push(o.seg),o.isVisible||n.push(o.seg)}return{allSegs:t,invisibleSegs:n}}var vh=Is({week:"narrow"}),gh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=rr(),t.handleRootEl=function(e){Ic(t.rootElRef,e),Ic(t.props.elRef,e)},t}return Y(t,e),t.prototype.render=function(){var e=this,t=e.props,n=e.context,i=e.rootElRef,a=n.options,o=t.date,r=t.dateProfile,s=a.navLinks?{"data-navlink":dc(o,"week"),tabIndex:0}:{};return ar(Hu,{date:o,dateProfile:r,todayRange:t.todayRange,showDayNumber:t.showDayNumber,extraHookProps:t.extraHookProps,elRef:this.handleRootEl},(function(e,n,a,l){return ar("td",Q({ref:e,className:["fc-daygrid-day"].concat(n,t.extraClassNames||[]).join(" ")},a,t.extraDataAttrs),ar("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:t.innerElRef},t.showWeekNumber&&ar(Fu,{date:o,defaultFormat:vh},(function(e,t,n,i){return ar("a",Q({ref:e,className:["fc-daygrid-week-number"].concat(t).join(" ")},s),i)})),!l&&ar(rh,{date:o,dateProfile:r,showDayNumber:t.showDayNumber,forceDayTop:t.forceDayTop,todayRange:t.todayRange,extraHookProps:t.extraHookProps}),ar("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,ar("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},ar(fh,{allDayDate:o,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:i,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),ar("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}))},t}(Oc);function mh(e,t,n,i,a,o,r){var s=new bh;s.allowReslicing=!0,s.strictOrder=i,!0===t||!0===n?(s.maxCoord=o,s.hiddenConsumes=!0):"number"==typeof t?s.maxStackCnt=t:"number"==typeof n&&(s.maxStackCnt=n,s.hiddenConsumes=!0);for(var l=[],c=[],d=0;d<e.length;d+=1){var u=a[(S=e[d]).eventRange.instance.instanceId];null!=u?l.push({index:d,thickness:u,span:{start:S.firstCol,end:S.lastCol+1}}):c.push(S)}for(var h=s.addSegs(l),f=function(e,t,n){for(var i=function(e,t){for(var n=[],i=0;i<t;i+=1)n.push([]);for(var a=0,o=e;a<o.length;a++){var r=o[a];for(i=r.span.start;i<r.span.end;i+=1)n[i].push(r)}return n}(e,n.length),a=[],o=[],r=[],s=0;s<n.length;s+=1){for(var l=i[s],c=[],d=0,u=0,h=0,f=l;h<f.length;h++){var p=t[(y=f[h]).index];c.push({seg:yh(p,s,s+1,n),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:y.levelCoord-d}),d=y.levelCoord+y.thickness}var v=[];d=0,u=0;for(var g=0,m=l;g<m.length;g++){p=t[(y=m[g]).index];var y,b=y.span.end-y.span.start>1,_=y.span.start===s;u+=y.levelCoord-d,d=y.levelCoord+y.thickness,b?(u+=y.thickness,_&&v.push({seg:yh(p,y.span.start,y.span.end,n),isVisible:!0,isAbsolute:!0,absoluteTop:y.levelCoord,marginTop:0})):_&&(v.push({seg:yh(p,y.span.start,y.span.end,n),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:u}),u=0)}a.push(c),o.push(v),r.push(u)}return{singleColPlacements:a,multiColPlacements:o,leftoverMargins:r}}(s.toRects(),e,r),p=f.singleColPlacements,v=f.multiColPlacements,g=f.leftoverMargins,m=[],y=[],b=0,_=c;b<_.length;b++){v[(S=_[b]).firstCol].push({seg:S,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var k=S.firstCol;k<=S.lastCol;k+=1)p[k].push({seg:yh(S,k,k+1,r),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(k=0;k<r.length;k+=1)m.push(0);for(var w=0,x=h;w<x.length;w++){var E=x[w],S=e[E.index],T=E.span;v[T.start].push({seg:yh(S,T.start,T.end,r),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(k=T.start;k<T.end;k+=1)m[k]+=1,p[k].push({seg:yh(S,k,k+1,r),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(k=0;k<r.length;k+=1)y.push(g[k]);return{singleColPlacements:p,multiColPlacements:v,moreCnts:m,moreMarginTops:y}}function yh(e,t,n,i){if(e.firstCol===t&&e.lastCol===n-1)return e;var a=e.eventRange,o=a.range,r=ul(o,{start:i[t].date,end:jr(i[n-1].date,1)});return Q(Q({},e),{firstCol:t,lastCol:n-1,eventRange:{def:a.def,ui:Q(Q({},a.ui),{durationEditable:!1}),instance:a.instance,range:r},isStart:e.isStart&&r.start.valueOf()===o.start.valueOf(),isEnd:e.isEnd&&r.end.valueOf()===o.end.valueOf()})}var bh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hiddenConsumes=!1,t.forceHidden={},t}return Y(t,e),t.prototype.addSegs=function(t){for(var n=this,i=e.prototype.addSegs.call(this,t),a=this.entriesByLevel,o=function(e){return!n.forceHidden[Pd(e)]},r=0;r<a.length;r+=1)a[r]=a[r].filter(o);return i},t.prototype.handleInvalidInsertion=function(t,n,i){var a=this.entriesByLevel,o=this.forceHidden,r=t.touchingEntry,s=t.touchingLevel,l=t.touchingLateral;if(this.hiddenConsumes&&r){var c=Pd(r);if(!o[c])if(this.allowReslicing){var d=Q(Q({},r),{span:Hd(r.span,n.span)});o[Pd(d)]=!0,a[s][l]=d,this.splitEntry(r,n,i)}else o[c]=!0,i.push(r)}return e.prototype.handleInvalidInsertion.call(this,t,n,i)},t}(jd),_h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cellElRefs=new xu,t.frameElRefs=new xu,t.fgElRefs=new xu,t.segHarnessRefs=new xu,t.rootElRef=rr(),t.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},t}return Y(t,e),t.prototype.render=function(){var e=this,t=this,n=t.props,i=t.state,a=t.context.options,o=n.cells.length,r=ah(n.businessHourSegs,o),s=ah(n.bgEventSegs,o),l=ah(this.getHighlightSegs(),o),c=ah(this.getMirrorSegs(),o),d=mh(_l(n.fgEventSegs,a.eventOrder),n.dayMaxEvents,n.dayMaxEventRows,a.eventOrderStrict,i.eventInstanceHeights,i.maxContentHeight,n.cells),u=d.singleColPlacements,h=d.multiColPlacements,f=d.moreCnts,p=d.moreMarginTops,v=n.eventDrag&&n.eventDrag.affectedInstances||n.eventResize&&n.eventResize.affectedInstances||{};return ar("tr",{ref:this.rootElRef},n.renderIntro&&n.renderIntro(),n.cells.map((function(t,i){var a=e.renderFgSegs(i,n.forPrint?u[i]:h[i],n.todayRange,v),o=e.renderFgSegs(i,function(e,t){if(!e.length)return[];var n=function(e){for(var t={},n=0,i=e;n<i.length;n++)for(var a=0,o=i[n];a<o.length;a++){var r=o[a];t[r.seg.eventRange.instance.instanceId]=r.absoluteTop}return t}(t);return e.map((function(e){return{seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:n[e.eventRange.instance.instanceId],marginTop:0}}))}(c[i],h),n.todayRange,{},Boolean(n.eventDrag),Boolean(n.eventResize),!1);return ar(gh,{key:t.key,elRef:e.cellElRefs.createRef(t.key),innerElRef:e.frameElRefs.createRef(t.key),dateProfile:n.dateProfile,date:t.date,showDayNumber:n.showDayNumbers,showWeekNumber:n.showWeekNumbers&&0===i,forceDayTop:n.showWeekNumbers,todayRange:n.todayRange,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,extraHookProps:t.extraHookProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,moreCnt:f[i],moreMarginTop:p[i],singlePlacements:u[i],fgContentElRef:e.fgElRefs.createRef(t.key),fgContent:ar(sr,null,ar(sr,null,a),ar(sr,null,o)),bgContent:ar(sr,null,e.renderFillSegs(l[i],"highlight"),e.renderFillSegs(r[i],"non-business"),e.renderFillSegs(s[i],"bg-event"))})})))},t.prototype.componentDidMount=function(){this.updateSizing(!0)},t.prototype.componentDidUpdate=function(e,t){var n=this.props;this.updateSizing(!ns(e,n))},t.prototype.getHighlightSegs=function(){var e=this.props;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},t.prototype.getMirrorSegs=function(){var e=this.props;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},t.prototype.renderFgSegs=function(e,t,n,i,a,o,r){var s=this.context,l=this.props.eventSelection,c=this.state.framePositions,d=1===this.props.cells.length,u=a||o||r,h=[];if(c)for(var f=0,p=t;f<p.length;f++){var v=p[f],g=v.seg,m=g.eventRange.instance.instanceId,y=m+":"+e,b=v.isVisible&&!i[m],_=v.isAbsolute,k="",w="";_&&(s.isRtl?(w=0,k=c.lefts[g.lastCol]-c.lefts[g.firstCol]):(k=0,w=c.rights[g.firstCol]-c.rights[g.lastCol])),h.push(ar("div",{className:"fc-daygrid-event-harness"+(_?" fc-daygrid-event-harness-abs":""),key:y,ref:u?null:this.segHarnessRefs.createRef(y),style:{visibility:b?"":"hidden",marginTop:_?"":v.marginTop,top:_?v.absoluteTop:"",left:k,right:w}},ch(g)?ar(uh,Q({seg:g,isDragging:a,isSelected:m===l,defaultDisplayEventEnd:d},Tl(g,n))):ar(dh,Q({seg:g,isDragging:a,isResizing:o,isDateSelecting:r,isSelected:m===l,defaultDisplayEventEnd:d},Tl(g,n)))))}return h},t.prototype.renderFillSegs=function(e,t){var n,i=this.context.isRtl,a=this.props.todayRange,o=this.state.framePositions,r=[];if(o)for(var s=0,l=e;s<l.length;s++){var c=l[s],d=i?{right:0,left:o.lefts[c.lastCol]-o.lefts[c.firstCol]}:{left:0,right:o.rights[c.firstCol]-o.rights[c.lastCol]};r.push(ar("div",{key:(n=c.eventRange,n.instance?n.instance.instanceId:n.def.defId+":"+n.range.start.toISOString()),className:"fc-daygrid-bg-harness",style:d},"bg-event"===t?ar(Bu,Q({seg:c},Tl(c,a))):Lu(t)))}return ar.apply(void 0,Z([sr,{}],r))},t.prototype.updateSizing=function(e){var t=this.props,n=this.frameElRefs;if(!t.forPrint&&null!==t.clientWidth){if(e){var i=t.cells.map((function(e){return n.currentMap[e.key]}));if(i.length){var a=this.rootElRef.current;this.setState({framePositions:new _c(a,i,!0,!1)})}}var o=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.setState({eventInstanceHeights:this.queryEventInstanceHeights(),maxContentHeight:o?this.computeMaxContentHeight():null})}},t.prototype.queryEventInstanceHeights=function(){var e=this.segHarnessRefs.currentMap,t={};for(var n in e){var i=Math.round(e[n].getBoundingClientRect().height),a=n.split(":")[0];t[a]=Math.max(t[a]||0,i)}return t},t.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top},t.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap;return this.props.cells.map((function(t){return e[t.key]}))},t}(Oc);_h.addStateEquality({eventInstanceHeights:ns});var kh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitBusinessHourSegs=ms(ih),t.splitBgEventSegs=ms(ih),t.splitFgEventSegs=ms(ih),t.splitDateSelectionSegs=ms(ih),t.splitEventDrag=ms(oh),t.splitEventResize=ms(oh),t.rowRefs=new xu,t.handleRootEl=function(e){t.rootEl=e,e?t.context.registerInteractiveComponent(t,{el:e,isHitComboAllowed:t.props.isHitComboAllowed}):t.context.unregisterInteractiveComponent(t)},t}return Y(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.dateProfile,i=t.dayMaxEventRows,a=t.dayMaxEvents,o=t.expandRows,r=t.cells.length,s=this.splitBusinessHourSegs(t.businessHourSegs,r),l=this.splitBgEventSegs(t.bgEventSegs,r),c=this.splitFgEventSegs(t.fgEventSegs,r),d=this.splitDateSelectionSegs(t.dateSelectionSegs,r),u=this.splitEventDrag(t.eventDrag,r),h=this.splitEventResize(t.eventResize,r),f=!0===a||!0===i;return f&&!o&&(f=!1,i=null,a=null),ar("div",{className:["fc-daygrid-body",f?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",o?"":"fc-daygrid-body-natural"].join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},ar(ru,{unit:"day"},(function(f,p){return ar(sr,null,ar("table",{className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:o?t.clientHeight:""}},t.colGroupNode,ar("tbody",null,t.cells.map((function(o,f){return ar(_h,{ref:e.rowRefs.createRef(f),key:o.length?o[0].date.toISOString():f,showDayNumbers:r>1,showWeekNumbers:t.showWeekNumbers,todayRange:p,dateProfile:n,cells:o,renderIntro:t.renderRowIntro,businessHourSegs:s[f],eventSelection:t.eventSelection,bgEventSegs:l[f].filter(wh),fgEventSegs:c[f],dateSelectionSegs:d[f],eventDrag:u[f],eventResize:h[f],dayMaxEvents:a,dayMaxEventRows:i,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:t.forPrint})})))))})))},t.prototype.prepareHits=function(){this.rowPositions=new _c(this.rootEl,this.rowRefs.collect().map((function(e){return e.getCellEls()[0]})),!1,!0),this.colPositions=new _c(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},t.prototype.queryHit=function(e,t){var n=this.colPositions,i=this.rowPositions,a=n.leftToIndex(e),o=i.topToIndex(t);if(null!=o&&null!=a){var r=this.props.cells[o][a];return{dateProfile:this.props.dateProfile,dateSpan:Q({range:this.getCellRange(o,a),allDay:!0},r.extraDateSpan),dayEl:this.getCellEl(o,a),rect:{left:n.lefts[a],right:n.rights[a],top:i.tops[o],bottom:i.bottoms[o]},layer:0}}return null},t.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date;return{start:n,end:jr(n,1)}},t}(Oc);function wh(e){return e.eventRange.def.allDay}var xh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forceDayIfListItem=!0,t}return Y(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(hu),Eh=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicer=new xh,t.tableRef=rr(),t}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return ar(kh,Q({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},t}(Oc);function Sh(e,t){var n=new du(e.renderRange,t);return new uu(n,/year|month|week/.test(e.currentRangeUnit))}var Th=Mc({initialView:"dayGridMonth",views:{dayGrid:{component:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTableModel=ms(Sh),t.headerRef=rr(),t.tableRef=rr(),t}return Y(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,i=t.dateProfileGenerator,a=this.props,o=this.buildDayTableModel(a.dateProfile,i),r=n.dayHeaders&&ar(lu,{ref:this.headerRef,dateProfile:a.dateProfile,dates:o.headerDates,datesRepDistinctDays:1===o.rowCnt}),s=function(t){return ar(Eh,{ref:e.tableRef,dateProfile:a.dateProfile,dayTableModel:o,businessHours:a.businessHours,dateSelection:a.dateSelection,eventStore:a.eventStore,eventUiBases:a.eventUiBases,eventSelection:a.eventSelection,eventDrag:a.eventDrag,eventResize:a.eventResize,nextDayThreshold:n.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:n.dayMaxEvents,dayMaxEventRows:n.dayMaxEventRows,showWeekNumbers:n.weekNumbers,expandRows:!a.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:a.forPrint})};return n.dayMinWidth?this.renderHScrollLayout(r,s,o.colCnt,n.dayMinWidth):this.renderSimpleLayout(r,s)},t}(nh),dateProfileGeneratorClass:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.buildRenderRange=function(t,n,i){var a,o=this.props.dateEnv,r=e.prototype.buildRenderRange.call(this,t,n,i),s=r.start,l=r.end;(/^(year|month)$/.test(n)&&(s=o.startOfWeek(s),(a=o.startOfWeek(l)).valueOf()!==l.valueOf()&&(l=zr(a,1))),this.props.monthMode&&this.props.fixedWeekCount)&&(l=zr(l,6-Math.ceil(Pr(s,l)/7)));return{start:s,end:l}},t}(Xc)},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});Gd.touchMouseIgnoreWait=500;var Dh=0,Ch=0,Ah=!1,$h=function(){function e(e){var t=this;this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var n=t.createEventFromTouch(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n);var i=e.target;t.shouldIgnoreMove||i.addEventListener("touchmove",t.handleTouchMove),i.addEventListener("touchend",t.handleTouchEnd),i.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target;n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,Dh+=1,setTimeout((function(){Dh-=1}),Gd.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,i=window.pageYOffset-t.prevScrollY+t.prevPageY;t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:i,deltaX:n-t.origPageX,deltaY:i-t.origPageY})}},this.containerEl=e,this.emitter=new bc,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),1===(Ch+=1)&&window.addEventListener("touchmove",Rh,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),(Ch-=1)||window.removeEventListener("touchmove",Rh,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target;return!(!t||this.handleSelector&&!pr(n,this.handleSelector))&&(this.subjectEl=t,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){Ah=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?pr(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return Dh||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(Ah=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,i=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,i=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:i}},e.prototype.createEventFromTouch=function(e,t){var n,i,a=e.touches,o=0,r=0;return a&&a.length?(n=a[0].pageX,i=a[0].pageY):(n=e.pageX,i=e.pageY),t?(this.origPageX=n,this.origPageY=i):(o=n-this.origPageX,r=i-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:i,deltaX:o,deltaY:r}},e}();function Rh(e){Ah&&e.preventDefault()}var Ih=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,i=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(i,this.revertDuration):setTimeout(i,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,i=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",mr(n,{left:i.left,top:i.top}),function(e,t){var n=function(i){t(i),Er.forEach((function(t){e.removeEventListener(t,n)}))};Er.forEach((function(t){e.addEventListener(t,n)}))}(n,(function(){n.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(fr(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&mr(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-event-dragging"),mr(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),Oh=function(e){function t(t,n){var i=e.call(this)||this;return i.handleScroll=function(){i.scrollTop=i.scrollController.getScrollTop(),i.scrollLeft=i.scrollController.getScrollLeft(),i.handleScrollChange()},i.scrollController=t,i.doesListening=n,i.scrollTop=i.origScrollTop=t.getScrollTop(),i.scrollLeft=i.origScrollLeft=t.getScrollLeft(),i.scrollWidth=t.getScrollWidth(),i.scrollHeight=t.getScrollHeight(),i.clientWidth=t.getClientWidth(),i.clientHeight=t.getClientHeight(),i.clientRect=i.computeClientRect(),i.doesListening&&i.getEventTarget().addEventListener("scroll",i.handleScroll),i}return Y(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(kc),Mh=function(e){function t(t,n){return e.call(this,new wc(t),n)||this}return Y(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return gc(this.scrollController.el)},t}(Oh),zh=function(e){function t(t){return e.call(this,new xc,t)||this}return Y(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(Oh),jh="function"==typeof performance?performance.now:Date.now,Nh=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=jh();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t,n){this.isEnabled&&(this.scrollCaches=this.buildCaches(n),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,i=t-window.pageYOffset,a=null===this.pointerScreenY?0:i-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX;a<0?this.everMovedUp=!0:a>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=i,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(jh()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,i=this.edgeThreshold,a=i-e.distance,o=a*a/(i*i)*this.maxVelocity*t,r=1;switch(e.name){case"left":r=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*r);break;case"top":r=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*r)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,i=null,a=0,o=this.scrollCaches;a<o.length;a++){var r=o[a],s=r.clientRect,l=e-s.left,c=s.right-e,d=t-s.top,u=s.bottom-t;l>=0&&c>=0&&d>=0&&u>=0&&(d<=n&&this.everMovedUp&&r.canScrollUp()&&(!i||i.distance>d)&&(i={scrollCache:r,name:"top",distance:d}),u<=n&&this.everMovedDown&&r.canScrollDown()&&(!i||i.distance>u)&&(i={scrollCache:r,name:"bottom",distance:u}),l<=n&&this.everMovedLeft&&r.canScrollLeft()&&(!i||i.distance>l)&&(i={scrollCache:r,name:"left",distance:l}),c<=n&&this.everMovedRight&&r.canScrollRight()&&(!i||i.distance>c)&&(i={scrollCache:r,name:"right",distance:c}))}return i},e.prototype.buildCaches=function(e){return this.queryScrollEls(e).map((function(e){return e===window?new zh(!1):new Mh(e,!1)}))},e.prototype.queryScrollEls=function(e){for(var t=[],n=0,i=this.scrollQuery;n<i.length;n++){var a=i[n];"object"==typeof a?t.push(a):t.push.apply(t,Array.prototype.slice.call(_r(e).querySelectorAll(a)))}return t},e}(),Ph=function(e){function t(t,n){var i=e.call(this,t)||this;i.containerEl=t,i.delay=null,i.minDistance=0,i.touchScrollAllowed=!0,i.mirrorNeedsRevert=!1,i.isInteracting=!1,i.isDragging=!1,i.isDelayEnded=!1,i.isDistanceSurpassed=!1,i.delayTimeoutId=null,i.onPointerDown=function(e){var t;i.isDragging||(i.isInteracting=!0,i.isDelayEnded=!1,i.isDistanceSurpassed=!1,(t=document.body).classList.add("fc-unselectable"),t.addEventListener("selectstart",kr),function(e){e.addEventListener("contextmenu",kr)}(document.body),e.isTouch||e.origEvent.preventDefault(),i.emitter.trigger("pointerdown",e),i.isInteracting&&!i.pointer.shouldIgnoreMove&&(i.mirror.setIsVisible(!1),i.mirror.start(e.subjectEl,e.pageX,e.pageY),i.startDelay(e),i.minDistance||i.handleDistanceSurpassed(e)))},i.onPointerMove=function(e){if(i.isInteracting){if(i.emitter.trigger("pointermove",e),!i.isDistanceSurpassed){var t=i.minDistance,n=e.deltaX,a=e.deltaY;n*n+a*a>=t*t&&i.handleDistanceSurpassed(e)}i.isDragging&&("scroll"!==e.origEvent.type&&(i.mirror.handleMove(e.pageX,e.pageY),i.autoScroller.handleMove(e.pageX,e.pageY)),i.emitter.trigger("dragmove",e))}},i.onPointerUp=function(e){var t;i.isInteracting&&(i.isInteracting=!1,(t=document.body).classList.remove("fc-unselectable"),t.removeEventListener("selectstart",kr),function(e){e.removeEventListener("contextmenu",kr)}(document.body),i.emitter.trigger("pointerup",e),i.isDragging&&(i.autoScroller.stop(),i.tryStopDrag(e)),i.delayTimeoutId&&(clearTimeout(i.delayTimeoutId),i.delayTimeoutId=null))};var a=i.pointer=new $h(t);return a.emitter.on("pointerdown",i.onPointerDown),a.emitter.on("pointermove",i.onPointerMove),a.emitter.on("pointerup",i.onPointerUp),n&&(a.selector=n),i.mirror=new Ih,i.autoScroller=new Nh,i}return Y(t,e),t.prototype.destroy=function(){this.pointer.destroy(),this.onPointerUp({})},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY,this.containerEl),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(Wd),Hh=function(){function e(e){this.origRect=mc(e),this.scrollCaches=yc(e).map((function(e){return new Mh(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var i=n[t];e+=i.origScrollLeft-i.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var i=n[t];e+=i.origScrollTop-i.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,i,a={left:e,top:t},o=0,r=this.scrollCaches;o<r.length;o++){var s=r[o];if(n=s.getEventTarget(),i=void 0,"HTML"!==(i=n.tagName)&&"BODY"!==i&&!oc(a,s.clientRect))return!1}return!0},e}();var Lh=function(){function e(e,t){var n=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging;n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new bc}return e.prototype.processFirstCoord=function(e){var t,n,i,a={left:e.pageX,top:e.pageY},o=a,r=e.subjectEl;r instanceof HTMLElement&&(t=mc(r),n=o,i=t,o={left:Math.min(Math.max(n.left,i.left),i.right),top:Math.min(Math.max(n.top,i.top),i.bottom)});var s,l,c=this.initialHit=this.queryHitForOffset(o.left,o.top);if(c){if(this.useSubjectCenter&&t){var d=rc(t,c.rect);d&&(o=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}(d))}this.coordAdjust=(l=a,{left:(s=o).left-l.left,top:s.top-l.top})}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&Bh(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=Kr(this.droppableStore,(function(e){return e.component.prepareHits(),new Hh(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,i=this.offsetTrackers,a=null;for(var o in n){var r=n[o].component,s=i[o];if(s&&s.isWithinClipping(e,t)){var l=s.computeLeft(),c=s.computeTop(),d=e-l,u=t-c,h=s.origRect,f=h.right-h.left,p=h.bottom-h.top;if(d>=0&&d<f&&u>=0&&u<p){var v=r.queryHit(d,u,f,p);v&&fl(v.dateProfile.activeRange,v.dateSpan.range)&&(!a||v.layer>a.layer)&&(v.componentId=o,v.context=r.context,v.rect.left+=l,v.rect.right+=l,v.rect.top+=c,v.rect.bottom+=c,a=v)}}}return a},e}();function Bh(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&(n=e.dateSpan,i=t.dateSpan,a=n.range,o=i.range,(null===a.start?null:a.start.valueOf())===(null===o.start?null:o.start.valueOf())&&(null===a.end?null:a.end.valueOf())===(null===o.end?null:o.end.valueOf())&&n.allDay===i.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}(n,i));var n,i,a,o}function Uh(e,t){for(var n,i,a={},o=0,r=t.pluginHooks.datePointTransforms;o<r.length;o++){var s=r[o];Q(a,s(e,t))}return Q(a,(n=e,{date:(i=t.dateEnv).toDate(n.range.start),dateStr:i.formatIso(n.range.start,{omitTime:n.allDay}),allDay:n.allDay})),a}var Fh=function(e){function t(t){var n=e.call(this,t)||this;n.handlePointerDown=function(e){var t=n.dragging,i=e.origEvent.target;t.setIgnoreMove(!n.component.isValidDateDownEl(i))},n.handleDragEnd=function(e){var t=n.component;if(!n.dragging.pointer.wasTouchScroll){var i=n.hitDragging,a=i.initialHit,o=i.finalHit;if(a&&o&&Bh(a,o)){var r=t.context,s=Q(Q({},Uh(a.dateSpan,r)),{dayEl:a.dayEl,jsEvent:e.origEvent,view:r.viewApi||r.calendarApi.view});r.emitter.trigger("dateClick",s)}}},n.dragging=new Ph(t.el),n.dragging.autoScroller.isEnabled=!1;var i=n.hitDragging=new Lh(n.dragging,Fd(t));return i.emitter.on("pointerdown",n.handlePointerDown),i.emitter.on("dragend",n.handleDragEnd),n}return Y(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Ud),Vh=function(e){function t(t){var n=e.call(this,t)||this;n.dragSelection=null,n.handlePointerDown=function(e){var t=n,i=t.component,a=t.dragging,o=i.context.options.selectable&&i.isValidDateDownEl(e.origEvent.target);a.setIgnoreMove(!o),a.delay=e.isTouch?function(e){var t=e.context.options,n=t.selectLongPressDelay;null==n&&(n=t.longPressDelay);return n}(i):null},n.handleDragStart=function(e){n.component.context.calendarApi.unselect(e)},n.handleHitUpdate=function(e,t){var i=n.component.context,a=null,o=!1;if(e){var r=n.hitDragging.initialHit;e.componentId===r.componentId&&n.isHitComboAllowed&&!n.isHitComboAllowed(r,e)||(a=function(e,t,n){var i=e.dateSpan,a=t.dateSpan,o=[i.range.start,i.range.end,a.range.start,a.range.end];o.sort(Rr);for(var r={},s=0,l=n;s<l.length;s++){var c=(0,l[s])(e,t);if(!1===c)return null;c&&Q(r,c)}return r.range={start:o[0],end:o[3]},r.allDay=i.allDay,r}(r,e,i.pluginHooks.dateSelectionTransformers)),a&&function(e,t,n){return!!fl(t.validRange,e.range)&&vu({dateSelection:e},n)}(a,e.dateProfile,i)||(o=!0,a=null)}a?i.dispatch({type:"SELECT_DATES",selection:a}):t||i.dispatch({type:"UNSELECT_DATES"}),o?Dr():Cr(),t||(n.dragSelection=a)},n.handlePointerUp=function(e){n.dragSelection&&(Rl(n.dragSelection,e,n.component.context),n.dragSelection=null)};var i=t.component.context.options,a=n.dragging=new Ph(t.el);a.touchScrollAllowed=!1,a.minDistance=i.selectMinDistance||0,a.autoScroller.isEnabled=i.dragScroll;var o=n.hitDragging=new Lh(n.dragging,Fd(t));return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragstart",n.handleDragStart),o.emitter.on("hitupdate",n.handleHitUpdate),o.emitter.on("pointerup",n.handlePointerUp),n}return Y(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Ud);var Wh=function(e){function t(n){var i=e.call(this,n)||this;i.subjectEl=null,i.subjectSeg=null,i.isDragging=!1,i.eventRange=null,i.relevantEvents=null,i.receivingContext=null,i.validMutation=null,i.mutatedRelevantEvents=null,i.handlePointerDown=function(e){var t=e.origEvent.target,n=i,a=n.component,o=n.dragging,r=o.mirror,s=a.context.options,l=a.context;i.subjectEl=e.subjectEl;var c=i.subjectSeg=ml(e.subjectEl),d=(i.eventRange=c.eventRange).instance.instanceId;i.relevantEvents=Ws(l.getCurrentData().eventStore,d),o.minDistance=e.isTouch?0:s.eventDragMinDistance,o.delay=e.isTouch&&d!==a.props.eventSelection?function(e){var t=e.context.options,n=t.eventLongPressDelay;null==n&&(n=t.longPressDelay);return n}(a):null,s.fixedMirrorParent?r.parentNode=s.fixedMirrorParent:r.parentNode=pr(t,".fc"),r.revertDuration=s.dragRevertDuration;var u=a.isValidSegDownEl(t)&&!pr(t,".fc-event-resizer");o.setIgnoreMove(!u),i.isDragging=u&&e.subjectEl.classList.contains("fc-event-draggable")},i.handleDragStart=function(e){var t=i.component.context,n=i.eventRange,a=n.instance.instanceId;e.isTouch?a!==i.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:a}):t.dispatch({type:"UNSELECT_EVENT"}),i.isDragging&&(t.calendarApi.unselect(e),t.emitter.trigger("eventDragStart",{el:i.subjectEl,event:new Fl(t,n.def,n.instance),jsEvent:e.origEvent,view:t.viewApi}))},i.handleHitUpdate=function(e,t){if(i.isDragging){var n=i.relevantEvents,a=i.hitDragging.initialHit,o=i.component.context,r=null,s=null,l=null,c=!1,d={affectedEvents:n,mutatedEvents:{defs:{},instances:{}},isEvent:!0};if(e){var u=(r=e.context).options;o===r||u.editable&&u.droppable?(s=function(e,t,n){var i=e.dateSpan,a=t.dateSpan,o=i.range.start,r=a.range.start,s={};i.allDay!==a.allDay&&(s.allDay=a.allDay,s.hasEnd=t.context.options.allDayMaintainDuration,a.allDay&&(o=Lr(o)));var l=ll(o,r,e.context.dateEnv,e.componentId===t.componentId?e.largeUnit:null);l.milliseconds&&(s.allDay=!1);for(var c={datesDelta:l,standardProps:s},d=0,u=n;d<u.length;d++){(0,u[d])(c,e,t)}return c}(a,e,r.getCurrentData().pluginHooks.eventDragMutationMassagers))&&(l=Ml(n,r.getCurrentData().eventUiBases,s,r),d.mutatedEvents=l,pu(d,e.dateProfile,r)||(c=!0,s=null,l=null,d.mutatedEvents={defs:{},instances:{}})):r=null}i.displayDrag(r,d),c?Dr():Cr(),t||(o===r&&Bh(a,e)&&(s=null),i.dragging.setMirrorNeedsRevert(!s),i.dragging.setMirrorIsVisible(!e||!_r(i.subjectEl).querySelector(".fc-event-mirror")),i.receivingContext=r,i.validMutation=s,i.mutatedRelevantEvents=l)}},i.handlePointerUp=function(){i.isDragging||i.cleanup()},i.handleDragEnd=function(e){if(i.isDragging){var t=i.component.context,n=t.viewApi,a=i,o=a.receivingContext,r=a.validMutation,s=i.eventRange.def,l=i.eventRange.instance,c=new Fl(t,s,l),d=i.relevantEvents,u=i.mutatedRelevantEvents,h=i.hitDragging.finalHit;if(i.clearDrag(),t.emitter.trigger("eventDragStop",{el:i.subjectEl,event:c,jsEvent:e.origEvent,view:n}),r){if(o===t){var f=new Fl(t,u.defs[s.defId],l?u.instances[l.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:u});for(var p={oldEvent:c,event:f,relatedEvents:Wl(u,t,l),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}},v={},g=0,m=t.getCurrentData().pluginHooks.eventDropTransformers;g<m.length;g++){var y=m[g];Q(v,y(r,t))}t.emitter.trigger("eventDrop",Q(Q(Q({},p),v),{el:e.subjectEl,delta:r.datesDelta,jsEvent:e.origEvent,view:n})),t.emitter.trigger("eventChange",p)}else if(o){var b={event:c,relatedEvents:Wl(d,t,l),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}};t.emitter.trigger("eventLeave",Q(Q({},b),{draggedEl:e.subjectEl,view:n})),t.dispatch({type:"REMOVE_EVENTS",eventStore:d}),t.emitter.trigger("eventRemove",b);var _=u.defs[s.defId],k=u.instances[l.instanceId],w=new Fl(o,_,k);o.dispatch({type:"MERGE_EVENTS",eventStore:u});var x={event:w,relatedEvents:Wl(u,o,k),revert:function(){o.dispatch({type:"REMOVE_EVENTS",eventStore:u})}};o.emitter.trigger("eventAdd",x),e.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:l.instanceId}),o.emitter.trigger("drop",Q(Q({},Uh(h.dateSpan,o)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:h.context.viewApi})),o.emitter.trigger("eventReceive",Q(Q({},x),{draggedEl:e.subjectEl,view:h.context.viewApi}))}}else t.emitter.trigger("_noEventDrop")}i.cleanup()};var a=i.component.context.options,o=i.dragging=new Ph(n.el);o.pointer.selector=t.SELECTOR,o.touchScrollAllowed=!1,o.autoScroller.isEnabled=a.dragScroll;var r=i.hitDragging=new Lh(i.dragging,Vd);return r.useSubjectCenter=n.useEventCenter,r.emitter.on("pointerdown",i.handlePointerDown),r.emitter.on("dragstart",i.handleDragStart),r.emitter.on("hitupdate",i.handleHitUpdate),r.emitter.on("pointerup",i.handlePointerUp),r.emitter.on("dragend",i.handleDragEnd),i}return Y(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.component.context,i=this.receivingContext;i&&i!==e&&(i===n?i.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0}}):i.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context,t=this.receivingContext;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-event-draggable, .fc-event-resizable",t}(Ud);var Gh=function(e){function t(t){var n=e.call(this,t)||this;n.draggingSegEl=null,n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,i=ml(n.querySegEl(e)),a=n.eventRange=i.eventRange;n.dragging.minDistance=t.context.options.eventDragMinDistance,n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==a.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.context,i=n.eventRange;n.relevantEvents=Ws(t.getCurrentData().eventStore,n.eventRange.instance.instanceId);var a=n.querySegEl(e);n.draggingSegEl=a,n.draggingSeg=ml(a),t.calendarApi.unselect(),t.emitter.trigger("eventResizeStart",{el:a,event:new Fl(t,i.def,i.instance),jsEvent:e.origEvent,view:t.viewApi})},n.handleHitUpdate=function(e,t,i){var a=n.component.context,o=n.relevantEvents,r=n.hitDragging.initialHit,s=n.eventRange.instance,l=null,c=null,d=!1,u={affectedEvents:o,mutatedEvents:{defs:{},instances:{}},isEvent:!0};e&&(e.componentId===r.componentId&&n.isHitComboAllowed&&!n.isHitComboAllowed(r,e)||(l=function(e,t,n,i){var a=e.context.dateEnv,o=e.dateSpan.range.start,r=t.dateSpan.range.start,s=ll(o,r,a,e.largeUnit);if(n){if(a.add(i.start,s)<i.end)return{startDelta:s}}else if(a.add(i.end,s)>i.start)return{endDelta:s};return null}(r,e,i.subjectEl.classList.contains("fc-event-resizer-start"),s.range)));l&&(c=Ml(o,a.getCurrentData().eventUiBases,l,a),u.mutatedEvents=c,pu(u,e.dateProfile,a)||(d=!0,l=null,c=null,u.mutatedEvents=null)),c?a.dispatch({type:"SET_EVENT_RESIZE",state:u}):a.dispatch({type:"UNSET_EVENT_RESIZE"}),d?Dr():Cr(),t||(l&&Bh(r,e)&&(l=null),n.validMutation=l,n.mutatedRelevantEvents=c)},n.handleDragEnd=function(e){var t=n.component.context,i=n.eventRange.def,a=n.eventRange.instance,o=new Fl(t,i,a),r=n.relevantEvents,s=n.mutatedRelevantEvents;if(t.emitter.trigger("eventResizeStop",{el:n.draggingSegEl,event:o,jsEvent:e.origEvent,view:t.viewApi}),n.validMutation){var l=new Fl(t,s.defs[i.defId],a?s.instances[a.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:s});var c={oldEvent:o,event:l,relatedEvents:Wl(s,t,a),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:r})}};t.emitter.trigger("eventResize",Q(Q({},c),{el:n.draggingSegEl,startDelta:n.validMutation.startDelta||cs(0),endDelta:n.validMutation.endDelta||cs(0),jsEvent:e.origEvent,view:t.viewApi})),t.emitter.trigger("eventChange",c)}else t.emitter.trigger("_noEventResize");n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null};var i=t.component,a=n.dragging=new Ph(t.el);a.pointer.selector=".fc-event-resizer",a.touchScrollAllowed=!1,a.autoScroller.isEnabled=i.context.options.dragScroll;var o=n.hitDragging=new Lh(n.dragging,Fd(t));return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragstart",n.handleDragStart),o.emitter.on("hitupdate",n.handleHitUpdate),o.emitter.on("dragend",n.handleDragEnd),n}return Y(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySegEl=function(e){return pr(e.subjectEl,".fc-event")},t}(Ud);var qh=function(){function e(e){var t=this;this.context=e,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=function(e){var n=t.context.options.unselectCancel,i=br(e.origEvent);t.matchesCancel=!!pr(i,n),t.matchesEvent=!!pr(i,Wh.SELECTOR)},this.onDocumentPointerUp=function(e){var n=t.context,i=t.documentPointer,a=n.getCurrentData();if(!i.wasTouchScroll){if(a.dateSelection&&!t.isRecentPointerDateSelect){var o=n.options.unselectAuto;!o||o&&t.matchesCancel||n.calendarApi.unselect(e)}a.eventSelection&&!t.matchesEvent&&n.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1};var n=this.documentPointer=new $h(document);n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerdown",this.onDocumentPointerDown),n.emitter.on("pointerup",this.onDocumentPointerUp),e.emitter.on("select",this.onSelect)}return e.prototype.destroy=function(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()},e}(),Yh={fixedMirrorParent:Us},Qh={dateClick:Us,eventDragStart:Us,eventDragStop:Us,eventDrop:Us,eventResizeStart:Us,eventResizeStop:Us,eventResize:Us,drop:Us,eventReceive:Us,eventLeave:Us};Gd.dataAttrPrefix="",function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var i=n.pointer=new $h(t);return i.emitter.on("pointerdown",n.handlePointerDown),i.emitter.on("pointermove",n.handlePointerMove),i.emitter.on("pointerup",n.handlePointerUp),n}Y(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}}}(Wd);var Zh=Mc({componentInteractions:[Fh,Vh,Wh,Gh],calendarInteractions:[qh],elementDraggingImpl:Ph,optionRefiners:Yh,listenerRefiners:Qh}),Xh=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=e.dayDate,n=e.todayRange,i=this.context,a=i.theme,o=i.dateEnv,r=i.options,s=i.viewApi,l=lc(t,n),c=r.listDayFormat?o.format(t,r.listDayFormat):"",d=r.listDaySideFormat?o.format(t,r.listDaySideFormat):"",u=r.navLinks?dc(t):null,h=Q({date:o.toDate(t),view:s,text:c,sideText:d,navLinkData:u},l),f=["fc-list-day"].concat(cc(l,a));return ar(Pc,{hookProps:h,classNames:r.dayHeaderClassNames,content:r.dayHeaderContent,defaultContent:Jh,didMount:r.dayHeaderDidMount,willUnmount:r.dayHeaderWillUnmount},(function(e,n,i,o){return ar("tr",{ref:e,className:f.concat(n).join(" "),"data-date":ps(t)},ar("th",{colSpan:3},ar("div",{className:"fc-list-day-cushion "+a.getClass("tableCellShaded"),ref:i},o)))}))},t}(Ac);function Jh(e){var t=e.navLinkData?{"data-navlink":e.navLinkData,tabIndex:0}:{};return ar(sr,null,e.text&&ar("a",Q({className:"fc-list-day-text"},t),e.text),e.sideText&&ar("a",Q({className:"fc-list-day-side-text"},t),e.sideText))}var Kh=Is({hour:"numeric",minute:"2-digit",meridiem:"short"}),ef=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,i=t.options.eventTimeFormat||Kh;return ar(Ou,{seg:n,timeText:"",disableDragging:!0,disableResizing:!0,defaultContent:tf,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday,isSelected:e.isSelected,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting},(function(e,a,o,r,s){return ar("tr",{className:["fc-list-event",s.event.url?"fc-event-forced-url":""].concat(a).join(" "),ref:e},function(e,t,n){var i=n.options;if(!1!==i.displayEventTime){var a=e.eventRange.def,o=e.eventRange.instance,r=!1,s=void 0;if(a.allDay?r=!0:(c=e.eventRange.range,Pr((d=sl(c)).start,d.end)>1?e.isStart?s=Sl(e,t,n,null,null,o.range.start,e.end):e.isEnd?s=Sl(e,t,n,null,null,e.start,o.range.end):r=!0:s=Sl(e,t,n)),r){var l={text:n.options.allDayText,view:n.viewApi};return ar(Pc,{hookProps:l,classNames:i.allDayClassNames,content:i.allDayContent,defaultContent:nf,didMount:i.allDayDidMount,willUnmount:i.allDayWillUnmount},(function(e,t,n,i){return ar("td",{className:["fc-list-event-time"].concat(t).join(" "),ref:e},i)}))}return ar("td",{className:"fc-list-event-time"},s)}var c,d;return null}(n,i,t),ar("td",{className:"fc-list-event-graphic"},ar("span",{className:"fc-list-event-dot",style:{borderColor:s.borderColor||s.backgroundColor}})),ar("td",{className:"fc-list-event-title",ref:o},r))}))},t}(Ac);function tf(e){var t=e.event,n=t.url;return ar("a",Q({},n?{href:n}:{}),t.title)}function nf(e){return e.text}var af=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.computeDateVars=ms(rf),t.eventStoreToSegs=ms(t._eventStoreToSegs),t.setRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return Y(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,i=["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],a=this.computeDateVars(t.dateProfile),o=a.dayDates,r=a.dayRanges,s=this.eventStoreToSegs(t.eventStore,t.eventUiBases,r);return ar(Gc,{viewSpec:n.viewSpec,elRef:this.setRootEl},(function(n,a){return ar("div",{ref:n,className:i.concat(a).join(" ")},ar(wu,{liquid:!t.isHeightAuto,overflowX:t.isHeightAuto?"visible":"hidden",overflowY:t.isHeightAuto?"visible":"auto"},s.length>0?e.renderSegList(s,o):e.renderEmptyMessage()))}))},t.prototype.renderEmptyMessage=function(){var e=this.context,t=e.options,n=e.viewApi,i={text:t.noEventsText,view:n};return ar(Pc,{hookProps:i,classNames:t.noEventsClassNames,content:t.noEventsContent,defaultContent:of,didMount:t.noEventsDidMount,willUnmount:t.noEventsWillUnmount},(function(e,t,n,i){return ar("div",{className:["fc-list-empty"].concat(t).join(" "),ref:e},ar("div",{className:"fc-list-empty-cushion",ref:n},i))}))},t.prototype.renderSegList=function(e,t){var n=this.context,i=n.theme,a=n.options,o=function(e){var t,n,i=[];for(t=0;t<e.length;t+=1)(i[(n=e[t]).dayIndex]||(i[n.dayIndex]=[])).push(n);return i}(e);return ar(ru,{unit:"day"},(function(e,n){for(var r=[],s=0;s<o.length;s+=1){var l=o[s];if(l){var c=t[s].toISOString();r.push(ar(Xh,{key:c,dayDate:t[s],todayRange:n}));for(var d=0,u=l=_l(l,a.eventOrder);d<u.length;d++){var h=u[d];r.push(ar(ef,Q({key:c+":"+h.eventRange.instance.instanceId,seg:h,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1},Tl(h,n,e))))}}}return ar("table",{className:"fc-list-table "+i.getClass("table")},ar("tbody",null,r))}))},t.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(vl(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)},t.prototype.eventRangesToSegs=function(e,t){for(var n=[],i=0,a=e;i<a.length;i++){var o=a[i];n.push.apply(n,this.eventRangeToSegs(o,t))}return n},t.prototype.eventRangeToSegs=function(e,t){var n,i,a,o=this.context.dateEnv,r=this.context.options.nextDayThreshold,s=e.range,l=e.def.allDay,c=[];for(n=0;n<t.length;n+=1)if((i=ul(s,t[n]))&&(a={component:this,eventRange:e,start:i.start,end:i.end,isStart:e.isStart&&i.start.valueOf()===s.start.valueOf(),isEnd:e.isEnd&&i.end.valueOf()===s.end.valueOf(),dayIndex:n},c.push(a),!a.isEnd&&!l&&n+1<t.length&&s.end<o.add(t[n+1].start,r))){a.end=s.end,a.isEnd=!0;break}return c},t}(Oc);function of(e){return e.text}function rf(e){for(var t=Lr(e.renderRange.start),n=e.renderRange.end,i=[],a=[];t<n;)i.push(t),a.push({start:t,end:jr(t,1)}),t=jr(t,1);return{dayDates:i,dayRanges:a}}function sf(e){return!1===e?null:Is(e)}var lf=Mc({optionRefiners:{listDayFormat:sf,listDaySideFormat:sf,noEventsClassNames:Us,noEventsContent:Us,noEventsDidMount:Us,noEventsWillUnmount:Us},views:{list:{component:af,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}});h([x("ha-button-toggle-group")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"buttons",value:void 0},{kind:"field",decorators:[p()],key:"active",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"fullWidth",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"dense",value:()=>!1},{kind:"field",decorators:[Yt("mwc-button")],key:"_buttons",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <div>
        ${this.buttons.map((e=>e.iconPath?g`<ha-icon-button
                .label=${e.label}
                .path=${e.iconPath}
                .value=${e.value}
                ?active=${this.active===e.value}
                @click=${this._handleClick}
              ></ha-icon-button>`:g`<mwc-button
                style=${N({width:this.fullWidth?100/this.buttons.length+"%":"initial"})}
                outlined
                .dense=${this.dense}
                .value=${e.value}
                ?active=${this.active===e.value}
                @click=${this._handleClick}
                >${e.label}</mwc-button
              >`))}
      </div>
    `}},{kind:"method",key:"updated",value:function(){var e;null===(e=this._buttons)||void 0===e||e.forEach((async e=>{await e.updateComplete,e.shadowRoot.querySelector("button").style.margin="0"}))}},{kind:"method",key:"_handleClick",value:function(e){this.active=e.currentTarget.value,d(this,"value-changed",{value:this.active})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      div {
        display: flex;
        --mdc-icon-button-size: var(--button-toggle-size, 36px);
        --mdc-icon-size: var(--button-toggle-icon-size, 20px);
      }
      mwc-button {
        --mdc-shape-small: 0;
        --mdc-button-outline-width: 1px 0 1px 1px;
      }
      ha-icon-button {
        border: 1px solid var(--primary-color);
        border-right-width: 0px;
      }
      ha-icon-button,
      mwc-button {
        position: relative;
        cursor: pointer;
      }
      ha-icon-button::before,
      mwc-button::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: currentColor;
        opacity: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear, background-color 15ms linear;
      }
      ha-icon-button[active]::before,
      mwc-button[active]::before {
        opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
      }
      ha-icon-button:first-child,
      mwc-button:first-child {
        --mdc-shape-small: 4px 0 0 4px;
        border-radius: 4px 0 0 4px;
      }
      ha-icon-button:last-child,
      mwc-button:last-child {
        border-radius: 0 4px 4px 0;
        border-right-width: 1px;
        --mdc-shape-small: 0 4px 4px 0;
        --mdc-button-outline-width: 1px;
      }
      ha-icon-button:only-child,
      mwc-button:only-child {
        --mdc-shape-small: 4px;
        border-right-width: 1px;
      }
    `}}]}}),f);const cf={headerToolbar:!1,plugins:[Th,lf,Zh],initialView:"dayGridMonth",dayMaxEventRows:!0,height:"parent",eventDisplay:"list-item",locales:th,views:{list:{visibleRange:e=>{const t=new Date(e.valueOf()),n=new Date(e.valueOf());return n.setDate(n.getDate()+7),{start:t,end:n}}}}},df=[{label:"Month View",value:"dayGridMonth",iconPath:ee},{label:"Week View",value:"dayGridWeek",iconPath:te},{label:"Day View",value:"dayGridDay",iconPath:ne},{label:"List View",value:"list",iconPath:ie}];let uf=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[p({attribute:!1})],key:"events",value:()=>[]},{kind:"field",decorators:[p({attribute:!1})],key:"views",value:()=>["dayGridMonth","dayGridWeek","dayGridDay"]},{kind:"field",decorators:[p()],key:"initialView",value:()=>"dayGridMonth"},{kind:"field",key:"calendar",value:void 0},{kind:"field",decorators:[v()],key:"_activeView",value(){return this.initialView}},{kind:"method",key:"updateSize",value:function(){var e;null===(e=this.calendar)||void 0===e||e.updateSize()}},{kind:"method",key:"render",value:function(){const e=this._viewToggleButtons(this.views);return g`
      ${this.calendar?g`
            <div class="header">
              ${this.narrow?g`
                    <div class="controls">
                      <h1>${this.calendar.view.title}</h1>
                      <div>
                        <ha-icon-button
                          .label=${this.hass.localize("ui.common.previous")}
                          .path=${X}
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          .label=${this.hass.localize("ui.common.next")}
                          .path=${J}
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.components.calendar.today")}</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${e}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `:g`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.components.calendar.today")}</mwc-button
                      >
                      <ha-icon-button
                        .label=${this.hass.localize("ui.common.previous")}
                        .path=${X}
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        .label=${this.hass.localize("ui.common.next")}
                        .path=${J}
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>${this.calendar.view.title}</h1>
                    <ha-button-toggle-group
                      .buttons=${e}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `}
            </div>
          `:""}
      <div id="calendar"></div>
    `}},{kind:"method",key:"willUpdate",value:function(e){if(b(_(n.prototype),"willUpdate",this).call(this,e),!this.calendar)return;e.has("events")&&(this.calendar.removeAllEventSources(),this.calendar.addEventSource(this.events)),e.has("views")&&!this.views.includes(this._activeView)&&(this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0],this.calendar.changeView(this._activeView),this._fireViewChanged());const t=e.get("hass");t&&t.language!==this.hass.language&&this.calendar.setOption("locale",this.hass.language)}},{kind:"method",key:"firstUpdated",value:function(){const e={...cf,locale:this.hass.language,initialView:this.initialView,eventTimeFormat:{hour:Pe(this.hass.locale)?"numeric":"2-digit",minute:Pe(this.hass.locale)?"numeric":"2-digit",hour12:Pe(this.hass.locale)}};e.dateClick=e=>this._handleDateClick(e),e.eventClick=e=>this._handleEventClick(e),this.calendar=new Ku(this.shadowRoot.getElementById("calendar"),e),this.calendar.render(),this._fireViewChanged()}},{kind:"method",key:"_handleEventClick",value:function(e){"dayGridMonth"===e.view.type&&(this._activeView="dayGridDay",this.calendar.changeView("dayGridDay"),this.calendar.gotoDate(e.event.startStr))}},{kind:"method",key:"_handleDateClick",value:function(e){"dayGridMonth"===e.view.type&&(this._activeView="dayGridDay",this.calendar.changeView("dayGridDay"),this.calendar.gotoDate(e.dateStr))}},{kind:"method",key:"_handleNext",value:function(){this.calendar.next(),this._fireViewChanged()}},{kind:"method",key:"_handlePrev",value:function(){this.calendar.prev(),this._fireViewChanged()}},{kind:"method",key:"_handleToday",value:function(){this.calendar.today(),this._fireViewChanged()}},{kind:"method",key:"_handleView",value:function(e){this._activeView=e.detail.value,this.calendar.changeView(this._activeView),this._fireViewChanged()}},{kind:"method",key:"_fireViewChanged",value:function(){d(this,"view-changed",{start:this.calendar.view.activeStart,end:this.calendar.view.activeEnd,view:this.calendar.view.type})}},{kind:"field",key:"_viewToggleButtons",value:()=>u((e=>df.filter((t=>e.includes(t.value)))))},{kind:"get",static:!0,key:"styles",value:function(){return[E,k`
        ${K('\n/* classes attached to <body> */\n/* TODO: make fc-event selector work when calender in shadow DOM */\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events\' custom cursors */\n  cursor: not-allowed;\n}\n\n/* TODO: not attached to body. attached to specific els. move */\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n/* for FF, which doesn\'t expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: \'fcicons\';\n  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'fcicons\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: "\\e900";\n}\n\n.fc-icon-chevron-right:before {\n  content: "\\e901";\n}\n\n.fc-icon-chevrons-left:before {\n  content: "\\e902";\n}\n\n.fc-icon-chevrons-right:before {\n  content: "\\e903";\n}\n\n.fc-icon-minus-square:before {\n  content: "\\e904";\n}\n\n.fc-icon-plus-square:before {\n  content: "\\e905";\n}\n\n.fc-icon-x:before {\n  content: "\\e906";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it\'s NOT activated, the fc-button classes won\'t even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* "primary" coloring */\n\n}\n.fc .fc-button-primary {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don\'t make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller\'s right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don\'t normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn\'t set on the table, can\'t do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: sticky;\n    z-index: 3; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn\'t work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc\'s flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: \'\';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before {\n    content: "";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after {\n    content: "";\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there\'s a border on all sides. overcome it. */\n    /* sometimes there\'s NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc .fc-popover {\n    position: absolute;\n    z-index: 9999;\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n')}
        ${K('\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: "";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: "";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index\'s because <tr>s can\'t do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n.fc .fc-daygrid-day-bottom:before {\n  content: "";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle ("block") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n')}
        ${K('\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: "";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n')}

        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }

        #calendar {
          flex-grow: 1;
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          min-height: 400px;
          --fc-neutral-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-list-event-hover-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
          --fc-page-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
        }

        a {
          color: inherit !important;
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit;
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
          padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--paper-font-common-base_-_font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow])
          .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow])
          .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow])
          .fc
          .fc-dayGridMonth-view
          .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }

        .fc-scroller::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }

        .fc-scroller::-webkit-scrollbar-thumb {
          -webkit-border-radius: 4px;
          border-radius: 4px;
          background: var(--scrollbar-thumb-color);
        }

        .fc-scroller {
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
      `]}}]}}),f);window.customElements.define("ha-full-calendar",uf);let hf=h([x("hui-calendar-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.27f17569.js"),document.createElement("hui-calendar-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{entities:Sa(e,2,t,n,["calendar"])}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"_events",value:()=>[]},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",decorators:[v()],key:"_calendars",value:()=>[]},{kind:"field",decorators:[v()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[v()],key:"_veryNarrow",value:()=>!1},{kind:"field",decorators:[z("ha-full-calendar",!0)],key:"_calendar",value:void 0},{kind:"field",key:"_startDate",value:void 0},{kind:"field",key:"_endDate",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function(e){var t,n;if(null===(t=e.entities)||void 0===t||!t.length)throw new Error("Entities must be specified");if(!Array.isArray(e.entities))throw new Error("Entities need to be an array");this._calendars=e.entities.map(((e,t)=>({entity_id:e,backgroundColor:pi(t)}))),(null===(n=this._config)||void 0===n?void 0:n.entities)!==e.entities&&this._fetchCalendarEvents(),this._config={initial_view:"dayGridMonth",...e}}},{kind:"method",key:"getCardSize",value:function(){var e;return null!==(e=this._config)&&void 0!==e&&e.header?1:11}},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass||!this._calendars.length)return g``;const e=this._veryNarrow?["list"]:["list","dayGridMonth","dayGridDay"];return g`
      <ha-card>
        <div class="header">${this._config.title}</div>
        <ha-full-calendar
          .narrow=${this._narrow}
          .events=${this._events}
          .hass=${this.hass}
          .views=${e}
          .initialView=${this._config.initial_view}
          @view-changed=${this._handleViewChanged}
        ></ha-full-calendar>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");(!t||!i||e.has("hass")&&t.themes!==this.hass.themes||e.has("_config")&&i.theme!==this._config.theme)&&G(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleViewChanged",value:function(e){this._startDate=e.detail.start,this._endDate=e.detail.end,this._fetchCalendarEvents()}},{kind:"method",key:"_fetchCalendarEvents",value:async function(){this._startDate&&this._endDate&&(this._events=await(async(e,t,n,i)=>{const a=encodeURI(`?start=${t.toISOString()}&end=${n.toISOString()}`),o=[],r=[];return i.forEach((t=>{r.push(e.callApi("GET",`calendars/${t.entity_id}${a}`))})),(await Promise.all(r)).forEach(((e,t)=>{const n=i[t];e.forEach((e=>{const t=Ca(e.start);if(!t)return;const i={start:t,end:Ca(e.end),title:e.summary,summary:e.summary,backgroundColor:n.backgroundColor,borderColor:n.backgroundColor,calendar:n.entity_id};o.push(i)}))})),o})(this.hass,this._startDate,this._endDate,this._calendars))}},{kind:"method",key:"_measureCard",value:function(){var e;const t=this.shadowRoot.querySelector("ha-card");t&&(this._narrow=t.offsetWidth<870,this._veryNarrow=t.offsetWidth<350,null===(e=this._calendar)||void 0===e||e.updateSize())}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await Dt(),this._resizeObserver=new ResizeObserver(qt((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-card {
        position: relative;
        padding: 0 8px 8px;
        box-sizing: border-box;
        height: 100%;
      }

      .header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-size: var(--ha-card-header-font-size, 24px);
        line-height: 1.2;
        padding-top: 16px;
        padding-left: 8px;
      }
    `}}]}}),f);var ff=Object.freeze({__proto__:null,HuiCalendarCard:hf});const pf=e=>"function"==typeof e.getCardSize?e.getCardSize():customElements.get(e.localName)?1:customElements.whenDefined(e.localName).then((()=>pf(e))),vf=(e,t=!0)=>{if(!e||!Array.isArray(e))throw new Error("Entities need to be an array");return e.map(((e,n)=>{if("object"==typeof e&&!Array.isArray(e)&&e.type)return e;let i;if("string"==typeof e)i={entity:e};else{if("object"!=typeof e||Array.isArray(e))throw new Error(`Invalid entity specified at position ${n}.`);if(!("entity"in e))throw new Error(`Entity object at position ${n} is missing entity field.`);i=e}if(t&&!Ea(i.entity))throw new Error(`Invalid entity ID at position ${n}: ${i.entity}`);return i}))};h([x("hui-entities-toggle")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({type:Array})],key:"entities",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_toggleEntities",value:void 0},{kind:"method",key:"willUpdate",value:function(e){b(_(n.prototype),"willUpdate",this).call(this,e),e.has("entities")&&(this._toggleEntities=this.entities.filter((e=>e in this.hass.states&&wt.has(e.split(".",1)[0]))))}},{kind:"method",key:"render",value:function(){var e;return null!==(e=this._toggleEntities)&&void 0!==e&&e.length?g`
      <ha-switch
        aria-label=${this.hass.localize("ui.panel.lovelace.card.entities.toggle")}
        .checked=${this._toggleEntities.some((e=>{const t=this.hass.states[e];return t&&"on"===t.state}))}
        @change=${this._callService}
      ></ha-switch>
    `:g``}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        width: 40px;
        display: block;
      }
      ha-switch {
        padding: 13px 4px;
        margin: -4px -1px;
      }
    `}},{kind:"method",key:"_callService",value:function(e){Ke("light");const t=e.target.checked;((e,t,n=!0)=>{const i={};t.forEach((t=>{if(et.includes(e.states[t].state)===n){const e=Ge(t),n=["cover","lock"].includes(e)?e:"homeassistant";n in i||(i[n]=[]),i[n].push(t)}})),Object.keys(i).forEach((t=>{let a;switch(t){case"lock":a=n?"unlock":"lock";break;case"cover":a=n?"open_cover":"close_cover";break;default:a=n?"turn_on":"turn_off"}const o=i[t];e.callService(t,a,{entity_id:o})}))})(this.hass,this._toggleEntities,t)}}]}}),f);const gf={picture:()=>import("./c.f31ae517.js"),buttons:()=>import("./c.bdcc3e88.js"),graph:()=>import("./c.247e812f.js")},mf=e=>_a("header-footer",e,void 0,gf,void 0,void 0),yf=e=>wa(e,"header-footer",void 0,gf);function bf(e,t){if(t.has("_config"))return!0;const n=t.get("hass");return!n||(n.connected!==e.hass.connected||n.themes!==e.hass.themes||n.locale!==e.hass.locale||n.localize!==e.hass.localize||n.config.state!==e.hass.config.state)}function _f(e,t){if(bf(e,t))return!0;return t.get("hass").states[e._config.entity]!==e.hass.states[e._config.entity]}function kf(e,t){if(bf(e,t))return!0;const n=t.get("hass");return vf(e._config.entities,!1).some((t=>"entity"in t&&n.states[t.entity]!==e.hass.states[t.entity]))}const wf=(e,t,n)=>(void 0!==n&&(n=!!n),e.hasAttribute(t)?!!n||(e.removeAttribute(t),!1):!1!==n&&(e.setAttribute(t,""),!0));let xf=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"config",value:void 0},{kind:"field",decorators:[p()],key:"secondaryText",value:void 0},{kind:"field",decorators:[p({type:Boolean})],key:"hideName",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],static:!0,key:"cssSize",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"catchInteraction",value:void 0},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this.config)return g``;const n=this.config.entity?this.hass.states[this.config.entity]:void 0;if(!n)return g`
        <hui-warning>
          ${Ta(this.hass,this.config.entity)}
        </hui-warning>
      `;const i=Ge(this.config.entity),a=!(this.config.tap_action&&"none"===this.config.tap_action.action),o=this.secondaryText||this.config.secondary_info,r=null!==(e=this.config.name)&&void 0!==e?e:Je(n);return g`
      <state-badge
        class=${C({pointer:a})}
        .hass=${this.hass}
        .stateObj=${n}
        .overrideIcon=${this.config.icon}
        .overrideImage=${this.config.image}
        .stateColor=${this.config.state_color}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this.config.hold_action),hasDoubleClick:ha(this.config.double_tap_action)})}
        tabindex=${V(a?"0":void 0)}
      ></state-badge>
      ${this.hideName?g``:g` <div
            class="info  ${C({pointer:a,"text-contenttt":!o})}"
            @action=${this._handleAction}
            .actionHandler=${ca({hasHold:ha(this.config.hold_action),hasDoubleClick:ha(this.config.double_tap_action)})}
            .title=${r}
          >
            ${this.config.name||Je(n)}
            ${o?g`
                  <div class="secondary">
                    ${this.secondaryText||("entity-id"===this.config.secondary_info?n.entity_id:"last-changed"===this.config.secondary_info?g`
                          <ha-relative-time
                            .hass=${this.hass}
                            .datetime=${n.last_changed}
                            capitalize
                          ></ha-relative-time>
                        `:"last-updated"===this.config.secondary_info?g`
                          <ha-relative-time
                            .hass=${this.hass}
                            .datetime=${n.last_updated}
                            capitalize
                          ></ha-relative-time>
                        `:"last-triggered"===this.config.secondary_info?n.attributes.last_triggered?g`
                            <ha-relative-time
                              .hass=${this.hass}
                              .datetime=${n.attributes.last_triggered}
                              capitalize
                            ></ha-relative-time>
                          `:this.hass.localize("ui.panel.lovelace.cards.entities.never_triggered"):"position"===this.config.secondary_info&&void 0!==n.attributes.current_position?`${this.hass.localize("ui.card.cover.position")}: ${n.attributes.current_position}`:"tilt-position"===this.config.secondary_info&&void 0!==n.attributes.current_tilt_position?`${this.hass.localize("ui.card.cover.tilt_position")}: ${n.attributes.current_tilt_position}`:"brightness"===this.config.secondary_info&&n.attributes.brightness?g`${Math.round(n.attributes.brightness/255*100)}
                        %`:"")}
                  </div>
                `:""}
          </div>`}
      ${this.config.hideInteract?g``:(null!==(t=this.catchInteraction)&&void 0!==t?t:!Ct.includes(i))?g` <div
              class="text-content2 ${C({pointer:a})}"
              @action=${this._handleAction}
              .actionHandler=${ca({hasHold:ha(this.config.hold_action),hasDoubleClick:ha(this.config.double_tap_action)})}
            >
              <slot></slot>
            </div>`:g`<slot></slot>`}
    `}},{kind:"method",key:"updated",value:function(e){var t;b(_(n.prototype),"updated",this).call(this,e),wf(this,"no-secondary",!(this.secondaryText||null!==(t=this.config)&&void 0!==t&&t.secondary_info)),e.has("hass")&&wf(this,"rtl",Me(this.hass))}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this.config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      .info {
        padding-left: 10%;
        padding-right: 10%;
        flex: 1 1 30%;
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .flex ::slotted(*) {
        margin-left: 8px;
        min-width: 0;
      }
      .flex ::slotted([slot="secondary"]) {
        margin-left: 0;
      }
      .secondary,
      ha-relative-time {
        color: var(--secondary-text-color);
      }
      state-badge {
        flex: 0 0 24px;
      }
      :host([rtl]) .flex {
        margin-left: 0;
        margin-right: 16px;
      }
      :host([rtl]) .flex ::slotted(*) {
        margin-left: 0;
        margin-right: 8px;
      }
      .pointer {
        cursor: pointer;
      }

      .text-content2 {
        max-width: 60px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}}]}}),f);customElements.define("hui-generic-entity-row",xf),h([x("hui-media-player-entity-row")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",decorators:[v()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[v()],key:"_veryNarrow",value:()=>!1},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Entity must be specified");this._config=e}},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){var e;null===(e=this._resizeObserver)||void 0===e||e.unobserve(this)}},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||this._measureCard()}},{kind:"method",key:"firstUpdated",value:function(){this._attachObserver()}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return g``;const e=this.hass.states[this._config.entity];if(!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=e.state,n=this._computeControlButton(e),i=!0===e.attributes.assumed_state,a=g`
      ${this._narrow||"playing"!==t&&!i||!Ze(e,$t)?"":g`
            <ha-icon-button
              .path=${ae}
              .label=${this.hass.localize("ui.card.media_player.media_previous_track")}
              @click=${this._previousTrack}
            ></ha-icon-button>
          `}
      ${!i&&("playing"===t&&(Ze(e,Rt)||Ze(e,It))||("paused"===t||"idle"===t)&&Ze(e,Ot)||"on"===t&&(Ze(e,Ot)||Ze(e,Rt)))?g`
            <ha-icon-button
              .path=${n.icon}
              .label=${this.hass.localize(`ui.card.media_player.${n.action}`)}
              @click=${this._playPauseStop}
            ></ha-icon-button>
          `:""}
      ${i&&Ze(e,Ot)?g`
            <ha-icon-button
              .path=${oe}
              .label=${this.hass.localize("ui.card.media_player.media_play")}
              @click=${this._play}
            ></ha-icon-button>
          `:""}
      ${i&&Ze(e,Rt)?g`
            <ha-icon-button
              .path=${re}
              .label=${this.hass.localize("ui.card.media_player.media_pause")}
              @click=${this._pause}
            ></ha-icon-button>
          `:""}
      ${i&&Ze(e,It)?g`
            <ha-icon-button
              .path=${A}
              .label=${this.hass.localize("ui.card.media_player.media_stop")}
              @click=${this._stop}
            ></ha-icon-button>
          `:""}
      ${("playing"===t||i)&&Ze(e,Mt)?g`
            <ha-icon-button
              .path=${se}
              .label=${this.hass.localize("ui.card.media_player.media_next_track")}
              @click=${this._nextTrack}
            ></ha-icon-button>
          `:""}
    `,o=At(e);return g`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .secondaryText=${o||rn(this.hass.localize,e,this.hass.locale)}
      >
        <div class="controls">
          ${Ze(e,zt)&&"off"===t&&!Qe.includes(t)?g`
                <ha-icon-button
                  .path=${le}
                  .label=${this.hass.localize("ui.card.media_player.turn_on")}
                  @click=${this._togglePower}
                ></ha-icon-button>
              `:Ze(e,jt)||Ze(e,Nt)?"":a}
          ${Ze(e,Pt)&&"off"!==t&&!Qe.includes(t)?g`
                <ha-icon-button
                  .path=${le}
                  .label=${this.hass.localize("ui.card.media_player.turn_off")}
                  @click=${this._togglePower}
                ></ha-icon-button>
              `:""}
        </div>
      </hui-generic-entity-row>
      ${!Ze(e,jt)&&!Ze(e,Nt)||[Le,He,"off"].includes(t)?"":g`
            <div class="flex">
              <div class="volume">
                ${Ze(e,Ht)?g`
                      <ha-icon-button
                        .path=${e.attributes.is_volume_muted?ce:de}
                        .label=${this.hass.localize("ui.card.media_player."+(e.attributes.is_volume_muted?"media_volume_mute":"media_volume_unmute"))}
                        @click=${this._toggleMute}
                      ></ha-icon-button>
                    `:""}
                ${!this._veryNarrow&&Ze(e,jt)?g`
                      <ha-slider
                        .dir=${je(this.hass)}
                        .value=${100*Number(e.attributes.volume_level)}
                        pin
                        @change=${this._selectedValueChanged}
                        ignore-bar-touch
                        id="input"
                      ></ha-slider>
                    `:!this._veryNarrow&&Ze(e,Nt)?g`
                      <ha-icon-button
                        .path=${ue}
                        .label=${this.hass.localize("ui.card.media_player.media_volume_down")}
                        @click=${this._volumeDown}
                      ></ha-icon-button>
                      <ha-icon-button
                        .path=${he}
                        .label=${this.hass.localize("ui.card.media_player.media_volume_up")}
                        @click=${this._volumeUp}
                      ></ha-icon-button>
                    `:""}
              </div>

              <div class="controls">${a}</div>
            </div>
          `}
    `}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await Dt(),this._resizeObserver=new ResizeObserver(qt((()=>this._measureCard()),250,!1))),this._resizeObserver.observe(this)}},{kind:"method",key:"_measureCard",value:function(){this.isConnected&&(this._narrow=(this.clientWidth||0)<300,this._veryNarrow=(this.clientWidth||0)<225)}},{kind:"method",key:"_computeControlButton",value:function(e){return"on"===e.state?{icon:fe,action:"media_play_pause"}:"playing"!==e.state?{icon:oe,action:"media_play"}:Ze(e,Rt)?{icon:re,action:"media_pause"}:{icon:A,action:"media_stop"}}},{kind:"method",key:"_togglePower",value:function(){const e=this.hass.states[this._config.entity];this.hass.callService("media_player","off"===e.state?"turn_on":"turn_off",{entity_id:this._config.entity})}},{kind:"method",key:"_playPauseStop",value:function(){const e=this.hass.states[this._config.entity],t="playing"!==e.state?"media_play":Ze(e,Rt)?"media_pause":"media_stop";this.hass.callService("media_player",t,{entity_id:this._config.entity})}},{kind:"method",key:"_play",value:function(){this.hass.callService("media_player","media_play",{entity_id:this._config.entity})}},{kind:"method",key:"_pause",value:function(){this.hass.callService("media_player","media_pause",{entity_id:this._config.entity})}},{kind:"method",key:"_stop",value:function(){this.hass.callService("media_player","media_stop",{entity_id:this._config.entity})}},{kind:"method",key:"_previousTrack",value:function(){this.hass.callService("media_player","media_previous_track",{entity_id:this._config.entity})}},{kind:"method",key:"_nextTrack",value:function(){this.hass.callService("media_player","media_next_track",{entity_id:this._config.entity})}},{kind:"method",key:"_toggleMute",value:function(){this.hass.callService("media_player","volume_mute",{entity_id:this._config.entity,is_volume_muted:!this.hass.states[this._config.entity].attributes.is_volume_muted})}},{kind:"method",key:"_volumeDown",value:function(){this.hass.callService("media_player","volume_down",{entity_id:this._config.entity})}},{kind:"method",key:"_volumeUp",value:function(){this.hass.callService("media_player","volume_up",{entity_id:this._config.entity})}},{kind:"method",key:"_selectedValueChanged",value:function(e){this.hass.callService("media_player","volume_set",{entity_id:this._config.entity,volume_level:e.target.value/100})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .volume {
        display: flex;
        flex-grow: 2;
        flex-shrink: 2;
      }
      .controls {
        white-space: nowrap;
      }
      ha-slider {
        flex-grow: 2;
        flex-shrink: 2;
        width: 100%;
        margin: 0 -8px 0 1px;
      }
    `}}]}}),f),h([x("hui-scene-entity-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <mwc-button
          @click=${this._callService}
          .disabled=${e.state===Le}
          class="text-content"
        >
          ${this._config.action_name||this.hass.localize("ui.card.scene.activate")}
        </mwc-button>
      </hui-generic-entity-row>
    `:g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      mwc-button {
        margin-right: -0.57em;
      }
      :host {
        cursor: pointer;
      }
    `}},{kind:"method",key:"_callService",value:function(e){e.stopPropagation(),ti(this.hass,this._config.entity)}}]}}),f),h([x("hui-script-entity-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${"on"===e.state?g`<mwc-button @click=${this._cancelScript}>
              ${"single"!==e.attributes.mode&&(e.attributes.current||0)>0?this.hass.localize("ui.card.script.cancel_multiple","number",e.attributes.current):this.hass.localize("ui.card.script.cancel")}
            </mwc-button>`:""}
        ${"off"===e.state||e.attributes.max?g`<mwc-button
              @click=${this._runScript}
              .disabled=${Qe.includes(e.state)||!rt(e)}
            >
              ${this._config.action_name||this.hass.localize("ui.card.script.run")}
            </mwc-button>`:""}
      </hui-generic-entity-row>
    `:g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      mwc-button:last-child {
        margin-right: -0.57em;
      }
    `}},{kind:"method",key:"_cancelScript",value:function(e){e.stopPropagation(),this._callService("turn_off")}},{kind:"method",key:"_runScript",value:function(e){e.stopPropagation(),this._callService("turn_on")}},{kind:"method",key:"_callService",value:function(e){this.hass.callService("script",e,{entity_id:this._config.entity})}}]}}),f),h([x("hui-sensor-entity-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <div
          class="text-content"
          @action=${this._handleAction}
          .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        >
          ${e.attributes.device_class!==at||Qe.includes(e.state)?rn(this.hass.localize,e,this.hass.locale):g`
                <hui-timestamp-display
                  .hass=${this.hass}
                  .ts=${new Date(e.state)}
                  .format=${this._config.format}
                  capitalize
                ></hui-timestamp-display>
              `}
        </div>
      </hui-generic-entity-row>
    `:g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      div {
        text-align: right;
      }
      .text-content {
        max-width: 33px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}}]}}),f),h([x("hui-text-entity-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${rn(this.hass.localize,e,this.hass.locale)}
      </hui-generic-entity-row>
    `:g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      div {
        text-align: right;
      }
      .pointer {
        cursor: pointer;
      }
    `}}]}}),f),h([x("hui-toggle-entity-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];if(!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t="on"===e.state||"off"===e.state||Qe.includes(e.state);return g`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .catchInteraction=${!t}
      >
        ${t?g`
              <ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${e}
              ></ha-entity-toggle>
            `:g`
              <div class="text-content">
                ${rn(this.hass.localize,e,this.hass.locale)}
              </div>
            `}
      </hui-generic-entity-row>
    `}}]}}),f),h([x("hui-attribute-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");if(!e.entity)throw new Error("Entity not specified");if(!e.attribute)throw new Error("Attribute not specified");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];if(!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=e.attributes[this._config.attribute];let n;return this._config.format&&(n=new Date(t)),g`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${this._config.prefix}
        ${this._config.format&&Lt(n)?g` <hui-timestamp-display
              .hass=${this.hass}
              .ts=${n}
              .format=${this._config.format}
              capitalize
            ></hui-timestamp-display>`:"number"==typeof t?Ue(t,this.hass.locale):void 0!==t?ct(this.hass,t):"—"}
        ${this._config.suffix}
      </hui-generic-entity-row>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      div {
        text-align: right;
      }
    `}}]}}),f);var Ef=Object.freeze({__proto__:null});let Sf=h([x("hui-button-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Invalid configuration");if(!e.name&&!e.entity)throw new Error("No name and no entity specified");this._config={tap_action:{action:e.entity&&wt.has(Ge(e.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},...e}}},{kind:"method",key:"render",value:function(){var e;if(!this._config)return g``;const t=this._config.entity&&this.hass?this.hass.states[this._config.entity]:void 0,n=null!==(e=this._config.name)&&void 0!==e?e:t?Je(t):"";return g`
      <ha-state-icon .icon=${this._config.icon} .state=${t}>
      </ha-state-icon>
      <div class="flex">
        <div .title=${n}>${n}</div>
        <mwc-button
          @action=${this._handleAction}
          .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
          >${this._config.action_name?this._config.action_name:this.hass.localize("ui.card.service.run")}</mwc-button
        >
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: flex;
        align-items: center;
      }
      ha-state-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        overflow: hidden;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .flex div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      mwc-button {
        margin-right: -0.57em;
      }
    `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}}]}}),f);h([x("hui-call-service-row")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",key:"setConfig",value:function(e){const t=e;if(!t)throw new Error("Invalid configuration");if(!t.name)throw new Error("No name specified");if(!t.service)throw new Error("No service specified");b(_(n.prototype),"setConfig",this).call(this,{tap_action:{action:"call-service",service:t.service,service_data:t.service_data},...t,type:"button"})}}]}}),Sf);const Tf=new Set(["media-player-entity","scene-entity","script-entity","sensor-entity","text-entity","toggle-entity","button","call-service"]),Df={"button-entity":()=>import("./c.c3f60ce3.js"),"climate-entity":()=>import("./c.42a6eb3e.js"),"cover-entity":()=>import("./c.b7e71449.js"),"group-entity":()=>import("./c.4336d5e7.js"),"input-button-entity":()=>import("./c.b8792e18.js"),"humidifier-entity":()=>import("./c.4188c2a1.js"),"input-datetime-entity":()=>import("./c.ee9ed9ee.js"),"input-number-entity":()=>import("./c.d1877e4a.js"),"input-select-entity":()=>import("./c.c1fd730e.js"),"input-text-entity":()=>import("./c.ede61ccd.js"),"lock-entity":()=>import("./c.3688fd6e.js"),"number-entity":()=>import("./c.17a36824.js"),"select-entity":()=>import("./c.b4dcc8bc.js"),"timer-entity":()=>import("./c.2e9c4eef.js"),conditional:()=>import("./c.e594a666.js"),"weather-entity":()=>import("./c.3c933314.js"),divider:()=>import("./c.5c5d1576.js"),section:()=>import("./c.6038f9d4.js"),weblink:()=>import("./c.18803735.js"),buttons:()=>import("./c.584d0441.js"),attribute:()=>Promise.resolve().then((function(){return Ef})),text:()=>import("./c.a05b03b6.js")},Cf={_domain_not_found:"text",alert:"toggle",automation:"toggle",button:"button",climate:"climate",cover:"cover",fan:"toggle",group:"group",humidifier:"humidifier",input_boolean:"toggle",input_button:"input-button",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",number:"number",remote:"toggle",scene:"scene",script:"script",select:"select",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime",weather:"weather"},Af=e=>_a("row",e,Tf,Df,Cf,void 0),$f=e=>wa(e,"row",Tf,Df);h([x("hui-entities-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.5e470180.js"),document.createElement("hui-entities-card-editor")}},{kind:"field",decorators:[p({type:Boolean})],key:"hideInteract",value:()=>!1},{kind:"field",decorators:[p({type:String})],key:"layout",value:()=>"big"},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"entities",entities:Sa(e,3,t,n,["light","switch"])}}},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",key:"_hass",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_showHeaderToggle",value:void 0},{kind:"field",key:"_headerElement",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"set",key:"hass",value:function(e){var t,n;this._hass=e,null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll("#states > div > *").forEach((t=>{t.hass=e})),this._headerElement&&(this._headerElement.hass=e),this._footerElement&&(this._footerElement.hass=e);const i=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("hui-entities-toggle");i&&(i.hass=e)}},{kind:"method",key:"getCardSize",value:async function(){if(!this._config)return 0;let e=1+(this._config.title||this._showHeaderToggle?2:0);if(this._headerElement){const t=pf(this._headerElement);e+=t instanceof Promise?await t:t}if(this._footerElement){const t=pf(this._footerElement);e+=t instanceof Promise?await t:t}return e}},{kind:"method",key:"setConfig",value:function(e){if(!e.entities||!Array.isArray(e.entities))throw new Error("Entities must be specified");const t=vf(e.entities);if(this._config=e,this._configEntities=t,void 0!==e.title&&void 0===e.show_header_toggle){let e=0;for(const n of t)if("entity"in n&&(e+=Number(wt.has(Ge(n.entity))),2===e))break;this._showHeaderToggle=2===e}else this._showHeaderToggle=e.show_header_toggle;this._config.header?(this._headerElement=mf(this._config.header),this._headerElement.type="header",this._hass&&(this._headerElement.hass=this._hass)):this._headerElement=void 0,this._config.footer?(this._footerElement=mf(this._config.footer),this._footerElement.type="footer",this._hass&&(this._footerElement.hass=this._hass)):this._footerElement=void 0}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this._hass)return;const t=e.get("_hass"),i=e.get("_config");(!e.has("_hass")||t&&t.themes===this._hass.themes)&&(!e.has("_config")||i&&i.theme===this._config.theme)||G(this,this._hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){var e,t,n,i,a,o;if(!this._config||!this._hass)return g``;"medium"===this.layout&&(this.hideInteract=!!(null!==(a=this._config)&&void 0!==a&&a.entities.length&&(null===(o=this._config)||void 0===o?void 0:o.entities.length)>4));return"small"===this.layout&&(this.hideInteract=!0),g`
      <ha-card
        class=${C({squared:"big"!==this.layout})}
      >
        <div
          id="states"
          class=${C({"card-content":"big"===this.layout,"card-content-medium2":"medium"===this.layout&&(null===(e=this._config)||void 0===e?void 0:e.entities.length)&&(null===(t=this._config)||void 0===t?void 0:t.entities.length)>4,"card-content-medium":"medium"===this.layout&&(!(null!==(n=this._config)&&void 0!==n&&n.entities.length)||(null===(i=this._config)||void 0===i?void 0:i.entities.length)<=4),"card-content-small":"small"===this.layout})}
        >
          ${this._config.title||this._showHeaderToggle||this._config.icon?g`
                <div
                  class=${C({"card-header":"big"===this.layout,"card-header-medium":"medium"===this.layout,"card-header-small":"small"===this.layout})}
                >
                  <div
                    class=${C({name:"big"===this.layout||"medium"===this.layout,"name-small":"small"===this.layout})}
                  >
                    ${this._config.icon?g`
                          <ha-icon
                            class="icon"
                            .icon=${this._config.icon}
                          ></ha-icon>
                        `:""}
                    ${this._config.title}
                  </div>
                  ${this._showHeaderToggle?g`
                        <hui-entities-toggle
                          .hass=${this._hass}
                          .entities=${this._configEntities.filter((e=>"entity"in e)).map((e=>e.entity))}
                        ></hui-entities-toggle>
                      `:g``}
                </div>
              `:""}
          ${this._configEntities.map((e=>this.renderEntity(e)))}
        </div>

        ${this._footerElement?g`<div class="header-footer footer">${this._footerElement}</div>`:""}
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-card {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 1.5rem;
        overflow: hidden;
      }

      .squared {
        aspect-ratio: 1;
      }

      .card-header .name {
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-header-medium .name {
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name-small {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
        padding-left: 5%;
      }

      #states > * {
        margin: 0;
        margin-bottom: 3%;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 100%;
        height: 35px;
      }

      .card-header-medium {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 100%;
        height: 0px;
      }

      .card-header-small {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 95%;
        height: 0px;
      }

      .card-content-small {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: space-between;
        margin: 5%;
        margin-left: 10%;
        align-items: center;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(3, 34%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: center;
        margin: 3%;
        align-items: center;
        grid-template-columns: repeat(1, 90%);
        grid-template-rows: repeat(4, 25%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium2 {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: center;
        margin: 5%;
        align-items: center;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(4, 25%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium2 .card-header {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .card-content-medium2 .card-header-medium {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      #states > div > * {
        overflow: clip visible;
      }

      #states > div {
        position: relative;
      }
    `}},{kind:"method",key:"renderEntity",value:function(e){const t=Af("type"in e&&"conditional"!==e.type||!this._config.state_color?{hideInteract:this.hideInteract,layout:this.layout,...e}:{state_color:!0,hideInteract:this.hideInteract,layout:this.layout,...e});return this._hass&&(t.hass=this._hass),g`<div>${t}</div>`}}]}}),f),h([x("hui-entity-button-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");b(_(n.prototype),"setConfig",this).call(this,e)}}]}}),Da);let Rf=h([x("hui-entity-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.dcd29acb.js"),document.createElement("hui-entity-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{entity:Sa(e,1,t,n,["sensor","light","switch"])[0]||""}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(e.entity&&!Ea(e.entity))throw new Error("Invalid entity");this._config=e,this._config.footer?this._footerElement=mf(this._config.footer):this._footerElement&&(this._footerElement=void 0)}},{kind:"method",key:"getCardSize",value:async function(){let e=2;if(this._footerElement){const t=pf(this._footerElement);e+=t instanceof Promise?await t:t}return e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];if(!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=Fe(e),n=this._config.attribute?this._config.attribute in e.attributes:!Qe.includes(e.state),i=this._config.name||Je(e);return g`
      <ha-card @click=${this._handleClick} tabindex="0">
        <div class="header">
          <div class="name" .title=${i}>${i}</div>
          <div class="icon">
            <ha-state-icon
              .icon=${this._config.icon}
              .state=${e}
              data-domain=${V(this._config.state_color||"light"===t&&!1!==this._config.state_color?t:void 0)}
              data-state=${e?xt(e):""}
            ></ha-state-icon>
          </div>
        </div>
        <div class="info">
          ${Qe.includes(e.state)?g` <unavailable-icon></unavailable-icon> `:g` <span class="value"
                >${"attribute"in this._config?void 0!==e.attributes[this._config.attribute]?ct(this.hass,e.attributes[this._config.attribute]):this.hass.localize("state.default.unknown"):Be(e)?Ue(e.state,this.hass.locale):g`<unavailable-icon></unavailable-icon>`}</span
              >`}
          ${n?g`
                <span class="measurement"
                  >${this._config.unit||(this._config.attribute?"":e.attributes.unit_of_measurement)}</span
                >
              `:""}
        </div>
        ${this._footerElement}
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return this._footerElement&&(this._footerElement.hass=this.hass),_f(this,e)}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||G(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleClick",value:function(){d(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return[Et,k`
        ha-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          outline: none;
        }

        .header {
          display: flex;
          padding: 8px 16px 0;
          justify-content: space-between;
        }

        .name {
          color: var(--secondary-text-color);
          line-height: 40px;
          font-weight: 500;
          font-size: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .icon {
          color: var(--state-icon-color, #7b7b7b);
          line-height: 40px;
        }

        .info {
          padding: 0px 16px 16px;
          margin-top: -4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 28px;
        }

        .value {
          font-size: 28px;
          margin-right: 4px;
        }

        .measurement {
          font-size: 18px;
          color: var(--secondary-text-color);
        }
      `]}}]}}),f);h([x("hui-warning-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p()],key:"label",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <ha-svg-icon .path=${pe} .title=${this.label}></ha-svg-icon>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-svg-icon {
        color: var(--warning-color);
      }
    `}}]}}),f),h([x("hui-glance-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.80d03433.js"),document.createElement("hui-glance-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"glance",entities:Sa(e,3,t,n,["sensor"])}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"method",key:"getCardSize",value:function(){const e=(this._config.show_icon?1:0)+(this._config.show_name?1:0)+(this._config.show_state?1:0),t=Math.ceil(this._configEntities.length/(this._config.columns||5));return(this._config.title?2:0)+e*t}},{kind:"method",key:"setConfig",value:function(e){this._config={show_name:!0,show_state:!0,show_icon:!0,state_color:!0,...e};const t=vf(e.entities).map((e=>({hold_action:{action:"more-info"},...e})));for(const e of t)if(e.tap_action&&"call-service"===e.tap_action.action&&!e.tap_action.service||e.hold_action&&"call-service"===e.hold_action.action&&!e.hold_action.service)throw new Error('Missing required property "service" when tap_action or hold_action is call-service');const n=e.columns||Math.min(e.entities.length,5);this.style.setProperty("--glance-column-width",100/n+"%"),this._configEntities=t,this.hass&&this.requestUpdate()}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!this._configEntities||!t||t.themes!==this.hass.themes||t.locale!==this.hass.locale)return!0;for(const e of this._configEntities)if(t.states[e.entity]!==this.hass.states[e.entity])return!0;return!1}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const{title:e}=this._config;return g`
      <ha-card .header=${e}>
        <div class=${C({entities:!0,"no-header":!e})}>
          ${this._configEntities.map((e=>this.renderEntity(e)))}
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||G(this,this.hass.themes,this._config.theme)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-card {
        height: 100%;
      }
      .entities {
        display: flex;
        padding: 0 16px 4px;
        flex-wrap: wrap;
        box-sizing: border-box;
        align-items: center;
        align-content: center;
      }
      .entities.no-header {
        padding-top: 16px;
      }
      .entity {
        box-sizing: border-box;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
        width: var(--glance-column-width, 20%);
      }
      .entity:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 14px;
        padding: 4px;
        margin: -4px 0;
      }
      .entity div {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        min-height: var(--paper-font-body1_-_line-height, 20px);
      }
      .warning {
        cursor: default;
        position: relative;
        padding: 8px;
        width: calc(var(--glance-column-width, 20%) - 4px);
        margin: 0 2px;
      }
      .warning::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.12;
        pointer-events: none;
        content: "";
        border-radius: 4px;
        background-color: var(--warning-color);
      }
      state-badge {
        margin: 8px 0;
      }
      hui-warning-element {
        padding: 8px;
      }
    `}},{kind:"method",key:"renderEntity",value:function(e){var t,n;const i=this.hass.states[e.entity];if(!i)return g`<div class="entity warning">
        ${this._config.show_name?g`
              <div class="name">
                ${Ta(this.hass,e.entity)}
              </div>
            `:""}
        ${this._config.show_icon?g` <hui-warning-element
              .label=${Ta(this.hass,e.entity)}
            ></hui-warning-element>`:""}
        <div>${this._config.show_state?e.entity:""}</div>
      </div>`;const a=null!==(t=e.name)&&void 0!==t?t:Je(i);return g`
      <div
        class="entity"
        .config=${e}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(e.hold_action),hasDoubleClick:ha(e.double_tap_action)})}
        tabindex=${V(ha(e.tap_action)?"0":void 0)}
      >
        ${this._config.show_name?g` <div class="name" .title=${a}>${a}</div> `:""}
        ${this._config.show_icon?g`
              <state-badge
                .hass=${this.hass}
                .stateObj=${i}
                .overrideIcon=${e.icon}
                .overrideImage=${e.image}
                .stateColor=${null!==(n=!1===e.state_color||e.state_color)&&void 0!==n?n:this._config.state_color}
              ></state-badge>
            `:""}
        ${this._config.show_state&&!1!==e.show_state?g`
              <div>
                ${"sensor"!==Ge(e.entity)||i.attributes.device_class!==at||Qe.includes(i.state)?e.show_last_changed?g`
                      <ha-relative-time
                        .hass=${this.hass}
                        .datetime=${i.last_changed}
                        capitalize
                      ></ha-relative-time>
                    `:rn(this.hass.localize,i,this.hass.locale):g`
                      <hui-timestamp-display
                        .hass=${this.hass}
                        .ts=${new Date(i.state)}
                        .format=${e.format}
                        capitalize
                      ></hui-timestamp-display>
                    `}
              </div>
            `:""}
      </div>
    `}},{kind:"method",key:"_handleAction",value:function(e){const t=e.currentTarget.config;ua(this,this.hass,t,e.detail.action)}}]}}),f);let If=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.d2afc68b.js"),document.createElement("hui-stack-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{cards:[]}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"editMode",value:void 0},{kind:"field",decorators:[p()],key:"_cards",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.cards||!Array.isArray(e.cards))throw new Error("Invalid configuration");this._config=e,this._cards=e.cards.map((e=>this._createCardElement(e)))}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),this._cards&&(e.has("hass")||e.has("editMode")))for(const e of this._cards)this.hass&&(e.hass=this.hass),void 0!==this.editMode&&(e.editMode=this.editMode)}},{kind:"method",key:"render",value:function(){return this._config&&this._cards?g`
      ${this._config.title?g`<h1 class="card-header">${this._config.title}</h1>`:""}
      <div id="root">${this._cards}</div>
    `:g``}},{kind:"get",static:!0,key:"sharedStyles",value:function(){return k`
      .card-header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        font-weight: normal;
        margin-block-start: 0px;
        margin-block-end: 0px;
        letter-spacing: -0.012em;
        line-height: 32px;
        display: block;
        padding: 24px 16px 16px;
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}},{kind:"method",key:"_createCardElement",value:function(e){var t;const n=fp(e);this.hass&&(n.hass=this.hass);return n.layout={1:"big",2:"medium",3:"small"}[null===(t=this._config)||void 0===t?void 0:t.columns],n.addEventListener("ll-rebuild",(t=>{t.stopPropagation(),this._rebuildCard(n,e)}),{once:!0}),n}},{kind:"method",key:"_rebuildCard",value:function(e,t){const n=this._createCardElement(t);e.parentElement&&e.parentElement.replaceChild(n,e),this._cards=this._cards.map((t=>t===e?n:t))}}]}}),f);const Of={1:5,2:3,3:2};customElements.define("hui-grid-card",class extends If{static async getConfigElement(){return await import("./c.d008541c.js"),document.createElement("hui-grid-card-editor")}async getCardSize(){if(!this._cards||!this._config)return 0;if(this.square){const e=Of[this.columns]||1;return(this._cards.length<this.columns?e:this._cards.length/this.columns*e)+(this._config.title?1:0)}const e=[];for(const t of this._cards)e.push(pf(t));const t=await Promise.all(e);let n=this._config.title?1:0;for(let e=0;e<t.length;e+=this.columns)n+=Math.max(...t.slice(e,e+this.columns));return n}get columns(){var e;return(null===(e=this._config)||void 0===e?void 0:e.columns)||3}get square(){var e;return!1!==(null===(e=this._config)||void 0===e?void 0:e.square)}setConfig(e){var t;super.setConfig(e),this.style.setProperty("--grid-card-column-count",String(this.columns)),console.log("CONFI",this._config),this.square&&"1"!==(null===(t=this._config)||void 0===t?void 0:t.columns)?this.setAttribute("square",""):this.removeAttribute("square")}static get styles(){return[super.sharedStyles,k`
        #root {
          display: grid;
          grid-template-columns: repeat(
            var(--grid-card-column-count, ${3}),
            minmax(0, 1fr)
          );
          grid-gap: var(--grid-card-gap, 8px);
        }
        :host([square]) #root {
          grid-auto-rows: 1fr;
        }
        :host([square]) #root::before {
          content: "";
          width: 0;
          padding-bottom: 100%;
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        :host([square]) #root > *:not([hidden]) {
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }
        :host([square]) #root > *:not([hidden]) ~ *:not([hidden]) {
          /*
	       * Remove grid-row and grid-column from every element that comes after
	       * the first not-hidden element
	       */
          grid-row: unset;
          grid-column: unset;
        }
      `]}});let Mf=h(null,(function(e,t){class n extends t{constructor(){super(),e(this),this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}}return{F:n,d:[{kind:"field",decorators:[p({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[p({type:Number})],key:"high",value:void 0},{kind:"field",decorators:[p({type:Number})],key:"low",value:void 0},{kind:"field",decorators:[p({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[p({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[p({type:Number})],key:"step",value:()=>1},{kind:"field",decorators:[p({type:Number})],key:"startAngle",value:()=>135},{kind:"field",decorators:[p({type:Number})],key:"arcLength",value:()=>270},{kind:"field",decorators:[p({type:Number})],key:"handleSize",value:()=>6},{kind:"field",decorators:[p({type:Number})],key:"handleZoom",value:()=>1.5},{kind:"field",decorators:[p({type:Boolean})],key:"readonly",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"dragging",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"rtl",value:()=>!1},{kind:"field",decorators:[p()],key:"valueLabel",value:void 0},{kind:"field",decorators:[p()],key:"lowLabel",value:void 0},{kind:"field",decorators:[p()],key:"highLabel",value:void 0},{kind:"field",decorators:[v()],key:"_scale",value:()=>1},{kind:"field",key:"_reverseOrder",value:void 0},{kind:"field",key:"_rotation",value:void 0},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}},{kind:"get",key:"_start",value:function(){return this.startAngle*Math.PI/180}},{kind:"get",key:"_len",value:function(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}},{kind:"get",key:"_end",value:function(){return this._start+this._len}},{kind:"get",key:"_showHandle",value:function(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}},{kind:"method",key:"_angleInside",value:function(e){let t=(this.startAngle+this.arcLength/2-e+180+360)%360-180;return t<this.arcLength/2&&t>-this.arcLength/2}},{kind:"method",key:"_angle2xy",value:function(e){return this.rtl?{x:-Math.cos(e),y:Math.sin(e)}:{x:Math.cos(e),y:Math.sin(e)}}},{kind:"method",key:"_xy2angle",value:function(e,t){return this.rtl&&(e=-e),(Math.atan2(t,e)-this._start+2*Math.PI)%(2*Math.PI)}},{kind:"method",key:"_value2angle",value:function(e){const t=((e=Math.min(this.max,Math.max(this.min,e)))-this.min)/(this.max-this.min);return this._start+t*this._len}},{kind:"method",key:"_angle2value",value:function(e){return Math.round((e/this._len*(this.max-this.min)+this.min)/this.step)*this.step}},{kind:"get",key:"_boundaries",value:function(){const e=this._angle2xy(this._start),t=this._angle2xy(this._end);let n=1;this._angleInside(270)||(n=Math.max(-e.y,-t.y));let i=1;this._angleInside(90)||(i=Math.max(e.y,t.y));let a=1;this._angleInside(180)||(a=Math.max(-e.x,-t.x));let o=1;return this._angleInside(0)||(o=Math.max(e.x,t.x)),{up:n,down:i,left:a,right:o,height:n+i,width:a+o}}},{kind:"method",key:"_mouse2value",value:function(e){var t;const n=e.type.startsWith("touch")?e.touches[0].clientX:e.clientX,i=e.type.startsWith("touch")?e.touches[0].clientY:e.clientY,a=null===(t=this.shadowRoot.querySelector("svg"))||void 0===t?void 0:t.getBoundingClientRect(),o=this._boundaries,r=n-(a.left+o.left*a.width/o.width),s=i-(a.top+o.up*a.height/o.height),l=this._xy2angle(r,s);return this._angle2value(l)}},{kind:"method",key:"dragStart",value:function(e){if(!this._showHandle||this.disabled)return;let t,n=e.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(n.classList.contains("shadowpath"))if("touchstart"===e.type&&(t=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)n=this.shadowRoot.querySelector("#value");else{const t=this._mouse2value(e);n=Math.abs(t-this.low)<Math.abs(t-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(n.classList.contains("overflow")&&(n=n.nextElementSibling),!n.classList.contains("handle"))return;n.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i="high"===n.id?this.low:this.min,a="low"===n.id?this.high:this.max;this._rotation={handle:n,min:i,max:a,start:this[n.id],type:e.type,cooldown:t},this.dragging=!0}},{kind:"method",key:"_cleanupRotation",value:function(){const e=this._rotation.handle;e.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,e.blur()}},{kind:"method",key:"dragEnd",value:function(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;this._cleanupRotation();let n=new CustomEvent("value-changed",{detail:{[t.id]:this[t.id]},bubbles:!0,composed:!0});this.dispatchEvent(n),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}},{kind:"method",key:"drag",value:function(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;e.preventDefault();const t=this._mouse2value(e);this._dragpos(t)}},{kind:"method",key:"_dragpos",value:function(e){if(e<this._rotation.min||e>this._rotation.max)return;const t=this._rotation.handle;this[t.id]=e;let n=new CustomEvent("value-changing",{detail:{[t.id]:e},bubbles:!0,composed:!0});this.dispatchEvent(n)}},{kind:"method",key:"_keyStep",value:function(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]+this.step):this._dragpos(this[t.id]-this.step)),"ArrowRight"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]-this.step):this._dragpos(this[t.id]+this.step)),"Home"===e.key&&(e.preventDefault(),this._dragpos(this.min)),"End"===e.key&&(e.preventDefault(),this._dragpos(this.max))}},{kind:"method",key:"updated",value:function(e){if(this.shadowRoot.querySelector(".slider")){const e=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(e&&e.strokeWidth){const t=parseFloat(e.strokeWidth);if(t>this.handleSize*this.handleZoom){const e=this._boundaries,n=`\n          ${t/2*Math.abs(e.up)}px\n          ${t/2*Math.abs(e.right)}px\n          ${t/2*Math.abs(e.down)}px\n          ${t/2*Math.abs(e.left)}px`;this.shadowRoot.querySelector("svg").style.margin=n}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){e.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((e=>{if(e.getAttribute("stroke-width"))return;const t=parseFloat(getComputedStyle(e).getPropertyValue("stroke-width"));e.style.strokeWidth=t*this._scale+"px"}));const t=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=Math.max(t.width,t.height);this._scale=2/n}}},{kind:"method",key:"_renderArc",value:function(e,t){const n=t-e,i=this._angle2xy(e),a=this._angle2xy(t+.001);return`\n      M ${i.x} ${i.y}\n      A 1 1,\n        0,\n        ${n>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${a.x} ${a.y}\n    `}},{kind:"method",key:"_renderHandle",value:function(e){const t=this._value2angle(this[e]),n=this._angle2xy(t),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[e]||"";return ve`
      <g class="${e} handle">
        <path
          id=${e}
          class="overflow"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${e}
          class="handle"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[e]}
          aria-disabled=${this.disabled}
          aria-label=${i||""}
          />
        </g>
      `}},{kind:"method",key:"render",value:function(){const e=this._boundaries;return g`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-e.left} ${-e.up} ${e.width} ${e.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?null!=this.low?this._reverseOrder?ve`${this._renderHandle("high")} ${this._renderHandle("low")}`:ve`${this._renderHandle("low")} ${this._renderHandle("high")}`:ve`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `}}]}}),f);customElements.define("round-slider2",Mf);let zf=function(e){return e.UNKNOWN="unknown",e.ONOFF="onoff",e.BRIGHTNESS="brightness",e.COLOR_TEMP="color_temp",e.WHITE="white",e.HS="hs",e.XY="xy",e.RGB="rgb",e.RGBW="rgbw",e.RGBWW="rgbww",e}({});const jf=[zf.HS,zf.XY,zf.RGB,zf.RGBW,zf.RGBWW],Nf=[...jf,zf.COLOR_TEMP,zf.BRIGHTNESS],Pf=4,Hf=(e,t)=>{var n;return null===(n=e.attributes.supported_color_modes)||void 0===n?void 0:n.includes(t)},Lf=e=>jf.includes(e.attributes.color_mode),Bf=e=>{var t;return null===(t=e.attributes.supported_color_modes)||void 0===t?void 0:t.some((e=>jf.includes(e)))},Uf=e=>{var t;return null===(t=e.attributes.supported_color_modes)||void 0===t?void 0:t.some((e=>Nf.includes(e)))},Ff=e=>e.attributes.color_mode===zf.RGBWW?e.attributes.rgbww_color:e.attributes.color_mode===zf.RGBW?e.attributes.rgbw_color:e.attributes.rgb_color;h([x("hui-light-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.8eb279fc.js"),document.createElement("hui-light-card-editor")}},{kind:"field",decorators:[p({type:Boolean})],key:"statusslider",value:()=>!0},{kind:"field",decorators:[p({type:Boolean})],key:"dialog",value:()=>!1},{kind:"field",decorators:[p({type:String})],key:"layout",value:()=>"big"},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"light",entity:Sa(e,1,t,n,["light"])[0]||""}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",key:"_brightnessTimout",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"light"!==e.entity.split(".")[0])throw new Error("Missing light entity");this._config={tap_action:{action:"toggle"},hold_action:{action:"more-info"},...e}}},{kind:"method",key:"render",value:function(){var e;if(!this.hass||!this._config)return g``;const t=this.hass.states[this._config.entity];if(!t)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const n=Math.round(t.attributes.brightness/255*100)||0,i=null!==(e=this._config.name)&&void 0!==e?e:Je(t);return g`
      <ha-card>
        <ha-icon-button
          class="more-info"
          .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
          .path=${ge}
          @click=${this._handleMoreInfo}
          tabindex="0"
        ></ha-icon-button>

        <div
          class=${C({"content-big":"big"===this.layout,"content-small":"small"===this.layout||"medium"===this.layout,unavailable:Qe.includes(t.state)})}
        >
          <div
            class=${C({"controls-big":"big"===this.layout,"controls-small":"small"===this.layout||"medium"===this.layout})}
          >
            <div
              class=${C({"slider-big":"big"===this.layout,"slider-small":"small"===this.layout||"medium"===this.layout})}
            >
              ${"big"===this.layout?g`
                    <round-slider2
                      class="round-slider"
                      min="0"
                      max="100"
                      .value=${n}
                      .disabled=${Qe.includes(t.state)}
                      @value-changing=${this._dragEvent}
                      @value-changed=${this._setBrightness}
                      style=${N({visibility:Uf(t)?"visible":"hidden"})}
                    ></round-slider2>
                  `:g``}

              <ha-icon-button
                class=${C({"light-button":"big"===this.layout,"light-button-small":"small"===this.layout||"medium"===this.layout,"slider-left":Uf(t),"state-on":"on"===t.state,"state-unavailable":t.state===Le})}
                .disabled=${Qe.includes(t.state)}
                style=${N({filter:this._computeBrightness(t),color:this._computeColor(t)})}
                @action=${this._handleAction}
                .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
                tabindex="0"
              >
                <div class="container-icon">
                  <ha-state-icon
                    .icon=${this._config.icon}
                    .state=${t}
                  ></ha-state-icon>
                </div>
              </ha-icon-button>
            </div>
          </div>
          <div
            class=${C({info:"big"===this.layout,"info-small":"small"===this.layout,"info-medium":"medium"===this.layout})}
            .title=${i}
          >
            ${Qe.includes(t.state)?g` <unavailable-icon></unavailable-icon> `:g`
                  <div
                    class=${C({brightness:"big"===this.layout,"brightness-null":"small"===this.layout||"medium"===this.layout})}
                  >
                    %
                  </div>
                `}
            ${i}
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;if(!this.hass.states[this._config.entity])return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||G(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_dragEvent",value:function(e){this.shadowRoot.querySelector(".brightness").innerHTML=`${e.detail.value} %`,this._showBrightness(),this._hideBrightness()}},{kind:"method",key:"_showBrightness",value:function(){clearTimeout(this._brightnessTimout),this.shadowRoot.querySelector(".brightness").classList.add("show_brightness")}},{kind:"method",key:"_hideBrightness",value:function(){this._brightnessTimout=window.setTimeout((()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness")}),500)}},{kind:"method",key:"_setBrightness",value:function(e){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:e.detail.value})}},{kind:"method",key:"_computeBrightness",value:function(e){if("off"===e.state||!e.attributes.brightness)return"";return`brightness(${(e.attributes.brightness+245)/5}%)`}},{kind:"method",key:"_computeColor",value:function(e){return"off"===e.state?"":e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:""}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"method",key:"_handleMoreInfo",value:function(){d(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-card {
        height: 100%;
        padding: 4% 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
      }

      .light-button-small {
        color: var(--paper-item-icon-color, #7b7b7b);
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
        border-radius: 100%;
        --mdc-icon-button-size: 100%;
        --mdc-icon-size: 100%;
      }

      .light-button {
        color: var(--paper-item-icon-color, #7b7b7b);
        grid-row-start: 1;
        grid-column-start: 1;
        margin-top: 8%;
        margin-left: 20%;
        width: 60%;
        height: 60%;
        box-sizing: border-box;
        border-radius: 100%;
        --mdc-icon-button-size: 100%;
        --mdc-icon-size: 100%;
      }
      mwc-icon-button {
        height: 100%;
        width: 100%;
      }
      .content-big {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .content-small {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
      }
      .container-icon {
        height: 100%;
        width: 100%;
      }

      .controls-big {
        width: 50%;
        text-align: center;
      }

      .controls-small {
        width: 63%;
        height: 70%;
        margin-right: 40%;
        text-align: center;
      }

      .info {
        text-align: center;
        padding: 5%;
        padding-top: 0%;
        font-size: 2.3rem;
        font-weight: 450;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 80%;
        text-overflow: ellipsis;
        justify-content: space-between;
      }

      .info-medium {
        padding: 5%;
        font-size: 1.8rem;
        font-weight: 450;
        padding-bottom: 4%;
        margin-bottom: 4%;
        margin-left: 7%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 200px;
        float: left;
        text-overflow: ellipsis;
      }

      .info-small {
        padding: 5%;
        font-size: 1.2rem;
        font-weight: 450;
        padding-bottom: 4%;
        margin-bottom: 4%;
        margin-left: 7%;
        display: inline-block;
        max-width: 110px;
        white-space: nowrap;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      ha-state-icon {
        width: 100%;
        height: 100%;
      }

      ha-icon-button + span {
        text-align: center;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }
      unavailable-icon {
        position: absolute;
        top: 11px;
        right: 25%;
      }
      .slider-big {
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr;
        /* max-width: 150px; */
      }

      .slider-small {
        height: 90%;
        width: 100%;
        position: relative;
        /* max-width: 200px; */
      }
      .round-slider {
        grid-row-start: 1;
        grid-column-start: 1;
        --round-slider-path-color: var(--slider-track-color);
        --round-slider-bar-color: var(--accent-color);
        float: top;
      }

      .light-button.state-on {
        color: var(--state-light-active-color, #ffbd4b);
      }
      .light-button-small.state-on {
        color: var(--state-light-active-color, #ffbd4b);
      }

      .light-button.state-unavailable {
        color: var(--state-icon-unavailable-color);
      }
      .light-button-small.state-unavailable {
        color: var(--state-icon-unavailable-color);
      }

      .brightness {
        font-size: 1.3rem;
        padding-bottom: 10%;
        padding-left: 2%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        -moz-transition: opacity 0.5s ease-in-out;
        -webkit-transition: opacity 0.5s ease-in-out;
      }

      .brightness-null {
        display: none;
      }

      .show_brightness {
        opacity: 1;
      }
    `}}]}}),f);const Vf=["counter","input_number","number","sensor"];h([x("hui-sensor-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.31c86a51.js"),document.createElement("hui-sensor-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"sensor",entity:Sa(e,1,t,n,Vf,(e=>!isNaN(Number(e.state))&&!!e.attributes.unit_of_measurement))[0]||"",graph:"line"}}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||!Vf.includes(Ge(e.entity)))throw new Error("Missing sensor entity");const{graph:t,detail:i,hours_to_show:a,...o}=e,r={...o,type:"entity"};if("line"===t){const t={type:"graph",entity:e.entity,detail:i||1,hours_to_show:a||24,limits:e.limits};r.footer=t}b(_(n.prototype),"setConfig",this).call(this,r)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
        border-radius: 1.5rem;
        overflow: hidden;
      }
      .header {
        display: flex;
        padding: 8px 16px 0;
        justify-content: space-between;
      }
      .name {
        color: var(--accent-color);
        line-height: 40px;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .icon {
        color: var(--state-icon-color, #44739e);
        line-height: 40px;
      }
      @media only screen and (max-width: 768px) {
        .info {
          font-size: 3rem;
        }
      }
      .info {
        padding-left: 10%;
        padding-bottom: 10%;
        margin-top: -4px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 28px;
        font-size: 1.5vmax;
        font-weight: 450;
      }
      svg {
        border-radius: 1.5rem;
      }
    `}}]}}),Rf);class Wf extends f{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(e){let t=(this.startAngle+this.arcLength/2-e+180+360)%360-180;return t<this.arcLength/2&&t>-this.arcLength/2}_angle2xy(e){return this.rtl?{x:-Math.cos(e),y:Math.sin(e)}:{x:Math.cos(e),y:Math.sin(e)}}_xy2angle(e,t){return this.rtl&&(e=-e),(Math.atan2(t,e)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(e){const t=((e=Math.min(this.max,Math.max(this.min,e)))-this.min)/(this.max-this.min);return this._start+t*this._len}_angle2value(e){return Math.round((e/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const e=this._angle2xy(this._start),t=this._angle2xy(this._end);let n=1;this._angleInside(270)||(n=Math.max(-e.y,-t.y));let i=1;this._angleInside(90)||(i=Math.max(e.y,t.y));let a=1;this._angleInside(180)||(a=Math.max(-e.x,-t.x));let o=1;return this._angleInside(0)||(o=Math.max(e.x,t.x)),{up:n,down:i,left:a,right:o,height:n+i,width:a+o}}_mouse2value(e){const t=e.type.startsWith("touch")?e.touches[0].clientX:e.clientX,n=e.type.startsWith("touch")?e.touches[0].clientY:e.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),a=this._boundaries,o=t-(i.left+a.left*i.width/a.width),r=n-(i.top+a.up*i.height/a.height),s=this._xy2angle(o,r);return this._angle2value(s)}dragStart(e){if(!this._showHandle||this.disabled)return;let t,n=e.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(n.classList.contains("shadowpath"))if("touchstart"===e.type&&(t=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)n=this.shadowRoot.querySelector("#value");else{const t=this._mouse2value(e);n=Math.abs(t-this.low)<Math.abs(t-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(n.classList.contains("overflow")&&(n=n.nextElementSibling),!n.classList.contains("handle"))return;n.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i="high"===n.id?this.low:this.min,a="low"===n.id?this.high:this.max;this._rotation={handle:n,min:i,max:a,start:this[n.id],type:e.type,cooldown:t},this.dragging=!0}_cleanupRotation(){const e=this._rotation.handle;e.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,e.blur()}dragEnd(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;this._cleanupRotation();let n=new CustomEvent("value-changed",{detail:{[t.id]:this[t.id]},bubbles:!0,composed:!0});this.dispatchEvent(n),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;e.preventDefault();const t=this._mouse2value(e);this._dragpos(t)}_dragpos(e){if(e<this._rotation.min||e>this._rotation.max)return;const t=this._rotation.handle;this[t.id]=e;let n=new CustomEvent("value-changing",{detail:{[t.id]:e},bubbles:!0,composed:!0});this.dispatchEvent(n)}_keyStep(e){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const t=this._rotation.handle;"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]+this.step):this._dragpos(this[t.id]-this.step)),"ArrowRight"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.rtl?this._dragpos(this[t.id]-this.step):this._dragpos(this[t.id]+this.step)),"Home"===e.key&&(e.preventDefault(),this._dragpos(this.min)),"End"===e.key&&(e.preventDefault(),this._dragpos(this.max))}updated(e){if(this.shadowRoot.querySelector(".slider")){const e=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(e&&e.strokeWidth){const t=parseFloat(e.strokeWidth);if(t>this.handleSize*this.handleZoom){const e=this._boundaries,n=`\n          ${t/2*Math.abs(e.up)}px\n          ${t/2*Math.abs(e.right)}px\n          ${t/2*Math.abs(e.down)}px\n          ${t/2*Math.abs(e.left)}px`;this.shadowRoot.querySelector("svg").style.margin=n}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){e.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((e=>{if(e.getAttribute("stroke-width"))return;const t=parseFloat(getComputedStyle(e).getPropertyValue("stroke-width"));e.style.strokeWidth=t*this._scale+"px"}));const t=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=Math.max(t.width,t.height);this._scale=2/n}}_renderArc(e,t){const n=t-e,i=this._angle2xy(e),a=this._angle2xy(t+.001);return`\n      M ${i.x} ${i.y}\n      A 1 1,\n        0,\n        ${n>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${a.x} ${a.y}\n    `}_renderHandle(e){const t=this._value2angle(this[e]),n=this._angle2xy(t),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[e]||"";return ve`
      <g class="${e} handle">
        <path
          id=${e}
          class="overflow"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${e}
          class="handle"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[e]}
          aria-disabled=${this.disabled}
          aria-label=${i||""}
          />
        </g>
      `}render(){const e=this._boundaries;return g`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-e.left} ${-e.up} ${e.width} ${e.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?null!=this.low?this._reverseOrder?ve`${this._renderHandle("high")} ${this._renderHandle("low")}`:ve`${this._renderHandle("low")} ${this._renderHandle("high")}`:ve`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return k`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `}}me([p({type:Number})],Wf.prototype,"value",void 0),me([p({type:Number})],Wf.prototype,"high",void 0),me([p({type:Number})],Wf.prototype,"low",void 0),me([p({type:Number})],Wf.prototype,"min",void 0),me([p({type:Number})],Wf.prototype,"max",void 0),me([p({type:Number})],Wf.prototype,"step",void 0),me([p({type:Number})],Wf.prototype,"startAngle",void 0),me([p({type:Number})],Wf.prototype,"arcLength",void 0),me([p({type:Number})],Wf.prototype,"handleSize",void 0),me([p({type:Number})],Wf.prototype,"handleZoom",void 0),me([p({type:Boolean})],Wf.prototype,"readonly",void 0),me([p({type:Boolean})],Wf.prototype,"disabled",void 0),me([p({type:Boolean,reflect:!0})],Wf.prototype,"dragging",void 0),me([p({type:Boolean})],Wf.prototype,"rtl",void 0),me([p()],Wf.prototype,"valueLabel",void 0),me([p()],Wf.prototype,"lowLabel",void 0),me([p()],Wf.prototype,"highLabel",void 0),me([v()],Wf.prototype,"_scale",void 0),customElements.define("round-slider",Wf);const Gf={auto:ye,heat_cool:be,heat:_e,cool:ke,off:le,fan_only:we,dry:xe};h([x("hui-thermostat-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.1b62c2d9.js"),document.createElement("hui-thermostat-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"thermostat",entity:Sa(e,1,t,n,["climate"])[0]||""}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",decorators:[v()],key:"_setTemp",value:void 0},{kind:"field",decorators:[z("ha-card")],key:"_card",value:void 0},{kind:"field",decorators:[p({type:String})],key:"layout",value:()=>"big"},{kind:"method",key:"getCardSize",value:function(){return 7}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"climate"!==e.entity.split(".")[0])throw new Error("Missing climate entity");this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return g``;const e=this.hass.states[this._config.entity];if(!e)return g`
        <hui-warning>
          ${Ta(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=e.state in Gf?e.state:"unknown-mode",n=this._config.name||Je(this.hass.states[this._config.entity]),i=null!==e.attributes.temperature&&Number.isFinite(Number(e.attributes.temperature))?e.attributes.temperature:e.attributes.min_temp;"°C"===this.hass.config.unit_system.temperature&&(e.attributes.min_temp=5,e.attributes.max_temp=35);const a=e.state===Le?g` <round-slider disabled="true"></round-slider> `:g`
            ${"big"===this.layout?g` <round-slider
                  .value=${i}
                  .low=${e.attributes.target_temp_low}
                  .high=${e.attributes.target_temp_high}
                  .min=${e.attributes.min_temp}
                  .max=${e.attributes.max_temp}
                  .step=${this._stepSize}
                  @value-changing=${this._dragEvent}
                  @value-changed=${this._setTemperature}
                ></round-slider>`:g``}
          `,o=ve`
        <svg viewBox="0 0 40 20" class=${C({"current_temp-small":"medium"===this.layout||"small"===this.layout})} >
          <text
            x="50%"
            dx="1"
            y="60%"
            text-anchor="middle"
            style="font-size: 10px;"
            class=${C({"text_temp-small":"medium"===this.layout||"small"===this.layout})}
          >
            ${null===e.attributes.current_temperature||isNaN(e.attributes.current_temperature)?"":ve`${Ue(e.attributes.current_temperature,this.hass.locale)}
            <tspan dx="-3" dy="-6.5" style="font-size: 4px;">
              ${this.hass.config.unit_system.temperature}
            </tspan>`}
          </text>
        </svg>
      `,r=ve`
      <svg id="set-values"
      class=${C({"set-values":"big"===this.layout||"medium"===this.layout,"set-values-small":"small"===this.layout})}>
        <g>
          <text text-anchor="middle" class="set-value">
          <tspan dx="0" dy="0" class="set_value-small">
              Set
            </tspan>
            ${e.state===Le?this.hass.localize("state.default.unavailable"):void 0===this._setTemp||null===this._setTemp?"":Array.isArray(this._setTemp)?1===this._stepSize?ve`
                      ${Ue(this._setTemp[0],this.hass.locale,{maximumFractionDigits:0})} -
                      ${Ue(this._setTemp[1],this.hass.locale,{maximumFractionDigits:0})}
                      `:ve`
                      ${Ue(this._setTemp[0],this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})} -
                      ${Ue(this._setTemp[1],this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
                      `:1===this._stepSize?ve`
                      ${Ue(this._setTemp,this.hass.locale,{maximumFractionDigits:0})}
                      `:ve`
                      ${Ue(this._setTemp,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
                      `}
          </text>
          <text dy="22" text-anchor="middle" id="set-mode">
          ${"big"===this.layout?g`
                  ${e.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`):this.hass.localize(`component.climate.state._.${e.state}`)}
                  ${e.attributes.preset_mode&&e.attributes.preset_mode!==Tn?g`
                        -
                        ${this.hass.localize(`state_attributes.climate.preset_mode.${e.attributes.preset_mode}`)||e.attributes.preset_mode}
                      `:""}
                `:g``}
            </text>
        </g>
      </svg>
    `;return g`
      ${"big"===this.layout?g`
            <ha-card
              class=${C({[t]:!0})}
            >
              <ha-icon-button
                class="more-info"
                .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
                .path=${ge}
                @click=${this._handleMoreInfo}
                tabindex="0"
              ></ha-icon-button>

              <div class="content">
                <div class="controls">
                  <div class="slider">
                    ${a}
                    <div class="slider-center">
                      <div id="temperature">
                        ${o} ${r}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="info" .title=${n}>
                  <div class="modes">
                    ${(e.attributes.hvac_modes||[]).concat().sort(zn).map((e=>this._renderIcon(e,t)))}
                  </div>
                  ${n}
                </div>
              </div>
            </ha-card>
          `:g`
            <ha-card
              class=${C({[t]:!0})}
              @click=${this._handleMoreInfo}
            >
              <div class="content">
                <div
                  class=${C({"controls-small":"small"===this.layout,"controls-medium":"medium"===this.layout})}
                >
                  <div class="slider-small">
                    ${a}
                    <div class="slider-center-small">
                      <div
                        class=${C({"temperature-medium":"medium"===this.layout,"temperature-small":"small"===this.layout})}
                      >
                        ${o}
                      </div>
                      <div
                        class=${C({temp_values:"medium"===this.layout,"temp_values-small":"small"===this.layout})}
                      >
                        ${r}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class=${C({"info-small":"small"===this.layout,"info-medium":"medium"===this.layout})}
                  .title=${n}
                >
                  <div class="modes-small">
                    ${(e.attributes.hvac_modes||[]).concat().sort(zn).map((e=>this._renderIcon(e,t)))}
                  </div>
                  ${n}
                </div>
              </div>
            </ha-card>
          `}
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass||!e.has("hass")&&!e.has("_config"))return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||G(this,this.hass.themes,this._config.theme);const a=this.hass.states[this._config.entity];a&&(t&&t.states[this._config.entity]===a||this._rescale_svg())}},{kind:"method",key:"willUpdate",value:function(e){if(!this.hass||!this._config||!e.has("hass"))return;const t=this.hass.states[this._config.entity];if(!t)return;const n=e.get("hass");n&&n.states[this._config.entity]===t||(this._setTemp=this._getSetTemp(t))}},{kind:"method",key:"_rescale_svg",value:function(){const e=this._card;e&&e.updateComplete.then((()=>{const e=this.shadowRoot.querySelector("#set-values"),t=e.querySelector("g").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`),e.setAttribute("width",`${t.width}`),e.setAttribute("height",`${t.height}`)}))}},{kind:"get",key:"_stepSize",value:function(){const e=this.hass.states[this._config.entity];return e.attributes.target_temp_step?e.attributes.target_temp_step:this.hass.config.unit_system.temperature===Bt?1:.5}},{kind:"method",key:"_getSetTemp",value:function(e){if(e.state!==Le)return e.attributes.target_temp_low&&e.attributes.target_temp_high?[e.attributes.target_temp_low,e.attributes.target_temp_high]:e.attributes.temperature}},{kind:"method",key:"_dragEvent",value:function(e){const t=this.hass.states[this._config.entity];e.detail.low?this._setTemp=[e.detail.low,t.attributes.target_temp_high]:e.detail.high?this._setTemp=[t.attributes.target_temp_low,e.detail.high]:this._setTemp=e.detail.value}},{kind:"method",key:"_setTemperature",value:function(e){const t=this.hass.states[this._config.entity];e.detail.low?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.detail.low,target_temp_high:t.attributes.target_temp_high}):e.detail.high?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:t.attributes.target_temp_low,target_temp_high:e.detail.high}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:e.detail.value})}},{kind:"method",key:"_renderIcon",value:function(e,t){return Gf[e]?g`
      <ha-icon-button
        class=${C({"selected-icon":t===e})}
        .mode=${e}
        @click=${this._handleAction}
        tabindex="0"
        .path=${Gf[e]}
        .label=${this.hass.localize(`component.climate.state._.${e}`)}
      >
      </ha-icon-button>
    `:g``}},{kind:"method",key:"_handleMoreInfo",value:function(){d(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_handleAction",value:function(e){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode})}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        --name-font-size: 1.2rem;
        --brightness-font-size: 1.2rem;
        --rail-border-color: transparent;
      }
      .auto,
      .heat_cool {
        --mode-color: var(--state-climate-auto-color);
      }
      .cool {
        --mode-color: var(--state-climate-cool-color);
      }
      .heat {
        --mode-color: var(--state-climate-heat-color);
      }
      .manual {
        --mode-color: var(--state-climate-manual-color);
      }
      .off {
        --mode-color: var(--state-climate-off-color);
      }
      .fan_only {
        --mode-color: var(--state-climate-fan_only-color);
      }
      .eco {
        --mode-color: var(--state-climate-eco-color);
      }
      .dry {
        --mode-color: var(--state-climate-dry-color);
      }
      .idle {
        --mode-color: var(--state-climate-idle-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .controls {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 16px;
        position: relative;
        align-items: center;
        align-content: center;
      }
      .controls-small {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 9px;
        padding-bottom: 0;
        position: relative;
        align-items: center;
        align-content: center;
      }
      .controls-medium {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 16px;
        padding-bottom: 0;
        position: relative;
        align-items: center;
        align-content: center;
      }

      .slider {
        height: 100%;
        width: 100%;
        position: relative;
        max-width: 250px;
        min-width: 100px;
      }
      .slider-small {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      round-slider {
        --round-slider-path-color: var(--slider-track-color);
        --round-slider-bar-color: var(--mode-color);
        padding-bottom: 10%;
      }

      .slider-center {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        box-sizing: border-box;
        border-radius: 100%;
        left: 20px;
        top: 20px;
        text-align: center;
        overflow-wrap: break-word;
        pointer-events: none;
      }
      .slider-center-small {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        overflow-wrap: break-word;
        pointer-events: none;
        height: 100%;
        width: 100%;
      }

      #temperature {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 50%;
        top: 45%;
        left: 50%;
      }
      .temperature-medium {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 63%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--accent-color);
      }
      .temperature-small {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 60%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--accent-color);
      }
      .current_temp-small {
        margin-top: 11%;
      }
      .temp_values {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
        margin-top: 13%;
      }
      .temp_values-small {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 15%;
        margin-top: 16%;
      }

      .set-values {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 20px;
      }
      .set-values-small {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 16px;
      }

      #set-mode {
        fill: var(--secondary-text-color);
        font-size: 16px;
      }
      .set_value {
        font-size: 15px;
      }
      .set_value-small {
        font-size: 15px;
      }

      .info {
        justify-content: center;
        text-align: center;
        padding: 5px;
        padding-bottom: 44px;
        margin-top: -70px;
        font-size: 1.5rem;
        font-weight: 450;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        font-weight: 450;
        float: left;
        text-overflow: ellipsis;
      }
      .info-medium {
        justify-content: center;
        text-align: center;
        padding: 22px;
        padding-top: 0;
        font-size: var(--name-font-size);
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 185px;
        font-weight: 450;
        float: left;
        text-overflow: ellipsis;
      }
      .info-small {
        justify-content: center;
        text-align: center;
        padding: 15px;
        padding-top: 0;
        font-size: var(--name-font-size);
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 110px;
        font-weight: 450;
        font-size: 14px;
        float: left;
        text-overflow: ellipsis;
      }

      .modes > * {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
      }

      .modes .selected-icon {
        color: var(--mode-color);
      }
      .modes-small {
        display: none;
      }

      text {
        fill: var(--primary-text-color);
      }
      .text_temp-small {
        fill: var(--card-background-color);
      }
    `}}]}}),f);const qf=new Set(["clear-night","cloudy","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),Yf={exceptional:Ee},Qf={humidity:xe,wind_bearing:Se,wind_speed:Se,pressure:Te,visibility:De,precipitation:Ce},Zf=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),Xf=new Set(["hail","rainy","pouring"]),Jf=new Set(["windy","windy-variant"]),Kf=new Set(["snowy","snowy-rainy"]),ep=new Set(["lightning","lightning-rainy"]),tp=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],np=e=>null!=e?(e=>{const t=parseInt(e,10);return isFinite(t)?tp[((t+11.25)/22.5|0)%16]:e})(e):"",ip=(e,t,n)=>{const i=`${Ue(t,e.locale)} ${ap(e,"wind_speed")}`;if(null!==n){const t=np(n);return`${i} (${e.localize(`ui.card.weather.cardinal_direction.${t.toLowerCase()}`)||t})`}return i},ap=(e,t)=>{switch(t){case"visibility":return e.config.unit_system.length||"";case"precipitation":return e.config.unit_system.accumulated_precipitation||"";case"humidity":case"precipitation_probability":return"%";default:return e.config.unit_system[t]||""}},op=(e,t)=>{var n;const i=rp(e,t);if(i)return i;let a,o;if(null!==(n=t.attributes.forecast)&&void 0!==n&&n.length&&void 0!==t.attributes.forecast[0].precipitation&&null!==t.attributes.forecast[0].precipitation)a=t.attributes.forecast[0].precipitation,o="precipitation";else{if(!("humidity"in t.attributes))return;a=t.attributes.humidity,o="humidity"}const r=Qf[o];return g`
    ${r?g`
          <ha-svg-icon class="attr-icon" .path=${r}></ha-svg-icon>
        `:e.localize(`ui.card.weather.attributes.${o}`)}
    ${Ue(a,e.locale,{maximumFractionDigits:1})}
    ${ap(e,o)}
  `},rp=(e,t)=>{var n;if(null===(n=t.attributes.forecast)||void 0===n||!n.length)return;let i,a;const o=(new Date).getDate();for(const e of t.attributes.forecast){if(new Date(e.datetime).getDate()!==o)break;(!a||e.temperature>a)&&(a=e.temperature),(!i||e.templow&&e.templow<i)&&(i=e.templow),e.templow||i&&!(e.temperature<i)||(i=e.temperature)}if(!i&&!a)return;const r=ap(e,"temperature");return g`
    ${a?`${Ue(a,e.locale)} ${r}`:""}
    ${i&&a?" / ":""}
    ${i?`${Ue(i,e.locale)} ${r}`:""}
  `},sp=k`
  .rain {
    fill: var(--weather-icon-rain-color, #30b3ff);
  }
  .sun {
    fill: var(--weather-icon-sun-color, #fdd93c);
  }
  .moon {
    fill: var(--weather-icon-moon-color, #fcf497);
  }
  .cloud-back {
    fill: var(--weather-icon-cloud-back-color, #d4d4d4);
  }
  .cloud-front {
    fill: var(--weather-icon-cloud-front-color, #f9f9f9);
  }
`,lp=(e,t,n)=>{const i=getComputedStyle(t).getPropertyValue(`--weather-icon-${e}`);return i?g`
      <div
        style="background-size: cover;${N({"background-image":i})}"
      ></div>
    `:qf.has(e)?g`${((e,t)=>ve`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${"sunny"===e?ve`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${"clear-night"===e?ve`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${"partlycloudy"===e&&t?ve`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:"partlycloudy"===e?ve`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${Zf.has(e)?ve`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${Xf.has(e)?ve`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        `:""}
  ${"pouring"===e?ve`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${Jf.has(e)?ve`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Kf.has(e)?ve`
          <path
            class="rain"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="rain"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="rain"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        `:""}
  ${ep.has(e)?ve`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`)(e,n)}`:e in Yf?g`
      <ha-svg-icon
        class="weather-icon"
        .path=${Yf[e]}
      ></ha-svg-icon>
    `:void 0},cp=e=>{if(e&&null!=e&&e.length&&(null==e?void 0:e.length)>2){const t=new Date(e[1].datetime);return new Date(e[2].datetime).getTime()-t.getTime()<864e5}};h([x("hui-weather-forecast-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.bb4b2cb1.js"),document.createElement("hui-weather-forecast-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"weather-forecast",entity:Sa(e,1,t,n,["weather"])[0]||""}}},{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",decorators:[v()],key:"_cardSize",value:()=>"big"},{kind:"field",decorators:[p({type:String})],key:"layout",value:()=>"big"},{kind:"field",decorators:[p({type:Boolean,reflect:!0,attribute:"veryverynarrow"})],key:"_veryVeryNarrow",value:()=>!1},{kind:"method",key:"getCardSize",value:function(){var e,t;let n=0;return!1!==(null===(e=this._config)||void 0===e?void 0:e.show_current)&&(n+=2),!1!==(null===(t=this._config)||void 0===t?void 0:t.show_forecast)&&(n+=3),n}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!Ea(e.entity))throw new Error("Invalid entity");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||this._measureCard()}},{kind:"method",key:"updated",value:function(e){if(b(_(n.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");(e.has("hass")&&!t||e.has("_config")&&!i||e.has("hass")&&t.themes!==this.hass.themes||e.has("_config")&&i.theme!==this._config.theme)&&G(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){var e,t,n,i;if(!this._config||!this.hass)return g``;const a=this.hass.states[this._config.entity];if(!a)return g`
        <hui-warning> ${Ta(this.hass)} </hui-warning>
      `;if(a.state===Le)return g`
        <ha-card class="unavailable" @click=${this._handleAction}>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable","entity",`${Je(a)} (${this._config.entity})`)}
        </ha-card>
      `;const o=!1!==(null===(e=this._config)||void 0===e?void 0:e.show_forecast)&&null!==(t=a.attributes.forecast)&&void 0!==t&&t.length?a.attributes.forecast.slice(0,this._veryVeryNarrow?3:5):void 0,r=!o||!1!==(null===(n=this._config)||void 0===n?void 0:n.show_current),s=cp(o);let l;if(s){const e=new Date(o[0].datetime),t=new Date(o[o.length-1].datetime).getTime()-e.getTime();l=t>864e5}const c=lp(a.state,this),d=null!==(i=this._config.name)&&void 0!==i?i:Je(a);return g`
      <ha-card
        class=${C({"ha-card-small":"small"===this.layout,"ha-card-medium":"medium"===this.layout,"ha-card":"big"===this.layout})}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
      >
        ${r?g`
              <div class="content">
                <div
                  class=${C({"icon-image-small":"small"===this.layout,"icon-image-medium":"medium"===this.layout,"icon-image":"big"===this.layout})}
                >
                  ${c||g`
                    <ha-state-icon
                      class="weather-icon"
                      .state=${a}
                    ></ha-state-icon>
                  `}
                </div>
                <div class="info">
                  <div
                    class=${C({"name-state-medium":"medium"===this.layout,"name-state":"big"===this.layout})}
                  >
                    ${"big"===this.layout?g`<div class="state-big">
                            ${rn(this.hass.localize,a,this.hass.locale)}
                          </div>
                          <div class="name" .title=${d}>${d}</div>`:g``}
                  </div>
                  <div class="temp-attribute">
                    <div
                      class=${C({"temp-small":"small"===this.layout,"temp-medium":"medium"===this.layout,temp:"big"===this.layout})}
                    >
                      ${Ue(a.attributes.temperature,this.hass.locale)}&nbsp;<span
                        >${ap(this.hass,"temperature")}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            `:""}
        ${o&&"big"===this.layout?g`
              <div class="forecast">
                ${o.map((e=>this._showValue(e.templow)||this._showValue(e.temperature)?g`
                        <div>
                          <div>
                            ${l?g`
                                  ${new Date(e.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                                  <div class="daynight">
                                    ${void 0===e.daytime||e.daytime?this.hass.localize("ui.card.weather.day"):this.hass.localize("ui.card.weather.night")}<br />
                                  </div>
                                `:s?g`
                                  ${Kt(new Date(e.datetime),this.hass.locale)}
                                `:g`
                                  ${new Date(e.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                                `}
                          </div>
                          ${this._showValue(e.condition)?g`
                                <div class="forecast-image-icon">
                                  ${lp(e.condition,this,!(e.daytime||void 0===e.daytime))}
                                </div>
                              `:""}
                          <div class="temp">
                            ${this._showValue(e.temperature)?g`${Ue(e.temperature,this.hass.locale)}°`:"—"}
                          </div>
                          <div class="templow">
                            ${this._showValue(e.templow)?g`${Ue(e.templow,this.hass.locale)}°`:s?"":"—"}
                          </div>
                        </div>
                      `:""))}
              </div>
            `:""}
      </ha-card>
    `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"method",key:"_measureCard",value:function(){if(!this.isConnected)return;const e=this.shadowRoot.querySelector("ha-card");e&&(e.offsetWidth<375?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.offsetWidth<300?this.setAttribute("verynarrow",""):this.removeAttribute("verynarrow"),this._veryVeryNarrow=e.offsetWidth<245)}},{kind:"method",key:"_showValue",value:function(e){return null!=e}},{kind:"get",static:!0,key:"styles",value:function(){return[sp,k`
        ha-card {
          cursor: pointer;
          outline: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }
        .ha-card-small {
          cursor: pointer;
          outline: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          border-radius: 1.5rem;
          aspect-ratio: 1;
          padding: 0;
        }

        .content {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }

        .icon-image {
          display: flex;
          align-items: center;
          min-width: 64px;
          margin-right: 16px;
        }
        .icon-image-small > * {
          height: 45px;
          margin-top: 8%;
        }

        .icon-image-medium > * {
          height: 50px;
          width: 50px;
        }
        .icon-image > * {
          flex: 0 0 64px;
          height: 64px;
        }

        .weather-icon {
          --mdc-icon-size: 64px;
        }

        .info {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          overflow: hidden;
        }
        .temp-attribute {
          text-align: right;
        }

        .temp-attribute .temp {
          position: relative;
          margin-right: 24px;
        }

        .temp-attribute .temp span {
          position: absolute;
          font-size: 24px;
          top: 1px;
        }
        .temp-small {
          font-weight: 450;
        }

        .state-big,
        .temp-attribute .temp {
          font-size: 20px;
          line-height: 1.2;
        }

        .name,
        .attribute {
          font-size: 14px;
          line-height: 1;
        }

        .name-state {
          overflow: hidden;
          padding-right: 12px;
          width: 100%;
        }

        .name,
        .state-big {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .state-medium {
          font-size: 1rem;
          font-weight: 450;
          margin-bottom: 5%;
        }
        .temp-medium {
          font-size: 1.2rem;
          font-weight: 450;
        }

        .attribute {
          white-space: nowrap;
        }

        .forecast {
          display: flex;
          justify-content: space-around;
          padding-top: 16px;
        }

        .forecast > div {
          text-align: center;
        }

        .forecast .icon,
        .forecast .temp {
          margin: 4px 0;
        }

        .forecast .temp {
          font-size: 16px;
        }

        .forecast-image-icon {
          padding-top: 4px;
          padding-bottom: 4px;
          display: flex;
          justify-content: center;
        }

        .forecast-image-icon > * {
          width: 40px;
          height: 40px;
          --mdc-icon-size: 40px;
        }

        .forecast-icon {
          --mdc-icon-size: 40px;
        }

        .attr-icon {
          --mdc-icon-size: 20px;
        }

        .attribute,
        .templow,
        .daynight,
        .name {
          color: var(--secondary-text-color);
        }

        .unavailable {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          padding: 10px 20px;
          text-align: center;
        }

        /* ============= NARROW ============= */

        :host([narrow]) .icon-image {
          min-width: 52px;
        }

        :host([narrow]) .weather-image {
          flex: 0 0 52px;
          width: 52px;
        }

        :host([narrow]) .icon-image .weather-icon {
          --mdc-icon-size: 52px;
        }

        :host([narrow]) .state,
        :host([narrow]) .temp-attribute .temp {
          font-size: 22px;
        }

        :host([narrow]) .temp-attribute .temp {
          margin-right: 16px;
        }

        :host([narrow]) .temp span {
          top: 1px;
          font-size: 16px;
        }

        /* ============= VERY NARROW ============= */

        :host([veryNarrow]) .name,
        :host([veryNarrow]) .attribute {
          display: none;
        }

        :host([veryNarrow]) .info {
          flex-direction: column;
          align-items: flex-start;
        }

        :host([veryNarrow]) .name-state {
          padding-right: 0;
        }

        /* ============= VERY VERY NARROW ============= */

        :host([veryVeryNarrow]) .info {
          align-items: center;
        }

        :host([veryVeryNarrow]) .content {
          flex-wrap: wrap;
          justify-content: center;
          flex-direction: column;
        }

        :host([veryVeryNarrow]) .icon-image {
          margin-right: 0;
        }
      `]}}]}}),f);const dp=new Set(["entity","entities","button","entity-button","glance","grid","light","sensor","thermostat","weather-forecast"]),up={"alarm-panel":()=>import("./c.8e698890.js"),area:()=>import("./c.c82497a0.js"),calendar:()=>Promise.resolve().then((function(){return ff})),conditional:()=>import("./c.7ee78497.js"),"empty-state":()=>import("./c.2c320ded.js"),"energy-carbon-consumed-gauge":()=>import("./c.8b94e0f0.js"),"energy-date-selection":()=>import("./c.c9c63083.js"),"energy-devices-graph":()=>import("./c.2443fc39.js"),"energy-distribution":()=>import("./c.3e6f3402.js"),"energy-gas-graph":()=>import("./c.d3e32ee3.js"),"energy-grid-neutrality-gauge":()=>import("./c.c05ccf8c.js"),"energy-solar-consumed-gauge":()=>import("./c.923bf519.js"),"energy-solar-graph":()=>import("./c.465af51f.js"),"energy-sources-table":()=>import("./c.f840a33a.js"),"energy-usage-graph":()=>import("./c.1351499d.js"),"entity-filter":()=>import("./c.f3d309fa.js"),error:()=>import("./c.b575e31f.js"),gauge:()=>import("./c.6ad21642.js"),"history-graph":()=>import("./c.58839164.js"),"horizontal-stack":()=>import("./c.61a768a0.js"),humidifier:()=>import("./c.00e57434.js"),iframe:()=>import("./c.3f1238f9.js"),logbook:()=>import("./c.f4566cc8.js"),map:()=>import("./c.a5c26362.js"),markdown:()=>import("./c.d3c8fd8a.js"),"media-control":()=>import("./c.1e037272.js"),"picture-elements":()=>import("./c.c0fb9b6d.js"),"picture-entity":()=>import("./c.9d9de58b.js"),"picture-camera":()=>import("./c.16472735.js"),"picture-glance":()=>import("./c.09b5b241.js"),picture:()=>import("./c.7b40b377.js"),"plant-status":()=>import("./c.49588ec3.js"),"safe-mode":()=>import("./c.c68476a9.js"),"shopping-list":()=>import("./c.c0b01910.js"),starting:()=>import("./c.83d6c141.js"),"statistics-graph":()=>import("./c.6c2124ab.js"),"vertical-stack":()=>import("./c.5ad5d18b.js")},hp=e=>ka("card",e,dp,up,void 0,void 0),fp=e=>_a("card",e,dp,up,void 0,void 0),pp=e=>wa(e,"card",dp,up);function vp(e){const t=Mp(e);return"HUI-CONDITIONAL-ELEMENT"!==t.tagName&&t.classList.add("element"),e.style&&Object.keys(e.style).forEach((n=>{t.style.setProperty(n,e.style[n])})),t}function gp(e,t){return e.every((e=>{const n=t.states[e.entity]?t.states[e.entity].state:Le;return e.state?n===e.state:n!==e.state_not}))}function mp(e){return e.every((e=>e.entity&&(e.state||e.state_not)))}class yp extends HTMLElement{constructor(...e){super(...e),U(this,"_hass",void 0),U(this,"_config",void 0),U(this,"_elements",[])}setConfig(e){if(!(e.conditions&&Array.isArray(e.conditions)&&e.elements&&Array.isArray(e.elements)&&mp(e.conditions)))throw new Error("Invalid configuration");this._elements.length>0&&(this._elements.forEach((e=>{e.parentElement&&e.parentElement.removeChild(e)})),this._elements=[]),this._config=e,this._config.elements.forEach((e=>{this._elements.push(vp(e))})),this.updateElements()}set hass(e){this._hass=e,this.updateElements()}updateElements(){if(!this._hass||!this._config)return;const e=gp(this._config.conditions,this._hass);this._elements.forEach((t=>{e?(t.hass=this._hass,t.parentElement||this.appendChild(t)):t.parentElement&&t.parentElement.removeChild(t)}))}}function bp(e,t,n,i){if(!n||!n.action||"none"===n.action)return"";let a=(i?e.localize("ui.panel.lovelace.cards.picture-elements.hold"):e.localize("ui.panel.lovelace.cards.picture-elements.tap"))+" ";switch(n.action){case"navigate":a+=`${e.localize("ui.panel.lovelace.cards.picture-elements.navigate_to","location",n.navigation_path)}`;break;case"url":a+=`${e.localize("ui.panel.lovelace.cards.picture-elements.url","url_path",n.url_path)}`;break;case"toggle":a+=`${e.localize("ui.panel.lovelace.cards.picture-elements.toggle","name",t)}`;break;case"call-service":a+=`${e.localize("ui.panel.lovelace.cards.picture-elements.call_service","name",n.service)}`;break;case"more-info":a+=`${e.localize("ui.panel.lovelace.cards.picture-elements.more_info","name",t)}`}return a}customElements.define("hui-conditional-element",yp);const _p=(e,t)=>{if(null===t.title)return"";if(t.title)return t.title;let n="",i="";if(t.entity&&(n=t.entity in e.states?Je(e.states[t.entity]):t.entity),!t.tap_action&&!t.hold_action)return n;const a=t.tap_action?bp(e,n,t.tap_action,!1):"",o=t.hold_action?bp(e,n,t.hold_action,!0):"";return i=a+(a&&o?"\n":"")+o,i};h([x("hui-icon-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.icon)throw Error("Icon required");this._config={hold_action:{action:"more-info"},...e}}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?g`
      <ha-icon
        .icon=${this._config.icon}
        .title=${_p(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
      ></ha-icon>
    `:g``}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        cursor: pointer;
      }
      ha-icon:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `}}]}}),f);const kp=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(`${e} is not a number`);return t};function wp(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:kp(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:kp(t[0]),h:1}:{w:kp(t[0]),h:kp(t[1])}}catch(e){}return null}const xp=2,Ep="hls",Sp="web_rtc",Tp=async(e,t,n,i)=>{const a=await(async(e,t,n,i,a,...o)=>{let r=i[e];r||(r=i[e]={});const s=r[a];if(s)return s;const l=n(i,a,...o);return r[a]=l,l.then((()=>setTimeout((()=>{r[a]=void 0}),t)),(()=>{r[a]=void 0})),l})("_cameraTmbUrl",9e3,Dp,e,t);return`${a}&width=${n}&height=${i}`},Dp=async(e,t)=>{const n=await Ut(e,`/api/camera_proxy/${t}`);return e.hassUrl(n.path)},Cp=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),Ap=(e,t,n)=>e.callWS({type:"camera/update_prefs",entity_id:t,...n});h([x("ha-hls-player")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"url",value:void 0},{kind:"field",decorators:[p({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[z("video")],key:"_videoEl",value:void 0},{kind:"field",decorators:[v()],key:"_error",value:void 0},{kind:"field",decorators:[v()],key:"_errorIsFatal",value:()=>!1},{kind:"field",key:"_hlsPolyfillInstance",value:void 0},{kind:"field",key:"_exoPlayer",value:()=>!1},{kind:"field",static:!0,key:"streamCount",value:()=>0},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),n.streamCount+=1,this.hasUpdated&&(this._resetError(),this._startHls())}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),n.streamCount-=1,this._cleanUp()}},{kind:"method",key:"render",value:function(){return g`
      ${this._error?g`<ha-alert
            alert-type="error"
            class=${this._errorIsFatal?"fatal":"retry"}
          >
            ${this._error}
          </ha-alert>`:""}
      ${this._errorIsFatal?"":g`<video
            ?autoplay=${this.autoPlay}
            .muted=${this.muted}
            ?playsinline=${this.playsInline}
            ?controls=${this.controls}
          ></video>`}
    `}},{kind:"method",key:"updated",value:function(e){b(_(n.prototype),"updated",this).call(this,e);e.has("url")&&(this._cleanUp(),this._resetError(),this._startHls())}},{kind:"method",key:"_startHls",value:async function(){var e;const t=fetch(this.url),n=(await import("./c.1ba5a5d9.js")).default;if(!this.isConnected)return;let i=n.isSupported();if(i||(i=""!==this._videoEl.canPlayType("application/vnd.apple.mpegurl")),!i)return void this._setFatalError(this.hass.localize("ui.components.media-browser.video_not_supported"));const a=this.allowExoPlayer&&(null===(e=this.hass.auth.external)||void 0===e?void 0:e.config.hasExoPlayer),o=await(await t).text();if(!this.isConnected)return;const r=/#EXT-X-STREAM-INF:.*?(?:CODECS=".*?(hev1|hvc1)?\..*?".*?)?(?:\n|\r\n)(.+)/g,s=r.exec(o),l=r.exec(o);let c;c=null!==s&&null===l?new URL(s[2],this.url).href:this.url,a&&null!==s&&void 0!==s[1]?this._renderHLSExoPlayer(c):n.isSupported()?this._renderHLSPolyfill(this._videoEl,n,c):this._renderHLSNative(this._videoEl,c)}},{kind:"method",key:"_renderHLSExoPlayer",value:async function(e){this._exoPlayer=!0,window.addEventListener("resize",this._resizeExoPlayer),this.updateComplete.then((()=>Gt())).then(this._resizeExoPlayer),this._videoEl.style.visibility="hidden",await this.hass.auth.external.sendMessage({type:"exoplayer/play_hls",payload:{url:new URL(e,window.location.href).toString(),muted:this.muted}})}},{kind:"field",key:"_resizeExoPlayer",value(){return()=>{if(!this._videoEl)return;const e=this._videoEl.getBoundingClientRect();this.hass.auth.external.fireMessage({type:"exoplayer/resize",payload:{left:e.left,top:e.top,right:e.right,bottom:e.bottom}})}}},{kind:"method",key:"_isLLHLSSupported",value:function(){if(n.streamCount<=2)return!0;if(!("performance"in window)||0===performance.getEntriesByType("resource").length)return!1;const e=performance.getEntriesByType("resource")[0];return"nextHopProtocol"in e&&"h2"===e.nextHopProtocol}},{kind:"method",key:"_renderHLSPolyfill",value:async function(e,t,n){const i=new t({backBufferLength:60,fragLoadingTimeOut:3e4,manifestLoadingTimeOut:3e4,levelLoadingTimeOut:3e4,maxLiveSyncPlaybackRate:2,lowLatencyMode:this._isLLHLSSupported()});this._hlsPolyfillInstance=i,i.attachMedia(e),i.on(t.Events.MEDIA_ATTACHED,(()=>{this._resetError(),i.loadSource(n)})),i.on(t.Events.FRAG_LOADED,((e,t)=>{this._resetError()})),i.on(t.Events.ERROR,((e,n)=>{if(n.fatal)if(n.type===t.ErrorTypes.NETWORK_ERROR){switch(n.details){case t.ErrorDetails.MANIFEST_LOAD_ERROR:{let e="Error starting stream, see logs for details";void 0!==n.response&&void 0!==n.response.code&&(n.response.code>=500?e+=" (Server failure)":n.response.code>=400?e+=" (Stream never started)":e+=" ("+n.response.code+")"),this._setRetryableError(e);break}case t.ErrorDetails.MANIFEST_LOAD_TIMEOUT:this._setRetryableError("Timeout while starting stream");break;default:this._setRetryableError("Stream network error")}i.startLoad()}else n.type===t.ErrorTypes.MEDIA_ERROR?(this._setRetryableError("Error with media stream contents"),i.recoverMediaError()):this._setFatalError("Error playing stream")}))}},{kind:"method",key:"_renderHLSNative",value:async function(e,t){e.src=t,e.addEventListener("loadedmetadata",(()=>{e.play()}))}},{kind:"method",key:"_cleanUp",value:function(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0),this._exoPlayer&&(window.removeEventListener("resize",this._resizeExoPlayer),this.hass.auth.external.fireMessage({type:"exoplayer/stop"}),this._exoPlayer=!1),this._videoEl&&(this._videoEl.removeAttribute("src"),this._videoEl.load())}},{kind:"method",key:"_resetError",value:function(){this._error=void 0,this._errorIsFatal=!1}},{kind:"method",key:"_setFatalError",value:function(e){this._error=e,this._errorIsFatal=!0}},{kind:"method",key:"_setRetryableError",value:function(e){this._error=e,this._errorIsFatal=!1}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host,
      video {
        display: block;
      }

      video {
        width: 100%;
        max-height: var(--video-max-height, calc(100vh - 97px));
      }

      .fatal {
        display: block;
        padding: 100px 16px;
      }

      .retry {
        display: block;
      }
    `}}]}}),f),h([x("ha-web-rtc-player")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"entityid",value:void 0},{kind:"field",decorators:[p({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:()=>!1},{kind:"field",decorators:[v()],key:"_error",value:void 0},{kind:"field",decorators:[z("#remote-stream")],key:"_videoEl",value:void 0},{kind:"field",key:"_peerConnection",value:void 0},{kind:"field",key:"_remoteStream",value:void 0},{kind:"method",key:"render",value:function(){return this._error?g`<ha-alert alert-type="error">${this._error}</ha-alert>`:g`
      <video
        id="remote-stream"
        ?autoplay=${this.autoPlay}
        .muted=${this.muted}
        ?playsinline=${this.playsInline}
        ?controls=${this.controls}
      ></video>
    `}},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._startWebRtc()}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._cleanUp()}},{kind:"method",key:"updated",value:function(e){e.has("entityid")&&this._videoEl&&this._startWebRtc()}},{kind:"method",key:"_startWebRtc",value:async function(){this._error=void 0;const e=new RTCPeerConnection;e.createDataChannel("dataSendChannel"),e.addTransceiver("audio",{direction:"recvonly"}),e.addTransceiver("video",{direction:"recvonly"});const t=await e.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!0});let n;await e.setLocalDescription(t);try{n=await((e,t,n)=>e.callWS({type:"camera/web_rtc_offer",entity_id:t,offer:n}))(this.hass,this.entityid,t.sdp)}catch(t){return this._error="Failed to start WebRTC stream: "+t.message,void e.close()}const i=new MediaStream;e.addEventListener("track",(e=>{i.addTrack(e.track),this._videoEl.srcObject=i})),this._remoteStream=i;const a=new RTCSessionDescription({type:"answer",sdp:n.answer});try{await e.setRemoteDescription(a)}catch(t){return this._error="Failed to connect WebRTC stream: "+t.message,void e.close()}this._peerConnection=e}},{kind:"method",key:"_cleanUp",value:function(){this._remoteStream&&(this._remoteStream.getTracks().forEach((e=>{e.stop()})),this._remoteStream=void 0),this._videoEl&&(this._videoEl.removeAttribute("src"),this._videoEl.load()),this._peerConnection&&(this._peerConnection.close(),this._peerConnection=void 0)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host,
      video {
        display: block;
      }

      video {
        width: 100%;
        max-height: var(--video-max-height, calc(100vh - 97px));
      }
    `}}]}}),f),h([x("ha-camera-stream")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[p({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[p({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[v()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[v()],key:"_url",value:void 0},{kind:"field",decorators:[v()],key:"_connected",value:()=>!1},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("stateObj")&&!this._shouldRenderMJPEG&&this.stateObj&&(null===(t=e.get("stateObj"))||void 0===t?void 0:t.entity_id)!==this.stateObj.entity_id&&this.stateObj.attributes.frontend_stream_type===Ep&&(this._forceMJPEG=void 0,this._url=void 0,this._getStreamUrl())}},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),this._connected=!0}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._connected=!1}},{kind:"method",key:"render",value:function(){return this.stateObj?(this._shouldRenderMJPEG,g` <img
        .src=${this._connected?(e=this.stateObj,`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`):""}
        .alt=${`Preview of the ${Je(this.stateObj)} camera.`}
      />`):g``;var e}},{kind:"get",key:"_shouldRenderMJPEG",value:function(){return this._forceMJPEG===this.stateObj.entity_id||(!Ze(this.stateObj,2)||(this.stateObj.attributes.frontend_stream_type===Sp?"undefined"==typeof RTCPeerConnection:!ht(this.hass,"stream")))}},{kind:"method",key:"_getStreamUrl",value:async function(){try{const{url:e}=await(async(e,t,n)=>{const i={type:"camera/stream",entity_id:t};n&&(i.format=n);const a=await e.callWS(i);return a.url=e.hassUrl(a.url),a})(this.hass,this.stateObj.entity_id);this._url=e}catch(e){console.error(e),this._forceMJPEG=this.stateObj.entity_id}}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host,
      img {
        display: block;
      }

      img {
        width: 100%;
        border-radius: 1.5rem;
      }
    `}}]}}),f);var $p=function(e){return e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Error=3]="Error",e}($p||{});h([x("hui-image")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p()],key:"entity",value:void 0},{kind:"field",decorators:[p()],key:"image",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateImage",value:void 0},{kind:"field",decorators:[p()],key:"cameraImage",value:void 0},{kind:"field",decorators:[p()],key:"cameraView",value:void 0},{kind:"field",decorators:[p()],key:"aspectRatio",value:void 0},{kind:"field",decorators:[p()],key:"filter",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateFilter",value:void 0},{kind:"field",decorators:[p()],key:"darkModeImage",value:void 0},{kind:"field",decorators:[p()],key:"darkModeFilter",value:void 0},{kind:"field",decorators:[v()],key:"_imageVisible",value:()=>!1},{kind:"field",decorators:[v()],key:"_loadState",value:void 0},{kind:"field",decorators:[v()],key:"_cameraImageSrc",value:void 0},{kind:"field",decorators:[v()],key:"_loadedImageSrc",value:void 0},{kind:"field",key:"_intersectionObserver",value:void 0},{kind:"field",key:"_lastImageHeight",value:void 0},{kind:"field",key:"_cameraUpdater",value:void 0},{kind:"field",key:"_ratio",value:()=>null},{kind:"method",key:"connectedCallback",value:function(){b(_(n.prototype),"connectedCallback",this).call(this),void 0===this._loadState&&(this._loadState=$p.Loading),this.cameraImage&&"live"!==this.cameraView&&this._startIntersectionObserverOrUpdates()}},{kind:"method",key:"disconnectedCallback",value:function(){b(_(n.prototype),"disconnectedCallback",this).call(this),this._stopUpdateCameraInterval(),this._stopIntersectionObserver(),this._imageVisible=void 0}},{kind:"method",key:"handleIntersectionCallback",value:function(e){this._imageVisible=e[0].isIntersecting}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("hass")){const t=e.get("hass");this._shouldStartCameraUpdates(t)?this._startIntersectionObserverOrUpdates():this.hass.connected||(this._stopUpdateCameraInterval(),this._stopIntersectionObserver(),this._loadState=$p.Loading,this._cameraImageSrc=void 0,this._loadedImageSrc=void 0)}e.has("_imageVisible")&&(this._imageVisible?this._shouldStartCameraUpdates()&&this._startUpdateCameraInterval():this._stopUpdateCameraInterval()),e.has("aspectRatio")&&(this._ratio=this.aspectRatio?wp(this.aspectRatio):null),this._loadState!==$p.Loading||this.cameraImage||(this._loadState=$p.Loaded)}},{kind:"method",key:"render",value:function(){if(!this.hass)return g``;const e=Boolean(this._ratio&&this._ratio.w>0&&this._ratio.h>0),t=this.entity?this.hass.states[this.entity]:void 0,n=t?t.state:Le;let i,a,o=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?a=this.hass.states[this.cameraImage]:i=this._cameraImageSrc;else if(this.stateImage){const e=this.stateImage[n];e?i=e:(i=this.image,o=!0)}else i=this.darkModeImage&&this.hass.themes.darkMode?this.darkModeImage:this.image;i&&(i=this.hass.hassUrl(i));let r=this.filter||"";if(this.hass.themes.darkMode&&this.darkModeFilter&&(r+=this.darkModeFilter),this.stateFilter&&this.stateFilter[n]&&(r+=this.stateFilter[n]),!r&&this.entity){r=(!t||et.includes(n))&&o?"grayscale(100%)":""}return g`
      <div
        style=${N({paddingBottom:e?`${(100*this._ratio.h/this._ratio.w).toFixed(2)}%`:void 0,backgroundImage:e&&this._loadedImageSrc?`url("${this._loadedImageSrc}")`:void 0,filter:void(this._loadState===$p.Loaded||this.cameraView)})}
        class="container ${C({ratio:e})}"
      >
        ${this.cameraImage&&"live"===this.cameraView?g`
              <ha-camera-stream
                muted
                .hass=${this.hass}
                .stateObj=${a}
              ></ha-camera-stream>
            `:void 0===i?g``:g`
              <img
                id="image"
                src=${i}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${N({display:e||this._loadState===$p.Loaded?"block":"none"})}
              />
            `}
        ${this._loadState===$p.Error?g`<div
              id="brokenImage"
              style=${N({height:e?void 0:`${this._lastImageHeight||"100"}px`})}
            ></div>`:"live"===this.cameraView||void 0!==i&&this._loadState!==$p.Loading?"":g`<div
              class="progress-container"
              style=${N({height:e?void 0:`${this._lastImageHeight||"100"}px`})}
            >
              <ha-circular-progress
                class="render-spinner"
                active
                size="small"
              ></ha-circular-progress>
            </div>`}
      </div>
    `}},{kind:"method",key:"_shouldStartCameraUpdates",value:function(e){return!(e&&e.connected===this.hass.connected||!this.hass.connected||"live"===this.cameraView)}},{kind:"method",key:"_startIntersectionObserverOrUpdates",value:function(){"IntersectionObserver"in window?(this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this))),this._intersectionObserver.observe(this)):(this._imageVisible=!0,this._startUpdateCameraInterval())}},{kind:"method",key:"_stopIntersectionObserver",value:function(){this._intersectionObserver&&this._intersectionObserver.disconnect()}},{kind:"method",key:"_startUpdateCameraInterval",value:function(){this._stopUpdateCameraInterval(),this._updateCameraImageSrc(),this.cameraImage&&this.isConnected&&(this._cameraUpdater=window.setInterval((()=>this._updateCameraImageSrcAtInterval()),1e4))}},{kind:"method",key:"_stopUpdateCameraInterval",value:function(){this._cameraUpdater&&(clearInterval(this._cameraUpdater),this._cameraUpdater=void 0)}},{kind:"method",key:"_onImageError",value:function(){this._loadState=$p.Error}},{kind:"method",key:"_onImageLoad",value:async function(e){this._loadState=$p.Loaded;const t=e.target;this._ratio&&this._ratio.w>0&&this._ratio.h>0&&(this._loadedImageSrc=t.src),await this.updateComplete,this._lastImageHeight=t.offsetHeight}},{kind:"method",key:"_updateCameraImageSrcAtInterval",value:async function(){return this._loadState===$p.Loading&&this._onImageError(),this._updateCameraImageSrc()}},{kind:"method",key:"_updateCameraImageSrc",value:async function(){if(!this.hass||!this.cameraImage)return;if(!this.hass.states[this.cameraImage])return void this._onImageError();const e=this.clientWidth||640;let t,n=Math.ceil(e*devicePixelRatio);this._lastImageHeight?t=Math.ceil(this._lastImageHeight*devicePixelRatio):this._ratio&&this._ratio.w>0&&this._ratio.h>0?t=Math.ceil(n*(this._ratio.h/this._ratio.w)):(n*=2,t=Math.ceil(.5625*n)),this._cameraImageSrc=await Tp(this.hass,this.cameraImage,n,t),void 0===this._cameraImageSrc&&this._onImageError()}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        display: block;
      }

      .container {
        transition: filter 0.2s linear;
      }

      img {
        display: block;
        height: auto;
        width: 100%;
      }

      .progress-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
        background-position: center;
        background-size: cover;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .ratio img {
        visibility: hidden;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `}}]}}),f),h([x("hui-image-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e)throw Error("Invalid configuration");this._config={hold_action:{action:"more-info"},...e},this.classList.toggle("clickable",this._config.tap_action&&"none"!==this._config.tap_action.action)}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?g`
      <hui-image
        .hass=${this.hass}
        .entity=${this._config.entity}
        .image=${this._config.image}
        .stateImage=${this._config.state_image}
        .cameraImage=${this._config.entity}
        .filter=${this._config.filter}
        .stateFilter=${this._config.state_filter}
        .title=${_p(this.hass,this._config)}
        .aspectRatio=${this._config.aspect_ratio}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
      ></hui-image>
    `:g``}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
      hui-image:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}}]}}),f);const Rp=D((e=>class extends e{fire(e,t,n){return d((n=n||{}).node||this,e,t,n)}}));h([x("ha-progress-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"progress",value:()=>!1},{kind:"field",decorators:[p({type:Boolean})],key:"raised",value:()=>!1},{kind:"field",decorators:[z("mwc-button",!0)],key:"_button",value:void 0},{kind:"method",key:"render",value:function(){return g`
      <mwc-button
        ?raised=${this.raised}
        .disabled=${this.disabled||this.progress}
        @click=${this._buttonTapped}
      >
        <slot></slot>
      </mwc-button>
      ${this.progress?g`<div class="progress">
            <ha-circular-progress size="small" active></ha-circular-progress>
          </div>`:""}
    `}},{kind:"method",key:"actionSuccess",value:function(){this._tempClass("success")}},{kind:"method",key:"actionError",value:function(){this._tempClass("error")}},{kind:"method",key:"_tempClass",value:function(e){this._button.classList.add(e),setTimeout((()=>{this._button.classList.remove(e)}),1e3)}},{kind:"method",key:"_buttonTapped",value:function(e){this.progress&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        outline: none;
        display: inline-block;
        position: relative;
      }

      mwc-button {
        transition: all 1s;
      }

      mwc-button.success {
        --mdc-theme-primary: white;
        background-color: var(--success-color);
        transition: none;
        border-radius: 4px;
      }

      mwc-button[raised].success {
        --mdc-theme-primary: var(--success-color);
        --mdc-theme-on-primary: white;
      }

      mwc-button.error {
        --mdc-theme-primary: white;
        background-color: var(--error-color);
        transition: none;
        border-radius: 4px;
      }

      mwc-button[raised].error {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .progress {
        bottom: 0;
        margin-top: 4px;
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;
      }
    `}}]}}),f);class Ip extends(Rp(T)){static get template(){return S`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}},confirmation:{type:String}}}callService(){this.progress=!0;const e=this,t={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then((()=>{e.progress=!1,e.$.progress.actionSuccess(),t.success=!0}),(()=>{e.progress=!1,e.$.progress.actionError(),t.success=!1})).then((()=>{e.fire("hass-service-called",t)}))}buttonTapped(){this.confirmation?_t(this,{text:this.confirmation,confirm:()=>this.callService()}):this.callService()}}customElements.define("ha-call-service-button",Ip),h([x("hui-service-button-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"field",key:"_domain",value:void 0},{kind:"field",key:"_service",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.service)throw Error("Service required");if([this._domain,this._service]=e.service.split(".",2),!this._domain)throw Error("Service does not have a service domain");if(!this._service)throw Error("Service does not have a service name");this._config=e}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?g`
      <ha-call-service-button
        .hass=${this.hass}
        .domain=${this._domain}
        .service=${this._service}
        .serviceData=${this._config.service_data}
        >${this._config.title}</ha-call-service-button
      >
    `:g``}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `}}]}}),f),h([x("hui-state-badge-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw Error("Entity required");this._config={hold_action:{action:"more-info"},...e}}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${e}
        .title=${void 0===this._config.title?Je(e):null===this._config.title?"":this._config.title}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
      ></ha-state-label-badge>
    `:g`
        <hui-warning-element
          .label=${Ta(this.hass,this._config.entity)}
        ></hui-warning-element>
      `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}}]}}),f),h([x("hui-state-icon-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw Error("Entity required");this._config={state_color:!0,hold_action:{action:"more-info"},...e}}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?g`
      <state-badge
        .stateObj=${e}
        .title=${_p(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
        .overrideIcon=${this._config.icon}
        .stateColor=${this._config.state_color}
      ></state-badge>
    `:g`
        <hui-warning-element
          .label=${Ta(this.hass,this._config.entity)}
        ></hui-warning-element>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        cursor: pointer;
      }
      state-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}}]}}),f),h([x("hui-state-label-element")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[v()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw Error("Entity required");this._config={hold_action:{action:"more-info"},...e}}},{kind:"method",key:"shouldUpdate",value:function(e){return _f(this,e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g``;const e=this.hass.states[this._config.entity];return e?this._config.attribute&&!(this._config.attribute in e.attributes)?g`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.attribute_not_found","attribute",this._config.attribute,"entity",this._config.entity)}
        ></hui-warning-element>
      `:g`
      <div
        .title=${_p(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${ca({hasHold:ha(this._config.hold_action),hasDoubleClick:ha(this._config.double_tap_action)})}
        tabindex=${V(ha(this._config.tap_action)?"0":void 0)}
      >
        ${this._config.prefix}${this._config.attribute?e.attributes[this._config.attribute]:rn(this.hass.localize,e,this.hass.locale)}${this._config.suffix}
      </div>
    `:g`
        <hui-warning-element
          .label=${Ta(this.hass,this._config.entity)}
        ></hui-warning-element>
      `}},{kind:"method",key:"_handleAction",value:function(e){ua(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return k`
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
      div:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `}}]}}),f);const Op=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]),Mp=e=>_a("element",e,Op);let zp=h(null,(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",key:"_detachedChild",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){b(_(n.prototype),"update",this).call(this,e);const t=this.stateObj,i=this.hass;if(!t||!i)return void(this.lastChild&&(this._detachedChild=this.lastChild,this.removeChild(this.lastChild)));let a;if(this._detachedChild&&(this.appendChild(this._detachedChild),this._detachedChild=void 0),t.attributes&&"custom_ui_more_info"in t.attributes)a=t.attributes.custom_ui_more_info;else{const e=(e=>{const t=Fe(e);return na(t)})(t);ia(e),a="hidden"===e?void 0:`more-info-${e}`}a&&gn(this,a.toUpperCase(),{hass:i,stateObj:t})}}]}}),w);customElements.define("more-info-content",zp);const jp=["camera","configurator"],Np=["scene","automation"],Pp=[""];let Hp=h([x("ha-more-info-dialog")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[p({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[p({type:Boolean,reflect:!0})],key:"large",value:()=>!1},{kind:"field",decorators:[v()],key:"_entityId",value:void 0},{kind:"field",decorators:[v()],key:"_currTabIndex",value:()=>0},{kind:"method",key:"showDialog",value:function(e){this._entityId=e.entityId,this._entityId?this.large=!1:this.closeDialog()}},{kind:"method",key:"closeDialog",value:function(){this._entityId=void 0,this._currTabIndex=0,d(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"shouldShowEditIcon",value:function(e,t){return!(!Np.includes(e)||!t.attributes.id)||(!!Pp.includes(e)||"person"===e&&"false"!==t.attributes.editable)}},{kind:"method",key:"render",value:function(){if(!this._entityId)return g``;const e=this._entityId,t=this.hass.states[e];if(!t)return g``;const n=Ge(e),i=Je(t)||" ";return g`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        .heading=${i}
        hideActions
        data-domain=${n}
      >
        <div slot="heading" class="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              id="cancel"
              dialogAction="cancel"
              .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
              .path=${Ae}
            ></ha-icon-button>
            <div slot="title" class="main-title" .title=${i}>${i}</div>
            <!-- ${this.hass.user.is_admin&&this.shouldShowEditIcon(n,t)?g`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.more_info_control.settings")}
                    .path=${$e}
                    @click=${this._gotoSettings}
                  ></ha-icon-button>
                `:""}
            ${this.shouldShowEditIcon(n,t)?g`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.more_info_control.edit")}
                    .path=${Re}
                    @click=${this._gotoEdit}
                  ></ha-icon-button>
                `:""} -->
          </ha-header-bar>
          ${mt.includes(n)&&(this._computeShowHistoryComponent(e)||this._computeShowLogBookComponent(e))?g`
                <mwc-tab-bar
                  .activeIndex=${this._currTabIndex}
                  @MDCTabBar:activated=${this._handleTabChanged}
                >
                  <mwc-tab
                    .label=${this.hass.localize("ui.dialogs.more_info_control.details")}
                    dialogInitialFocus
                  ></mwc-tab>
                  <mwc-tab
                    .label=${this.hass.localize("ui.dialogs.more_info_control.history")}
                  ></mwc-tab>
                </mwc-tab-bar>
              `:""}
        </div>
        <div class="content" tabindex="-1" dialogInitialFocus>
          ${Zt(0===this._currTabIndex?g`
                  ${jp.includes(n)?"":g`
                        <state-card-content
                          in-dialog
                          .stateObj=${t}
                          .hass=${this.hass}
                        ></state-card-content>
                      `}
                  ${mt.includes(n)||!this._computeShowHistoryComponent(e)?"":g`<ha-more-info-history
                        .hass=${this.hass}
                        .entityId=${this._entityId}
                      ></ha-more-info-history>`}
                  ${mt.includes(n)||!this._computeShowLogBookComponent(e)?"":g`<ha-more-info-logbook
                        .hass=${this.hass}
                        .entityId=${this._entityId}
                      ></ha-more-info-logbook>`}
                  <more-info-content
                    .stateObj=${t}
                    .hass=${this.hass}
                  ></more-info-content>
                  ${t.attributes.restored?g`
                        <p>
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.not_provided")}
                        </p>
                        <p>
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_intro")}
                        </p>
                        <mwc-button
                          class="warning"
                          @click=${this._removeEntity}
                        >
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_action")}
                        </mwc-button>
                      `:""}
                `:g`
                  <ha-more-info-history
                    .hass=${this.hass}
                    .entityId=${this._entityId}
                  ></ha-more-info-history>
                  <ha-more-info-logbook
                    .hass=${this.hass}
                    .entityId=${this._entityId}
                  ></ha-more-info-logbook>
                `)}
        </div>
      </ha-dialog>
    `}},{kind:"method",key:"_enlarge",value:function(){this.large=!this.large}},{kind:"method",key:"_computeShowHistoryComponent",value:function(e){return ht(this.hass,"history")&&!Ft.includes(Ge(e))}},{kind:"method",key:"_computeShowLogBookComponent",value:function(e){if(!ht(this.hass,"logbook"))return!1;const t=this.hass.states[e];if(!t||t.attributes.unit_of_measurement)return!1;const n=Ge(e);return!ln.includes(n)&&!Ft.includes(n)}},{kind:"method",key:"_removeEntity",value:function(){const e=this._entityId;_t(this,{title:this.hass.localize("ui.dialogs.more_info_control.restored.confirm_remove_title"),text:this.hass.localize("ui.dialogs.more_info_control.restored.confirm_remove_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>{Vt(this.hass,e)}})}},{kind:"method",key:"_gotoSettings",value:function(){var e,t;Ie(),e=this,t={entity_id:this._entityId},d(e,"show-dialog",{dialogTag:"dialog-entity-editor",dialogImport:vn,dialogParams:t}),this.closeDialog()}},{kind:"method",key:"_gotoEdit",value:function(){const e=this.hass.states[this._entityId],t=Ge(this._entityId);let n=e.entity_id;(Np.includes(t)||"person"===t)&&(n=e.attributes.id),Xt(`/config/${t}/edit/${n}`),this.closeDialog()}},{kind:"method",key:"_handleTabChanged",value:function(e){e.detail.index!==this._currTabIndex&&(this._currTabIndex=e.detail.index)}},{kind:"get",static:!0,key:"styles",value:function(){return[Oe,k`
        ha-dialog {
          --dialog-surface-position: static;
          --dialog-content-position: static;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          /* flex-shrink: 0; */
          display: block;
        }
        .content {
          max-width: 100%;
          outline: none;
        }

        /* #cancel {
          position: absolute;
          right: 0;
          z-index: 100;
        } */

        /* @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
            border-bottom: none;
          }
        } */

        .heading {
          border-bottom: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          ha-dialog {
            --mdc-dialog-max-width: 90vw;
          }

          .content {
            width: 352px;
          }

          ha-header-bar {
            width: 400px;
          }

          .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
          }

          ha-dialog[data-domain="camera"] .content,
          ha-dialog[data-domain="camera"] ha-header-bar {
            width: auto;
          }

          :host([large]) .content {
            width: calc(90vw - 48px);
          }

          :host([large]) ha-dialog[data-domain="camera"] .content,
          :host([large]) ha-header-bar {
            width: 90vw;
          }
        }

        ha-dialog[data-domain="camera"] {
          --dialog-content-padding: 0;
        }

        state-card-content,
        ha-more-info-history,
        ha-more-info-logbook:not(:last-child) {
          display: block;
          margin-bottom: 16px;
        }
        @media all and (max-width: 650px) {
          state-card-content {
            width: 250px;
          }
        }
      `]}}]}}),f);var Lp=Object.freeze({__proto__:null,MoreInfoDialog:Hp});export{Zn as $,ip as A,an as B,xp as C,Ea as D,Rp as E,$f as F,yf as G,oa as H,Yn as I,pp as J,va as K,zf as L,hp as M,ga as N,fa as O,ms as P,ca as Q,ha as R,Ep as S,ua as T,vf as U,_p as V,Sa as W,_f as X,Ti as Y,Ta as Z,Vn as _,Dn as a,ii as a0,si as a1,ri as a2,Af as a3,mp as a4,gp as a5,lp as a6,op as a7,sp as a8,tn as a9,pf as aa,fp as ab,Ii as ac,ui as ad,$i as ae,wf as af,Ri as ag,pi as ah,Ai as ai,vi as aj,Oi as ak,hi as al,kf as am,zi as an,If as ao,wp as ap,dn as aq,vp as ar,Jt as as,Lp as at,Cn as b,gi as c,Zt as d,An as e,Cp as f,$n as g,Rn as h,In as i,On as j,zn as k,ia as l,na as m,Uf as n,rn as o,Hf as p,Bf as q,Pf as r,Lf as s,Ff as t,Ap as u,Xt as v,Kt as w,jn as x,cp as y,ap as z};
