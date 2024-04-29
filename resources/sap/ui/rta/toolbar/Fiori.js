/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Image","./Adaptation","../Utils","sap/base/Log"],function(t,i,e,o){"use strict";var r="sapUiRtaFioriHeaderInvisible";var n=i.extend("sap.ui.rta.toolbar.Fiori",{metadata:{library:"sap.ui.rta"},renderer:"sap.ui.rta.toolbar.AdaptationRenderer",type:"fiori"});n.prototype.init=function(...t){this._oRenderer=e.getFiori2Renderer();this._oFioriHeader=this._oRenderer.getRootControl().getShellHeader();i.prototype.init.apply(this,t)};n.prototype.show=function(...t){this._oFioriHeader.addStyleClass(r);return i.prototype.show.apply(this,t)};n.prototype.buildControls=function(...e){return i.prototype.buildControls.apply(this,e).then(function(i){var e=this._oFioriHeader.getLogo();if(this._oFioriHeader.getShowLogo()&&e){var o=this._oFioriHeader.$().find("#shell-header-icon").get(0);var r;var n;if(o){r=o.getBoundingClientRect().width;n=o.getBoundingClientRect().height;this._checkLogoSize(o,r,n)}this.getControl("iconSpacer").setWidth("8px");this._iLogoWidth=r+8;this.getControl("iconBox").addItem(new t(`${this.getId()}_fragment--sapUiRta_icon`,{src:e,width:r?`${r}px`:r,height:n?`${n}px`:n}))}return i}.bind(this))};n.prototype.hide=function(...t){return i.prototype.hide.apply(this,t).then(function(){this._oFioriHeader.removeStyleClass(r)}.bind(this))};n.prototype._checkLogoSize=function(t,i,e){var r=t.naturalWidth;var n=t.naturalHeight;if(i!==r||e!==n){o.error(["sap.ui.rta: please check Fiori Launchpad logo, expected size is",`${i}x${e},`,`but actual is ${r}x${n}`].join(" "))}};n.prototype._restoreHiddenElements=function(){if(this._iLogoVisibilityLimit&&window.innerWidth>this._iLogoVisibilityLimit){this._setLogoVisibility(true);delete this._iLogoVisibilityLimit}i.prototype._restoreHiddenElements.apply(this)};n.prototype._hideElementsOnIntersection=function(...t){const[e,o]=t;var r;if(o[0].intersectionRatio===0){this.adjustToolbarSectionWidths();this._observeIntersections();return}if(o[0].intersectionRatio<1){if(!this._iLogoVisibilityLimit&&e===i.LEFT_SECTION){var n=o[0].boundingClientRect.width-o[0].intersectionRect.width;r=n>this._iLogoWidth;this._iLogoVisibilityLimit=this._calculateWindowWidth(o);this._setLogoVisibility(false);if(r){i.prototype._hideElementsOnIntersection.apply(this,t)}return}}i.prototype._hideElementsOnIntersection.apply(this,t)};n.prototype._setLogoVisibility=function(t){var i=this.getControl("iconBox");var e=this.getControl("iconSpacer");i.setVisible(t);e.setVisible(t)};n.prototype.destroy=function(...t){this._oFioriHeader.removeStyleClass(r);i.prototype.destroy.apply(this,t)};return n});
//# sourceMappingURL=Fiori.js.map