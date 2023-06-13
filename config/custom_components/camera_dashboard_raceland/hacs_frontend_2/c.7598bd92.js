import{_ as t,d as i,g as e,x as s,o as a,q as r}from"./main-b570e60a.js";import"./c.4d0662f5.js";import{t as o}from"./c.3a0ccb1a.js";import{h as c}from"./c.5a5021e9.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([r("more-info-automation")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?s`
      <hr />
      <div class="flex">
        <div>${this.hass.localize("ui.card.automation.last_triggered")}:</div>
        <ha-relative-time
          .hass=${this.hass}
          .datetime=${this.stateObj.attributes.last_triggered}
          capitalize
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button
          @click=${this._runActions}
          .disabled=${c.includes(this.stateObj.state)}
        >
          ${this.hass.localize("ui.card.automation.trigger")}
        </mwc-button>
      </div>
    `:s``}},{kind:"method",key:"_runActions",value:function(){o(this.hass,this.stateObj.entity_id)}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .actions {
        margin: 8px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      hr {
        border-color: var(--divider-color);
        border-bottom: none;
        margin: 16px 0;
      }
    `}}]}}),i);
