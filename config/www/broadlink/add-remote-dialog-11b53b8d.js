import{i as e,s as i,f as t,n as a,y as o,l as s,r,d as n,b as d,e as l,t as c,c as h}from"./broadlink-remote-card-a8bc8087.js";const m=e`
    /* mwc-dialog (ha-dialog) styles */
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --justify-action-buttons: space-between;
      --mdc-switch__pointer_events: auto;
    }

    ha-dialog .form {
      padding-bottom: 24px;
      color: var(--primary-text-color);
    }

    a {
      color: var(--accent-color) !important;
    }

    /* make dialog fullscreen on small screens */
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-dialog {
        --mdc-dialog-min-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-max-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-min-height: 100%;
        --mdc-dialog-max-height: 100%;
        --vertial-align-dialog: flex-end;
        --ha-dialog-border-radius: 0px;
      }
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    .error {
      color: var(--error-color);
    }
  `;let p=class extends i{constructor(){super(...arguments),this._initialized=!1}async firstUpdated(e){super.firstUpdated(e);const i=await t(this.hass).then((e=>e));this.config&&(this.config=Object.assign(Object.assign({},this.config),{all_devices:i.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked})))})),a(this,"config-changed",{config:this.config})}shouldUpdate(e){return this._initialized||this._initialize(),e.has("_discovering"),!0}_initialize(){void 0!==this.hass&&void 0!==this.config&&void 0!==this._helpers&&(this._initialized=!0)}async showDialog(e){this.name_error_exists=!1,this.name_error_none=!1,this._params=e,this.broadlinkInfo=this._params.broadlinkInfo,this.config=this.broadlinkInfo,await this.updateComplete}closeDialog(){this._params=void 0,a(this,"dialog-closed",{dialog:this.localName})}render(){var e,i,t,a,n;if(!this._params)return o``;const d={name:null===(e=this.config)||void 0===e?void 0:e.name,remote_type:(null===(i=this.config)||void 0===i?void 0:i.remote_type)||"tv",entity:this.config.entity};return document.createElement("style").innerHTML=".issue-type { margin-bottom: 15px; }",null===(n=null===(a=null===(t=document.querySelector("ha-alert"))||void 0===t?void 0:t.shadowRoot)||void 0===a?void 0:a.querySelector(".issue-type"))||void 0===n||n.setAttribute("style","margin-bottom: 15px"),o`
      <ha-dialog
          open
          hideActions
          @closed=${this.closeDialog}
          .heading=${this.hass.localize("ui.panel.lovelace.editor.edit_lovelace.header")}
        >
          <div slot="heading" class="heading">
            <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              dialogAction="cancel"
              .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
              id="cancel"
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
            ></ha-icon-button>
              <div
                slot="title"
                class="main-title"
                .title=${s("editor.add_remote")}
              >
              ${s("editor.add_remote")}
              </div>
            </ha-header-bar>
          </div>
          <div class="contentFather">
            <div class="row">
              <div class="box">
                ${this.name_error_exists?o`
                  <ha-alert id="error" alert-type="error">
                    ${s("editor.add_remote_error_exists")}
                </ha-alert>
                `:o``}
                ${this.name_error_none?o`
                  <ha-alert id="error" alert-type="error">
                    ${s("editor.add_remote_error_none")}
                </ha-alert>
                `:o``}
                <ha-form
                  .hass=${this.hass}
                  .data=${d}
                  .schema=${r(this.config)}
                  .computeLabel=${e=>{var i;return null!==(i=e.label)&&void 0!==i?i:e.name}}
                  @value-changed=${this._changeCardOptions}
                ></ha-form>
              </div>
            </div>
            <div id="save">
              <mwc-button class="button-cancel" @click=${this._save}>
              ${s("common.save")}
                </mwc-button>
            </div>
          </div>
          <div class="options" slot="actions">
          </div>
        </ha-dialog>
      `}_changeCardOptions(e){let i=e.detail.value;this.config&&this.hass&&i&&(void 0!==i.entity&&void 0===this.config.preset&&(i=Object.assign(Object.assign({},i),{preset:this.config.name})),this.config=Object.assign(Object.assign({},this.config),i),this.config.name||(this.name_error_exists=!1),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config}})))}async _cancel(e){e&&e.stopPropagation()}async _save(){var e,i,t,o,s,r;if(this.config.name){this.name_error_exists=!1,this.name_error_none=!1;let d=0;if(null===(e=this.config)||void 0===e?void 0:e.all_devices)for(let e=0;e<(null===(t=null===(i=this.config)||void 0===i?void 0:i.all_devices)||void 0===t?void 0:t.length);e++)(null===(o=this.config)||void 0===o?void 0:o.all_devices[e].mac)===(null===(s=this.config)||void 0===s?void 0:s.entity)&&(d=e);const l=null===(r=this.config)||void 0===r?void 0:r.all_devices[d].presets,c=[];for(const[e,i]of Object.entries(l))c.push(e);if(!c.includes(this.config.name)&&this.config.name){n(this.hass,this.config,this.config.name,this.config.remote_type).then((e=>{e.sucess&&a(this,"add-remote",{broadlinkInfo:this.config,all_devices:e.devices.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked}))),index:d})})),this.closeDialog()}}this.config.name?this.name_error_exists=!0:this.name_error_none=!0}static get styles(){return[m,e`
          ha-header-bar {
            --mdc-theme-on-primary: var(--primary-text-color);
            --mdc-theme-primary: var(--mdc-theme-surface);
            flex-shrink: 0;
          }
          /* overrule the ha-style-dialog max-height on small screens */
          @media all and (max-width: 450px), all and (max-height: 500px) {
            ha-header-bar {
              --mdc-theme-primary: var(--app-header-background-color);
              --mdc-theme-on-primary: var(--app-header-text-color, white);
            }
          }
          .box {
            padding-top: 30px;
          }
          ha-alert::part(error) {
            margin-bottom: 15px;
          }
          .row {
            width: 100%;
          }
          .div-options {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
            padding: 30px 8px 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            align-content: stretch;
          }
          .contentFather {
            width: 100%;
            max-width: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .button-cancel {
            margin-top: 30px;
          }
          #save {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
        `]}};d([l({attribute:!1})],p.prototype,"hass",void 0),d([c()],p.prototype,"_params",void 0),d([c()],p.prototype,"_helpers",void 0),d([l({attribute:!1})],p.prototype,"preset",void 0),d([l({attribute:!1})],p.prototype,"_discovering",void 0),d([l({attribute:!1})],p.prototype,"name_error_exists",void 0),d([l({attribute:!1})],p.prototype,"name_error_none",void 0),d([l()],p.prototype,"_isLocked",void 0),d([c()],p.prototype,"config",void 0),d([c()],p.prototype,"broadlinkInfo",void 0),p=d([h("add-remote-dialog")],p);export{p as HuiMoreInfoBroadlink2,m as haStyleDialog};
