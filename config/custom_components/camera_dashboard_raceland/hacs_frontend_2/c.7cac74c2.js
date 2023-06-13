import{_ as e,d as t,g as i,x as r,y as o,o as a,q as n}from"./main-b570e60a.js";import"./c.3d7f1758.js";import"./c.2aff7a3c.js";import"./c.5a5021e9.js";function s(e,t){if(t<1){const i=function(e){const t=`${e}`.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}e([n("more-info-fan")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"oscillationToggleChecked",value:()=>!1},{kind:"field",decorators:[i({type:String})],key:"percentageSliderValue",value:()=>"0"},{kind:"field",decorators:[i({attribute:!1})],key:"actionRows",value:()=>[]},{kind:"field",decorators:[i({attribute:!1})],key:"settingsOn",value:()=>!0},{kind:"method",key:"get",value:function(e){const t=e.target,i=e.changedTouches[0],r=parseFloat(t.getAttribute("min"))||0,o=parseFloat(t.getAttribute("max"))||100,a=parseFloat(t.getAttribute("step"))||1,n=o-r;let d;const l=t.getBoundingClientRect(),c=100/l.width*0/100;return d=100-100/l.height*(i.clientY-l.top),d<0?d=0:d>100&&(d=100),d<50?d-=(100-2*d)*c:d>50&&(d+=2*(d-50)*c),r+s(n*(d/100),a)}},{kind:"method",key:"set",value:function(e){e.preventDefault(),e.target.value=this.get(e),function(e,t){if(!e||!t)return;const i=new Event(t,{bubbles:!0});e.dispatchEvent(i)}(e.target,"touchend"===e.type?"change":"input")}},{kind:"method",key:"firstUpdated",value:function(){if("ontouchstart"in document.documentElement){const e=this.shadowRoot.getElementById("iosSlider");e.style.userSelect="none",e.style.touchAction="manipulation",["touchstart","touchmove","touchend"].forEach((t=>{e.addEventListener(t,(e=>this.set(e)),!1)}))}}},{kind:"method",key:"render",value:function(){var e;return r`
      <div class="sliderContent">
        <div class="range-holder">
          <input
            type="range"
            id="iosSlider"
            class="iosSlider ${o({})}"
            list="steplist"
            step="33"
            value="0"
            min="0"
            max="99"
            style=" --slider-width: 150px;
              --slider-height: 378px; --slider-border-radius: 40px;
               --slider-thumb-color:#ddd;
              "
            .value=${"off"===(null===(e=this.stateObj)||void 0===e?void 0:e.state)?String(0):String(this.percentageSliderValue)}
            @change=${this.percentageChanged}
          />
          <div class="datals">
            <span class="opt"></span>
            <span class="opt"></span>
            <span class="opt"></span>
          </div>
          <svg
            version="1.1"
            id="Camada_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 150 95"
            style="enable-background:new 0 0 150 95;"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M0,55c0,22.1,17.9,40,40,40h70c22.1,0,40-17.9,40-40V0H0V55z"
            />
          </svg>
        </div>
      </div>
    `}},{kind:"method",key:"presetModeChanged",value:function(e){var t,i;const r=null===(t=this.stateObj)||void 0===t?void 0:t.attributes.preset_mode,o=e.target.value;o&&r!==o&&this.hass.callService("fan","set_preset_mode",{entity_id:null===(i=this.stateObj)||void 0===i?void 0:i.entity_id,preset_mode:o})}},{kind:"method",key:"willUpdate",value:function(e){if(!e.has("stateObj"))return;const t=e.get("stateObj"),i=this.stateObj;i&&(this.oscillationToggleChecked=i.attributes.oscillating,this.percentageSliderValue=i.attributes.percentage),"on"===i.state&&((null==t?void 0:t.entity_id)!==i.entity_id||(null==t?void 0:t.attributes.percentage)!==i.attributes.percentage?(this.oscillationToggleChecked=i.attributes.oscillating,this.percentageSliderValue=i.attributes.percentage):this.percentageSliderValue="0")}},{kind:"method",key:"stopPropagation",value:function(e){e.stopPropagation()}},{kind:"method",key:"percentageChanged",value:function(e){var t;const i=parseInt(this.stateObj.attributes.percentage,10),r=e.target.value;isNaN(r)||i===r||(this.percentageSliderValue=r,this.hass.callService("fan","set_percentage",{entity_id:null===(t=this.stateObj)||void 0===t?void 0:t.entity_id,percentage:r}))}},{kind:"method",key:"oscillationToggleChanged",value:function(e){var t,i;const r=null===(t=this.stateObj)||void 0===t?void 0:t.attributes.oscillating,o=e.target.checked;r!==o&&this.hass.callService("fan","oscillate",{entity_id:null===(i=this.stateObj)||void 0===i?void 0:i.entity_id,oscillating:o})}},{kind:"method",key:"onDirectionReverse",value:function(){var e;this.hass.callService("fan","set_direction",{entity_id:null===(e=this.stateObj)||void 0===e?void 0:e.entity_id,direction:"reverse"})}},{kind:"method",key:"onDirectionForward",value:function(){var e;this.hass.callService("fan","set_direction",{entity_id:null===(e=this.stateObj)||void 0===e?void 0:e.entity_id,direction:"forward"})}},{kind:"method",key:"computeIsRotatingReverse",value:function(e){return"reverse"===e.attributes.direction}},{kind:"method",key:"computeIsRotatingForward",value:function(e){return"forward"===e.attributes.direction}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      #Camada_1 {
        position: absolute;
        bottom: 0;
        width: calc(100% + 1px);
        height: auto;
        /* right: calc(50% - (380px / 2)); */
        fill: grey;
        user-select: none;
        pointer-events: none;
      }

      .range-holder {
        --slider-height: 379px;
        --slider-width: 150px;
        height: var(--slider-height);
        width: var(--slider-width);
        position: relative;
        display: block;
        overflow: hidden;
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
        width: calc(var(--slider-height) / 4);
        border-right: 10px solid var(--slider-color);
        border-left: 10px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        -webkit-appearance: none;
        height: 0px;
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
        width: 0px;
        border-right: 12px solid var(--slider-color);
        border-left: 12px solid var(--slider-color);
        border-top: 20px solid var(--slider-color);
        border-bottom: 20px solid var(--slider-color);
        height: calc(var(--slider-width) * 0.4);
        cursor: grabbing;
        background: var(--slider-color);
        box-shadow: -350px 0 0 350px var(--slider-color),
          inset 0 0 0 80px var(--slider-thumb-color);
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        top: calc((var(--slider-width) - 80px) / 2);
      }
      .iosSlider {
        --slider-color: var(--accent-color);
      }
      .sliderOff {
        --slider-color: grey;
      }
      .sliderContent {
        margin: 50px 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media only screen and (max-width: 600px) {
        .sliderContent {
          margin-top: 50%;
          margin-bottom: 50px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .datals {
        height: 380px;
        width: 150px;
        display: grid;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 25%);
        position: absolute;
        top: 0;
        /* right: calc(50% - (380px / 2)); */
        user-select: none;
        pointer-events: none;
      }

      .opt {
        content: "";
        display: block;
        border-bottom: 1px solid grey;
        width: 100%;
        z-index: 2;
        user-select: none;
        pointer-events: none;
      }

      .range__list__opt:before {
        content: "";
        display: block;
        width: 0;
        height: auto;
        padding-left: 3px;
        text-indent: 0;
      }
    `}}]}}),t);
