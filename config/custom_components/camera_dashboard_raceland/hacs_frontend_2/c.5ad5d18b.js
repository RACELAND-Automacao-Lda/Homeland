import{o as r}from"./main-b570e60a.js";import{ao as t,aa as a}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";customElements.define("hui-vertical-stack-card",class extends t{async getCardSize(){if(!this._cards)return 0;const r=[];for(const t of this._cards)r.push(a(t));return(await Promise.all(r)).reduce(((r,t)=>r+t),0)}static get styles(){return[super.sharedStyles,r`
        #root {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #root > * {
          margin: var(
            --vertical-stack-card-margin,
            var(--stack-card-margin, 4px 0)
          );
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      `]}});
