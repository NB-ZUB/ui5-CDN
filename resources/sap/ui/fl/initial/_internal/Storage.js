/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/initial/_internal/FlexInfoSession","sap/ui/fl/initial/_internal/storageResultDisassemble","sap/ui/fl/initial/_internal/StorageResultMerger","sap/ui/fl/initial/_internal/StorageUtils","sap/ui/fl/initial/api/Version","sap/ui/fl/Utils"],function(e,n,r,t,i,a){"use strict";function l(e,n,r){if(!n.layers||n.layers[0]!=="ALL"&&n.layers.indexOf("CUSTOMER")===-1){delete e.version;return e}if(o(r.reference)){e.allContexts=true}if(r.version!==undefined){e.version=r.version;return e}var t=a.getUrlParameter(i.UrlParameter);if(t===null){delete e.version}else{e.version=parseInt(t)}return e}function o(n){var r=e.getByReference(n);return r&&r.initialAllContexts}function s(e,n){var r=n.map(function(n){var r=Object.assign({},e,{url:n.url,path:n.path});r=l(r,n,e);return n.loadConnectorModule.loadFlexData(r).then(function(e){return e||t.getEmptyFlexDataResponse()}).catch(t.logAndResolveDefault.bind(undefined,t.getEmptyFlexDataResponse(),n,"loadFlexData"))});return Promise.all(r)}function u(e){var n=[];e.forEach(function(e){if(Array.isArray(e)){n=n.concat(e)}else{n.push(e)}});return n}function f(e){return e.map(function(e){return n(e)})}function c(e){return Promise.resolve(e).then(u).then(f).then(u).then(r.merge)}function d(e){return t.getStaticFileConnector().then(s.bind(this,e))}var p={};p.completeFlexData=function(e){if(!e||!e.reference){return Promise.reject("No reference was provided")}return Promise.all([d(e),e.partialFlexData]).then(c)};p.loadFlexData=function(e){if(!e||!e.reference){return Promise.reject("No reference was provided")}return t.getLoadConnectors().then(s.bind(this,e)).then(c)};return p});
//# sourceMappingURL=Storage.js.map