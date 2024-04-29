/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath","sap/ui/fl/apply/_internal/flexObjects/States","sap/ui/fl/initial/_internal/StorageUtils","sap/ui/fl/write/_internal/StorageFeaturesMerger","sap/ui/VersionInfo"],function(e,t,n,r,a){"use strict";var i="sap/ui/fl/write/_internal/connectors/";function o(){return n.getConnectors(i,false)}function s(e,t){var n=t.filter(function(t){return t.layers.indexOf("ALL")!==-1||t.layers.indexOf(e)!==-1});if(n.length===1){return n[0]}if(n.length===0){throw new Error(`No Connector configuration could be found to write into layer: ${e}`)}if(n.length>1){throw new Error(`sap.ui.core.Configuration 'flexibilityServices' has a misconfiguration: Multiple `+`Connector configurations were found to write into layer: ${e}`)}return undefined}function u(e){var t=e.map(function(e){return e.writeConnectorModule.loadFeatures({url:e.url}).then(function(t){return{features:t,layers:e.layers}}).catch(n.logAndResolveDefault.bind(null,{features:{},layers:e.layers},e,"loadFeatures"))});return Promise.all(t)}function c(e){if(!e){return Promise.reject("No layer was provided")}return o().then(s.bind(this,e))}function d(e){if(e.draft){return new Promise(function(t,n){sap.ui.require(["sap/ui/fl/write/api/FeaturesAPI"],function(r){r.isVersioningEnabled(e.layer).then(function(r){if(r){t()}else{n(`Draft is not supported for the given layer: ${e.layer}`)}})})})}return Promise.resolve()}function l(e,n){var r=n.filter(function(n){return n.getState()===t.LifecycleState.NEW&&n.getFileType()===e.getFileType()});var a=r.findIndex(function(t){return t.getId()===e.getId()});return a}async function f(e){var n;if(e.allChanges&&e.allChanges.length&&e.condensedChanges){await g(e.condensedChanges);n={namespace:e.allChanges[0].convertToFileContent().namespace,layer:e.layer};var r=0;var a=false;e.allChanges.forEach(function(i,o){var s=i.getFileType();var u=l(i,e.condensedChanges);if(i.condenserState){var c=false;if(i.condenserState==="delete"){if(i.getState()===t.LifecycleState.PERSISTED||i.getState()===t.LifecycleState.DELETED){n.delete||={};n.delete[s]||=[];n.delete[s].push(i.getId())}r++}else if(e.condensedChanges.length){c=e.allChanges[o].getId()!==e.condensedChanges[o-r].getId()}if((i.condenserState==="select"&&i.getState()!==t.LifecycleState.NEW||i.condenserState==="update")&&c&&!a){var d=e.condensedChanges.slice(o-r).map(function(e){return e.getId()});n.reorder||={};n.reorder[s]||=[];n.reorder[s]=d;a=true}if(i.condenserState==="select"&&i.getState()===t.LifecycleState.NEW){n.create||={};n.create[s]||=[];n.create[s][u]={};n.create[s][u][i.getId()]=i.convertToFileContent()}else if(i.condenserState==="update"){n.update||={};n.update[s]||=[];var f=n.update[s].length;n.update[s][f]={};n.update[s][f][i.getId()]={content:i.getContent()}}delete i.condenserState}else if(i.getState()===t.LifecycleState.NEW){n.create||={};n.create[s]||=[];n.create[s][u]={};n.create[s][u][i.getId()]=i.convertToFileContent()}})}return n}async function g(e){const t=await a.load();const n=t.version;e.forEach(e=>{if(e.isA&&e.isA("sap.ui.fl.apply._internal.flexObjects.FlexObject")){const t=e.getSupportInformation();t.sapui5Version||=n;e.setSupportInformation(t)}else{e.support||={};e.support.sapui5Version||=n}})}function p(t,n){return d(n).then(c.bind(undefined,n.layer)).then(function(r){n.url=r.url;var a=e.get(t,r.writeConnectorModule);return a.call(r.writeConnectorModule,n)})}var h={};h.write=async function(e){await g(e.flexObjects);return p("write",e)};h.condense=async function(e){const t=Object.assign({},e);const n=await f(t);if(!n){return Promise.reject("No changes were provided")}if(n.create||n.reorder||n.update||n.delete){var r=[];if(n.create){r=(n.create.change?n.create.change:[]).concat(n.create.ctrl_variant?n.create.ctrl_variant:[])}t.flexObjects=n;const e=await p("condense",t);if(e&&e.status&&e.status===205&&r.length){var a=r.map(function(e){return Object.values(e).pop()});e.response=a}return e}return undefined};h.remove=function(e){return p("remove",e)};h.update=function(e){return p("update",e)};h.reset=function(e){return p("reset",e)};h.getFlexInfo=function(e){return p("getFlexInfo",e)};h.getContexts=function(e){return p("getContexts",e)};h.loadContextDescriptions=function(e){return p("loadContextDescriptions",e)};h.isContextSharingEnabled=function(e){return p("isContextSharingEnabled",e)};h.loadFeatures=function(){return o().then(u).then(r.mergeResults)};h.publish=function(e){return p("publish",e)};h.contextBasedAdaptation={create(e){return o().then(p.bind(undefined,"contextBasedAdaptation.create",e))},reorder(e){return o().then(p.bind(undefined,"contextBasedAdaptation.reorder",e))},update(e){return o().then(p.bind(undefined,"contextBasedAdaptation.update",e))},load(e){return o().then(p.bind(undefined,"contextBasedAdaptation.load",e))},remove(e){return o().then(p.bind(undefined,"contextBasedAdaptation.remove",e))}};h.versions={load(e){return o().then(p.bind(undefined,"versions.load",e))},activate(e){return o().then(p.bind(undefined,"versions.activate",e))},discardDraft(e){return o().then(p.bind(undefined,"versions.discardDraft",e))},publish(e){return o().then(p.bind(undefined,"versions.publish",e))}};h.translation={getSourceLanguages(e){return o().then(p.bind(undefined,"translation.getSourceLanguages",e))},getTexts(e){return o().then(p.bind(undefined,"translation.getTexts",e))},postTranslationTexts(e){return o().then(p.bind(undefined,"translation.postTranslationTexts",e))}};return h});
//# sourceMappingURL=Storage.js.map