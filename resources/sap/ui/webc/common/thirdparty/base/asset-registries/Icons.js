sap.ui.define(["exports","../getSharedResource","./util/IconCollectionsAlias","./util/IconCollectionsByTheme","./util/getIconCollectionByTheme","../i18nBundle"],function(e,t,c,a,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.registerIconLoader=e.registerIcon=e.getIconDataSync=e.getIconData=e.getIconAccessibleName=e._getRegisteredNames=void 0;t=s(t);o=s(o);function s(e){return e&&e.__esModule?e:{default:e}}const r="legacy";const i=new Map;const l=(0,t.default)("SVGIcons.registry",new Map);const u=(0,t.default)("SVGIcons.promises",new Map);const g="ICON_NOT_FOUND";const p=(e,t)=>{i.set(e,t)};e.registerIconLoader=p;const m=async e=>{if(!u.has(e)){if(!i.has(e)){throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`)}const t=i.get(e);u.set(e,t(e))}return u.get(e)};const f=e=>{Object.keys(e.data).forEach(t=>{const c=e.data[t];d(t,{pathData:c.path||c.paths,ltr:c.ltr,accData:c.acc,collection:e.collection,packageName:e.packageName})})};const d=(e,t)=>{const c=`${t.collection}/${e}`;l.set(c,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})};e.registerIcon=d;const y=e=>{if(e.startsWith("sap-icon://")){e=e.replace("sap-icon://","")}let t;[e,t]=e.split("/").reverse();e=e.replace("icon-","");if(t){t=(0,c.getIconCollectionByAlias)(t)}return{name:e,collection:t}};const h=e=>{const{name:t,collection:c}=y(e);return w(c,t)};e.getIconDataSync=h;const I=async e=>{const{name:t,collection:c}=y(e);let n=g;try{n=await m((0,o.default)(c))}catch(e){const t=e;console.error(t.message)}if(n===g){return n}const s=w(c,t);if(s){return s}if(Array.isArray(n)){n.forEach(e=>{f(e);(0,a.registerIconCollectionForTheme)(c,{[e.themeFamily||r]:e.collection})})}else{f(n)}return w(c,t)};e.getIconData=I;const w=(e,t)=>{const c=`${(0,o.default)(e)}/${t}`;return l.get(c)};const D=async e=>{if(!e){return}let t=h(e);if(!t){t=await I(e)}if(t&&t!==g&&t.accData){const e=await(0,n.getI18nBundle)(t.packageName);return e.getText(t.accData)}};e.getIconAccessibleName=D;const N=async()=>{await I("edit");await I("tnt/arrow");await I("business-suite/3d");return Array.from(l.keys())};e._getRegisteredNames=N});
//# sourceMappingURL=Icons.js.map