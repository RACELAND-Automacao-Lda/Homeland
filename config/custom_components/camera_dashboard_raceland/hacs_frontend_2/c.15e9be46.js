import{P as t,v as e,d_ as i,d$ as r,_ as o,d as s,g as a,t as n,x as h,y as l,b3 as d,k as c,l as u,c as g,o as b,q as f}from"./main-b570e60a.js";import{E as p,n as v,o as m,p as w,L as y,q as _,r as k,s as x,t as S}from"./c.4d0662f5.js";import{s as C}from"./c.2aff7a3c.js";import{s as M}from"./c.5a5021e9.js";import"./c.3d7f1758.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";function O(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function $(t){return Math.min(1,Math.max(0,t))}function j(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function A(t){return t<=1?100*Number(t)+"%":t}function B(t){return 1===t.length?"0"+t:String(t)}function R(t,e,i){t=O(t,255),e=O(e,255),i=O(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),s=0,a=0,n=(r+o)/2;if(r===o)a=0,s=0;else{var h=r-o;switch(a=n>.5?h/(2-r-o):h/(r+o),r){case t:s=(e-i)/h+(e<i?6:0);break;case e:s=(i-t)/h+2;break;case i:s=(t-e)/h+4}s/=6}return{h:s,s:a,l:n}}function T(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function F(t,e,i){t=O(t,255),e=O(e,255),i=O(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),s=0,a=r,n=r-o,h=0===r?0:n/r;if(r===o)s=0;else{switch(r){case t:s=(e-i)/n+(e<i?6:0);break;case e:s=(i-t)/n+2;break;case i:s=(t-e)/n+4}s/=6}return{h:s,s:h,v:a}}function H(t,e,i,r){var o=[B(Math.round(t).toString(16)),B(Math.round(e).toString(16)),B(Math.round(i).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function L(t){return V(t)/255}function V(t){return parseInt(t,16)}var W={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function E(t){var e={r:0,g:0,b:0},i=1,r=null,o=null,s=null,a=!1,n=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(W[t])t=W[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=z.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=z.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=z.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=z.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=z.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=z.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=z.hex8.exec(t),i)return{r:V(i[1]),g:V(i[2]),b:V(i[3]),a:L(i[4]),format:e?"name":"hex8"};if(i=z.hex6.exec(t),i)return{r:V(i[1]),g:V(i[2]),b:V(i[3]),format:e?"name":"hex"};if(i=z.hex4.exec(t),i)return{r:V(i[1]+i[1]),g:V(i[2]+i[2]),b:V(i[3]+i[3]),a:L(i[4]+i[4]),format:e?"name":"hex8"};if(i=z.hex3.exec(t),i)return{r:V(i[1]+i[1]),g:V(i[2]+i[2]),b:V(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(D(t.r)&&D(t.g)&&D(t.b)?(e=function(t,e,i){return{r:255*O(t,255),g:255*O(e,255),b:255*O(i,255)}}(t.r,t.g,t.b),a=!0,n="%"===String(t.r).substr(-1)?"prgb":"rgb"):D(t.h)&&D(t.s)&&D(t.v)?(r=A(t.s),o=A(t.v),e=function(t,e,i){t=6*O(t,360),e=O(e,100),i=O(i,100);var r=Math.floor(t),o=t-r,s=i*(1-e),a=i*(1-o*e),n=i*(1-(1-o)*e),h=r%6;return{r:255*[i,a,s,s,n,i][h],g:255*[n,i,i,a,s,s][h],b:255*[s,s,n,i,i,a][h]}}(t.h,r,o),a=!0,n="hsv"):D(t.h)&&D(t.s)&&D(t.l)&&(r=A(t.s),s=A(t.l),e=function(t,e,i){var r,o,s;if(t=O(t,360),e=O(e,100),i=O(i,100),0===e)o=i,s=i,r=i;else{var a=i<.5?i*(1+e):i+e-i*e,n=2*i-a;r=T(n,a,t+1/3),o=T(n,a,t),s=T(n,a,t-1/3)}return{r:255*r,g:255*o,b:255*s}}(t.h,r,s),a=!0,n="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=j(i),{ok:a,format:t.format||n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var P="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",N="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",I="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",z={CSS_UNIT:new RegExp(P),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+I),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+I),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+I),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function D(t){return Boolean(z.CSS_UNIT.exec(String(t)))}var G=function(){function t(e,i){var r;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var o=E(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(r=i.format)&&void 0!==r?r:o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,r=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=j(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=F(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=F(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.v);return 1===this.a?"hsv("+e+", "+i+"%, "+r+"%)":"hsva("+e+", "+i+"%, "+r+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var t=R(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=R(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.l);return 1===this.a?"hsl("+e+", "+i+"%, "+r+"%)":"hsla("+e+", "+i+"%, "+r+"%, "+this.roundA+")"},t.prototype.toHex=function(t){return void 0===t&&(t=!1),H(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,r,o){var s,a=[B(Math.round(t).toString(16)),B(Math.round(e).toString(16)),B(Math.round(i).toString(16)),B((s=r,Math.round(255*parseFloat(s)).toString(16)))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb("+t+", "+e+", "+i+")":"rgba("+t+", "+e+", "+i+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var t=function(t){return Math.round(100*O(t,255))+"%"};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*O(t,255))};return 1===this.a?"rgb("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%)":"rgba("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+H(this.r,this.g,this.b,!1),e=0,i=Object.entries(W);e<i.length;e++){var r=i[e],o=r[0];if(t===r[1])return o}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,r=this.a<1&&this.a>=0;return e||!r||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=$(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=$(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=$(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=$(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),r=(i.h+e)%360;return i.h=r<0?360+r:r,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var r=this.toRgb(),o=new t(e).toRgb(),s=i/100;return new t({r:(o.r-r.r)*s+r.r,g:(o.g-r.g)*s+r.g,b:(o.b-r.b)*s+r.b,a:(o.a-r.a)*s+r.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var r=this.toHsl(),o=360/i,s=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,s.push(new t(r));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),r=i.h,o=i.s,s=i.v,a=[],n=1/e;e--;)a.push(new t({h:r,s:o,v:s})),s=(s+n)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(i.r-r.r)*i.a,g:r.g+(i.g-r.g)*i.a,b:r.b+(i.b-r.b)*i.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),r=i.h,o=[this],s=360/e,a=1;a<e;a++)o.push(new t({h:(r+a*s)%360,s:i.s,l:i.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function q(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new G(t,e)}class Y extends(p(t)){static get template(){return e`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `}static get properties(){return{hsColor:{type:Object},desiredHsColor:{type:Object,observer:"applyHsColor"},desiredRgbColor:{type:Object,observer:"applyRgbColor"},width:{type:Number,value:500},height:{type:Number,value:500},radius:{type:Number,value:225},hueSegments:{type:Number,value:0,observer:"segmentationChange"},saturationSegments:{type:Number,value:0,observer:"segmentationChange"},ignoreSegments:{type:Boolean,value:!1},throttle:{type:Number,value:500}}}ready(){super.ready(),this.setupLayers(),this.drawColorWheel(),this.drawMarker(),this.desiredHsColor&&this.applyHsColor(this.desiredHsColor),this.desiredRgbColor&&this.applyRgbColor(this.desiredRgbColor),this.interactionLayer.addEventListener("mousedown",(t=>this.onMouseDown(t))),this.interactionLayer.addEventListener("touchstart",(t=>this.onTouchStart(t)))}convertToCanvasCoordinates(t,e){const i=this.interactionLayer.createSVGPoint();i.x=t,i.y=e;const r=i.matrixTransform(this.interactionLayer.getScreenCTM().inverse());return{x:r.x,y:r.y}}onMouseDown(t){const e=this.convertToCanvasCoordinates(t.clientX,t.clientY);this.isInWheel(e.x,e.y)&&(this.onMouseSelect(t),this.canvas.classList.add("mouse","dragging"),this.addEventListener("mousemove",this.onMouseSelect),this.addEventListener("mouseup",this.onMouseUp))}onMouseUp(){this.canvas.classList.remove("mouse","dragging"),this.removeEventListener("mousemove",this.onMouseSelect)}onMouseSelect(t){requestAnimationFrame((()=>this.processUserSelect(t)))}onTouchStart(t){const e=t.changedTouches[0],i=this.convertToCanvasCoordinates(e.clientX,e.clientY);if(this.isInWheel(i.x,i.y)){if(t.target===this.marker)return t.preventDefault(),this.canvas.classList.add("touch","dragging"),this.addEventListener("touchmove",this.onTouchSelect),void this.addEventListener("touchend",this.onTouchEnd);this.tapBecameScroll=!1,this.addEventListener("touchend",this.onTap),this.addEventListener("touchmove",(()=>{this.tapBecameScroll=!0}),{passive:!0})}}onTap(t){this.tapBecameScroll||(t.preventDefault(),this.onTouchSelect(t))}onTouchEnd(){this.canvas.classList.remove("touch","dragging"),this.removeEventListener("touchmove",this.onTouchSelect)}onTouchSelect(t){requestAnimationFrame((()=>this.processUserSelect(t.changedTouches[0])))}processUserSelect(t){const e=this.convertToCanvasCoordinates(t.clientX,t.clientY),r=this.getColor(e.x,e.y);let o;if(this.isInWheel(e.x,e.y))o=this.getRgbColor(e.x,e.y);else{const[t,e,s]=i([r.h,r.s]);o={r:t,g:e,b:s}}this.onColorSelect(r,o)}onColorSelect(t,e){if(this.setMarkerOnColor(t),this.ignoreSegments||(t=this.applySegmentFilter(t)),this.applyColorToCanvas(t),this.colorSelectIsThrottled)return clearTimeout(this.ensureFinalSelect),void(this.ensureFinalSelect=setTimeout((()=>{this.fireColorSelected(t,e)}),this.throttle));this.fireColorSelected(t,e),this.colorSelectIsThrottled=!0,setTimeout((()=>{this.colorSelectIsThrottled=!1}),this.throttle)}fireColorSelected(t,e){this.hsColor=t,this.fire("colorselected",{hs:t,rgb:e})}setMarkerOnColor(t){if(!this.marker||!this.tooltip)return;const e=t.s*this.radius,i=(t.h-180)/180*Math.PI,r=`translate(${-e*Math.cos(i)},${-e*Math.sin(i)})`;this.marker.setAttribute("transform",r),this.tooltip.setAttribute("transform",r)}applyColorToCanvas(t){this.interactionLayer&&(this.interactionLayer.style.color=`hsl(${t.h}, 100%, ${100-50*t.s}%)`)}applyHsColor(t){this.hsColor&&this.hsColor.h===t.h&&this.hsColor.s===t.s||(this.setMarkerOnColor(t),this.ignoreSegments||(t=this.applySegmentFilter(t)),this.hsColor=t,this.applyColorToCanvas(t))}applyRgbColor(t){const[e,i]=r(t);this.applyHsColor({h:e,s:i})}getAngle(t,e){return Math.atan2(-e,-t)/Math.PI*180+180}isInWheel(t,e){return this.getDistance(t,e)<=1}getDistance(t,e){return Math.sqrt(t*t+e*e)/this.radius}getColor(t,e){const i=this.getAngle(t,e),r=this.getDistance(t,e);return{h:i,s:Math.min(r,1)}}getRgbColor(t,e){const i=this.backgroundLayer.getContext("2d").getImageData(t+250,e+250,1,1).data;return{r:i[0],g:i[1],b:i[2]}}applySegmentFilter(t){if(this.hueSegments){const e=360/this.hueSegments,i=e/2;t.h-=i,t.h<0&&(t.h+=360);const r=t.h%e;t.h-=r-e}if(this.saturationSegments)if(1===this.saturationSegments)t.s=1;else{const e=1/this.saturationSegments,i=1/(this.saturationSegments-1),r=Math.floor(t.s/e)*i;t.s=Math.min(r,1)}return t}setupLayers(){this.canvas=this.$.canvas,this.backgroundLayer=this.$.backgroundLayer,this.interactionLayer=this.$.interactionLayer,this.originX=this.width/2,this.originY=this.originX,this.backgroundLayer.width=this.width,this.backgroundLayer.height=this.height,this.interactionLayer.setAttribute("viewBox",`${-this.originX} ${-this.originY} ${this.width} ${this.height}`)}drawColorWheel(){let t,e,i,r;const o=this.backgroundLayer.getContext("2d"),s=this.originX,a=this.originY,n=this.radius,h=window.getComputedStyle(this.backgroundLayer,null),l=parseInt(h.getPropertyValue("--wheel-borderwidth"),10),d=h.getPropertyValue("--wheel-bordercolor").trim(),c=h.getPropertyValue("--wheel-shadow").trim();if("none"!==c){const o=c.split("px ");t=o.pop(),e=parseInt(o[0],10),i=parseInt(o[1],10),r=parseInt(o[2],10)||0}const u=n+l/2,g=n,b=n+l;"none"!==h.shadow&&(o.save(),o.beginPath(),o.arc(s,a,b,0,2*Math.PI,!1),o.shadowColor=t,o.shadowOffsetX=e,o.shadowOffsetY=i,o.shadowBlur=r,o.fillStyle="white",o.fill(),o.restore()),function(t,e){const i=360/(t=t||360),r=i/2;for(let t=0;t<=360;t+=i){const i=(t-r)*(Math.PI/180),n=(t+r+1)*(Math.PI/180);o.beginPath(),o.moveTo(s,a),o.arc(s,a,g,i,n,false),o.closePath();const h=o.createRadialGradient(s,a,0,s,a,g);let l=100;if(h.addColorStop(0,`hsl(${t}, 100%, ${l}%)`),e>0){const i=1/e;let r=0;for(let o=1;o<e;o+=1){const e=l;r=o*i,l=100-50*r,h.addColorStop(r,`hsl(${t}, 100%, ${e}%)`),h.addColorStop(r,`hsl(${t}, 100%, ${l}%)`)}h.addColorStop(r,`hsl(${t}, 100%, 50%)`)}h.addColorStop(1,`hsl(${t}, 100%, 50%)`),o.fillStyle=h,o.fill()}}(this.hueSegments,this.saturationSegments),l>0&&(o.beginPath(),o.arc(s,a,u,0,2*Math.PI,!1),o.lineWidth=l,o.strokeStyle=d,o.stroke())}drawMarker(){const t=this.interactionLayer,e=.08*this.radius,i=.15*this.radius,r=-3*i;t.marker=document.createElementNS("http://www.w3.org/2000/svg","circle"),t.marker.setAttribute("id","marker"),t.marker.setAttribute("r",e),this.marker=t.marker,t.appendChild(t.marker),t.tooltip=document.createElementNS("http://www.w3.org/2000/svg","circle"),t.tooltip.setAttribute("id","colorTooltip"),t.tooltip.setAttribute("r",i),t.tooltip.setAttribute("cx",0),t.tooltip.setAttribute("cy",r),this.tooltip=t.tooltip,t.appendChild(t.tooltip)}segmentationChange(){this.backgroundLayer&&this.drawColorWheel()}}function U(t,e){if(e<1){const i=function(t){const e=`${t}`.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0}(e);return parseFloat(t.toFixed(i))}return Math.round(t/e)*e}customElements.define("ha-color-picker",Y),o([f("more-info-light")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[n()],key:"_brightnessSliderValue",value:()=>0},{kind:"field",decorators:[n()],key:"_ctSliderValue",value:void 0},{kind:"field",decorators:[n()],key:"_cwSliderValue",value:void 0},{kind:"field",decorators:[n()],key:"_wwSliderValue",value:void 0},{kind:"field",decorators:[n()],key:"_wvSliderValue",value:void 0},{kind:"field",decorators:[n()],key:"_colorBrightnessSliderValue",value:void 0},{kind:"field",decorators:[n()],key:"_brightnessAdjusted",value:void 0},{kind:"field",decorators:[n()],key:"_hueSegments",value:()=>24},{kind:"field",decorators:[n()],key:"_saturationSegments",value:()=>8},{kind:"field",decorators:[n()],key:"_colorPickerColor",value:void 0},{kind:"field",decorators:[n()],key:"_mode",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"actionRows",value:()=>[]},{kind:"field",decorators:[a({attribute:!1})],key:"settingsOn",value:()=>!0},{kind:"method",key:"get",value:function(t){const e=t.target,i=t.changedTouches[0],r=parseFloat(e.getAttribute("min"))||0,o=parseFloat(e.getAttribute("max"))||100,s=parseFloat(e.getAttribute("step"))||1,a=o-r;let n;const h=e.getBoundingClientRect(),l=100/h.width*0/100;return n=100-100/h.height*(i.clientY-h.top),n<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*l:n>50&&(n+=2*(n-50)*l),r+U(a*(n/100),s)}},{kind:"method",key:"set",value:function(t){t.preventDefault(),t.target.value=this.get(t),function(t,e){if(!t||!e)return;const i=new Event(e,{bubbles:!0});t.dispatchEvent(i)}(t.target,"touchend"===t.type?"change":"input")}},{kind:"method",key:"updated",value:function(){if("ontouchstart"in document.documentElement){const t=this.shadowRoot.getElementById("iosSlider");t.style.userSelect="none",t.style.touchAction="manipulation",["touchstart","touchmove","touchend"].forEach((e=>{t.addEventListener(e,(t=>this.set(t)),!1)}))}}},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?h`
      ${!0===this.settingsOn?this._render_slider():this._render_colorPicker()}
    `:h``}},{kind:"method",key:"_render_slider",value:function(){var t,e,i,r,o,s,a,n,d;if(!this.hass||!this.stateObj)return h``;const c=v(this.stateObj),u=null!==(t=this.stateObj)&&void 0!==t&&t.attributes.brightness?Math.round(this.stateObj.attributes.brightness/2.55):0,g="on"===(null===(e=this.stateObj)||void 0===e?void 0:e.state)?1:0,b=this._getColorForLightEntity(this.stateObj,void 0,void 0);let f;const p=null===(i=this.stateObj)||void 0===i?void 0:i.entity_id;"hs"===(null===(r=this.stateObj)||void 0===r?void 0:r.attributes.supported_color_modes[0])||"rgb"===(null===(o=this.stateObj)||void 0===o?void 0:o.attributes.supported_color_modes[0])||"rgbw"===(null===(s=this.stateObj)||void 0===s?void 0:s.attributes.supported_color_modes[0])?f=[{service_data:{entity_id:p,rgb_color:[240,85,68]},color:"#f05544"},{service_data:{entity_id:p,rgb_color:[125,219,84]},color:"#7DDB54"},{service_data:{entity_id:p,rgb_color:[17,34,68]},color:"#112244"},{service_data:{entity_id:p,rgb_color:[247,217,89]},color:"#f7d959"},{service_data:{entity_id:p,rgb_color:[136,119,119]},color:"#887777"},{service_data:{entity_id:p,rgb_color:[255,181,245]},color:"#FFB5F5"}]:"brightness"===(null===(a=this.stateObj)||void 0===a?void 0:a.attributes.supported_color_modes[0])&&(f=[{service_data:{entity_id:p,brightness:65},color:"#D1CFCF"},{service_data:{entity_id:p,brightness:120},color:"#DCDCDC"},{service_data:{entity_id:p,brightness:220},color:"#F0F0F0"}]);let w=0;if(f){const t=Math.ceil(f.length/3);for(let e=0;e<t;e++){this.actionRows[e]=[];for(let t=0;t<3;t++)f[3*e+t]&&(this.actionRows[e][t]=f[3*e+t])}}return h` <div class="content">
      ${c?h`
            <h2 id="brightnessValue">
              ${"off"===(null===(n=this.stateObj)||void 0===n?void 0:n.state)?this.hass.localize("component.light.state._.off"):u+"%"}
            </h2>
            <div class="range-holder">
              <input
                type="range"
                id="iosSlider"
                style=" --slider-width: 130px;
              --slider-height: 330px; --slider-border-radius: 40px;
              --slider-color:${b}; --slider-thumb-color:#ddd;
              --slider-track-color:#ddd"
                .value=${"off"===(null===(d=this.stateObj)||void 0===d?void 0:d.state)?String(0):String(u)}
                @change=${t=>this._setBrightness(this.stateObj,t.target.value)}
              />
            </div>
          `:h`
            <h2 id="switchValue">
              ${m(this.hass.localize,this.stateObj,this.hass.locale)}
            </h2>

            <!-- <label id="SwitchContainer">
              <input
                id="iosSwitch"
                type="checkbox"
                ?checked=${!!g}
                @change=${()=>this._switch(this.stateObj)}
              />
              <div id="SliderTrack"></div>
            </label> -->
            <div class="switch-holder">
              <input
                class="sliderOnOff ${l({switchON:1===g,switchOFF:0===g})}"
                type="range"
                id="iosSlider"
                style="--switch-width: 150px;
                --switch-height: 380px;
                --slider-border-radius: 40px;
                --switch-track-color: #ddd;"
                value="0"
                min="0"
                max="1"
                .value=${String(g)}
                @change=${()=>this._switch(this.stateObj)}
              />
            </div>
          `}
      ${f&&f.length>0?h`
            <div class="action-holder">
              ${this.actionRows.map((t=>{w++;let e=0;return h` <div class="action-row">
                  ${t.map((t=>(e++,h` <div
                      class="action"
                      style="--size: 45px;"
                      @click=${t=>this._activateAction(t)}
                      data-service="${w}#${e}"
                    >
                      <span
                        class="color"
                        style="background-color:${t.color};
                                        border-color:${t.color};
                                        --size:50px"
                        ;
                      >
                      </span>
                    </div>`)))}
                </div>`}))}
            </div>
          `:h``}
      <div class="contentfooter">
        <ha-icon-button
          class="settings"
          .path=${"M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"}
          @click=${()=>this._openSettings()}
        ></ha-icon-button>
      </div>
    </div>`}},{kind:"method",key:"_render_colorPicker",value:function(){var t;if(!this.hass||!this.stateObj)return h``;const e=w(this.stateObj,y.COLOR_TEMP),i=w(this.stateObj,y.WHITE),r=w(this.stateObj,y.RGBWW),o=!r&&w(this.stateObj,y.RGBW),s=r||o||_(this.stateObj);return h`
      <div class="content">
        ${v(this.stateObj)?h`
              <ha-labeled-slider
                caption=${this.hass.localize("ui.card.light.brightness")}
                icon="hass:brightness-5"
                min="0"
                max="100"
                value=${this._brightnessSliderValue}
                @change=${this._brightnessSliderChanged}
                pin
              ></ha-labeled-slider>
            `:""}
        ${"on"===this.stateObj.state?h`
              ${e||s?h`<hr />`:""}
              ${s&&(e||i)?h`<ha-button-toggle-group
                    fullWidth
                    .buttons=${this._toggleButtons(e,i)}
                    .active=${this._mode}
                    @value-changed=${this._modeChanged}
                  ></ha-button-toggle-group>`:""}
              ${!e||(s||i)&&this._mode!==y.COLOR_TEMP?"":h`
                    <ha-labeled-slider
                      class="color_temp"
                      caption=${this.hass.localize("ui.card.light.color_temperature")}
                      icon="hass:thermometer"
                      .min=${this.stateObj.attributes.min_mireds}
                      .max=${this.stateObj.attributes.max_mireds}
                      .value=${this._ctSliderValue}
                      @change=${this._ctSliderChanged}
                      pin
                    ></ha-labeled-slider>
                  `}
              ${!s||(e||i)&&"color"!==this._mode?"":h`
                    <div class="segmentationContainer">
                      <ha-color-picker
                        class="color"
                        @colorselected=${this._colorPicked}
                        .desiredRgbColor=${this._colorPickerColor}
                        throttle="500"
                        .hueSegments=${this._hueSegments}
                        .saturationSegments=${this._saturationSegments}
                      >
                      </ha-color-picker>
                      <ha-icon-button
                        .path=${d}
                        @click=${this._segmentClick}
                        class="segmentationButton"
                      ></ha-icon-button>
                    </div>

                    ${o||r?h`<ha-labeled-slider
                          .caption=${this.hass.localize("ui.card.light.color_brightness")}
                          icon="hass:brightness-7"
                          max="100"
                          .value=${this._colorBrightnessSliderValue}
                          @change=${this._colorBrightnessSliderChanged}
                          pin
                        ></ha-labeled-slider>`:""}
                    ${o?h`
                          <ha-labeled-slider
                            .caption=${this.hass.localize("ui.card.light.white_value")}
                            icon="hass:file-word-box"
                            max="100"
                            .name=${"wv"}
                            .value=${this._wvSliderValue}
                            @change=${this._wvSliderChanged}
                            pin
                          ></ha-labeled-slider>
                        `:""}
                    ${r?h`
                          <ha-labeled-slider
                            .caption=${this.hass.localize("ui.card.light.cold_white_value")}
                            icon="hass:file-word-box-outline"
                            max="100"
                            .name=${"cw"}
                            .value=${this._cwSliderValue}
                            @change=${this._wvSliderChanged}
                            pin
                          ></ha-labeled-slider>
                          <ha-labeled-slider
                            .caption=${this.hass.localize("ui.card.light.warm_white_value")}
                            icon="hass:file-word-box"
                            max="100"
                            .name=${"ww"}
                            .value=${this._wwSliderValue}
                            @change=${this._wvSliderChanged}
                            pin
                          ></ha-labeled-slider>
                        `:""}
                  `}
              ${M(this.stateObj,k)&&null!==(t=this.stateObj.attributes.effect_list)&&void 0!==t&&t.length?h`
                    <hr />
                    <ha-select
                      .label=${this.hass.localize("ui.card.light.effect")}
                      .value=${this.stateObj.attributes.effect||""}
                      fixedMenuPosition
                      naturalMenuWidth
                      @selected=${this._effectChanged}
                      @closed=${C}
                    >
                      ${this.stateObj.attributes.effect_list.map((t=>h`
                          <mwc-list-item .value=${t}>
                            ${t}
                          </mwc-list-item>
                        `))}
                    </ha-select>
                  `:""}
            `:""}
        <ha-attributes
          .hass=${this.hass}
          .stateObj=${this.stateObj}
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,rgbw_color,rgbww_color,xy_color,min_mireds,max_mireds,entity_id,supported_color_modes,color_mode"
        ></ha-attributes>
        <div class="contentfooter">
          <mwc-button
            slot="primaryAction"
            @click=${()=>this._closeSettings()}
            class="settings"
          >
            ${this.hass.localize("ui.common.back")}
          </mwc-button>
        </div>
      </div>
      <!-- <ha-icon-button
        class="settings"
        .path=${"M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"}
        @click=${()=>this._closeSettings()}
      ></ha-icon-button> -->
    `}},{kind:"method",key:"willUpdate",value:function(t){if(c(u(i.prototype),"willUpdate",this).call(this,t),!t.has("stateObj"))return;const e=this.stateObj,r=t.get("stateObj");if("on"===e.state){(null==r?void 0:r.entity_id)===e.entity_id&&(null==r?void 0:r.state)===e.state||(this._mode=x(this.stateObj)?"color":this.stateObj.attributes.color_mode);let t=100;if(this._brightnessAdjusted=void 0,e.attributes.color_mode===y.RGB&&!w(e,y.RGBWW)&&!w(e,y.RGBW)){const i=Math.max(...e.attributes.rgb_color);i<255&&(this._brightnessAdjusted=i,t=this._brightnessAdjusted/255*100)}this._brightnessSliderValue=Math.round(e.attributes.brightness*t/255),this._ctSliderValue=e.attributes.color_temp,this._wvSliderValue=e.attributes.color_mode===y.RGBW?Math.round(100*e.attributes.rgbw_color[3]/255):void 0,this._cwSliderValue=e.attributes.color_mode===y.RGBWW?Math.round(100*e.attributes.rgbww_color[3]/255):void 0,this._wwSliderValue=e.attributes.color_mode===y.RGBWW?Math.round(100*e.attributes.rgbww_color[4]/255):void 0;const i=S(e);this._colorBrightnessSliderValue=i?Math.round(100*Math.max(...i.slice(0,3))/255):void 0,this._colorPickerColor=null==i?void 0:i.slice(0,3)}else this._brightnessSliderValue=0}},{kind:"method",key:"_switch",value:function(t){this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id})}},{kind:"method",key:"_setBrightness",value:function(t,e){this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.55*e})}},{kind:"method",key:"_activateAction",value:function(t){if(t.target.dataset&&t.target.dataset.service){const[e,i]=t.target.dataset.service.split("#",2),r=this.actionRows[e-1][i-1];this.hass.callService("light","turn_on",r.service_data)}}},{kind:"method",key:"_getColorForLightEntity",value:function(t,e,i){let r;return t&&(t.attributes.rgb_color?(r=`rgb(${t.attributes.rgb_color.join(",")})`,t.attributes.brightness&&(r=this._applyBrightnessToColor(r,(t.attributes.brightness+245)/5))):e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?(r=this._getLightColorBasedOnTemperature(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds),t.attributes.brightness&&(r=this._applyBrightnessToColor(r,(t.attributes.brightness+245)/5))):r=i&&t.attributes.brightness?this._applyBrightnessToColor(this._getDefaultColorForState(),(t.attributes.brightness+245)/5):this._getDefaultColorForState()),r}},{kind:"method",key:"_applyBrightnessToColor",value:function(t,e){const i=new G(this._getColorFromVariable(t));if(i.isValid){const t=i.mix("black",100-e).toString();if(t)return t}return t}},{kind:"method",key:"_getColorFromVariable",value:function(t){return void 0!==t&&"var"===t.substring(0,3)?window.getComputedStyle(document.documentElement).getPropertyValue(t.substring(4).slice(0,-1)).trim():t}},{kind:"method",key:"_getLightColorBasedOnTemperature",value:function(t,e,i){const r=new G("rgb(255, 160, 0)"),o=new G("rgb(166, 209, 255)"),s=new G("white"),a=(t-e)/(i-e)*100;return a<50?q(o).mix(s,2*a).toRgbString():q(s).mix(r,2*(a-50)).toRgbString()}},{kind:"method",key:"_getDefaultColorForState",value:function(){return"#f7d959"}},{kind:"method",key:"_openSettings",value:function(){this.settingsOn=!1}},{kind:"method",key:"_closeSettings",value:function(){this.settingsOn=!0}},{kind:"field",key:"_toggleButtons",value:()=>g(((t,e)=>{const i=[{label:"Color",value:"color"}];return t&&i.push({label:"Temperature",value:y.COLOR_TEMP}),e&&i.push({label:"White",value:y.WHITE}),i}))},{kind:"method",key:"_modeChanged",value:function(t){this._mode=t.detail.value}},{kind:"method",key:"_effectChanged",value:function(t){const e=t.target.value;e&&this.stateObj.attributes.effect!==e&&this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,effect:e})}},{kind:"method",key:"_brightnessSliderChanged",value:function(t){const e=Number(t.target.value);if(!isNaN(e))if(this._brightnessSliderValue=e,this._mode!==y.WHITE)if(this._brightnessAdjusted){const t=this.stateObj.attributes.rgb_color||[0,0,0];this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness_pct:e,rgb_color:this._adjustColorBrightness(t,this._brightnessAdjusted,!0)})}else this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness_pct:e});else this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,white:Math.min(255,Math.round(255*e/100))})}},{kind:"method",key:"_ctSliderChanged",value:function(t){const e=Number(t.target.value);isNaN(e)||(this._ctSliderValue=e,this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,color_temp:e}))}},{kind:"method",key:"_wvSliderChanged",value:function(t){const e=t.target;let i=Number(e.value);const r=e.name;if(isNaN(i))return;"wv"===r?this._wvSliderValue=i:"cw"===r?this._cwSliderValue=i:"ww"===r&&(this._wwSliderValue=i),i=Math.min(255,Math.round(255*i/100));const o=S(this.stateObj);if("wv"===r){const t=o||[0,0,0,0];return t[3]=i,void this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,rgbw_color:t})}const s=o||[0,0,0,0,0];for(;s.length<5;)s.push(0);s["cw"===r?3:4]=i,this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,rgbww_color:s})}},{kind:"method",key:"_colorBrightnessSliderChanged",value:function(t){var e;const i=t.target;let r=Number(i.value);if(isNaN(r))return;const o=this._colorBrightnessSliderValue;this._colorBrightnessSliderValue=r,r=255*r/100;const s=(null===(e=S(this.stateObj))||void 0===e?void 0:e.slice(0,3))||[255,255,255];this._setRgbWColor(this._adjustColorBrightness(o?this._adjustColorBrightness(s,255*o/100,!0):s,r))}},{kind:"method",key:"_segmentClick",value:function(){24===this._hueSegments&&8===this._saturationSegments?(this._hueSegments=0,this._saturationSegments=0):(this._hueSegments=24,this._saturationSegments=8)}},{kind:"method",key:"_adjustColorBrightness",value:function(t,e,i=!1){if(void 0!==e&&255!==e){let r=e/255;i&&(r=1/r),t[0]=Math.min(255,Math.round(t[0]*r)),t[1]=Math.min(255,Math.round(t[1]*r)),t[2]=Math.min(255,Math.round(t[2]*r))}return t}},{kind:"method",key:"_setRgbWColor",value:function(t){if(w(this.stateObj,y.RGBWW)){const e=this.stateObj.attributes.rgbww_color?[...this.stateObj.attributes.rgbww_color]:[0,0,0,0,0];this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,rgbww_color:t.concat(e.slice(3))})}else if(w(this.stateObj,y.RGBW)){const e=this.stateObj.attributes.rgbw_color?[...this.stateObj.attributes.rgbw_color]:[0,0,0,0];this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,rgbw_color:t.concat(e.slice(3))})}}},{kind:"method",key:"_colorPicked",value:function(t){if(this._colorPickerColor=[t.detail.rgb.r,t.detail.rgb.g,t.detail.rgb.b],w(this.stateObj,y.RGBWW)||w(this.stateObj,y.RGBW))this._setRgbWColor(this._colorBrightnessSliderValue?this._adjustColorBrightness([t.detail.rgb.r,t.detail.rgb.g,t.detail.rgb.b],255*this._colorBrightnessSliderValue/100):[t.detail.rgb.r,t.detail.rgb.g,t.detail.rgb.b]);else if(w(this.stateObj,y.RGB)){const e=[t.detail.rgb.r,t.detail.rgb.g,t.detail.rgb.b];this._brightnessAdjusted?this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness_pct:this._brightnessSliderValue,rgb_color:this._adjustColorBrightness(e,this._brightnessAdjusted,!0)}):this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,rgb_color:e})}else this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,hs_color:[t.detail.hs.h,100*t.detail.hs.s]})}},{kind:"get",static:!0,key:"styles",value:function(){return b`
      :host {
        background-color: #000 !important;
      }
      .popup-wrapper {
        margin-top: 64px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .range-holder {
        --slider-height: 380px;
        --slider-width: 150px;
        height: var(--slider-height);
        width: var(--slider-width);
        position: relative;
        display: block;
      }
      .range-holder input[type="range"] {
        outline: 0;
        border: 0;
        border-radius: var(--slider-border-radius, 12px);
        width: var(--slider-height);
        margin: 0;
        transition: box-shadow 0.2s ease-in-out;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        overflow: hidden;
        height: var(--slider-width);
        -webkit-appearance: none;
        background-color: var(--slider-track-color);
        position: absolute;
        top: calc(50% - (var(--slider-width) / 2));
        right: calc(50% - (var(--slider-height) / 2));
      }
      .range-holder input[type="range"]::-webkit-slider-runnable-track {
        height: var(--slider-width);
        -webkit-appearance: none;
        background-color: var(--slider-track-color);
        margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      .range-holder input[type="range"]::-webkit-slider-thumb {
        width: 25px;
        border-right: 10px solid var(--slider-color);
        border-left: 10px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        -webkit-appearance: none;
        height: 80px;
        cursor: grabbing;
        background: var(--slider-color);
        box-shadow: -350px 0 0 350px var(--slider-color),
          inset 0 0 0 80px var(--slider-thumb-color);
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        top: calc((var(--slider-width) - 80px) / 2);
      }
      .range-holder input[type="range"]::-moz-thumb-track {
        height: var(--slider-width);
        background-color: var(--slider-track-color);
        margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      .range-holder input[type="range"]::-moz-range-thumb {
        width: 5px;
        border-right: 12px solid var(--slider-color);
        border-left: 12px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        height: calc(var(--slider-width) * 0.4);
        cursor: ew-resize;
        background: var(--slider-color);
        box-shadow: -350px 0 0 350px var(--slider-color),
          inset 0 0 0 80px var(--slider-thumb-color);
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        top: calc((var(--slider-width) - 80px) / 2);
      }
      #brightnessValue {
        text-align: center;
        margin: 0;
      }
      .switch-holder {
        --switch-height: 380px;
        --switch-width: 150px;
        height: var(--switch-height);
        width: var(--switch-width);
        position: relative;
        display: block;
      }
      #switchValue {
        text-align: center;
      }
      .switch-holder input[type="range"] {
        outline: 0;
        border: 0;
        border-radius: var(--slider-border-radius, 12px);
        width: calc(var(--switch-height) - 20px);
        margin: 0;
        transition: 1s ease-in-out;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        overflow: hidden;
        height: calc(var(--switch-width) - 20px);
        -webkit-appearance: none;
        background-color: var(--switch-track-color);
        padding: 10px;
        position: absolute;
        top: calc(50% - (var(--switch-width) / 2));
        right: calc(50% - (var(--switch-height) / 2));
      }
      .switch-holder input[type="range"]::-webkit-slider-runnable-track {
        height: calc(var(--switch-width) - 20px);
        -webkit-appearance: none;
        color: var(--switch-track-color);
        margin-top: -1px;
        transition: 0.2s ease-in-out;
      }
      .switch-holder input[type="range"]::-webkit-slider-thumb {
        width: calc(var(--switch-height) / 2);
        -webkit-appearance: none;
        height: calc(var(--switch-width) - 20px);
        cursor: ew-resize;
        background: var(--switch-color);
        transition: 0.2s ease-in-out;
        border: none;
        /* box-shadow: -1px 1px 20px 0px rgba(0, 0, 0, 0.75); */
        position: relative;
        top: 0;
        border-radius: var(--slider-border-radius, 12px);
      }

      .action-holder {
        display: flex;
        flex-direction: column;
        /* margin-top: 20px; */
      }
      .action-row {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10px;
      }
      .action-row:last-child {
        padding: 0;
      }
      .action-holder .action {
        display: inline-block;
        margin-right: 4px;
        margin-left: 4px;
        cursor: pointer;
      }
      .action-holder.action:nth-child(4n) {
        margin-right: 0;
      }
      .action-holder .action .color {
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: block;
        border: 1px solid #fff;
        line-height: var(--size);
        text-align: center;
        pointer-events: none;
      }
      .action-holder .action .color ha-icon {
        pointer-events: none;
      }
      .action-holder .action .name {
        width: var(--size);
        display: block;
        color: #fff;
        font-size: 9px;
        margin-top: 3px;
        text-align: center;
        pointer-events: none;
      }
      .sliderOnOff input[type="range"] {
        transition: 1s ease-in-out;
      }
      .switchON {
        --switch-color: var(--switch-checked-button-color);
      }
      .switchOFF {
        --switch-color: var(--switch-unchecked-button-color);
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .content > * {
        width: 100%;
      }
      .contentfooter {
        position: relative;
        width: 100%;
        height: 45px;
      }

      .settings {
        position: absolute;
        bottom: 0;
        right: 0;
        width: auto;
        height: auto;
      }
      .color_temp {
        --ha-slider-background: -webkit-linear-gradient(
          right,
          rgb(255, 160, 0) 0%,
          white 50%,
          rgb(166, 209, 255) 100%
        );
        /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
        --paper-slider-knob-start-border-color: var(--primary-color);
        margin-bottom: 4px;
      }

      .segmentationContainer {
        position: relative;
        max-height: 500px;
        display: flex;
        justify-content: center;
      }

      ha-button-toggle-group {
        margin-bottom: 8px;
      }

      ha-color-picker {
        --ha-color-picker-wheel-borderwidth: 5;
        --ha-color-picker-wheel-bordercolor: white;
        --ha-color-picker-wheel-shadow: none;
        --ha-color-picker-marker-borderwidth: 2;
        --ha-color-picker-marker-bordercolor: white;
      }

      .segmentationButton {
        position: absolute;
        top: 5%;
        left: 0;
        color: var(--secondary-text-color);
      }

      hr {
        border-color: var(--divider-color);
        border-bottom: none;
        margin: 16px 0;
      }

      #SwitchContainer {
        background: #f0f0f0;
        height: 260px;
        width: 90px;
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        margin-top: 15%;
        margin-bottom: 20%;
      }

      #iosSwitch {
        opacity: 0;
        width: 0;
        height: 0;
      }

      #SwitchContainer:before {
        -webkit-transform: translateY(-125px);
        -ms-transform: translateY(-125px);
        transform: translateY(-125px);
      }

      #iosSwitch:checked {
        -webkit-transform: translateY(-125px);
        -ms-transform: translateY(-125px);
        transform: translateY(-125px);
      }

      #SliderTrack {
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      #SliderTrack::before {
        position: absolute;
        content: "";
        margin: 5px 0 0 5px;
        height: 125px;
        width: 80px;
        left: 0px;
        top: 125px;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 18px;
        background-color: #f8cc46;
      }
    `}}]}}),s);
