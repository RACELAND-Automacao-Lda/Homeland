import{_ as e,d as t,g as i,x as a,at as o,f as s,o as n,q as c,t as l}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as r,am as d,an as u,ao as h,ax as f,ap as g,as as m,aq as _}from"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.591c1a78.js";import{p as v}from"./c.a01ae87b.js";import{e as p}from"./c.1d43e39e.js";import{c as k}from"./c.461f2735.js";import{b as y}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.ff74f86a.js";import"./c.509948f5.js";import"./c.0b900d77.js";import"./c.fbe33aec.js";e([c("hui-input-list-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"inputLabel",value:void 0},{kind:"method",key:"render",value:function(){return this.value?a`
      ${this.value.map(((e,t)=>a`
          <ha-textfield
            .label=${this.inputLabel}
            .value=${e}
            .configValue=${"entry"}
            .index=${t}
            @input=${this._valueChanged}
            @blur=${this._consolidateEntries}
            @keydown=${this._handleKeyDown}
            iconTrailing
            ><ha-icon-button
              slot="trailingIcon"
              class="clear-button"
              .path=${o}
              no-ripple
              @click=${this._removeEntry}
              .label=${this.hass.localize("ui.common.clear")}
            >
            </ha-icon-button>
          </ha-textfield>
        `))}
      <ha-textfield
        .label=${this.inputLabel}
        @change=${this._addEntry}
      ></ha-textfield>
    `:a``}},{kind:"method",key:"_addEntry",value:function(e){const t=e.target;if(""===t.value)return;const i=this.value.concat(t.value);t.value="",s(this,"value-changed",{value:i}),e.target.blur()}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.target,i=this.value.concat();i[t.index]=t.value,s(this,"value-changed",{value:i})}},{kind:"method",key:"_handleKeyDown",value:function(e){"Enter"===e.key&&(e.stopPropagation(),this._consolidateEntries(e))}},{kind:"method",key:"_consolidateEntries",value:function(e){const t=e.target;if(""===t.value){const e=this.value.concat();e.splice(t.index,1),s(this,"value-changed",{value:e})}}},{kind:"method",key:"_removeEntry",value:function(e){const t=e.currentTarget.parentElement,i=this.value.concat();i.splice(t.index,1),s(this,"value-changed",{value:i})}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-icon-button {
        margin-right: -24px;
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
    `}}]}}),t);const b=r(y,d({title:u(h()),aspect_ratio:u(h()),default_zoom:u(f()),dark_mode:u(g()),entities:m(p),hours_to_show:u(f()),geo_location_sources:u(m(h()))})),$=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"aspect_ratio",selector:{text:{}}},{name:"default_zoom",selector:{number:{mode:"box",min:0}}},{name:"dark_mode",selector:{boolean:{}}},{name:"hours_to_show",selector:{number:{mode:"box",min:1}}}]}];let x=e([c("hui-map-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[l()],key:"_config",value:void 0},{kind:"field",decorators:[l()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){_(e,b),this._config=e,this._configEntities=e.entities?v(e.entities):[]}},{kind:"get",key:"_geo_location_sources",value:function(){return this._config.geo_location_sources||[]}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${$}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="card-config">
        <hui-entity-editor
          .hass=${this.hass}
          .entities=${this._configEntities}
          @entities-changed=${this._entitiesValueChanged}
        ></hui-entity-editor>
        <h3>
          ${this.hass.localize("ui.panel.lovelace.editor.card.map.geo_location_sources")}
        </h3>
        <div class="geo_location_sources">
          <hui-input-list-editor
            .inputLabel=${this.hass.localize("ui.panel.lovelace.editor.card.map.source")}
            .hass=${this.hass}
            .value=${this._geo_location_sources}
            @value-changed=${this._geoSourcesChanged}
          ></hui-input-list-editor>
        </div>
      </div>
    `:a``}},{kind:"method",key:"_entitiesValueChanged",value:function(e){e.detail&&e.detail.entities&&(this._config={...this._config,entities:e.detail.entities},this._configEntities=v(this._config.entities),s(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_geoSourcesChanged",value:function(e){if(!this._config||!this.hass)return;const t=e.detail.value;this._geo_location_sources!==t&&(""===t?(this._config={...this._config},delete this._config.geo_location_sources):this._config={...this._config,geo_location_sources:t},s(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(e){s(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.map.${e.name}`)}},{kind:"get",static:!0,key:"styles",value:function(){return[k,n`
        .geo_location_sources {
          padding-left: 20px;
        }
      `]}}]}}),t);export{x as HuiMapCardEditor};
