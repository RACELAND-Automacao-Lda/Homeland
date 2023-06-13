import{_ as r,d as e,g as o,t as a,x as i,eN as t,k as s,l,o as d,q as n}from"./main-b570e60a.js";let c=r(null,(function(r,e){class n extends e{constructor(...e){super(...e),r(this)}}return{F:n,d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"filter",value:()=>""},{kind:"field",decorators:[a()],key:"_isLogLoaded",value:()=>!1},{kind:"field",decorators:[a()],key:"_errorHTML",value:void 0},{kind:"method",key:"render",value:function(){return i`
      <div class="error-log-intro">
        ${this._errorHTML?i`
              <ha-card>
                <ha-icon-button
                  .path=${t}
                  @click=${this._refreshErrorLog}
                  .label=${this.hass.localize("ui.common.refresh")}
                ></ha-icon-button>
                <div class="card-content error-log">${this._errorHTML}</div>
              </ha-card>
            `:i`
              <mwc-button raised @click=${this._refreshErrorLog}>
                ${this.hass.localize("ui.panel.config.logs.load_full_log")}
              </mwc-button>
            `}
      </div>
    `}},{kind:"method",key:"firstUpdated",value:function(r){var e;s(l(n.prototype),"firstUpdated",this).call(this,r),null!==(e=this.hass)&&void 0!==e&&e.config.safe_mode&&(this.hass.loadFragmentTranslation("config"),this._refreshErrorLog())}},{kind:"method",key:"updated",value:function(r){s(l(n.prototype),"updated",this).call(this,r),r.has("filter")&&this._isLogLoaded&&this._refreshErrorLog()}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      .error-log-intro {
        text-align: center;
        margin: 16px;
      }

      ha-icon-button {
        float: right;
      }

      .error-log {
        font-family: var(--code-font-family, monospace);
        clear: both;
        text-align: left;
        padding-top: 12px;
      }

      .error-log > div:hover {
        background-color: var(--secondary-background-color);
      }

      .error {
        color: var(--error-color);
      }

      .warning {
        color: var(--warning-color);
      }
    `}},{kind:"method",key:"_refreshErrorLog",value:async function(){this._errorHTML=this.hass.localize("ui.panel.config.logs.loading_log");const r=await(e=this.hass,e.callApi("GET","error_log"));var e;this._isLogLoaded=!0,this._errorHTML=r?r.split("\n").filter((r=>this.filter?r.toLowerCase().includes(this.filter.toLowerCase()):r)).map((r=>r.includes("INFO")?i`<div class="info">${r}</div>`:r.includes("WARNING")?i`<div class="warning">${r}</div>`:r.includes("ERROR")||r.includes("FATAL")||r.includes("CRITICAL")?i`<div class="error">${r}</div>`:i`<div>${r}</div>`)):this.hass.localize("ui.panel.config.logs.no_errors")}}]}}),e);customElements.define("error-log-card",c);let h=r([n("hui-safe-mode-card")],(function(r,e){return{F:class extends e{constructor(...e){super(...e),r(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(r){}},{kind:"method",key:"render",value:function(){return i`
      <ha-card
        .header=${this.hass.localize("ui.panel.lovelace.cards.safe-mode.header")}
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.lovelace.cards.safe-mode.description")}
        </div>
        <error-log-card .hass=${this.hass}></error-log-card>
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      ha-card {
        --ha-card-header-color: var(--primary-color);
      }
      error-log-card {
        display: block;
        padding-bottom: 16px;
      }
    `}}]}}),e);export{h as HuiSafeModeCard};
