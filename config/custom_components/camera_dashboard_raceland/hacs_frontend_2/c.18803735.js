import{_ as i,d as e,t as n,x as o,Q as t,o as r,q as a}from"./main-b570e60a.js";i([a("hui-weblink-row")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[n()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){if(!i||!i.url)throw new Error("URL required");this._config={icon:"hass:link",name:i.url,...i}}},{kind:"method",key:"render",value:function(){return this._config?o`
      <a
        href=${this._config.url}
        target=${t(this._computeTargetValue())}
        rel="noreferrer"
        ?download=${this._config.download}
      >
        <ha-icon .icon=${this._config.icon}></ha-icon>
        <div .title=${this._config.name}>${this._config.name}</div>
      </a>
    `:o``}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      a {
        display: flex;
        align-items: center;
        color: var(--accent-color);
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 16px;
      }
    `}},{kind:"method",key:"_computeTargetValue",value:function(){return!this._config||-1===this._config.url.indexOf("://")&&!0!==this._config.new_tab&&!0!==this._config.download?void 0:"_blank"}}]}}),e);
