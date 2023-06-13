import{_ as t,d as e,g as i,x as a,e0 as s,a9 as o,aa as n,ab as l,ac as c,e1 as d,bK as u,o as r,q as h}from"./main-b570e60a.js";import{af as m,s as _,ag as v,$ as b,a0 as p,a as y,U as $,a2 as f,ah as g,ai as k,z as j,aj as w}from"./c.5a5021e9.js";import{s as O}from"./c.2aff7a3c.js";import{a as x}from"./c.84af24de.js";import{s as C}from"./c.afa7717b.js";t([h("more-info-media_player")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){var t,e;if(!this.stateObj)return a``;const i=this.stateObj,r=m(i);return a`
      <div class="controls">
        <div class="basic-controls">
          ${r?r.map((t=>a`
                  <ha-icon-button
                    action=${t.action}
                    @click=${this._handleClick}
                    .path=${t.icon}
                    .label=${this.hass.localize(`ui.card.media_player.${t.action}`)}
                  >
                  </ha-icon-button>
                `)):""}
        </div>
        ${_(i,v)?a`
              <mwc-button
                .label=${this.hass.localize("ui.card.media_player.browse_media")}
                @click=${this._showBrowseMedia}
              >
                <ha-svg-icon
                  .path=${s}
                  slot="icon"
                ></ha-svg-icon>
              </mwc-button>
            `:""}
      </div>
      ${!_(i,b)&&!_(i,p)||[y,$,"off"].includes(i.state)?"":a`
            <div class="volume">
              ${_(i,f)?a`
                    <ha-icon-button
                      .path=${i.attributes.is_volume_muted?o:n}
                      @click=${this._toggleMute}
                    ></ha-icon-button>
                  `:""}
              ${_(i,p)?a`
                    <ha-icon-button
                      action="volume_down"
                      .path=${l}
                      @click=${this._handleClick}
                    ></ha-icon-button>
                    <ha-icon-button
                      action="volume_up"
                      .path=${c}
                      @click=${this._handleClick}
                    ></ha-icon-button>
                  `:""}
              ${_(i,b)?a`
                    <ha-slider
                      id="input"
                      pin
                      ignore-bar-touch
                      .dir=${x(this.hass)}
                      .value=${100*Number(i.attributes.volume_level)}
                      @change=${this._selectedValueChanged}
                    ></ha-slider>
                  `:""}
            </div>
          `}
      ${![y,$,"off"].includes(i.state)&&_(i,g)&&null!==(t=i.attributes.source_list)&&void 0!==t&&t.length?a`
            <div class="source-input">
              <ha-select
                .label=${this.hass.localize("ui.card.media_player.source")}
                icon
                .value=${i.attributes.source}
                @selected=${this._handleSourceChanged}
                fixedMenuPosition
                naturalMenuWidth
                @closed=${O}
              >
                ${i.attributes.source_list.map((t=>a`
                      <mwc-list-item .value=${t}>${t}</mwc-list-item>
                    `))}
                <ha-svg-icon .path=${d} slot="icon"></ha-svg-icon>
              </ha-select>
            </div>
          `:""}
      ${_(i,k)&&null!==(e=i.attributes.sound_mode_list)&&void 0!==e&&e.length?a`
            <div class="sound-input">
              <ha-select
                .label=${this.hass.localize("ui.card.media_player.sound_mode")}
                .value=${i.attributes.sound_mode}
                icon
                fixedMenuPosition
                naturalMenuWidth
                @selected=${this._handleSoundModeChanged}
                @closed=${O}
              >
                ${i.attributes.sound_mode_list.map((t=>a`
                    <mwc-list-item .value=${t}>${t}</mwc-list-item>
                  `))}
                <ha-svg-icon .path=${u} slot="icon"></ha-svg-icon>
              </ha-select>
            </div>
          `:""}
      ${j(this.hass,"tts")&&_(i,w)?a`
            <div class="tts">
              Text to speech has moved to the media browser.
            </div>
          `:""}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-icon-button[action="turn_off"],
      ha-icon-button[action="turn_on"],
      ha-slider {
        flex-grow: 1;
      }

      .controls {
        display: flex;
        align-items: center;
        --mdc-theme-primary: currentColor;
      }

      .basic-controls {
        flex-grow: 1;
      }

      .volume,
      .source-input,
      .sound-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .source-input ha-select,
      .sound-input ha-select {
        margin-left: 10px;
        flex-grow: 1;
      }

      .tts {
        margin-top: 16px;
        font-style: italic;
      }

      mwc-button > ha-svg-icon {
        vertical-align: text-bottom;
      }
    `}},{kind:"method",key:"_handleClick",value:function(t){this.hass.callService("media_player",t.currentTarget.getAttribute("action"),{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"_toggleMute",value:function(){this.hass.callService("media_player","volume_mute",{entity_id:this.stateObj.entity_id,is_volume_muted:!this.stateObj.attributes.is_volume_muted})}},{kind:"method",key:"_selectedValueChanged",value:function(t){this.hass.callService("media_player","volume_set",{entity_id:this.stateObj.entity_id,volume_level:Number(t.currentTarget.getAttribute("value"))/100})}},{kind:"method",key:"_handleSourceChanged",value:function(t){const e=t.target.value;e&&this.stateObj.attributes.source!==e&&this.hass.callService("media_player","select_source",{entity_id:this.stateObj.entity_id,source:e})}},{kind:"method",key:"_handleSoundModeChanged",value:function(t){var e;const i=t.target.value;i&&(null===(e=this.stateObj)||void 0===e?void 0:e.attributes.sound_mode)!==i&&this.hass.callService("media_player","select_sound_mode",{entity_id:this.stateObj.entity_id,sound_mode:i})}},{kind:"method",key:"_showBrowseMedia",value:function(){C(this,{action:"play",entityId:this.stateObj.entity_id,mediaPickedCallback:t=>this._playMedia(t.item.media_content_id,t.item.media_content_type)})}},{kind:"method",key:"_playMedia",value:function(t,e){this.hass.callService("media_player","play_media",{entity_id:this.stateObj.entity_id,media_content_id:t,media_content_type:e})}}]}}),e);
