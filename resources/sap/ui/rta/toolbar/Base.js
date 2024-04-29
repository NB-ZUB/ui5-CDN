/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/HBox","sap/ui/core/Element","sap/ui/core/StaticArea","sap/ui/core/Lib","sap/ui/dt/util/ZIndexManager","sap/ui/model/resource/ResourceModel","sap/ui/rta/util/Animation","./BaseRenderer"],function(t,e,i,o,n,s,r,a){"use strict";var l=t.extend("sap.ui.rta.toolbar.Base",{metadata:{library:"sap.ui.rta",properties:{color:{type:"string",defaultValue:"default"},zIndex:{type:"int"},rtaInformation:{type:"object",defaultValue:{flexSettings:{}}},textResources:"object"}},constructor:function(...e){t.apply(this,e);this._oExtensions={};this.setAlignItems("Center");this.setVisible(false);this.placeToContainer()},type:null,animation:false,renderer:a});l.prototype.init=function(...e){this._oResourceModel=new s({bundle:o.getResourceBundleFor("sap.ui.rta")});t.prototype.init.apply(this,e);this.setModel(this._oResourceModel,"i18n");this._fnOnScrollBound=this._onScroll.bind(this);window.addEventListener("scroll",this._fnOnScrollBound,true);this._pFragmentLoaded=this.buildContent()};l.prototype.exit=function(...e){Object.values(this._oExtensions).forEach(function(t){t.destroy()});this._oExtensions={};window.removeEventListener("scroll",this._fnOnScrollBound,true);t.prototype.exit.apply(this,e)};l.prototype.getExtension=function(t,e){if(!Object.keys(this._oExtensions).includes(t)){this._oExtensions[t]=new e({toolbar:this})}return this._oExtensions[t]};l.prototype.setTextResources=function(t){this.setProperty("textResources",t);this._oResourceModel=new s({bundle:o.getResourceBundleFor("sap.ui.rta")})};l.prototype.onFragmentLoaded=function(){return Promise.resolve()};l.prototype.eventHandler=function(t,e){this[`fire${t}`](e.getParameters())};l.prototype.buildControls=function(){return Promise.resolve([])};l.prototype.placeToContainer=function(){this.placeAt(i.getDomRef())};l.prototype.buildContent=function(){return this.buildControls().then(function(t){t.forEach(this.addItem,this)}.bind(this))};l.prototype.onFragmentLoaded=function(){return this._pFragmentLoaded};l.prototype.show=function(t){return new Promise(function(t){var e={onAfterRendering(){this.removeEventDelegate(e);t()}};this.addEventDelegate(e,this);this.bringToFront();this.setVisible(true)}.bind(this)).then(function(){if(t&&typeof t==="function"){t()}return this.animation?r.waitTransition(this.getDomRef(),this.addStyleClass.bind(this,"is_visible")):Promise.resolve()}.bind(this)).then(function(){this.focus()}.bind(this))};l.prototype.hide=function(t){var e=Promise.resolve();if(this.animation){if(t){this.removeStyleClass("is_visible")}else{e=r.waitTransition(this.getDomRef(),this.removeStyleClass.bind(this,"is_visible"))}}return e.then(function(){this.setVisible(false)}.bind(this))};l.prototype.getControl=function(t){return e.getElementById(`sapUiRta_${t}`)};l.prototype.bringToFront=function(){this.setZIndex(n.getNextZIndex())};l.prototype._onScroll=function(){var t=this.getDomRef();if(!t){return}var e="sapUiRtaToolbar_scrolling";t.classList.toggle(e,window.scrollY>0)};return l});
//# sourceMappingURL=Base.js.map