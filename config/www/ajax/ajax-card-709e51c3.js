function t(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}class e{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const n=document.createElement("style"),r=i.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.2");const _=window,y=_.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,A=`<${w}>`,E=document,C=(t="")=>E.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,O=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),L=/'/g,U=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),N=new WeakMap,V=E.createTreeWalker(E,129,null,!1),z=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":"",s=k;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===k?"!--"===l[1]?s=P:void 0!==l[1]?s=O:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=j):void 0!==l[3]&&(s=j):s===j?">"===l[0]?(s=null!=r?r:k,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?j:'"'===l[3]?U:L):s===U||s===L?s=j:s===P||s===O?s=k:(s=j,r=void 0);const h=s===j&&t[e+1].startsWith("/>")?" ":"";o+=s===k?i+A:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(n.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,n]};class D{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,c]=z(t,e);if(this.el=D.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=V.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?W:"@"===e[1]?J:q})}else a.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(M.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],C()),V.nextNode(),a.push({type:2,index:++r});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)a.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,n){var r,o,s,a;if(e===H)return e;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Co)&&void 0!==s?s:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,n)),e}class I{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);V.currentNode=r;let o=V.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this.u.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(o=V.nextNode(),s++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,n){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),S(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==H&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=D.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new I(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new D(t)),e}k(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new F(this.O(C()),this.O(C()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,n,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=B(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const n=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=B(this,n[i+s],e,s),a===H&&(a=this._$AH[s]),o||(o=!S(a)||a!==this._$AH[s]),a===T?t=T:t!==T&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const K=y?y.emptyScript:"";class W extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends q{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:T)===H)return;const n=this._$AH,r=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const X=_.litHtmlPolyfillSupport;null==X||X(D,F),(null!==(g=_.litHtmlVersions)&&void 0!==g?g:_.litHtmlVersions=[]).push("2.4.0");const G=window,Q=G.ShadowRoot&&(void 0===G.ShadyCSS||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),et=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=et.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}}const nt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new it(i,t,tt)},rt=Q?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new it("string"==typeof t?t:t+"",void 0,tt))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ot;const st=window,at=st.trustedTypes,lt=at?at.emptyScript:"",ct=st.reactiveElementPolyfillSupport,dt={toAttribute(t,e){switch(e){case Boolean:t=t?lt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ht=(t,e)=>e!==t&&(e==e||t==t),ut={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:ht};class pt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ut}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(rt(t))}else void 0!==t&&e.push(rt(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Q?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),n=G.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ut){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:dt).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:dt;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt,mt;pt.finalized=!0,pt.elementProperties=new Map,pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},null==ct||ct({ReactiveElement:pt}),(null!==(ot=st.reactiveElementVersions)&&void 0!==ot?ot:st.reactiveElementVersions=[]).push("1.4.2");class ft extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,r;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new F(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}ft.finalized=!0,ft._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:ft});const gt=globalThis.litElementPolyfillSupport;null==gt||gt({LitElement:ft}),(null!==(mt=globalThis.litElementVersions)&&void 0!==mt?mt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _t;null===(_t=window.HTMLSlotElement)||void 0===_t||_t.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,bt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function $t(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):bt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function wt(t){return $t({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=({finisher:t,descriptor:e})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(r,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Et(t,e){return At({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct,St,xt;null===(Ct=window.HTMLSlotElement)||void 0===Ct||Ct.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(St||(St={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(xt||(xt={}));var kt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};function Pt(t){return void 0!==t&&"none"!==t.action}function Ot(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}var jt=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null};const Lt=(t,e,i,n,r,o)=>{const s=[];(null==r?void 0:r.length)&&s.push(t=>r.includes(function(t){return t.substr(0,t.indexOf("."))}(t))),o&&s.push(e=>t.states[e]&&o(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let r=0;r<t.length&&n.length<i;r++){let i=!0;for(const n of e)if(!n(t[r])){i=!1;break}i&&n.push(t[r])}return n})(i,s,e);if(a.length<e&&n.length){const i=Lt(t,e-a.length,n,[],r,o);a.push(...i)}return a},Ut=t=>null!=t?t:T
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Mt=1,Rt=t=>(...e)=>({_$litDirective$:t,values:e});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Rt(class extends Ht{constructor(t){var e;if(super(t),t.type!==Mt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const r=t.element.classList;this.nt.forEach(t=>{t in e||(r.remove(t),this.nt.delete(t))});for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return H}}),Nt=[{name:"entity",selector:{entity:{domain:["alarm_control_panel"]}}},{name:"entity_disarm",selector:{entity:{domain:["switch"],device_class:"alarm"}}},{name:"entity_arm_home",selector:{entity:{domain:["switch"],device_class:"alarm"}}},{name:"entity_arm_away",selector:{entity:{domain:["switch"],device_class:"alarm"}}},{name:"entity_trigger",selector:{entity:{domain:["switch"],device_class:"alarm"}}},{name:"name",selector:{text:{}}}];class Vt extends TypeError{constructor(t,e){let i;const{message:n,...r}=t,{path:o}=t;super(0===o.length?n:"At path: "+o.join(".")+" -- "+n),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,r),this.name=this.constructor.name,this.failures=()=>{var n;return null!=(n=i)?n:i=[t,...e()]}}}function zt(t){return"object"==typeof t&&null!=t}function Dt(t){return"string"==typeof t?JSON.stringify(t):""+t}function Bt(t,e,i,n){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:r,branch:o}=e,{type:s}=i,{refinement:a,message:l="Expected a value of type `"+s+"`"+(a?" with refinement `"+a+"`":"")+", but received: `"+Dt(n)+"`"}=t;return{value:n,type:s,refinement:a,key:r[r.length-1],path:r,branch:o,...t,message:l}}function*It(t,e,i,n){(function(t){return zt(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const r of t){const t=Bt(r,e,i,n);t&&(yield t)}}class Ft{constructor(t){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:e,schema:i,validator:n,refiner:r,coercer:o=(t=>t),entries:s=function*(){}}=t;this.type=e,this.schema=i,this.entries=s,this.coercer=o,this.validator=n?(t,e)=>It(n(t,e),e,this,t):()=>[],this.refiner=r?(t,e)=>It(r(t,e),e,this,t):()=>[]}assert(t){return qt(t,this)}create(t){return function(t,e){const i=Zt(t,e,{coerce:!0});if(i[0])throw i[0];return i[1]}(t,this)}is(t){return function(t,e){return!Zt(t,e)[0]}(t,this)}mask(t){return function(t,e){const i=Zt(t,e,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(t,this)}validate(t,e){return void 0===e&&(e={}),Zt(t,this,e)}}function qt(t,e){const i=Zt(t,e);if(i[0])throw i[0]}function Zt(t,e,i){void 0===i&&(i={});const n=function*t(e,i,n){void 0===n&&(n={});const{path:r=[],branch:o=[e],coerce:s=!1,mask:a=!1}=n,l={path:r,branch:o};if(s&&(e=i.coercer(e,l),a&&"type"!==i.type&&zt(i.schema)&&zt(e)&&!Array.isArray(e)))for(const t in e)void 0===i.schema[t]&&delete e[t];let c=!0;for(const t of i.validator(e,l))c=!1,yield[t,void 0];for(let[n,d,h]of i.entries(e,l)){const i=t(d,h,{path:void 0===n?r:[...r,n],branch:void 0===n?o:[...o,d],coerce:s,mask:a});for(const t of i)t[0]?(c=!1,yield[t[0],void 0]):s&&(d=t[1],void 0===n?e=d:e instanceof Map?e.set(n,d):e instanceof Set?e.add(d):zt(e)&&(e[n]=d))}if(c)for(const t of i.refiner(e,l))c=!1,yield[t,void 0];c&&(yield[void 0,e])}(t,e,i),r=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(n);if(r[0]){return[new Vt(r[0],(function*(){for(const t of n)t[0]&&(yield t[0])})),void 0]}return[void 0,r[1]]}function Kt(t,e){return new Ft({type:t,schema:null,validator:e})}function Wt(){return Kt("boolean",t=>"boolean"==typeof t)}function Jt(t){const e=t?Object.keys(t):[],i=Kt("never",()=>!1);return new Ft({type:"object",schema:t||null,*entries(n){if(t&&zt(n)){const r=new Set(Object.keys(n));for(const i of e)r.delete(i),yield[i,n[i],t[i]];for(const t of r)yield[t,n[t],i]}},validator:t=>zt(t)||"Expected an object, but received: "+Dt(t),coercer:t=>zt(t)?{...t}:t})}function Yt(t){return new Ft({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function Xt(){return Kt("string",t=>"string"==typeof t||"Expected a string, but received: "+Dt(t))}function Gt(t){const e=Object.keys(t);return new Ft({type:"type",schema:t,*entries(i){if(zt(i))for(const n of e)yield[n,i[n],t[n]]},validator:t=>zt(t)||"Expected an object, but received: "+Dt(t)})}const Qt=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const n="type"===e[0].type,r=e.map(t=>t.schema),o=Object.assign({},...r);return n?Gt(o):Jt(o)}(Jt({type:Xt(),view_layout:Kt("any",()=>!0)}),Jt({name:Yt(Xt()),entity:Yt(Xt()),entity_trigger:Yt(Xt()),entity_arm_away:Yt(Xt()),entity_arm_home:Yt(Xt()),entity_disarm:Yt(Xt()),show_name:Yt(Wt()),show_state:Yt(Wt()),show_preview:Yt(Wt()),icon:Yt(Xt())}));let te=class extends ft{constructor(){super(...arguments),this._initialized=!1}setConfig(t){qt(t,Qt),this._config=t,this.loadCardHelpers()}shouldUpdate(){var t;return this._initialized||this._initialize(),this.icon=null===(t=this._config)||void 0===t?void 0:t.icon,!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_arm_away)||""}get entity_arm_away(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_arm_away)||""}get entity_arm_home(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_arm_home)||""}get entity_disarm(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_disarm)||""}get entity_trigger(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_trigger)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}render(){return this.hass&&this._helpers?(this._helpers.importMoreInfoControl("climate"),R`
      <ha-form
        .hass=${this.hass}
        .schema=${Nt}
        .computeLabel=${this._computeLabel}
        .data = ${this._config}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `):R``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_computeLabel(t){return this.hass.localize("ui.panel.lovelace.editor.card.generic."+t.name)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;kt(this,"config-changed",{config:e})}static get styles(){return nt`
      ha-card{
        width: 20%;
        height: 70px;
        background-color: var(--ha-card-background);
        border: 2px solid var(--divider-color);
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin: 10px;
      }

      #container {
        height: 100%;
        width: 75%;
      }
      #containerMin {
        width: 30%;
        height: 100%;
      }
      @media only screen and (max-width: 600px) {
        ha-card{
          width: 30%;
          height: 70px;
          background-color: var(--ha-card-background);
          border: 2px solid var(--divider-color);
          cursor: pointer;
          display: flex;
          justify-content: center;
        }
        #containerMin {
          width: 50%;
          height: 100%;
        }

      .option {
        padding: 3% 0%;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }

      ha-formfield {
        padding: 0px 10px 0px 20px;
        max-width: 211px;
      }
    `}};t([$t({attribute:!1})],te.prototype,"hass",void 0),t([wt()],te.prototype,"_config",void 0),t([wt()],te.prototype,"_helpers",void 0),t([$t({attribute:!1})],te.prototype,"icon",void 0),te=t([yt("ajax-card-editor")],te);const ee=t=>{((t,e,i,n)=>{n=n||{},i=null==i?{}:i;const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=i,t.dispatchEvent(r)})(window,"haptic",t)},ie="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class ne extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ie?"100px":"50px",height:ie?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(t,e){if(t.actionHandler)return;if(t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}),t.actionHandler={options:e},e.disabled)return;const i=t=>{let i,n;this.cancelled=!1,t.touches?(i=t.touches[0].pageX,n=t.touches[0].pageY):(i=t.pageX,n=t.pageY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(i,n),this.held=!0,ee("heavy")},this.holdTime))},n=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled&&!this.held)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?kt(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,kt(i,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,kt(i,"action",{action:"double_tap"})):(ee("medium"),kt(i,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",t=>{13===t.keyCode&&n(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-ajax-card",ne);const re=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-ajax-card"))return t.querySelector("action-handler-ajax-card");const e=document.createElement("action-handler-ajax-card");return t.appendChild(e),e})();i&&i.bind(t,e)},oe=Rt(class extends Ht{update(t,[e]){return re(t.element,e),H}render(t){}}),se=Rt(class extends Ht{constructor(t){var e;if(super(t),t.type!==Mt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach(t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const n=e[t];null!=n&&(this.vt.add(t),t.includes("-")?i.setProperty(t,n):i[t]=n)}return H}}),ae="unavailable";var le={card:"Ajax alarm",version:"Version",description:"Ajax alarm system configuration card",invalid_configuration:"Invalid configuration",show_warning:"No entities were detected",show_error:"Show Error",tap:"Tap to open/close"},ce={armed_away:"Armed Away",armed_night:"Armed Night",triggered:"Alarm Triggered",disarmed:"Disarmed"},de={disarm:"Disarm",trigger:"Trigger Alarm"},he={config:{entity:"Entity",sensor:"Sensor",name:"Name",show_name:"Show name?"}},ue={common:le,states:ce,actions:de,editor:he},pe={card:"Alarme Ajax",description:"Carta de configuração do sistema de alarme Ajax",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},ve={armed_away:"Armado Ausente",armed_night:"Armado Noite",triggered:"Alarme Despoletado",disarmed:"Desarmado"},me={disarm:"Desarmar",trigger:"Disparar Alarme"},fe={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},ge={common:pe,states:ve,actions:me,editor:fe},_e={card:"Allarme ajax",description:"Lettera di configurazione del sistema di allarme Ajax",version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessuna entità è stata rilevata",show_error:"Mostra errore",tap:"Tocca per aprire/chiudere"},ye={armed_away:"Assente Armato",armed_night:"Notte Armata",triggered:"Scattato l'allarme",disarmed:"Disarmato"},be={disarm:"Disarmare",trigger:"Attivare l'allarme"},$e={config:{entity:"Entità",sensor:"Sensore",name:"Nome",show_name:"Mostra nome?"}},we={common:_e,states:ye,actions:be,editor:$e},Ae={card:"Alarma Ajax",description:"Carta de configuración del sistema de alarma Ajax",version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectaron entidades",show_error:"Mostrar error",tap:"Toque para abrir/cerrar"},Ee={armed_away:"Armado Ausente",armed_night:"Noche Armada",triggered:"Alarma Activada",disarmed:"Desarmado"},Ce={disarm:"Desarmar",trigger:"Activar Alarma"},Se={config:{entity:"Entidad",sensor:"Sensor",name:"Nombre",show_name:"Mostrar nombre?"}},xe={common:Ae,states:Ee,actions:Ce,editor:Se},ke={card:"Alarme ajax",description:"Lettre de configuration du système d'alarme Ajax",version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucune entité n'a été détectée",show_error:"Afficher l'erreur",tap:"Appuyez pour ouvrir/fermer"},Pe={armed_away:"Armé Absent",armed_night:"Nuit Armée",triggered:"Alarme Déclenchée",disarmed:"Alarme Désarmée"},Oe={disarm:"Désarmer",trigger:"Déclencher l'alarme"},je={config:{entity:"Entité",sensor:"Capteur",name:"Nom",show_name:"Afficher le nom?"}},Le={common:ke,states:Pe,actions:Oe,editor:je},Ue={card:"Ajax-Alarm",description:"Konfigurationsschreiben für das Ajax-Alarmsystem",version:"Ausführung",invalid_configuration:"Ungültige Konfiguration",show_warning:"Es wurden keine Entitäten erkannt",show_error:"Fehler anzeigen",tap:"Zum Öffnen/Schließen antippen"},Me={armed_away:"Bewaffnet Abwesend",armed_night:"Bewaffnete Nacht",triggered:"Alarm ausgelöst",disarmed:"Unbewaffnet"},Re={disarm:"Entwaffnen",trigger:"Alarm auslösen"},He={config:{entity:"Einheit",sensor:"Sensor",name:"Name",show_name:"Name anzeigen?"}},Te={common:Ue,states:Me,actions:Re,editor:He},Ne={card:"Alarme Ajax",description:"Carta de configuração do sistema de alarme Ajax",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},Ve={armed_away:"Armado Ausente",armed_night:"Armado Noite",triggered:"Alarme Despoletado",disarmed:"Desarmado"},ze={disarm:"Desarmar",trigger:"Disparar Alarme"},De={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},Be={common:Ne,states:Ve,actions:ze,editor:De};const Ie={en:Object.freeze({__proto__:null,common:le,states:ce,actions:de,editor:he,default:ue}),pt:Object.freeze({__proto__:null,common:pe,states:ve,actions:me,editor:fe,default:ge}),it:Object.freeze({__proto__:null,common:_e,states:ye,actions:be,editor:$e,default:we}),es:Object.freeze({__proto__:null,common:Ae,states:Ee,actions:Ce,editor:Se,default:xe}),fr:Object.freeze({__proto__:null,common:ke,states:Pe,actions:Oe,editor:je,default:Le}),de:Object.freeze({__proto__:null,common:Ue,states:Me,actions:Re,editor:He,default:Te}),ptBR:Object.freeze({__proto__:null,common:Ne,states:Ve,actions:ze,editor:De,default:Be})};function Fe(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Ie[n])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Ie.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Ie.en)),""!==e&&""!==i&&(r=r.replace(e,i)),r}var qe="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z",Ze="M1,4.27L2.28,3L20.5,21.22L19.23,22.5L17,20.25C15.57,21.57 13.87,22.54 12,23C6.84,21.74 3,16.55 3,11V6.27L1,4.27M12,1L21,5V11C21,13.28 20.35,15.5 19.23,17.41L5.65,3.82L12,1Z";const Ke=t=>{switch(t){case"armed_away":return qe;case"armed_vacation":return"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5.68C12.5,5.68 12.95,6.11 12.95,6.63V10.11L18,13.26V14.53L12.95,12.95V16.42L14.21,17.37V18.32L12,17.68L9.79,18.32V17.37L11.05,16.42V12.95L6,14.53V13.26L11.05,10.11V6.63C11.05,6.11 11.5,5.68 12,5.68Z";case"armed_home":return"M11,13H13V16H16V11H18L12,6L6,11H8V16H11V13M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z";case"armed_night":return"M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M15.97 14.41C14.13 16.58 10.76 16.5 9 14.34C6.82 11.62 8.36 7.62 11.7 7C12.04 6.95 12.33 7.28 12.21 7.61C11.75 8.84 11.82 10.25 12.53 11.47C13.24 12.69 14.42 13.46 15.71 13.67C16.05 13.72 16.2 14.14 15.97 14.41Z";case"armed_custom_bypass":return"M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z";case"pending":return"M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z";case"triggered":return"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z";case"disarmed":return Ze;default:return"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"}},We=t=>{return void 0===t.attributes.friendly_name?(e=t.entity_id,e.substr(e.indexOf(".")+1)).replace(/_/g," "):t.attributes.friendly_name||"";var e},Je=()=>import("./alarm-dialog-3e66b14a.js");console.info(`%c  RACELAND-ajax-card \n%c  ${Fe("common.version")} 2.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"ajax-card",name:Fe("common.card"),preview:!0,icon:qe,color:"#CC1B00",backgroundColor:"#FFA99C"});let Ye=class extends ft{constructor(){super(...arguments),this._shouldRenderRipple=!0,this.computeActiveState=t=>{const e=t.entity_id.split(".")[0];let i=t.state;return"climate"===e&&(i=t.attributes.hvac_action),i},this._rippleHandlers=new e(()=>(this._shouldRenderRipple=!0,this._ripple))}static async getConfigElement(){return document.createElement("ajax-card-editor")}static getStubConfig(t,e,i){return{type:"custom:ajax-card",entity:Lt(t,7,e,i,["alarm_control_panel"])[0]||"",entity_trigger:"",entity_arm_away:"",entity_arm_home:"",entity_disarm:"",show_name:!0,show_state:!0,show_preview:!0,icon:Ze}}setConfig(t){if(!t)throw new Error(Fe("common.invalidconfiguration"));t.test_gui&&jt().setEditMode(!0),this.config=Object.assign(Object.assign({},t),{show_icon:!0,tap_action:{action:"more-info"},hold_action:{action:"more-info"}})}translate_state(t){return"on"===Ut(t?this.computeActiveState(t):void 0)?Fe("states.on"):"off"===Ut(t?this.computeActiveState(t):void 0)?Fe("states.off"):"unavailable"===Ut(t?this.computeActiveState(t):void 0)?Fe("states.unavailable"):""}shouldUpdate(t){if(t.has("config"))return!0;const e=t.get("hass");return!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale||e.states[this.config.entity]!==this.hass.states[this.config.entity]}render(){var t,e;if(this.config.show_warning)return this._showWarning(Fe("common.show_warning"));if(this.config.show_error)return this._showError(Fe("common.show_error"));const i=this.hass.states[this.config.entity];if(console.log("config",this.config),!i)return R`
        <hui-warning> ${Fe("common.show_warning")} </hui-warning>
      `;const n=this._stateDisplay(i.state),r=this.config.show_name?this.config.name||(i?We(i):""):"";return R`
            <ha-card
        @action=${this._showMoreInfoDialog}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${oe({hasHold:Pt(null===(t=this.config)||void 0===t?void 0:t.hold_action),hasDoubleClick:Pt(null===(e=this.config)||void 0===e?void 0:e.double_tap_action)})}
        role="button"
        aria-label=${this.config.name||(i?We(i):"")}
        tabindex=${Ut(Pt(this.config.tap_action)?"0":void 0)}
        class="ha-card${Tt({[i.state.replace(/armed_\w+/g,"armed")]:!0,"state-unavailable":"unavailable"===i.state})}"
      >
        ${this._shouldRenderRipple?R`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
                  <ha-svg-icon
                  class=
              ${Tt({[i.state.replace(/armed_\w+/g,"armed")]:!0,"state-unavailable":"unavailable"===i.state})}
                    tabindex="-1"
                    data-state=${Ut(i?this.computeActiveState(i):void 0)}
                    .path=${Ke(i.state)}
                    .state=${i.state}
                    style=${se({height:this.config.icon_height?this.config.icon_height:""})}
                  ></ha-svg-icon>
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${Tt({primary:!1===this.hass.themes.darkMode,unavailable:"unavailable"===i.state,"primary-dark":!0===this.hass.themes.darkMode})}
              >${r}</span
            >
            <span class="secondary${Tt({unavailable:"unavailable"===i.state})}">${n}</span>

          </div>
          ${"unavailable"===i.state?R` <unavailable-icon></unavailable-icon> `:R``}
        </div>
      </ha-card>
    `}_showMoreInfoDialog(){var t,e;t=this,e={alarmInfo:this.config},kt(t,"show-dialog",{dialogTag:"alarm-dialog",dialogImport:Je,dialogParams:e})}_stateDisplay(t){return"unavailable"===t?this.hass.localize("state.default.unavailable"):this.hass.localize("component.alarm_control_panel.state._."+t)||t}_showWarning(t){return R`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),R`
      ${e}
    `}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleBlur(){this._rippleHandlers.endFocus()}static get styles(){return nt`
      ha-svg-icon.state-unavailable {
        pointer-events: none;
      }
      .unavailable {
        --alarm-state-color: var(--state-unavailable-color);
      }

      ha-svg-icon.disarmed {
        fill: #648939;
        transition: 0.6s ease-out;
      }

      ha-svg-icon.triggered {
        fill: #CC1B00;
        animation: pulse 1s infinite;
      }

      ha-svg-icon.armed {
        fill: #CC1B00;
      }

      ha-svg-icon.arming {
        fill:  #B88400;;
        animation: pulse 1s infinite;
      }

      ha-svg-icon.pending {
        fill:  #B88400;;
        animation: pulse 1s infinite;
      }

      .ha-card.pending {
        background-color: #FFEBB8;
        transition: 0.6s ease-out;
      }
      .ha-card.armed {
        background-color: #FFA99C;
        transition: 0.6s ease-out;
      }
      .ha-card.disarmed {
        background-color: #D6E4C5;
        transition: 0.6s ease-out;
      }

      .ha-card.triggered {
        background-color: #FFA99C;
        transition: 0.6s ease-out;
      }

      .ha-card.arming {
        background-color: #FFEBB8;
        transition: 0.6s ease-out;
      }
      ha-svg-icon {
        transition: 0.6s ease-out;
      }

      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      unavailable-icon {
        position: absolute;
        top: 11px;
        right: 25%;
      }

      .state {
        font-size: 0.9rem;
        color: var(--secondary-text-color);
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
      }
      .primary {
        height: 20px;
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        letter-spacing: 0.1px;
        color: var(--primary-text-color);
      }
      .primary-dark {
        height: 20px;
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        letter-spacing: 0.1px;
        color: var(--primary-background-color);
      }
      .secondary {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #424245;
      }
      :host {
        --tile-color: rgb(var(--rgb-state-inactive-color));
        -webkit-tap-highlight-color: transparent;
      }
      ha-card:has(ha-tile-info:focus-visible) {
        border-color: var(--tile-color);
        box-shadow: 0 0 0 1px var(--tile-color);
      }
      ha-card {
        --mdc-ripple-color: var(--tile-color);
        height: 100%;
      overflow: hidden;
      // For safari overflow hidden
      z-index: 0;
      background: var( --ha-card-background, var(--card-background-color, white) );
      border-radius: var(--ha-card-border-radius, 4px);
    }
    ha-card.disabled {
      --tile-color: rgb(var(--rgb-disabled-color));
    }
    [role="button"] {
      cursor: pointer;
    }
    [role="button"]:focus {
      outline: none;
    }
    .tile {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .icon-container {
      width: 17%;
      position: relative;
      flex: none;
      margin-right: 12px;
      margin-inline-start: 12px;
      margin-inline-end: initial;
      direction: var(--direction);
      transition: transform 180ms ease-in-out;
    }
    .icon-container .icon {
      --tile-icon-color: var(--tile-color);
    }
    .icon-container .badge {
      position: absolute;
      top: -3px;
      right: -3px;
    }
    .icon-container[role="button"]:focus-visible,
    .icon-container[role="button"]:active {
      transform: scale(1.2);
    }
    .info {
      position: relative;
      padding: 13px 12px;
      flex: 1;
      min-width: 0;
      min-height: 40px;
      transition: background-color 180ms ease-in-out;
    }
    ha-svg-icon {
      --mdc-icon-size: 97%;
    }
    unavailable-icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .unavailable.primary-dark {
      height: 20px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.1px;
      color: var(--primary-text-color);
    }
    .secondary.unavailable {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    .ha-card.state-unavailable {
      pointer-events: none;
      background: none;
    }
    `}};t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(r,n)}})({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Ye.prototype,"_ripple",void 0),t([$t({attribute:!1})],Ye.prototype,"hass",void 0),t([wt()],Ye.prototype,"config",void 0),t([wt()],Ye.prototype,"_shouldRenderRipple",void 0),t([Et("#alarmCode")],Ye.prototype,"_input",void 0),t([function(t){return At({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],Ye.prototype,"handleRippleActivate",null),Ye=t([yt("ajax-card")],Ye);export{Ye as B,ae as U,Ot as _,Ke as a,se as b,t as c,Et as d,$t as e,yt as f,nt as i,jt as k,Fe as l,kt as n,Tt as o,ft as s,wt as t,R as y};
