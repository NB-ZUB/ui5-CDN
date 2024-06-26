/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"./BaseAction",
	"sap/m/Dialog"
], function (
	BaseAction,
	Dialog
) {
	"use strict";

	var HideCardAction = BaseAction.extend("sap.ui.integration.cards.actions.HideCardAction", {
		metadata: {
			library: "sap.ui.integration"
		}
	});

	/**
	 * @override
	 */
	HideCardAction.prototype.execute = function () {
		var oCard = this.getCardInstance(),
			oDialog = oCard.getParent(),
			oHost = oCard.getHostInstance();

		if (oHost && oHost.onHideCard) {
			oHost.onHideCard(oCard);
			return; // @todo should we wait for host and then destroy
		}

		if (oDialog instanceof Dialog) {
			oDialog.close();
			oDialog.attachAfterClose(function () {
				oCard.destroy();
			});
		} else {
			oCard.destroy();
		}
	};

	return HideCardAction;
});