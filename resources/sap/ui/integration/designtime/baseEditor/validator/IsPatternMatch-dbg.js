/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/integration/designtime/baseEditor/validator/IsValidBinding"
], function (
	IsValidBinding
) {
	"use strict";

	return {
		async: false,
		errorMessage: "BASE_EDITOR.VALIDATOR.FAILED_PATTERN_TEST",
		validate: function (sValue, oConfig) {
			var sModifiers = oConfig.modifiers || "";
			var oRegExp = new RegExp(oConfig.pattern, sModifiers);
			var bExactMatch = oConfig.exactMatch !== false;

			if (sValue === undefined) {
				return true;
			}

			var bIsMatch;
			if (bExactMatch) {
				var aMatches = sValue.match(oRegExp);
				bIsMatch = aMatches && sValue === aMatches[0];
			} else {
				bIsMatch = oRegExp.test(sValue);
			}

			return bIsMatch
				|| IsValidBinding.validate(sValue, { allowPlainStrings: false });
		}
	};
});
