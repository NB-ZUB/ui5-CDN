/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/plugin/Plugin","sap/ui/rta/Utils","sap/ui/rta/command/CompositeCommand","sap/ui/dt/OverlayRegistry","sap/ui/events/KeyCodes","sap/base/Log"],function(e,t,n,r,i,o){"use strict";var a=e.extend("sap.ui.rta.plugin.Remove",{metadata:{library:"sap.ui.rta",properties:{},associations:{},events:{}}});a.prototype.registerElementOverlay=function(...t){const[n]=t;if(this.isEnabled([n])){n.attachBrowserEvent("keydown",this._onKeyDown,this)}e.prototype.registerElementOverlay.apply(this,t)};a.prototype._isEditable=function(e){return this._checkChangeHandlerAndStableId(e)};a.prototype.isEnabled=function(e){var t=e.map(function(e){return this.getResponsibleElementOverlay(e)}.bind(this));var n=t[0];var r=this.getAction(n);var i=false;if(!r){return i}if(typeof r.isEnabled!=="undefined"){if(typeof r.isEnabled==="function"){i=r.isEnabled(n.getElement())}else{i=r.isEnabled}}else{i=true}return i&&this._canBeRemovedFromAggregation(t)};a.prototype._canBeRemovedFromAggregation=function(e){var t=function(e){var t=e.getParentAggregationOverlay();if(t){var n=this.getAction(t);return!!(n&&n.removeLastElement)}return false}.bind(this);var n=e[0];var i=n.getElement();var o=i.getParent();if(!o){return false}var a=o.getAggregation(i.sParentAggregationName);if(!Array.isArray(a)){return true}var s=e.length;var l=a.filter(function(e){var t=r.getOverlay(e);return!(t&&t.getElementVisibility())});var g=l.length+s===a.length;if(g){return t(n)}return true};a.prototype._getConfirmationText=function(e){var t=this.getAction(e);if(t&&t.getConfirmationText){return t.getConfirmationText(e.getElement())}};a.prototype.deregisterElementOverlay=function(...t){const[n]=t;if(this.isEnabled([n])){n.detachBrowserEvent("keydown",this._onKeyDown,this)}e.prototype.deregisterElementOverlay.apply(this,t)};a.prototype._onKeyDown=function(e){if(e.keyCode===i.DELETE||e.keyCode===i.BACKSPACE){e.stopPropagation();this.removeElement()}};a.prototype.removeElement=function(e){var t=e||this.getSelectedOverlays();t=t.filter(function(e){return this.isEnabled([e])},this);if(t.length>0){this.handler(t)}};a.prototype._getRemoveCommand=function(e,t,n){return this.getCommandFactory().getCommandFor(e,"Remove",{removedElement:e},t,n)};a.prototype._fireElementModified=function(e){if(e.getCommands().length){this.fireElementModified({command:e})}};a.prototype.handler=function(e){var r=[];var i=new n;function s(e){e.setSelected(true);setTimeout(function(){e.focus()},0)}var l=a._getElementToFocus(e);e.forEach(function(n){var o=this.getResponsibleElementOverlay(n);var a=o.getElement();var s=o.getDesignTimeMetadata();var g=this.getVariantManagementReference(o);var u=this._getConfirmationText(o);r.push(Promise.resolve().then(function(){if(u){return t.openRemoveConfirmationDialog(a,u)}return true}).then(function(e){if(!e){throw Error("Cancelled")}return this._getRemoveCommand(a,s,g)}.bind(this)).then(function(e){i.addCommand(e)}).catch(function(t){if(t&&t.message==="Cancelled"){if(e.length===1){l=n}}else{throw t}}));n.setSelected(false)},this);if(r.length){return Promise.all(r).then(function(){s(l);this._fireElementModified(i)}.bind(this)).catch(function(e){o.error("Error during remove: ",e)})}};a._getElementToFocus=function(e){var t;if(e.length===1){var n=e[0];var i=n.getParent().getAggregation(n.sParentAggregationName);if(i.length>1){var o=i.indexOf(n);var a=i.slice(o+1);if(o!==0){a=a.concat(i.slice(0,o).reverse())}t=a.filter(function(e){return e.getElement().getVisible()}).shift()}}t||=r.getOverlay(e[0].getRelevantContainer());return t};a.prototype.getMenuItems=function(e){return this._getMenuItems(e,{pluginId:"CTX_REMOVE",rank:60,icon:"sap-icon://less"})};a.prototype.getActionName=function(){return"remove"};return a});
//# sourceMappingURL=Remove.js.map