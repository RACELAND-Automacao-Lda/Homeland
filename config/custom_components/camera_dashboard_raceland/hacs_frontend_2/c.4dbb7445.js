import{_ as e,d as i,g as t,x as n,f as a,o as s,q as d}from"./main-b570e60a.js";import{D as u}from"./c.4d0662f5.js";import"./c.509948f5.js";e([d("ha-entities-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[t({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[t({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[t({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return n``;const e=this._currentEntities;return n`
      ${e.map((e=>n`
          <div>
            <ha-entity-picker
              allow-custom-entity
              .curValue=${e}
              .hass=${this.hass}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
              .entityFilter=${this._entityFilter}
              .value=${e}
              .label=${this.pickedEntityLabel}
              @value-changed=${this._entityChanged}
            ></ha-entity-picker>
          </div>
        `))}
      <div>
        <ha-entity-picker
          .hass=${this.hass}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeUnitOfMeasurement=${this.includeUnitOfMeasurement}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
      </div>
    `}},{kind:"field",key:"_entityFilter",value(){return e=>!this.value||!this.value.includes(e.entity_id)}},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,a(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i||void 0!==t&&!u(t))return;const n=this._currentEntities;t&&!n.includes(t)?this._updateEntities(n.map((e=>e===i?t:e))):this._updateEntities(n.filter((e=>e!==i)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;if(e.currentTarget.value="",!i)return;const t=this._currentEntities;t.includes(i)||this._updateEntities([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>s`
    div {
      margin-top: 8px;
    }
  `}]}}),i);
