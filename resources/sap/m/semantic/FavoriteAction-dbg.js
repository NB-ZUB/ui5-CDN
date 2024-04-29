/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/m/semantic/SemanticToggleButton'], function(SemanticToggleButton) {
	"use strict";

	/**
	 * Constructor for a new FavoriteAction.
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Optional initial settings for the new control:  a map/JSON-object with initial property values, event listeners etc. for the new object
	 *
	 * @class
	 * A FavoriteAction button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * @extends sap.m.semantic.SemanticToggleButton
	 *
	 * @author SAP SE
	 * @version 1.120.12
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.FavoriteAction
	 */

	var FavoriteAction = SemanticToggleButton.extend("sap.m.semantic.FavoriteAction", /** @lends sap.m.semantic.FavoriteAction.prototype */ {
		metadata: {
			library: "sap.m"
		}
	});

	return FavoriteAction;

});