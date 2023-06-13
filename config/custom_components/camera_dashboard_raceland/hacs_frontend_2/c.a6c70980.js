import{_ as e,d as i,g as t,x as a,f as l,o as d,q as s}from"./main-b570e60a.js";import{s as o}from"./c.2aff7a3c.js";e([s("ha-base-time-input")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t({type:Boolean})],key:"autoValidate",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[t({type:Number})],key:"format",value:()=>12},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[t({type:Number})],key:"hours",value:()=>0},{kind:"field",decorators:[t({type:Number})],key:"minutes",value:()=>0},{kind:"field",decorators:[t({type:Number})],key:"seconds",value:()=>0},{kind:"field",decorators:[t({type:Number})],key:"milliseconds",value:()=>0},{kind:"field",decorators:[t()],key:"hourLabel",value:()=>""},{kind:"field",decorators:[t()],key:"minLabel",value:()=>""},{kind:"field",decorators:[t()],key:"secLabel",value:()=>""},{kind:"field",decorators:[t()],key:"millisecLabel",value:()=>""},{kind:"field",decorators:[t({type:Boolean})],key:"enableSecond",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"enableMillisecond",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"noHoursLimit",value:()=>!1},{kind:"field",decorators:[t()],key:"amPm",value:()=>"AM"},{kind:"field",decorators:[t()],key:"value",value:void 0},{kind:"method",key:"render",value:function(){return a`
      ${this.label?a`<label>${this.label}</label>`:""}
      <div class="time-input-wrap">
        <ha-textfield
          id="hour"
          type="number"
          inputmode="numeric"
          .value=${this.hours}
          .label=${this.hourLabel}
          name="hours"
          @input=${this._valueChanged}
          @focus=${this._onFocus}
          no-spinner
          .required=${this.required}
          .autoValidate=${this.autoValidate}
          maxlength="2"
          .max=${this._hourMax}
          min="0"
          .disabled=${this.disabled}
          suffix=":"
          class="hasSuffix"
        >
        </ha-textfield>
        <ha-textfield
          id="min"
          type="number"
          inputmode="numeric"
          .value=${this._formatValue(this.minutes)}
          .label=${this.minLabel}
          @input=${this._valueChanged}
          @focus=${this._onFocus}
          name="minutes"
          no-spinner
          .required=${this.required}
          .autoValidate=${this.autoValidate}
          maxlength="2"
          max="59"
          min="0"
          .disabled=${this.disabled}
          .suffix=${this.enableSecond?":":""}
          class=${this.enableSecond?"has-suffix":""}
        >
        </ha-textfield>
        ${this.enableSecond?a`<ha-textfield
              id="sec"
              type="number"
              inputmode="numeric"
              .value=${this._formatValue(this.seconds)}
              .label=${this.secLabel}
              @input=${this._valueChanged}
              @focus=${this._onFocus}
              name="seconds"
              no-spinner
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="2"
              max="59"
              min="0"
              .disabled=${this.disabled}
              .suffix=${this.enableMillisecond?":":""}
              class=${this.enableMillisecond?"has-suffix":""}
            >
            </ha-textfield>`:""}
        ${this.enableMillisecond?a`<ha-textfield
              id="millisec"
              type="number"
              .value=${this._formatValue(this.milliseconds,3)}
              .label=${this.millisecLabel}
              @input=${this._valueChanged}
              @focus=${this._onFocus}
              name="milliseconds"
              no-spinner
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="3"
              max="999"
              min="0"
              .disabled=${this.disabled}
            >
            </ha-textfield>`:""}
        ${24===this.format?"":a`<ha-select
              .required=${this.required}
              .value=${this.amPm}
              .disabled=${this.disabled}
              name="amPm"
              naturalMenuWidth
              fixedMenuPosition
              @selected=${this._valueChanged}
              @closed=${o}
            >
              <mwc-list-item value="AM">AM</mwc-list-item>
              <mwc-list-item value="PM">PM</mwc-list-item>
            </ha-select>`}
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(e){this[e.target.name]="amPm"===e.target.name?e.target.value:Number(e.target.value);const i={hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds};12===this.format&&(i.amPm=this.amPm),l(this,"value-changed",{value:i})}},{kind:"method",key:"_onFocus",value:function(e){e.target.select()}},{kind:"method",key:"_formatValue",value:function(e,i=2){return e.toString().padStart(i,"0")}},{kind:"get",key:"_hourMax",value:function(){return this.noHoursLimit?null:12===this.format?12:23}},{kind:"field",static:!0,key:"styles",value:()=>d`
    :host {
      display: block;
    }
    .time-input-wrap {
      display: flex;
      justify-content: flex-end;
      border-radius: var(--mdc-shape-small, 4px) var(--mdc-shape-small, 4px) 0 0;
      overflow: hidden;
      position: relative;
    }
    ha-textfield {
      width: 40px;
      text-align: center;
      --mdc-shape-small: 0;
      --text-field-appearance: none;
      --text-field-padding: 0 4px;
      --text-field-suffix-padding-left: 2px;
      --text-field-suffix-padding-right: 0;
      --text-field-text-align: center;
    }
    ha-textfield.hasSuffix {
      --text-field-padding: 0 0 0 4px;
    }
    ha-textfield:first-child {
      --text-field-border-top-left-radius: var(--mdc-shape-medium);
    }
    ha-textfield:last-child {
      --text-field-border-top-right-radius: var(--mdc-shape-medium);
    }
    ha-select {
      --mdc-shape-small: 0;
      width: 85px;
    }
    label {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: var(
        --mdc-typography-body2-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );
      font-size: var(--mdc-typography-body2-font-size, 0.875rem);
      line-height: var(--mdc-typography-body2-line-height, 1.25rem);
      font-weight: var(--mdc-typography-body2-font-weight, 400);
      letter-spacing: var(
        --mdc-typography-body2-letter-spacing,
        0.0178571429em
      );
      text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
      text-transform: var(--mdc-typography-body2-text-transform, inherit);
      color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
      padding-left: 4px;
    }
  `}]}}),i);
