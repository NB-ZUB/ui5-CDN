/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/util/DataProvider","sap/base/Log","sap/ui/model/odata/v4/ODataUtils","sap/ui/core/Core","sap/ui/core/Configuration","sap/base/util/fetch","sap/base/util/deepClone"],function(e,t,r,i,s,n,o){"use strict";var a=[429,503];var u=["no-cors","same-origin","cors"];var f=["GET","POST","HEAD","PUT","PATCH","DELETE","OPTIONS"];var d={json:"application/json, */*",xml:"application/xml, text/xml, */*"};function p(e,t){var r=Object.entries(t).map(function(e){return encodeURIComponent(e[0])+"="+encodeURIComponent(e[1])});return e+(e.indexOf("?")!==-1?"&":"?")+r.join("&")}function h(e){var t=e.headers.get("Content-Type");if(!t){return false}return t.indexOf("application/json")!==-1}function l(e){var t=e.headers.get("Content-Type");if(!t){return false}return t.indexOf("application/xml")!==-1||t.indexOf("text/xml")!==-1}var c=e.extend("sap.ui.integration.util.RequestDataProvider",{metadata:{library:"sap.ui.integration",properties:{allowCustomDataType:{type:"boolean",defaultValue:false}},associations:{host:{type:"sap.ui.integration.Host",multiple:false}}}});c.prototype.destroy=function(){if(this._iRetryAfterTimeout){clearTimeout(this._iRetryAfterTimeout)}e.prototype.destroy.apply(this,arguments)};c.prototype.getLastResponse=function(){return this._lastResponse};c.prototype.getData=function(){var e=this.getSettings().request,t=Promise.resolve(e);if(this._oDestinations){t=this._oDestinations.process(e)}if(this._oCsrfTokenHandler){t=t.then(function(e){return this._oCsrfTokenHandler.resolveToken(e)}.bind(this))}t=t.then(this._fetch.bind(this));if(this._oCsrfTokenHandler){t=t.catch(this._handleExpiredToken.bind(this))}return t};c.prototype._handleExpiredToken=function(e){if(this._oCsrfTokenHandler.isExpiredToken(this.getLastResponse())){this._oCsrfTokenHandler.resetTokenByRequest(this.getSettings().request);return this.getData().catch(function(e){throw e})}throw e};c.prototype._fetch=function(e){var i="Invalid request";if(!e||!e.url){t.error(i);return Promise.reject(i)}if(!this.getAllowCustomDataType()&&e.dataType){t.error("To specify dataType property in the Request Configuration, first set allowCustomDataType to 'true'.")}var s=e.url,n=e.parameters,o=this.getAllowCustomDataType()&&e.dataType||"json",a=e.headers||{},u=e.batch,f,h,l,c=e.method&&e.method.toUpperCase()||"GET",y=this._hasHeader(e,"Content-Type","application/json"),g=["GET","HEAD"].includes(c);if(!s.startsWith("/")){s=this._getRuntimeUrl(e.url)}if(n){if(y){l=JSON.stringify(n)}else if(g){s=p(s,n)}else{l=new URLSearchParams(n)}}if(u){f=r.serializeBatchRequest(Object.values(u));l=f.body;a=Object.assign({},a,f.headers)}h={url:s,options:{mode:e.mode||"cors",method:c,headers:new Headers(a)}};if(l){h.options.body=l}if(e.withCredentials){h.options.credentials="include"}if(!h.options.headers.get("Accept")&&d[o]){h.options.headers.set("Accept",d[o])}h=this._modifyRequestBeforeSent(h,this.getSettings());if(!this._isValidRequest(h)){t.error(i);return Promise.reject(i)}return this._request(h).then(function(e){var t=e[0];if(u){return this._deserializeBatchResponse(u,t)}return t}.bind(this))};c.prototype._request=function(e,t){var r=this._getFetchMethod(this._getRequestSettings());return r(e.url,e.options).then(function(r){if(this.bIsDestroyed){return Promise.reject("RequestDataProvider is already destroyed before the response is received.")}this._lastResponse=r;if(!r.ok){return r.text().then(function(i){var s=[r.status+" "+r.statusText,r,i,e];if(t){return Promise.reject(s)}return this._retryRequest(s)}.bind(this))}return r.text().then(function(t){if(h(r)){try{t=JSON.parse(t)}catch(t){return Promise.reject([t.toString(),null,null,e])}}else if(l(r)){t=(new window.DOMParser).parseFromString(t,"text/xml")}return[t,r]})}.bind(this),function(t){return Promise.reject([t.toString(),null,null,e])})};c.prototype._retryRequest=function(e){var r=e[1],i=e[3],s=this._getRetryAfter(r);if(!a.includes(r.status)){return Promise.reject(e)}if(!s){t.warning("Request could be retried, but Retry-After header or configuration parameter retryAfter are missing.");return Promise.reject(e)}if(this._iRetryAfterTimeout){e[0]="The retry was already scheduled.";return Promise.reject(e)}return new Promise(function(e,t){this._iRetryAfterTimeout=setTimeout(function(){this._request(i,true).then(e,t);this._iRetryAfterTimeout=null}.bind(this),s*1e3)}.bind(this))};c.prototype._getRetryAfter=function(e){var r=this.getSettings().request,i=e.headers.get("Retry-After")||r.retryAfter;if(!i){return 0}if(Number.isInteger(i)){return i}if(!i.match(/^\d+$/)){t.error("Only number of seconds is supported as value of retry-after. Given '"+i+"'.");return 0}return parseInt(i)};c.prototype._getFetchMethod=function(e){var t=i.byId(this.getCard()),r=t&&t.getAggregation("_extension"),s=i.byId(this.getHost());if(r){return function(t,i){return r.fetch(t,i,o(e,1e3))}}if(s){return function(r,i){return s.fetch(r,i,o(e,1e3),t)}}return n};c.prototype._getRequestSettings=function(){return this.getSettings().request};c.prototype._hasHeader=function(e,t,r){if(!e.headers){return false}for(var i in e.headers){if(i.toLowerCase()===t.toLowerCase()&&e.headers[i]===r){return true}}return false};c.prototype._isValidRequest=function(e){if(!e){t.error("Request is not valid. Request object is missing.");return false}if(!e.url){t.error("Request is not valid. URL is missing.");return false}if(!e.options){t.error("Request is not valid. Options are missing.");return false}if(u.indexOf(e.options.mode)===-1){t.error("Request is not valid. Mode is not among "+u.toString());return false}if(f.indexOf(e.options.method)===-1){t.error("Request is not valid. Method is not among "+u.toString());return false}if(e.options.headers&&!(e.options.headers instanceof Headers)){t.error("Request is not valid. The headers option is not instance of Headers interface.");return false}if(typeof e.url!=="string"){return false}return true};c.prototype._deserializeBatchResponse=function(e,t){return new Promise(function(i,s){var n=this.getLastResponse().headers.get("Content-Type"),o=r.deserializeBatchResponse(n,t,false),a=Object.keys(e),u={};a.forEach(function(e,t){var r=o[t],i;if(!r){s("Batch responses do not match the batch requests.");return}i=new Response(r.responseText,r);if(!i.ok){s("One of batch requests fails with '"+i.status+" "+i.statusText+"'");return}u[e]=r.responseText?JSON.parse(r.responseText):{}});i(u)}.bind(this))};c.prototype._modifyRequestBeforeSent=function(e,t){var r=i.byId(this.getCard()),s=i.byId(this.getHost());if(!s){return e}if(s.modifyRequestHeaders){e.options.headers=new Headers(s.modifyRequestHeaders(Object.fromEntries(e.options.headers),t,r))}if(s.modifyRequest){e=s.modifyRequest(e,t,r)}return e};c.prototype.getDetails=function(){return"Backend interaction - load data from URL: "+this.getSettings().request.url};return c});
//# sourceMappingURL=RequestDataProvider.js.map