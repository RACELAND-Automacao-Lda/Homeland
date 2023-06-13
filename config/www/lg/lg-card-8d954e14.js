function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.5.0");const g=window,_=g.trustedTypes,y=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,b="?"+$,w=`<${b}>`,C=document,E=(t="")=>C.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,P=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,H=/"/g,R=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),L=new WeakMap,z=C.createTreeWalker(C,129,null,!1),N=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=x;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===x?"!--"===l[1]?r=k:void 0!==l[1]?r=P:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:x,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?H:U):r===H||r===U?r=O:r===k||r===P?r=x:(r=O,n=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";s+=r===x?i+w:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(o.push(void 0),e):d)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,o]};class V{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=N(t,e);if(this.el=V.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?Z:"@"===e[1]?W:I})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(R.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),z.nextNode(),a.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,o){var n,s,r,a;if(e===M)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,o)),e}class B{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);z.currentNode=n;let s=z.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new F(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new K(s,this,t)),this.u.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=z.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,o){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=V.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new B(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new V(t)),e}k(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new F(this.O(E()),this.O(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,o,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=D(this,t,e,0),s=!A(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=D(this,o[i+r],e,r),a===M&&(a=this._$AH[r]),s||(s=!A(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const G=_?_.emptyScript:"";class Z extends I{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class W extends I{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:j)===M)return;const o=this._$AH,n=t===j&&o!==j||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==j&&(o===j||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const J=g.litHtmlPolyfillSupport;null==J||J(V,F),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.5.0");const Y=window,X=Y.ShadowRoot&&(void 0===Y.ShadyCSS||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),tt=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class et{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=tt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(e,t))}return t}toString(){return this.cssText}}const it=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new et(i,t,Q)},ot=X?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new et("string"==typeof t?t:t+"",void 0,Q))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var nt;const st=window,rt=st.trustedTypes,at=rt?rt.emptyScript:"",lt=st.reactiveElementPolyfillSupport,ct={toAttribute(t,e){switch(e){case Boolean:t=t?at:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ht=(t,e)=>e!==t&&(e==e||t==t),dt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:ht};class ut extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ot(t))}else void 0!==t&&e.push(ot(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{X?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=Y.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=dt){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:ct).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:ct;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pt,vt;ut.finalized=!0,ut.elementProperties=new Map,ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},null==lt||lt({ReactiveElement:ut}),(null!==(nt=st.reactiveElementVersions)&&void 0!==nt?nt:st.reactiveElementVersions=[]).push("1.5.0");class ft extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new F(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}ft.finalized=!0,ft._$litElement$=!0,null===(pt=globalThis.litElementHydrateSupport)||void 0===pt||pt.call(globalThis,{LitElement:ft});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:ft}),(null!==(vt=globalThis.litElementVersions)&&void 0!==vt?vt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=1,_t=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=_t(class extends yt{constructor(t){var e;if(super(t),t.type!==gt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return M}}),bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,wt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):wt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Et(t){return Ct({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var St,xt,kt;null===(St=window.HTMLSlotElement)||void 0===St||St.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(xt||(xt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(kt||(kt={}));var Pt=["camera","configurator","history_graph","scene"],Ot=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n};function Ut(t){return void 0!==t&&"none"!==t.action}function Ht(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}var Rt=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null};class Tt extends TypeError{constructor(t,e){let i;const{message:o,...n}=t,{path:s}=t;super(0===s.length?o:"At path: "+s.join(".")+" -- "+o),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var o;return null!=(o=i)?o:i=[t,...e()]}}}function Mt(t){return"object"==typeof t&&null!=t}function jt(t){return"string"==typeof t?JSON.stringify(t):""+t}function Lt(t,e,i,o){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:s}=e,{type:r}=i,{refinement:a,message:l="Expected a value of type `"+r+"`"+(a?" with refinement `"+a+"`":"")+", but received: `"+jt(o)+"`"}=t;return{value:o,type:r,refinement:a,key:n[n.length-1],path:n,branch:s,...t,message:l}}function*zt(t,e,i,o){(function(t){return Mt(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=Lt(n,e,i,o);t&&(yield t)}}function*Nt(t,e,i){void 0===i&&(i={});const{path:o=[],branch:n=[t],coerce:s=!1,mask:r=!1}=i,a={path:o,branch:n};if(s&&(t=e.coercer(t,a),r&&"type"!==e.type&&Mt(e.schema)&&Mt(t)&&!Array.isArray(t)))for(const i in t)void 0===e.schema[i]&&delete t[i];let l=!0;for(const i of e.validator(t,a))l=!1,yield[i,void 0];for(let[i,c,h]of e.entries(t,a)){const e=Nt(c,h,{path:void 0===i?o:[...o,i],branch:void 0===i?n:[...n,c],coerce:s,mask:r});for(const o of e)o[0]?(l=!1,yield[o[0],void 0]):s&&(c=o[1],void 0===i?t=c:t instanceof Map?t.set(i,c):t instanceof Set?t.add(c):Mt(t)&&(t[i]=c))}if(l)for(const i of e.refiner(t,a))l=!1,yield[i,void 0];l&&(yield[void 0,t])}class Vt{constructor(t){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:e,schema:i,validator:o,refiner:n,coercer:s=(t=>t),entries:r=function*(){}}=t;this.type=e,this.schema=i,this.entries=r,this.coercer=s,this.validator=o?(t,e)=>zt(o(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>zt(n(t,e),e,this,t):()=>[]}assert(t){return Dt(t,this)}create(t){return function(t,e){const i=Bt(t,e,{coerce:!0});if(i[0])throw i[0];return i[1]}(t,this)}is(t){return function(t,e){const i=Bt(t,e);return!i[0]}(t,this)}mask(t){return function(t,e){const i=Bt(t,e,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(t,this)}validate(t,e){return void 0===e&&(e={}),Bt(t,this,e)}}function Dt(t,e){const i=Bt(t,e);if(i[0])throw i[0]}function Bt(t,e,i){void 0===i&&(i={});const o=Nt(t,e,i),n=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(o);if(n[0]){const t=new Tt(n[0],(function*(){for(const t of o)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,n[1]]}function Ft(t,e){return new Vt({type:t,schema:null,validator:e})}function It(){return Ft("boolean",(t=>"boolean"==typeof t))}function qt(t){const e=t?Object.keys(t):[],i=Ft("never",(()=>!1));return new Vt({type:"object",schema:t||null,*entries(o){if(t&&Mt(o)){const n=new Set(Object.keys(o));for(const i of e)n.delete(i),yield[i,o[i],t[i]];for(const t of n)yield[t,o[t],i]}},validator:t=>Mt(t)||"Expected an object, but received: "+jt(t),coercer:t=>Mt(t)?{...t}:t})}function Gt(t){return new Vt({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function Zt(){return Ft("string",(t=>"string"==typeof t||"Expected a string, but received: "+jt(t)))}function Wt(t){const e=Object.keys(t);return new Vt({type:"type",schema:t,*entries(i){if(Mt(i))for(const o of e)yield[o,i[o],t[o]]},validator:t=>Mt(t)||"Expected an object, but received: "+jt(t)})}const Kt=[{name:"entity",selector:{entity:{domain:["media_player"]}}},{name:"mac",selector:{text:{}}},{name:"name",selector:{text:{}}}],Jt=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const o="type"===e[0].type,n=e.map((t=>t.schema)),s=Object.assign({},...n);return o?Wt(s):qt(s)}(qt({type:Zt(),view_layout:Ft("any",(()=>!0))}),qt({name:Gt(Zt()),entity:Gt(Zt()),mac:Gt(Zt()),show_name:Gt(It()),show_state:Gt(It()),show_preview:Gt(It()),icon:Gt(Zt())}));let Yt=class extends ft{constructor(){super(...arguments),this._initialized=!1}setConfig(t){Dt(t,Jt),this._config=t,this.loadCardHelpers()}shouldUpdate(){var t;return this._initialized||this._initialize(),this.icon=null===(t=this._config)||void 0===t?void 0:t.icon,!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _mac(){var t;return(null===(t=this._config)||void 0===t?void 0:t.mac)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}render(){return this.hass&&this._helpers?(this._helpers.importMoreInfoControl("climate"),T`
      <ha-form
        .hass=${this.hass}
        .schema=${Kt}
        .computeLabel=${this._computeLabel}
        .data = ${this._config}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `):T``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_computeLabel(t){return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;Ot(this,"config-changed",{config:e})}static get styles(){return it`
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
    `}};t([Ct({attribute:!1})],Yt.prototype,"hass",void 0),t([Et()],Yt.prototype,"_config",void 0),t([Et()],Yt.prototype,"_toggle",void 0),t([Et()],Yt.prototype,"_helpers",void 0),t([Ct({attribute:!1})],Yt.prototype,"icon",void 0),Yt=t([bt("lg-remote-card-editor")],Yt);const Xt=["unavailable","unknown"];var Qt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"No television detected",show_error:"Show Error",save:"Save"},te={card_name:"LG Remote",description:"A remote card for LG TV remotes"},ee={remote:"Remote (MAC)",name:"Name"},ie={common:Qt,info:te,editor:ee},oe={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Nenhuma Televisão detectada",show_error:"Erro",save:"Guardar"},ne={card_name:"LG TV",description:"Uma carta para os comandos de uma Televisão LG"},se={remote:"Comando (MAC)",name:"Nome"},re={common:oe,info:ne,editor:se},ae={version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectó televisor",show_error:"Mostrar error",save:"Salvar"},le={card_name:"LG TV",description:"Uma carta para os comandos de uma Televisão LG"},ce={remote:"Control Remoto (MAC)",name:"Nombre"},he={common:ae,info:le,editor:ce},de={version:"Ausführung",invalid_configuration:"ungültige Konfiguration",show_warning:"Kein Fernseher erkannt",show_error:"Fehler",save:"Speichern"},ue={card_name:"LG TV",description:"Ein Buchstabe für die Steuerung eines LG-Fernsehers"},pe={remote:"Befehl (MAC)",name:"Name"},ve={common:de,info:ue,editor:pe},fe={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessun Televisione rilevato",show_error:"Mostra errore",save:"Salva"},me={card_name:"TV LG",description:"Una Scheda per i comandi di un televisore LG"},ge={remote:"Telecomando (MAC)",name:"Nome"},_e={common:fe,info:me,editor:ge},ye={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucun télé détecté",show_error:"Afficher l'erreur",save:"Sauver"},$e={card_name:"TV LG",description:"Une lettre pour les commandes d'un téléviseur LG"},be={remote:"Télécommande (MAC)",name:"Nom"},we={common:ye,info:$e,editor:be},Ce={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Nenhuma Televisão detectada",show_error:"Erro",save:"Guardar"},Ee={card_name:"LG TV",description:"Uma carta para os comandos de uma Televisão LG"},Ae={remote:"Comando (MAC)",name:"Nome"},Se={common:Ce,info:Ee,editor:Ae};const xe={en:Object.freeze({__proto__:null,common:Qt,info:te,editor:ee,default:ie}),pt:Object.freeze({__proto__:null,common:oe,info:ne,editor:se,default:re}),es:Object.freeze({__proto__:null,common:ae,info:le,editor:ce,default:he}),de:Object.freeze({__proto__:null,common:de,info:ue,editor:pe,default:ve}),it:Object.freeze({__proto__:null,common:fe,info:me,editor:ge,default:_e}),fr:Object.freeze({__proto__:null,common:ye,info:$e,editor:be,default:we}),ptBr:Object.freeze({__proto__:null,common:Ce,info:Ee,editor:Ae,default:Se})};function ke(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),xe[o])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),xe.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),xe.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=_t(class extends yt{constructor(t){var e;if(super(t),t.type!==gt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const o=e[t];null!=o&&(this.vt.add(t),t.includes("-")?i.setProperty(t,o):i[t]=o)}return M}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oe{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}const Ue=()=>import("./lg-remote-control-368d5904.js"),He=(t,e,i,o,n,s)=>{const r=[];(null==n?void 0:n.length)&&r.push((t=>n.includes(function(t){return t.substr(0,t.indexOf("."))}(t)))),s&&r.push((e=>t.states[e]&&s(t.states[e])));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const o=[];for(let n=0;n<t.length&&o.length<i;n++){let i=!0;for(const o of e)if(!o(t[n])){i=!1;break}i&&o.push(t[n])}return o})(i,r,e);if(a.length<e&&o.length){const i=He(t,e-a.length,o,[],n,s);a.push(...i)}return a},Re=t=>{((t,e,i,o)=>{o=o||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)})(window,"haptic",t)},Te="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Me extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Te?"100px":"50px",height:Te?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;if(t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled)return;const i=t=>{let i,o;this.cancelled=!1,t.touches?(i=t.touches[0].pageX,o=t.touches[0].pageY):(i=t.pageX,o=t.pageY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(i,o),this.held=!0,Re("heavy")}),this.holdTime))},o=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled&&!this.held)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?Ot(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Ot(i,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ot(i,"action",{action:"double_tap"})):(Re("medium"),Ot(i,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-lg-card",Me);const je=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-lg-card"))return t.querySelector("action-handler-lg-card");const e=document.createElement("action-handler-lg-card");return t.appendChild(e),e})();i&&i.bind(t,e)},Le=_t(class extends yt{update(t,[e]){return je(t.element,e),M}render(t){}});console.info(`%c  REMOTE-CARD \n%c  ${ke("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"lg-remote-card",name:ke("info.card_name"),description:ke("info.description"),preview:!0,icon:"M8.83197 1.43994C7.65981 1.43994 6.71997 2.37978 6.71997 3.55194V20.4479C6.71997 21.6201 7.65981 22.5599 8.83197 22.5599H15.168C16.3401 22.5599 17.28 21.6201 17.28 20.4479V3.55194C17.28 2.37978 16.3401 1.43994 15.168 1.43994H13.056V3.55194H10.944V1.43994H8.83197ZM10.944 5.66394H13.056V7.77594H15.168V9.88794H13.056V11.9999H10.944V9.88794H8.83197V7.77594H10.944V5.66394ZM8.83197 14.1119H10.944V16.2239H8.83197V14.1119ZM13.056 14.1119H15.168V16.2239H13.056V14.1119ZM8.83197 18.3359H10.944V20.4479H8.83197V18.3359ZM13.056 18.3359H15.168V20.4479H13.056V18.3359Z",color:"#806397",backgroundColor:"#DFB7FF"});let ze=class extends ft{constructor(){super(...arguments),this.learningOn=!1,this.quickLearning=!1,this.learningLock=!1,this.buttonBeingLearned="none",this._shouldRenderRipple=!1,this._rippleHandlers=new Oe((()=>(this._shouldRenderRipple=!0,this._ripple)))}static async getConfigElement(){return document.createElement("lg-remote-card-editor")}static getStubConfig(t,e,i){return{type:"custom:lg-remote-card",entity:He(t,1,e,i,["media_player"])[0]||"",mac:"",show_name:!0,show_state:!0,show_preview:!0,icon:"M34.9201 37.8804C34.4234 37.8794 33.9383 37.7304 33.5266 37.4525C33.1149 37.1746 32.7953 36.7804 32.6086 36.3201C32.422 35.8598 32.3766 35.3543 32.4784 34.8682C32.5802 34.382 32.8244 33.9372 33.1801 33.5904C35.4693 31.3747 37.0743 28.5483 37.8044 25.4471C38.5345 22.346 38.359 19.1004 37.2987 16.0961C36.2384 13.0918 34.338 10.455 31.8231 8.49902C29.3083 6.54306 26.2848 5.35016 23.112 5.06206C19.9391 4.77396 16.7502 5.40278 13.9242 6.87379C11.0982 8.3448 8.75389 10.5962 7.16982 13.3604C5.58576 16.1246 4.82854 19.2855 4.98812 22.4674C5.14771 25.6493 6.2174 28.7186 8.07009 31.3104C8.55018 31.9839 9.08178 32.6191 9.66009 33.2104C10.1216 33.6878 10.3745 34.329 10.3632 34.9928C10.352 35.6567 10.0775 36.2889 9.60009 36.7504C9.1227 37.2119 8.48154 37.4648 7.81766 37.4536C7.15378 37.4423 6.52156 37.1678 6.06009 36.6904C5.31434 35.9182 4.62585 35.0927 4.00009 34.2204C1.01018 29.9963 -0.375538 24.8445 0.0918472 19.6904C0.559232 14.5363 2.84909 9.71781 6.55009 6.10042C8.59017 4.1215 11.0003 2.56404 13.6426 1.51708C16.2849 0.470115 19.1077 -0.0458234 21.9496 -0.00124542C24.7914 0.0433326 27.5966 0.647553 30.2048 1.77688C32.813 2.9062 35.1731 4.53848 37.1501 6.58042C41.1356 10.707 43.3221 16.2455 43.2303 21.9817C43.1384 27.7179 40.7757 33.1836 36.6601 37.1804C36.1935 37.6316 35.5692 37.8828 34.9201 37.8804ZM30.1401 32.9504C29.6417 32.9534 29.1538 32.8073 28.739 32.5309C28.3242 32.2545 28.0015 31.8605 27.8124 31.3994C27.6232 30.9382 27.5762 30.4311 27.6773 29.9431C27.7785 29.455 28.0232 29.0084 28.3801 28.6604C29.7269 27.3577 30.6711 25.6954 31.1004 23.8714C31.5297 22.0475 31.4259 20.1386 30.8015 18.3719C30.1771 16.6052 29.0583 15.0551 27.5782 13.9059C26.0982 12.7568 24.3191 12.057 22.4528 11.8899C20.5865 11.7228 18.7114 12.0953 17.0507 12.9632C15.3901 13.831 14.0136 15.1577 13.0853 16.7854C12.1569 18.413 11.7156 20.2731 11.814 22.1443C11.9123 24.0155 12.5462 25.8191 13.6401 27.3404C13.9132 27.7339 14.2211 28.102 14.5601 28.4404C15.0216 28.9178 15.2745 29.559 15.2632 30.2228C15.252 30.8867 14.9775 31.5189 14.5001 31.9804C14.0227 32.4419 13.3815 32.6948 12.7177 32.6836C12.0538 32.6723 11.4216 32.3978 10.9601 31.9204C10.4623 31.4031 10.0012 30.8518 9.58009 30.2704C7.53429 27.3746 6.59131 23.8428 6.9214 20.3127C7.25149 16.7825 8.8329 13.4867 11.3801 11.0204C12.7738 9.67068 14.4199 8.60876 16.2242 7.89534C18.0284 7.18192 19.9556 6.83097 21.8955 6.86254C23.8355 6.89412 25.7502 7.3076 27.5303 8.07936C29.3104 8.85112 30.921 9.96604 32.2701 11.3604C33.6198 12.7542 34.6817 14.4002 35.3952 16.2045C36.1086 18.0088 36.4595 19.9359 36.428 21.8759C36.3964 23.8158 35.9829 25.7305 35.2112 27.5106C34.4394 29.2907 33.3245 30.9013 31.9301 32.2504C31.6936 32.4808 31.4134 32.6614 31.106 32.7817C30.7985 32.9019 30.4701 32.9593 30.1401 32.9504ZM16.9301 26.1704C16.0353 25.245 15.4349 24.0751 15.2048 22.8086C14.9748 21.542 15.1254 20.2357 15.6376 19.0547C16.1498 17.8737 17.0006 16.8711 18.0826 16.1736C19.1645 15.4761 20.4289 15.115 21.716 15.136C23.0031 15.1569 24.2551 15.559 25.3138 16.2914C26.3724 17.0238 27.1901 18.0535 27.6636 19.2506C28.1371 20.4476 28.2451 21.7581 27.9739 23.0165C27.7027 24.2749 27.0646 25.4247 26.1401 26.3204C25.5257 26.9157 24.8 27.3841 24.0045 27.6987C23.2091 28.0134 22.3593 28.1682 21.504 28.1542C20.6486 28.1403 19.8044 27.9579 19.0196 27.6175C18.2348 27.2771 17.5247 26.7854 16.9301 26.1704ZM21.6101 28.2704C19.8949 28.2038 18.2722 27.4756 17.0823 26.2386C15.8924 25.0016 15.2277 23.3519 15.2277 21.6354C15.2277 19.919 15.8924 18.2692 17.0823 17.0322C18.2722 15.7952 19.8949 15.067 21.6101 15.0004H21.7201C22.5906 15.0084 23.4508 15.1894 24.2508 15.5327C25.0508 15.876 25.7746 16.3749 26.3801 17.0004C27.2884 17.9354 27.901 19.1173 28.1413 20.3986C28.3815 21.6798 28.2387 23.0034 27.7308 24.2039C27.2228 25.4044 26.3722 26.4286 25.2854 27.1483C24.1985 27.868 22.9236 28.2514 21.6201 28.2504L21.6101 28.2704ZM21.6101 15.2704C20.3569 15.2735 19.1324 15.6449 18.0887 16.3385C17.045 17.0321 16.2283 18.0173 15.7402 19.1715C15.2521 20.3257 15.1141 21.5979 15.3435 22.8299C15.5728 24.0618 16.1594 25.1992 17.0301 26.1004C17.7608 26.8565 18.6667 27.4205 19.6676 27.7426C20.6685 28.0646 21.7334 28.1347 22.7679 27.9467C23.8023 27.7586 24.7744 27.3182 25.5979 26.6644C26.4214 26.0107 27.0708 25.1639 27.4887 24.1991C27.9065 23.2342 28.0798 22.1812 27.9932 21.1333C27.9066 20.0855 27.5627 19.0752 26.9921 18.1921C26.4216 17.3089 25.6419 16.5802 24.7222 16.0706C23.8026 15.5609 22.7714 15.2861 21.7201 15.2704H21.6101Z"}}setConfig(t){if(!t)throw new Error(ke("common.invalid_configuration"));t.test_gui&&Rt().setEditMode(!0),this.config=Object.assign(Object.assign({},t),{preset:String(t.preset),tap_action:{action:"toggle"},hold_action:{action:"more-info"}})}shouldUpdate(t){return!!this.config&&Ht(this,t,!0)}render(){var t,e,i,o;return this.stateObj=this.hass.states[this.config.entity],this.stateObj?this.config.show_warning?this._showWarning(ke("common.show_warning")):this.config.show_error?this._showError(ke("common.show_error")):T`

      <ha-card
        @action=${this._showDialog}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${Le({hasHold:Ut(null===(t=this.config)||void 0===t?void 0:t.hold_action),hasDoubleClick:Ut(null===(e=this.config)||void 0===e?void 0:e.double_tap_action)})}
        role="button"
        tabindex=${(t=>null!=t?t:j)(Ut(this.config.tap_action)?"0":void 0)}
      >
        ${this._shouldRenderRipple?T`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
                  <ha-state-icon
                    tabindex="-1" .title=${this.config.name?this.config.name:""}
                    .icon=${"mdi:remote-tv"}
                    style=${Pe({height:this.config.icon_height?this.config.icon_height:""})}
                  ></ha-state-icon>
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${$t({primary:!1===this.hass.themes.darkMode||Xt.includes(null===(i=this.stateObj)||void 0===i?void 0:i.state),"primary-dark":!0===this.hass.themes.darkMode})}
              >${this.config.name?this.config.name:this.config.entity}</span
            >
          </div>
          ${Xt.includes(null===(o=this.stateObj)||void 0===o?void 0:o.state)?T` <unavailable-icon></unavailable-icon> `:T``}
        </div>
      </ha-card>
    `:T`
        <hui-warning> ${ke("common.show_warning")} </hui-warning>
      `}_showDialog(){var t,e;t=this,e={lgInfo:this.config,obj:this.stateObj},Ot(t,"show-dialog",{dialogTag:"lg-remote-control",dialogImport:Ue,dialogParams:e})}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}_showWarning(t){return T`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),T`
      ${e}
    `}static get styles(){return it`
       ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        outline: none;
        border-radius: 1.5rem;
        overflow: hidden;
        background-color: #DFB7FF;
      }
      .header {
        display: flex;
        padding: 8px 16px 0;
        justify-content: space-between;
      }
      .name {
        color: var(--accent-color);
        line-height: 40px;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .icon {
        color: var(--state-icon-color, #806397);
        line-height: 40px;
      }
      @media only screen and (max-width: 768px) {
        .info {
          font-size: 3rem;
        }
      }
      svg {
        border-radius: 1.5rem;
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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
      :host {
        --tile-color: rgb(var(--rgb-state-inactive-color));
        -webkit-tap-highlight-color: transparent;
      }
      ha-card:has(ha-tile-info:focus-visible) {
        border-color: var(--tile-color);
        box-shadow: 0 0 0 1px var(--tile-color);
      }
      ha-card {
        background-color: #DFB7FF;
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
        height: 100%;
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
        fill: #806397;
      }
      ha-state-icon {
        --mdc-icon-size: 97%;
        color: #806397;
      }
      unavailable-icon {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    `}};t([Ct({attribute:!1})],ze.prototype,"hass",void 0),t([Ct({attribute:!1})],ze.prototype,"learningOn",void 0),t([Ct({attribute:!1})],ze.prototype,"quickLearning",void 0),t([Ct({attribute:!1})],ze.prototype,"learningLock",void 0),t([Ct({attribute:!1})],ze.prototype,"stateObj",void 0),t([Ct({attribute:!1})],ze.prototype,"buttonBeingLearned",void 0),t([Ct({attribute:!1})],ze.prototype,"config",void 0),t([Et()],ze.prototype,"_shouldRenderRipple",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return At({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],ze.prototype,"_ripple",void 0),t([function(t){return At({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],ze.prototype,"handleRippleActivate",null),ze=t([bt("lg-remote-card")],ze);export{ze as R,Pt as Y,Ht as _,t as a,bt as b,Ct as e,it as i,Rt as k,ke as l,Ot as n,$t as o,ft as s,Et as t,T as y};
