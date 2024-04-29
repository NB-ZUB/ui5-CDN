/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Component","sap/ui/core/Element","sap/ui/fl/apply/_internal/controlVariants/URLHandler","sap/ui/fl/Utils"],function(e,t,n,r,a){"use strict";var o="$FlexVariants";function i(e){var t=e.getModel(o);if(t){return Promise.resolve(t)}return new Promise(function(n){function r(){t=e.getModel(o);if(t){e.detachModelContextChange(r);n(t)}}e.attachModelContextChange(r)})}var l={getVariantModelName(){return o},getVariantModel(e){return i(e)},clearVariantParameterInURL(t){var n;var i=a.getAppComponentForControl(t.control);var l=i&&i.getModel(o);if(!l){e.error("Variant model could not be found on the provided control");return}if(t.control.isA("sap.ui.fl.variants.VariantManagement")){var c=l.getLocalId(t.control.getId(),i);var d=r.removeURLParameterForVariantManagement({model:l,vmReference:c});n=d.parameters}r.update({parameters:n||[],updateURL:true,updateHashEntry:!!l,model:l||{},silent:!l})},activateVariant(r){function i(t){e.error(t);return Promise.reject(t)}var l;if(typeof r.element==="string"){l=t.getComponentById(r.element);if(!(l instanceof t)){l=n.getElementById(r.element);if(!(l instanceof n)){return i(Error("No valid component or control found for the provided ID"))}}}else if(r.element instanceof t||r.element instanceof n){l=r.element}var c=a.getAppComponentForControl(l);if(!c){return i(Error("A valid variant management control or component (instance or ID) should be passed as parameter"))}var d=c.getModel(o);if(!d){return i(Error("No variant management model found for the passed control or application component"))}var p=d.getVariantManagementReference(r.variantReference).variantManagementReference;if(!p){return i(Error("A valid control or component, and a valid variant/ID combination are required"))}return d.waitForVMControlInit(p).then(function(){return d.updateCurrentVariant({variantManagementReference:p,newVariantReference:r.variantReference,appComponent:c})}).catch(function(t){e.error(t);throw t})},attachVariantApplied(e){var t=e.selector.id&&n.getElementById(e.selector.id)||e.selector;var r=a.getAppComponentForControl(t);i(r).then(function(n){n.attachVariantApplied({vmControlId:e.vmControlId,control:t,callback:e.callback,callAfterInitialVariant:e.callAfterInitialVariant})})},detachVariantApplied(e){var t=e.selector.id&&n.getElementById(e.selector.id)||e.selector;var r=a.getAppComponentForControl(t);i(r).then(function(n){n.detachVariantApplied(e.vmControlId,t.getId())})}};return l});
//# sourceMappingURL=ControlVariantApplyAPI.js.map