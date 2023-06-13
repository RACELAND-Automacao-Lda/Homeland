import{_ as t,d as i,g as s,t as o,x as e,o as n,q as r}from"./main-b570e60a.js";import{X as a,Z as c,_ as h}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([r("hui-cover-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return a(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return e``;const t=this.hass.states[this._config.entity];return t?e`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${"medium"!==this._config.layout?h(t)?e`
                <ha-cover-tilt-controls
                  .hass=${this.hass}
                  .stateObj=${t}
                ></ha-cover-tilt-controls>
              `:e`
                <ha-cover-controls
                  .hass=${this.hass}
                  .stateObj=${t}
                ></ha-cover-controls>
              `:e``}
      </hui-generic-entity-row>
    `:e`
        <hui-warning>
          ${c(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `}}]}}),i);
