sap.ui.define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.shouldIgnoreCustomElement=e.ignoreCustomElements=void 0;const t=[];const o=e=>{if(typeof e!=="string"||!e.length){throw new Error("Only string characters for a tag prefix.")}t.push(e)};e.ignoreCustomElements=o;const s=e=>t.some(t=>e.startsWith(t));e.shouldIgnoreCustomElement=s});
//# sourceMappingURL=IgnoreCustomElements.js.map