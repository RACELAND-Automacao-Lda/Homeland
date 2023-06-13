/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/}class e{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return i&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=t=>new s("string"==typeof t?t:t+"",n),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(i,n)},l=(t,e)=>{i?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const h=window.trustedTypes,u=h?h.emptyScript:"",p=window.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=m){var n,o;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:v.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,n,o;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:v.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$ES(e,this[e],t)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push("1.3.2");const y=globalThis.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,$="?"+b,A=`<${$}>`,C=document,E=(t="")=>C.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,T=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,M=/"/g,O=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),L=new WeakMap,j=C.createTreeWalker(C,129,null,!1),D=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===k?"!--"===l[1]?r=P:void 0!==l[1]?r=T:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=null!=o?o:k,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?M:R):r===M||r===R?r=H:r===P||r===T?r=k:(r=H,o=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";s+=r===k?i+A:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+b+h):i+b+(-2===c?(n.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,n]};class V{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=V.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=j.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?J:F})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(O.test(n.tagName)){const t=n.textContent.split(b),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],E()),j.nextNode(),a.push({type:2,index:++o});n.append(t[e],E())}}}else if(8===n.nodeType)if(n.data===$)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(b,t+1));)a.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,n){var o,s,r,a;if(e===N)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,n)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);j.currentNode=o;let s=j.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this.v.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=j.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,n){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),S(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==z&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=V.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new V(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new q(this.M(E()),this.M(E()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,n,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=I(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==N,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=I(this,n[i+r],e,r),a===N&&(a=this._$AH[r]),s||(s=!S(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.C(t)}C(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===z?void 0:t}}const Z=y?y.emptyScript:"";class K extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends F{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:z)===N)return;const n=this._$AH,o=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==z&&(n===z||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;null==Y||Y(V,q),(null!==(_=globalThis.litHtmlVersions)&&void 0!==_?_:globalThis.litHtmlVersions=[]).push("2.2.3");class tt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new q(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}tt.finalized=!0,tt._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;var it,nt;function ot(t){return t.substr(0,t.indexOf("."))}null==et||et({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0"),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(it||(it={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(nt||(nt={}));var st=["closed","locked","off"],rt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},at=function(t){rt(window,"haptic",t)},lt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,o=ot(e),s="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(s,n,{entity_id:e})}(t,e,st.includes(t.states[e].state))},ct=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(at("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&rt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),rt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(lt(e,i.entity),at("success"));break;case"call-service":if(!n.service)return void at("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),at("success");break;case"fire-dom-event":rt(t,"ll-custom",n)}};function dt(t){return void 0!==t&&"none"!==t.action}const ht=(t,e,i,n,o,s)=>{const r=[];(null==o?void 0:o.length)&&r.push(t=>o.includes(ot(t))),s&&r.push(e=>t.states[e]&&s(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,r,e);if(a.length<e&&n.length){const i=ht(t,e-a.length,n,[],o,s);a.push(...i)}return a};String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
let ut=!1;(()=>{try{const t={get capture(){return ut=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})(),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,window.JSCompiler_renameProperty=(t,e)=>t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const pt=(t,e,i)=>{Object.defineProperty(e,i,t)},vt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/;window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,mt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function gt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):mt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function _t(t){return gt({...t,state:!0})}
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
var yt;null===(yt=window.HTMLSlotElement)||void 0===yt||yt.prototype.assignedElements;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=t=>null!=t?t:z
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,bt=1,$t=t=>(...e)=>({_$litDirective$:t,values:e});class At{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=$t(class extends At{constructor(t){var e;if(super(t),t.type!==bt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const o=t.element.classList;this.et.forEach(t=>{t in e||(o.remove(t),this.et.delete(t))});for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(o.add(t),this.et.add(t)):(o.remove(t),this.et.delete(t)))}return N}}),Et=[{name:"entity",selector:{entity:{domain:["switch","fan"]}}},{name:"name",selector:{text:{}}},{name:"",type:"grid",column_min_width:"50px",schema:[]}];let St=class extends tt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,console.log("config fan",this._config),this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _show_name(){var t,e;return null===(e=null===(t=this._config)||void 0===t?void 0:t.show_name)||void 0===e||e}get _show_state(){var t,e;return null===(e=null===(t=this._config)||void 0===t?void 0:t.show_state)||void 0===e||e}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return U``;this._helpers.importMoreInfoControl("climate");Object.keys(this.hass.states).filter(t=>"switch"===t.substr(0,t.indexOf(".")));return U`
      <ha-form
        .hass=${this.hass}
        .schema=${Et}
        .computeLabel=${this._computeLabel}
        .data = ${this._config}
        @value-changed=${this._valueChanged}
      ></ha-form>
      `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_computeLabel(t){return this.hass.localize("ui.panel.lovelace.editor.card.generic."+t.name)}_valueChanged(t){const e=t.detail.value;rt(this,"config-changed",{config:e})}static get styles(){return a`
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
    `}};t([gt({attribute:!1})],St.prototype,"hass",void 0),t([_t()],St.prototype,"_config",void 0),t([_t()],St.prototype,"_toggle",void 0),t([_t()],St.prototype,"_helpers",void 0),St=t([ft("fan-card-editor")],St);const xt=t=>{rt(window,"haptic",t)},kt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Pt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:kt?"100px":"50px",height:kt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(t,e){if(t.actionHandler)return;if(t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}),t.actionHandler={options:e},e.disabled)return;const i=t=>{let i,n;this.cancelled=!1,t.touches?(i=t.touches[0].pageX,n=t.touches[0].pageY):(i=t.pageX,n=t.pageY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(i,n),this.held=!0,xt("heavy")},this.holdTime))},n=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled&&!this.held)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?rt(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,rt(i,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,rt(i,"action",{action:"double_tap"})):(xt("medium"),rt(i,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",t=>{13===t.keyCode&&n(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-fan-card",Pt);const Tt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-fan-card"))return t.querySelector("action-handler-fan-card");const e=document.createElement("action-handler-fan-card");return t.appendChild(e),e})();i&&i.bind(t,e)},Ht=$t(class extends At{update(t,[e]){return Tt(t.element,e),N}render(t){}}),Rt=["unavailable","unknown"];var Mt={card:"Fan",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"No entities were detected",show_error:"Show Error",tap:"Tap to open/close"},Ot={on:"On",off:"Off",unavailable:"Unavailable"},Ut={config:{entity:"Entity",sensor:"Sensor",name:"Name",show_name:"Show name?"}},Nt={common:Mt,states:Ot,editor:Ut},zt=Object.freeze({__proto__:null,common:Mt,states:Ot,editor:Ut,default:Nt}),Lt={card:"Ventilador",version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectaron entidades",show_error:"Mostrar error",tap:"Toque para abrir/cerrar"},jt={on:"Encendido",off:"Apagado",unavailable:"Indisponible"},Dt={config:{entity:"Entidad",sensor:"Sensor",name:"Nombre",show_name:"Mostrar nombre?"}},Vt={common:Lt,states:jt,editor:Dt},It=Object.freeze({__proto__:null,common:Lt,states:jt,editor:Dt,default:Vt}),Bt={card:"Fan",version:"VeAusführungrsão",invalid_configuration:"Ungültige Konfiguration",show_warning:"Es wurden keine Entitäten erkannt",show_error:"Fehler anzeigen",tap:"Zum Öffnen/Schließen antippen"},qt={on:"Eingeschaltet",off:"Aus",unavailable:"Nicht verfügbar"},Ft={config:{entity:"Einheit",sensor:"Sensor",name:"Name",show_name:"Name anzeigen?"}},Wt={common:Bt,states:qt,editor:Ft},Zt=Object.freeze({__proto__:null,common:Bt,states:qt,editor:Ft,default:Wt}),Kt={card:"Ventilateur",version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucune entité n'a été détectée",show_error:"Afficher l'erreur",tap:"Appuyez pour ouvrir/fermer"},Jt={on:"Allumé",off:"À l'arrêt",unavailable:"Indisponible"},Xt={config:{entity:"Entité",sensor:"Capteur",name:"Nom",show_name:"Afficher le nom?"}},Yt={common:Kt,states:Jt,editor:Xt},Gt=Object.freeze({__proto__:null,common:Kt,states:Jt,editor:Xt,default:Yt}),Qt={card:"Ventilatore",version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessuna entità è stata rilevata",show_error:"Mostra errore",tap:"Tocca per aprire/chiudere"},te={on:"Acceso",off:"Spento",unavailable:"Non disponibile"},ee={config:{entity:"Entità",sensor:"Sensore",name:"Nome",show_name:"Mostra nome?"}},ie={common:Qt,states:te,editor:ee},ne=Object.freeze({__proto__:null,common:Qt,states:te,editor:ee,default:ie}),oe={card:"Ventoinha",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},se={on:"Ligado",off:"Desligado",unavailable:"Indisponível"},re={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},ae={common:oe,states:se,editor:re},le=Object.freeze({__proto__:null,common:oe,states:se,editor:re,default:ae}),ce={card:"Ventoinha",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro",tap:"Clique para abrir/fechar"},de={on:"Ligado",off:"Desligado",unavailable:"Indisponível"},he={config:{entity:"Entidade",sensor:"Sensor",name:"Nome",show_name:"Mostrar Nome?"}},ue={common:ce,states:de,editor:he};const pe={en:zt,pt:Object.freeze({__proto__:null,common:ce,states:de,editor:he,default:ue}),ptBr:le,de:Zt,it:ne,es:It,fr:Gt};function ve(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],pe[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],pe.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],pe.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=$t(class extends At{constructor(t){var e;if(super(t),t.type!==bt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach(t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const n=e[t];null!=n&&(this.ct.add(t),t.includes("-")?i.setProperty(t,n):i[t]=n)}return N}}),me=t=>{return void 0===t.attributes.friendly_name?(e=t.entity_id,e.substr(e.indexOf(".")+1)).replace(/_/g," "):t.attributes.friendly_name||"";var e};console.info(`%c  RACELAND-FAN-CARD \n%c  ${ve("common.version")} 1.4.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"fan-card",name:ve("common.card"),preview:!0,icon:"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.5 2C17 2 17.11 5.57 14.75 6.75C13.76 7.24 13.32 8.29 13.13 9.22C13.61 9.42 14.03 9.73 14.35 10.13C18.05 8.13 22.03 8.92 22.03 12.5C22.03 17 18.46 17.1 17.28 14.73C16.78 13.74 15.72 13.3 14.79 13.11C14.59 13.59 14.28 14 13.88 14.34C15.87 18.03 15.08 22 11.5 22C7 22 6.91 18.42 9.27 17.24C10.25 16.75 10.69 15.71 10.89 14.79C10.4 14.59 9.97 14.27 9.65 13.87C5.96 15.85 2 15.07 2 11.5C2 7 5.56 6.89 6.74 9.26C7.24 10.25 8.29 10.68 9.22 10.87C9.41 10.39 9.73 9.97 10.14 9.65C8.15 5.96 8.94 2 12.5 2Z",color:"#eb6200",backgroundColor:"#ffd894"});let ge=class extends tt{constructor(){super(...arguments),this._shouldRenderRipple=!1,this._rippleHandlers=new e(()=>(this._shouldRenderRipple=!0,this._ripple)),this.computeActiveState=t=>{const e=t.entity_id.split(".")[0];let i=null==t?void 0:t.state;return"climate"===e&&(i=t.attributes.hvac_action),i}}static async getConfigElement(){return document.createElement("fan-card-editor")}static getStubConfig(t,e,i){return{type:"custom:fan-card",entity:ht(t,1,e,i,["switch","fan"])[0]||"",show_name:!0,show_state:!0}}setConfig(t){if(!t)throw new Error(ve("common.invalidconfiguration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign(Object.assign({show_icon:!0,icon:"mdi:fan"},t),{tap_action:{action:"toggle"},hold_action:{action:"more-info"}})}translate_state(t){return"on"===wt(t?this.computeActiveState(t):void 0)?ve("states.on"):"off"===wt(t?this.computeActiveState(t):void 0)?ve("states.off"):"unavailable"===wt(t?this.computeActiveState(t):void 0)?ve("states.unavailable"):""}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t,e;if(this.config.show_warning)return this._showWarning(ve("common.show_warning"));if(this.config.show_error)return this._showError(ve("common.show_error"));const i=this.config.entity?this.hass.states[this.config.entity]:void 0;if(!i)return U`
        <hui-warning> ${ve("common.show_warning")} </hui-warning>
      `;const n=this.config.show_name?this.config.name||(i?me(i):""):"";return U`
      <ha-card
        @action=${this._handleAction}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${Ht({hasHold:dt(null===(t=this.config)||void 0===t?void 0:t.hold_action),hasDoubleClick:dt(null===(e=this.config)||void 0===e?void 0:e.double_tap_action)})}
        role="button"
        aria-label=${this.config.name||(i?me(i):"")}
        tabindex=${wt(dt(this.config.tap_action)?"0":void 0)}
        class=${Ct({"ha-card-on":"on"===(null==i?void 0:i.state)})}
      >
        ${this._shouldRenderRipple?U`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
                  <ha-state-icon
                  class=${Ct({"state-on":"on"===(null==i?void 0:i.state),"state-unavailable":Rt.includes(i.state)})}
                    tabindex="-1"
                    data-domain=${wt(this.config.state_color&&i?function(t){return ot(t.entity_id)}(i):void 0)}
                    data-state=${wt(i?(t=>{const e=t.entity_id.split(".")[0];let i=t.state;return"climate"===e&&(i=t.attributes.hvac_action),i})(i):void 0)}
                    .icon=${this.config.icon}
                    .state=${i}
                    style=${fe({height:this.config.icon_height?this.config.icon_height:""})}
                  ></ha-state-icon>
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${Ct({primary:!1===this.hass.themes.darkMode||!0===this.hass.themes.darkMode&&"off"===(null==i?void 0:i.state)||"unavailable"===(null==i?void 0:i.state),"primary-dark":!0===this.hass.themes.darkMode&&"on"===(null==i?void 0:i.state)})}
              >${n}</span
            >
            ${"on"===(null==i?void 0:i.state)?U`<span class="secondary-on">${ve("states.on")}</span>`:"off"===(null==i?void 0:i.state)?U`<span class=${Ct({"secondary-on":!1===this.hass.themes.darkMode,secondary:!0===this.hass.themes.darkMode})}>${ve("states.off")}</span>`:U`<span class="secondary-on">${ve("states.unavailable")}</span>`}
          </div>
          ${Rt.includes(i.state)?U` <unavailable-icon></unavailable-icon> `:U``}
        </div>
      </ha-card>
    `}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),ct(t,e,i,o)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return U`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),U`
      ${e}
    `}static get styles(){return a`

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
    ha-state-icon {
      --mdc-icon-size: 97%;
      color: var(--primary-text-color, #44739e);
    }
    .ha-card-on {
      background-color: #ffd894;
    }
    unavailable-icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
    ha-state-icon.state-on {
      color: #eb6200;
      animation-name: rotate;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    ha-state-icon.state-unavailable {
      color: var(--state-icon-unavailable-color, #bdbdbd);
    }
    `}};var _e;t([gt({attribute:!1})],ge.prototype,"hass",void 0),t([_t()],ge.prototype,"config",void 0),t([(_e="mwc-ripple",(t,e)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(_e)},enumerable:!0,configurable:!0};return void 0!==e?pt(i,t,e):vt(i,t)})],ge.prototype,"_ripple",void 0),t([_t()],ge.prototype,"_shouldRenderRipple",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}})({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],ge.prototype,"handleRippleActivate",null),ge=t([ft("fan-card")],ge);export{ge as BoilerplateCard};
