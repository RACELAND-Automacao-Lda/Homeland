import{_ as e,d as t,g as a,x as i,o as s,f as l,q as o}from"./main-b570e60a.js";import{s as c}from"./c.2aff7a3c.js";e([o("hui-theme-select-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return i`
      <ha-select
        .label=${this.label||`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`}
        .value=${this.value}
        @selected=${this._changed}
        @closed=${c}
        fixedMenuPosition
        naturalMenuWidth
      >
        <mwc-list-item value="remove"
          >${this.hass.localize("ui.panel.lovelace.editor.card.generic.no_theme")}</mwc-list-item
        >
        ${Object.keys(this.hass.themes.themes).sort().map((e=>i`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
      </ha-select>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      ha-select {
        width: 100%;
      }
    `}},{kind:"method",key:"_changed",value:function(e){this.hass&&""!==e.target.value&&(this.value="remove"===e.target.value?void 0:e.target.value,l(this,"value-changed",{value:this.value}))}}]}}),t);
