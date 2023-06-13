import{_ as e,d as i,t,x as n,o,q as a}from"./main-b570e60a.js";e([a("hui-text-row")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.name||!e.text)throw new Error("Name and text required");this._config=e}},{kind:"method",key:"render",value:function(){return this._config?n`
      <ha-icon .icon=${this._config.icon}></ha-icon>
      <div class="name" .title=${this._config.name}>${this._config.name}</div>
      <div class="text" .title=${this._config.text}>${this._config.text}</div>
    `:n``}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        display: flex;
        align-items: center;
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
      }
      .name {
        margin-left: 16px;
      }
      .text {
        text-align: right;
      }
    `}}]}}),i);
