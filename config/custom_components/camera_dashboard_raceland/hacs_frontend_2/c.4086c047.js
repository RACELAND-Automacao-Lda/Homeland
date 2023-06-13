import{_ as e,d as t,g as a,x as i,f as o,q as s}from"./main-b570e60a.js";import{u as n}from"./c.5a5021e9.js";import"./c.a6c70980.js";e([s("ha-time-input")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[a()],key:"value",value:void 0},{kind:"field",decorators:[a()],key:"label",value:void 0},{kind:"field",decorators:[a({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[a({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:()=>!1},{kind:"method",key:"render",value:function(){var e;const t=n(this.locale),a=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[];let o=a[0];const s=Number(a[0]);return s&&t&&s>12&&s<24&&(o=String(s-12).padStart(2,"0")),t&&0===s&&(o="12"),i`
      <ha-base-time-input
        .label=${this.label}
        .hours=${Number(o)}
        .minutes=${Number(a[1])}
        .seconds=${Number(a[2])}
        .format=${t?12:24}
        .amPm=${t&&(s>=12?"PM":"AM")}
        .disabled=${this.disabled}
        @value-changed=${this._timeChanged}
        .enableSecond=${this.enableSecond}
      ></ha-base-time-input>
    `}},{kind:"method",key:"_timeChanged",value:function(e){e.stopPropagation();const t=e.detail.value,a=n(this.locale);let i=t.hours||0;t&&a&&("PM"===t.amPm&&i<12&&(i+=12),"AM"===t.amPm&&12===i&&(i=0));const s=`${i.toString().padStart(2,"0")}:${t.minutes?t.minutes.toString().padStart(2,"0"):"00"}:${t.seconds?t.seconds.toString().padStart(2,"0"):"00"}`;s!==this.value&&(this.value=s,o(this,"change"),o(this,"value-changed",{value:s}))}}]}}),t);
