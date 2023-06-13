import{_ as i,d as e,g as t,t as a,x as c,f as o,q as s}from"./main-b570e60a.js";import"./c.1319470f.js";import"./c.9e58f139.js";import{al as n,am as r,an as l,ao as d,as as h,aq as f}from"./c.5a5021e9.js";import"./c.591c1a78.js";import{p as m}from"./c.a01ae87b.js";import{a as g}from"./c.fbe33aec.js";import{b as u}from"./c.08872315.js";import{e as p}from"./c.1d43e39e.js";import{c as _}from"./c.461f2735.js";import"./c.2aff7a3c.js";import"./c.d5c44444.js";import"./c.f9bdd698.js";import"./c.d294c310.js";import"./c.a717c672.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.5fe2e3ab.js";import"./c.40d262eb.js";import"./c.7cce6779.js";import"./c.22b34540.js";import"./c.afa7717b.js";import"./c.7bb4ce36.js";import"./c.1ded644c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.da136530.js";import"./c.05dd33f7.js";import"./c.4086c047.js";import"./c.a6c70980.js";import"./c.6d56dc75.js";import"./c.d7868478.js";import"./c.3a0ccb1a.js";import"./c.ff74f86a.js";import"./c.3df9613c.js";const v=n(u,r({title:l(d()),entity:l(d()),image:l(d()),camera_image:l(d()),camera_view:l(d()),aspect_ratio:l(d()),tap_action:l(g),hold_action:l(g),entities:h(p),theme:l(d())})),j=["more-info","toggle","navigate","call-service","none"],b=[{name:"title",selector:{text:{}}},{name:"image",selector:{text:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"entity",selector:{entity:{}}}];let k=i([s("hui-picture-glance-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[a()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(i){f(i,v),this._config=i,this._configEntities=m(i.entities)}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"toggle"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const i={camera_view:"auto",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${b}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")}
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${j}
            .configValue=${"tap_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")}
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${j}
            .configValue=${"hold_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
        </div>
        <hui-entity-editor
          .hass=${this.hass}
          .entities=${this._configEntities}
          @entities-changed=${this._changed}
        ></hui-entity-editor>
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(i){o(this,"config-changed",{config:i.detail.value})}},{kind:"method",key:"_changed",value:function(i){if(!this._config||!this.hass)return;const e=i.target,t=i.detail.value;if(i.detail&&i.detail.entities)this._config={...this._config,entities:i.detail.entities},this._configEntities=m(this._config.entities);else if(e.configValue){if(this[`_${e.configValue}`]===t)return;!1===t||t?this._config={...this._config,[e.configValue]:t}:(this._config={...this._config},delete this._config[e.configValue])}o(this,"config-changed",{config:this._config})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?this.hass.localize("ui.panel.lovelace.editor.card.picture-glance.state_entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.picture-glance.${i.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>_}]}}),e);export{k as HuiPictureGlanceCardEditor};
