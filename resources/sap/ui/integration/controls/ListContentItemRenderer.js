/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/library","sap/ui/core/Renderer","sap/ui/core/IconPool","sap/m/ListItemBaseRenderer"],function(e,t,n,i){"use strict";var s=t.extend(i);s.apiVersion=2;var r=e.AttributesLayoutType;s.renderLIAttributes=function(e,t){e.class("sapUiIntLCI");var i=t.getLinesCount(),s=t.getIcon();if(i===1){e.class("sapUiIntLCIOneLine");if(s&&!n.isIconURI(s)){e.class("sapUiIntLCIThumbnail")}}else if(i===2){e.class("sapUiIntLCITwoLines")}else{e.class("sapUiIntLCIMultipleLines")}if(t.getActionsStrip()){e.class("sapUiIntLCIWithActionsStrip")}};s.renderLIContent=function(e,t){var n=t.getMicrochart();var i=t.getActionsStrip();e.openStart("div").class("sapUiIntLCIContent").openEnd();e.openStart("div").class("sapUiIntLCIIconAndLines").openEnd();if(!t.isPropertyInitial("icon")||!t.isPropertyInitial("iconInitials")){e.renderControl(t._getAvatar())}e.openStart("div").class("sapUiIntLCILines").openEnd();this.renderTitle(e,t);if(t.getDescription()&&t.getDescriptionVisible()){this.renderDescription(e,t)}this.renderItemAttributes(e,t);if(n){e.renderControl(n)}e.close("div");e.close("div");if(i){e.renderControl(i)}e.close("div")};s.renderTitle=function(e,t){var n=t.getTitle(),i=t.getInfo();e.openStart("div").class("sapUiIntLCITitleWrapper").openEnd();e.openStart("div").class("sapUiIntLCITitle").openEnd().text(n).close("div");if(i&&!t.getDescription()&&t.getInfoVisible()){this.renderInfo(e,t)}e.close("div")};s.renderDescription=function(e,t){var n=t.getDescription(),i=t.getInfo();e.openStart("div").class("sapUiIntLCIDescriptionWrapper").openEnd();e.openStart("div").class("sapUiIntLCIDescription").openEnd().text(n).close("div");if(i&&t.getInfoVisible()){this.renderInfo(e,t)}e.close("div")};s.renderInfo=function(e,t){var n=t._getObjectStatus();e.openStart("div").class("sapUiIntLCIInfo").openEnd();if(n){e.renderControl(n)}e.close("div")};s.renderItemAttributes=function(e,t){var n=t._getVisibleAttributes(),i=t.getAttributesLayoutType(),s=n.length,o;if(!s){return}for(o=0;o<s;o++){e.openStart("div").class("sapUiIntLCIAttrRow").openEnd();e.openStart("span").class("sapUiIntLCIAttrCell").openEnd();e.renderControl(n[o]);e.close("span");if(i===r.TwoColumns){o++;if(n[o]){e.openStart("span").class("sapUiIntLCIAttrCell").class("sapUiIntLCIAttrSecondCell").openEnd();e.renderControl(n[o]);e.close("span")}}e.close("div")}};return s},true);
//# sourceMappingURL=ListContentItemRenderer.js.map