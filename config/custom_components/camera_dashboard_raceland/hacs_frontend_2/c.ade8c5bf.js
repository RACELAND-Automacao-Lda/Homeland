import{_ as a,d as i,g as t,t as s,x as o,ae as e,f as n,o as r,q as l}from"./main-b570e60a.js";import"./c.84af24de.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";a([l("dialog-box")],(function(a,i){return{F:class extends i{constructor(...i){super(...i),a(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_params",value:void 0},{kind:"field",decorators:[s()],key:"_value",value:void 0},{kind:"method",key:"showDialog",value:async function(a){this._params=a,a.prompt&&(this._value=a.defaultValue)}},{kind:"method",key:"closeDialog",value:function(){var a,i;return!(null!==(a=this._params)&&void 0!==a&&a.confirmation||null!==(i=this._params)&&void 0!==i&&i.prompt)&&(!this._params||(this._dismiss(),!0))}},{kind:"method",key:"render",value:function(){if(!this._params)return o``;const a=this._params.confirmation||this._params.prompt;return o`
      <ha-dialog
        open
        ?scrimClickAction=${a}
        ?escapeKeyAction=${a}
        @closed=${this._dialogClosed}
        defaultAction="ignore"
        .heading=${o`${this._params.warning?o`<ha-svg-icon
              .path=${e}
              style="color: var(--warning-color)"
            ></ha-svg-icon> `:""}${this._params.title?this._params.title:this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title")}`}
      >
        <div>
          ${this._params.text?o`
                <p class=${this._params.prompt?"no-bottom-padding":""}>
                  ${this._params.text}
                </p>
              `:""}
          ${this._params.prompt?o`
                <ha-textfield
                  dialogInitialFocus
                  .value=${this._value||""}
                  @keyup=${this._handleKeyUp}
                  @change=${this._valueChanged}
                  .label=${this._params.inputLabel?this._params.inputLabel:""}
                  .type=${this._params.inputType?this._params.inputType:"text"}
                ></ha-textfield>
              `:""}
        </div>
        ${a&&o`
          <mwc-button @click=${this._dismiss} slot="secondaryAction">
            ${this._params.dismissText?this._params.dismissText:this.hass.localize("ui.dialogs.generic.cancel")}
          </mwc-button>
        `}
        <mwc-button
          @click=${this._confirm}
          ?dialogInitialFocus=${!this._params.prompt}
          slot="primaryAction"
        >
          ${this._params.confirmText?this._params.confirmText:this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `}},{kind:"method",key:"_valueChanged",value:function(a){this._value=a.target.value}},{kind:"method",key:"_dismiss",value:function(){var a;null!==(a=this._params)&&void 0!==a&&a.cancel&&this._params.cancel(),this._close()}},{kind:"method",key:"_handleKeyUp",value:function(a){13===a.keyCode&&this._confirm()}},{kind:"method",key:"_confirm",value:function(){this._params.confirm&&this._params.confirm(this._value),this._close()}},{kind:"method",key:"_dialogClosed",value:function(a){"ignore"!==a.detail.action&&this._dismiss()}},{kind:"method",key:"_close",value:function(){this._params&&(this._params=void 0,n(this,"dialog-closed",{dialog:this.localName}))}},{kind:"get",static:!0,key:"styles",value:function(){return[r`
        :host([inert]) {
          pointer-events: initial !important;
          cursor: initial !important;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
            --ha-dialog-border-radius: 1.5rem;
          }
        }

        a {
          color: var(--accent-color);
        }
        p {
          margin: 0;
          padding-top: 6px;
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        .no-bottom-padding {
          padding-bottom: 0;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
        ha-dialog {
          /* Place above other dialogs */
          --dialog-z-index: 104;
        }
      `]}}]}}),i);
