import{_ as e,d as i,g as t,t as a,R as o,k as s,l as n,S as l,x as r,y as d,Q as c,o as h,U as u,L as p,q as m}from"./main-b570e60a.js";import{e as g,j as f,a as v}from"./c.5a5021e9.js";import{W as w,X as _,Z as y,o as k,Q as b,R as x,T as $}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";e([m("hui-picture-camera-card")],(function(e,i){class m extends i{constructor(...i){super(...i),e(this)}}return{F:m,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.f7cc2c51.js"),document.createElement("hui-picture-camera-card-editor")}},{kind:"field",decorators:[t({type:String})],key:"layout",value:()=>"big"},{kind:"field",decorators:[t({type:Boolean})],key:"toggleCam",value:()=>!1},{kind:"method",static:!0,key:"getStubConfig",value:function(e,i,t){return{type:"picture-camera",entity:w(e,1,i,t,["camera"])[0]||"",camera_image:""}}},{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[o("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[a()],key:"_shouldRenderRipple",value:()=>!1},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Entity must be specified");if("camera"!==g(e.entity)&&!e.image&&!e.state_image&&!e.camera_image)throw new Error("No image source configured");this._config={show_name:!0,show_state:!0,...e}}},{kind:"method",key:"shouldUpdate",value:function(e){return _(this,e)}},{kind:"method",key:"updated",value:function(e){if(s(n(m.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const i=e.get("hass"),t=e.get("_config");i&&t&&i.themes===this.hass.themes&&t.theme===this._config.theme||l(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){var e,i,t,a,o,s,n,l,h,u;if(!this._config||!this.hass)return r``;const p=this.hass.states[this._config.entity];if(!p)return r`
        <hui-warning>
          ${y(this.hass,this._config.entity)}
        </hui-warning>
      `;const m=this._config.name||f(p);k(this.hass.localize,p,this.hass.locale);let w="";return this._config.show_name&&this._config.show_state?w=r`
        <div class="footer both">
          <div>${m}</div>
          <svg
            class="togcam"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.21 38.19H7.46997C5.80997 38.19 4.46997 36.85 4.46997 35.19V13.46C4.46997 11.8 5.80997 10.46 7.46997 10.46H31.21C32.87 10.46 34.21 11.8 34.21 13.46V35.19C34.21 36.85 32.87 38.19 31.21 38.19Z M28.0699 23.4799L41.6499 13.1899C42.3499 12.6599 43.3499 13.1599 43.3499 14.0399V34.6299C43.3499 35.5099 42.3499 35.9999 41.6499 35.4799L28.0699 25.1699C27.5099 24.7499 27.5099 23.8999 28.0699 23.4799Z"
            />
          </svg>
        </div>
      `:this._config.show_name&&(w=r`<div class="footer single">${m}</div>`),r`
      ${"small"!==this.layout?r` <ha-card class="ha-card-og">
            <!-- <button-recorder></button-recorder> -->
            ${p.state===v?r`<unavailable-icon></unavailable-icon>`:r``}
            <hui-image
              class=${d({"hui-image-medium":"medium"===this.layout,"hui-image-big":"big"===this.layout})}
              .hass=${this.hass}
              .image=${null===(e=this._config)||void 0===e?void 0:e.image}
              .stateImage=${null===(i=this._config)||void 0===i?void 0:i.state_image}
              .stateFilter=${null===(t=this._config)||void 0===t?void 0:t.state_filter}
              .cameraImage=${"camera"===g(this._config.entity)?null===(a=this._config)||void 0===a?void 0:a.entity:null===(o=this._config)||void 0===o?void 0:o.camera_image}
              .cameraView=${null===(s=this._config)||void 0===s?void 0:s.camera_view}
              .entity=${null===(n=this._config)||void 0===n?void 0:n.entity}
              .aspectRatio=${null===(l=this._config)||void 0===l?void 0:l.aspect_ratio}
              @action=${this._handleAction}
              .actionHandler=${b({hasHold:x(this._config.hold_action),hasDoubleClick:x(this._config.double_tap_action)})}
              tabindex=${c(x(null===(h=this._config)||void 0===h?void 0:h.tap_action)||null!==(u=this._config)&&void 0!==u&&u.entity?"0":void 0)}
            >
            </hui-image>
            ${w}
          </ha-card>`:r`
            ${r``}
            <ha-card
              @click=${this._handleAction}
              @focus=${this.handleRippleFocus}
              @blur=${this.handleRippleBlur}
              @mousedown=${this.handleRippleActivate}
              @mouseup=${this.handleRippleDeactivate}
              @touchstart=${this.handleRippleActivate}
              @touchend=${this.handleRippleDeactivate}
              @touchcancel=${this.handleRippleDeactivate}
              @keydown=${this._handleKeyDown}
              class=${d({"ha-card-small":"small"===this.layout})}
            >
              <!-- <button-recorder></button-recorder> -->
              ${p.state===v?r` <svg
                      class="ha-status-icon-small"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.21 38.19H7.46997C5.80997 38.19 4.46997 36.85 4.46997 35.19V13.46C4.46997 11.8 5.80997 10.46 7.46997 10.46H31.21C32.87 10.46 34.21 11.8 34.21 13.46V35.19C34.21 36.85 32.87 38.19 31.21 38.19Z M28.0699 23.4799L41.6499 13.1899C42.3499 12.6599 43.3499 13.1599 43.3499 14.0399V34.6299C43.3499 35.5099 42.3499 35.9999 41.6499 35.4799L28.0699 25.1699C27.5099 24.7499 27.5099 23.8999 28.0699 23.4799Z"
                      />
                      <path
                        d="M32.45 42.9499L33.73 41.9799C34.15 41.6599 34.23 41.0699 33.91 40.6599L7.55 5.87988C7.23 5.46988 6.64 5.37988 6.23 5.69988L4.95 6.66988C4.53 6.98988 4.45 7.57988 4.77 7.98988L31.14 42.7699C31.44 43.1799 32.04 43.2699 32.45 42.9499Z"
                        fill="#999999"
                      />
                    </svg>
                    <unavailable-icon></unavailable-icon>`:r`<svg
                    class="ha-status-icon-small"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.21 38.19H7.46997C5.80997 38.19 4.46997 36.85 4.46997 35.19V13.46C4.46997 11.8 5.80997 10.46 7.46997 10.46H31.21C32.87 10.46 34.21 11.8 34.21 13.46V35.19C34.21 36.85 32.87 38.19 31.21 38.19Z M28.0699 23.4799L41.6499 13.1899C42.3499 12.6599 43.3499 13.1599 43.3499 14.0399V34.6299C43.3499 35.5099 42.3499 35.9999 41.6499 35.4799L28.0699 25.1699C27.5099 24.7499 27.5099 23.8999 28.0699 23.4799Z"
                    />
                  </svg> `}
              <span class="rect-card-small" tabindex="-1" .title=${m}
                >${m}</span
              >
              ${this._shouldRenderRipple?r`<mwc-ripple></mwc-ripple>`:""}
            </ha-card>
          `}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return h`
      .ha-card-og {
        min-height: 75px;
        overflow: hidden;
        position: relative;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.5rem;
      }

      .ha-card-medium {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;
        padding: 4% 0;
        font-size: 1.5rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        font-weight: 450;
      }
      .ha-card-small {
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
      .rect-card-small {
        padding: 5%;
        padding-bottom: 4%;
        margin-bottom: 4%;
        margin-left: 7%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 110px;
        /* float: left; */
        text-overflow: ellipsis;
      }
      .ha-status-icon-small {
        width: 63%;
        height: auto;
        fill: var(--paper-item-icon-color, #44739e);
        --mdc-icon-size: 100%;
        margin-left: 5%;
      }

      hui-image {
        width: 100%;
        cursor: pointer;
      }

      .footer {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(
          --ha-picture-card-background-color,
          rgba(0, 0, 0, 0.3)
        );
        padding: 16px;
        font-size: 16px;
        line-height: 16px;
        color: var(--ha-picture-card-text-color, white);
      }

      .both {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .togcam {
        width: 24px;
        height: 24px;
      }

      .single {
        text-align: center;
      }
    `}},{kind:"method",key:"_handleAction",value:function(e){$(this,this.hass,this._config,e.detail.action)}},{kind:"field",key:"_rippleHandlers",value(){return new u((()=>(this._shouldRenderRipple=!0,this._ripple)))}},{kind:"method",key:"_handleKeyDown",value:function(e){"Enter"!==e.key&&" "!==e.key||$(this,this.hass,this._config,"tap")}},{kind:"method",decorators:[p({passive:!0})],key:"handleRippleActivate",value:function(e){this._rippleHandlers.startPress(e)}},{kind:"method",key:"handleRippleDeactivate",value:function(){this._rippleHandlers.endPress()}},{kind:"method",key:"handleRippleFocus",value:function(){this._rippleHandlers.startFocus()}},{kind:"method",key:"handleRippleBlur",value:function(){this._rippleHandlers.endFocus()}}]}}),i);
