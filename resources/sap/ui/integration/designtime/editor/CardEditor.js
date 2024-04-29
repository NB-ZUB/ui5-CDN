/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/Editor","sap/ui/core/Core","sap/ui/integration/widgets/Card","sap/ui/integration/editor/Merger","sap/ui/model/json/JSONModel","sap/base/util/merge","sap/ui/model/resource/ResourceModel","sap/ui/integration/library","sap/ui/integration/designtime/editor/CardPreview","sap/base/util/extend"],function(e,t,i,r,a,n,s,o,d,g){"use strict";var _=t.getLibraryResourceBundle("sap.ui.integration");var u=o.CardDataMode;var l=e.extend("sap.ui.integration.designtime.editor.CardEditor",{metadata:{library:"sap.ui.integration",properties:{card:{type:"any",defaultValue:null}},aggregations:{_extension:{type:"sap.ui.integration.Extension",multiple:false,visibility:"hidden"}}},renderer:e.getMetadata().getRenderer().render});l.prototype.hasPreview=function(){var e=this.getAggregation("_preview");if(e){if(e.getSettings()&&e.getSettings().preview&&e.getSettings().preview.modes==="None"){return false}return true}return false};l.prototype.getSeparatePreview=function(){var e=this.getPreviewPosition();if(!this.isReady()||e!=="separate"){return null}return this._initPreview()};l.prototype._updatePreview=function(){var e=this.getAggregation("_preview");if(e&&e.update&&e._getCurrentMode()!=="None"){e.update()}};l.prototype.setCard=function(e,r){if(e===this.getProperty("card")){return this}if(this._oEditorCard){this._oEditorCard.destroy()}this.setProperty("card",e,r);if(typeof e==="string"){try{e=JSON.parse(e)}catch(i){var a=t.byId(e);if(!a){var n=document.getElementById(e);if(n&&n.tagName&&n.tagName.toUpperCase()==="ui-integration-card".toUpperCase()){a=n._getControl()}}e=a}}if(e&&e.isA&&e.isA("sap.ui.integration.widgets.Card")){e={manifest:e.getManifest(),manifestChanges:e.getManifestChanges(),host:e.getHost(),baseUrl:e.getBaseUrl(),dataMode:u.Active}}if(typeof e==="object"){if(!e.dataMode){e.dataMode=u.Active}this._oEditorCard=new i(e);this._oEditorCard.onBeforeRendering();this._oEditorCard.attachEventOnce("_dataReady",function(){this.propagateModels(this._oEditorCard,this,["i18n","context","contextflat"]);this.setJson(e,r)}.bind(this))}};l.prototype.propagateModels=function(e,t,i){var r=g({},e.oPropagatedProperties.oModels,e.oModels),a=Object.keys(r),n=e.getModel();if(n){t.setModel(n)}i=i||[];a.forEach(function(r){if(r==="undefined"){return}if(i.includes(r)){return}var a=e.getModel(r);if(a){t.setModel(a,r)}})};l.prototype.createManifest=function(e,t){this._isManifestReady=false;if(this._oEditorManifest){this._oEditorManifest.destroy()}this.destroyAggregation("_extension");var i=r.layers[this.getMode()];this._oEditorManifest=this._oEditorCard._oCardManifest;this._registerManifestModulePath();var o=this._oEditorManifest._oInitialJson;this._oInitialManifestModel=new a(o);this.setProperty("json",o,t);var d;if(this._beforeLayerManifestChanges){d=r.mergeDelta(o,[this._beforeLayerManifestChanges])}else{d=o}var g=n({},d);this._beforeManifestModel=new a(g);if(i<r.layers["translation"]&&this._currentLayerManifestChanges){d=r.mergeDelta(d,[this._currentLayerManifestChanges])}this._manifestModel=new a(d);this._isManifestReady=true;this.fireManifestReady();this._initResourceBundlesForMultiTranslation();this._createContextModel();if(this._oEditorManifest&&this._oEditorManifest.getResourceBundle()){var _=this._oEditorManifest.getResourceBundle();var u=new s({bundle:_});this.setModel(u,"i18n");if(this._oResourceBundle){u.enhance(this._oResourceBundle)}this._oResourceBundle=u.getResourceBundle()}return this._loadExtension().then(function(){this._initInternal()}.bind(this))};l.prototype._initPreview=function(){var e=this._oDesigntimeInstance.getSettings()||{};e.preview=e.preview||{};e.preview.position=this.getPreviewPosition();var t=new d({settings:e,card:this._oEditorCard,parentWidth:this.getWidth(),parentHeight:this.getHeight()});this.setAggregation("_preview",t);t.setAssociation("_editor",this);return t};l.prototype._loadExtension=function(){return new Promise(function(e,t){var i=this._oEditorCard.getAggregation("_extension");this.setAggregation("_extension",i);e()}.bind(this))};l.prototype._mergeContextData=function(e){var t={};t["empty"]=l._contextEntries.empty;for(var i in e){t[i]=e[i]}t["card.internal"]=l._contextEntries["card.internal"];return t};l._contextEntries={empty:{label:_.getText("CARDEDITOR_CONTEXT_EMPTY_VAL"),type:"string",description:_.getText("CARDEDITOR_CONTEXT_EMPTY_DESC"),placeholder:"",value:""},"card.internal":{label:_.getText("CARDEDITOR_CONTEXT_CARD_INTERNAL_VAL"),todayIso:{type:"string",label:_.getText("CARDEDITOR_CONTEXT_CARD_TODAY_VAL"),description:_.getText("CARDEDITOR_CONTEXT_CARD_TODAY_DESC"),tags:[],placeholder:_.getText("CARDEDITOR_CONTEXT_CARD_TODAY_VAL"),customize:["format.dataTime"],value:"{{parameters.TODAY_ISO}}"},nowIso:{type:"string",label:_.getText("CARDEDITOR_CONTEXT_CARD_NOW_VAL"),description:_.getText("CARDEDITOR_CONTEXT_CARD_NOW_DESC"),tags:[],placeholder:_.getText("CARDEDITOR_CONTEXT_CARD_NOW_VAL"),customize:["dateFormatters"],value:"{{parameters.NOW_ISO}}"},currentLanguage:{type:"string",label:_.getText("CARDEDITOR_CONTEXT_CARD_LANG_VAL"),description:_.getText("CARDEDITOR_CONTEXT_CARD_LANG_VAL"),tags:["technical"],customize:["languageFormatters"],placeholder:_.getText("CARDEDITOR_CONTEXT_CARD_LANG_VAL"),value:"{{parameters.LOCALE}}"}}};return l});
//# sourceMappingURL=CardEditor.js.map