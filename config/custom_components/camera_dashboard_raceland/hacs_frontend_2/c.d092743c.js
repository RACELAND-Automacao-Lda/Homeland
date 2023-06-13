import{_ as a,d as e,g as t,x as i,aI as s,f as l,o,q as n}from"./main-b570e60a.js";import{ae as d}from"./c.5a5021e9.js";const r=()=>import("./c.c6be24c9.js");a([n("ha-date-input")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"method",key:"render",value:function(){return i`<ha-textfield
      .label=${this.label}
      .disabled=${this.disabled}
      iconTrailing
      @click=${this._openDialog}
      .value=${this.value?d(new Date(this.value),this.locale):""}
    >
      <ha-svg-icon slot="trailingIcon" .path=${s}></ha-svg-icon>
    </ha-textfield>`}},{kind:"method",key:"_openDialog",value:function(){var a,e;this.disabled||(a=this,e={min:"1970-01-01",value:this.value,onChange:a=>this._valueChanged(a),locale:this.locale.language},l(a,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:r,dialogParams:e}))}},{kind:"method",key:"_valueChanged",value:function(a){this.value!==a&&(this.value=a,l(this,"change"),l(this,"value-changed",{value:a}))}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
    `}}]}}),e);const u=a=>`${a.attributes.year||"1970"}-${String(a.attributes.month||"01").padStart(2,"0")}-${String(a.attributes.day||"01").padStart(2,"0")}T${String(a.attributes.hour||"00").padStart(2,"0")}:${String(a.attributes.minute||"00").padStart(2,"0")}:${String(a.attributes.second||"00").padStart(2,"0")}`,c=(a,e,t=undefined,i=undefined)=>{const s={entity_id:e,time:t,date:i};a.callService(e.split(".",1)[0],"set_datetime",s)};export{c as a,u as s};
