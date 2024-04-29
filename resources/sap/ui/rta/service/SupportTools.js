/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/dt/OverlayRegistry","sap/ui/fl/write/api/ChangesWriteAPI"],function(e,t,n,i){"use strict";var r="sapUiFlexibilitySupportExtension_Selected";function a(e,n,r){var a=e.getAction(n);if(a&&a.changeType){var l=a.changeOnRelevantContainer?n.getRelevantContainer():n.getElement();return i.getChangeHandler({changeType:a.changeType,element:l,modifier:t,layer:r.getLayer()}).then(function(e){return e}).catch(function(){return})}return Promise.resolve(undefined)}function l(e){if(e.endsWith(".asSibling")){return true}if(e.endsWith(".asChild")){return false}return undefined}function o(e,t){var n=l(t);var i=e.getPlugins();return Object.values(i).find(function(e){var i=e._retrievePluginName?e._retrievePluginName(n):e.getMetadata().getName();return i===t})}function u(){var e=document.getElementsByClassName(r);if(e.length>0){e[0].classList.remove(r)}}function s(t,n){var i=e.getElementById(n.overlayId);if(!i){return}var r=i.getElement();if(i.getSelectable()){u()}return Promise.all(i.getEditableByPlugins().map(function(e){var n=o(t,e);var r=l(e);return a(n,i,t).then(function(t){return{name:e,isAvailable:n.isAvailable([i],r),hasChangeHandler:!!t}})})).then(function(e){return{elementId:r.getId(),elementControlType:r.getMetadata().getName(),overlayId:i.getId(),plugins:e}})}function d(t,n){var i=e.getElementById(n.overlayId);var r=o(t,n.pluginName);a(r,i,t).then(console.log)}function g(e){if(document.getElementsByClassName("sapUiDtContextMenu").length>0){var t=e.getPlugins().contextMenu;t.oContextMenuControl.close()}}function c(t,n){var i=e.getElementById(n.overlayId);i.focus();window.postMessage({type:"getOverlayInfo",id:"ui5FlexibilitySupport.submodules.overlayInfo",content:{overlayId:i.getId()}});u();g(t);if(i.getSelectable()){i.setSelected(true)}else{var r=t.getSelection();r.forEach(function(e){e.setSelected(false)});if(i.getDomRef()){i.getDomRef().classList.add("sapUiFlexibilitySupportExtension_Selected")}}}function f(){var e=n.getOverlays();var t=[];e.forEach(function(e){if(!e.isA("sap.ui.dt.AggregationOverlay")){var n=e.getParentElementOverlay()?.getId();var i=e.getChildren().map(function(e){return e.getId()});t.push({id:e.getId(),parentId:n,elementId:e.getElement().getId(),visible:e.getSelectable()&&e.isVisible(),idNum:parseInt(e.getId().replace("__overlay","")),children:i,hasParent:n!==undefined})}});return t}function v(t,n){var i=e.getElementById(n.overlayId);console.log(i.getDesignTimeMetadata().getData())}var p={getOverlayInfo:{handler:s,returnMessageType:"overlayInfo",id:"ui5FlexibilitySupport.submodules.overlayInfo"},printChangeHandler:{handler:d,id:"ui5FlexibilitySupport.submodules.overlayInfo"},printDesignTimeMetadata:{handler:v,id:"ui5FlexibilitySupport.submodules.overlayInfo"},changeOverlaySelection:{handler:c,id:"ui5FlexibilitySupport.submodules.overlayInfo"},collectOverlayTableData:{handler:f,returnMessageType:"overlayInfoTableData",id:"ui5FlexibilitySupport.submodules.overlayInfo"}};function y(){window.postMessage({type:"rtaStopped",id:"ui5FlexibilitySupport.submodules.overlayInfo",content:{}})}function m(){window.postMessage({type:"rtaStarted",id:"ui5FlexibilitySupport.submodules.overlayInfo",content:{}})}function I(e,t){if(t.source!==window){return}var n=Object.entries(p).find(function(e){return e[0]===t.data.type&&e[1].id===t.data.id});var i=n&&n[1];if(i){Promise.resolve(i.handler(e,t.data.content)).then(function(e){if(i.returnMessageType){t.source.postMessage({id:i.id,type:i.returnMessageType,content:e})}})}}return function(e){var t=I.bind(null,e);window.addEventListener("message",t);e.attachEventOnce("stop",y);m();return{destroy(){window.removeEventListener("message",t)}}}});
//# sourceMappingURL=SupportTools.js.map