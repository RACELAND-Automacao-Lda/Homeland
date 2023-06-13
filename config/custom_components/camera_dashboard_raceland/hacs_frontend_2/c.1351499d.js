import{_ as e,d as t,g as a,t as r,x as s,y as o,c as i,eF as n,eG as d,ew as l,eH as c,eI as u,eJ as f,o as _,q as g}from"./main-b570e60a.js";import{w as h}from"./c.4d0662f5.js";import{f as y,x as m,j as p}from"./c.5a5021e9.js";import{s as b,a as k,g as v}from"./c.09a10f00.js";import{S as j}from"./c.7cce6779.js";import{i as x}from"./c.144e89ef.js";import{d as O,c as S}from"./c.655d6539.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.c13d4687.js";import"./c.da136530.js";let $=e([g("hui-energy-usage-graph-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[r()],key:"_config",value:void 0},{kind:"field",decorators:[r()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[r()],key:"_start",value:()=>b()},{kind:"field",decorators:[r()],key:"_end",value:()=>k()},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[v(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>this._getStatistics(e)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-card>
        ${this._config.title?s`<h1 class="card-header">${this._config.title}</h1>`:""}
        <div
          class="content ${o({"has-header":!!this._config.title})}"
        >
          <ha-chart-base
            .data=${this._chartData}
            .options=${this._createOptions(this._start,this._end,this.hass.locale)}
            chart-type="bar"
          ></ha-chart-base>
          ${this._chartData.datasets.some((e=>e.data.length))?"":s`<div class="no-data">
                ${x(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")}
              </div>`}
        </div>
      </ha-card>
    `:s``}},{kind:"field",key:"_createOptions",value(){return i(((e,t,a)=>{const r=O(t,e);return{parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:t.getTime(),adapters:{date:{locale:a}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:r>35?"monthyear":r>7?"date":r>2?"weekday":r>0?"datetime":"hour",minUnit:r>35?"month":r>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0,callback:e=>y(Math.abs(e),a)}}},plugins:{tooltip:{mode:"x",intersect:!0,position:"nearest",filter:e=>"0"!==e.formattedValue,callbacks:{title:e=>{if(r>0)return e[0].label;const t=new Date(e[0].parsed.x);return`${h(t,a)} – ${h(S(t,1),a)}`},label:e=>`${e.dataset.label}: ${y(Math.abs(e.parsed.y),a)} kWh`,footer:e=>{let t=0,r=0;for(const a of e){const e=a.dataset.data[a.dataIndex].y;e>0?t+=e:r+=Math.abs(e)}return[t?this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed",{num:y(t,a)}):"",r?this.hass.localize("ui.panel.lovelace.cards.energyenergy_usage_graph.total_returned",{num:y(r,a)}):""].filter(Boolean)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:m(a)}}))}},{kind:"method",key:"_getStatistics",value:async function(e){const t=[],a={};for(const t of e.prefs.energy_sources)if("solar"!==t.type)if("battery"!==t.type){if("grid"===t.type){for(const e of t.flow_from)a.from_grid?a.from_grid.push(e.stat_energy_from):a.from_grid=[e.stat_energy_from];for(const e of t.flow_to)a.to_grid?a.to_grid.push(e.stat_energy_to):a.to_grid=[e.stat_energy_to]}}else a.to_battery?(a.to_battery.push(t.stat_energy_to),a.from_battery.push(t.stat_energy_from)):(a.to_battery=[t.stat_energy_to],a.from_battery=[t.stat_energy_from]);else a.solar?a.solar.push(t.stat_energy_from):a.solar=[t.stat_energy_from];this._start=e.start,this._end=e.end||k();const r={},s={},o=getComputedStyle(this),i={to_grid:o.getPropertyValue("--energy-grid-return-color").trim(),to_battery:o.getPropertyValue("--energy-battery-in-color").trim(),from_grid:o.getPropertyValue("--energy-grid-consumption-color").trim(),used_grid:o.getPropertyValue("--energy-grid-consumption-color").trim(),used_solar:o.getPropertyValue("--energy-solar-color").trim(),used_battery:o.getPropertyValue("--energy-battery-out-color").trim()},_={used_grid:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid"),used_solar:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar"),used_battery:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery")};Object.entries(a).forEach((([t,a])=>{const o=["solar","to_grid","from_grid","to_battery","from_battery"].includes(t),i=!["solar","from_battery"].includes(t),n={},d={};a.forEach((t=>{const a=e.stats[t];if(!a)return;const r={};let s;a.forEach((e=>{if(null===e.sum)return;if(void 0===s)return void(s=e.sum);const t=e.sum-s;o&&(n[e.start]=e.start in n?n[e.start]+t:t),i&&!(e.start in r)&&(r[e.start]=t),s=e.sum})),d[t]=r})),o&&(s[t]=n),i&&(r[t]=d)}));const g={},h={};if((s.to_grid||s.to_battery)&&s.solar){const e={};for(const t of Object.keys(s.solar)){var y,m;if(e[t]=(s.solar[t]||0)-((null===(y=s.to_grid)||void 0===y?void 0:y[t])||0)-((null===(m=s.to_battery)||void 0===m?void 0:m[t])||0),e[t]<0){var b,v,j;if(s.to_battery)if(g[t]=-1*e[t],g[t]>((null===(b=s.from_grid)||void 0===b?void 0:b[t])||0))h[t]=Math.min(0,g[t]-((null===(v=s.from_grid)||void 0===v?void 0:v[t])||0)),g[t]=null===(j=s.from_grid)||void 0===j?void 0:j[t];e[t]=0}}r.used_solar={used_solar:e}}if(s.from_battery)if(s.to_grid){const e={};for(const t of Object.keys(s.from_battery))e[t]=(s.from_battery[t]||0)-(h[t]||0);r.used_battery={used_battery:e}}else r.used_battery={used_battery:s.from_battery};if(r.from_grid&&s.to_battery){const e={};for(const t of Object.keys(g)){let a,s=0;for(const[e,o]of Object.entries(r.from_grid))if(o[t]&&(a=e,s++),s>1)break;if(1===s)r.from_grid[a][t]-=g[t]||0;else{let a=0;Object.values(r.from_grid).forEach((e=>{a+=e[t]||0,delete e[t]})),e[t]=a-(g[t]||0)}}r.used_grid={used_grid:e}}let x=[];Object.values(r).forEach((e=>{Object.values(e).forEach((e=>{x=x.concat(Object.keys(e))}))}));const O=Array.from(new Set(x));Object.entries(r).forEach((([e,a])=>{Object.entries(a).forEach((([a,s],o)=>{const g=[],h=this.hass.states[a],y=o>0?this.hass.themes.darkMode?n(d(l(i[e])),o):c(d(l(i[e])),o):void 0,m=y?u(f(y)):i[e];g.push({label:e in _?_[e]:h?p(h):a,order:"used_solar"===e?0:"to_battery"===e?Object.keys(r).length:o+1,borderColor:m,backgroundColor:m+"7F",stack:"stack",data:[]});for(const t of O){const a=s[t]||0,r=new Date(t);g[0].data.push({x:r.getTime(),y:a&&["to_grid","to_battery"].includes(e)?-1*a:a})}Array.prototype.push.apply(t,g)}))})),this._chartData={datasets:t}}},{kind:"get",static:!0,key:"styles",value:function(){return _`
      ha-card {
        height: 100%;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .no-data {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20%;
        margin-left: 32px;
        box-sizing: border-box;
      }
    `}}]}}),j(t));export{$ as HuiEnergyUsageGraphCard};
