import{_ as a,d as t,g as e,t as i,dL as s,f as o,x as d,y as r,at as n,Y as l,dE as c,dM as h,dT as m,dU as u,o as p,q as f}from"./main-b570e60a.js";import"./c.17776df6.js";import"./c.84af24de.js";import"./c.9e58f139.js";import"./c.81a9389e.js";import"./c.5c9e0b30.js";import"./c.a963b0fd.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.3df9613c.js";import"./c.a5b80b3f.js";import"./c.a6c70980.js";let g=a([f("raceland-formulary")],(function(a,t){return{F:class extends t{constructor(...t){super(...t),a(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"dialogOpen",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"cameraModelInfo",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"backEvent",value:void 0},{kind:"field",decorators:[e({type:String})],key:"formType",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"registeredCameras",value:void 0},{kind:"field",decorators:[i()],key:"_currTabIndex",value:()=>0},{kind:"field",decorators:[i()],key:"validIssue",value:void 0},{kind:"method",key:"showDialog",value:function(a){this.schema=a.schema,this.backEvent=a.backEvent,this.data=a.data,this.formType=a.formType,this.cameraModelInfo=a.cameraModelInfo,this.dialogOpen=!0,this.registeredCameras=s(this.hass.states).map((a=>a.name))}},{kind:"method",key:"closeDialog",value:function(){return this._currTabIndex=0,this.dialogOpen=void 0,o(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){if(!this.dialogOpen)return d``;const a=this.schema.body,t=this.schema.extra_options;return d`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${r({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <ha-svg-icon
            dialogAction="close"
            class="cancel-icon"
            slot="icon"
            .path=${n}
          ></ha-svg-icon>
        </div>
        <div class="header-text">${this.schema.header.title}</div>
        ${this.validIssue?d` <div class="form-issue">${this.validIssue}</div>`:d``}
        <div class="form">
          <ha-form
            .hass=${this.hass}
            .data=${this.data}
            .schema=${a}
            .computeLabel=${this._computeLabelCallback}
            @value-changed=${this._valueChanged}
          ></ha-form>
          ${t&&this.data.advanced_options?d` <ha-form
                .hass=${this.hass}
                .data=${this.data}
                .schema=${t}
                .computeLabel=${this._computeLabelCallback}
                @value-changed=${this._valueChanged}
              ></ha-form>`:d``}
        </div>
        <div class="options">
          <mwc-button class="button-confirm" @click=${this._accept}
            >${this.schema.footer.accept}</mwc-button
          >
          ${this.backEvent?d`<mwc-button class="button-back" dialogAction="close" @click=${this._goBack}
                >${this.schema.footer.back}
                <ha-svg-icon class="icon-back" slot="icon" .path=${l}></ha-svg-icon
              ></mwc-button>`:d``}
        </div>
      </ha-dialog>
    `}},{kind:"field",key:"_computeLabelCallback",value:()=>a=>c(`form.${a.name}`)},{kind:"method",key:"_valueChanged",value:function(a){const t=h(a.detail.value);this.data={...this.data,...t}}},{kind:"method",key:"validInputCustom",value:function(){return this.data.name?this.registeredCameras.includes(this.data.name)?(this.validIssue=c("form.issues.duplicated_camera_name"),!1):!(!this.data.still_image_url&&!this.data.stream_source)||(this.validIssue=c("form.issues.static_stream_source_missing"),!1):(this.validIssue=c("form.issues.name"),!1)}},{kind:"method",key:"validInput",value:function(){if(!this.data.ip)return this.validIssue=c("form.issues.ip_missing"),!1;if(isNaN(Number(this.data.channel))||void 0!==this.data.channel&&this.data.channel<=0)return this.validIssue=c("form.issues.n_cameras"),!1;let a=[];const t=parseInt(this.data.channel);return a=void 0!==this.data.channel&&t>1?Array.from({length:t},((a,t)=>`${this.data.name} ${t+1}`)):[this.data.name],!(a.filter((a=>this.registeredCameras.includes(a))).length>0)||(this.validIssue=c("form.issues.duplicated_camera_name"),!1)}},{kind:"method",key:"_accept",value:async function(){if("custom_camera"===this.formType){if(!0===this.validInputCustom()){!0===await m(this.hass,this.data)&&(this.closeDialog(),o(this,"update-camera-dashboard"))}}else if("brand_camera"===this.formType){!0===this.validInput()&&(await u(this.hass,this.data),this.closeDialog(),o(this,"update-camera-dashboard"))}}},{kind:"method",key:"_goBack",value:function(a){const t=this.backEvent,e=t.modelDatabase;e?o(this,t.event_name,{modelsInfo:e}):o(this,t.event_name)}},{kind:"get",static:!0,key:"styles",value:function(){return[p`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-form {
          margin-left: 8%;
          margin-right: 8%;
        }

        ha-formfield {
          display: flex;
          height: 56px;
          align-items: center;
          --mdc-typography-body2-font-size: 1em;
        }

        .button-confirm {
          background-color: #4ba2ff;
          float: right;
        }

        .button-back {
          --mdc-theme-primary: #7b7b7b;
          float: left;
          margin-left: 5%;
        }

        .form-issue {
          font-family: "Roboto";
          font-style: normal;
          font-size: 12px;
          color: #e41111;
          padding: 1% 1% 1% 12%;
          text-align: left;
          width: 100%;
        }

        .icon-back {
          width: 30px;
          height: 30px;
        }
        .form {
          margin-left: 10%;
          margin-right: 10%;
        }

        .header-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 5%;
          text-align: center;
          width: 38%;
        }

        .brand-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10%;
          padding: 0px 60px 30px 60px;
        }

        .cancel {
          cursor: pointer;
          padding: 20px 20px 20px 20px;
        }

        mwc-button {
          padding: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0px rgba(1, 1, 1, 0);
          --mdc-theme-primary: white;
          margin-bottom: 40px;
        }

        .header_button {
          color: inherit;
          text-decoration: none;
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
        }
      `]}}]}}),t);export{g as HuiCreateDialogCameraFormulary};
