sap.ui.define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const t=new Map;const n=new Map;n.set("S",[0,599]);n.set("M",[600,1023]);n.set("L",[1024,1439]);n.set("XL",[1440,Infinity]);var i;(function(e){e["RANGE_4STEPS"]="4Step"})(i||(i={}));const s=(e,n)=>{t.set(e,n)};const o=(e,n=window.innerWidth)=>{let s=t.get(e);if(!s){s=t.get(i.RANGE_4STEPS)}let o;const r=Math.floor(n);s.forEach((e,t)=>{if(r>=e[0]&&r<=e[1]){o=t}});return o||[...s.keys()][0]};const r={RANGESETS:i,initRangeSet:s,getCurrentRange:o};r.initRangeSet(r.RANGESETS.RANGE_4STEPS,n);var S=r;e.default=S});
//# sourceMappingURL=MediaRange.js.map