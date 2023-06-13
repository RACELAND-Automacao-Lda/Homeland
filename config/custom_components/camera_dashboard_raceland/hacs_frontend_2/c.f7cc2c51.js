import{_ as i,d as e,g as a,t,x as c,f as o,q as s}from"./main-b570e60a.js";import{al as n,am as r,an as l,ao as d,ap as h,aq as m}from"./c.5a5021e9.js";import"./c.1319470f.js";import{a as f}from"./c.fbe33aec.js";import{b as u}from"./c.08872315.js";import{c as p}from"./c.461f2735.js";import"./c.2aff7a3c.js";import"./c.d5c44444.js";import"./c.f9bdd698.js";import"./c.d294c310.js";import"./c.a717c672.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.9e58f139.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.5fe2e3ab.js";import"./c.40d262eb.js";import"./c.7cce6779.js";import"./c.22b34540.js";import"./c.afa7717b.js";import"./c.7bb4ce36.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.05dd33f7.js";import"./c.4086c047.js";import"./c.6d56dc75.js";import"./c.d7868478.js";import"./c.3a0ccb1a.js";import"./c.ff74f86a.js";const g=n(u,r({entity:l(d()),image:l(d()),name:l(d()),camera_image:l(d()),camera_view:l(d()),aspect_ratio:l(d()),tap_action:l(f),hold_action:l(f),show_name:l(h()),show_state:l(h()),theme:l(d())})),_=[{name:"entity",required:!0,selector:{entity:{domain:"camera"}}},{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}}]}];let v=i([s("hui-picture-camera-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){m(i,g),this._config=i}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"more-info"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const i=["more-info","toggle","navigate","call-service","none"],e={show_state:!0,show_name:!0,camera_view:"auto",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${_}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${i}
            .configValue=${"tap_action"}
            @value-changed=${this._changed}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${i}
            .configValue=${"hold_action"}
            @value-changed=${this._changed}
          ></hui-action-editor>
        </div>
      </div> -->
    `}},{kind:"method",key:"_valueChanged",value:function(i){o(this,"config-changed",{config:i.detail.value})}},{kind:"method",key:"_changed",value:function(i){if(!this._config||!this.hass)return;const e=i.target,a=i.detail.value;this[`_${e.configValue}`]!==a&&(!1===a||a?this._config={...this._config,[e.configValue]:a}:(this._config={...this._config},delete this._config[e.configValue]),o(this,"config-changed",{config:this._config}))}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.picture-entity.${i.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>p}]}}),e);export{v as HuiPictureEntityCardEditor};
