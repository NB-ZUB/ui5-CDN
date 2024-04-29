/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../library","sap/ui/core/Control","sap/ui/model/json/JSONModel","./getContainerUserInfo","sap/base/util/extend","sap/base/util/restricted/_CancelablePromise","sap/base/security/URLListValidator","sap/base/Log","./IFrameRenderer","sap/ui/core/library"],function(e,t,i,r,o,s,a,n,l){"use strict";function u(e){if(e.parts&&e.formatter){return e.formatter.apply(null,e.parts.map(function(e){if(e.model){return`{${e.model}>${e.path}}`}return`{${e.path}}`}))}return e}var p=t.extend("sap.ui.fl.util.IFrame",{metadata:{library:"sap.ui.fl",properties:{url:{type:"sap.ui.core.URI",group:"Misc",defaultValue:""},width:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:"50vh"},title:{type:"string",group:"Misc",defaultValue:undefined},asContainer:{type:"boolean",group:"Misc",defaultValue:undefined},renameInfo:{type:"object",group:"Data",defaultValue:null},useLegacyNavigation:{type:"boolean",defaultValue:false},_settings:{type:"object",group:"Data",defaultValue:null}},designtime:"sap/ui/fl/designtime/util/IFrame.designtime"},init(...e){if(t.prototype.init){t.prototype.init.apply(this,e)}this._oInitializePromise=r().then(function(e){this._oUserModel=new i(e);this.setModel(this._oUserModel,"$user")}.bind(this))},waitForInit(){return this._oInitializePromise?this._oInitializePromise:Promise.reject()},_setUrlLegacy(e){if(this._oSetUrlPromise){this._oSetUrlPromise.cancel();delete this._oSetUrlPromise}this.setProperty("url","");this._oSetUrlPromise=new s(function(e,t,i){i.shouldReject=false;setTimeout(e,0)});this._oSetUrlPromise.then(function(){delete this._oSetUrlPromise;this.setProperty("url",e)}.bind(this))},setUrl(e){var t=decodeURI(e)===e?encodeURI(e):e;if(p.isValidUrl(t)){if(this.getUseLegacyNavigation()){this._setUrlLegacy(t)}else{const e=p._toUrl(t);const i=p._toUrl(this.getUrl()||"about:blank");if(i.origin===e.origin&&i.pathname===e.pathname&&i.search===e.search&&i.hash!==e.hash){e.searchParams.append("sap-ui-xx-fl-forceEmbeddedContentRefresh",Date.now())}this.setProperty("url",e.toString())}}else{n.error("Provided URL is not valid as an IFrame src")}return this},_replaceIframeLocation(e){this.getDomRef().contentWindow.location.replace(e)},onAfterRendering(){if(!this.getUseLegacyNavigation()){this._replaceIframeLocation(this.getUrl())}},applySettings(e,...i){const{url:r,...s}=e||{};t.prototype.applySettings.apply(this,[s,...i]);t.prototype.applySettings.apply(this,[{url:r},...i]);if(e){var a=this.getProperty("_settings")||{};if(e._settings){o(a,e._settings)}else{Object.keys(e).filter(function(t){return e[t]!==undefined}).forEach(function(t){a[t]=u(e[t])})}this.setProperty("_settings",a)}},exit(){if(this._oUserModel){this._oUserModel.destroy();delete this._oUserModel}},renderer:l});p._getDocumentLocation=function(){return document.location};p._toUrl=function(e){const t=p._getDocumentLocation();return new URL(e,t.href)};p.isValidUrl=function(e){try{const t=p._toUrl(e);return!/javascript/i.test(t.protocol)&&(!/http(?!s)/.test(t.protocol)||/http(?!s)/.test(p._getDocumentLocation().protocol))&&a.validate(e)}catch{return false}};return p});
//# sourceMappingURL=IFrame.js.map