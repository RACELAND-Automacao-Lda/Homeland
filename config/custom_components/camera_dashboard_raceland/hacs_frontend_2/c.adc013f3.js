function t(){}const e=function(){let t=0;return function(){return t++}}();function n(t){return null==t}function r(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function o(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const i=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function a(t,e){return i(t)?t:e}function s(t,e){return void 0===t?e:t}const c=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,f=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function l(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)}function u(t,e,n,i){let a,s,c;if(r(t))if(s=t.length,i)for(a=s-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<s;a++)e.call(n,t[a],a);else if(o(t))for(c=Object.keys(t),s=c.length,a=0;a<s;a++)e.call(n,t[c[a]],c[a])}function h(t,e){let n,r,o,i;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],i=e[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function d(t){if(r(t))return t.map(d);if(o(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let o=0;for(;o<r;++o)e[n[o]]=d(t[n[o]]);return e}return t}function g(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function p(t,e,n,r){if(!g(t))return;const i=e[t],a=n[t];o(i)&&o(a)?b(i,a,r):e[t]=d(a)}function b(t,e,n){const i=r(e)?e:[e],a=i.length;if(!o(t))return t;const s=(n=n||{}).merger||p;for(let r=0;r<a;++r){if(!o(e=i[r]))continue;const a=Object.keys(e);for(let r=0,o=a.length;r<o;++r)s(a[r],t,e,n)}return t}function y(t,e){return b(t,e,{merger:x})}function x(t,e,n){if(!g(t))return;const r=e[t],i=n[t];o(r)&&o(i)?y(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=d(i))}const m={"":t=>t,x:t=>t.x,y:t=>t.y};function w(t,e){const n=m[e]||(m[e]=function(t){const e=function(t){const e=t.split("."),n=[];let r="";for(const t of e)r+=t,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}(t);return t=>{for(const n of e){if(""===n)break;t=t&&t[n]}return t}}(e));return n(t)}function v(t){return t.charAt(0).toUpperCase()+t.slice(1)}const M=t=>void 0!==t,_=t=>"function"==typeof t,O=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function k(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const T=Math.PI,P=2*T,S=P+T,R=Number.POSITIVE_INFINITY,I=T/180,j=T/2,C=T/4,A=2*T/3,F=Math.log10,Y=Math.sign;function E(t){const e=Math.round(t);t=N(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(F(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function W(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r==0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function B(t){return!isNaN(parseFloat(t))&&isFinite(t)}function N(t,e,n){return Math.abs(t-e)<n}function L(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function H(t,e,n){let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r][n],isNaN(i)||(e.min=Math.min(e.min,i),e.max=Math.max(e.max,i))}function D(t){return t*(T/180)}function $(t){return t*(180/T)}function X(t){if(!i(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function z(t,e){const n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*T&&(i+=P),{angle:i,distance:o}}function q(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Z(t,e){return(t-e+S)%P-T}function Q(t){return(t%P+P)%P}function V(t,e,n,r){const o=Q(t),i=Q(e),a=Q(n),s=Q(i-o),c=Q(a-o),f=Q(o-i),l=Q(o-a);return o===i||o===a||r&&i===a||s>c&&f<l}function K(t,e,n){return Math.max(e,Math.min(n,t))}function U(t){return K(t,-32768,32767)}function J(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function G(t,e,n){n=n||(n=>t[n]<e);let r,o=t.length-1,i=0;for(;o-i>1;)r=i+o>>1,n(r)?i=r:o=r;return{lo:i,hi:o}}const tt=(t,e,n,r)=>G(t,n,r?r=>t[r][e]<=n:r=>t[r][e]<n),et=(t,e,n)=>G(t,n,(r=>t[r][e]>=n));function nt(t,e,n){let r=0,o=t.length;for(;r<o&&t[r]<e;)r++;for(;o>r&&t[o-1]>n;)o--;return r>0||o<t.length?t.slice(r,o):t}const rt=["push","pop","shift","splice","unshift"];function ot(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),rt.forEach((e=>{const n="_onData"+v(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const o=r.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[n]&&t[n](...e)})),o}})})))}function it(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(e);-1!==o&&r.splice(o,1),r.length>0||(rt.forEach((e=>{delete t[e]})),delete t._chartjs)}function at(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}const st="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function ct(t,e,n){const r=n||(t=>Array.prototype.slice.call(t));let o=!1,i=[];return function(...n){i=r(n),o||(o=!0,st.call(window,(()=>{o=!1,t.apply(e,i)})))}}function ft(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const lt=t=>"start"===t?"left":"end"===t?"right":"center",ut=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,ht=(t,e,n,r)=>t===(r?"left":"right")?n:"center"===t?(e+n)/2:e;function dt(t,e,n){const r=e.length;let o=0,i=r;if(t._sorted){const{iScale:a,_parsed:s}=t,c=a.axis,{min:f,max:l,minDefined:u,maxDefined:h}=a.getUserBounds();u&&(o=K(Math.min(tt(s,a.axis,f).lo,n?r:tt(e,c,a.getPixelForValue(f)).lo),0,r-1)),i=h?K(Math.max(tt(s,a.axis,l,!0).hi+1,n?0:tt(e,c,a.getPixelForValue(l),!0).hi+1),o,r)-o:r-o}return{start:o,count:i}}function gt(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=o,!0;const i=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,o),i}const pt=t=>0===t||1===t,bt=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*P/n),yt=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*P/n)+1,xt={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*j),easeOutSine:t=>Math.sin(t*j),easeInOutSine:t=>-.5*(Math.cos(T*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>pt(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>pt(t)?t:bt(t,.075,.3),easeOutElastic:t=>pt(t)?t:yt(t,.075,.3),easeInOutElastic(t){const e=.1125;return pt(t)?t:t<.5?.5*bt(2*t,e,.45):.5+.5*yt(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-xt.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*xt.easeInBounce(2*t):.5*xt.easeOutBounce(2*t-1)+.5};function mt(t){return t+.5|0}const wt=(t,e,n)=>Math.max(Math.min(t,n),e);function vt(t){return wt(mt(2.55*t),0,255)}function Mt(t){return wt(mt(255*t),0,255)}function _t(t){return wt(mt(t/2.55)/100,0,1)}function Ot(t){return wt(mt(100*t),0,100)}const kt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Tt=[..."0123456789ABCDEF"],Pt=t=>Tt[15&t],St=t=>Tt[(240&t)>>4]+Tt[15&t],Rt=t=>(240&t)>>4==(15&t);function It(t){var e=(t=>Rt(t.r)&&Rt(t.g)&&Rt(t.b)&&Rt(t.a))(t)?Pt:St;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const jt=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ct(t,e,n){const r=e*Math.min(n,1-n),o=(e,o=(e+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function At(t,e,n){const r=(r,o=(r+t/60)%6)=>n-n*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Ft(t,e,n){const r=Ct(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)r[o]*=1-e-n,r[o]+=e;return r}function Yt(t){const e=t.r/255,n=t.g/255,r=t.b/255,o=Math.max(e,n,r),i=Math.min(e,n,r),a=(o+i)/2;let s,c,f;return o!==i&&(f=o-i,c=a>.5?f/(2-o-i):f/(o+i),s=function(t,e,n,r,o){return t===o?(e-n)/r+(e<n?6:0):e===o?(n-t)/r+2:(t-e)/r+4}(e,n,r,f,o),s=60*s+.5),[0|s,c||0,a]}function Et(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Mt)}function Wt(t,e,n){return Et(Ct,t,e,n)}function Bt(t){return(t%360+360)%360}function Nt(t){const e=jt.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?vt(+e[5]):Mt(+e[5]));const o=Bt(+e[2]),i=+e[3]/100,a=+e[4]/100;return n="hwb"===e[1]?function(t,e,n){return Et(Ft,t,e,n)}(o,i,a):"hsv"===e[1]?function(t,e,n){return Et(At,t,e,n)}(o,i,a):Wt(o,i,a),{r:n[0],g:n[1],b:n[2],a:r}}const Lt={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ht={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Dt;function $t(t){Dt||(Dt=function(){const t={},e=Object.keys(Ht),n=Object.keys(Lt);let r,o,i,a,s;for(r=0;r<e.length;r++){for(a=s=e[r],o=0;o<n.length;o++)i=n[o],s=s.replace(i,Lt[i]);i=parseInt(Ht[a],16),t[s]=[i>>16&255,i>>8&255,255&i]}return t}(),Dt.transparent=[0,0,0,0]);const e=Dt[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Xt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const zt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,qt=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Zt(t,e,n){if(t){let r=Yt(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Wt(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Qt(t,e){return t?Object.assign(e||{},t):t}function Vt(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Mt(t[3]))):(e=Qt(t,{r:0,g:0,b:0,a:1})).a=Mt(e.a),e}function Kt(t){return"r"===t.charAt(0)?function(t){const e=Xt.exec(t);let n,r,o,i=255;if(e){if(e[7]!==n){const t=+e[7];i=e[8]?vt(t):wt(255*t,0,255)}return n=+e[1],r=+e[3],o=+e[5],n=255&(e[2]?vt(n):wt(n,0,255)),r=255&(e[4]?vt(r):wt(r,0,255)),o=255&(e[6]?vt(o):wt(o,0,255)),{r:n,g:r,b:o,a:i}}}(t):Nt(t)}class Ut{constructor(t){if(t instanceof Ut)return t;const e=typeof t;let n;var r,o,i;"object"===e?n=Vt(t):"string"===e&&(i=(r=t).length,"#"===r[0]&&(4===i||5===i?o={r:255&17*kt[r[1]],g:255&17*kt[r[2]],b:255&17*kt[r[3]],a:5===i?17*kt[r[4]]:255}:7!==i&&9!==i||(o={r:kt[r[1]]<<4|kt[r[2]],g:kt[r[3]]<<4|kt[r[4]],b:kt[r[5]]<<4|kt[r[6]],a:9===i?kt[r[7]]<<4|kt[r[8]]:255})),n=o||$t(t)||Kt(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Qt(this._rgb);return t&&(t.a=_t(t.a)),t}set rgb(t){this._rgb=Vt(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${_t(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t}hexString(){return this._valid?It(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Yt(t),n=e[0],r=Ot(e[1]),o=Ot(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${o}%, ${_t(t.a)})`:`hsl(${n}, ${r}%, ${o}%)`}(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let o;const i=e===o?.5:e,a=2*i-1,s=n.a-r.a,c=((a*s==-1?a:(a+s)/(1+a*s))+1)/2;o=1-c,n.r=255&c*n.r+o*r.r+.5,n.g=255&c*n.g+o*r.g+.5,n.b=255&c*n.b+o*r.b+.5,n.a=i*n.a+(1-i)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,n){const r=qt(_t(t.r)),o=qt(_t(t.g)),i=qt(_t(t.b));return{r:Mt(zt(r+n*(qt(_t(e.r))-r))),g:Mt(zt(o+n*(qt(_t(e.g))-o))),b:Mt(zt(i+n*(qt(_t(e.b))-i))),a:t.a+n*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Ut(this.rgb)}alpha(t){return this._rgb.a=Mt(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=mt(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Zt(this._rgb,2,t),this}darken(t){return Zt(this._rgb,2,-t),this}saturate(t){return Zt(this._rgb,1,t),this}desaturate(t){return Zt(this._rgb,1,-t),this}rotate(t){return function(t,e){var n=Yt(t);n[0]=Bt(n[0]+e),n=Wt(n),t.r=n[0],t.g=n[1],t.b=n[2]}(this._rgb,t),this}}function Jt(t){return new Ut(t)}function Gt(t){if(t&&"object"==typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function te(t){return Gt(t)?t:Jt(t)}function ee(t){return Gt(t)?t:Jt(t).saturate(.5).darken(.1).hexString()}const ne=Object.create(null),re=Object.create(null);function oe(t,e){if(!e)return t;const n=e.split(".");for(let e=0,r=n.length;e<r;++e){const r=n[e];t=t[r]||(t[r]=Object.create(null))}return t}function ie(t,e,n){return"string"==typeof e?b(oe(t,e),n):b(oe(t,""),e)}var ae=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>ee(e.backgroundColor),this.hoverBorderColor=(t,e)=>ee(e.borderColor),this.hoverColor=(t,e)=>ee(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return ie(this,t,e)}get(t){return oe(this,t)}describe(t,e){return ie(re,t,e)}override(t,e){return ie(ne,t,e)}route(t,e,n,r){const i=oe(this,t),a=oe(this,n),c="_"+e;Object.defineProperties(i,{[c]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[c],e=a[r];return o(t)?Object.assign({},e,t):s(t,e)},set(t){this[c]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function se(t,e,n,r,o){let i=e[o];return i||(i=e[o]=t.measureText(o).width,n.push(o)),i>r&&(r=i),r}function ce(t,e,n,o){let i=(o=o||{}).data=o.data||{},a=o.garbageCollect=o.garbageCollect||[];o.font!==e&&(i=o.data={},a=o.garbageCollect=[],o.font=e),t.save(),t.font=e;let s=0;const c=n.length;let f,l,u,h,d;for(f=0;f<c;f++)if(h=n[f],null!=h&&!0!==r(h))s=se(t,i,a,s,h);else if(r(h))for(l=0,u=h.length;l<u;l++)d=h[l],null==d||r(d)||(s=se(t,i,a,s,d));t.restore();const g=a.length/2;if(g>n.length){for(f=0;f<g;f++)delete i[a[f]];a.splice(0,g)}return s}function fe(t,e,n){const r=t.currentDevicePixelRatio,o=0!==n?Math.max(n/2,.5):0;return Math.round((e-o)*r)/r+o}function le(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function ue(t,e,n,r){he(t,e,n,r,null)}function he(t,e,n,r,o){let i,a,s,c,f,l;const u=e.pointStyle,h=e.rotation,d=e.radius;let g=(h||0)*I;if(u&&"object"==typeof u&&(i=u.toString(),"[object HTMLImageElement]"===i||"[object HTMLCanvasElement]"===i))return t.save(),t.translate(n,r),t.rotate(g),t.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),u){default:o?t.ellipse(n,r,o/2,d,0,0,P):t.arc(n,r,d,0,P),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=A,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=A,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),t.closePath();break;case"rectRounded":f=.516*d,c=d-f,a=Math.cos(g+C)*c,s=Math.sin(g+C)*c,t.arc(n-a,r-s,f,g-T,g-j),t.arc(n+s,r-a,f,g-j,g),t.arc(n+a,r+s,f,g,g+j),t.arc(n-s,r+a,f,g+j,g+T),t.closePath();break;case"rect":if(!h){c=Math.SQRT1_2*d,l=o?o/2:c,t.rect(n-l,r-c,2*l,2*c);break}g+=C;case"rectRot":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+s,r-a),t.lineTo(n+a,r+s),t.lineTo(n-s,r+a),t.closePath();break;case"crossRot":g+=C;case"cross":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a);break;case"star":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a),g+=C,a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a);break;case"line":a=o?o/2:Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(g)*d,r+Math.sin(g)*d)}t.fill(),e.borderWidth>0&&t.stroke()}}function de(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function ge(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function pe(t){t.restore()}function be(t,e,n,r,o){if(!e)return t.lineTo(n.x,n.y);if("middle"===o){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===o!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function ye(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function xe(t,e,o,i,a,s={}){const c=r(e)?e:[e],f=s.strokeWidth>0&&""!==s.strokeColor;let l,u;for(t.save(),t.font=a.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);n(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,s),l=0;l<c.length;++l)u=c[l],f&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),n(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(u,o,i,s.maxWidth)),t.fillText(u,o,i,s.maxWidth),me(t,o,i,u,s),i+=a.lineHeight;t.restore()}function me(t,e,n,r,o){if(o.strikethrough||o.underline){const i=t.measureText(r),a=e-i.actualBoundingBoxLeft,s=e+i.actualBoundingBoxRight,c=n-i.actualBoundingBoxAscent,f=n+i.actualBoundingBoxDescent,l=o.strikethrough?(c+f)/2:f;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(a,l),t.lineTo(s,l),t.stroke()}}function we(t,e){const{x:n,y:r,w:o,h:i,radius:a}=e;t.arc(n+a.topLeft,r+a.topLeft,a.topLeft,-j,T,!0),t.lineTo(n,r+i-a.bottomLeft),t.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,T,j,!0),t.lineTo(n+o-a.bottomRight,r+i),t.arc(n+o-a.bottomRight,r+i-a.bottomRight,a.bottomRight,j,0,!0),t.lineTo(n+o,r+a.topRight),t.arc(n+o-a.topRight,r+a.topRight,a.topRight,0,-j,!0),t.lineTo(n+a.topLeft,r)}const ve=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Me=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function _e(t,e){const n=(""+t).match(ve);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t}const Oe=t=>+t||0;function ke(t,e){const n={},r=o(e),i=r?Object.keys(e):e,a=o(t)?r?n=>s(t[n],t[e[n]]):e=>t[e]:()=>t;for(const t of i)n[t]=Oe(a(t));return n}function Te(t){return ke(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Pe(t){return ke(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Se(t){const e=Te(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Re(t,e){t=t||{},e=e||ae.font;let r=s(t.size,e.size);"string"==typeof r&&(r=parseInt(r,10));let o=s(t.style,e.style);o&&!(""+o).match(Me)&&(console.warn('Invalid font style specified: "'+o+'"'),o="");const i={family:s(t.family,e.family),lineHeight:_e(s(t.lineHeight,e.lineHeight),r),size:r,style:o,weight:s(t.weight,e.weight),string:""};return i.string=function(t){return!t||n(t.size)||n(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i}function Ie(t,e,n,o){let i,a,s,c=!0;for(i=0,a=t.length;i<a;++i)if(s=t[i],void 0!==s&&(void 0!==e&&"function"==typeof s&&(s=s(e),c=!1),void 0!==n&&r(s)&&(s=s[n%s.length],c=!1),void 0!==s))return o&&!c&&(o.cacheable=!1),s}function je(t,e,n){const{min:r,max:o}=t,i=f(e,(o-r)/2),a=(t,e)=>n&&0===t?0:t+e;return{min:a(r,-Math.abs(i)),max:a(o,i)}}function Ce(t,e){return Object.assign(Object.create(t),e)}function Ae(t,e=[""],n=t,r,o=(()=>t[0])){M(r)||(r=Xe("_fallback",t));const i={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:o,override:o=>Ae([o,...t],e,n,r)};return new Proxy(i,{deleteProperty:(e,n)=>(delete e[n],delete e._keys,delete t[0][n],!0),get:(n,r)=>Be(n,r,(()=>function(t,e,n,r){let o;for(const i of e)if(o=Xe(Ee(i,t),n),M(o))return We(t,o)?De(n,r,t,o):o}(r,e,t,n))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>ze(t).includes(e),ownKeys:t=>ze(t),set(t,e,n){const r=t._storage||(t._storage=o());return t[e]=r[e]=n,delete t._keys,!0}})}function Fe(t,e,n,i){const a={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Ye(t,i),setContext:e=>Fe(t,e,n,i),override:r=>Fe(t.override(r),e,n,i)};return new Proxy(a,{deleteProperty:(e,n)=>(delete e[n],delete t[n],!0),get:(t,e,n)=>Be(t,e,(()=>function(t,e,n){const{_proxy:i,_context:a,_subProxy:s,_descriptors:c}=t;let f=i[e];_(f)&&c.isScriptable(e)&&(f=function(t,e,n,r){const{_proxy:o,_context:i,_subProxy:a,_stack:s}=n;if(s.has(t))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+t);s.add(t),e=e(i,a||r),s.delete(t),We(t,e)&&(e=De(o._scopes,o,t,e));return e}(e,f,t,n));r(f)&&f.length&&(f=function(t,e,n,r){const{_proxy:i,_context:a,_subProxy:s,_descriptors:c}=n;if(M(a.index)&&r(t))e=e[a.index%e.length];else if(o(e[0])){const n=e,r=i._scopes.filter((t=>t!==n));e=[];for(const o of n){const n=De(r,i,t,o);e.push(Fe(n,a,s&&s[t],c))}}return e}(e,f,t,c.isIndexable));We(e,f)&&(f=Fe(f,a,s&&s[e],c));return f}(t,e,n))),getOwnPropertyDescriptor:(e,n)=>e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,n)=>Reflect.has(t,n),ownKeys:()=>Reflect.ownKeys(t),set:(e,n,r)=>(t[n]=r,delete e[n],!0)})}function Ye(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:r,isScriptable:_(n)?n:()=>n,isIndexable:_(r)?r:()=>r}}const Ee=(t,e)=>t?t+v(e):e,We=(t,e)=>o(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Be(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function Ne(t,e,n){return _(t)?t(e,n):t}const Le=(t,e)=>!0===t?e:"string"==typeof t?w(e,t):void 0;function He(t,e,n,r,o){for(const i of e){const e=Le(n,i);if(e){t.add(e);const i=Ne(e._fallback,n,o);if(M(i)&&i!==n&&i!==r)return i}else if(!1===e&&M(r)&&n!==r)return null}return!1}function De(t,e,n,i){const a=e._rootScopes,s=Ne(e._fallback,n,i),c=[...t,...a],f=new Set;f.add(i);let l=$e(f,c,n,s||n,i);return null!==l&&((!M(s)||s===n||(l=$e(f,c,s,l,i),null!==l))&&Ae(Array.from(f),[""],a,s,(()=>function(t,e,n){const i=t._getTarget();e in i||(i[e]={});const a=i[e];if(r(a)&&o(n))return n;return a}(e,n,i))))}function $e(t,e,n,r,o){for(;n;)n=He(t,e,n,r,o);return n}function Xe(t,e){for(const n of e){if(!n)continue;const e=n[t];if(M(e))return e}}function ze(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function qe(t,e,n,r){const{iScale:o}=t,{key:i="r"}=this._parsing,a=new Array(r);let s,c,f,l;for(s=0,c=r;s<c;++s)f=s+n,l=e[f],a[s]={r:o.parse(w(l,i),f)};return a}const Ze=Number.EPSILON||1e-14,Qe=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ve=t=>"x"===t?"y":"x";function Ke(t,e,n,r){const o=t.skip?e:t,i=e,a=n.skip?e:n,s=q(i,o),c=q(a,i);let f=s/(s+c),l=c/(s+c);f=isNaN(f)?0:f,l=isNaN(l)?0:l;const u=r*f,h=r*l;return{previous:{x:i.x-u*(a.x-o.x),y:i.y-u*(a.y-o.y)},next:{x:i.x+h*(a.x-o.x),y:i.y+h*(a.y-o.y)}}}function Ue(t,e="x"){const n=Ve(e),r=t.length,o=Array(r).fill(0),i=Array(r);let a,s,c,f=Qe(t,0);for(a=0;a<r;++a)if(s=c,c=f,f=Qe(t,a+1),c){if(f){const t=f[e]-c[e];o[a]=0!==t?(f[n]-c[n])/t:0}i[a]=s?f?Y(o[a-1])!==Y(o[a])?0:(o[a-1]+o[a])/2:o[a-1]:o[a]}!function(t,e,n){const r=t.length;let o,i,a,s,c,f=Qe(t,0);for(let l=0;l<r-1;++l)c=f,f=Qe(t,l+1),c&&f&&(N(e[l],0,Ze)?n[l]=n[l+1]=0:(o=n[l]/e[l],i=n[l+1]/e[l],s=Math.pow(o,2)+Math.pow(i,2),s<=9||(a=3/Math.sqrt(s),n[l]=o*a*e[l],n[l+1]=i*a*e[l])))}(t,o,i),function(t,e,n="x"){const r=Ve(n),o=t.length;let i,a,s,c=Qe(t,0);for(let f=0;f<o;++f){if(a=s,s=c,c=Qe(t,f+1),!s)continue;const o=s[n],l=s[r];a&&(i=(o-a[n])/3,s[`cp1${n}`]=o-i,s[`cp1${r}`]=l-i*e[f]),c&&(i=(c[n]-o)/3,s[`cp2${n}`]=o+i,s[`cp2${r}`]=l+i*e[f])}}(t,i,e)}function Je(t,e,n){return Math.max(Math.min(t,n),e)}function Ge(t,e,n,r,o){let i,a,s,c;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Ue(t,o);else{let n=r?t[t.length-1]:t[0];for(i=0,a=t.length;i<a;++i)s=t[i],c=Ke(n,s,t[Math.min(i+1,a-(r?0:1))%a],e.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}e.capBezierPoints&&function(t,e){let n,r,o,i,a,s=de(t[0],e);for(n=0,r=t.length;n<r;++n)a=i,i=s,s=n<r-1&&de(t[n+1],e),i&&(o=t[n],a&&(o.cp1x=Je(o.cp1x,e.left,e.right),o.cp1y=Je(o.cp1y,e.top,e.bottom)),s&&(o.cp2x=Je(o.cp2x,e.left,e.right),o.cp2y=Je(o.cp2y,e.top,e.bottom)))}(t,n)}function tn(){return"undefined"!=typeof window&&"undefined"!=typeof document}function en(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function nn(t,e,n){let r;return"string"==typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const rn=t=>window.getComputedStyle(t,null);const on=["top","right","bottom","left"];function an(t,e,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=on[o];r[i]=parseFloat(t[e+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const sn=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function cn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,o=rn(n),i="border-box"===o.boxSizing,a=an(o,"padding"),s=an(o,"border","width"),{x:c,y:f,box:l}=function(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:o,offsetY:i}=r;let a,s,c=!1;if(sn(o,i,t.target))a=o,s=i;else{const t=e.getBoundingClientRect();a=r.clientX-t.left,s=r.clientY-t.top,c=!0}return{x:a,y:s,box:c}}(t,n),u=a.left+(l&&s.left),h=a.top+(l&&s.top);let{width:d,height:g}=e;return i&&(d-=a.width+s.width,g-=a.height+s.height),{x:Math.round((c-u)/d*n.width/r),y:Math.round((f-h)/g*n.height/r)}}const fn=t=>Math.round(10*t)/10;function ln(t,e,n,r){const o=rn(t),i=an(o,"margin"),a=nn(o.maxWidth,t,"clientWidth")||R,s=nn(o.maxHeight,t,"clientHeight")||R,c=function(t,e,n){let r,o;if(void 0===e||void 0===n){const i=en(t);if(i){const t=i.getBoundingClientRect(),a=rn(i),s=an(a,"border","width"),c=an(a,"padding");e=t.width-c.width-s.width,n=t.height-c.height-s.height,r=nn(a.maxWidth,i,"clientWidth"),o=nn(a.maxHeight,i,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||R,maxHeight:o||R}}(t,e,n);let{width:f,height:l}=c;if("content-box"===o.boxSizing){const t=an(o,"border","width"),e=an(o,"padding");f-=e.width+t.width,l-=e.height+t.height}return f=Math.max(0,f-i.width),l=Math.max(0,r?Math.floor(f/r):l-i.height),f=fn(Math.min(f,a,c.maxWidth)),l=fn(Math.min(l,s,c.maxHeight)),f&&!l&&(l=fn(f/2)),{width:f,height:l}}function un(t,e,n){const r=e||1,o=Math.floor(t.height*r),i=Math.floor(t.width*r);t.height=o/r,t.width=i/r;const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||a.height!==o||a.width!==i)&&(t.currentDevicePixelRatio=r,a.height=o,a.width=i,t.ctx.setTransform(r,0,0,r,0,0),!0)}const hn=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function dn(t,e){const n=function(t,e){return rn(t).getPropertyValue(e)}(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function gn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function pn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function bn(t,e,n,r){const o={x:t.cp2x,y:t.cp2y},i={x:e.cp1x,y:e.cp1y},a=gn(t,o,n),s=gn(o,i,n),c=gn(i,e,n),f=gn(a,s,n),l=gn(s,c,n);return gn(f,l,n)}const yn=new Map;function xn(t,e,n){return function(t,e){e=e||{};const n=t+JSON.stringify(e);let r=yn.get(n);return r||(r=new Intl.NumberFormat(t,e),yn.set(n,r)),r}(e,n).format(t)}function mn(t,e,n){return t?function(t,e){return{x:n=>t+t+e-n,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,n):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function wn(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function vn(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Mn(t){return"angle"===t?{between:V,compare:Z,normalize:Q}:{between:J,compare:(t,e)=>t-e,normalize:t=>t}}function _n({start:t,end:e,count:n,loop:r,style:o}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n==0,style:o}}function On(t,e,n){if(!n)return[t];const{property:r,start:o,end:i}=n,a=e.length,{compare:s,between:c,normalize:f}=Mn(r),{start:l,end:u,loop:h,style:d}=function(t,e,n){const{property:r,start:o,end:i}=n,{between:a,normalize:s}=Mn(r),c=e.length;let f,l,{start:u,end:h,loop:d}=t;if(d){for(u+=c,h+=c,f=0,l=c;f<l&&a(s(e[u%c][r]),o,i);++f)u--,h--;u%=c,h%=c}return h<u&&(h+=c),{start:u,end:h,loop:d,style:t.style}}(t,e,n),g=[];let p,b,y,x=!1,m=null;const w=()=>x||c(o,y,p)&&0!==s(o,y),v=()=>!x||0===s(i,p)||c(i,y,p);for(let t=l,n=l;t<=u;++t)b=e[t%a],b.skip||(p=f(b[r]),p!==y&&(x=c(p,o,i),null===m&&w()&&(m=0===s(p,o)?t:n),null!==m&&v()&&(g.push(_n({start:m,end:t,loop:h,count:a,style:d})),m=null),n=t,y=p));return null!==m&&g.push(_n({start:m,end:u,loop:h,count:a,style:d})),g}function kn(t,e){const n=[],r=t.segments;for(let o=0;o<r.length;o++){const i=On(r[o],t.points,e);i.length&&n.push(...i)}return n}function Tn(t,e){const n=t.points,r=t.options.spanGaps,o=n.length;if(!o)return[];const i=!!t._loop,{start:a,end:s}=function(t,e,n,r){let o=0,i=e-1;if(n&&!r)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(i+=o);i>o&&t[i%e].skip;)i--;return i%=e,{start:o,end:i}}(n,o,i,r);if(!0===r)return Pn(t,[{start:a,end:s,loop:i}],n,e);return Pn(t,function(t,e,n,r){const o=t.length,i=[];let a,s=e,c=t[e];for(a=e+1;a<=n;++a){const n=t[a%o];n.skip||n.stop?c.skip||(r=!1,i.push({start:e%o,end:(a-1)%o,loop:r}),e=s=n.stop?a:null):(s=a,c.skip&&(e=a)),c=n}return null!==s&&i.push({start:e%o,end:s%o,loop:r}),i}(n,a,s<a?s+o:s,!!t._fullLoop&&0===a&&s===o-1),n,e)}function Pn(t,e,n,r){return r&&r.setContext&&n?function(t,e,n,r){const o=t._chart.getContext(),i=Sn(t.options),{_datasetIndex:a,options:{spanGaps:s}}=t,c=n.length,f=[];let l=i,u=e[0].start,h=u;function d(t,e,r,o){const i=s?-1:1;if(t!==e){for(t+=c;n[t%c].skip;)t-=i;for(;n[e%c].skip;)e+=i;t%c!=e%c&&(f.push({start:t%c,end:e%c,loop:r,style:o}),l=o,u=e%c)}}for(const t of e){u=s?u:t.start;let e,i=n[u%c];for(h=u+1;h<=t.end;h++){const s=n[h%c];e=Sn(r.setContext(Ce(o,{type:"segment",p0:i,p1:s,p0DataIndex:(h-1)%c,p1DataIndex:h%c,datasetIndex:a}))),Rn(e,l)&&d(u,h-1,t.loop,l),i=s,l=e}u<h-1&&d(u,h-1,t.loop,l)}return f}(t,e,n,r):e}function Sn(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Rn(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}export{j as $,Fe as A,o as B,Ae as C,Ye as D,z as E,V as F,Ge as G,Tn as H,kn as I,ue as J,we as K,q as L,Pe as M,mn as N,Re as O,T as P,wn as Q,vn as R,t as S,P as T,i as U,D as V,H as W,xn as X,F as Y,Q as Z,de as _,ft as a,xe as a0,y as a1,nt as a2,at as a3,st as a4,it as a5,ot as a6,c as a7,f as a8,B as a9,On as aA,he as aB,E as aC,L as aD,N as aE,ce as aF,te as aG,W as aH,et as aI,be as aJ,ye as aK,X as aL,hn as aM,ct as aN,ke as aO,qe as aa,a as ab,je as ac,K as ad,$ as ae,se as af,U as ag,fe as ah,v as ai,cn as aj,ln as ak,en as al,J as am,pn as an,bn as ao,gn as ap,ut as aq,ht as ar,lt as as,G as at,tt as au,Ie as av,xt as aw,b as ax,dn as ay,Te as az,l as b,le as c,ae as d,u as e,_ as f,ge as g,pe as h,n as i,Ce as j,M as k,h as l,k as m,w as n,ne as o,Y as p,r as q,un as r,O as s,dt as t,e as u,s as v,gt as w,Se as x,tn as y,re as z};