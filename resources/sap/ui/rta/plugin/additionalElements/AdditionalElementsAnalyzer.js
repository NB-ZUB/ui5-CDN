/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/isPlainObject","sap/base/util/ObjectPath","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/dt/ElementUtil","sap/ui/fl/apply/api/DelegateMediatorAPI","sap/ui/rta/util/BindingsExtractor"],function(e,t,n,r,a,i){"use strict";function o(e,t,n){if(!e){return false}var r=e.getBindingInfo(t,n);var a=r&&r.path;if(!a){return false}if(a.indexOf(">")>-1){a=a.split(">").pop()}return a.indexOf("/")===0}function l(e,t,n,r){var a;if(t){a=e.getBindingInfo(n,r);if(typeof a.model==="string"&&a.model!==r){a=undefined}}else{a=e.getBindingContext(r)}return a}function u(e,t,n){var r=o(e,t,n);var a=l(e,r,t,n);if(a){return r?a.path:a.getPath()}}function f(e){var t=e.reduce(function(e,t){if(Array.isArray(t.properties)){e=e.concat(t.properties.map(function(e){e.parentPropertyName=t.label||t.name;return e}))}else{e.push(t)}return e},[]);return t}function g(e,t,n){var r={element:e,aggregationName:t,payload:n.delegateInfo.payload||{}};return n.delegateInfo.delegate.getPropertyInfo(r).then(f.bind(null))}function c(e,t){return a.getDelegateForControl({control:e,modifier:n,supportsDefault:true}).then(function(n){if(n&&n.instance){return n.instance.getPropertyInfo({element:e,aggregationName:t,payload:n.payload})}return[]})}function d(e,t,n){var r=n.addViaDelegate;var a;if(r){a=g.bind(null,e,t,r)}else{a=c.bind(null,e,t)}return a().then(function(e){return b(e)})}function p(e){return e.filter(function(e){return!(e.unsupported||e.hideFromReveal)})}function s(e){return{selected:false,label:e.label||e.name,parentPropertyName:e.parentPropertyName?e.parentPropertyName:"",duplicateName:e.duplicateName?e.duplicateName:false,tooltip:e.tooltip||e.label,originalLabel:"",type:"delegate",entityType:e.entityType,name:e.name,bindingPath:e.bindingPath}}function m(e){var t=e.element;var n=e.action;return{selected:false,label:t.__label||r.getLabelForElement(t,n.getLabel),tooltip:t.__tooltip||r.getLabelForElement(t,n.getLabel)||t.__bindingPath,parentPropertyName:t.__parentPropertyName?t.__parentPropertyName:"",duplicateName:t.__duplicateName?t.__duplicateName:false,originalLabel:t.__renamedLabel&&t.__label!==t.__originalLabel?t.__originalLabel:"",bindingPath:t.__bindingPath,type:"invisible",elementId:t.getId(),sourceAggregation:e.sourceAggregation}}function v(e,t,n,a){if(t&&t!==e){var i=u(e,n,a);return r.findAllSiblingsInContainer(e,t).filter(function(e){return i===u(e,n,a)})}return[e]}function b(e){e.forEach(function(e,t,n){if(e.duplicateName!==true){for(var r=t+1;r<n.length-1;r++){if(e.label===n[r].label){e.duplicateName=true;n[r].duplicateName=true}}}});return e}function h(e,t){return t.some(function(t){return t.label===e.__label})}function _(e){return Array.isArray(e)&&e.length>0}function P(e,t){return t.sort(function(e,t){return!!t.hideFromReveal-!!e.hideFromReveal}).filter(function(t){return e.some(function(e){return e===t.bindingPath||e.startsWith(`${t.bindingPath}/`)})}).pop()}function y(t){return e(t)?t.parts[0].path:!!t.getPath&&t.getPath()}function N(e,t,n,r){var a=e.getModel(n);var o=v(e,t.relevantContainer,r,n);var l=[];o.forEach(function(e){l=l.concat(i.getBindings({element:e,model:a,parent:e.getParent()}).map(y))});return l}function I(e,t){var n={element:e.relevantContainer,aggregationName:t,payload:e.delegateInfo.payload||{}};return e.delegateInfo.delegate.getRepresentedProperties(n)}function L(e,t,n,r){return I(t,r).then(function(a){if(a===undefined){return N(e,t,n,r)}var i=[];a.forEach(function(e){i=i.concat(e.bindingPaths)});return i})}function A(e,n,r,a){return Promise.resolve().then(function(){var i=!!t.get("delegateInfo.delegate.getRepresentedProperties",n);if(i){return L(e,n,r,a)}return N(e,n,r,a)})}function E(e,t){e.__originalLabel=t.label;e.__tooltip=t.tooltip;e.__bindingPath=t.name;if(e.__label!==e.__originalLabel){e.__renamedLabel=true}if(t.parentPropertyName){e.__parentPropertyName=t.parentPropertyName}}function F(e,n){var r=!!t.get("delegateInfo.delegate.getRepresentedProperties",e);if(r){return I(e,n)}}function B(e,t){var n;t.some(function(t){if(t.id===e.getId()){n=t;return true}});return n.bindingPaths||[]}function C(e,t,n,r){if(!_(n)){return true}var a=P(n,t);if(a){if(a.hideFromReveal){return false}if(r){E(e,a)}return true}return!r}function D(e,t,n,r,a,o){var l=r.addViaDelegate;var f=R(l);var g=e.getModel(f);var c=true;var d=[];if(a){d=B(n,a)}else if(u(e,t,f)===u(n,t,f)){d=i.collectBindingPaths(n,g).bindingPaths}else if(l&&i.getBindings({element:n,model:g}).length>0){c=false}if(c){n.__duplicateName=h(n,o);c=C(n,o,d,!!l)}return c}function R(e){return t.get("delegateInfo.payload.modelName",e)}var M={enhanceInvisibleElements(e,t){var n=t.reveal;var a=t.addViaDelegate;var i=e.getMetadata().getAggregation();var o=i?i.name:t.aggregation;return Promise.all([d(e,o,t),F(a,o)]).then(function(a){var i=a[0];var l=a[1];var u=[];var f=n.elements||[];f.forEach(function(n){var a=n.element;var f=n.action;a.__label=r.getLabelForElement(a,f.getLabel);var g=D(e,o,a,t,l,i);if(g){u.push({element:a,action:f,sourceAggregation:n.sourceAggregation})}});return u}).then(function(e){return e.map(m)})},getUnrepresentedDelegateProperties(e,t){var n=R(t);var r=e.getMetadata().getAggregation();var a=r?r.name:t.action.aggregation;return Promise.all([g(e,a,t),A(e,t,n,a)]).then(function(e){var n=e[0];var r=e[1];var a=t.action.filter?t.action.filter:function(){return true};var i=p(n);i=i.filter(function(e){var n=false;if(r){n=r.some(function(t){return t===e.bindingPath})}return!n&&a(t.relevantContainer,e)});i=b(i);return i}).then(function(e){return e.map(s)})}};return M});
//# sourceMappingURL=AdditionalElementsAnalyzer.js.map