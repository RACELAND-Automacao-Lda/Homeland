import{_ as a,d as i,g as t,t as o,dI as e,f as n,x as d,dE as r,y as l,dJ as c,bC as s,dK as h,o as m,q as p}from"./main-b570e60a.js";import"./c.17776df6.js";import"./c.84af24de.js";let g=a([p("delete-camera-dialog")],(function(a,i){return{F:class extends i{constructor(...i){super(...i),a(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_params",value:void 0},{kind:"field",decorators:[o()],key:"cameraConfiguration",value:void 0},{kind:"field",decorators:[o()],key:"_currTabIndex",value:()=>0},{kind:"method",key:"showDialog",value:async function(a){this._params=a,this.cameraConfiguration=await e(this.hass,this._params.cameraInfo.entityID)}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,n(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?d`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        .heading=${r("common.delete_camera")}
        class=${l({table:1===this._currTabIndex})}
        @closed=${this.closeDialog}
      >
        <div class="header" slot="heading">
          <ha-header-bar>
            <span slot="title">
              <ha-svg-icon class="header-icon" slot="icon" .path=${c}></ha-svg-icon
            ></span>
          </ha-header-bar>
        </div>
        <div class="text">
          <p class="big-text">${r("common.delete_camera")}</p>
          <p class="small-text">${r("dialog_text.verify_action")}</p>
        </div>
        <div class="options">
          <mwc-button class="button-cancel" @click=${this._cancel}>
            ${r("common.back")}</mwc-button
          >
          <mwc-button class="button-confirm" @click=${this._delete}
            ><ha-svg-icon
              class="confirm-icon"
              slot="icon"
              .path=${s}
            ></ha-svg-icon
            >${r("common.confirm")}</mwc-button
          >
        </div>
      </ha-dialog>
    `:d``}},{kind:"method",key:"_cancel",value:function(a){a&&a.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_delete",value:async function(a){a&&a.stopPropagation();!0===await h(this.hass,this.cameraConfiguration.unique_id,this.cameraConfiguration.entity_id)&&(this.closeDialog(),n(this,"update-camera-dashboard"))}},{kind:"get",static:!0,key:"styles",value:function(){return[m`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 800px) {
          ha-dialog {
            --mdc-dialog-min-width: 500px;
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

        .button-cancel {
          background-color: #a3abae;
          float: left;
          width: 22%;
        }

        .button-confirm {
          background-color: #4ba2ff;
          float: right;
        }
        .header {
          height: 80px;
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
        .confirm-icon {
          width: 20px;
          height: 40px;
        }
        .header-icon {
          width: 60px;
          height: 60px;
          padding-top: 50px;
          color: #7b7b7b;
        }
        .text {
          margin: 0px 0px 20px 0px;
        }
        .big-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #303033;
          margin: 10px;
        }
        .small-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: #303033;
          margin: 10px;
        }
      `]}}]}}),i);export{g as HuiDeleteDialogCamera};
