import{_ as a,d as e,g as i,t,dE as o,dI as s,dL as r,f as d,x as n,y as c,at as l,dM as m,dN as h,o as f,q as p}from"./main-b570e60a.js";import"./c.17776df6.js";import"./c.84af24de.js";import"./c.9e58f139.js";import{c as u,a as g}from"./c.3b82a625.js";import"./c.9924dff4.js";import"./c.a963b0fd.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";let v=a([p("edit-camera-dialog")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"dialogOpen",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"cameraInfo",value:void 0},{kind:"field",decorators:[t()],key:"_params",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"backEvent",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"registeredCameras",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[t()],key:"_currTabIndex",value:()=>0},{kind:"field",decorators:[t()],key:"validIssue",value:void 0},{kind:"method",key:"showDialog",value:async function(a){const e={header:{title:o("common.add_camera")},body:u,extra_options:g,footer:{accept:o("common.edit_camera")}};if(this._params=a,this.schema=e,this.dialogOpen=!0,this.cameraInfo=await s(this.hass,this._params.cameraInfo.entityID),this.registeredCameras=r(this.hass.states).map((a=>a.name)),void 0!==this.cameraInfo.authentication&&(this.cameraInfo.authentication=this.cameraInfo.authentication[0].toUpperCase()+this.cameraInfo.authentication.substring(1)),null!=this.cameraInfo.verify_ssl){let a=this.cameraInfo.verify_ssl;a=String(this.cameraInfo.verify_ssl),this.cameraInfo.verify_ssl=a[0].toUpperCase()+a.substring(1)}}},{kind:"method",key:"closeDialog",value:function(){return this._currTabIndex=0,this.dialogOpen=void 0,d(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){if(void 0===this.cameraInfo||!this.dialogOpen)return n``;const a=this.schema.body,e=this.schema.extra_options;return n` <ha-dialog
      open
      scrimClickAction
      hideActions
      class=${c({table:1===this._currTabIndex})}
      @closed=${this.closeDialog}
    >
      <div class="cancel">
        <ha-svg-icon
          dialogAction="close"
          class="cancel-icon"
          slot="icon"
          .path=${l}
        ></ha-svg-icon>
      </div>
      <div class="header-text">${o("common.edit_camera")}</div>
      </div>
      ${this.validIssue?n` <div class="form-issue">${this.validIssue}</div>`:n``}
      <div class="form">
      <ha-form
            .hass=${this.hass}
            .data=${this.cameraInfo}
            .schema=${a}
            .computeLabel=${this._computeLabelCallback}
            @value-changed=${this._valueChanged}
          ></ha-form>
          ${e&&this.cameraInfo.advanced_options?n` <ha-form
                  .hass=${this.hass}
                  .data=${this.cameraInfo}
                  .schema=${e}
                  .computeLabel=${this._computeLabelCallback}
                  @value-changed=${this._valueChanged}
                ></ha-form>`:n``}
        </div>
        <div class="options">
          <mwc-button class="button-confirm" @click=${this._accept}
            >${this.schema.footer.accept}</mwc-button
          >
        </div>
    </ha-dialog>`}},{kind:"field",key:"_computeLabelCallback",value:()=>a=>o(`form.${a.name}`)},{kind:"method",key:"_valueChanged",value:function(a){const e=m(a.detail.value);this.cameraInfo={...this.cameraInfo,...e}}},{kind:"method",key:"_accept",value:async function(){if(!0===this.validInput()){const a=this.removeNull(this.cameraInfo);!0===await h(this.hass,a)&&(this.closeDialog(),d(this,"update-camera-dashboard"))}}},{kind:"method",key:"validInput",value:function(){return this.cameraInfo.integration?this.cameraInfo.name?this.registeredCameras.includes(this.cameraInfo.camera_name)?(this.validIssue=o("form.issues.duplicated_camera_name"),!1):!(!this.cameraInfo.still_image_url&&!this.cameraInfo.stream_source)||(this.validIssue=o("form.issues.static_stream_source_missing"),!1):(this.validIssue=o("form.issues.camera_name"),!1):(this.validIssue=o("form.issues.missing_integration"),!1)}},{kind:"method",key:"removeNull",value:function(a){for(const[e,i]of Object.entries(a))null===i&&delete a[e];return a}},{kind:"get",static:!0,key:"styles",value:function(){return[f`
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
      `]}}]}}),e);export{v as HuiEditDialogCamera};
