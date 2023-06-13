import{_ as s,d as i,g as t,x as e,o as a,q as r}from"./main-b570e60a.js";import{w as o}from"./c.4d0662f5.js";import{f as n}from"./c.5a5021e9.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";s([r("more-info-sun")],(function(s,i){return{F:class extends i{constructor(...i){super(...i),s(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return e``;const s=new Date(this.stateObj.attributes.next_rising),i=new Date(this.stateObj.attributes.next_setting);return e`
      <hr />
      ${(s>i?["set","ris"]:["ris","set"]).map((t=>e`
          <div class="row">
            <div class="key">
              <span
                >${"ris"===t?this.hass.localize("ui.dialogs.more_info_control.sun.rising"):this.hass.localize("ui.dialogs.more_info_control.sun.setting")}</span
              >
              <ha-relative-time
                .hass=${this.hass}
                .datetime=${"ris"===t?s:i}
              ></ha-relative-time>
            </div>
            <div class="value">
              ${o("ris"===t?s:i,this.hass.locale)}
            </div>
          </div>
        `))}
      <div class="row">
        <div class="key">
          ${this.hass.localize("ui.dialogs.more_info_control.sun.elevation")}
        </div>
        <div class="value">
          ${n(this.stateObj.attributes.elevation,this.hass.locale)}
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      .row {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      ha-relative-time {
        display: inline-block;
        white-space: nowrap;
      }
      hr {
        border-color: var(--divider-color);
        border-bottom: none;
        margin: 16px 0;
      }
    `}}]}}),i);
