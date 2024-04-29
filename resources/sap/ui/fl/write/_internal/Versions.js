/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/ChangePersistenceFactory","sap/ui/fl/Utils","sap/ui/fl/initial/api/Version","sap/ui/fl/registry/Settings","sap/ui/fl/write/_internal/Storage","sap/ui/model/json/JSONModel","sap/ui/model/BindingMode"],function(e,r,t,n,i,s,a){"use strict";var o={};var f=9;var l=f+1;function d(e,r){return c(e,r).then(function(e){e.setDefaultBindingMode(a.OneWay);e.setSizeLimit(f);e.setDirtyChanges=function(r){e.setProperty("/dirtyChanges",r);e.updateDraftVersion();e.updateBindings(true)};e.updateDraftVersion=function(){var r=e.getProperty("/versions");var n=e.getProperty("/versioningEnabled");var i=e.getProperty("/dirtyChanges");var s=e.getProperty("/backendDraft");var a=n&&(i||s);e.setProperty("/draftAvailable",a);if(i){e.setProperty("/displayedVersion",t.Number.Draft)}if(!y(r)&&a){r.splice(0,0,{version:t.Number.Draft,type:t.Type.Draft,filenames:[],isPublished:false})}if(y(r)&&!a){r.shift();e.setProperty("/displayedVersion",e.getProperty("/persistedVersion"))}var o=e.getProperty("/displayedVersion")!==e.getProperty("/activeVersion");e.setProperty("/activateEnabled",o)};return e})}function u(e,r){if(r!==t.Number.Original&&r!==t.Number.Draft){return e.some(function(e){return e.version===r&&e.isPublished===false})}return false}function c(e,n,i){var a;var o=t.Number.Original;var f=y(n);var l=[];if(n.length>0){a=n[0].version}else{a=t.Number.Original}n.forEach(function(e){if(e.version===t.Number.Draft){e.type=t.Type.Draft;e.isPublished=false;l=e.filenames}else{if(o===t.Number.Original){e.type=t.Type.Active;o=e.version}else{e.type=t.Type.Inactive}}});if(i){i.setProperty("/publishVersionEnabled",u(n,a));i.setProperty("/versioningEnabled",e);i.setProperty("/versions",n);i.setProperty("/backendDraft",f);i.setProperty("/dirtyChanges",false);i.setProperty("/draftAvailable",f);i.setProperty("/activateEnabled",f);i.setProperty("/activeVersion",o);i.setProperty("/persistedVersion",a);i.setProperty("/displayedVersion",a);i.setProperty("/draftFilenames",l);i.updateBindings(true)}else{i=r.getUShellService("URLParsing").then(function(i){var d=r.getParameter(t.UrlParameter,i);return new s({publishVersionEnabled:u(n,d||a),versioningEnabled:e,versions:n,backendDraft:f,dirtyChanges:false,draftAvailable:f,activateEnabled:f,activeVersion:o,persistedVersion:d||a,displayedVersion:d||a,draftFilenames:l})})}return i}function p(e,r){var t=[];var n=r.changePersistences;n.forEach(function(e){t=e.getDirtyChanges().concat();e.deleteChanges(t,true)});return t.length>0}function v(r){var t={dirtyChangesExist:false,changePersistences:[]};if(r.reference){var n=e.getChangePersistenceForComponent(r.reference);if(n.getDirtyChanges().length>0){t.dirtyChangesExist=true;t.changePersistences.push(n)}}if(r.nonNormalizedReference){var i=e.getChangePersistenceForComponent(r.nonNormalizedReference);if(i.getDirtyChanges().length>0){t.dirtyChangesExist=true;t.changePersistences.push(i)}}return t}function y(e){return e.some(function(e){return e.version===t.Number.Draft})}function g(e,r){e.setProperty("/backendDraft",false);e.setProperty("/dirtyChanges",false);e.setProperty("/draftAvailable",false);e.setProperty("/activateEnabled",false);e.setProperty("/displayedVersion",r);e.setProperty("/persistedVersion",r);e.updateBindings(true)}var h={};h.initialize=function(e){var r=e.reference;var t=e.layer;e.limit=l;return n.getInstance().then(function(n){var s=n.isVersioningEnabled(t);if(o&&o[r]&&o[r][t]){return o[r][t]}var a=s?i.versions.load(e):Promise.resolve([]);return a.then(function(e){return d(s,e)}).then(function(e){o[r]||={};o[r][t]||={};o[r][t]=e;return o[r][t]})})};h.getVersionsModel=function(e){var r=e.reference;var t=e.layer;if(!h.hasVersionsModel(e)){throw Error(`Versions Model for reference '${r}' and layer '${t}' were not initialized.`)}var n=v(e);if(n.dirtyChangesExist){o[r][t].updateDraftVersion(e)}return o[r][t]};h.hasVersionsModel=function(e){var r=e.reference;var t=e.layer;return!!(o[r]&&o[r][t])};h.clearInstances=function(){o={}};h.updateModelFromBackend=function(e){if(h.hasVersionsModel(e)&&h.getVersionsModel(e).getProperty("/versioningEnabled")){e.limit=l;return i.versions.load(e).then(function(r){var t=h.getVersionsModel(e);return c(t.getProperty("/versioningEnabled"),r,t)})}return undefined};h.onAllChangesSaved=function(e){var r=h.getVersionsModel(e);var n=r.getProperty("/versioningEnabled");var i=r.getProperty("/dirtyChanges");var s=r.getProperty("/draftFilenames");r.setProperty("/draftFilenames",s.concat(e.draftFilenames));r.setProperty("/dirtyChanges",true);r.setProperty("/backendDraft",n&&i||!!e.contextBasedAdaptation);r.updateDraftVersion();r.setProperty("/persistedVersion",t.Number.Draft);r.updateBindings(true)};h.activate=function(e){var r=h.getVersionsModel(e);var n=r.getProperty("/versions");var s=y(n);var a=r.getProperty("/activeVersion");if(e.displayedVersion===a){return Promise.reject("Version is already active")}e.version=e.displayedVersion;var o=v(e);var f=o.changePersistences;var l=f.some(function(e){return e.getDirtyChanges().length>0});if(l){return Promise.reject("unsaved changes exists")}return i.versions.activate(e).then(function(e){n.forEach(function(e){e.type=t.Type.Inactive});e.type=t.Type.Active;e.isPublished=false;if(s){n.shift()}n.splice(0,0,e);r.setProperty("/activeVersion",e.version);r.setProperty("/publishVersionEnabled",true);r.setProperty("/draftFilenames",[]);g(r,e.version)})};h.discardDraft=function(e){var r=h.getVersionsModel(e);var t=v(e);var n=r.getProperty("/backendDraft");var s=n?i.versions.discardDraft(e):Promise.resolve();return s.then(function(){var i=r.getProperty("/versions");i.shift();g(r,r.getProperty("/activeVersion"));var s=p(e,t);return{backendChangesDiscarded:n,dirtyChangesDiscarded:s}})};h.publish=function(e){var r=h.getVersionsModel({reference:e.reference,layer:e.layer});return i.versions.publish(e).then(function(t){if(t!=="Error"&&t!=="Cancel"){r.setProperty("/publishVersionEnabled",false);var n=r.getProperty("/versions");var i=false;n.forEach(function(r){if(r.isPublished){return}if(r.version===e.version){i=true}if(i&&!r.isPublished){r.isPublished=true}})}return t})};return h});
//# sourceMappingURL=Versions.js.map