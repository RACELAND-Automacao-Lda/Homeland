import{ah as e,q as t,H as s,g as i,dR as c,x as a,y as h,o,_ as r,dS as d}from"./main-b570e60a.js";import{s as n,C as l}from"./c.a5b80b3f.js";let p=class extends l{};p.styles=[n],p=e([t("mwc-checkbox")],p);class m extends c{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),s=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():a``,i=this.hasMeta&&this.left?this.renderMeta():a``,c=this.renderRipple();return a`
      ${c}
      ${s}
      ${this.left?"":t}
      <span class=${h(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${i}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}e([s("slot")],m.prototype,"slotElement",void 0),e([s("mwc-checkbox")],m.prototype,"checkboxElement",void 0),e([i({type:Boolean})],m.prototype,"left",void 0),e([i({type:String,reflect:!0})],m.prototype,"graphic",void 0);const f=o`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;r([t("ha-check-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[d,f,o`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
      .mdc-deprecated-list-item__graphic {
        pointer-events: none;
      }
    `]}]}}),m);
