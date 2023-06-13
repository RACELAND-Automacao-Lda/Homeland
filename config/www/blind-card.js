function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const s=t=>new o("string"==typeof t?t:t+"",void 0,i),r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(n,t,i)},a=(t,i)=>{e?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return s(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window.trustedTypes,h=d?d.emptyScript:"",u=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var n,o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:p.toAttribute)(e,i.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i,n;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),r=t.converter,a=null!==(n=null!==(i=null==r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof r?r:null)&&void 0!==n?n:p.fromAttribute;this._$El=s,this[s]=a(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.3.4");const _=globalThis.trustedTypes,b=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,w=`<${$}>`,A=document,x=(t="")=>A.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,O=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,P=/"/g,R=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),z=new WeakMap,N=A.createTreeWalker(A,129,null,!1),L=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",r=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===S?"!--"===l[1]?r=k:void 0!==l[1]?r=O:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=null!=o?o:S,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?P:H):r===P||r===H?r=j:r===k||r===O?r=S:(r=j,o=void 0);const h=r===j&&t[e+1].startsWith("/>")?" ":"";s+=r===S?i+w:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(n.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,n]};class V{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=L(t,e);if(this.el=V.createElement(l,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=N.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?W:"@"===e[1]?K:q})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],x()),N.nextNode(),a.push({type:2,index:++o});n.append(t[e],x())}}}else if(8===n.nodeType)if(n.data===$)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,n){var o,s,r,a;if(e===M)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,n)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);N.currentNode=o;let s=N.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new J(s,this,t)),this.v.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=N.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,n){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),C(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==M&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==U&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=V.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new V(t)),e}S(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new I(this.j(x()),this.j(x()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,n,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=D(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=D(this,n[i+r],e,r),a===M&&(a=this._$AH[r]),s||(s=!C(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.P(t)}P(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===U?void 0:t}}const F=_?_.emptyScript:"";class W extends q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==U?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class K extends q{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:U)===M)return;const n=this._$AH,o=t===U&&n!==U||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,G;null==Y||Y(V,I),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.7");class Q extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new I(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}Q.finalized=!0,Q._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(t){return ot({...t,state:!0})}
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
var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,lt;function ct(t){return t.substr(0,t.indexOf("."))}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));var dt=["closed","locked","off"],ht=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},ut=function(t){ht(window,"haptic",t)},pt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,o=ct(e),s="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(s,n,{entity_id:e})}(t,e,dt.includes(t.states[e].state))},vt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(ut("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&ht(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),ht(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(pt(e,i.entity),ut("success"));break;case"call-service":if(!n.service)return void ut("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),ut("success");break;case"fire-dom-event":ht(t,"ll-custom",n)}};function ft(t){return void 0!==t&&"none"!==t.action}const mt=(t,e,i,n,o,s)=>{const r=[];(null==o?void 0:o.length)&&r.push(t=>o.includes(ct(t))),s&&r.push(e=>t.states[e]&&s(t.states[e]));const a=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const n=[];for(let o=0;o<t.length&&n.length<i;o++){let i=!0;for(const n of e)if(!n(t[o])){i=!1;break}i&&n.push(t[o])}return n})(i,r,e);if(a.length<e&&n.length){const i=mt(t,e-a.length,n,[],o,s);a.push(...i)}return a},gt=t=>null!=t?t:U
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,_t=1,bt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=bt(class extends yt{constructor(t){var e;if(super(t),t.type!==_t||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach(t=>{t in e||(o.remove(t),this.nt.delete(t))});for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)))}return M}}),wt=bt(class extends yt{constructor(t){var e;if(super(t),t.type!==_t||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach(t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const n=e[t];null!=n&&(this.vt.add(t),t.includes("-")?i.setProperty(t,n):i[t]=n)}return M}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class At extends TypeError{constructor(t,e){let i;const{message:n,...o}=t,{path:s}=t;super(0===s.length?n:"At path: "+s.join(".")+" -- "+n),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>{var n;return null!=(n=i)?n:i=[t,...e()]}}}function xt(t){return"object"==typeof t&&null!=t}function Ct(t){return"string"==typeof t?JSON.stringify(t):""+t}function Et(t,e,i,n){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:o,branch:s}=e,{type:r}=i,{refinement:a,message:l="Expected a value of type `"+r+"`"+(a?" with refinement `"+a+"`":"")+", but received: `"+Ct(n)+"`"}=t;return{value:n,type:r,refinement:a,key:o[o.length-1],path:o,branch:s,...t,message:l}}function*St(t,e,i,n){(function(t){return xt(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const o of t){const t=Et(o,e,i,n);t&&(yield t)}}class kt{constructor(t){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:e,schema:i,validator:n,refiner:o,coercer:s=(t=>t),entries:r=function*(){}}=t;this.type=e,this.schema=i,this.entries=r,this.coercer=s,this.validator=n?(t,e)=>St(n(t,e),e,this,t):()=>[],this.refiner=o?(t,e)=>St(o(t,e),e,this,t):()=>[]}assert(t){return Ot(t,this)}create(t){return function(t,e){const i=jt(t,e,{coerce:!0});if(i[0])throw i[0];return i[1]}(t,this)}is(t){return function(t,e){return!jt(t,e)[0]}(t,this)}mask(t){return function(t,e){const i=jt(t,e,{coerce:!0,mask:!0});if(i[0])throw i[0];return i[1]}(t,this)}validate(t,e){return void 0===e&&(e={}),jt(t,this,e)}}function Ot(t,e){const i=jt(t,e);if(i[0])throw i[0]}function jt(t,e,i){void 0===i&&(i={});const n=function*t(e,i,n){void 0===n&&(n={});const{path:o=[],branch:s=[e],coerce:r=!1,mask:a=!1}=n,l={path:o,branch:s};if(r&&(e=i.coercer(e,l),a&&"type"!==i.type&&xt(i.schema)&&xt(e)&&!Array.isArray(e)))for(const t in e)void 0===i.schema[t]&&delete e[t];let c=!0;for(const t of i.validator(e,l))c=!1,yield[t,void 0];for(let[n,d,h]of i.entries(e,l)){const i=t(d,h,{path:void 0===n?o:[...o,n],branch:void 0===n?s:[...s,d],coerce:r,mask:a});for(const t of i)t[0]?(c=!1,yield[t[0],void 0]):r&&(d=t[1],void 0===n?e=d:e instanceof Map?e.set(n,d):e instanceof Set?e.add(d):xt(e)&&(e[n]=d))}if(c)for(const t of i.refiner(e,l))c=!1,yield[t,void 0];c&&(yield[void 0,e])}(t,e,i),o=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(n);if(o[0]){return[new At(o[0],(function*(){for(const t of n)t[0]&&(yield t[0])})),void 0]}return[void 0,o[1]]}function Ht(t,e){return new kt({type:t,schema:null,validator:e})}function Pt(){return Ht("boolean",t=>"boolean"==typeof t)}function Rt(t){const e=t?Object.keys(t):[],i=Ht("never",()=>!1);return new kt({type:"object",schema:t||null,*entries(n){if(t&&xt(n)){const o=new Set(Object.keys(n));for(const i of e)o.delete(i),yield[i,n[i],t[i]];for(const t of o)yield[t,n[t],i]}},validator:t=>xt(t)||"Expected an object, but received: "+Ct(t),coercer:t=>xt(t)?{...t}:t})}function Tt(t){return new kt({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function Mt(){return Ht("string",t=>"string"==typeof t||"Expected a string, but received: "+Ct(t))}function Ut(t){const e=Object.keys(t);return new kt({type:"type",schema:t,*entries(i){if(xt(i))for(const n of e)yield[n,i[n],t[n]]},validator:t=>xt(t)||"Expected an object, but received: "+Ct(t)})}const zt="M22.4691 1.56976H1.54122C1.33884 1.56976 1.17798 1.73063 1.17798 1.933V22.2641C1.17798 22.4665 1.33884 22.6274 1.54122 22.6274H22.4691C22.6715 22.6274 22.8324 22.4665 22.8324 22.2641V1.933C22.8324 1.73063 22.6663 1.56976 22.4691 1.56976ZM11.7275 20.9565C11.7275 21.0966 11.6134 21.2107 11.4733 21.2107H2.28846C2.14835 21.2107 2.03419 21.0966 2.03419 20.9565V2.97603C2.03419 2.83592 2.14835 2.72176 2.28846 2.72176H11.4733C11.6134 2.72176 11.7275 2.83592 11.7275 2.97603V20.9565ZM22.1474 21.4702C22.1474 21.6103 22.0332 21.7245 21.8931 21.7245H12.6668C12.5267 21.7245 12.4125 21.6103 12.4125 21.4702V2.95527C12.4125 2.81516 12.5267 2.701 12.6668 2.701H21.8879C22.028 2.701 22.1422 2.81516 22.1422 2.95527V21.4702H22.1474Z M22.2305 22.1084C22.2305 22.1292 22.2149 22.1447 22.2097 22.1603C22.2201 22.1499 22.2305 22.1292 22.2305 22.1084Z M21.8199 1.56976H2.44981C2.20851 1.56976 2.01343 1.65576 2.01343 1.76439V9.39134C2.01343 9.94362 2.46114 10.3913 3.01343 10.3913H21.2512C21.8034 10.3913 22.2512 9.94362 22.2512 9.39134V1.76213C22.2512 1.65576 22.0561 1.56976 21.8199 1.56976Z M2.01343 10.0454C2.01343 10.2414 2.08017 10.3913 2.16744 10.3913H22.0971C22.1639 10.3913 22.2049 10.2876 22.2306 10.1607C22.2358 10.1261 22.2512 10.0915 22.2512 10.0454V9.35352H2.01343V10.0454Z",Nt=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const n="type"===e[0].type,o=e.map(t=>t.schema),s=Object.assign({},...o);return n?Ut(s):Rt(s)}(Rt({type:Mt(),view_layout:Ht("any",()=>!0)}),Rt({name:Tt(Mt()),entity:Tt(Mt()),sensor:Tt(Mt()),show_name:Tt(Pt()),show_state:Tt(Pt()),show_preview:Tt(Pt()),invert_controls:Tt(Pt()),icon:Tt(Mt())})),Lt=[{name:"entity",selector:{entity:{domain:["cover"]}}},{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{},{name:"invert_controls",selector:{boolean:{value:!1}}}]}],Vt=[zt,"M2.06314 1.91671H21.9365C22.0711 1.91422 22.2013 1.96471 22.299 2.0573C22.3967 2.14989 22.4542 2.27717 22.459 2.41171V3.07171C22.4564 3.17848 22.4205 3.28178 22.3565 3.36722C22.2924 3.45266 22.2032 3.51599 22.1015 3.54838H20.9844L12.5956 3.57588H11.404H3.0073H1.90797C1.80592 3.54559 1.72432 3.45683 1.65863 3.37307C1.59294 3.28931 1.55491 3.1872 1.5498 3.08088V2.42088C1.55221 2.28633 1.60735 2.15811 1.70336 2.06381C1.79937 1.96952 1.92857 1.91669 2.06314 1.91671Z M19.0743 3.51172H13.9199V20.4242C14.3005 20.7353 14.7459 20.9011 15.2011 20.9011C15.6564 20.9011 16.1018 20.7353 16.4824 20.4242C16.8615 20.7357 17.3057 20.9017 17.7599 20.9017C18.2141 20.9017 18.6584 20.7357 19.0375 20.4242C19.4187 20.7262 19.8595 20.8912 20.3113 20.9009C20.7684 20.8965 21.2151 20.7313 21.5999 20.4242V3.51172H19.0743Z M7.55651 3.51172H2.43896V20.4242C2.81726 20.7268 3.25589 20.8919 3.70547 20.9009C4.16496 20.8977 4.61433 20.7325 5.00142 20.4242C5.38053 20.7357 5.82475 20.9017 6.27896 20.9017C6.73318 20.9017 7.1774 20.7357 7.55651 20.4242C7.93774 20.7262 8.37858 20.8912 8.83037 20.9009C9.28767 20.8985 9.73484 20.7331 10.119 20.4242V3.51172H7.55651Z"];let Dt=class extends Q{constructor(){super(...arguments),this._initialized=!1}setConfig(t){Ot(t,Nt),this._config=t,this.loadCardHelpers()}shouldUpdate(){var t;return this._initialized||this._initialize(),this.icon=null===(t=this._config)||void 0===t?void 0:t.icon,!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _invert_controls(){var t;return(null===(t=this._config)||void 0===t?void 0:t.invert_controls)||!1}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){return this.hass&&this._helpers?T`
      <ha-form
        .hass=${this.hass}
        .schema=${Lt}
        .computeLabel=${this._computeLabel}
        .data = ${this._config}
        @value-changed=${this._valueChanged}
      ></ha-form>
        <div id="icons">
          ${Vt.map((t,e)=>{var i,n,o,s,r,a,l,c;return e?T`
            <ha-card class="icon-card ${$t({on:(null===(i=this._config)||void 0===i?void 0:i.icon)===t,off:(null===(n=this._config)||void 0===n?void 0:n.icon)!==t})}"
                @click=${this._changed_icon.bind(this,t)}>
            <div id="containerMin">
              <svg viewBox="0 0 24 24" height="50px" width="50px">
                <path class="svg-icon ${$t({on:(null===(o=this._config)||void 0===o?void 0:o.icon)===t,off:(null===(s=this._config)||void 0===s?void 0:s.icon)!==t})}" d=${t}/>
              </svg>
            </div>
            </ha-card>`:T`
            <ha-card class="icon-card ${$t({on:(null===(r=this._config)||void 0===r?void 0:r.icon)===t,off:(null===(a=this._config)||void 0===a?void 0:a.icon)!==t})}"
                @click=${this._changed_icon.bind(this,t)}>
            <div id="containerMin">
              <svg viewBox="0 0 24 24" height="40px" width="40px">
                <path class="svg-icon ${$t({on:(null===(l=this._config)||void 0===l?void 0:l.icon)===t,off:(null===(c=this._config)||void 0===c?void 0:c.icon)!==t})}" d=${t}/>
              </svg>
            </div>
            </ha-card>`})}
        </div>
      `:T``}_changed_icon(t){this._config&&this.hass&&(this._config=Object.assign(Object.assign({},this._config),{icon:t}),this._config.icon=t,ht(this,"config-changed",{config:this._config}))}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_computeLabel(t){return this.hass.localize("ui.panel.lovelace.editor.card.generic."+t.name)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;ht(this,"config-changed",{config:e})}static get styles(){return r`
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
    `}};t([ot({attribute:!1})],Dt.prototype,"hass",void 0),t([st()],Dt.prototype,"_config",void 0),t([st()],Dt.prototype,"_toggle",void 0),t([st()],Dt.prototype,"_helpers",void 0),t([ot({attribute:!1})],Dt.prototype,"icon",void 0),Dt=t([it("blind-card-editor")],Dt);var Bt={name:"Blind",description:"A card that allows you to control blinds",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"No entities were detected",show_error:"Show Error"},It={open:"100%",close:"0%",stop:"Stopped",on:"100%",off:"0%",unavailable:"Unavailable"},qt={common:Bt,states:It},Zt=Object.freeze({__proto__:null,common:Bt,states:It,default:qt}),Ft={card:"Persianas",version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectaron entidades",show_error:"Mostrar Error"},Wt={open:"100%",close:"0%",stop:"Deténgase",on:"100%",off:"0%",unavailable:"Indisponible"},Kt={common:Ft,states:Wt},Jt=Object.freeze({__proto__:null,common:Ft,states:Wt,default:Kt}),Yt={card:"Jalousie",version:"VeAusführungrsão",invalid_configuration:"Ungültige Konfiguration",show_warning:"Es wurden keine Entitäten erkannt",show_error:"Fehler anzeigen"},Xt={open:"100%",close:"0%",stop:"Halt",on:"100%",off:"0%",unavailable:"Nicht verfügbar"},Gt={common:Yt,states:Xt},Qt=Object.freeze({__proto__:null,common:Yt,states:Xt,default:Gt}),te={card:"Stores",version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucune entité n'a été détectée",show_error:"Afficher l'erreur"},ee={open:"100%",close:"0%",stop:"Arrêt",on:"100%",off:"0%",unavailable:"Indisponible"},ie={common:te,states:ee},ne=Object.freeze({__proto__:null,common:te,states:ee,default:ie}),oe={card:"Persiane",version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessuna entità è stata rilevata",show_error:"Mostra errore"},se={open:"100%",close:"0%",stop:"Fermare",on:"100%",off:"0%",unavailable:"Non disponibile"},re={common:oe,states:se},ae=Object.freeze({__proto__:null,common:oe,states:se,default:re}),le={name:"Persiana",description:"Uma carta que permite controlar persianas",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro"},ce={open:"100%",close:"0%",stop:"Parada",on:"100%",off:"0%",unavailable:"Indisponível"},de={common:le,states:ce},he=Object.freeze({__proto__:null,common:le,states:ce,default:de}),ue={name:"Persiana",description:"Uma carta que permite controlar persianas",version:"Versão",invalid_configuration:"Configuração Inválida",show_warning:"Não foram detetadas entidades",show_error:"Mostrar Erro"},pe={open:"100%",close:"0%",stop:"Parada",on:"100%",off:"0%",unavailable:"Indisponível"},ve={common:ue,states:pe};const fe={en:Zt,pt:Object.freeze({__proto__:null,common:ue,states:pe,default:ve}),ptBr:he,de:Qt,it:ae,es:Jt,fr:ne};function me(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],fe[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],fe.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],fe.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}const ge=t=>{return void 0===t.attributes.friendly_name?(e=t.entity_id,e.substr(e.indexOf(".")+1)).replace(/_/g," "):t.attributes.friendly_name||"";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var e};class _e{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}const be=t=>{((t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=i,t.dispatchEvent(o)})(window,"haptic",t)},ye="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class $e extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ye?"100px":"50px",height:ye?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)},{passive:!0})})}bind(t,e){if(t.actionHandler)return;if(t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}),t.actionHandler={options:e},e.disabled)return;const i=t=>{let i,n;this.cancelled=!1,t.touches?(i=t.touches[0].pageX,n=t.touches[0].pageY):(i=t.pageX,n=t.pageY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout(()=>{this.startAnimation(i,n),this.held=!0,be("heavy")},this.holdTime))},n=t=>{if(["touchend","touchcancel"].includes(t.type)&&this.cancelled&&!this.held)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),e.hasHold&&this.held?ht(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,ht(i,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,ht(i,"action",{action:"double_tap"})):(be("medium"),ht(i,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",t=>{13===t.keyCode&&n(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-blind-card",$e);const we=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-blind-card"))return t.querySelector("action-handler-blind-card");const e=document.createElement("action-handler-blind-card");return t.appendChild(e),e})();i&&i.bind(t,e)},Ae=bt(class extends yt{update(t,[e]){return we(t.element,e),M}render(t){}});console.info(`%c  RACELAND-blind-card \n%c  ${me("common.version")} 1.4.0`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||"",window.customCards.push({type:"blind-card",name:me("common.name"),preview:!0,description:""+me("common.description"),icon:zt,color:"#648939",backgroundColor:"#D6E4C5"});let xe=class extends Q{constructor(){super(...arguments),this._shouldRenderRipple=!1,this._rippleHandlers=new _e(()=>(this._shouldRenderRipple=!0,this._ripple)),this.computeActiveState=t=>null==t?void 0:t.state}static async getConfigElement(){return document.createElement("blind-card-editor")}static getStubConfig(t,e,i){return{type:"custom:blind-card",entity:mt(t,1,e,i,["cover"])[0]||"",show_name:!0,show_state:!0,invert_controls:!1,icon:zt}}translate_state(t){return"open"===gt(t?this.computeActiveState(t):void 0)?me("states.on"):"close"===gt(t?this.computeActiveState(t):void 0)?me("states.off"):"stop"===gt(t?this.computeActiveState(t):void 0)?me("states.stop"):"unavailable"===gt(t?this.computeActiveState(t):void 0)?me("states.unavailable"):""}setConfig(t){if(console.log("config",t),!t)throw new Error(me("common.invalidconfiguration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign(Object.assign({},t),{show_icon:!0,tap_action:{action:"more-info"},hold_action:{action:"more-info"}})}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t,e,i,n,o;if(this.config.show_warning)return this._showWarning(me("common.show_warning"));if(this.config.show_error)return this._showError(me("common.show_error"));if(this.stateObj=this.config.entity?this.hass.states[this.config.entity]:void 0,!this.stateObj)return this._showWarning(me("common.show_warning"));const s=this.config.show_name?this.config.name||(this.stateObj?ge(this.stateObj):""):"";return this.stateObj.invert=this.config.invert_controls,this.stateObj.icon=this.config.icon,this.config.icon===zt?this.stateObj.type="blind":this.stateObj.type="curtain",T`

          <ha-card
        @action=${this._handleAction}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${Ae({hasHold:ft(null===(t=this.config)||void 0===t?void 0:t.hold_action),hasDoubleClick:ft(null===(e=this.config)||void 0===e?void 0:e.double_tap_action)})}Z
        role="button"
        aria-label=${this.config.name||(this.stateObj?ge(this.stateObj):"")}
        tabindex=${gt(ft(this.config.tap_action)?"0":void 0)}
        class=${$t({"ha-card-on":"closed"!==this.stateObj.state&&"unavailable"!==this.stateObj.state})}
      >
        ${this._shouldRenderRipple?T`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
                  <ha-svg-icon
                  class=${$t({"state-on":"closed"!==this.stateObj.state&&"unavailable"!==this.stateObj.state,"state-unavailable":"unavailable"===this.stateObj.state})}
                    tabindex="-1"
                    data-state=${gt(this.stateObj?this.computeActiveState(this.stateObj):void 0)}
                    .path=${this.config.icon}
                    .state=${this.stateObj.state}
                    style=${wt({height:this.config.icon_height?this.config.icon_height:""})}
                  ></ha-svg-icon>
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${$t({primary:!1===this.hass.themes.darkMode||!0===this.hass.themes.darkMode&&"closed"===this.stateObj.state||"unavailable"===this.stateObj.state,"primary-dark":!0===this.hass.themes.darkMode&&"closed"!==this.stateObj.state&&"unavailable"!==this.stateObj.state})}
              >${s}</span
            >
            ${!1===this.hass.themes.darkMode?T`<span class="secondary-on">${null===(i=this.stateObj)||void 0===i?void 0:i.attributes.current_position} %</span>`:"closed"!==this.stateObj.state&&"unavailable"!==this.stateObj.state&&!0===this.hass.themes.darkMode?T`<span class="secondary-on">${null===(n=this.stateObj)||void 0===n?void 0:n.attributes.current_position} %</span>`:"closed"===this.stateObj.state&&!0===this.hass.themes.darkMode?T`<span class="secondary">${null===(o=this.stateObj)||void 0===o?void 0:o.attributes.current_position} %</span>`:T`<span class="secondary-on">${me("states.unavailable")}</span>`}
          </div>
          ${"unavailable"===this.stateObj.state?T` <unavailable-icon></unavailable-icon> `:T``}
        </div>
      </ha-card>
        `}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}_showWarning(t){return T`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),T`${e}`}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),vt(t,e,i,o)}(this,this.hass,this.config,t.detail.action)}static get styles(){return r`

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

    `}};t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return et({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],xe.prototype,"_ripple",void 0),t([ot({attribute:!1})],xe.prototype,"hass",void 0),t([ot({attribute:!1})],xe.prototype,"stateObj",void 0),t([st()],xe.prototype,"_shouldRenderRipple",void 0),t([st()],xe.prototype,"config",void 0),t([function(t){return et({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],xe.prototype,"handleRippleActivate",null),xe=t([it("blind-card")],xe);export{xe as BoilerplateCard};
