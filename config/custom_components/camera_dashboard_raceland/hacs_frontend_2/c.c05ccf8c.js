import{_ as e,d as a,g as i,t,x as r,eA as o,o as s,q as n}from"./main-b570e60a.js";import{f as l}from"./c.5a5021e9.js";import"./c.e95f0770.js";import{g as c}from"./c.09a10f00.js";import{ac as d}from"./c.4d0662f5.js";import{S as u}from"./c.7cce6779.js";import"./c.2aff7a3c.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.655d6539.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";const g=[{level:-1,stroke:"var(--energy-grid-consumption-color)"},{level:0,stroke:"var(--energy-grid-return-color)"}];e([n("hui-energy-grid-neutrality-gauge-card")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"field",decorators:[t()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[c(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return r``;if(!this._data)return r`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs.energy_sources.find((e=>"grid"===e.type));let a;if(!e)return r``;const i=d(this._data.stats,e.flow_from.map((e=>e.stat_energy_from))),t=d(this._data.stats,e.flow_to.map((e=>e.stat_energy_to)));return null!==i&&null!==t&&(a=t>i?1-i/t:t<i?-1*(1-t/i):0),r`
      <ha-card>
        ${void 0!==a?r`
              <ha-svg-icon id="info" .path=${o}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.energy_dependency")}
                  <br /><br />
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.color_explain")}
                </span>
              </paper-tooltip>

              <ha-gauge
                min="-1"
                max="1"
                .value=${a}
                .valueText=${l(Math.abs(t-i),this.hass.locale,{maximumFractionDigits:2})}
                .locale=${this.hass.locale}
                .levels=${g}
                label="kWh"
                needle
              ></ha-gauge>
              <div class="name">
                ${t>=i?this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_returned_grid"):this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_consumed_grid")}
              </div>
            `:this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.grid_neutrality_not_calculated")}
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s`
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
    `}}]}}),u(a));
