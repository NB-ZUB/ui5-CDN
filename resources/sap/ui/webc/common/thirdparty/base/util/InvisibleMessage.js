sap.ui.define(["exports","../types/InvisibleMessageMode","./getSingletonElementInstance","../Boot"],function(e,t,s,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=a(t);s=a(s);function a(e){return e&&e.__esModule?e:{default:e}}let l;let n;const o=e=>{e.style.position="absolute";e.style.clip="rect(1px,1px,1px,1px)";e.style.userSelect="none";e.style.left="-1000px";e.style.top="-1000px";e.style.pointerEvents="none"};(0,i.attachBoot)(()=>{if(l&&n){return}l=document.createElement("span");n=document.createElement("span");l.classList.add("ui5-invisiblemessage-polite");n.classList.add("ui5-invisiblemessage-assertive");l.setAttribute("aria-live","polite");n.setAttribute("aria-live","assertive");l.setAttribute("role","alert");n.setAttribute("role","alert");o(l);o(n);(0,s.default)("ui5-static-area").appendChild(l);(0,s.default)("ui5-static-area").appendChild(n)});const r=(e,s)=>{const i=s===t.default.Assertive?n:l;i.textContent="";i.textContent=e;if(s!==t.default.Assertive&&s!==t.default.Polite){console.warn(`You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".`)}setTimeout(()=>{if(i.textContent===e){i.textContent=""}},3e3)};var u=r;e.default=u});
//# sourceMappingURL=InvisibleMessage.js.map