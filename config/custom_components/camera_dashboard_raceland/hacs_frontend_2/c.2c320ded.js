import{_ as e,d as t,g as a,x as n,o as i,q as s}from"./main-b570e60a.js";let o=e([s("hui-empty-state-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(e){}},{kind:"method",key:"render",value:function(){return this.hass?n`
      <ha-card
        .header=${this.hass.localize("ui.panel.lovelace.cards.empty_state.title")}
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.lovelace.cards.empty_state.no_devices")}
        </div>
        <div class="card-actions">
          <a href="/config/integrations">
            <mwc-button>
              ${this.hass.localize("ui.panel.lovelace.cards.empty_state.go_to_integrations_page")}
            </mwc-button>
          </a>
        </div>
      </ha-card>
    `:n``}},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .content {
        margin-top: -1em;
        padding: 16px;
      }

      .card-actions a {
        text-decoration: none;
      }

      mwc-button {
        margin-left: -8px;
      }
    `}}]}}),t);export{o as HuiEmptyStateCard};
