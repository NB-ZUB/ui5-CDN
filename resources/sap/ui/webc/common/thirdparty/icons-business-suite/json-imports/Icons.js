sap.ui.define(["require","sap/ui/webc/common/thirdparty/base/asset-registries/Icons"],function(s,e){"use strict";const i=async e=>{let i;if(e==="business-suite-v1"){i=(await Promise.resolve().then(()=>new Promise(e=>s(["../generated/assets/v1/SAP-icons-business-suite.json"],e)))).default}else{i=(await Promise.resolve().then(()=>new Promise(e=>s(["../generated/assets/v2/SAP-icons-business-suite.json"],e)))).default}if(typeof i==="string"&&i.endsWith(".json")){throw new Error('[icons-business-suite] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use `import "@ui5/webcomponents-icons-business-suite/dist/Assets-static.js". Check the "Assets" documentation for more information.')}return i};const t=()=>{(0,e.registerIconLoader)("business-suite-v1",i);(0,e.registerIconLoader)("business-suite-v2",i)};t()});
//# sourceMappingURL=Icons.js.map