import{_ as t,d as e,g as i,t as s,x as o,af as n,ag as a,k as r,l as d,S as h,f as u,o as l,q as c}from"./main-b570e60a.js";import{W as f,Z as m,X as y}from"./c.4d0662f5.js";import{j as g,h as v}from"./c.5a5021e9.js";import{a as p}from"./c.84af24de.js";import"./c.17776df6.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let x=t([c("hui-humidifier-card")],(function(t,e){class c extends e{constructor(...e){super(...e),t(this)}}return{F:c,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.f0a2f42c.js"),document.createElement("hui-humidifier-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"humidifier",entity:f(t,1,e,i,["humidifier"])[0]||""}}},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_setHum",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 6}},{kind:"method",key:"setConfig",value:function(t){if(!t.entity||"humidifier"!==t.entity.split(".")[0])throw new Error("Missing humidifier entity");this._config=t}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o``;const t=this.hass.states[this._config.entity];if(!t)return o`
        <hui-warning>
          ${m(this.hass,this._config.entity)}
        </hui-warning>
      `;const e=this._config.name||g(this.hass.states[this._config.entity]),i=null!==t.attributes.humidity&&Number.isFinite(Number(t.attributes.humidity))?t.attributes.humidity:t.attributes.min_humidity,s=p(this.hass),r=v.includes(t.state)?o` <round-slider disabled="true"></round-slider> `:o`
          <round-slider
            .value=${i}
            .min=${t.attributes.min_humidity}
            .max=${t.attributes.max_humidity}
            .rtl=${"rtl"===s}
            step="1"
            @value-changing=${this._dragEvent}
            @value-changed=${this._setHumidity}
          ></round-slider>
        `,d=n`
      <svg viewBox="0 0 40 20">
        <text
          x="50%"
          dx="1"
          y="60%"
          text-anchor="middle"
          style="font-size: 13px;"
          class="set-value"
        >
          ${v.includes(t.state)||void 0===this._setHum||null===this._setHum?"":n`
                    ${this._setHum.toFixed()}
                    <tspan dx="-3" dy="-6.5" style="font-size: 4px;">
                      %
                    </tspan>
                    `}
        </text>
      </svg>
      <svg id="set-values">
        <g>
          <text
            dy="22"
            text-anchor="middle"
            id="set-mode"
          >
            ${this.hass.localize(`state.default.${t.state}`)}
            ${t.attributes.mode&&!v.includes(t.state)?o`
                    -
                    ${this.hass.localize(`state_attributes.humidifier.mode.${t.attributes.mode}`)||t.attributes.mode}
                  `:""}
          </text>
        </g>
      </svg>
    `;return o`
      <ha-card>
        <ha-icon-button
          .path=${a}
          class="more-info"
          @click=${this._handleMoreInfo}
          tabindex="0"
        ></ha-icon-button>

        <div class="content">
          <div id="controls">
            <div id="slider">
              ${r}
              <div id="slider-center">
                <div id="humidity">${d}</div>
              </div>
            </div>
          </div>
          <div id="info" .title=${e}>${e}</div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(t){return y(this,t)}},{kind:"method",key:"updated",value:function(t){if(r(d(c.prototype),"updated",this).call(this,t),!this._config||!this.hass||!t.has("hass")&&!t.has("_config"))return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||h(this,this.hass.themes,this._config.theme);const s=this.hass.states[this._config.entity];s&&(e&&e.states[this._config.entity]===s||this._rescale_svg())}},{kind:"method",key:"willUpdate",value:function(t){if(!this.hass||!this._config||!t.has("hass"))return;const e=this.hass.states[this._config.entity];if(!e)return;const i=t.get("hass");i&&i.states[this._config.entity]===e||(this._setHum=this._getSetHum(e))}},{kind:"method",key:"_rescale_svg",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("ha-card")&&this.shadowRoot.querySelector("ha-card").updateComplete.then((()=>{const t=this.shadowRoot.querySelector("#set-values"),e=t.querySelector("g").getBBox();t.setAttribute("viewBox",`${e.x} ${e.y} ${e.width} ${e.height}`),t.setAttribute("width",`${e.width}`),t.setAttribute("height",`${e.height}`)}))}},{kind:"method",key:"_getSetHum",value:function(t){if(!v.includes(t.state))return t.attributes.humidity}},{kind:"method",key:"_dragEvent",value:function(t){this._setHum=t.detail.value}},{kind:"method",key:"_setHumidity",value:function(t){this.hass.callService("humidifier","set_humidity",{entity_id:this._config.entity,humidity:t.detail.value})}},{kind:"method",key:"_handleMoreInfo",value:function(){u(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return l`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
        position: relative;
        overflow: hidden;
        --name-font-size: 1.2rem;
        --brightness-font-size: 1.2rem;
        --rail-border-color: transparent;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 25;
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      #controls {
        display: flex;
        justify-content: center;
        padding: 16px;
        position: relative;
      }

      #slider {
        height: 100%;
        width: 100%;
        position: relative;
        max-width: 250px;
        min-width: 100px;
      }

      round-slider {
        --round-slider-path-color: var(--slider-track-color);
        --round-slider-bar-color: var(--primary-color);
        padding-bottom: 10%;
      }

      #slider-center {
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

      #humidity {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 50%;
        top: 45%;
        left: 50%;
      }

      #set-values {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 20px;
      }

      #set-mode {
        fill: var(--secondary-text-color);
        font-size: 16px;
      }

      #info {
        display: flex-vertical;
        justify-content: center;
        text-align: center;
        padding: 16px;
        margin-top: -60px;
        font-size: var(--name-font-size);
      }

      text {
        fill: var(--primary-text-color);
      }
    `}}]}}),e);export{x as HuiHumidifierCard};
