import{_ as e,d as t,g as i,x as o,o as d,q as a}from"./main-b570e60a.js";e([a("camera-model-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:String})],key:"label",value:()=>""},{kind:"field",decorators:[i({attribute:!1})],key:"cameraModelInfo",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return o`
      <mwc-icon-button
        .ariaLabel=${this.label}
        .title=${this.hideTitle?"":this.label}
        .disabled=${this.disabled}
      >
        ${this.hideTitle?"":this.label}
      </mwc-icon-button>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      mwc-icon-button {
        width: 100%;
        border-radius: 25px;
        border: 2px solid #73ad21;
        padding: 20px 20px 20px 20px;
        text-align: center;
        cursor: pointer;
        --mdc-theme-on-primary: currentColor;
        --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
      }
    `}}]}}),t);
