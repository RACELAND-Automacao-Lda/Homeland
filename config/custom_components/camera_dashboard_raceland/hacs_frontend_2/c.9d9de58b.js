import{_ as t,d as i,g as e,t as s,k as o,l as a,S as n,x as r,Q as c,o as h,q as d}from"./main-b570e60a.js";import{e as f,j as g}from"./c.5a5021e9.js";import{W as m,X as l,Z as u,o as p,Q as _,R as y,T as v}from"./c.4d0662f5.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([d("hui-picture-entity-card")],(function(t,i){class d extends i{constructor(...i){super(...i),t(this)}}return{F:d,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.f5d8da2b.js"),document.createElement("hui-picture-entity-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,i,e){return{type:"picture-entity",entity:m(t,1,i,e,["light","switch"])[0]||"",image:"https://demo.home-assistant.io/stub_config/bedroom.png"}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");if("camera"!==f(t.entity)&&!t.image&&!t.state_image&&!t.camera_image)throw new Error("No image source configured");this._config={show_name:!0,show_state:!0,...t}}},{kind:"method",key:"shouldUpdate",value:function(t){return l(this,t)}},{kind:"method",key:"updated",value:function(t){if(o(a(d.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||n(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return r``;const t=this.hass.states[this._config.entity];if(!t)return r`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `;const i=this._config.name||g(t),e=p(this.hass.localize,t,this.hass.locale);let s="";return this._config.show_name&&this._config.show_state?s=r`
        <div class="footer both">
          <div>${i}</div>
          <!-- <div>${e}</div> -->
        </div>
      `:this._config.show_name?s=r`<div class="footer single">${i}</div>`:this._config.show_state&&(s=r`<div class="footer single">${e}</div>`),r`
      <ha-card>
        <hui-image
          .hass=${this.hass}
          .image=${this._config.image}
          .stateImage=${this._config.state_image}
          .stateFilter=${this._config.state_filter}
          .cameraImage=${"camera"===f(this._config.entity)?this._config.entity:this._config.camera_image}
          .cameraView=${this._config.camera_view}
          .entity=${this._config.entity}
          .aspectRatio=${this._config.aspect_ratio}
          @action=${this._handleAction}
          .actionHandler=${_({hasHold:y(this._config.hold_action),hasDoubleClick:y(this._config.double_tap_action)})}
          tabindex=${c(y(this._config.tap_action)||this._config.entity?"0":void 0)}
        ></hui-image>
        ${s}
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return h`
      ha-card {
        cursor: pointer;
        min-height: 75px;
        overflow: hidden;
        position: relative;
        height: 100%;
        box-sizing: border-box;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      hui-image {
        width: 100%;
        cursor: pointer;
      }

      .footer {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(
          --ha-picture-card-background-color,
          rgba(0, 0, 0, 0.3)
        );
        padding: 16px;
        font-size: 16px;
        line-height: 16px;
        color: var(--ha-picture-card-text-color, white);
        pointer-events: none;
      }

      .both {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .single {
        text-align: center;
      }
    `}},{kind:"method",key:"_handleAction",value:function(t){v(this,this.hass,this._config,t.detail.action)}}]}}),i);
