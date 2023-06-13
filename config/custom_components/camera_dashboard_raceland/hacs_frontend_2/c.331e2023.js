import{_ as t,d as i,g as e,t as s,H as a,x as n,c,f as d,q as o,o as r}from"./main-b570e60a.js";import"./c.9e58f139.js";import{j as l,ar as h,at as u,al as p,am as m,as as k,an as v,ao as f,ax as y,aq as _}from"./c.5a5021e9.js";import{s as g}from"./c.d294c310.js";import{ai as b,U as $}from"./c.4d0662f5.js";import{d as S}from"./c.1ded644c.js";import"./c.0b900d77.js";import{b as j}from"./c.08872315.js";import{e as x}from"./c.1d43e39e.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.fbe33aec.js";t([o("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[s()],key:"_opened",value:void 0},{kind:"field",decorators:[a("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_rowRenderer",value(){return t=>n`<mwc-list-item graphic="avatar" twoline>
    ${t.state?n`<state-badge slot="graphic" .stateObj=${t.state}></state-badge>`:""}
    <span>${t.name}</span>
    <span slot="secondary"
      >${""===t.id||"__missing"===t.id?n`<a
            target="_blank"
            rel="noopener noreferrer"
            href=${S(this.hass)}
            >${this.hass.localize("ui.components.statistic-picker.learn_more")}</a
          >`:t.id}</span
    >
  </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return c(((t,i,e,s)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics")}];i&&(t=t.filter((t=>i.includes(t.unit_of_measurement))));const a=[];return t.forEach((t=>{const i=this.hass.states[t.statistic_id];i?e&&!e.includes(i.attributes.device_class||"")||a.push({id:t.statistic_id,name:l(i),state:i}):s||a.push({id:t.statistic_id,name:t.name||t.statistic_id})})),a.length?(a.length>1&&a.sort(((t,i)=>g(t.name||"",i.name||""))),a.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity")}),a):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.open()}},{kind:"method",key:"focus",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this.comboBox.items=this._getStatistics(this.statisticIds,this.includeUnitOfMeasurement,this.includeDeviceClasses,this.entitiesOnly):this.updateComplete.then((()=>{this.comboBox.items=this._getStatistics(this.statisticIds,this.includeUnitOfMeasurement,this.includeDeviceClasses,this.entitiesOnly)})))}},{kind:"method",key:"render",value:function(){return n`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}
        .value=${this._value}
        .renderer=${this._rowRenderer}
        .disabled=${this.disabled}
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._statisticChanged}
      ></ha-combo-box>
    `}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await b(this.hass,this.statisticTypes)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{d(this,"value-changed",{value:t}),d(this,"change")}),0)}}]}}),i),t([o("ha-statistics-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[e({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[e({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[e({attribute:"picked-statistic-label"})],key:"pickedStatisticLabel",value:void 0},{kind:"field",decorators:[e({attribute:"pick-statistic-label"})],key:"pickStatisticLabel",value:void 0},{kind:"method",key:"render",value:function(){return this.hass?n`
      ${this._currentStatistics.map((t=>n`
          <div>
            <ha-statistic-picker
              .curValue=${t}
              .hass=${this.hass}
              .value=${t}
              .statisticTypes=${this.statisticTypes}
              .statisticIds=${this.statisticIds}
              .label=${this.pickedStatisticLabel}
              @value-changed=${this._statisticChanged}
            ></ha-statistic-picker>
          </div>
        `))}
      <div>
        <ha-statistic-picker
          .hass=${this.hass}
          .statisticTypes=${this.statisticTypes}
          .statisticIds=${this.statisticIds}
          .label=${this.pickStatisticLabel}
          @value-changed=${this._addStatistic}
        ></ha-statistic-picker>
      </div>
    `:n``}},{kind:"get",key:"_currentStatistics",value:function(){return this.value||[]}},{kind:"method",key:"_updateStatistics",value:async function(t){this.value=t,d(this,"value-changed",{value:t})}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();const i=t.currentTarget.curValue,e=t.detail.value;if(e===i)return;const s=this._currentStatistics;e&&!s.includes(e)?this._updateStatistics(s.map((t=>t===i?e:t))):this._updateStatistics(s.filter((t=>t!==i)))}},{kind:"method",key:"_addStatistic",value:async function(t){t.stopPropagation();const i=t.detail.value;if(!i)return;if(t.currentTarget.value="",!i)return;const e=this._currentStatistics;e.includes(i)||this._updateStatistics([...e,i])}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      :host {
        width: 200px;
        display: block;
      }
      ha-statistic-picker {
        display: block;
        width: 100%;
        margin-top: 8px;
      }
    `}}]}}),i);const C=h([u("sum"),u("min"),u("max"),u("mean")]),w=p(j,m({entities:k(x),title:v(f()),days_to_show:v(y()),period:v(h([u("5minute"),u("hour"),u("day"),u("month")])),chart_type:v(h([u("bar"),u("line")])),stat_types:v(h([k(C),C]))})),I=["5minute","hour","day","month"];let T=t([o("hui-statistics-graph-card-editor")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(t){_(t,w),this._config=t,this._configEntities=t.entities?$(t.entities,!1).map((t=>t.entity)):[]}},{kind:"field",key:"_schema",value:()=>c((t=>[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"period",required:!0,selector:{select:{options:I.map((i=>({value:i,label:t(`ui.panel.lovelace.editor.card.statistics-graph.periods.${i}`)})))}}},{name:"days_to_show",required:!0,selector:{number:{min:1,mode:"box"}}},{name:"stat_types",required:!0,type:"multi_select",options:[["mean","Mean"],["min","Min"],["max","Max"],["sum","Sum"]]},{name:"chart_type",required:!0,type:"select",options:[["line","Line"],["bar","Bar"]]}]}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n``;const t=this._schema(this.hass.localize),i=this._config.stat_types?Array.isArray(this._config.stat_types)?this._config.stat_types:[this._config.stat_types]:["mean","min","max","sum"],e={chart_type:"line",period:"hour",days_to_show:30,...this._config,stat_types:i};return n`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
        <ha-statistics-picker
          .hass=${this.hass}
          .pickStatisticLabel=${"Add a statistic"}
          .pickedStatisticLabel=${"Statistic"}
          .value=${this._configEntities}
          .configValue=${"entities"}
          @value-changed=${this._entitiesChanged}
        ></ha-statistics-picker>
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(t){d(this,"config-changed",{config:t.detail.value})}},{kind:"method",key:"_entitiesChanged",value:function(t){d(this,"config-changed",{config:{...this._config,entities:t.detail.value}})}},{kind:"field",key:"_computeLabelCallback",value(){return t=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.statistics-graph.${t.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>r`
    ha-statistics-picker {
      width: 100%;
    }
  `}]}}),i);export{T as HuiStatisticsGraphCardEditor};
