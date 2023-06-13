import{_ as e,d as t,g as s,t as i,k as o,l as a,x as r,Y as n,Z as l,o as d,q as c}from"./main-b570e60a.js";import{d as h,aM as u,aL as p,aO as _}from"./c.5a5021e9.js";import{af as k}from"./c.4d0662f5.js";import{g as m,s as y,a as f}from"./c.09a10f00.js";import{S as v}from"./c.7cce6779.js";import{r as b,b as g,s as D,e as w,d as x}from"./c.655d6539.js";import{g as j,f as $,s as z,d as C,c as S,a as T,b as K,i as O,e as P,h as F}from"./c.e041b463.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.c13d4687.js";import"./c.da136530.js";e([c("hui-energy-period-selector")],(function(e,t){class c extends t{constructor(...t){super(...t),e(this)}}return{F:c,d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"collectionKey",value:void 0},{kind:"field",decorators:[i()],key:"_startDate",value:void 0},{kind:"field",decorators:[i()],key:"_endDate",value:void 0},{kind:"field",decorators:[i()],key:"_period",value:void 0},{kind:"method",key:"connectedCallback",value:function(){o(a(c.prototype),"connectedCallback",this).call(this),k(this,"narrow",this.offsetWidth<600)}},{kind:"method",key:"hassSubscribe",value:function(){return[m(this.hass,{key:this.collectionKey}).subscribe((e=>this._updateDates(e)))]}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._startDate)return r``;const e=[{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.day"),value:"day"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.week"),value:"week"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.month"),value:"month"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.year"),value:"year"}];return r`
      <div class="row">
        <div class="label">
          ${"day"===this._period?h(this._startDate,this.hass.locale):"month"===this._period?u(this._startDate,this.hass.locale):"year"===this._period?p(this._startDate,this.hass.locale):`${_(this._startDate,this.hass.locale)} – ${_(this._endDate||new Date,this.hass.locale)}`}
          <ha-icon-button
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}
            @click=${this._pickPrevious}
            .path=${n}
          ></ha-icon-button>
          <ha-icon-button
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}
            @click=${this._pickNext}
            .path=${l}
          ></ha-icon-button>
          <mwc-button dense outlined @click=${this._pickToday}>
            ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.today")}
          </mwc-button>
        </div>
        <div class="period">
          <ha-button-toggle-group
            .buttons=${e}
            .active=${this._period}
            dense
            @value-changed=${this._handleView}
          ></ha-button-toggle-group>
        </div>
      </div>
    `}},{kind:"method",key:"_handleView",value:function(e){this._period=e.detail.value;const t=y(),s=!this._startDate||function(e,t){b(2,arguments);var s=g(e).getTime(),i=g(t.start).getTime(),o=g(t.end).getTime();if(!(i<=o))throw new RangeError("Invalid interval");return s>=i&&s<=o}(t,{start:this._startDate,end:this._endDate||f()})?t:this._startDate;this._setDate("day"===this._period?D(s):"week"===this._period?j(s,{weekStartsOn:1}):"month"===this._period?$(s):z(s))}},{kind:"method",key:"_pickToday",value:function(){this._setDate("day"===this._period?y():"week"===this._period?j(new Date,{weekStartsOn:1}):"month"===this._period?$(new Date):z(new Date))}},{kind:"method",key:"_pickPrevious",value:function(){const e="day"===this._period?C(this._startDate,-1):"week"===this._period?S(this._startDate,-1):"month"===this._period?T(this._startDate,-1):K(this._startDate,-1);this._setDate(e)}},{kind:"method",key:"_pickNext",value:function(){const e="day"===this._period?C(this._startDate,1):"week"===this._period?S(this._startDate,1):"month"===this._period?T(this._startDate,1):K(this._startDate,1);this._setDate(e)}},{kind:"method",key:"_setDate",value:function(e){const t="day"===this._period?w(e):"week"===this._period?O(e,{weekStartsOn:1}):"month"===this._period?P(e):F(e),s=m(this.hass,{key:this.collectionKey});s.setPeriod(e,t),s.refresh()}},{kind:"method",key:"_updateDates",value:function(e){this._startDate=e.start,this._endDate=e.end||f();const t=x(this._endDate,this._startDate);this._period=t<1?"day":6===t?"week":t>26&&t<31?"month":364===t||365===t?"year":void 0}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      .row {
        display: flex;
        justify-content: flex-end;
      }
      :host([narrow]) .row {
        flex-direction: column-reverse;
      }
      :host([narrow]) .period {
        margin-bottom: 8px;
      }
      .label {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
      }
      .period {
        display: flex;
        justify-content: flex-end;
      }
      :host {
        --mdc-button-outline-color: currentColor;
        --primary-color: currentColor;
        --mdc-theme-primary: currentColor;
        --mdc-button-disabled-outline-color: var(--disabled-text-color);
        --mdc-button-disabled-ink-color: var(--disabled-text-color);
        --mdc-icon-button-ripple-opacity: 0.2;
      }
      ha-icon-button {
        --mdc-icon-button-size: 28px;
      }
      ha-button-toggle-group {
        padding-left: 8px;
      }
      mwc-button {
        flex-shrink: 0;
      }
    `}}]}}),v(t));let N=e([c("hui-energy-date-selection-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?r`
      <hui-energy-period-selector
        .hass=${this.hass}
        .collectionKey=${this._config.collection_key}
      ></hui-energy-period-selector>
    `:r``}},{kind:"get",static:!0,key:"styles",value:function(){return d``}}]}}),t);export{N as HuiEnergyDateSelectionCard};
