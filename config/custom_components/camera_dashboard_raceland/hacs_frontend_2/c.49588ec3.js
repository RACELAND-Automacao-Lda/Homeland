import{_ as t,d as e,g as i,t as a,k as n,l as s,S as o,x as r,o as d,f as c,q as u,an as h,bb as l,b7 as p,eM as f}from"./main-b570e60a.js";import{j as g,aU as m}from"./c.5a5021e9.js";import{W as b,X as v,Z as y,Q as k}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";const x={moisture:h,temperature:l,brightness:p,conductivity:f,battery:void 0};t([u("hui-plant-status-card")],(function(t,e){class u extends e{constructor(...e){super(...e),t(this)}}return{F:u,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.903277de.js"),document.createElement("hui-plant-status-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"plant-status",entity:b(t,1,e,i,["plant"])[0]||""}}},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){if(!t.entity||"plant"!==t.entity.split(".")[0])throw new Error("Missing plant entity");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return v(this,t)}},{kind:"method",key:"updated",value:function(t){if(n(s(u.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||o(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r``;const t=this.hass.states[this._config.entity];return t?r`
      <ha-card
        class=${t.attributes.entity_picture?"has-plant-image":""}
      >
        <div
          class="banner"
          style="background-image:url(${t.attributes.entity_picture})"
        >
          <div class="header">
            ${this._config.name||g(t)}
          </div>
        </div>
        <div class="content">
          ${this.computeAttributes(t).map((e=>r`
              <div
                class="attributes"
                @action=${this._handleMoreInfo}
                .actionHandler=${k()}
                tabindex="0"
                .value=${e}
              >
                <div>
                  <ha-svg-icon
                    .path=${this.computeIcon(e,t.attributes.battery)}
                  ></ha-svg-icon>
                </div>
                <div
                  class=${-1===t.attributes.problem.indexOf(e)?"":"problem"}
                >
                  ${t.attributes[e]}
                </div>
                <div class="uom">
                  ${t.attributes.unit_of_measurement_dict[e]||""}
                </div>
              </div>
            `))}
        </div>
      </ha-card>
    `:r`
        <hui-warning>
          ${y(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      ha-card {
        height: 100%;
        box-sizing: border-box;
      }
      .banner {
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 12px;
      }

      .has-plant-image .banner {
        padding-top: 30%;
      }

      .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        /* end paper-font-headline style */

        line-height: 40px;
        padding: 8px 16px;
      }

      .has-plant-image .header {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        padding: 16px;
        color: white;
        width: 100%;
        background: rgba(0, 0, 0, var(--dark-secondary-opacity));
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
      }

      .has-plant-image .content {
        padding-bottom: 16px;
      }

      ha-svg-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
      }

      .attributes {
        cursor: pointer;
      }

      .attributes:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }

      .attributes div {
        text-align: center;
      }

      .problem {
        color: var(--error-color);
        font-weight: bold;
      }

      .uom {
        color: var(--secondary-text-color);
      }
    `}},{kind:"method",key:"computeAttributes",value:function(t){return Object.keys(x).filter((e=>e in t.attributes))}},{kind:"method",key:"computeIcon",value:function(t,e){return"battery"===t?m(e):x[t]}},{kind:"method",key:"_handleMoreInfo",value:function(t){const e=t.currentTarget,i=this.hass.states[this._config.entity];e.value&&c(this,"hass-more-info",{entityId:i.attributes.sensors[e.value]})}}]}}),e);
