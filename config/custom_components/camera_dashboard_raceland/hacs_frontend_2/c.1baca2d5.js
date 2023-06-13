import{_ as i,d as t,g as e,t as a,H as o,x as d,f as n,o as s,q as c}from"./main-b570e60a.js";import"./c.17776df6.js";import"./c.84af24de.js";import{am as l,ao as r,an as h,al as u,aw as f,as as g,aq as v}from"./c.5a5021e9.js";import{s as _}from"./c.2aff7a3c.js";import"./c.509948f5.js";import"./c.342c552c.js";import"./c.65c82e57.js";import{b as m}from"./c.08872315.js";import{c as p}from"./c.461f2735.js";import"./c.0b900d77.js";import"./c.4d0662f5.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.5fe2e3ab.js";import"./c.a717c672.js";import"./c.9e58f139.js";import"./c.f9bdd698.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.1d43e39e.js";import"./c.fbe33aec.js";const b=l({entity:r(),state:h(r()),state_not:h(r())}),k=u(m,l({card:f(),conditions:h(g(b))}));let $=i([c("hui-conditional-card-editor")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[a()],key:"_GUImode",value:()=>!0},{kind:"field",decorators:[a()],key:"_guiModeAvailable",value:()=>!0},{kind:"field",decorators:[a()],key:"_cardTab",value:()=>!1},{kind:"field",decorators:[o("hui-card-element-editor")],key:"_cardEditorEl",value:void 0},{kind:"method",key:"setConfig",value:function(i){v(i,k),this._config=i}},{kind:"method",key:"focusYamlEditor",value:function(){var i;null===(i=this._cardEditorEl)||void 0===i||i.focusYamlEditor()}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?d`
      <mwc-tab-bar
        .activeIndex=${this._cardTab?1:0}
        @MDCTabBar:activated=${this._selectTab}
      >
        <mwc-tab
          .label=${this.hass.localize("ui.panel.lovelace.editor.card.conditional.conditions")}
        ></mwc-tab>
        <mwc-tab
          .label=${this.hass.localize("ui.panel.lovelace.editor.card.conditional.card")}
        ></mwc-tab>
      </mwc-tab-bar>
      ${this._cardTab?d`
            <div class="card">
              ${void 0!==this._config.card.type?d`
                    <div class="card-options">
                      <mwc-button
                        @click=${this._toggleMode}
                        .disabled=${!this._guiModeAvailable}
                        class="gui-mode-button"
                      >
                        ${this.hass.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                      </mwc-button>
                      <mwc-button @click=${this._handleReplaceCard}
                        >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.change_type")}</mwc-button
                      >
                    </div>
                    <hui-card-element-editor
                      .hass=${this.hass}
                      .value=${this._config.card}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardChanged}
                      @GUImode-changed=${this._handleGUIModeChanged}
                    ></hui-card-element-editor>
                  `:d`
                    <hui-card-picker
                      .hass=${this.hass}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardPicked}
                    ></hui-card-picker>
                  `}
            </div>
          `:d`
            <div class="conditions">
              ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.condition_explanation")}
              ${this._config.conditions.map(((i,t)=>{var e;return d`
                  <div class="condition">
                    <div class="entity">
                      <ha-entity-picker
                        .hass=${this.hass}
                        .value=${i.entity}
                        .idx=${t}
                        .configValue=${"entity"}
                        @change=${this._changeCondition}
                        allow-custom-entity
                      ></ha-entity-picker>
                    </div>
                    <div class="state">
                      <ha-select
                        .value=${void 0!==i.state_not?"true":"false"}
                        .idx=${t}
                        .configValue=${"invert"}
                        @selected=${this._changeCondition}
                        @closed=${_}
                        naturalMenuWidth
                        fixedMenuPosition
                      >
                        <mwc-list-item value="false">
                          ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_equal")}
                        </mwc-list-item>
                        <mwc-list-item value="true">
                          ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_not_equal")}
                        </mwc-list-item>
                      </ha-select>
                      <ha-textfield
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.state")} (${this.hass.localize("ui.panel.lovelace.editor.card.conditional.current_state")}: ${null===(e=this.hass)||void 0===e?void 0:e.states[i.entity].state})"
                        .value=${void 0!==i.state_not?i.state_not:i.state}
                        .idx=${t}
                        .configValue=${"state"}
                        @input=${this._changeCondition}
                      ></ha-textfield>
                    </div>
                  </div>
                `}))}
              <div class="condition">
                <ha-entity-picker
                  .hass=${this.hass}
                  @change=${this._addCondition}
                ></ha-entity-picker>
              </div>
            </div>
          `}
    `:d``}},{kind:"method",key:"_selectTab",value:function(i){this._cardTab=1===i.detail.index}},{kind:"method",key:"_toggleMode",value:function(){var i;null===(i=this._cardEditorEl)||void 0===i||i.toggleMode()}},{kind:"method",key:"_setMode",value:function(i){this._GUImode=i,this._cardEditorEl&&(this._cardEditorEl.GUImode=i)}},{kind:"method",key:"_handleGUIModeChanged",value:function(i){i.stopPropagation(),this._GUImode=i.detail.guiMode,this._guiModeAvailable=i.detail.guiModeAvailable}},{kind:"method",key:"_handleCardPicked",value:function(i){i.stopPropagation(),this._config&&(this._setMode(!0),this._guiModeAvailable=!0,this._config={...this._config,card:i.detail.config},n(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_handleCardChanged",value:function(i){i.stopPropagation(),this._config&&(this._config={...this._config,card:i.detail.config},this._guiModeAvailable=i.detail.guiModeAvailable,n(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_handleReplaceCard",value:function(){this._config&&(this._config={...this._config,card:{}},n(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_addCondition",value:function(i){const t=i.target;if(""===t.value||!this._config)return;const e=[...this._config.conditions];e.push({entity:t.value,state:""}),this._config={...this._config,conditions:e},t.value="",n(this,"config-changed",{config:this._config})}},{kind:"method",key:"_changeCondition",value:function(i){const t=i.target;if(!this._config||!t)return;const e=[...this._config.conditions];if("entity"===t.configValue&&""===t.value)e.splice(t.idx,1);else{const i={...e[t.idx]};"entity"===t.configValue?i.entity=t.value:"state"===t.configValue?void 0!==i.state_not?i.state_not=t.value:i.state=t.value:"invert"===t.configValue&&("true"===t.value?i.state&&(i.state_not=i.state,delete i.state):i.state_not&&(i.state=i.state_not,delete i.state_not)),e[t.idx]=i}this._config={...this._config,conditions:e},n(this,"config-changed",{config:this._config})}},{kind:"get",static:!0,key:"styles",value:function(){return[p,s`
        mwc-tab-bar {
          border-bottom: 1px solid var(--divider-color);
        }
        .conditions {
          margin-top: 8px;
        }
        .condition {
          margin-top: 8px;
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        .condition .state {
          display: flex;
          align-items: flex-end;
        }
        .condition .state ha-select {
          margin-right: 16px;
        }
        .condition .state ha-textfield {
          flex-grow: 1;
        }

        .card {
          margin-top: 8px;
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        @media (max-width: 450px) {
          .card,
          .condition {
            margin: 8px -12px 0;
          }
        }
        .card .card-options {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .gui-mode-button {
          margin-right: auto;
        }
      `]}}]}}),t);export{$ as HuiConditionalCardEditor};
