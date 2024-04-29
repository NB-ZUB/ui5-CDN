/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Element"],function(e,n){"use strict";var t={};t.TARGET_UI="targetUI";t.INITIAL_UI="initialUI";t.PLACEHOLDER="X";t.INDEX_RELEVANT="indexRelevant";t.NOT_INDEX_RELEVANT="notIndexRelevant";function r(e,n){return(Math.max(e,n)||0)+1}t.getInitialUIContainerElementIds=function(e,n,r,i){e[n]||={};var a=e[n];a[r]||={};var l=a[r];l[t.TARGET_UI]||=i;l[t.INITIAL_UI]||=i.slice(0);return l[t.INITIAL_UI]};t.getContainerElementIds=function(t,r,i,a){var l=n.getElementById(t);return Promise.resolve(i||e.getAggregation(l,r)).then(function(e){return e.map(function(e){return a?e[a]:e.getId()})})};t.initializeArrayWithPlaceholders=function(e,n){var i=r(n,e);return Array(i).fill(t.PLACEHOLDER).map(function(e,n){return e+n})};t.extendArrayWithPlaceholders=function(e,n,i){var a=r(n,i);if(e.length<a){var l;for(var f=e.length;f<=a;f++){l=t.PLACEHOLDER+e.length;e.splice(e.length,0,l)}}};t.extendElementsArray=function(e,n,r,i){t.extendArrayWithPlaceholders(e,n,r);var a=e.indexOf(i);var l=e.indexOf(t.PLACEHOLDER+n);if(a!==n&&n!==undefined){if(a>=0){t.shiftElement(e,a,n)}else if(l>-1){e[l]=i}else if(t.isUnknown(e[n])){e[n]=i}}};t.shiftElement=function(e,n,t){e.splice(t,0,e.splice(n,1)[0])};t.isUnknown=function(e){if(e!==undefined&&e.indexOf(t.PLACEHOLDER)===0){var n=e.slice(1,e.length);var r=parseInt(n);if(isNaN(r)){return false}return true}return false};return t});
//# sourceMappingURL=Utils.js.map