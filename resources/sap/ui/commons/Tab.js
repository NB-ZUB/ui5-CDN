/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Panel","./library","sap/ui/core/library"],function(e,t,r){"use strict";var o=r.Scrolling;var l=e.extend("sap.ui.commons.Tab",{metadata:{library:"sap.ui.commons",deprecated:true,properties:{verticalScrolling:{type:"sap.ui.core.Scrolling",group:"Behavior",defaultValue:o.None},horizontalScrolling:{type:"sap.ui.core.Scrolling",group:"Behavior",defaultValue:o.None},closable:{type:"boolean",group:"Misc",defaultValue:false},selected:{type:"boolean",group:"Behavior",defaultValue:false,deprecated:true}}},renderer:null});l.prototype.init=function(){this.oScrollDomRef=null};l.prototype.rerender=function(){var e=this.getParent();if(e){e.rerender()}};l.prototype.invalidate=function(){var e=this.getParent();if(e){e.invalidate()}};l.prototype.onAfterRendering=function(){this.oScrollDomRef=this.getDomRef("panel");if(this.oScrollDomRef){var e=this.getProperty("scrollTop")||0;this.oScrollDomRef.scrollTop=e;var t=this.getProperty("scrollLeft")||0;this.oScrollDomRef.scrollLeft=t}};l.prototype.getScrollLeft=function(){var e=0;if(this.oScrollDomRef){e=this.oScrollDomRef.scrollLeft;this.setProperty("scrollLeft",e,true)}return e};l.prototype.setScrollLeft=function(e){this.setProperty("scrollLeft",e,true);if(this.oScrollDomRef){this.bIgnoreScrollEvent=true;this.oScrollDomRef.scrollLeft=e}return this};l.prototype.getScrollTop=function(){var e=0;if(this.oScrollDomRef){e=this.oScrollDomRef.scrollTop;this.setProperty("scrollTop",e,true)}return e};l.prototype.setScrollTop=function(e){this.setProperty("scrollTop",e,true);if(this.oScrollDomRef){this.bIgnoreScrollEvent=true;this.oScrollDomRef.scrollTop=e}return this};l.prototype.setEnabled=function(e){if(e==this.getEnabled()){return this}var t=this.getDomRef();var r=this.getParent();if(!t||!e&&this.$().hasClass("sapUiTabSel")||e&&r&&r.getSelectedIndex&&r.getSelectedIndex()<0){this.setProperty("enabled",e,false);if(r&&r._getActualSelectedIndex){var o=r._getActualSelectedIndex();r.setProperty("selectedIndex",o,true)}}else{this.setProperty("enabled",e,true);this.$().toggleClass("sapUiTab",e).toggleClass("sapUiTabDsbl",!e).attr("aria-disabled",!e)}return this};l.prototype.setWidth=function(e){this.setProperty("width",e,true);return this};l.prototype.setApplyContentPadding=function(e){this.setProperty("applyContentPadding",e,true);return this};l.prototype._handleTrigger=function(e){};return l});
//# sourceMappingURL=Tab.js.map