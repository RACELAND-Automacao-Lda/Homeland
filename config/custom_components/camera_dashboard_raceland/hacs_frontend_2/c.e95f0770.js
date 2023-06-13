import{_ as e,d as t,g as a,t as s,k as l,l as i,af as o,J as r,o as n,q as d}from"./main-b570e60a.js";import{f as h}from"./c.5a5021e9.js";import{g as c}from"./c.2aff7a3c.js";const u=(e,t,a)=>{const s=((e,t,a)=>100*(e-t)/(a-t))(((e,t,a)=>isNaN(e)||isNaN(t)||isNaN(a)?0:e>a?a:e<t?t:e)(e,t,a),t,a);return 180*s/100};e([d("ha-gauge")],(function(e,t){class d extends t{constructor(...t){super(...t),e(this)}}return{F:d,d:[{kind:"field",decorators:[a({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[a({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[a({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[a({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[a()],key:"locale",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[a()],key:"levels",value:void 0},{kind:"field",decorators:[a()],key:"label",value:()=>""},{kind:"field",decorators:[s()],key:"_angle",value:()=>0},{kind:"field",decorators:[s()],key:"_updated",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(e){l(i(d.prototype),"firstUpdated",this).call(this,e),c((()=>{this._updated=!0,this._angle=u(this.value,this.min,this.max),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){l(i(d.prototype),"updated",this).call(this,e),this._updated&&e.has("value")&&(this._angle=u(this.value,this.min,this.max),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return o`
      <svg viewBox="-50 -50 100 50" class="gauge">
        ${this.needle&&this.levels?"":o`
           <path
          class="dial"
          d="M -40 0 A 40 40 0 0 1 40 0"
        ></path>
        `}

        ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let a;if(0===t&&e.level!==this.min){const e=u(this.min,this.min,this.max);a=o`<path
                        stroke="var(--accent-color)"
                        class="level"
                        d="M
                          ${0-40*Math.cos(e*Math.PI/180)}
                          ${0-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 40 0
                        "
                      ></path>`}const s=u(e.level,this.min,this.max);return o`${a}<path
                      stroke="${e.stroke}"
                      class="level"
                      d="M
                        ${0-40*Math.cos(s*Math.PI/180)}
                        ${0-40*Math.sin(s*Math.PI/180)}
                       A 40 40 0 0 1 40 0
                      "
                    ></path>`})):""}
        ${this.needle?o`
            <!-- <path
                class="needle"
                d="M -25 -2.5 L -47.5 0 L -25 2.5 z"
                style=${r({transform:`rotate(${this._angle}deg)`})}
              > -->
              <!-- <path
                class="pointer"
                d="M -40 0 L -39.945 -0.142 z"
                style=${r({transform:`rotate(${this._angle}deg)`})}
              > -->
              <circle class="needle" style=${r({transform:`rotate(${this._angle}deg)`})} cx="-40" cy="0" r="5"/>

              `:o`<path
                class="value"
                d="M -40 0 A 40 40 0 1 0 40 0"
                style=${r({transform:`rotate(${this._angle}deg)`})}
              >`}
        </path>
        <path
          fill="var(--card-background-color, white)"
          opacity="1"
          d="M -46.6868 -8.7515 A 1 1 0 0 0 -32 -5.9878 L 31.9436 -5.9878 L 32.5 20 L -70 19 L -46.6868 -8.7515 M 31.9436 -5.9878 A 1 1 0 0 0 46.6868 -8.7515 L 64 20 L 32.5 20 L 31.9436 -5.9878"
        ></path>
      </svg>
      <svg class="text">
        <text class="value-text">
          ${this.valueText||h(this.value,this.locale)} ${this.label.substring(0,10)}
        </text>
      </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      :host {
        position: relative;
      }
      .dial {
        fill: none;
        stroke: var(--primary-background-color);
        stroke-width: 15;
        /* stroke-linecap: round; */
      }
      .value {
        fill: none;
        stroke-width: 15;
        stroke: var(--gauge-color);
        transition: all 1s cubic-bezier(0.19, 0.47, 0.25, 1) 0s;
        /* stroke-linecap: round; */
      }
      .pointer {
        fill: var(--primary-text-color);
        transition: all 1s ease 0s;
        stroke-width: 10;
        stroke-linecap: round;
      }
      .needle {
        fill: white;
        transition: all 1s ease 0s;
      }
      .level {
        fill: none;
        stroke-width: 15;
        /* stroke-linecap: round; */
      }
      .gauge {
        display: block;
      }
      .text {
        position: absolute;
        max-height: 40%;
        max-width: 120px;
        left: 50%;
        bottom: -6%;
        transform: translate(-50%, 0%);
      }
      .value-text {
        font-size: 1.2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 120px;
        fill: var(--primary-text-color);
        text-anchor: middle;
      }
    `}}]}}),t);
