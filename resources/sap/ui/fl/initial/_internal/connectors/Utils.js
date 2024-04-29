/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/base/i18n/Localization","sap/base/security/encodeURLParameters"],function(e,s,t){"use strict";var r=2e4;var n=function(e,s){var t=new Error(e.statusText);t.status=e.status;t.userMessage=s;return t};var a=function(s){return e.getResourceBundleFor("sap.ui.fl").getText(s)};const o=(e,s)=>{if(e.slice(-1)!=="/"&&s.charAt(0)!=="/"){e+="/"}return e+s};return{addLanguageInfo(e){if(!e){throw new Error("No parameters map were passed")}e["sap-language"]=s.getLanguage()},addSAPLogonLanguageInfo(e){if(!e){throw new Error("No parameters map were passed")}e["sap-language"]=s.getSAPLogonLanguage()},getUrl(e,s,r){if(!e||!s.url){throw new Error("Not all necessary parameters were passed")}let n=o(s.url,e);if(s.cacheKey){n=o(n,`~${s.cacheKey}~`)}if(s.reference){n=o(n,s.reference)}else if(s.fileName){n=o(n,s.fileName)}if(r){Object.keys(r).forEach(function(e){if(r[e]===undefined){delete r[e]}});var a=t(r);if(a.length>0){n+=`?${a}`}}return n},sendRequest(e,s,t){s||="GET";s=s.toUpperCase();return new Promise(function(o,i){var p=new XMLHttpRequest;p.open(s,e);p.timeout=r;if((s==="GET"||s==="HEAD")&&(!t||!t.initialConnector||!t.initialConnector.xsrfToken)){p.setRequestHeader("X-CSRF-Token","fetch")}if((s==="POST"||s==="PUT"||s==="DELETE")&&t&&t.initialConnector&&t.initialConnector.xsrfToken){p.setRequestHeader("X-CSRF-Token",t.initialConnector.xsrfToken)}if(t&&t.contentType){p.setRequestHeader("Content-Type",t.contentType)}if(t&&t.siteId){p.setRequestHeader("X-LRep-Site-Id",t.siteId)}if(t&&t.sAppDescriptorId){p.setRequestHeader("X-LRep-AppDescriptor-Id",t.sAppDescriptorId)}if(t&&t.dataType){p.responseType=t.dataType}p.onload=function(){if(p.status>=200&&p.status<400){try{var s={};if(p.status!==204&&p.status!==205){if(!p.response&&p.responseText){p.response=p.responseText}s.response=p.response;if(s.response&&typeof s.response==="string"&&p.getResponseHeader("content-type")&&p.getResponseHeader("content-type").indexOf("json")>0){s.response=JSON.parse(s.response)}}s.status=p.status;if(p.getResponseHeader("X-CSRF-Token")){if(!e.match(/\/~.*~/g)){s.xsrfToken=p.getResponseHeader("X-CSRF-Token");if(t&&t.initialConnector){t.initialConnector.xsrfToken=s.xsrfToken}}}if(p.getResponseHeader("Etag")){s.etag=p.getResponseHeader("Etag")}o(s)}catch(e){e.userMessage=a("MSG_LOADING_SERVER_RESPONSE_ERROR");i(e)}}else{var r="";try{var f=typeof p.response==="string"?JSON.parse(p.response):p.response;if(Array.isArray(f.messages)&&f.messages.length){r=f.messages.reduce(function(e,s){return e.concat(s.severity==="Error"?`${s.text}\n`:"")},r)}}catch(e){}i(n(p,r))}};p.ontimeout=function(){i(n(p,a("MSG_CONNECTION_TIMEOUT_ERROR")))};p.onerror=function(){i(n(p,a("MSG_NETWORK_ERROR")))};p.addEventListener("error",function(){i(n(p,a("MSG_NETWORK_ERROR")))});if(t&&t.payload){p.send(t.payload)}else{p.send()}})}}});
//# sourceMappingURL=Utils.js.map