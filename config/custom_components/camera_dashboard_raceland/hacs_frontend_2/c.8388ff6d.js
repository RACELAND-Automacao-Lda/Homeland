import{_ as t,d as s,g as i,c as e,x as a,f as n,o,q as r}from"./main-b570e60a.js";import{v as d}from"./c.4d0662f5.js";import"./c.d7868478.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([r("more-info-person")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"stateObj",value:void 0},{kind:"field",key:"_entityArray",value:()=>e((t=>[t]))},{kind:"method",key:"render",value:function(){var t;return this.hass&&this.stateObj?a`
      ${this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?a`
            <ha-map
              .hass=${this.hass}
              .entities=${this._entityArray(this.stateObj.entity_id)}
              autoFit
            ></ha-map>
          `:""}
      ${null!==(t=this.hass.user)&&void 0!==t&&t.is_admin&&"not_home"===this.stateObj.state&&this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?a`
            <div class="actions">
              <mwc-button @click=${this._handleAction}>
                ${this.hass.localize("ui.dialogs.more_info_control.person.create_zone")}
              </mwc-button>
            </div>
          `:""}
      <ha-attributes
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        extra-filters="id,user_id,editable"
      ></ha-attributes>
    `:a``}},{kind:"method",key:"_handleAction",value:function(){this.stateObj.attributes.latitude,this.stateObj.attributes.longitude,d("/config/zone/new"),n(this,"hass-more-info",{entityId:null})}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .actions {
        margin: 8px 0;
        text-align: right;
      }
      ha-map {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `}}]}}),s);
