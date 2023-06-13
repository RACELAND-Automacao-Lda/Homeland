import{_ as t,d as s,g as e,t as i,x as o,o as a}from"./main-b570e60a.js";import{d as r}from"./c.f9bdd698.js";import{c as n}from"./c.5a5021e9.js";import{l as d,m as h}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let c=t(null,(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"stateObj",value:void 0},{kind:"field",decorators:[i()],key:"_groupDomainStateObj",value:void 0},{kind:"field",decorators:[i()],key:"_moreInfoType",value:void 0},{kind:"method",key:"updated",value:function(t){if(!this.hass||!this.stateObj||!t.has("hass")&&!t.has("stateObj"))return;const s=this.stateObj.attributes.entity_id.map((t=>this.hass.states[t])).filter((t=>t));if(!s.length)return this._groupDomainStateObj=void 0,void(this._moreInfoType=void 0);const e=s.find((t=>"on"===t.state))||s[0],i=n(e);if("group"!==i&&s.every((t=>i===n(t)))){this._groupDomainStateObj={...e,entity_id:this.stateObj.entity_id,attributes:{...e.attributes}};const t=h(i);d(t),this._moreInfoType="hidden"===t?void 0:`more-info-${t}`}else this._groupDomainStateObj=void 0,this._moreInfoType=void 0}},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?o`${this._moreInfoType?r(this._moreInfoType,{hass:this.hass,stateObj:this._groupDomainStateObj}):""}
    ${this.stateObj.attributes.entity_id.map((t=>{const s=this.hass.states[t];return s?o`
        <state-card-content
          .stateObj=${s}
          .hass=${this.hass}
        ></state-card-content>
      `:""}))}`:o``}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      state-card-content {
        display: block;
        margin-top: 8px;
      }
    `}}]}}),s);customElements.define("more-info-group",c);
