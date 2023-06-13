import{_ as t,d as e,g as i,t as a,k as s,l as n,x as d,f as r,o,q as l,u as h,at as c,dV as _,aw as u,ax as y}from"./main-b570e60a.js";import"./c.84af24de.js";import"./c.17776df6.js";import{d as m}from"./c.4d0662f5.js";import{d as g}from"./c.f9bdd698.js";import{e as v,C as p,a8 as b,a9 as k,J as f,a7 as $,j as w,aa as x}from"./c.5a5021e9.js";import{s as I,a as z,u as T}from"./c.40d262eb.js";import{g as C}from"./c.da136530.js";import{S as j}from"./c.7cce6779.js";import{d as E}from"./c.1ded644c.js";import"./c.2aff7a3c.js";import"./c.05dd33f7.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.d294c310.js";import"./c.0b900d77.js";t([l("ha-related-items")],(function(t,e){class l extends e{constructor(...e){super(...e),t(this)}}return{F:l,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"itemType",value:void 0},{kind:"field",decorators:[i()],key:"itemId",value:void 0},{kind:"field",decorators:[a()],key:"_entries",value:void 0},{kind:"field",decorators:[a()],key:"_devices",value:void 0},{kind:"field",decorators:[a()],key:"_areas",value:void 0},{kind:"field",decorators:[a()],key:"_related",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[I(this.hass.connection,(t=>{this._devices=t})),z(this.hass.connection,(t=>{this._areas=t}))]}},{kind:"method",key:"firstUpdated",value:function(t){s(n(l.prototype),"firstUpdated",this).call(this,t),C(this.hass).then((t=>{this._entries=t})),this.hass.loadBackendTranslation("title")}},{kind:"method",key:"updated",value:function(t){s(n(l.prototype),"updated",this).call(this,t),(t.has("itemId")||t.has("itemType"))&&this.itemId&&this.itemType&&this._findRelated()}},{kind:"method",key:"render",value:function(){return this._related?0===Object.keys(this._related).length?d`
        ${this.hass.localize("ui.components.related-items.no_related_found")}
      `:d`
      ${this._related.config_entry&&this._entries?this._related.config_entry.map((t=>{const e=this._entries.find((e=>e.entry_id===t));return e?d`
              <h3>
                ${this.hass.localize("ui.components.related-items.integration")}:
              </h3>
              <a
                href=${`/config/integrations#config_entry=${t}`}
                @click=${this._navigateAwayClose}
              >
                ${this.hass.localize(`component.${e.domain}.title`)}:
                ${e.title}
              </a>
            `:""})):""}
      ${this._related.device&&this._devices?this._related.device.map((t=>{const e=this._devices.find((e=>e.id===t));return e?d`
              <h3>
                ${this.hass.localize("ui.components.related-items.device")}:
              </h3>
              <a
                href="/config/devices/device/${t}"
                @click=${this._navigateAwayClose}
              >
                ${e.name_by_user||e.name}
              </a>
            `:""})):""}
      ${this._related.area&&this._areas?this._related.area.map((t=>{const e=this._areas.find((e=>e.area_id===t));return e?d`
              <h3>
                ${this.hass.localize("ui.components.related-items.area")}:
              </h3>
              <a
                href="/config/areas/area/${t}"
                @click=${this._navigateAwayClose}
              >
                ${e.name}
              </a>
            `:""})):""}
      ${this._related.entity?d`
            <h3>
              ${this.hass.localize("ui.components.related-items.entity")}:
            </h3>
            <ul>
              ${this._related.entity.map((t=>{const e=this.hass.states[t];return e?d`
                  <li>
                    <button
                      @click=${this._openMoreInfo}
                      .entityId=${t}
                      class="link"
                    >
                      ${e.attributes.friendly_name||t}
                    </button>
                  </li>
                `:""}))}
            </ul>
          `:""}
      ${this._related.group?d`
            <h3>${this.hass.localize("ui.components.related-items.group")}:</h3>
            <ul>
              ${this._related.group.map((t=>{const e=this.hass.states[t];return e?d`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId=${t}
                    >
                      ${e.attributes.friendly_name||e.entity_id}
                    </button>
                  </li>
                `:""}))}
            </ul>
          `:""}
      ${this._related.scene?d`
            <h3>${this.hass.localize("ui.components.related-items.scene")}:</h3>
            <ul>
              ${this._related.scene.map((t=>{const e=this.hass.states[t];return e?d`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId=${t}
                    >
                      ${e.attributes.friendly_name||e.entity_id}
                    </button>
                  </li>
                `:""}))}
            </ul>
          `:""}
      ${this._related.automation?d`
            <h3>
              ${this.hass.localize("ui.components.related-items.automation")}:
            </h3>
            <ul>
              ${this._related.automation.map((t=>{const e=this.hass.states[t];return e?d`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId=${t}
                    >
                      ${e.attributes.friendly_name||e.entity_id}
                    </button>
                  </li>
                `:""}))}
            </ul>
          `:""}
      ${this._related.script?d`
            <h3>
              ${this.hass.localize("ui.components.related-items.script")}:
            </h3>
            <ul>
              ${this._related.script.map((t=>{const e=this.hass.states[t];return e?d`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId=${t}
                    >
                      ${e.attributes.friendly_name||e.entity_id}
                    </button>
                  </li>
                `:""}))}
            </ul>
          `:""}
    `:d``}},{kind:"method",key:"_navigateAwayClose",value:async function(){await new Promise((t=>setTimeout(t,0))),r(this,"close-dialog")}},{kind:"method",key:"_findRelated",value:async function(){var t,e,i;this._related=await(t=this.hass,e=this.itemType,i=this.itemId,t.callWS({type:"search/related",item_type:e,item_id:i})),await this.updateComplete,r(this,"iron-resize")}},{kind:"method",key:"_openMoreInfo",value:function(t){const e=t.target.entityId;r(this,"hass-more-info",{entityId:e})}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      a {
        color: var(--accent-color);
      }
      button.link {
        color: var(--accent-color);
        text-align: left;
        cursor: pointer;
        background: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        padding: 0px;
        font: inherit;
        text-decoration: underline;
      }
      h3 {
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-title_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-title_-_font-size);
        font-weight: var(--paper-font-headline-_font-weight);
        letter-spacing: var(--paper-font-title_-_letter-spacing);
        line-height: var(--paper-font-title_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
    `}}]}}),j(e));const B={input_number:"entity-settings-helper-tab",input_select:"entity-settings-helper-tab",input_text:"entity-settings-helper-tab",input_boolean:"entity-settings-helper-tab",input_datetime:"entity-settings-helper-tab",counter:"entity-settings-helper-tab",timer:"entity-settings-helper-tab",input_button:"entity-settings-helper-tab"},D=()=>import("./c.4afd1dd5.js"),A={cover:["window","door","garage","gate"],binary_sensor:["window","door","garage_door","opening"]};t([l("entity-registry-settings")],(function(t,e){class l extends e{constructor(...e){super(...e),t(this)}}return{F:l,d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"entry",value:void 0},{kind:"field",decorators:[a()],key:"_name",value:void 0},{kind:"field",decorators:[a()],key:"_icon",value:void 0},{kind:"field",decorators:[a()],key:"_entityId",value:void 0},{kind:"field",decorators:[a()],key:"_deviceClass",value:void 0},{kind:"field",decorators:[a()],key:"_areaId",value:void 0},{kind:"field",decorators:[a()],key:"_disabledBy",value:void 0},{kind:"field",key:"_deviceLookup",value:void 0},{kind:"field",decorators:[a()],key:"_device",value:void 0},{kind:"field",decorators:[a()],key:"_error",value:void 0},{kind:"field",decorators:[a()],key:"_submitting",value:void 0},{kind:"field",key:"_origEntityId",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[I(this.hass.connection,(t=>{this._deviceLookup={};for(const e of t)this._deviceLookup[e.id]=e;this.entry.device_id&&(this._device=this._deviceLookup[this.entry.device_id])}))]}},{kind:"method",key:"updated",value:function(t){s(n(l.prototype),"updated",this).call(this,t),t.has("entry")&&(this._error=void 0,this._name=this.entry.name||"",this._icon=this.entry.icon||"",this._deviceClass=this.entry.device_class||this.entry.original_device_class,this._origEntityId=this.entry.entity_id,this._areaId=this.entry.area_id,this._entityId=this.entry.entity_id,this._disabledBy=this.entry.disabled_by,this._device=this.entry.device_id&&this._deviceLookup?this._deviceLookup[this.entry.device_id]:void 0)}},{kind:"method",key:"render",value:function(){var t,e,i,a;if(this.entry.entity_id!==this._origEntityId)return d``;const s=this.hass.states[this.entry.entity_id],n=v(this.entry.entity_id),r=v(this._entityId.trim())!==n;return d`
      ${s?"":d`
            <div class="container warning">
              ${this.hass.localize("ui.dialogs.entity_registry.editor.unavailable")}
              ${null!==(t=this._device)&&void 0!==t&&t.disabled_by?d`<br />${this.hass.localize("ui.dialogs.entity_registry.editor.device_disabled")}<br /><mwc-button @click=${this._openDeviceSettings}>
                      ${this.hass.localize("ui.dialogs.entity_registry.editor.open_device_settings")}
                    </mwc-button>`:""}
            </div>
          `}
      ${this._error?d`<ha-alert alert-type="error">${this._error}</ha-alert>`:""}
      <div class="form container">
        <ha-textfield
          .value=${this._name}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.name")}
          .invalid=${r}
          .disabled=${this._submitting}
          .placeholder=${this.entry.original_name}
          @input=${this._nameChanged}
        ></ha-textfield>
        <ha-icon-picker
          .value=${this._icon}
          @value-changed=${this._iconChanged}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.icon")}
          .placeholder=${this.entry.original_icon||(null==s?void 0:s.attributes.icon)}
          .fallbackPath=${this._icon||null!=s&&s.attributes.icon||!s?void 0:p(v(s.entity_id),s)}
          .disabled=${this._submitting}
        ></ha-icon-picker>
        ${null!==(e=A[n])&&void 0!==e&&e.includes(this._deviceClass)||"cover"===n&&null===this.entry.original_device_class?d`<ha-select
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.device_class")}
              .value=${this._deviceClass}
              @selected=${this._deviceClassChanged}
            >
              ${A[n].map((t=>d`
                  <mwc-list-item .value=${t}>
                    ${this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${n}.${t}`)}
                  </mwc-list-item>
                `))}
            </ha-select>`:""}
        <ha-textfield
          error-message="Domain needs to stay the same"
          .value=${this._entityId}
          .label=${this.hass.localize("ui.dialogs.entity_registry.editor.entity_id")}
          .invalid=${r}
          .disabled=${this._submitting}
          @input=${this._entityIdChanged}
        ></ha-textfield>
        ${this.entry.device_id?"":d`<ha-area-picker
              .hass=${this.hass}
              .value=${this._areaId}
              @value-changed=${this._areaPicked}
            ></ha-area-picker>`}
        <div class="row">
          <ha-switch
            .checked=${!this._disabledBy}
            .disabled=${null===(i=this._device)||void 0===i?void 0:i.disabled_by}
            @change=${this._disabledByChanged}
          >
          </ha-switch>
          <div>
            <div>
              ${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_label")}
            </div>
            <div class="secondary">
              ${this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.dialogs.entity_registry.editor.enabled_cause","cause",this.hass.localize(`config_entry.disabled_by.${this._disabledBy}`)):""}
              ${this.hass.localize("ui.dialogs.entity_registry.editor.enabled_description")}
              <br />${this.hass.localize("ui.dialogs.entity_registry.editor.note")}
            </div>
          </div>
        </div>

        ${this.entry.device_id?d`<ha-expansion-panel
              .header=${this.hass.localize("ui.dialogs.entity_registry.editor.advanced")}
              outlined
            >
              <p>
                ${this.hass.localize("ui.dialogs.entity_registry.editor.area_note")}
              </p>
              ${this._areaId?d`<mwc-button @click=${this._clearArea}
                    >${this.hass.localize("ui.dialogs.entity_registry.editor.follow_device_area")}</mwc-button
                  >`:this._device?d`<mwc-button @click=${this._openDeviceSettings}
                    >${this.hass.localize("ui.dialogs.entity_registry.editor.change_device_area")}</mwc-button
                  >`:""}
              <ha-area-picker
                .hass=${this.hass}
                .value=${this._areaId}
                .placeholder=${null===(a=this._device)||void 0===a?void 0:a.area_id}
                .label=${this.hass.localize("ui.dialogs.entity_registry.editor.area")}
                @value-changed=${this._areaPicked}
              ></ha-area-picker
            ></ha-expansion-panel>`:""}
      </div>
      <div class="buttons">
        <mwc-button
          class="warning"
          @click=${this._confirmDeleteEntry}
          .disabled=${this._submitting||!(s&&s.attributes.restored)}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.delete")}
        </mwc-button>
        <mwc-button
          @click=${this._updateEntry}
          .disabled=${r||this._submitting}
        >
          ${this.hass.localize("ui.dialogs.entity_registry.editor.update")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"_nameChanged",value:function(t){this._error=void 0,this._name=t.target.value}},{kind:"method",key:"_iconChanged",value:function(t){this._error=void 0,this._icon=t.detail.value}},{kind:"method",key:"_entityIdChanged",value:function(t){this._error=void 0,this._entityId=t.target.value}},{kind:"method",key:"_deviceClassChanged",value:function(t){this._error=void 0,this._deviceClass=t.target.value}},{kind:"method",key:"_areaPicked",value:function(t){this._error=void 0,this._areaId=t.detail.value}},{kind:"method",key:"_clearArea",value:function(){this._error=void 0,this._areaId=null}},{kind:"method",key:"_openDeviceSettings",value:function(){var t,e;t=this,e={device:this._device,updateEntry:async t=>{await T(this.hass,this._device.id,t)}},r(t,"show-dialog",{dialogTag:"dialog-device-registry-detail",dialogImport:D,dialogParams:e})}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;const t={name:this._name.trim()||null,icon:this._icon.trim()||null,area_id:this._areaId||null,device_class:this._deviceClass||null,new_entity_id:this._entityId.trim()};this.entry.disabled_by===this._disabledBy||null!==this._disabledBy&&"user"!==this._disabledBy||(t.disabled_by=this._disabledBy);try{const e=await b(this.hass,this._origEntityId,t);e.require_restart&&k(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_restart_confirm")}),e.reload_delay&&k(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_delay_confirm","delay",e.reload_delay)}),r(this,"close-dialog")}catch(t){this._error=t.message||"Unknown error"}finally{this._submitting=!1}}},{kind:"method",key:"_confirmDeleteEntry",value:async function(){if(await f(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")})){this._submitting=!0;try{await $(this.hass,this._origEntityId),r(this,"close-dialog")}finally{this._submitting=!1}}}},{kind:"method",key:"_disabledByChanged",value:function(t){this._disabledBy=t.target.checked?null:"user"}},{kind:"get",static:!0,key:"styles",value:function(){return[h,o`
        :host {
          display: block;
        }
        .container {
          padding: 20px 24px;
        }
        .form {
          margin-bottom: 53px;
        }
        .buttons {
          position: absolute;
          bottom: 0;
          width: calc(100% - 48px);
          box-sizing: border-box;
          border-top: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
          display: flex;
          justify-content: space-between;
          padding: 8px;
          padding-bottom: max(env(safe-area-inset-bottom), 8px);
          background-color: var(--mdc-theme-surface, #fff);
        }
        ha-select {
          width: 100%;
        }
        ha-switch {
          margin-right: 16px;
        }
        ha-textfield {
          display: block;
          margin: 8px 0;
        }
        .row {
          margin: 8px 0;
          color: var(--primary-text-color);
          display: flex;
          align-items: center;
        }
        p {
          margin: 8px 0;
        }
      `]}}]}}),j(e));let M=t([l("dialog-entity-editor")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_params",value:void 0},{kind:"field",decorators:[a()],key:"_entry",value:void 0},{kind:"field",decorators:[a()],key:"_curTab",value:()=>"tab-settings"},{kind:"field",decorators:[a()],key:"_extraTabs",value:()=>({})},{kind:"field",decorators:[a()],key:"_settingsElementTag",value:void 0},{kind:"field",key:"_curTabIndex",value:()=>0},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._entry=void 0,this._settingsElementTag=void 0,this._extraTabs={},this._getEntityReg()}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,r(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||void 0===this._entry)return d``;const t=this._params.entity_id,e=this._entry,i=this.hass.states[t];return d`
      <ha-dialog
        open
        .heading=${i?w(i):(null==e?void 0:e.name)||t}
        hideActions
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              .label=${this.hass.localize("ui.dialogs.entity_registry.dismiss")}
              .path=${c}
              dialogAction="cancel"
            ></ha-icon-button>
            <span slot="title">
              ${i?w(i):(null==e?void 0:e.name)||t}
            </span>
            ${i?d`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.entity_registry.control")}
                    .path=${_}
                    @click=${this._openMoreInfo}
                  ></ha-icon-button>
                `:""}
          </ha-header-bar>
          <mwc-tab-bar
            .activeIndex=${this._curTabIndex}
            @MDCTabBar:activated=${this._handleTabActivated}
            @MDCTab:interacted=${this._handleTabInteracted}
          >
            <mwc-tab
              id="tab-settings"
              .label=${this.hass.localize("ui.dialogs.entity_registry.settings")}
              dialogInitialFocus
            >
            </mwc-tab>
            ${Object.entries(this._extraTabs).map((([t,e])=>d`
                <mwc-tab
                  id=${t}
                  .label=${this.hass.localize(e.translationKey)||t}
                >
                </mwc-tab>
              `))}
            <mwc-tab
              id="tab-related"
              .label=${this.hass.localize("ui.dialogs.entity_registry.related")}
            >
            </mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="wrapper">${m(this._renderTab())}</div>
      </ha-dialog>
    `}},{kind:"method",key:"_renderTab",value:function(){switch(this._curTab){case"tab-settings":return this._entry?this._settingsElementTag?d`
              ${g(this._settingsElementTag,{hass:this.hass,entry:this._entry,entityId:this._params.entity_id})}
            `:d``:d`
          <div class="content">
            ${this.hass.localize("ui.dialogs.entity_registry.no_unique_id","entity_id",this._params.entity_id,"faq_link",d`<a
                href=${E(this.hass)}
                target="_blank"
                rel="noreferrer"
                >${this.hass.localize("ui.dialogs.entity_registry.faq")}</a
              >`)}
          </div>
        `;case"tab-related":return d`
          <ha-related-items
            class="content"
            .hass=${this.hass}
            .itemId=${this._params.entity_id}
            itemType="entity"
          ></ha-related-items>
        `;default:return d``}}},{kind:"method",key:"_getEntityReg",value:async function(){try{this._entry=await x(this.hass,this._params.entity_id),this._loadPlatformSettingTabs()}catch{this._entry=null}}},{kind:"method",key:"_handleTabActivated",value:function(t){this._curTabIndex=t.detail.index}},{kind:"method",key:"_handleTabInteracted",value:function(t){this._curTab=t.detail.tabId}},{kind:"method",key:"_loadPlatformSettingTabs",value:async function(){if(!this._entry)return;if(!Object.keys(B).includes(this._entry.platform))return void(this._settingsElementTag="entity-registry-settings");const t=B[this._entry.platform];await import(`./editor-tabs/settings/${t}`),this._settingsElementTag=t}},{kind:"method",key:"_openMoreInfo",value:function(){u(),r(this,"hass-more-info",{entityId:this._params.entity_id}),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[y,o`
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }

        mwc-tab-bar {
          border-bottom: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-dialog {
          --dialog-content-position: static;
          --dialog-content-padding: 0;
          --dialog-z-index: 100;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .wrapper {
            min-width: 400px;
          }
        }

        .content {
          display: block;
          padding: 20px 24px;
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
          }
        }

        mwc-button.warning {
          --mdc-theme-primary: var(--error-color);
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      `]}}]}}),e);export{M as DialogEntityEditor};
