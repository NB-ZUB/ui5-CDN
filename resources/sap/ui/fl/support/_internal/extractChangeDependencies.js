/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Element","sap/ui/fl/apply/_internal/flexState/ManifestUtils","sap/ui/thirdparty/jquery"],function(e,n,a,jQuery){"use strict";function i(e){var i;var t=document.querySelector(".sapUiComponentContainer");t=Array.isArray(t)?t:[t];t.some(function(t){var s=n.getElementById(t.id);var r=s&&s.getComponentInstance();if(r&&a.getFlexReferenceForControl(r)===e){i=r;return true}});return i}function t(n,a){var t=i(a.sComponentName);for(var r in n._mChangesEntries){var o=n._mChangesEntries[r];a.mChangesEntries[r]={mDefinition:o.convertToFileContent(),aControlsDependencies:[],aDependencies:[]};if(o._aDependentSelectorList&&t){o._aDependentSelectorList.forEach(function(n){var i={bPresent:!!e.bySelector(n,t),aAppliedChanges:[],aFailedChangesJs:[],aFailedChangesXml:[],aNotApplicableChanges:[]};a.mControlData[n.id]=i})}}s(n,a)}function s(e,n){for(var a in e._mChangesInitial.mDependencies){var i=e._mChangesInitial.mDependencies[a];n.mChangesEntries[a].aControlsDependencies=i.controlsDependencies;n.mChangesEntries[a].aDependencies=i.dependencies}}function r(e,n){jQuery.each(e._mVariantsChanges,function(e,a){n.mVariantsChanges[e]={mDefinition:a._oDefinition}})}function o(e,n,a,i,t){if(t){a[i]=t;a[i].map(function(a){if(!(a in e[n])){e[n].push(a)}})}}function l(e,n){var a=e.getCustomData();var i=[];a.forEach(function(e){var a=e.getKey();if(a.startsWith(n)){i.push(a.replace(n,""))}});return i}function p(e,a){for(var i in e._mChanges.mChanges){var t={bPresent:false,aAppliedChanges:[],aFailedChangesJs:[],aFailedChangesXml:[],aNotApplicableChanges:[]};var s=n.getElementById(i);if(s){t.bPresent=true;o(a,"aAppliedChanges",t,"aAppliedChanges",l(s,"sap.ui.fl.appliedChanges."));o(a,"aFailedChanges",t,"aFailedChangesJs",l(s,"sap.ui.fl.failedChanges.js."));o(a,"aFailedChanges",t,"aFailedChangesXml",l(s,"sap.ui.fl.failedChanges.xml."));o(a,"aNotApplicableChanges",t,"aNotApplicableChanges",l(s,"sap.ui.fl.notApplicableChanges."))}a.mControlData[i]=t}}return function(e){if(!e){return}var n={sVersion:"1",bIsInvestigationExport:true,mControlData:{},aAppliedChanges:[],aFailedChanges:[],aNotApplicableChanges:[],mChangesEntries:{},mVariantsChanges:{},sComponentName:e._mComponent.name};t(e,n);r(e,n);p(e,n);return n}});
//# sourceMappingURL=extractChangeDependencies.js.map