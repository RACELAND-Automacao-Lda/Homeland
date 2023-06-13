import{_ as a,d as e,g as i,t,f as o,c as d,dD as n,x as r,y as c,at as s,dE as l,dF as h,dG as m,o as p,q as g}from"./main-b570e60a.js";import"./c.84af24de.js";import{c as u,a as x}from"./c.3b82a625.js";import"./c.9924dff4.js";import"./c.a963b0fd.js";let f=a([g("add-camera-dialog")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_cameraDatabase",value:void 0},{kind:"field",decorators:[t()],key:"_currTabIndex",value:()=>0},{kind:"field",decorators:[t()],key:"_filter",value:()=>""},{kind:"method",key:"showDialog",value:async function(a){this._cameraDatabase=a.database.Manufacturer}},{kind:"method",key:"closeDialog",value:function(){return this._cameraDatabase=void 0,this._currTabIndex=0,o(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"field",key:"_filterBrands",value:()=>d(((a,e)=>{if(!e)return a;let i=a;return i=new n(i,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map((a=>a.item)),i}))},{kind:"method",key:"render",value:function(){if(!this._cameraDatabase)return r``;const a=this._filterBrands(this._cameraDatabase,this._filter);return r`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${c({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <ha-svg-icon
            @click=${this._cancel}
            class="cancel-icon"
            slot="icon"
            .path=${s}
          ></ha-svg-icon>
        </div>
        <div class="search-bar">
          <div class="add-camera">Add Camera</div>
          <search-input-round
            .hass=${this.hass}
            .filter=${this._filter}
            class="rounded"
            @value-changed=${this._handleSearchChange}
            .label=${l("search.brands")}
          ></search-input-round>
        </div>

        <div class="brand-list">
          ${a.map((a=>r`<camera-brand-icon-button
              .cameraBrandInfo=${a}
              .label=${a.name}
              .cameraModelList=${a.models}
              @click=${()=>this._openCameraBrandDialog(a.models)}
            >
            </camera-brand-icon-button>`))}
        </div>

        <div class="options">
          <mwc-button class="button-confirm" @click=${this._addCustomCamera}
            >${l("common.custom_camera")}
            <ha-svg-icon slot="icon" .path=${h}></ha-svg-icon
          ></mwc-button>
        </div>
      </ha-dialog>
    `}},{kind:"method",key:"_openCameraBrandDialog",value:function(a){this.closeDialog(),o(this,"open-camera-brand-dialog",{modelsInfo:a})}},{kind:"method",key:"_addCustomCamera",value:function(){const a={header:{title:l("common.add_camera")},body:u,extra_options:x,footer:{back:l("common.go_back"),accept:l("common.add_camera")}};o(this,"open-camera-add-camera-form",{cameraModelInfo:{},schema:a,data:{integration:m},formType:"custom_camera",backEvent:{event_name:"add-new-camera"}}),this.closeDialog()}},{kind:"method",key:"_handleSearchChange",value:function(a){this._filter=a.detail.value}},{kind:"method",key:"_cancel",value:function(a){a&&a.stopPropagation(),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[p`
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

        .button-confirm {
          background-color: #4ba2ff;
          float: right;
        }
        .search-bar {
          height: 80px;
          padding: 60px 45px 20px 45px;
        }
        search-input-round {
          float: right;
          display: block;
          width: 50%;
          margin-right: 10%;
        }

        .add-camera {
          float: left;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 1%;
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

        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
        }
      `]}}]}}),e);export{f as HuiCreateDialogCamera};
