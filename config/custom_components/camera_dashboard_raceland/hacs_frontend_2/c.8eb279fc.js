import{_ as i,d as e,g as a,t,c as o,x as c,f as s,o as n,q as l}from"./main-b570e60a.js";import{al as r,am as d,an as h,ao as f,aq as m,C as u,e as g}from"./c.5a5021e9.js";import"./c.1319470f.js";import{c as p}from"./c.461f2735.js";import{b as _}from"./c.08872315.js";import"./c.2aff7a3c.js";import"./c.d5c44444.js";import"./c.f9bdd698.js";import"./c.d294c310.js";import"./c.a717c672.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.9e58f139.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.5fe2e3ab.js";import"./c.40d262eb.js";import"./c.7cce6779.js";import"./c.22b34540.js";import"./c.afa7717b.js";import"./c.7bb4ce36.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.05dd33f7.js";import"./c.4086c047.js";import"./c.6d56dc75.js";import"./c.d7868478.js";import"./c.3a0ccb1a.js";import"./c.ff74f86a.js";const j=r(_,d({name:h(f()),entity:h(f()),theme:h(f()),icon:h(f())}));let v=i([l("hui-light-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){m(i,j),this._config=i}},{kind:"field",key:"_schema",value:()=>o(((i,e,a)=>[{name:"entity",required:!0,selector:{entity:{domain:"light"}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{placeholder:e||(null==a?void 0:a.attributes.icon),fallbackPath:e||null!=a&&a.attributes.icon||!a||!i?void 0:u(g(i),a)}}}]}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const i=["more-info","toggle","navigate","url","call-service","none"],e=this.hass.states[this._config.entity],a=this._schema(this._config.entity,this._config.icon,e);return c`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${a}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .config=${this._hold_action}
          .actions=${i}
          .configValue=${"hold_action"}
          @value-changed=${this._actionChanged}
        ></hui-action-editor>

        <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.double_tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .config=${this._double_tap_action}
          .actions=${i}
          .configValue=${"double_tap_action"}
          @value-changed=${this._actionChanged}
        ></hui-action-editor>
      </div> -->
    `}},{kind:"method",key:"_actionChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target,a=i.detail.value;this[`_${e.configValue}`]!==a&&(e.configValue&&(!1===a||a?this._config={...this._config,[e.configValue]:a}:(this._config={...this._config},delete this._config[e.configValue])),s(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(i){s(this,"config-changed",{config:i.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>[p,n`
      /* ha-form,
      hui-action-editor {
        display: block;
        margin-bottom: 24px;
        overflow: auto;
      } */
    `]}]}}),e);export{v as HuiLightCardEditor};
