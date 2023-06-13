import{_ as a,d as e,g as o,t,f as i,c as d,dD as c,x as n,y as r,at as s,dE as l,dF as m,Y as h,o as p,q as g}from"./main-b570e60a.js";import"./c.17776df6.js";import"./c.84af24de.js";import{c as b,a as u}from"./c.3b82a625.js";import"./c.5c9e0b30.js";import"./c.a963b0fd.js";let f=a([g("camera-brand-dialog")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[o({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o({attribute:!1})],key:"modelDatabase",value:void 0},{kind:"field",decorators:[t()],key:"_currTabIndex",value:()=>0},{kind:"field",decorators:[t()],key:"_filter",value:()=>""},{kind:"method",key:"showDialog",value:async function(a){this.modelDatabase=a.modelsInfo}},{kind:"method",key:"closeDialog",value:function(){return this.modelDatabase=void 0,this._currTabIndex=0,i(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"field",key:"_filterModels",value:()=>d(((a,e)=>{if(!e)return a;let o=a;return o=new c(o,{keys:["version"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map((a=>a.item)),o}))},{kind:"method",key:"render",value:function(){if(!this.modelDatabase)return n``;const a=this._filterModels(this.modelDatabase,this._filter),e=[],o=[];return n`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${r({table:1===this._currTabIndex})}
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
            .label=${l("search.models")}
          ></search-input-round>
        </div>

        <div class="brand-list">
          ${a.map((a=>n`<camera-model-icon-button
              .label="${a.version}"
              @click=${()=>this._addCamera(a,e,o)}
            ></camera-model-icon-button>`))}
        </div>

        <div class="options">
          <mwc-button class="button-confirm" @click=${this._addCustomCamera}
            >${l("common.custom_camera")}
            <ha-svg-icon slot="icon" .path=${m}></ha-svg-icon
          ></mwc-button>
          <mwc-button class="button-back" @click=${this.goBack}
            >${l("common.back")}
            <ha-svg-icon class="icon-back" slot="icon" .path=${h}></ha-svg-icon
          ></mwc-button>
        </div>
      </ha-dialog>
    `}},{kind:"method",key:"_addCamera",value:function(a,e,o){a.fields.forEach((a=>{e.push(a)})),void 0!==a.advanced_options&&(e.push({name:"advanced_options",selector:{boolean:{}}}),a.advanced_options.forEach((a=>{o.push(a)})));const t={header:{title:l("common.add_camera")},body:e,extra_options:o,footer:{back:l("common.go_back"),accept:l("common.add_camera")}};i(this,"open-camera-add-camera-form",{cameraModelInfo:a,schema:t,data:{...a.default,still_image_url:a.options.static,stream_source:a.options.stream},formType:"brand_camera",backEvent:{event_name:"open-camera-brand-dialog",modelDatabase:this.modelDatabase}}),this.closeDialog()}},{kind:"method",key:"_addCustomCamera",value:function(a){const e={header:{title:l("common.add_camera")},body:b,extra_options:u,footer:{back:l("common.go_back"),accept:l("common.add_camera")}};i(this,"open-camera-add-camera-form",{cameraModelInfo:{},schema:e,data:{},formType:"custom_camera",backEvent:{event_name:"open-camera-brand-dialog",modelDatabase:this.modelDatabase}}),this.closeDialog()}},{kind:"method",key:"goBack",value:function(a){i(this,"add-new-camera"),a&&a.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_cancel",value:function(a){a&&a.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_handleSearchChange",value:function(a){this._filter=a.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[p`
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

        .button-back {
          --mdc-theme-primary: #7b7b7b;
          float: left;
          margin-left: 5%;
        }

        .icon-back {
          width: 30px;
          height: 30px;
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

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
        }
      `]}}]}}),e);export{f as HuiCreateDialogCameraBrand};
