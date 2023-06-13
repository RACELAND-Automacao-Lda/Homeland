import{_ as i,d as t,g as e,t as a,c as o,x as c,f as n,q as s}from"./main-b570e60a.js";import{al as l,am as h,an as r,ao as d,ap as f,aq as u,C as m,e as p}from"./c.5a5021e9.js";import"./c.1319470f.js";import"./c.9e58f139.js";import{a as g}from"./c.fbe33aec.js";import{c as _}from"./c.461f2735.js";import{b as v}from"./c.08872315.js";import"./c.2aff7a3c.js";import"./c.d5c44444.js";import"./c.f9bdd698.js";import"./c.d294c310.js";import"./c.a717c672.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.5fe2e3ab.js";import"./c.40d262eb.js";import"./c.7cce6779.js";import"./c.22b34540.js";import"./c.afa7717b.js";import"./c.7bb4ce36.js";import"./c.1ded644c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.da136530.js";import"./c.05dd33f7.js";import"./c.4086c047.js";import"./c.a6c70980.js";import"./c.6d56dc75.js";import"./c.d7868478.js";import"./c.3a0ccb1a.js";import"./c.ff74f86a.js";import"./c.3df9613c.js";const j=l(v,h({entity:r(d()),name:r(d()),show_name:r(f()),icon:r(d()),show_icon:r(f()),icon_height:r(d()),tap_action:r(g),hold_action:r(g),theme:r(d()),show_state:r(f())})),b=["more-info","toggle","navigate","url","call-service","none"];let k=i([s("hui-button-card-editor")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){u(i,j),this._config=i}},{kind:"field",key:"_schema",value:()=>o(((i,t,e)=>[{name:"entity",selector:{entity:{domain:["light","switch","cover","automation","fan"]}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{placeholder:t||(null==e?void 0:e.attributes.icon),fallbackPath:t||null!=e&&e.attributes.icon||!e||!i?void 0:m(p(i),e)}}}]},{name:"",type:"grid",column_min_width:"100px",schema:[]},{name:"",type:"grid",schema:[]}]))},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"method",key:"render",value:function(){var i;if(!this.hass||!this._config)return c``;const t=this._config.entity?this.hass.states[this._config.entity]:void 0,e=this._schema(this._config.entity,this._config.icon,t),a={show_name:!0,show_icon:!0,...this._config};return null!==(i=a.icon_height)&&void 0!==i&&i.includes("px")&&(a.icon_height=String(parseFloat(a.icon_height))),c`
      <ha-form
        .hass=${this.hass}
        .data=${a}
        .schema=${e}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${b}
            .configValue=${"tap_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._actionChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${b}
            .configValue=${"hold_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._actionChanged}
          ></hui-action-editor>
        </div>
      </div> -->
    `}},{kind:"method",key:"_valueChanged",value:function(i){const t=i.detail.value;t.icon_height&&!t.icon_height.endsWith("px")&&(t.icon_height+="px"),n(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}`:this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)}},{kind:"method",key:"_actionChanged",value:function(i){if(!this._config||!this.hass)return;const t=i.target,e=i.detail.value;if(this[`_${t.configValue}`]===e)return;let a;t.configValue&&(!1===e||e?a={...this._config,[t.configValue]:e}:(a={...this._config},delete a[t.configValue])),n(this,"config-changed",{config:a})}},{kind:"get",static:!0,key:"styles",value:function(){return _}}]}}),t);export{k as HuiButtonCardEditor};
