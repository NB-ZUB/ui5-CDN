/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/restricted/_omit","sap/base/util/restricted/_pick","sap/ui/core/Core","sap/ui/core/Element","sap/ui/fl/Layer","sap/ui/fl/Utils","sap/ui/fl/apply/_internal/flexObjects/CompVariant","sap/ui/fl/apply/_internal/flexObjects/CompVariantRevertData","sap/ui/fl/apply/_internal/flexObjects/FlexObjectFactory","sap/ui/fl/apply/_internal/flexObjects/RevertData","sap/ui/fl/apply/_internal/flexObjects/States","sap/ui/fl/apply/_internal/flexObjects/UpdatableChange","sap/ui/fl/apply/_internal/flexState/compVariants/CompVariantMerger","sap/ui/fl/apply/_internal/flexState/FlexState","sap/ui/fl/initial/api/Version","sap/ui/fl/registry/Settings","sap/ui/fl/write/_internal/Storage","sap/ui/fl/write/_internal/Versions"],function(e,t,n,a,r,i,o,s,c,p,f,u,l,d,g,v,y,C){"use strict";function S(e,t){var n=h("/draftFilenames",t);if(n){return e.getState()===f.LifecycleState.NEW||n.includes(e.getId())}return true}function h(e,t){var t={reference:t.reference,layer:t.layer};if(C.hasVersionsModel(t)){return C.getVersionsModel(t).getProperty(e)}return undefined}function m(e,t){var n=e.getFlexObjectMetadata?e.getFlexObjectMetadata().changeType:e.getChangeType();if(!["defaultVariant","updateVariant"].includes(n)){return false}var a=e.getLayer()===t.layer;var r=e.getFlexObjectMetadata().packageName;var i=!r||r==="$TMP";return a&&i&&S(e,t)}function V(e,t){if(t.isVariant&&t.isVariant()){return e.variants}var n=t.getChangeType();switch(n){case"defaultVariant":return e.defaultVariants;case"standardVariant":return e.standardVariants;default:return e.changes}}function I(e,t){for(var n=0;n<e.length;n++){if(e[n].fileName===t.fileName){e.splice(n,1,t);break}}}function x(e,t,n){return y.update({flexObject:e.convertToFileContent(),layer:e.getLayer(),transport:e.getRequest(),parentVersion:n}).then(function(t){if(t&&t.response){e.setResponse(t.response);if(n){C.onAllChangesSaved({reference:t.response.reference,layer:t.response.layer,draftFilenames:t.response.fileName})}}else{e.setState(f.LifecycleState.PERSISTED)}}).then(function(){var n=V(t.changes.comp,e);var a=e.convertToFileContent();I(n,a);return a})}function O(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n].fileName||e[n].getId()&&e[n].getId();if((a||e[n].getId())===t){e.splice(n,1);break}}}function b(e,t){delete t.byId[e.getId()];if(e.getChangeType()==="standardVariant"){t.standardVariantChange=undefined}else{O(V(t,e),e.getId())}}function T(e,t,n,a){var r=e.convertToFileContent();return y.remove({flexObject:r,layer:e.getLayer(),transport:e.getRequest(),parentVersion:a}).then(function(){b(e,t)}).then(C.updateModelFromBackend.bind(this,{reference:r.reference,layer:r.layer})).then(function(){O(V(n.changes.comp,e),r.fileName);return r})}function D(e){var t={};if(typeof e.texts==="object"){Object.keys(e.texts).forEach(function(n){t[n]={value:e.texts[n],type:"XFLD"}})}return t}function E(e){return e&&[f.LifecycleState.NEW,f.LifecycleState.DIRTY,f.LifecycleState.DELETED].includes(e.getState())}function U(e){return e.variants.concat(e.changes).concat(e.defaultVariants).concat(e.standardVariantChange)}function R(e){if(e.layer){return e.layer}if(e.isUserDependent){return r.USER}var t=new URLSearchParams(window.location.search).get("sap-ui-layer")||"";t=t.toUpperCase();if(t){return t}if(!e.fileType==="variant"){return r.CUSTOMER}var n=v.getInstanceOrUndef().isPublicLayerAvailable();return n?r.PUBLIC:r.CUSTOMER}function N(e){var t=d.getCompVariantsMap(e.reference)._getOrCreate(e.persistencyKey);return t.byId[e.id]}function F(e){if(e instanceof o){e.removeAllRevertData()}}function L(e,t){e.storeExecuteOnSelection(t.executeOnSelection);e.storeFavorite(t.favorite);e.storeContexts(t.contexts);e.storeName(t.name);e.storeContent(t.content||e.getContent());return e}function M(e,t){e.setExecuteOnSelection(t.executeOnSelection);e.setFavorite(t.favorite);e.setContexts(t.contexts);e.setName(t.name);e.setContent(t.content||e.getContent());return e}function j(e){if(e.layer===r.VENDOR){e.support={user:"SAP"}}else if(v.getInstanceOrUndef()&&v.getInstanceOrUndef().getUserId()){e.support={user:v.getInstanceOrUndef().getUserId()}}}function A(e){const t=d.getCompVariantsMap(e);const n=[];if(t){Object.values(t).forEach(function(e){const t=e.controlId&&a.getElementById(e.controlId);if(t){n.push(t)}})}return n}var w={};w.checkSVMControlsForDirty=function(e){return A(e).some(e=>e.getModified())};w.setDefault=function(e){var t={defaultVariantName:e.defaultVariantId};e.layer||=new URLSearchParams(window.location.search).get("sap-ui-layer")||r.USER;var n=d.getCompVariantsMap(e.reference)._getOrCreate(e.persistencyKey);var a="defaultVariant";var o=n.defaultVariants;var s=o[o.length-1];if(!s||!m(s,e)){var f={fileName:i.createDefaultFileName(a),fileType:"change",changeType:a,layer:e.layer,content:t,namespace:i.createNamespace(e,"changes"),reference:e.reference,selector:{persistencyKey:e.persistencyKey},support:e.support||{}};f.adaptationId=e.changeSpecificData?.adaptationId;f.support.generator||=`CompVariantState.${a}`;s=c.createFromFileContent(f,u);n.defaultVariants.push(s);n.byId[s.getId()]=s;s.addRevertInfo(new p({type:w.operationType.NewChange}))}else{s.addRevertInfo(new p({type:w.operationType.ContentUpdate,content:{previousState:s.getState(),previousContent:s.getContent()}}));s.setContent(t)}return s};w.revertSetDefaultVariantId=function(e){var t=d.getCompVariantsMap(e.reference)._getOrCreate(e.persistencyKey);var n=t.defaultVariants;var a=n[n.length-1];var r=a.popLatestRevertInfo();if(r.getType()===w.operationType.ContentUpdate){a.setContent(r.getContent().previousContent);a.setState(r.getContent().previousState)}else{a.setState(f.LifecycleState.DELETED);t.defaultVariants.pop()}};w.addVariant=function(t){if(!t){return undefined}var n=t.changeSpecificData;n.layer=R(n);n.changeType=n.type;n.texts=D(n);j(n);var a=Object.assign({},n,e(t,"changeSpecificData"));var r=c.createCompVariant(a);var i=d.getCompVariantsMap(t.reference);var o=i._getOrCreate(t.persistencyKey);o.variants.push(r);o.byId[r.getId()]=r;return r};w.updateVariant=function(e){function n(t,n){var a=t.getLayer()===n;var r=t.getFlexObjectMetadata().packageName;var i=!r||r==="$TMP";var o=t.getChanges().some(function(e){return e.getLayer()===n});return t.getPersisted()&&a&&i&&!o&&S(t,e)}function a(t){return t.getChanges().reverse().find(function(t){return t.getChangeType()==="updateVariant"&&m(t,e)})}function i(e,t,n,a){var r={type:n,change:a,content:{previousState:t.getState(),previousContent:t.getContent(),previousFavorite:t.getFavorite(),previousVisible:t.getVisible(),previousExecuteOnSelection:t.getExecuteOnSelection(),previousContexts:t.getContexts(),previousName:t.getName(),previousAction:e.action}};t.addRevertData(new s(r))}function o(e,t){i(e,t,w.operationType.ContentUpdate);if(e.executeOnSelection!==undefined){t.storeExecuteOnSelection(e.executeOnSelection)}if(e.layer===r.PUBLIC){t.storeFavorite(false)}else if(e.favorite!==undefined){t.storeFavorite(e.favorite)}if(e.visible!==undefined){t.storeVisible(e.visible)}if(e.contexts){t.storeContexts(e.contexts)}if(e.name){t.storeName(e.name)}if(e.transportId){t.setRequest(e.transportId)}t.storeContent(e.content||t.getContent())}function p(e,n,a){var r=a.getRevertData()||[];var o=Object.assign({},a.getContent());var s={previousContent:Object.assign({},o),previousState:a.getState(),change:t(Object.assign({},e),["favorite","visible","executeOnSelection","contexts","content","name"])};r.push(s);a.setRevertData(r);if(e.executeOnSelection!==undefined){o.executeOnSelection=e.executeOnSelection}if(e.favorite!==undefined){o.favorite=e.favorite}if(e.visible!==undefined){o.visible=e.visible}if(e.contexts){o.contexts=e.contexts}if(e.content){o.variantContent=e.content}if(e.adaptationId){a.setAdaptationId(e.adaptationId)}if(e.name){a.setText("variantName",e.name)}a.setContent(o);if(e.transportId){a.setRequest(e.transportId)}i(e,n,w.operationType.UpdateVariantViaChangeUpdate,a);l.applyChangeOnVariant(n,a)}function f(e,t){function n(t){var n=d.getCompVariantsMap(e.reference);var a=t.getSelector().persistencyKey;n[a].changes.push(t);n[a].byId[t.getId()]=t}var a={};["favorite","visible","executeOnSelection","contexts"].forEach(function(t){if(e[t]!==undefined){a[t]=e[t]}});if(e.content!==undefined){a.variantContent=e.content}var r=c.createUIChange({changeType:"updateVariant",layer:g,fileType:"change",reference:e.reference,packageName:e.packageName,content:a,selector:{persistencyKey:e.persistencyKey,variantId:t.getVariantId()}});if(e.adaptationId!==undefined){r.setAdaptationId(e.adaptationId)}else if(e.changeSpecificData&&e.changeSpecificData.adaptationId!==undefined){r.setAdaptationId(e.changeSpecificData.adaptationId)}if(e.name){r.setText("variantName",e.name,"XFLD",true)}if(e.transportId){r.setRequest(e.transportId)}n(r);i(e,t,w.operationType.NewChange,r);l.applyChangeOnVariant(t,r)}var u=N(e);var g=R(e);if(e.forceCreate){f(e,u)}else if(n(u,g)){o(e,u)}else{var v=a(u);if(v){p(e,u,v)}else{f(e,u)}}return u};w.discardVariantContent=function(e){var t=N(e);var n=t.getRevertData();if(n.length!==0){var a=n.slice().reverse().some(function(t){if(t.getContent().previousAction===w.updateActionType.SAVE){e.content=t.getContent().previousContent;e.action=w.updateActionType.DISCARD;return true}});if(!a){e.content=n[0].getContent().previousContent;e.action=w.updateActionType.DISCARD}w.updateVariant(e)}return t};w.updateActionType={UPDATE:"update",SAVE:"save",DISCARD:"discard",UPDATE_METADATA:"update_metadata"};w.operationType={StateUpdate:"StateUpdate",ContentUpdate:"ContentUpdate",NewChange:"NewChange",UpdateVariantViaChange:"UpdateVariantViaChange",UpdateVariantViaChangeUpdate:"UpdateVariantViaChangeUpdate"};w.removeVariant=function(e){var t=N(e);var n=t.getState();if(!e.revert){var a=new s({type:w.operationType.StateUpdate,content:{previousState:n}});t.addRevertData(a)}if(n===f.LifecycleState.NEW){var r=d.getCompVariantsMap(e.reference);var i=r._getOrCreate(e.persistencyKey);b(t,i);return t}t.markForDeletion();return t};w.revert=function(e){function n(t){var n=t.getSelector().persistencyKey;var a=d.getCompVariantsMap(e.reference);delete a[n].byId[t.getId()];a[n].changes=a[n].changes.filter(function(e){return e!==t})}var a=N(e);var r=a.getRevertData().pop();a.removeRevertData(r);var i=r.getContent();var o;switch(r.getType()){case w.operationType.ContentUpdate:L(a,Object.assign({name:i.previousName,content:i.previousContent,favorite:i.previousFavorite,executeOnSelection:i.previousExecuteOnSelection,contexts:i.previousContexts},t(e,["reference","persistencyKey","id"])));break;case w.operationType.NewChange:o=r.getChange();a.removeChange(o);n(o);M(a,Object.assign({name:i.previousName,content:i.previousContent,favorite:i.previousFavorite,executeOnSelection:i.previousExecuteOnSelection,contexts:i.previousContexts},t(e,["reference","persistencyKey","id"])));break;case w.operationType.UpdateVariantViaChangeUpdate:o=r.getChange();M(a,Object.assign({name:i.previousName,content:i.previousContent,favorite:i.previousFavorite,executeOnSelection:i.previousExecuteOnSelection,contexts:i.previousContexts},t(e,["reference","persistencyKey","id"])));var s=o.getRevertData().pop();o.setContent(s.previousContent);o.setState(s.previousState);break;case w.operationType.StateUpdate:default:break}a.setState(i.previousState);return a};w.overrideStandardVariant=function(e){var t=d.getCompVariantsMap(e.reference)[e.persistencyKey];var n=t.byId[t.standardVariant.getVariantId()];n.setExecuteOnSelection(!!e.executeOnSelection);var a=n.getChanges();n.removeAllChanges();a.forEach(function(e){l.applyChangeOnVariant(n,e)})};w.persist=async function(e){function t(e,t,n){if(e.getLayer()===r.PUBLIC){e.setFavorite(false)}return y.write({flexObjects:[e.convertToFileContent()],layer:e.getLayer(),transport:e.getRequest(),isLegacyVariant:e.isVariant&&e.isVariant(),parentVersion:n}).then(function(t){if(t&&t.response&&t.response[0]){e.setResponse(t.response[0]);if(n){C.onAllChangesSaved({reference:t.response[0].reference,layer:t.response[0].layer,draftFilenames:[t.response[0].fileName]})}}else{e.setState(f.LifecycleState.PERSISTED)}}).then(function(){const n=e.convertToFileContent();V(t.changes.comp,e).push(n);return n})}function n(e,n,a,r){switch(e.getState()){case f.LifecycleState.NEW:F(e);return t(e,a,r);case f.LifecycleState.DIRTY:F(e);return x(e,a,r);case f.LifecycleState.DELETED:F(e);return T(e,n,a,r);default:return undefined}}const a=e.reference;const i=e.persistencyKey;const o=d.getCompVariantsMap(a);const s=o._getOrCreate(i);const c=await d.getStorageResponse(a);const p=U(s).filter(E);const u=p.map(function(e,t){if(t===0){const t=h("/persistedVersion",{layer:e.getLayer(),reference:e.getFlexObjectMetadata().reference});return n(e,s,c,t).then(function(){const e=p.map(function(e,a){if(a!==0){const a=t?g.Number.Draft:undefined;return n(e,s,c,a)}return undefined});return Promise.all(e)})}return undefined});return Promise.all(u)};w.persistAll=async function(t){const n=e(d.getCompVariantsMap(t),"_getOrCreate","_initialize");const a=[];const r=A(t);for(const e of Object.keys(n)){const n=await w.persist({reference:t,persistencyKey:e});a.push(n)}r.forEach(e=>{e.setModified(false)});return a};w.hasDirtyChanges=function(e){var t=d.getCompVariantsMap(e);var n=[];for(var a in t){var r=t[a];for(var i in r.byId){n.push(r.byId[i])}}return n.some(function(e){return e.getState()!==f.LifecycleState.PERSISTED&&!(e.getVariantId&&e.getVariantId()==="*standard*")})};return w});
//# sourceMappingURL=CompVariantState.js.map