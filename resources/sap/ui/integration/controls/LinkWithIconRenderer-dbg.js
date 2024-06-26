/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/integration/library",
	"sap/ui/core/Renderer",
	"sap/m/LinkRenderer"
], function(library,
			Renderer,
			LinkRenderer) {
	"use strict";

	/**
	 * LinkWithIconRenderer renderer.
	 * @private
	 */
	var LinkWithIconRenderer = Renderer.extend(LinkRenderer);
	LinkWithIconRenderer.apiVersion = 2;

	/**
	 * @override
	 */
	LinkWithIconRenderer.renderText = function(oRm, oControl) {
		var oIcon = oControl.getAggregation("_icon");

		if (oIcon) {
			oRm.renderControl(oIcon);
		}

		LinkRenderer.renderText.apply(this, arguments);
	};

	return LinkWithIconRenderer;

}, /* bExport= */ true);
