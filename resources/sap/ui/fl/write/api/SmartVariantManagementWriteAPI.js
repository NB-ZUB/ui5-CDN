/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/flexState/compVariants/Utils","sap/ui/fl/apply/_internal/flexState/ManifestUtils","sap/ui/fl/write/api/ContextBasedAdaptationsAPI","sap/ui/fl/write/_internal/flexState/compVariants/CompVariantState","sap/ui/fl/write/_internal/transport/TransportSelection","sap/ui/fl/registry/Settings"],function(t,e,a,n,r,i){"use strict";function o(a,n){a.persistencyKey=t.getPersistencyKey(a.control);a.reference||=e.getFlexReferenceForControl(a.control);return n(a)}function c(t){var n=t.layer||t.changeSpecificData&&t.changeSpecificData.layer;if(n){t.changeSpecificData||={};t.reference||=e.getFlexReferenceForControl(t.control);var r={layer:n,control:t.control,reference:t.reference};if(a.hasAdaptationsModel(r)){t.changeSpecificData.adaptationId=a.getDisplayedAdaptationId(r)}}}var s={addVariant(t){c(t);return o(t,n.addVariant)},updateVariant(t){c(t);return o(t,n.updateVariant)},updateVariantContent(t){c(t);t.action=n.updateActionType.UPDATE;return o(t,n.updateVariant)},saveVariantContent(t){t.action=n.updateActionType.SAVE;return o(t,n.updateVariant)},discardVariantContent(t){t.action=n.updateActionType.DISCARD;return o(t,n.discardVariantContent)},updateVariantMetadata(t){c(t);t.action=n.updateActionType.UPDATE_METADATA;return o(t,n.updateVariant)},removeVariant(t){c(t);return o(t,n.removeVariant)},revert(t){return o(t,n.revert)},save(t){return o(t,n.persist)},setDefaultVariantId(t){c(t);return o(t,n.setDefault)},isVariantSharingEnabled(){return i.getInstance().then(function(t){return t.isVariantSharingEnabled()})},isVariantPersonalizationEnabled(){return i.getInstance().then(function(t){return t.isVariantPersonalizationEnabled()})},isVariantAdaptationEnabled(){return i.getInstance().then(function(t){return t.isVariantAdaptationEnabled()})},overrideStandardVariant(t){o(t,n.overrideStandardVariant)},revertSetDefaultVariantId(t){return o(t,n.revertSetDefaultVariantId)},_getTransportSelection(){function t(){var t=new URLSearchParams(window.location.search).get("sap-ui-layer")||"";return!!t}var e=new r;e.selectTransport=function(a,n,i,o,c,s){if(!t()){n(e._createEventObject(a,{transportId:""}));return}r.prototype.selectTransport.call(this,a,n,i,o,c,s)};return e}};return s});
//# sourceMappingURL=SmartVariantManagementWriteAPI.js.map