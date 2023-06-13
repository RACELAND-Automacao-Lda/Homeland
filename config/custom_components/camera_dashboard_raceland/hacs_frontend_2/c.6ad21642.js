import{_ as e,d as t,g as i,t as n,x as s,J as a,k as o,l as r,S as c,f as l,o as h,q as u}from"./main-b570e60a.js";import{a as d,j as f}from"./c.5a5021e9.js";import{W as m,D as g,Z as v,X as y}from"./c.4d0662f5.js";import"./c.e95f0770.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";const p={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--accent-color)"};e([u("hui-gauge-card")],(function(e,t){class u extends t{constructor(...t){super(...t),e(this)}}return{F:u,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.b8cccb43.js"),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"gauge",entity:m(e,1,t,i,["counter","input_number","number","sensor"],(e=>!isNaN(Number(e.state))))[0]||""}}},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[n()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!g(e.entity))throw new Error("Invalid entity");this._config={min:0,max:100,...e}}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return s``;const i=this.hass.states[this._config.entity];if(!i)return s`
        <hui-warning>
          ${v(this.hass,this._config.entity)}
        </hui-warning>
      `;const n=Number(i.state);if(i.state===d)return s`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable","entity",this._config.entity)}</hui-warning
        >
      `;if(isNaN(n))return s`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning
        >
      `;const o=null!==(e=this._config.name)&&void 0!==e?e:f(i);return s`
      <ha-card @click=${this._handleClick} tabindex="0">
        <ha-gauge
          .min=${this._config.min}
          .max=${this._config.max}
          .value=${i.state}
          .locale=${this.hass.locale}
          .label=${this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||""}
          style=${a({"--gauge-color":this._computeSeverity(n)})}
          .needle=${this._config.needle}
          .levels=${this._config.needle?this._severityLevels():void 0}
        ></ha-gauge>
        <div class="name" .title=${o}>${o}</div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return y(this,e)}},{kind:"method",key:"updated",value:function(e){if(o(r(u.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||c(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){if(this._config.needle)return;const t=this._config.severity;if(!t)return p.normal;const i=Object.keys(t).map((e=>[e,t[e]]));for(const e of i)if(null==p[e[0]]||isNaN(e[1]))return p.normal;return i.sort(((e,t)=>e[1]-t[1])),e>=i[0][1]&&e<i[1][1]?p[i[0][0]]:e>=i[1][1]&&e<i[2][1]?p[i[1][0]]:e>=i[2][1]?p[i[2][0]]:p.normal}},{kind:"method",key:"_severityLevels",value:function(){const e=this._config.severity;if(!e)return[{level:0,stroke:p.normal}];return Object.keys(e).map((t=>({level:e[t],stroke:p[t]})))}},{kind:"method",key:"_handleClick",value:function(){l(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return h`
      ha-card {
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 1.5rem;
      }

      ha-card:focus {
        outline: none;
        background: var(--divider-color);
      }

      ha-gauge {
        width: 100%;
        max-width: 250px;
      }

      .name {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        width: 100%;
        font-size: 15px;
        font-weight: 450;
        margin-top: 10%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 200px;
        float: left;
        text-overflow: ellipsis;
      }
    `}}]}}),t);export{p as severityMap};
