function e(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}}const r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",h=l.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Ep(i,t);void 0!==o&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{i?e.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=v){var o;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,n=o._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=o.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=n,this[n]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const f=window,g=f.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,C="?"+b,$=`<${C}>`,w=document,A=(e="")=>w.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,x=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,P=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),R=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),M=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),z=new WeakMap,B=w.createTreeWalker(w,129,null,!1),L=(e,t)=>{const i=e.length-1,o=[];let n,s=2===t?"<svg>":"",r=k;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===k?"!--"===l[1]?r=S:void 0!==l[1]?r=P:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:k,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?U:R):r===U||r===R?r=O:r===S||r===P?r=k:(r=O,n=void 0);const h=r===O&&e[t+1].startsWith("/>")?" ":"";s+=r===k?i+$:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+b+h):i+b+(-2===d?(o.push(void 0),t):h)}const a=s+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,o]};class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,s=0;const r=e.length-1,a=this.parts,[l,d]=L(e,t);if(this.el=N.createElement(l,i),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=B.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const i=d[s++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?K:"@"===t[1]?W:I})}else a.push({type:6,index:n})}for(const t of e)o.removeAttribute(t)}if(T.test(o.tagName)){const e=o.textContent.split(b),t=e.length-1;if(t>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],A()),B.nextNode(),a.push({type:2,index:++n});o.append(e[t],A())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(b,e+1));)a.push({type:7,index:n}),e+=b.length-1}n++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function D(e,t,i=e,o){var n,s,r,a;if(t===M)return t;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const d=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(t=D(e,l._$AS(e,t.values),l,o)),t}class q{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(i,!0);B.currentNode=n;let s=B.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new V(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new J(s,this,e)),this.u.push(t),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=B.nextNode(),r++)}return n}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class V{constructor(e,t,i,o){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),E(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==M&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>x(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==H&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{const e=new q(n,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new N(e)),t}k(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new V(this.O(A()),this.O(A()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class I{constructor(e,t,i,o,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const n=this.strings;let s=!1;if(void 0===n)e=D(this,e,t,0),s=!E(e)||e!==this._$AH&&e!==M,s&&(this._$AH=e);else{const o=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=D(this,o[i+r],t,r),a===M&&(a=this._$AH[r]),s||(s=!E(a)||a!==this._$AH[r]),a===H?e=H:e!==H&&(e+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const F=g?g.emptyScript:"";class K extends I{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class W extends I{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=D(this,e,t,0))&&void 0!==i?i:H)===M)return;const o=this._$AH,n=e===H&&o!==H||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==H&&(o===H||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const G=f.litHtmlPolyfillSupport;null==G||G(N,V),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.6.1");const Y=window,Q=Y.ShadowRoot&&(void 0===Y.ShadyCSS||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ee=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class te{constructor(e,t,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=ee.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}}const ie=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new te(i,e,X)},oe=Q?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new te("string"==typeof e?e:e+"",void 0,X))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ne;const se=window,re=se.trustedTypes,ae=re?re.emptyScript:"",le=se.reactiveElementPolyfillSupport,de={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},ce=(e,t)=>t!==e&&(t==t||e==e),he={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:ce};class pe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Ep(i,t);void 0!==o&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||he}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(oe(e))}else void 0!==e&&t.push(oe(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Q?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),o=Y.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=he){var o;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:de).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,n=o._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=o.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:de;this._$El=n,this[n]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ce)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ue,ve;pe.finalized=!0,pe.elementProperties=new Map,pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},null==le||le({ReactiveElement:pe}),(null!==(ne=se.reactiveElementVersions)&&void 0!==ne?ne:se.reactiveElementVersions=[]).push("1.6.1");class me extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let r=s._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new V(t.insertBefore(A(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return M}}me.finalized=!0,me._$litElement$=!0,null===(ue=globalThis.litElementHydrateSupport)||void 0===ue||ue.call(globalThis,{LitElement:me});const _e=globalThis.litElementPolyfillSupport;null==_e||_e({LitElement:me}),(null!==(ve=globalThis.litElementVersions)&&void 0!==ve?ve:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe=1,ge=e=>(...t)=>({_$litDirective$:e,values:t});class ye{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=ge(class extends ye{constructor(e){var t;if(super(e),e.type!==fe||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,o;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.st)||void 0===i?void 0:i.has(e))&&this.nt.add(e);return this.render(t)}const n=e.element.classList;this.nt.forEach((e=>{e in t||(n.remove(e),this.nt.delete(e))}));for(const e in t){const i=!!t[e];i===this.nt.has(e)||(null===(o=this.st)||void 0===o?void 0:o.has(e))||(i?(n.add(e),this.nt.add(e)):(n.remove(e),this.nt.delete(e)))}return M}}),Ce=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,$e=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):$e(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Ae(e){return we({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=({finisher:e,descriptor:t})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(s.finisher=function(t){e(t,o)}),s}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(n,o)}}
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
var xe,ke,Se;null===(xe=window.HTMLSlotElement)||void 0===xe||xe.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ke||(ke={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Se||(Se={}));var Pe=function(e,t,i,o){o=o||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,e.dispatchEvent(n),n};function Oe(e){return void 0!==e&&"none"!==e.action}function Re(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var o=t.get("hass");return!o||o.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}var Ue=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null};const Te=(e,t,i,o,n)=>e.connection.sendMessagePromise({type:"broadlink/enter_learning_mode",mac:t,preset_name:i,entity_id:o,button_name:n}),je=(e,t,i,o)=>e.connection.sendMessagePromise({type:"broadlink/add_remote",mac:t.entity,preset:i,remote_type:o}),Me=async e=>await(e=>e.connection.sendMessagePromise({type:"broadlink/send_devices"}))(e).then((e=>e.devices)),He=e=>{((e,t,i,o)=>{o=o||{},i=null==i?{}:i;const n=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,e.dispatchEvent(n)})(window,"haptic",e)},ze="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Be extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ze?"100px":"50px",height:ze?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["mouseout","mouseup","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)}),{passive:!0})}))}bind(e,t){if(e.actionHandler)return;if(e.addEventListener("contextmenu",(e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1})),e.actionHandler={options:t},t.disabled)return;const i=e=>{let i,o;this.cancelled=!1,e.touches?(i=e.touches[0].pageX,o=e.touches[0].pageY):(i=e.pageX,o=e.pageY),t.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(i,o),this.held=!0,He("heavy")}),this.holdTime))},o=e=>{if(["touchend","touchcancel"].includes(e.type)&&this.cancelled&&!this.held)return;const i=e.target;e.cancelable&&e.preventDefault(),t.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),t.hasHold&&this.held?Pe(i,"action",{action:"hold"}):t.hasDoubleClick?"click"===e.type&&e.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Pe(i,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Pe(i,"action",{action:"double_tap"})):(He("medium"),Pe(i,"action",{action:"tap"}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",o),e.addEventListener("keyup",(e=>{13===e.keyCode&&o(e)}))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-broadlink-card",Be);const Le=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-broadlink-card"))return e.querySelector("action-handler-broadlink-card");const t=document.createElement("action-handler-broadlink-card");return e.appendChild(t),t})();i&&i.bind(e,t)},Ne=ge(class extends ye{update(e,[t]){return Le(e.element,t),M}render(e){}});var De={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"No Broadlink detected",show_error:"Show Error",save:"Save",locked:"Locked",unlocked:"Unlocked"},qe={card_name:"Broadlink",description:"A remote card for broadlink universal remotes"},Ve={add_remote_error_exists:"A remote with that name already exists",add_remote_error_none:"Please give a name to the remote",discover:"Refresh broadlinks",remote:"Remote (MAC)",remoteType:"Remote",name:"Name",current_remote:"Current Remote",error:"This broadlink device is locked, please follow the instructions to unlock",remove_remote:"Remove Remote",add_remote:"Add Remote",tv_remote:"TV",ac_remote:"Air conditioner"},Ie={common:De,info:qe,editor:Ve},Ze={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Nenhuma Broadlink detectada",show_error:"Erro",save:"Guardar",locked:"Bloqueada",unlocked:"Desbloqueada"},Fe={card_name:"Broadlink",description:"Uma carta para os comandos universais da broadlink"},Ke={add_remote_error_exists:"Já existe um comando com esse nome",add_remote_error_none:"Por favor introduza um nome para o comando",remote:"Comando (MAC)",discover:"Atualizar broadlinks",remoteType:"Comando",name:"Nome",current_remote:"Comando a utilizar",error:"A broadlink selecionada está bloqueada, por favor siga as instruções para desbloquear",remove_remote:"Remover",add_remote:"Adicionar",tv_remote:"Televisão",ac_remote:"Ar condicionado"},We={common:Ze,info:Fe,editor:Ke},Je={version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"No se detectó Broadlink",show_error:"Mostrar error",save:"Salvar",locked:"Bloqueada",unlocked:"Desbloqueada"},Ge={card_name:"Broadlink",description:"Una tarjeta remota para controles remotos universales de enlace amplio"},Ye={add_remote_error_exists:"Ya existe un control remoto con ese nombre",add_remote_error_none:"Por favor, dé un nombre al control remoto.",discover:"Actualizar Broadlinks",remote:"Control Remoto (MAC)",remoteType:"Control Remoto",name:"Nombre",current_remote:"Control Remoto actual",error:"Este dispositivo de enlace amplio está bloqueado, siga las instrucciones para desbloquear",remove_remote:"Quitar",add_remote:"Agregar",tv_remote:"Televisión",ac_remote:"Aire acondicionado"},Qe={common:Je,info:Ge,editor:Ye},Xe={version:"Ausführung",invalid_configuration:"ungültige Konfiguration",show_warning:"Kein Broadlink erkannt",show_error:"Fehler",save:"Speichern",locked:"Gesperrt",unlocked:"Entsperrt"},et={card_name:"Broadlink",description:"Ein Brief an Broadlink Universal Commands"},tt={add_remote_error_exists:"Es gibt bereits einen Befehl mit diesem Namen",add_remote_error_none:"Bitte geben Sie einen Namen für den Befehl ein",remote:"Befehl (MAC)",discover:"Broadlinks aktualisieren",remoteType:"Befehl",name:"Name",current_remote:"Befehl zu verwenden",error:"Der ausgewählte Broadlink ist gesperrt, bitte befolgen Sie die Anweisungen zum Entsperren",remove_remote:"Zu entfernen",add_remote:"Hinzufügen",tv_remote:"Fernseher",ac_remote:"Klimaanlage"},it={common:Xe,info:et,editor:tt},ot={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Nessun Broadlink rilevato",show_error:"Mostra errore",save:"Salva",locked:"Bloccato",unlocked:"Sbloccato"},nt={card_name:"Broadlink",description:"Una scheda remota per telecomandi universali Broadlink"},st={add_remote_error_exists:"Esiste già un telecomando con quel nome",add_remote_error_none:"Si prega di dare un nome al telecomando",discover:"Aggiornare Broadlink",remote:"Telecomando (MAC)",remoteType:"Telecomando",name:"Nome",current_remote:"Telecomando attuale",error:"Questo dispositivo broadlink è bloccato, segui le istruzioni per sbloccarlo",remove_remote:"Rimuovi",add_remote:"Aggiungi",tv_remote:"Televisione",ac_remote:"Condizionatore"},rt={common:ot,info:nt,editor:st},at={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Aucun Broadlink détecté",show_error:"Afficher l'erreur",save:"Sauver",locked:"Bloqué",unlocked:"Déverrouillé"},lt={card_name:"Broadlink",description:"Une carte à distance pour les télécommandes universelles broadlink"},dt={add_remote_error_exists:"Une télécommande portant ce nom existe déjà",add_remote_error_none:"Veuillez donner un nom à la télécommande",discover:"Actualiser Broadlinks",remote:"Télécommande (MAC)",remoteType:"Télécommande",name:"Nom",current_remote:"Télécommande actuelle",error:"Cet appareil Broadlink est verrouillé, veuillez suivre les instructions pour le déverrouiller",remove_remote:"Éliminer",add_remote:"Ajouter",tv_remote:"Télévision",ac_remote:"Climatiseur"},ct={common:at,info:lt,editor:dt},ht={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Nenhuma Broadlink detectada",show_error:"Erro",save:"Guardar",locked:"Bloqueada",unlocked:"Desbloqueada"},pt={card_name:"Broadlink",description:"Uma carta para os comandos universais da broadlink"},ut={add_remote_error_exists:"Já existe um comando com esse nome",add_remote_error_none:"Por favor introduza um nome para o comando",remote:"Comando (MAC)",discover:"Atualizar broadlinks",remoteType:"Comando",name:"Nome",current_remote:"Comando a utilizar",error:"A broadlink selecionada está bloqueada, por favor siga as instruções para desbloquear",remove_remote:"Remover",add_remote:"Adicionar",tv_remote:"Televisão",ac_remote:"Ar condicionado"},vt={common:ht,info:pt,editor:ut};const mt={en:Object.freeze({__proto__:null,common:De,info:qe,editor:Ve,default:Ie}),pt:Object.freeze({__proto__:null,common:Ze,info:Fe,editor:Ke,default:We}),es:Object.freeze({__proto__:null,common:Je,info:Ge,editor:Ye,default:Qe}),de:Object.freeze({__proto__:null,common:Xe,info:et,editor:tt,default:it}),it:Object.freeze({__proto__:null,common:ot,info:nt,editor:st,default:rt}),fr:Object.freeze({__proto__:null,common:at,info:lt,editor:dt,default:ct}),ptBr:Object.freeze({__proto__:null,common:ht,info:pt,editor:ut,default:vt})};function _t(e,t="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce(((e,t)=>e[t]),mt[o])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),mt.en)}return void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),mt.en)),""!==t&&""!==i&&(n=n.replace(t,i)),n}const ft=e=>{const t=void 0!==e.entity?{name:"remote_type",label:_t("editor.remoteType"),selector:{select:{options:[{value:"tv",label:_t("editor.tv_remote")},{value:"ac",label:_t("editor.ac_remote")}]}}}:{};return[{name:"name",label:_t("editor.name"),selector:{text:{}}},t]},gt=e=>{const t=e.all_devices.map((e=>{return{value:e.mac,label:(t=e,t.device_type+" ("+t.mac+")")};var t}));return[{name:"entity",label:_t("editor.remote"),selector:{select:{options:[...t]}}}]},yt=()=>import("./add-remote-dialog-11b53b8d.js");let bt=class extends me{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.preset=this._config.preset,this._discovering=!1,this.loadCardHelpers()}async firstUpdated(e){super.firstUpdated(e);const t=await Me(this.hass).then((e=>e));this._config&&(this._config=Object.assign(Object.assign({},this._config),{all_devices:t.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked})))})),Pe(this,"config-changed",{config:this._config}),window.addEventListener("add-remote",(e=>{this.preset=e.detail.broadlinkInfo.name,this._config&&(this._config=Object.assign(Object.assign({},this._config),{all_devices:e.detail.all_devices.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked}))),preset:this.preset,presets:e.detail.all_devices[e.detail.index].presets})),Pe(this,"config-changed",{config:this._config}),this.preset&&this._changePreset(this.preset)})),this.path="M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z"}shouldUpdate(e){return this._initialized||this._initialize(),e.has("_discovering"),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity_id(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_id)||""}get _preset(){var e;return(null===(e=this._config)||void 0===e?void 0:e.preset)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}get _tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tap_action)||{action:"more-info"}}get _hold_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.hold_action)||{action:"none"}}get _double_tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||{action:"none"}}render(){var e,t,i,o,n,s,r,a,l,d,c,h;if(!this.hass||!this._helpers)return j`
      <mwc-button class="discover ${be({spin:!0===this._discovering})}"
        @action=${this._handleAction}>
        ${_t("editor.discover")}
      </mwc-button>`;let p=0;if(null===(e=this._config)||void 0===e?void 0:e.all_devices)for(let e=0;e<(null===(i=null===(t=this._config)||void 0===t?void 0:t.all_devices)||void 0===i?void 0:i.length);e++)(null===(o=this._config)||void 0===o?void 0:o.all_devices[e].mac)===(null===(n=this._config)||void 0===n?void 0:n.entity)&&(p=e);const u=null===(r=null===(s=this._config)||void 0===s?void 0:s.all_devices[p])||void 0===r?void 0:r.presets;if(u){const e=[];for(const[t,i]of Object.entries(u))null==e||e.push(t);this._presetList=null===(a=this.selectec_device_preset_list)||void 0===a?void 0:a.length,this._isLocked=null===(l=this._config)||void 0===l?void 0:l.all_devices[p].is_locked,this.selectec_device_preset_list=e}const v={entity:null===(d=this._config)||void 0===d?void 0:d.entity};return j`
      <div class="card-config">
        <mwc-button class="discover ${be({spin:!0===this._discovering})}"
          @action=${this._handleAction}
          .actionHandler=${Ne({hasHold:Oe()})}>
          ${_t("editor.discover")}
        </mwc-button>
        ${this._isLocked?j`
              <div id="box">
                <ha-form
                  .hass=${this.hass}
                  .data=${v}
                  .schema=${gt(this._config)}
                  .computeLabel=${e=>{var t;return null!==(t=e.label)&&void 0!==t?t:e.name}}
                  @value-changed=${this._changeCardOptions}
                ></ha-form>
              </div>
                <ha-alert id="error" alert-type="error">
                  ${_t("editor.error")}
              </ha-alert>
                `:j`
          <div class="box">
            <ha-form
              .hass=${this.hass}
              .data=${v}
              .schema=${gt(this._config)}
              .computeLabel=${e=>{var t;return null!==(t=e.label)&&void 0!==t?t:e.name}}
              @value-changed=${this._changeCardOptions}
            ></ha-form>
          </div>
          <div id="current">${_t("editor.current_remote")}</div>
          <div class= "div-options">
            <div class="presets">
            ${void 0!==(null===(c=this._config)||void 0===c?void 0:c.entity)?null===(h=this.selectec_device_preset_list)||void 0===h?void 0:h.map((e=>j`
              <ha-card class = "preset-card ${be({on:this.preset===e,off:this.preset!==e})}"
                  @action=${this._changePreset.bind(this,e)}
                  .actionHandler=${Ne({hasHold:Oe()})}>
                  <span>${e}</span>
              </ha-card>`)):j``}
            </div>
            <div class="actions">
              ${0!==this._presetList?j`
                <mwc-button id="button-cancel" @click=${this._removeRemoteButton}>
                  ${_t("editor.remove_remote")}
                  <ha-svg-icon .path=${this.path}></ha-svg-icon>
                </mwc-button>
              `:j``}
                <mwc-button @click=${this._showAddRemoteDialog} id="buttons">
                  ${_t("editor.add_remote")}
                  <ha-svg-icon .path=${this.path}></ha-svg-icon>
                </mwc-button>
            </div>
          </div class= "div-options">
      `}
      </div class = "card-config">
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}async _handleAction(e){if(e){this._discovering=!0;const e=await(async e=>await(e=>e.connection.sendMessagePromise({type:"broadlink/discover"}))(e).then((e=>e.devices)))(this.hass).then((e=>e));if(console.log("Devices",e),this._discovering=!1,this._config){const i=void 0===(t=this._config.entity)?"":t;this._config=Object.assign(Object.assign({},this._config),{all_devices:e.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked})))}),e.map((e=>e.mac)).includes(i)||(delete this._config.entity,delete this._config.preset,delete this._config.remote_type),Pe(this,"config-changed",{config:this._config})}}var t}async _removeRemoteButton(){var e,t,i,o,n,s;const r=(a=this.hass,l=this._config,d=null===(e=this._config)||void 0===e?void 0:e.preset,a.connection.sendMessagePromise({type:"broadlink/remove_remote",mac:l.entity,preset:d}));var a,l,d;const c=await Me(this.hass).then((e=>e));let h=0;if(null===(t=this._config)||void 0===t?void 0:t.all_devices)for(let e=0;e<(null===(o=null===(i=this._config)||void 0===i?void 0:i.all_devices)||void 0===o?void 0:o.length);e++)(null===(n=this._config)||void 0===n?void 0:n.all_devices[e].mac)===(null===(s=this._config)||void 0===s?void 0:s.entity)&&(h=e);r.then((e=>{var t,i;e.sucess&&(this._config&&(this._config=Object.assign(Object.assign({},this._config),{all_devices:c.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked}))),preset:Object.keys(this._config.all_devices[h].presets)[Object.keys(this._config.all_devices[h].presets).length-1]})),Pe(this,"config-changed",{config:this._config}),this._changePreset(Object.keys(null===(t=this._config)||void 0===t?void 0:t.all_devices[h].presets)[Object.keys(null===(i=this._config)||void 0===i?void 0:i.all_devices[h].presets).length-1]))}))}_showAddRemoteDialog(){var e,t;e=this,t={broadlinkInfo:this._config},Pe(e,"show-dialog",{dialogTag:"add-remote-dialog",dialogImport:yt,dialogParams:t})}_changePreset(e){var t,i,o,n,s;if(!this._config||!this.hass)return;let r=0;if(null===(t=this._config)||void 0===t?void 0:t.all_devices)for(let e=0;e<(null===(o=null===(i=this._config)||void 0===i?void 0:i.all_devices)||void 0===o?void 0:o.length);e++)(null===(n=this._config)||void 0===n?void 0:n.all_devices[e].mac)===(null===(s=this._config)||void 0===s?void 0:s.entity)&&(r=e);const a=this._config.all_devices[r].presets[e];if(!a)return;const l=a.entity_id;this._config=Object.assign(Object.assign({},this._config),{preset:e,entity_id:l}),this.preset=e,Pe(this,"config-changed",{config:this._config})}_changeCardOptions(e){if(!this._config||!this.hass)return;let t=e.detail.value;t&&(void 0!==t.entity&&void 0===this._config.preset&&(t=Object.assign(Object.assign({},t),{preset:""})),this._config=Object.assign(Object.assign({},this._config),t),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}static get styles(){return ie`
      ha-card{
        width: 40%;
        height: 30%;
        background-color: var(--ha-card-background);
        border: 2px solid var(--divider-color);
        cursor: pointer;
        display: flex;
        justify-content: center;
      }
      .presets {
        width: 100%;
        margin-bottom: 10px;
      }
      ha-card.preset-card{
        width: 24%;
        padding: 2%;
        margin: 2%;
        float: left;
        text-align: center;
      }
      ha-card.preset-card.on{
        color: var(--accent-color);
        box-shadow: 0px 0px 10px var(--accent-color) , 0px 0px 10px var(--accent-color);
      }

      .discover.spin::before {
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: var(--primary-background-color);
        border-radius: 50%;
        border-width: 10%;
        content: "";
        height: 50px;
        width: 50px;
        position: absolute;
        left: 50%;
        top: 92px;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
    }



      @keyframes spinner {
        0% {
          transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
      }
      span {
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 200px;
        float: left;
        text-overflow: ellipsis;
      }
      @media only screen and (max-width: 600px) {
        ha-card.preset-card {
          width: 40%;
          padding: 2%;
          margin: 2%;
          height: 30px;
          float: left;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          max-width: 100px;
          float: left;
          text-overflow: ellipsis;
        }
        .discover.spin::before{
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: var(--primary-background-color);
        border-radius: 50%;
        border-width: 10%;
        content: "";
        height: 20px;
        width: 20px;
        position: absolute;
        left: 250px;
        top: 92px;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
      }
      }

      .box {
        padding-top: 30px;
      }
      #box {
        margin-bottom: 50px;
        padding-top: 30px;
      }
      .div-options {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 8px 8px 8px;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
      }
      #current {
        margin-top: 50px;
        margin-left: 3%;
        font-weight: 450;
        font-size: 1.2rem;
      }
      .actions {
        display: flex;
        flex-direction: row;
        margin-top: 2%;
      }
      #button-cancel {
        --mdc-theme-primary: grey;
      }
    `}};e([we({attribute:!1})],bt.prototype,"hass",void 0),e([Ae()],bt.prototype,"_config",void 0),e([Ae()],bt.prototype,"_toogle",void 0),e([Ae()],bt.prototype,"_helpers",void 0),e([Ae()],bt.prototype,"path",void 0),e([we({attribute:!1})],bt.prototype,"preset",void 0),e([Ae()],bt.prototype,"_presetList",void 0),e([we()],bt.prototype,"selectec_device_preset_list",void 0),e([we({attribute:!1})],bt.prototype,"_discovering",void 0),e([we()],bt.prototype,"_isLocked",void 0),bt=e([Ce("remote-card-editor")],bt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct=ge(class extends ye{constructor(e){var t;if(super(e),e.type!==fe||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.vt){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach((e=>{null==t[e]&&(this.vt.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const o=t[e];null!=o&&(this.vt.add(e),e.includes("-")?i.setProperty(e,o):i[e]=o)}return M}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $t{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}const wt=()=>import("./remote-card-dialog-5ada1536.js");console.info(`%c  REMOTE-CARD \n%c  ${_t("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"remote-card",name:_t("info.card_name"),description:_t("info.description"),preview:!0,icon:"M18.2002 21.0645C17.9618 21.064 17.7289 20.9925 17.5313 20.8591C17.3337 20.7257 17.1803 20.5364 17.0907 20.3155C17.0011 20.0946 16.9793 19.852 17.0282 19.6186C17.077 19.3852 17.1943 19.1717 17.365 19.0053C18.4638 17.9417 19.2342 16.5851 19.5847 15.0965C19.9351 13.608 19.8509 12.0501 19.3419 10.608C18.833 9.16593 17.9208 7.90027 16.7136 6.96141C15.5065 6.02255 14.0553 5.44996 12.5323 5.31167C11.0093 5.17338 9.47863 5.47521 8.12215 6.1813C6.76567 6.88738 5.6404 7.96804 4.88005 9.29487C4.1197 10.6217 3.75623 12.1389 3.83283 13.6662C3.90944 15.1936 4.42289 16.6668 5.31218 17.9109C5.54262 18.2341 5.79779 18.5391 6.07538 18.8229C6.29689 19.052 6.41829 19.3598 6.41289 19.6784C6.40749 19.9971 6.27572 20.3006 6.04658 20.5221C5.81743 20.7436 5.50967 20.865 5.19101 20.8596C4.87235 20.8542 4.56889 20.7224 4.34738 20.4933C3.98942 20.1226 3.65894 19.7264 3.35858 19.3077C1.92342 17.2801 1.25828 14.8072 1.48262 12.3333C1.70697 9.85931 2.8061 7.54643 4.58258 5.81008C5.56182 4.8602 6.71866 4.11262 7.98699 3.61008C9.25531 3.10754 10.6102 2.85988 11.9743 2.88128C13.3384 2.90268 14.6849 3.19271 15.9368 3.73478C17.1888 4.27686 18.3216 5.06035 19.2706 6.04048C21.1836 8.02122 22.2331 10.6797 22.1891 13.4331C22.145 16.1865 21.0109 18.81 19.0354 20.7285C18.8114 20.9451 18.5117 21.0656 18.2002 21.0645V21.0645ZM15.9058 18.6981C15.6665 18.6995 15.4323 18.6294 15.2333 18.4967C15.0342 18.364 14.8793 18.1749 14.7885 17.9536C14.6977 17.7322 14.6751 17.4888 14.7237 17.2545C14.7722 17.0203 14.8897 16.8059 15.061 16.6389C15.7074 16.0136 16.1607 15.2157 16.3667 14.3402C16.5728 13.4647 16.523 12.5484 16.2233 11.7004C15.9235 10.8524 15.3865 10.1083 14.6761 9.55673C13.9657 9.00514 13.1117 8.66926 12.2159 8.58903C11.3201 8.50881 10.42 8.68762 9.62289 9.1042C8.82576 9.52078 8.16508 10.1576 7.71946 10.9389C7.27383 11.7201 7.06203 12.613 7.10924 13.5111C7.15646 14.4093 7.4607 15.275 7.98578 16.0053C8.11687 16.1941 8.26467 16.3709 8.42738 16.5333C8.64889 16.7624 8.77029 17.0702 8.76489 17.3888C8.75949 17.7075 8.62772 18.011 8.39858 18.2325C8.16943 18.454 7.86167 18.5754 7.54301 18.57C7.22435 18.5646 6.92089 18.4328 6.69938 18.2037C6.46046 17.9554 6.23912 17.6907 6.03698 17.4117C5.055 16.0217 4.60236 14.3264 4.76081 12.632C4.91925 10.9375 5.67833 9.35551 6.90098 8.17168C7.56998 7.5238 8.36008 7.01409 9.22613 6.67164C10.0922 6.3292 11.0172 6.16075 11.9484 6.1759C12.8796 6.19106 13.7986 6.38953 14.6531 6.75997C15.5075 7.13042 16.2806 7.66558 16.9282 8.33488C17.5761 9.00389 18.0858 9.79398 18.4282 10.66C18.7707 11.5261 18.9391 12.4511 18.924 13.3823C18.9088 14.3135 18.7103 15.2325 18.3399 16.087C17.9694 16.9414 17.4343 17.7145 16.765 18.3621C16.6515 18.4727 16.517 18.5594 16.3694 18.6171C16.2218 18.6748 16.0642 18.7023 15.9058 18.6981V18.6981ZM9.56498 15.4437C9.13546 14.9995 8.84728 14.4379 8.73685 13.83C8.62642 13.222 8.69871 12.595 8.94457 12.0281C9.19044 11.4613 9.59885 10.98 10.1182 10.6452C10.6375 10.3104 11.2444 10.1371 11.8622 10.1471C12.48 10.1572 13.081 10.3502 13.5891 10.7017C14.0973 11.0533 14.4898 11.5476 14.7171 12.1222C14.9444 12.6967 14.9962 13.3258 14.866 13.9298C14.7358 14.5338 14.4295 15.0857 13.9858 15.5157C13.6909 15.8014 13.3426 16.0262 12.9607 16.1773C12.5789 16.3283 12.171 16.4026 11.7605 16.3959C11.3499 16.3892 10.9447 16.3017 10.5679 16.1383C10.1912 15.9749 9.85041 15.7389 9.56498 15.4437V15.4437ZM11.8114 16.4517C10.9881 16.4197 10.2092 16.0702 9.63804 15.4764C9.06688 14.8826 8.74784 14.0908 8.74784 13.2669C8.74784 12.443 9.06688 11.6511 9.63804 11.0573C10.2092 10.4636 10.9881 10.114 11.8114 10.0821H11.8642C12.282 10.0859 12.6949 10.1728 13.0789 10.3376C13.4629 10.5024 13.8103 10.7419 14.101 11.0421C14.537 11.4909 14.831 12.0582 14.9463 12.6732C15.0617 13.2882 14.9931 13.9235 14.7493 14.4998C14.5055 15.076 14.0972 15.5676 13.5755 15.9131C13.0538 16.2585 12.4419 16.4425 11.8162 16.4421L11.8114 16.4517ZM11.8114 10.2117C11.2099 10.2131 10.6221 10.3914 10.1211 10.7244C9.62013 11.0573 9.22812 11.5302 8.99383 12.0842C8.75954 12.6382 8.69332 13.2489 8.80341 13.8402C8.91349 14.4316 9.19502 14.9775 9.61298 15.4101V15.4101C9.9637 15.773 10.3986 16.0437 10.879 16.1983C11.3594 16.3529 11.8706 16.3865 12.3671 16.2963C12.8636 16.206 13.3302 15.9946 13.7255 15.6808C14.1208 15.367 14.4325 14.9605 14.6331 14.4974C14.8336 14.0343 14.9168 13.5288 14.8753 13.0259C14.8337 12.5229 14.6686 12.038 14.3948 11.6141C14.1209 11.1902 13.7466 10.8404 13.3052 10.5958C12.8638 10.3511 12.3688 10.2192 11.8642 10.2117H11.8114Z",color:"#1481f5",backgroundColor:"#d1e7ff"});let At=class extends me{constructor(){super(...arguments),this.learningOn=!1,this.quickLearning=!1,this.learningLock=!1,this.buttonBeingLearned="none",this._shouldRenderRipple=!1,this._rippleHandlers=new $t((()=>(this._shouldRenderRipple=!0,this._ripple)))}static async getConfigElement(){return document.createElement("remote-card-editor")}async firstUpdated(){window.addEventListener("add-remote",(e=>{this.config.preset=e.detail.broadlinkInfo.name}))}static async getStubConfig(e){const t=await Me(e).then((e=>e));return 0===t.length?{type:"custom:remote-card",all_devices:[]}:{type:"custom:remote-card",show_name:!0,icon:"M34.9201 37.8804C34.4234 37.8794 33.9383 37.7304 33.5266 37.4525C33.1149 37.1746 32.7953 36.7804 32.6086 36.3201C32.422 35.8598 32.3766 35.3543 32.4784 34.8682C32.5802 34.382 32.8244 33.9372 33.1801 33.5904C35.4693 31.3747 37.0743 28.5483 37.8044 25.4471C38.5345 22.346 38.359 19.1004 37.2987 16.0961C36.2384 13.0918 34.338 10.455 31.8231 8.49902C29.3083 6.54306 26.2848 5.35016 23.112 5.06206C19.9391 4.77396 16.7502 5.40278 13.9242 6.87379C11.0982 8.3448 8.75389 10.5962 7.16982 13.3604C5.58576 16.1246 4.82854 19.2855 4.98812 22.4674C5.14771 25.6493 6.2174 28.7186 8.07009 31.3104C8.55018 31.9839 9.08178 32.6191 9.66009 33.2104C10.1216 33.6878 10.3745 34.329 10.3632 34.9928C10.352 35.6567 10.0775 36.2889 9.60009 36.7504C9.1227 37.2119 8.48154 37.4648 7.81766 37.4536C7.15378 37.4423 6.52156 37.1678 6.06009 36.6904C5.31434 35.9182 4.62585 35.0927 4.00009 34.2204C1.01018 29.9963 -0.375538 24.8445 0.0918472 19.6904C0.559232 14.5363 2.84909 9.71781 6.55009 6.10042C8.59017 4.1215 11.0003 2.56404 13.6426 1.51708C16.2849 0.470115 19.1077 -0.0458234 21.9496 -0.00124542C24.7914 0.0433326 27.5966 0.647553 30.2048 1.77688C32.813 2.9062 35.1731 4.53848 37.1501 6.58042C41.1356 10.707 43.3221 16.2455 43.2303 21.9817C43.1384 27.7179 40.7757 33.1836 36.6601 37.1804C36.1935 37.6316 35.5692 37.8828 34.9201 37.8804ZM30.1401 32.9504C29.6417 32.9534 29.1538 32.8073 28.739 32.5309C28.3242 32.2545 28.0015 31.8605 27.8124 31.3994C27.6232 30.9382 27.5762 30.4311 27.6773 29.9431C27.7785 29.455 28.0232 29.0084 28.3801 28.6604C29.7269 27.3577 30.6711 25.6954 31.1004 23.8714C31.5297 22.0475 31.4259 20.1386 30.8015 18.3719C30.1771 16.6052 29.0583 15.0551 27.5782 13.9059C26.0982 12.7568 24.3191 12.057 22.4528 11.8899C20.5865 11.7228 18.7114 12.0953 17.0507 12.9632C15.3901 13.831 14.0136 15.1577 13.0853 16.7854C12.1569 18.413 11.7156 20.2731 11.814 22.1443C11.9123 24.0155 12.5462 25.8191 13.6401 27.3404C13.9132 27.7339 14.2211 28.102 14.5601 28.4404C15.0216 28.9178 15.2745 29.559 15.2632 30.2228C15.252 30.8867 14.9775 31.5189 14.5001 31.9804C14.0227 32.4419 13.3815 32.6948 12.7177 32.6836C12.0538 32.6723 11.4216 32.3978 10.9601 31.9204C10.4623 31.4031 10.0012 30.8518 9.58009 30.2704C7.53429 27.3746 6.59131 23.8428 6.9214 20.3127C7.25149 16.7825 8.8329 13.4867 11.3801 11.0204C12.7738 9.67068 14.4199 8.60876 16.2242 7.89534C18.0284 7.18192 19.9556 6.83097 21.8955 6.86254C23.8355 6.89412 25.7502 7.3076 27.5303 8.07936C29.3104 8.85112 30.921 9.96604 32.2701 11.3604C33.6198 12.7542 34.6817 14.4002 35.3952 16.2045C36.1086 18.0088 36.4595 19.9359 36.428 21.8759C36.3964 23.8158 35.9829 25.7305 35.2112 27.5106C34.4394 29.2907 33.3245 30.9013 31.9301 32.2504C31.6936 32.4808 31.4134 32.6614 31.106 32.7817C30.7985 32.9019 30.4701 32.9593 30.1401 32.9504ZM16.9301 26.1704C16.0353 25.245 15.4349 24.0751 15.2048 22.8086C14.9748 21.542 15.1254 20.2357 15.6376 19.0547C16.1498 17.8737 17.0006 16.8711 18.0826 16.1736C19.1645 15.4761 20.4289 15.115 21.716 15.136C23.0031 15.1569 24.2551 15.559 25.3138 16.2914C26.3724 17.0238 27.1901 18.0535 27.6636 19.2506C28.1371 20.4476 28.2451 21.7581 27.9739 23.0165C27.7027 24.2749 27.0646 25.4247 26.1401 26.3204C25.5257 26.9157 24.8 27.3841 24.0045 27.6987C23.2091 28.0134 22.3593 28.1682 21.504 28.1542C20.6486 28.1403 19.8044 27.9579 19.0196 27.6175C18.2348 27.2771 17.5247 26.7854 16.9301 26.1704ZM21.6101 28.2704C19.8949 28.2038 18.2722 27.4756 17.0823 26.2386C15.8924 25.0016 15.2277 23.3519 15.2277 21.6354C15.2277 19.919 15.8924 18.2692 17.0823 17.0322C18.2722 15.7952 19.8949 15.067 21.6101 15.0004H21.7201C22.5906 15.0084 23.4508 15.1894 24.2508 15.5327C25.0508 15.876 25.7746 16.3749 26.3801 17.0004C27.2884 17.9354 27.901 19.1173 28.1413 20.3986C28.3815 21.6798 28.2387 23.0034 27.7308 24.2039C27.2228 25.4044 26.3722 26.4286 25.2854 27.1483C24.1985 27.868 22.9236 28.2514 21.6201 28.2504L21.6101 28.2704ZM21.6101 15.2704C20.3569 15.2735 19.1324 15.6449 18.0887 16.3385C17.045 17.0321 16.2283 18.0173 15.7402 19.1715C15.2521 20.3257 15.1141 21.5979 15.3435 22.8299C15.5728 24.0618 16.1594 25.1992 17.0301 26.1004C17.7608 26.8565 18.6667 27.4205 19.6676 27.7426C20.6685 28.0646 21.7334 28.1347 22.7679 27.9467C23.8023 27.7586 24.7744 27.3182 25.5979 26.6644C26.4214 26.0107 27.0708 25.1639 27.4887 24.1991C27.9065 23.2342 28.0798 22.1812 27.9932 21.1333C27.9066 20.0855 27.5627 19.0752 26.9921 18.1921C26.4216 17.3089 25.6419 16.5802 24.7222 16.0706C23.8026 15.5609 22.7714 15.2861 21.7201 15.2704H21.6101Z",entity:t[0].mac,all_devices:t.map((e=>({mac:e.mac,device_type:e.device_type,presets:e.presets,is_locked:e.is_locked}))),preset:"",entity_id:""}}setConfig(e){if(!e)throw new Error(_t("common.invalid_configuration"));e.test_gui&&Ue().setEditMode(!0),this.config=Object.assign(Object.assign({},e),{preset:String(e.preset),tap_action:{action:"toggle"},hold_action:{action:"toggle"}})}shouldUpdate(e){return!!this.config&&Re(this,e,!0)}render(){var e,t,i,o,n,s,r,a;if(this.config.show_warning||!this.config.entity)return this._showWarning(_t("common.show_warning"));if(this.config.show_error)return this._showError(_t("common.show_error"));let l=0;if(null===(e=this.config)||void 0===e?void 0:e.all_devices)for(let e=0;e<(null===(i=null===(t=this.config)||void 0===t?void 0:t.all_devices)||void 0===i?void 0:i.length);e++)(null===(o=this.config)||void 0===o?void 0:o.all_devices[e].mac)===(null===(n=this.config)||void 0===n?void 0:n.entity)&&(l=e);return this._states=null===(s=this.config)||void 0===s?void 0:s.all_devices[l].is_locked,j`
      <ha-card
        @action=${this._showBroadlinkDialog}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${Ne({hasHold:Oe(null===(r=this.config)||void 0===r?void 0:r.hold_action),hasDoubleClick:Oe(null===(a=this.config)||void 0===a?void 0:a.double_tap_action)})}
        role="button"
        tabindex=${(e=>null!=e?e:H)(Oe(this.config.tap_action)?"0":void 0)}
      >
        ${this._shouldRenderRipple?j`<mwc-ripple></mwc-ripple>`:null}
        <div class="tile">
          <div class="icon-container" role="button" tabindex="0">
                  <ha-state-icon
                    tabindex="-1" .title=${this.config.preset?this.config.preset:""}
                    .icon=${"mdi:broadcast"}
                    style=${Ct({height:this.config.icon_height?this.config.icon_height:""})}
                  ></ha-state-icon>
          </div>
          <div class="info" role="button" tabindex="0">
            <span
              class=${be({primary:!1===this.hass.themes.darkMode||this._states,"primary-dark":!0===this.hass.themes.darkMode})}
              >${this.config.preset}</span
            >
          </div>
        </div>
      </ha-card>
    `}_showBroadlinkDialog(){var e,t;e=this,t={broadlinkInfo:this.config,obj:this._states},Pe(e,"show-dialog",{dialogTag:"remote-card-dialog",dialogImport:wt,dialogParams:t})}handleRippleActivate(e){this._rippleHandlers.startPress(e)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}_showWarning(e){return j`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),j`
      ${t}
    `}static get styles(){return ie`
       ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        outline: none;
        border-radius: 1.5rem;
        overflow: hidden;
        background-color: #d1e7ff;
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
        color: var(--state-icon-color, #44739e);
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
        background-color: #d1e7ff;
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
        fill: #1481f5;
      }
      ha-state-icon {
        --mdc-icon-size: 97%;
        color: #1481f5;
      }
      unavailable-icon {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    `}};e([we({attribute:!1})],At.prototype,"hass",void 0),e([we({attribute:!1})],At.prototype,"stateObj",void 0),e([we({attribute:!1})],At.prototype,"learningOn",void 0),e([we({attribute:!1})],At.prototype,"quickLearning",void 0),e([we({attribute:!1})],At.prototype,"learningLock",void 0),e([we({attribute:!1})],At.prototype,"buttonBeingLearned",void 0),e([we({attribute:!1})],At.prototype,"config",void 0),e([Ae()],At.prototype,"_shouldRenderRipple",void 0),e([we({attribute:!1})],At.prototype,"_states",void 0),e([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return Ee({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}("mwc-ripple")],At.prototype,"_ripple",void 0),e([function(e){return Ee({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}({passive:!0})],At.prototype,"handleRippleActivate",null),At=e([Ce("remote-card")],At);export{At as R,Re as _,Te as a,e as b,Ce as c,je as d,we as e,Me as f,ie as i,Ue as k,_t as l,Pe as n,be as o,ft as r,me as s,Ae as t,j as y};
