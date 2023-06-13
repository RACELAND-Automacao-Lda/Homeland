import{ah as t,H as e,g as i,en as a,x as s,y as o,Q as l,eo as n,o as r,_ as d,k as h,l as p,ep as u,q as c}from"./main-b570e60a.js";const m={fromAttribute:t=>null!==t&&(""===t||t),toAttribute:t=>"boolean"==typeof t?t?"":null:t};class x extends a{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,i=t&&!e,a=!!this.helper||!!this.validationMessage||i,l={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return s`
      <label class="mdc-text-field mdc-text-field--textarea ${o(l)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(a,i)}
    `}renderInput(){const t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,a=this.autocapitalize?this.autocapitalize:void 0;return s`
      <textarea
          aria-labelledby=${l(t)}
          class="mdc-text-field__input"
          .value="${n(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l(e)}"
          maxlength="${l(i)}"
          name="${l(""===this.name?void 0:this.name)}"
          inputmode="${l(this.inputMode)}"
          autocapitalize="${l(a)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}t([e("textarea")],x.prototype,"formElement",void 0),t([i({type:Number})],x.prototype,"rows",void 0),t([i({type:Number})],x.prototype,"cols",void 0),t([i({converter:m})],x.prototype,"charCounter",void 0);const g=r`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;d([c("ha-textarea")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(t){h(p(a.prototype),"updated",this).call(this,t),this.autogrow&&t.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[u,g,r`
      :host([autogrow]) {
        max-height: 200px;
      }
      :host([autogrow]) .mdc-text-field {
        position: relative;
        min-height: 74px;
        min-width: 178px;
      }
      :host([autogrow]) .mdc-text-field:after {
        content: attr(data-value);
        margin-top: 23px;
        margin-bottom: 9px;
        line-height: 1.5rem;
        min-height: 42px;
        padding: 0px 32px 0 16px;
        letter-spacing: var(
          --mdc-typography-subtitle1-letter-spacing,
          0.009375em
        );
        visibility: hidden;
        white-space: pre-wrap;
      }
      :host([autogrow]) .mdc-text-field__input {
        position: absolute;
        height: calc(100% - 32px);
      }
      :host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `]}]}}),x);const b=t=>`/local/brands/${t.domain}/icon.png`,f=t=>t.split("/")[4];export{b,f as e};
