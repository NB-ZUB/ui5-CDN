/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/field/FieldInfoBase","sap/ui/core/Control","sap/ui/base/ManagedObjectObserver"],function(e,t,o){"use strict";const i=e.extend("sap.ui.mdc.field.CustomFieldInfo",{metadata:{library:"sap.ui.mdc",properties:{},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}},defaultAggregation:"content"}});i._oBox=undefined;i.prototype.init=function(){e.prototype.init.apply(this,arguments);this._oObserver=new o(n.bind(this));this._oObserver.observe(this,{aggregations:["content"]})};i.prototype.exit=function(){e.prototype.exit.apply(this,arguments);if(this._oMyBox){this._oMyBox.destroy();this._oMyBox=undefined}};i.prototype.isTriggerable=function(){return Promise.resolve(!!this.getAggregation("content"))};i.prototype.getTriggerHref=function(){return Promise.resolve(null)};i.prototype.getDirectLinkHrefAndTarget=function(){return Promise.resolve(null)};i.prototype.getContent=function(){if(!i._oBox){i._oBox=t.extend("sap.ui.mdc.field.CustomFieldInfoBox",{metadata:{},renderer:{apiVersion:2,render:function(e,t){const o=t._oInfo.getAggregation("content");e.openStart("div",t);e.openEnd();if(o){e.renderControl(o)}e.close("div")}}})}if(!this._oMyBox||this._oMyBox._bIsBeingDestroyed){this._oMyBox=new i._oBox(this.getId()+"-box");this._oMyBox._oInfo=this}return Promise.resolve(this._oMyBox)};i.prototype.checkDirectNavigation=function(){return Promise.resolve(false)};function n(e){if(e.object==this&&!this._bIsBeingDestroyed){if(e.name=="content"){this.fireDataUpdate()}}}return i});
//# sourceMappingURL=CustomFieldInfo.js.map