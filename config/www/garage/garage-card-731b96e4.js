function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}class e{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.2");const _=window,y=_.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,E=`<${w}>`,S=document,A=(t="")=>S.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,P=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,U=/"/g,V=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),N=new WeakMap,z=S.createTreeWalker(S,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===H?"!--"===l[1]?r=k:void 0!==l[1]?r=P:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?U:M):r===U||r===M?r=O:r===k||r===P?r=H:(r=O,n=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";o+=r===H?i+E:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(s.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=L(t,e);if(this.el=D.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?W:"@"===e[1]?K:q})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(V.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),z.nextNode(),a.push({type:2,index:++n});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var n,o,r,a;if(e===j)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Z(t,l._$AS(t,e.values),l,s)),e}class I{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);z.currentNode=n;let o=z.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new B(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new J(o,this,t)),this.u.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=z.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),C(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==j&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new I(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new D(t)),e}k(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new B(this.O(A()),this.O(A()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,s[i+r],e,r),a===j&&(a=this._$AH[r]),o||(o=!C(a)||a!==this._$AH[r]),a===T?t=T:t!==T&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const G=y?y.emptyScript:"";class W extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class K extends q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:T)===j)return;const s=this._$AH,n=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==T&&(s===T||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const Y=_.litHtmlPolyfillSupport;null==Y||Y(D,B),(null!==(m=_.litHtmlVersions)&&void 0!==m?m:_.litHtmlVersions=[]).push("2.4.0");const X=window,Q=X.ShadowRoot&&(void 0===X.ShadyCSS||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),et=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=et.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}}const st=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new it(i,t,tt)},nt=Q?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new it("string"==typeof t?t:t+"",void 0,tt))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ot;const rt=window,at=rt.trustedTypes,lt=at?at.emptyScript:"",ct=rt.reactiveElementPolyfillSupport,ht={toAttribute(t,e){switch(e){case Boolean:t=t?lt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},dt=(t,e)=>e!==t&&(e==e||t==t),ut={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:dt};class pt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ut}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(nt(t))}else void 0!==t&&e.push(nt(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Q?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=X.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ut){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:ht).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:ht;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt,ft;pt.finalized=!0,pt.elementProperties=new Map,pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},null==ct||ct({ReactiveElement:pt}),(null!==(ot=rt.reactiveElementVersions)&&void 0!==ot?ot:rt.reactiveElementVersions=[]).push("1.4.2");class gt extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new B(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}gt.finalized=!0,gt._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:gt});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:gt}),(null!==(ft=globalThis.litElementVersions)&&void 0!==ft?ft:globalThis.litElementVersions=[]).push("3.2.2");
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
const yt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Et,St,At;function Ct(t){return t.substr(0,t.indexOf("."))}null===(Et=window.HTMLSlotElement)||void 0===Et||Et.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(St||(St={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(At||(At={}));var xt=["closed","locked","off"],Ht=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},kt=function(t){Ht(window,"haptic",t)},Pt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,n=Ct(e),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(o,s,{entity_id:e})}(t,e,xt.includes(t.states[e].state))},Ot=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(kt("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&Ht(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Ht(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(Pt(e,i.entity),kt("success"));break;case"call-service":if(!s.service)return void kt("failure");var n=s.service.split(".",2);e.callService(n[0],n[1],s.service_data,s.target),kt("success");break;case"fire-dom-event":Ht(t,"ll-custom",s)}},Mt=function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),Ot(t,e,i,n)};function Ut(t){return void 0!==t&&"none"!==t.action}function Vt(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}var Rt=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null};const jt=(t,e,i,s,n,o)=>{const r=[];(null==n?void 0:n.length)&&r.push(t=>n.includes(Ct(t))),o&&r.push(e=>t.states[e]&&o(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const s=[];for(let n=0;n<t.length&&s.length<i;n++){let i=!0;for(const s of e)if(!s(t[n])){i=!1;break}i&&s.push(t[n])}return s})(i,r,e);if(a.length<e&&s.length){const i=jt(t,e-a.length,s,[],n,o);a.push(...i)}return a},Tt=t=>null!=t?t:T
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Nt=1,zt=t=>(...e)=>({_$litDirective$:t,values:e});class Lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=zt(class extends Lt{constructor(t){var e;if(super(t),t.type!==Nt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach(t=>{t in e||(n.remove(t),this.nt.delete(t))});for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return j}}),Zt=zt(class extends Lt{constructor(t){var e;if(super(t),t.type!==Nt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach(t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return j}}),It=[{name:"entity",selector:{entity:{domain:["switch"],device_class:"garage"}}},{name:"sensor",selector:{entity:{domain:["binary_sensor"],device_class:"garage_door"}}},{name:"name",selector:{text:{}}}];
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bt extends TypeError{constructor(t,e){let i;const{message:s,...n}=t,{path:o}=t;super(0===o.length?s:"At path: "+o.join(".")+" -- "+s),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var s;return null!=(s=i)?s:i=[t,...e()]}}}function qt(t){return"object"==typeof t&&null!=t}function Ft(t){return"string"==typeof t?JSON.stringify(t):""+t}function Gt(t,e,i,s){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:o}=e,{type:r}=i,{refinement:a,message:l="Expected a value of type `"+r+"`"+(a?" with refinement `"+a+"`":"")+", but received: `"+Ft(s)+"`"}=t;return{value:s,type:r,refinement:a,key:n[n.length-1],path:n,branch:o,...t,message:l}}function*Wt(t,e,i,s){(function(t){return qt(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=Gt(n,e,i,s);t&&(yield t)}}class Kt{constructor(t){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:e,schema:i,validator:s,refiner:n,coercer:o=(t=>t),entries:r=function*(){}}=t;this.type=e,this.schema=i,this.entries=r,this.coercer=o,this.validator=s?(t,e)=>Wt(s(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>Wt(n(t,e),e,this,t):()=>[]}assert(t){return Jt(t,this)}create(t){return function(t,e){const i=Yt(t,e,{coerce:!0});if(i[0])throw i[0];return i[1]}(t,this)}is(t){return function(t,e){return!Yt(t,e)[0]}(t,this)}mask(t){return function(t,e){const i=Yt(t,e,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(t,this)}validate(t,e){return void 0===e&&(e={}),Yt(t,this,e)}}function Jt(t,e){const i=Yt(t,e);if(i[0])throw i[0]}function Yt(t,e,i){void 0===i&&(i={});const s=function*t(e,i,s){void 0===s&&(s={});const{path:n=[],branch:o=[e],coerce:r=!1,mask:a=!1}=s,l={path:n,branch:o};if(r&&(e=i.coercer(e,l),a&&"type"!==i.type&&qt(i.schema)&&qt(e)&&!Array.isArray(e)))for(const t in e)void 0===i.schema[t]&&delete e[t];let c=!0;for(const t of i.validator(e,l))c=!1,yield[t,void 0];for(let[s,h,d]of i.entries(e,l)){const i=t(h,d,{path:void 0===s?n:[...n,s],branch:void 0===s?o:[...o,h],coerce:r,mask:a});for(const t of i)t[0]?(c=!1,yield[t[0],void 0]):r&&(h=t[1],void 0===s?e=h:e instanceof Map?e.set(s,h):e instanceof Set?e.add(h):qt(e)&&(e[s]=h))}if(c)for(const t of i.refiner(e,l))c=!1,yield[t,void 0];c&&(yield[void 0,e])}(t,e,i),n=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(s);if(n[0]){return[new Bt(n[0],(function*(){for(const t of s)t[0]&&(yield t[0])})),void 0]}return[void 0,n[1]]}function Xt(t,e){return new Kt({type:t,schema:null,validator:e})}function Qt(){return Xt("boolean",t=>"boolean"==typeof t)}function te(t){const e=t?Object.keys(t):[],i=Xt("never",()=>!1);return new Kt({type:"object",schema:t||null,*entries(s){if(t&&qt(s)){const n=new Set(Object.keys(s));for(const i of e)n.delete(i),yield[i,s[i],t[i]];for(const t of n)yield[t,s[t],i]}},validator:t=>qt(t)||"Expected an object, but received: "+Ft(t),coercer:t=>qt(t)?{...t}:t})}function ee(t){return new Kt({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function ie(){return Xt("string",t=>"string"==typeof t||"Expected a string, but received: "+Ft(t))}function se(t){const e=Object.keys(t);return new Kt({type:"type",schema:t,*entries(i){if(qt(i))for(const s of e)yield[s,i[s],t[s]]},validator:t=>qt(t)||"Expected an object, but received: "+Ft(t)})}var ne={card:"Garage",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"No entities were detected",show_error:"Show Error",tap:"Tap to open/close"},oe={on:"Opened",off:"Closed",unavailable:"Unavailable"},re={config:{entity:"Entity",sensor:"Sensor",name:"Name",show_name:"Show name?"},custom_icons:{door:"Door",garage:"Garage",gate:"Gate"}},ae={common:ne,states:oe,editor:re},le={card:"Garagem",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},ce={on:"Aberto",off:"Fechado",unavailable:"Indisponível"},he={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},de={common:le,states:ce,editor:he},ue={card:"Garage",version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessuna entità è stata rilevata",show_error:"Mostra errore",tap:"Tocca per aprire/chiudere"},pe={on:"Aprire",off:"Chiuso",unavailable:"Non disponibile"},ve={config:{entity:"Entità",sensor:"Sensore",name:"Nome",show_name:"Mostra nome?"}},fe={common:ue,states:pe,editor:ve},ge={card:"Garaje",version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectaron entidades",show_error:"Mostrar error",tap:"Toque para abrir/cerrar"},me={on:"Abierto",off:"Cerrado",unavailable:"Indisponible"},_e={config:{entity:"Entidad",sensor:"Sensor",name:"Nombre",show_name:"Mostrar nombre?"}},ye={common:ge,states:me,editor:_e},be={card:"Garage",version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucune entité n'a été détectée",show_error:"Afficher l'erreur",tap:"Appuyez pour ouvrir/fermer"},$e={on:"Ouvert",off:"Fermé",unavailable:"Indisponible"},we={config:{entity:"Entité",sensor:"Capteur",name:"Nom",show_name:"Afficher le nom?"}},Ee={common:be,states:$e,editor:we},Se={card:"Garage",version:"Ausführung",invalid_configuration:"Ungültige Konfiguration",show_warning:"Es wurden keine Entitäten erkannt",show_error:"Fehler anzeigen",tap:"Zum Öffnen/Schließen antippen"},Ae={on:"Offen",off:"Geschlossen",unavailable:"Nicht verfügbar"},Ce={config:{entity:"Einheit",sensor:"Sensor",name:"Name",show_name:"Name anzeigen?"}},xe={common:Se,states:Ae,editor:Ce},He={card:"Garagem",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},ke={on:"Aberto",off:"Fechado",unavailable:"Indisponível"},Pe={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},Oe={common:He,states:ke,editor:Pe};const Me={en:Object.freeze({__proto__:null,common:ne,states:oe,editor:re,default:ae}),pt:Object.freeze({__proto__:null,common:le,states:ce,editor:he,default:de}),it:Object.freeze({__proto__:null,common:ue,states:pe,editor:ve,default:fe}),es:Object.freeze({__proto__:null,common:ge,states:me,editor:_e,default:ye}),fr:Object.freeze({__proto__:null,common:be,states:$e,editor:we,default:Ee}),de:Object.freeze({__proto__:null,common:Se,states:Ae,editor:Ce,default:xe}),ptBR:Object.freeze({__proto__:null,common:He,states:ke,editor:Pe,default:Oe})};function Ue(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],Me[s])}catch(e){n=t.split(".").reduce((t,e)=>t[e],Me.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],Me.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}const Ve="M 23.3709 24.1467 H 20.2687 V 10.182 H 4.753 V 24.1467 H 1.6508 V 7.0799 L 12.5084 0.8706 L 23.3709 7.0749 V 24.1467 Z M 6.3041 11.7332 H 18.7127 V 14.8353 H 6.3041 V 11.7332 Z H 18.7127 Z H 6.3041 Z",Re="M 23.3709 24.1467 Z Z M 6.304 16.3865 H 18.7126 V 19.4886 H 6.304 V 16.3865 Z M 18.7177 21.0396 H 6.304 V 24.1418 H 18.7177 V 21.0396 Z",je="M2.75359 7H0.688207C0.615046 7 0.47998 7.0384 0.47998 7.0864L0.637557 7.696V16.6384C0.637557 16.7584 0.750112 16.8544 0.890806 16.8544H2.55099C2.69169 16.8544 2.80424 16.7584 2.80424 16.6384V7.696L2.96182 7.0864C2.96182 7.0384 2.82112 7 2.75359 7Z",Te="M23.3118 7H21.2464C21.1732 7 21.0381 7.0384 21.0381 7.0864L21.1957 7.696V16.6384C21.1957 16.7584 21.3083 16.8544 21.449 16.8544H23.1092C23.2499 16.8544 23.3624 16.7584 23.3624 16.6384V7.696L23.52 7.0864C23.52 7.0384 23.3849 7 23.3118 7Z",Ne="M20.2671 8.4064H3.73282C3.46831 8.4064 3.25446 8.5888 3.25446 8.8144V15.9616C3.25446 16.1872 3.46831 16.3696 3.73282 16.3696H20.2671C20.5316 16.3696 20.7455 16.1872 20.7455 15.9616V8.8144C20.7455 8.5888 20.5316 8.4064 20.2671 8.4064ZM20.3178 15.7888H3.68217V13.912H20.3178V15.7888ZM20.3178 13.3312H3.68217V11.4544H20.3178V13.3312ZM20.3178 10.8736H3.68217V8.9968H20.3178V10.8736Z",ze="unavailable",Le=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const s="type"===e[0].type,n=e.map(t=>t.schema),o=Object.assign({},...n);return s?se(o):te(o)}(te({type:ie(),view_layout:Xt("any",()=>!0)}),te({name:ee(ie()),entity:ee(ie()),sensor:ee(ie()),show_name:ee(Qt()),show_state:ee(Qt()),show_preview:ee(Qt()),icon:ee(ie())})),De=["M 23.3709 24.1467 H 20.2687 V 10.182 H 4.753 V 24.1467 H 1.6508 V 7.0799 L 12.5084 0.8706 L 23.3709 7.0749 V 24.1467 Z M 6.3041 11.7332 H 18.7127 V 14.8353 H 6.3041 V 11.7332 Z H 18.7127 Z H 6.3041 Z M 23.3709 24.1467 Z Z M 6.304 16.3865 H 18.7126 V 19.4886 H 6.304 V 16.3865 Z M 18.7177 21.0396 H 6.304 V 24.1418 H 18.7177 V 21.0396 Z","M2.75359 7H0.688207C0.615046 7 0.47998 7.0384 0.47998 7.0864L0.637557 7.696V16.6384C0.637557 16.7584 0.750112 16.8544 0.890806 16.8544H2.55099C2.69169 16.8544 2.80424 16.7584 2.80424 16.6384V7.696L2.96182 7.0864C2.96182 7.0384 2.82112 7 2.75359 7ZM23.3118 7H21.2464C21.1732 7 21.0381 7.0384 21.0381 7.0864L21.1957 7.696V16.6384C21.1957 16.7584 21.3083 16.8544 21.449 16.8544H23.1092C23.2499 16.8544 23.3624 16.7584 23.3624 16.6384V7.696L23.52 7.0864C23.52 7.0384 23.3849 7 23.3118 7ZM20.2671 8.4064H3.73282C3.46831 8.4064 3.25446 8.5888 3.25446 8.8144V15.9616C3.25446 16.1872 3.46831 16.3696 3.73282 16.3696H20.2671C20.5316 16.3696 20.7455 16.1872 20.7455 15.9616V8.8144C20.7455 8.5888 20.5316 8.4064 20.2671 8.4064ZM20.3178 15.7888H3.68217V13.912H20.3178V15.7888ZM20.3178 13.3312H3.68217V11.4544H20.3178V13.3312ZM20.3178 10.8736H3.68217V8.9968H20.3178V10.8736Z"];let Ze=class extends gt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){Jt(t,Le),this._config=t,this.loadCardHelpers()}shouldUpdate(){var t;return this._initialized||this._initialize(),this.icon=null===(t=this._config)||void 0===t?void 0:t.icon,!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _sensor(){var t;return(null===(t=this._config)||void 0===t?void 0:t.sensor)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}render(){return this.hass&&this._helpers?(this._helpers.importMoreInfoControl("climate"),R`
      <ha-form
        .hass=${this.hass}
        .schema=${It}
        .computeLabel=${this._computeLabel}
        .data = ${this._config}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div id="picker"> ${Ue("editor.config.picker")} </div>
        <div id="icons">
          ${De.map((t,e)=>e?R`
            <ha-card class="icon-card ${Dt({on:this.icon===t,off:this.icon!==t})}"
                @click=${this._changed_icon.bind(this,t)}>
            <div id="containerMin">
              <svg viewBox="0 0 24 24" height="50px" width="50px">
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[0]}/>
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[1]}/>
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[2]}/>
              </svg>
            </div>
            </ha-card>`:R`
            <ha-card class="icon-card ${Dt({on:this.icon===t,off:this.icon!==t})}"
                @click=${this._changed_icon.bind(this,t)}>
            <div id="containerMin">
              <svg viewBox="0 0 24 24" height="40px" width="40px">
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[0]}/>
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[1]}/>
                <path class="svg-icon ${Dt({on:this.icon===t,off:this.icon!==t})}" d=${t.split(":")[2]}/>
              </svg>
            </div>
            </ha-card>`)}
        </div>
    `):R``}_changed_icon(t){this._config&&this.hass&&(this._config=Object.assign(Object.assign({},this._config),{icon:t}),this.icon=t,Ht(this,"config-changed",{config:this._config}))}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_computeLabel(t){return this.hass.localize("ui.panel.lovelace.editor.card.generic."+t.name)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;Ht(this,"config-changed",{config:e})}static get styles(){return st`
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
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
          align-items: center;
        }
        #containerMin {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* align-content: center; */
          /* display: contents; */
        }
      }
      ha-card.icon-card.on{
        color: var(--accent-color);
        box-shadow: 0px 0px 5px var(--accent-color) , 0px 0px 5px var(--accent-color);
      }
      .svg-icon.off {
        fill: var(--paper-item-icon-color);
      }
      .svg-icon.on {
        fill: var(--accent-color);
      }
      #picker {
        margin-top: 50px;
        font-size: 1.0rem;
        font-weight: 450;
      }
      #icons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
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
    `}};t([$t({attribute:!1})],Ze.prototype,"hass",void 0),t([wt()],Ze.prototype,"_config",void 0),t([wt()],Ze.prototype,"_toggle",void 0),t([wt()],Ze.prototype,"_helpers",void 0),t([$t({attribute:!1})],Ze.prototype,"icon",void 0),Ze=t([yt("garage-card-editor")],Ze);const Ie=t=>{((t,e,i,s)=>{s=s||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)})(window,"haptic",t)},Be="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class qe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Be?"100px":"50px",height:Be?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(t,e){if(t.actionHandler)return;if(t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}),t.actionHandler={options:e},e.disabled)return;const i=t=>{let i,s;this.cancelled=!1,t.touches?(i=t.touches[0].pageX,s=t.touches[0].pageY):(i=t.pageX,s=t.pageY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(i,s),this.held=!0,Ie("heavy")},this.holdTime))},s=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled&&!this.held)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?Ht(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Ht(i,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ht(i,"action",{action:"double_tap"})):(Ie("medium"),Ht(i,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",t=>{13===t.keyCode&&s(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-garage-card",qe);const Fe=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-garage-card"))return t.querySelector("action-handler-garage-card");const e=document.createElement("action-handler-garage-card");return t.appendChild(e),e})();i&&i.bind(t,e)},Ge=zt(class extends Lt{update(t,[e]){return Fe(t.element,e),j}render(t){}});const We=()=>import("./confirm-dialog-c1f7486d.js"),Ke=/^(\w+)\.(\w+)$/,Je=t=>Ke.test(t);console.info(`%c  RACELAND-garage-card \n%c  ${Ue("common.version")} 2.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"garage-card",name:Ue("common.card"),preview:!0,icon:"M22.4208 23.1648H19.4448V9.76801H4.55998V23.1648H1.58398V6.79201L12 0.835205L22.4208 6.78721V23.1648Z M6.0481 11.256H17.9521V14.232H6.0481V11.256Z M6.0481 15.72H17.9521V18.696H6.0481V15.72Z M17.9569 20.184H6.0481V23.16H17.9569V20.184Z",color:"#648939",backgroundColor:"#D6E4C5"});let Ye=class extends gt{constructor(){super(...arguments),this._shouldRenderRipple=!0,this.computeActiveState=t=>{const e=t.entity_id.split(".")[0];let i=t.state;return"climate"===e&&(i=t.attributes.hvac_action),i},this.computeObjectId=t=>t.substr(t.indexOf(".")+1),this.computeStateName=t=>void 0===t.attributes.friendly_name?this.computeObjectId(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||"",this._rippleHandlers=new e(()=>(this._shouldRenderRipple=!0,this._ripple))}static async getConfigElement(){return document.createElement("garage-card-editor")}static getStubConfig(t,e,i){return{type:"custom:garage-card",entity:jt(t,1,e,i,["switch"])[0]||"",sensor:"",show_name:!0,show_state:!0,show_preview:!0,icon:Ve+" "+Re}}setConfig(t){if(t.entity&&!Je(t.entity))throw new Error("Invalid entity");t.test_gui&&Rt().setEditMode(!0),this.config=Object.assign(Object.assign({},t),{show_icon:!0,tap_action:{action:"toggle"},hold_action:{action:"toggle"}})}translate_state(t){return"on"===Tt(t?this.computeActiveState(t):void 0)?Ue("states.on"):"off"===Tt(t?this.computeActiveState(t):void 0)?Ue("states.off"):"unavailable"===Tt(t?this.computeActiveState(t):void 0)?Ue("states.unavailable"):""}shouldUpdate(t){return!!this.config&&(this.stateEntity=this.config.entity?this.hass.states[this.config.entity]:void 0,!this.stateEntity||(this.stateSensor=this.hass.states[this.config.sensor],this.stateDisplay=this.stateSensor?this.stateSensor.state:this.stateEntity.state,function(t,e,i){if(e.has("config")||i)return!0;if(t._stateSensor){const i=e.get("hass");return!i||i.states[t.config.sensor]!==t.hass.states[t.config.sensor]}return!1}(this,t,!0)))}render(){var t,e,i,s,n,o;if(!this.stateEntity)return this._showWarning(Ue("common.show_warning"));if(this.config.show_warning)return this._showWarning(Ue("common.show_warning"));if(this.config.show_error)return this._showError(Ue("common.show_error"));const r=this.config.show_name?this.config.name||(this.stateEntity?this.computeStateName(this.stateEntity):""):"";return R`
      <ha-card
        @action=${this._showConfirmDialog}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${Ge({hasHold:Ut(null===(t=this.config)||void 0===t?void 0:t.hold_action),hasDoubleClick:Ut(null===(e=this.config)||void 0===e?void 0:e.double_tap_action)})}
        role="button"
        aria-label=${this.config.name||(this.stateEntity?(a=this.stateEntity,void 0===a.attributes.friendly_name?(l=a.entity_id,l.substr(l.indexOf(".")+1)).replace(/_/g," "):a.attributes.friendly_name||""):"")}
        tabindex=${Tt(Ut(this.config.tap_action)?"0":void 0)}
        class=${Dt({"ha-card-on":"on"===this.stateDisplay})}
      >
        ${this._shouldRenderRipple?R`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
            ${"on"===this.stateDisplay&&this.config.icon===Ve+" "+Re?R`
            <ha-svg-icon
            class=${Dt({"state-on":"on"===this.stateDisplay,"state-unavailable":"unavailable"===this.stateSensor||"unavailable"===this.stateEntity})}
              tabindex="-1"
              data-state=${Tt(this.stateSensor?this.computeActiveState(this.stateSensor):this.stateEntity?this.computeActiveState(this.stateEntity):void 0)}
              .path=${Ve}
              .state=${this.stateSensor?this.stateSensor:this.stateEntity}
              style=${Zt({height:this.config.icon_height?this.config.icon_height:""})}
            ></ha-svg-icon>
            `:"off"===this.stateDisplay&&this.config.icon===Ve+" "+Re?R`
            <ha-svg-icon
            class=${Dt({"state-on":"on"===this.stateDisplay,"state-unavailable":"unavailable"===this.stateSensor||"unavailable"===this.stateEntity})}
              tabindex="-1"
              data-state=${Tt(this.stateSensor?this.computeActiveState(this.stateSensor):this.stateEntity?this.computeActiveState(this.stateEntity):void 0)}
              .path=${this.config.icon}
              .state=${this.stateSensor?this.stateSensor:this.stateEntity}
              style=${Zt({height:this.config.icon_height?this.config.icon_height:""})}
            ></ha-svg-icon>
            `:"on"===this.stateDisplay&&this.config.icon===je+Te+Ne?R`
            <ha-svg-icon
            class=${Dt({"state-on":"on"===this.stateDisplay,"state-unavailable":"unavailable"===this.stateSensor||"unavailable"===this.stateEntity})}
              tabindex="-1"
              data-state=${Tt(this.stateSensor?this.computeActiveState(this.stateSensor):this.stateEntity?this.computeActiveState(this.stateEntity):void 0)}
              .path=${je+Te+"M7.94935 8.4064H3.73282C3.46831 8.4064 3.25446 8.5888 3.25446 8.8144V15.9616C3.25446 16.1872 3.46831 16.3696 3.73282 16.3696H7.94935C8.21385 16.3696 8.42771 16.1872 8.42771 15.9616V8.8144C8.42771 8.5888 8.21385 8.4064 7.94935 8.4064ZM8 15.7888H3.68217V13.912H8V15.7888ZM8 13.3312H3.68217V11.4544H8V13.3312ZM8 10.8736H3.68217V8.9968H8V10.8736Z"}
              .state=${this.stateSensor?this.stateSensor:this.stateEntity}
              style=${Zt({height:this.config.icon_height?this.config.icon_height:""})}
            ></ha-svg-icon>
            `:R`<ha-svg-icon
            class=${Dt({"state-on":"on"===this.stateDisplay,"state-unavailable":"unavailable"===this.stateSensor||"unavailable"===this.stateEntity})}
              tabindex="-1"
              data-state=${Tt(this.stateSensor?this.computeActiveState(this.stateSensor):this.stateEntity?this.computeActiveState(this.stateEntity):void 0)}
              .path=${this.config.icon}
              .state=${this.stateSensor?this.stateSensor:this.stateEntity}
              style=${Zt({height:this.config.icon_height?this.config.icon_height:""})}
            ></ha-svg-icon>`}
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${Dt({primary:!1===this.hass.themes.darkMode||!0===this.hass.themes.darkMode&&"off"===this.stateDisplay||"unavailable"===(null===(i=this.stateSensor)||void 0===i?void 0:i.state)||"unavailable"===(null===(s=this.stateEntity)||void 0===s?void 0:s.state),"primary-dark":!0===this.hass.themes.darkMode&&"on"===this.stateDisplay})}
              >${r}</span
            >
              ${"on"===this.stateDisplay?R`<span class="secondary-on">${Ue("states.on")}</span>`:"off"===this.stateDisplay?R`<span class=${Dt({"secondary-on":!1===this.hass.themes.darkMode,secondary:!0===this.hass.themes.darkMode})}>${Ue("states.off")}</span>`:R`<span class="secondary-on">${Ue("states.unavailable")}</span>`}
          </div>
          ${"unavailable"===(null===(n=this.stateSensor)||void 0===n?void 0:n.state)||"unavailable"===(null===(o=this.stateEntity)||void 0===o?void 0:o.state)?R` <unavailable-icon></unavailable-icon> `:R``}
        </div>
      </ha-card>
    `;var a,l}_showConfirmDialog(){var t,e;t=this,e={garageInfo:this.config},Ht(t,"show-dialog",{dialogTag:"confirm-dialog",dialogImport:We,dialogParams:e})}_showWarning(t){return R`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),R`
      ${e}
    `}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleBlur(){this._rippleHandlers.endFocus()}static get styles(){return st`

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
      color: var(--secondary-text-color);
    }
    .secondary-on {
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
      color: var(--primary-text-color, #648939);
    }
    .ha-card-on {
      background-color: #D6E4C5;
    }
    unavailable-icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    ha-svg-icon.state-on {
      fill: #648939;
    }

    ha-svg-icon.state-unavailable {
      fill: var(--state-icon-unavailable-color, #bdbdbd);
    }

    `}};t([wt()],Ye.prototype,"_stateSensor",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}})({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Ye.prototype,"_ripple",void 0),t([$t({attribute:!1})],Ye.prototype,"hass",void 0),t([wt()],Ye.prototype,"config",void 0),t([wt()],Ye.prototype,"_shouldRenderRipple",void 0),t([wt()],Ye.prototype,"stateSensor",void 0),t([wt()],Ye.prototype,"stateEntity",void 0),t([wt()],Ye.prototype,"stateDisplay",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}})({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],Ye.prototype,"handleRippleActivate",null),Ye=t([yt("garage-card")],Ye);export{Ye as B,ze as U,Vt as _,Tt as a,t as b,yt as c,Je as d,$t as e,Mt as h,st as i,Rt as k,Ue as l,Ht as n,Dt as o,gt as s,wt as t,R as y};
