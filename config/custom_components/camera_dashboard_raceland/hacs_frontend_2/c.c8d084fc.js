import{_ as e,d as i,g as t,t as a,x as s,f as o,q as n}from"./main-b570e60a.js";import{aq as c}from"./c.5a5021e9.js";import"./c.509948f5.js";import"./c.2aff7a3c.js";import{g as h}from"./c.b0a0cc39.js";import{c as l}from"./c.461f2735.js";import"./c.0b900d77.js";import"./c.fbe33aec.js";import"./c.1d43e39e.js";const r=["sensor"];let u=e([n("hui-graph-footer-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){c(e,h),this._config=e}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_detail",value:function(){var e;return null!==(e=this._config.detail)&&void 0!==e?e:1}},{kind:"get",key:"_hours_to_show",value:function(){return this._config.hours_to_show||24}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <div class="card-config">
        <ha-entity-picker
          allow-custom-entity
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          .includeDomains=${r}
          @change=${this._valueChanged}
        ></ha-entity-picker>
        <div class="side-by-side">
          <ha-formfield
            label=${this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail")}
          >
            <ha-switch
              .checked=${2===this._detail}
              .configValue=${"detail"}
              @change=${this._change}
            ></ha-switch>
          </ha-formfield>
          <ha-textfield
            type="number"
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._hours_to_show}
            min="1"
            .configValue=${"hours_to_show"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>
      </div>
    `:s``}},{kind:"method",key:"_change",value:function(e){if(!this._config||!this.hass)return;const i=e.target.checked?2:1;this._detail!==i&&(this._config={...this._config,detail:i},o(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(e){if(!this._config||!this.hass)return;const i=e.target;if(this[`_${i.configValue}`]!==i.value){if(i.configValue)if(""===i.value||"number"===i.type&&isNaN(Number(i.value)))this._config={...this._config},delete this._config[i.configValue];else{let e=i.value;"number"===i.type&&(e=Number(e)),this._config={...this._config,[i.configValue]:e}}o(this,"config-changed",{config:this._config})}}},{kind:"get",static:!0,key:"styles",value:function(){return l}}]}}),i);export{u as HuiGraphFooterEditor};
