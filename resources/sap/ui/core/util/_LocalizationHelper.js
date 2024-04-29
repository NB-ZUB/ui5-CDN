/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Event","sap/base/Log","sap/base/i18n/Formatting","sap/base/i18n/Localization","sap/ui/thirdparty/jquery"],(t,e,n,o,jQuery)=>{"use strict";const a={};function i(){let t=[];for(const e of Object.values(a)){t=[...t,...Object.values(e())]}return t}function s(n){let o="LocalizationChanged";o="localizationChanged";const a=t.getParameters(n),s=jQuery.Event(o,{changes:a}),l=i(),r=a.rtl!==undefined;e.info("localization settings changed: "+Object.keys(a).join(","),null,"sap/ui/core/util/LocalizationHelper");if(r){document.documentElement.setAttribute("dir",a.rtl?"rtl":"ltr");e.info("RTL mode "+a.rtl?"activated":"deactivated")}for(const t of l){for(const e in t.oModels){const n=t.oModels[e];n?._handleLocalizationChange?.()}}for(const t of l){for(const e in t.mBindingInfos){const n=t.mBindingInfos[e];const o=n.parts;if(o){for(let t=0;t<o.length;t++){n.type?._handleLocalizationChange?.()}n.modelChangeHandler?.()}}if(r&&t.isA("sap.ui.core.UIArea")){t.invalidate()}if(t.isA("sap.ui.core.Element")){s._bNoReturnValue=true;t._handleEvent(s)}}}n.attachChange(s);o.attachChange(s);const l={init(){const t=o.getRTL()?"rtl":"ltr";document.documentElement.setAttribute("dir",t);e.info("Content direction set to '"+t+"'",null,"sap/ui/core/util/_LocalizationHelper")},registerForUpdate(t,e){a[t]=e}};return l});
//# sourceMappingURL=_LocalizationHelper.js.map