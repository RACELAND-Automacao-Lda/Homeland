import{_ as i,d as e,g as a,t,x as o,f as c,o as s,q as n}from"./main-b570e60a.js";import{al as r,am as l,an as d,ao as h,aq as f}from"./c.5a5021e9.js";import"./c.1319470f.js";import"./c.6d56dc75.js";import{a as u}from"./c.fbe33aec.js";import{c as g}from"./c.461f2735.js";import{b as m}from"./c.08872315.js";import"./c.2aff7a3c.js";import"./c.d5c44444.js";import"./c.f9bdd698.js";import"./c.d294c310.js";import"./c.a717c672.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.9e58f139.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.5fe2e3ab.js";import"./c.40d262eb.js";import"./c.7cce6779.js";import"./c.22b34540.js";import"./c.afa7717b.js";import"./c.7bb4ce36.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.05dd33f7.js";import"./c.4086c047.js";import"./c.d7868478.js";import"./c.3a0ccb1a.js";import"./c.ff74f86a.js";const p=r(m,l({image:d(h()),tap_action:d(u),hold_action:d(u)}));let _=i([n("hui-picture-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){f(i,p),this._config=i}},{kind:"get",key:"_image",value:function(){return this._config.image||""}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"none"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"none"}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o``;const i=["navigate","url","call-service","none"];return o`
      <div class="card-config">
        <ha-textfield
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .value=${this._image}
          .configValue=${"image"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <!-- <hui-theme-select-editor
          .hass=${this.hass}
          .value=${this._theme}
          .configValue=${"theme"}
          @value-changed=${this._valueChanged}
        ></hui-theme-select-editor> -->
        <!-- <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${i}
            .configValue=${"tap_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${i}
            .configValue=${"hold_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
        </div> -->
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target,a=i.detail.value;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(!1===a||a?this._config={...this._config,[e.configValue]:a}:(this._config={...this._config},delete this._config[e.configValue])),c(this,"config-changed",{config:this._config}))}},{kind:"get",static:!0,key:"styles",value:function(){return[g,s`
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
      `]}}]}}),e);export{_ as HuiPictureCardEditor};
