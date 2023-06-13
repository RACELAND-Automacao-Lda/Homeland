import{_ as e,p as t,g as n,k as r,l as o,f as a,q as s,d as i,x as c,o as l}from"./main-b570e60a.js";const u=Symbol("Comlink.proxy"),d=Symbol("Comlink.endpoint"),m=Symbol("Comlink.releaseProxy"),h=Symbol("Comlink.finalizer"),f=Symbol("Comlink.thrown"),p=e=>"object"==typeof e&&null!==e||"function"==typeof e,g=new Map([["proxy",{canHandle:e=>p(e)&&e[u],serialize(e){const{port1:t,port2:n}=new MessageChannel;return k(e,t),[n,[n]]},deserialize:e=>(e.start(),y(e))}],["throw",{canHandle:e=>p(e)&&f in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function k(e,t=globalThis,n=["*"]){t.addEventListener("message",(function r(o){if(!o||!o.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,o.origin))return void console.warn(`Invalid origin '${o.origin}' for comlink proxy`);const{id:a,type:s,path:i}=Object.assign({path:[]},o.data),c=(o.data.argumentList||[]).map(z);let l;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),n=i.reduce(((e,t)=>e[t]),e);switch(s){case"GET":l=n;break;case"SET":t[i.slice(-1)[0]]=z(o.data.value),l=!0;break;case"APPLY":l=n.apply(t,c);break;case"CONSTRUCT":l=function(e){return Object.assign(e,{[u]:!0})}(new n(...c));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;k(e,n),l=function(e,t){return M.set(e,t),e}(t,[t])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[f]:0}}Promise.resolve(l).catch((e=>({value:e,[f]:0}))).then((n=>{const[o,i]=x(n);t.postMessage(Object.assign(Object.assign({},o),{id:a}),i),"RELEASE"===s&&(t.removeEventListener("message",r),v(t),h in e&&"function"==typeof e[h]&&e[h]())})).catch((e=>{const[n,r]=x({value:new TypeError("Unserializable return value"),[f]:0});t.postMessage(Object.assign(Object.assign({},n),{id:a}),r)}))})),t.start&&t.start()}function v(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function y(e,t){return L(e,[],t)}function w(e){if(e)throw new Error("Proxy has been released and is not useable")}function b(e){return R(e,{type:"RELEASE"}).then((()=>{v(e)}))}const E=new WeakMap,S="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(E.get(e)||0)-1;E.set(e,t),0===t&&b(e)}));function L(e,t=[],n=function(){}){let r=!1;const o=new Proxy(n,{get(n,a){if(w(r),a===m)return()=>{!function(e){S&&S.unregister(e)}(o),b(e),r=!0};if("then"===a){if(0===t.length)return{then:()=>o};const n=R(e,{type:"GET",path:t.map((e=>e.toString()))}).then(z);return n.then.bind(n)}return L(e,[...t,a])},set(n,o,a){w(r);const[s,i]=x(a);return R(e,{type:"SET",path:[...t,o].map((e=>e.toString())),value:s},i).then(z)},apply(n,o,a){w(r);const s=t[t.length-1];if(s===d)return R(e,{type:"ENDPOINT"}).then(z);if("bind"===s)return L(e,t.slice(0,-1));const[i,c]=T(a);return R(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:i},c).then(z)},construct(n,o){w(r);const[a,s]=T(o);return R(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},s).then(z)}});return function(e,t){const n=(E.get(t)||0)+1;E.set(t,n),S&&S.register(e,t,e)}(o,e),o}function T(e){const t=e.map(x);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const M=new WeakMap;function x(e){for(const[t,n]of g)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},M.get(e)||[]]}function z(e){switch(e.type){case"HANDLER":return g.get(e.name).deserialize(e.value);case"RAW":return e.value}}function R(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}let A;e([s("ha-markdown-element")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[n()],key:"content",value:void 0},{kind:"field",decorators:[n({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[n({type:Boolean})],key:"breaks",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){r(o(s.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await(async(e,t,n)=>(A||(A=y(new Worker(new URL("./markdown_worker",import.meta.url)))),A.renderMarkdown(e,t,n)))(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg});const e=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);for(;e.nextNode();){const t=e.currentNode;t instanceof HTMLAnchorElement&&t.host!==document.location.host?(t.target="_blank",t.rel="noreferrer noopener"):t instanceof HTMLImageElement&&t.addEventListener("load",this._resize)}}},{kind:"field",key:"_resize",value(){return()=>a(this,"iron-resize")}}]}}),t),e([s("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[n()],key:"content",value:void 0},{kind:"field",decorators:[n({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[n({type:Boolean})],key:"breaks",value:()=>!1},{kind:"method",key:"render",value:function(){return this.content?c`<ha-markdown-element
      .content=${this.content}
      .allowSvg=${this.allowSvg}
      .breaks=${this.breaks}
    ></ha-markdown-element>`:c``}},{kind:"get",static:!0,key:"styles",value:function(){return l`
      :host {
        display: block;
      }
      ha-markdown-element {
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
      }
      ha-markdown-element > *:first-child {
        margin-top: 0;
      }
      ha-markdown-element > *:last-child {
        margin-bottom: 0;
      }
      a {
        color: var(--accent-color);
      }
      img {
        max-width: 100%;
      }
      code,
      pre {
        background-color: var(--markdown-code-background-color, none);
        border-radius: 3px;
      }
      svg {
        background-color: var(--markdown-svg-background-color, none);
        color: var(--markdown-svg-color, none);
      }
      code {
        font-size: 85%;
        padding: 0.2em 0.4em;
      }
      pre code {
        padding: 0;
      }
      pre {
        padding: 16px;
        overflow: auto;
        line-height: 1.45;
        font-family: var(--code-font-family, monospace);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: initial;
      }
      h2 {
        font-size: 1.5em;
        font-weight: bold;
      }
    `}}]}}),i);
