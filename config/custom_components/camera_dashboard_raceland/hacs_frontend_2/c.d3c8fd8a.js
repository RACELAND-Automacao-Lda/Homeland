import{_ as t,d as e,g as n,t as i,k as o,l as s,x as a,y as d,S as r,o as c,q as h}from"./main-b570e60a.js";import"./c.f26b8062.js";let u=t([h("hui-markdown-card")],(function(t,e){class h extends e{constructor(...e){super(...e),t(this)}}return{F:h,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.538fd9ab.js"),document.createElement("hui-markdown-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"markdown",content:"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help)."}}},{kind:"field",decorators:[n({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"field",decorators:[i()],key:"_templateResult",value:void 0},{kind:"field",decorators:[i()],key:"_unsubRenderTemplate",value:void 0},{kind:"method",key:"getCardSize",value:function(){return void 0===this._config?3:void 0===this._config.card_size?Math.round(this._config.content.split("\n").length/2)+(this._config.title?1:0):this._config.card_size}},{kind:"method",key:"setConfig",value:function(t){var e;if(!t.content)return{type:"markdown",content:" "};(null===(e=this._config)||void 0===e?void 0:e.content)!==t.content&&this._tryDisconnect(),this._config=t}},{kind:"method",key:"connectedCallback",value:function(){o(s(h.prototype),"connectedCallback",this).call(this),this._tryConnect()}},{kind:"method",key:"disconnectedCallback",value:function(){this._tryDisconnect()}},{kind:"method",key:"render",value:function(){var t;return this._config?a`
      <ha-card .header=${this._config.title}>
        <ha-markdown
          breaks
          class=${d({"no-header":!this._config.title})}
          .content=${null===(t=this._templateResult)||void 0===t?void 0:t.result}
        ></ha-markdown>
      </ha-card>
    `:a``}},{kind:"method",key:"updated",value:function(t){if(o(s(h.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;this._tryConnect();const e=t.get("hass"),n=t.get("_config");e&&n&&e.themes===this.hass.themes&&n.theme===this._config.theme||r(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_tryConnect",value:async function(){var t,e,n;if(void 0===this._unsubRenderTemplate&&this.hass&&this._config)try{this._unsubRenderTemplate=(t=this.hass.connection,e=t=>{this._templateResult=t},n={template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config,user:this.hass.user.name}},t.subscribeMessage((t=>e(t)),{type:"render_template",...n}))}catch(t){this._templateResult={result:this._config.content,listeners:{all:!1,domains:[],entities:[],time:!1}},this._unsubRenderTemplate=void 0}}},{kind:"method",key:"_tryDisconnect",value:async function(){if(this._unsubRenderTemplate)try{(await this._unsubRenderTemplate)(),this._unsubRenderTemplate=void 0}catch(t){if("not_found"!==t.code)throw t}}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      ha-card {
        height: 100%;
        border-radius: 1.5rem;
      }
      ha-markdown {
        padding: 0 16px 16px;
        word-wrap: break-word;
      }
      ha-markdown.no-header {
        padding-top: 16px;
      }
    `}}]}}),e);export{u as HuiMarkdownCard};
