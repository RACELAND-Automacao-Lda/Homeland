import{_ as t,d as s,g as a,t as i,x as e,o as n,q as o}from"./main-b570e60a.js";import{ai as l,aj as d,ak as c}from"./c.4d0662f5.js";import{z as r,f as h,x as u,j as m}from"./c.5a5021e9.js";t([o("statistics-chart")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[a({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[a()],key:"names",value:()=>!1},{kind:"field",decorators:[a()],key:"unit",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[a({type:Array})],key:"statTypes",value:()=>["sum","min","mean","max"]},{kind:"field",decorators:[a()],key:"chartType",value:()=>"line"},{kind:"field",decorators:[a({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"field",decorators:[i()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[i()],key:"_chartOptions",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated||this._createOptions(),(t.has("statisticsData")||t.has("statTypes"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return r(this.hass,"history")?this.isLoadingData&&!this.statisticsData?e`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.loading_statistics")}
      </div>`:this.statisticsData&&Object.keys(this.statisticsData).length?e`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        .chartType=${this.chartType}
      ></ha-chart-base>
    `:e`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.no_statistics_found")}
      </div>`:e`<div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`}},{kind:"method",key:"_createOptions",value:function(){this._chartOptions={parsing:!1,animation:!1,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:!1,ticks:{maxTicksLimit:7},title:{display:this.unit,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:t=>`${t.dataset.label}: ${h(t.parsed.y,this.hass.locale)} ${t.dataset.unit||""}`}},filler:{propagate:!0},legend:{display:!0,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.4,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:u(this.hass.locale)}}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await l(this.hass)}},{kind:"method",key:"_generateData",value:async function(){if(!this.statisticsData)return;this.statisticIds||await this._getStatisticIds();let t=0;const s=Object.values(this.statisticsData),a=[];let i,e;if(0===s.length)return;i=this.endTime||new Date(Math.max(...s.map((t=>new Date(t[t.length-1].start).getTime())))),i>new Date&&(i=new Date);const n=this.names||{};s.forEach((s=>{const o=s[0];let l=n[o.statistic_id];if(!l){const t=this.hass.states[o.statistic_id];l=t?m(t):o.statistic_id}const r=this.statisticIds.find((t=>t.statistic_id===o.statistic_id));this.unit||(void 0===e?e=null==r?void 0:r.unit_of_measurement:e!==(null==r?void 0:r.unit_of_measurement)&&(e=null));let h=null;const u=[],p=(t,s)=>{s&&(t>i||(u.forEach(((a,i)=>{null===s[i]&&h&&null!==h[i]&&a.data.push({x:t.getTime(),y:h[i]}),a.data.push({x:t.getTime(),y:s[i]})})),h=s))},y=d(t,this._computedStyle);t++;const k=[],f=this.statTypes.includes("mean")&&c(s,"mean");(f?[...this.statTypes].sort(((t,s)=>"min"===t||"max"===s?-1:"max"===t||"min"===s?1:0)):this.statTypes).forEach((t=>{if(c(s,t)){const s=f&&("min"===t||"max"===t);k.push(t),u.push({label:`${l} (${this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`)})\n            `,fill:!!f&&("min"===t?"+1":"max"===t&&"-1"),borderColor:s?y+"7F":y,backgroundColor:s?y+"3F":y+"7F",pointRadius:0,data:[],unit:null==r?void 0:r.unit_of_measurement,band:s})}}));let v=null,_=null,g=null;s.forEach((t=>{const s=new Date(t.start);if(v===s)return;v=s;const a=[];k.forEach((s=>{let i;"sum"===s?_?i=_+((t.sum||0)-g):(_=i=t.state,g=t.sum):i=t[s],a.push(null!==i?Math.round(100*i)/100:null)})),p(s,a)})),p(i,h),Array.prototype.push.apply(a,u)})),null!==e&&(this._chartOptions={...this._chartOptions,scales:{...this._chartOptions.scales,y:{...this._chartOptions.scales.y,title:{display:e,text:e}}}}),this._chartData={datasets:a}}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      :host {
        display: block;
        min-height: 60px;
      }
      .info {
        text-align: center;
        line-height: 60px;
        color: var(--secondary-text-color);
      }
    `}}]}}),s);