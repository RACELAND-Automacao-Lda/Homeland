import{_ as a,x as e,k as s,l as i,f as t,q as c}from"./main-b570e60a.js";import{al as o,am as r,as as l,aw as m,an as n,ao as d,ap as p,aq as h}from"./c.5a5021e9.js";import{b as u}from"./c.08872315.js";import{HuiStackCardEditor as f}from"./c.d2afc68b.js";import"./c.2aff7a3c.js";import"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.309a65b6.js";import"./c.bc207e00.js";import"./c.342c552c.js";import"./c.65c82e57.js";import"./c.5fe2e3ab.js";import"./c.a717c672.js";import"./c.9e58f139.js";import"./c.f9bdd698.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";import"./c.1d43e39e.js";import"./c.fbe33aec.js";import"./c.461f2735.js";const j=o(u,r({cards:l(m()),title:n(d()),square:n(p()),columns:n(d())}));let b=a([c("hui-grid-card-editor")],(function(a,c){class o extends c{constructor(...e){super(...e),a(this)}}return{F:o,d:[{kind:"method",key:"setConfig",value:function(a){h(a,j),this._config=a}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return e``;const a=[{type:"grid",name:"",schema:[{name:"columns",selector:{select:{options:[{value:"1",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.big")},{value:"2",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.medium")},{value:"3",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.small")}]}}},{name:"title",selector:{text:{}}}]}],t={title:"",square:!0,columns:"3",...this._config};return e`
      <div class="formContainer" style="width:90%;margin-left:5%">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${a}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
      ${s(i(o.prototype),"render",this).call(this)}
    `}},{kind:"method",key:"_valueChanged",value:function(a){t(this,"config-changed",{config:a.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return a=>this.hass.localize(`ui.panel.lovelace.editor.card.grid.${a.name}`)}}]}}),f);export{b as HuiGridCardEditor};
