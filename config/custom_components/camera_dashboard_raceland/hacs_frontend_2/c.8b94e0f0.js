import{_ as e,d as a,g as t,t as i,x as s,eA as o,J as n,o as r,q as c}from"./main-b570e60a.js";import{aQ as d}from"./c.5a5021e9.js";import"./c.e95f0770.js";import{g as l,e as h}from"./c.09a10f00.js";import{Z as u,ac as p}from"./c.4d0662f5.js";import{S as g}from"./c.7cce6779.js";import{severityMap as m}from"./c.6ad21642.js";import"./c.2aff7a3c.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.655d6539.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";e([c("hui-energy-carbon-consumed-gauge-card")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"field",decorators:[i()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"hassSubscribe",value:function(){var e;return[l(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s``;if(!this._data)return s`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;if(!this._data.co2SignalEntity)return s``;if(!this.hass.states[this._data.co2SignalEntity])return s`<hui-warning>
        ${u(this.hass,this._data.co2SignalEntity)}
      </hui-warning>`;const e=this._data.prefs,a=h(e),t=p(this._data.stats,a.grid[0].flow_from.map((e=>e.stat_energy_from)));let i;if(0===t&&(i=100),this._data.fossilEnergyConsumption&&t){const e=this._data.fossilEnergyConsumption?Object.values(this._data.fossilEnergyConsumption).reduce(((e,a)=>e+a),0):0,s=a.solar&&p(this._data.stats,a.solar.map((e=>e.stat_energy_from)))||0,o=p(this._data.stats,a.grid[0].flow_to.map((e=>e.stat_energy_to)))||0,n=t+Math.max(0,s-o);i=d(100*(1-e/n))}return s`
      <ha-card>
        ${void 0!==i?s`
              <ha-svg-icon id="info" .path=${o}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.card_indicates_energy_used")}
                </span>
              </paper-tooltip>
              <ha-gauge
                min="0"
                max="100"
                .value=${i}
                .locale=${this.hass.locale}
                label="%"
                style=${n({"--gauge-color":this._computeSeverity(i)})}
              ></ha-gauge>
              <div class="name">
                ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_consumed")}
              </div>
            `:s`${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_not_calculated")}`}
      </ha-card>
    `}},{kind:"method",key:"_computeSeverity",value:function(e){return e<10?m.red:e<30?m.yellow:e>75?m.green:m.normal}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-card {
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
      }

      ha-gauge {
        width: 100%;
        max-width: 250px;
      }

      .name {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        width: 100%;
        font-size: 15px;
        margin-top: 8px;
      }

      ha-svg-icon {
        position: absolute;
        right: 4px;
        top: 4px;
        color: var(--secondary-text-color);
      }
      paper-tooltip > span {
        font-size: 12px;
        line-height: 12px;
      }
      paper-tooltip {
        width: 80%;
        max-width: 250px;
        top: 8px !important;
      }
    `}}]}}),g(a));
