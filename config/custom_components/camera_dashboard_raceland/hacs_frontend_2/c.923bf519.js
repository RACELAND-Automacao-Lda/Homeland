import{_ as e,d as a,g as o,t as i,x as s,eA as t,J as r,o as n,q as l}from"./main-b570e60a.js";import"./c.5a5021e9.js";import"./c.e95f0770.js";import{g as c,e as d}from"./c.09a10f00.js";import{ac as u}from"./c.4d0662f5.js";import{S as p}from"./c.7cce6779.js";import{severityMap as h}from"./c.6ad21642.js";import"./c.2aff7a3c.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.655d6539.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";e([l("hui-energy-solar-consumed-gauge-card")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"field",decorators:[i()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[c(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s``;if(!this._data)return s`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs,a=d(e);if(!a.solar)return s``;const o=u(this._data.stats,a.solar.map((e=>e.stat_energy_from))),i=u(this._data.stats,a.grid[0].flow_to.map((e=>e.stat_energy_to)));let n;if(null!==i&&o){n=Math.max(0,o-i)/o*100}return s`
      <ha-card>
        ${void 0!==n?s`
              <ha-svg-icon id="info" .path=${t}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used")}
                  <br /><br />
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used_charge_home_bat")}
                </span>
              </paper-tooltip>
              <ha-gauge
                min="0"
                max="100"
                .value=${n}
                .locale=${this.hass.locale}
                label="%"
                style=${r({"--gauge-color":this._computeSeverity(n)})}
              ></ha-gauge>
              <div class="name">
                ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_energy")}
              </div>
            `:0===o?this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.not_produced_solar_energy"):this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_could_not_calc")}
      </ha-card>
    `}},{kind:"method",key:"_computeSeverity",value:function(e){return e>75?h.green:e<50?h.yellow:h.normal}},{kind:"get",static:!0,key:"styles",value:function(){return n`
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
    `}}]}}),p(a));
