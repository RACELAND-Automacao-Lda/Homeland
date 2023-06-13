import{o as a}from"./main-b570e60a.js";import{ao as t,aa as r}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";customElements.define("hui-horizontal-stack-card",class extends t{async getCardSize(){if(!this._cards)return 0;const a=[];for(const t of this._cards)a.push(r(t));const t=await Promise.all(a);return Math.max(...t)}static get styles(){return[super.sharedStyles,a`
        #root {
          display: flex;
          height: 100%;
        }
        #root > * {
          flex: 1 1 0;
          margin: var(
            --horizontal-stack-card-margin,
            var(--stack-card-margin, 0 4px)
          );
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      `]}});
