/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/rta/plugin/Plugin","sap/ui/dt/Overlay","sap/ui/dt/OverlayRegistry","sap/ui/dt/util/ZIndexManager","sap/ui/dt/Util"],function(e,t,n,i,r,a){"use strict";var o=t.extend("sap.ui.rta.plugin.Resize",{metadata:{library:"sap.ui.rta",properties:{handle:"object",dragging:"boolean"},associations:{},events:{}}});var s="sapUiRtaResizeHandle";var l="sapUiRtaResizeHandleExtension";var h="sapUiRtaFullScreenDiv";var d=15;var c=e.getRTL();var u=c?-1:1;var v=c?"right":"left";var g=15*u;function m(e){return e.getDomRef().offsetWidth}function f(){this._oFullScreenDiv=document.createElement("div");this._oFullScreenDiv.className=h;this._oFullScreenDiv.style["z-index"]=r.getNextZIndex();var e=n.getOverlayContainer()[0];e.append(this._oFullScreenDiv)}function p(){this._oFullScreenDiv.removeEventListener("mouseup",this._fnOnMouseUp);this._oFullScreenDiv.removeEventListener("mousemove",this._fnOnMouseMove);this._oFullScreenDiv.remove();delete this._oFullScreenDiv}o.prototype._isEditable=function(e){var t=this.getAction(e);if(t&&t.handler){return Promise.resolve(this.hasStableId(e))}return this._checkChangeHandlerAndStableId(e)};o.prototype._createResizeCommand=function(e,t,n){var i=this.getVariantManagementReference(e);return this.getCommandFactory().getCommandFor(t.selectorElement,"resize",t.changeSpecificData,undefined,i).then(function(e){return n.addCommand(e)})};o.prototype._createCompositeCommand=function(e,t,n){var i;return this.getCommandFactory().getCommandFor(t,"composite").then(function(t){i=t;return n.reduce(function(t,n){return t.then(this._createResizeCommand.bind(this,e,n,i))}.bind(this),Promise.resolve())}.bind(this)).then(function(){return i})};o.prototype._createCommand=function(e,t){var n=e.getElement();var i=this.getAction(e);var r=i.handler;return Promise.resolve().then(function(){if(r){var o={newWidth:t};return r(n,o).then(function(t){if(t.length>0){return this._createCompositeCommand(e,n,t)}return undefined}.bind(this)).catch(function(e){throw a.propagateError(e,"Resize#handler","Error occurred during handler execution","sap.ui.rta.plugin")})}return this._createCompositeCommand(e,n,[{changeSpecificData:{changeType:i.changeType,content:{resizedElementId:n.getId(),newWidth:t}},selectorElement:n}])}.bind(this)).then(function(e){if(e&&e.getCommands().length>0){this.fireElementModified({command:e})}}.bind(this))};o.prototype._onHandleMouseDown=function(e,t){this.setBusy(true);if(t.detail===2){this._onDoubleClick(e);this.setBusy(false);return}f.call(this);var n=this.getAction(e);var i=this.getHandle();var r=e.getElement();var a=e.getDomRef();var o=Math.round(a.getBoundingClientRect()[v]);var s=Math.round(i.offsetWidth/2);var h=t.clientX;var d;var c=m(e);i.style[v]=`${(h-o)*u-s}px`;this.setDragging(true);e.focus();this._fnOnMouseMove=y.bind(this);this._fnOnMouseUp=_.bind(this);if(n.getHandleExtensionHeight){var g=n.getHandleExtensionHeight(r);d=document.createElement("div");d.className=l;d.style.height=`${g}px`;d.style["pointer-events"]="none"}function y(t){if(d){i.append(d);i.extension=d}c=(t.clientX-o)*u+s;c=this._limitNewWidth(e,c);i.style[v]=`${c-i.offsetWidth}px`}function _(){this._finalizeResize(e,c);p.call(this);this.setDragging(false);this.setBusy(false)}this._oFullScreenDiv.addEventListener("mousemove",this._fnOnMouseMove);this._oFullScreenDiv.addEventListener("mouseup",this._fnOnMouseUp)};o.prototype._onDoubleClick=function(e){var t=this.getAction(e);if(t.getDoubleClickWidth){var n=t.getDoubleClickWidth(e.getElement());this._finalizeResize(e,n)}};o.prototype._finalizeResize=function(e,t){var n=m(e);if(t===n){return Promise.resolve()}var i=function(){e.setSelected(true);e.focus();e.detachEvent("geometryChanged",i,this);e.attachEvent("geometryChanged",this._onOverlayGeometryChanged,this)};e.detachEvent("geometryChanged",this._onOverlayGeometryChanged,this);e.attachEvent("geometryChanged",i,this);e.setSelected(false);return this._createCommand(e,t).catch(function(e){i.call(this);throw a.propagateError(e,"Resize","Error occurred during resize command creation","sap.ui.rta.plugin")}.bind(this))};o.prototype._limitNewWidth=function(e,t){var n=this.getAction(e);var i=e.getElement();var r=n.getSizeLimits&&n.getSizeLimits(i);var a=r&&r.minimumWidth||d;var o=r&&r.maximumWidth;if(a&&t<a){t=a}if(o&&t>o){t=o}return t};o.prototype._createHandle=function(e){var t=this.getHandle();var n=i.getOverlay(e.target.id);if(!this.isEnabled([n])){this._removeHandle(false);return}if(!t&&!this.getDragging()){var a=n.getDomRef();var o=document.createElement("div");o.className=s;a.append(o);o.style[v]=`${a.clientWidth-o.clientWidth}px`;o.style["z-index"]=r.getNextZIndex();o.addEventListener("mousedown",this._onHandleMouseDown.bind(this,n));this.setHandle(o)}};o.prototype._removeHandle=function(e){var t=this.getHandle();if(t&&(e||!this.getDragging())){t.remove();this.setDragging(false);this.setHandle(null)}};o.prototype._onOverlayMouseMove=function(e){var t=i.getOverlay(e.target.id);if(t&&t.isSelectable()){this._createHandle(e)}};o.prototype._onOverlayKeyDown=function(e){var t=i.getOverlay(e.target.id);var n;if(e.key==="Escape"){this._removeHandle(true);if(this._oFullScreenDiv){p.call(this)}e.stopImmediatePropagation();return}if(!e.shiftKey||e.ctrlKey||e.metaKey||e.altKey){return}var r=m(t);if(e.key==="ArrowLeft"||e.key==="ArrowRight"){var a=e.key==="ArrowLeft"?g*-1:g;n=this._limitNewWidth(t,r+a);this._finalizeResize(t,n)}};o.prototype._onOverlayMouseLeave=function(){this._removeHandle(false)};o.prototype._onOverlaySelectionChange=function(e){if(e.getParameter("selected")){this._removeHandle(false);e.target={id:e.getParameter("id")};this._createHandle(e)}else{this._removeHandle()}};o.prototype._onOverlayFocus=function(e){var t=i.getOverlay(e.target.id);if(t.getSelected()&&!this.getHandle()){this._createHandle(e)}};o.prototype._onOverlayGeometryChanged=function(e){var t=i.getOverlay(e.getParameter("id"));if(t.getSelected()&&t.hasFocus()){this._removeHandle();this._createHandle(e)}};o.prototype.registerElementOverlay=function(...e){const[n]=e;if(this.isEnabled([n])){n.attachBrowserEvent("mousemove",this._onOverlayMouseMove,this);n.attachBrowserEvent("mouseleave",this._onOverlayMouseLeave,this);n.attachBrowserEvent("keydown",this._onOverlayKeyDown,this);n.attachBrowserEvent("focus",this._onOverlayFocus,this);n.attachEvent("selectionChange",this._onOverlaySelectionChange,this);n.attachEvent("geometryChanged",this._onOverlayGeometryChanged,this)}t.prototype.registerElementOverlay.apply(this,e)};o.prototype.deregisterElementOverlay=function(...e){const[n]=e;n.detachBrowserEvent("mousemove",this._onOverlayMouseMove,this);n.detachBrowserEvent("mouseleave",this._onOverlayMouseLeave,this);n.detachBrowserEvent("keydown",this._onOverlayKeyDown,this);n.detachBrowserEvent("focus",this._onOverlayFocus,this);n.detachEvent("selectionChange",this._onOverlaySelectionChange,this);n.detachEvent("geometryChanged",this._onOverlayGeometryChanged,this);t.prototype.deregisterElementOverlay.apply(this,e)};o.prototype.getActionName=function(){return"resize"};return o});
//# sourceMappingURL=Resize.js.map