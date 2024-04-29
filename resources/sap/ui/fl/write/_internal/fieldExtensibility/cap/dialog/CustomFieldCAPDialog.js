/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/core/Fragment","sap/ui/core/Lib","sap/m/MessageToast","sap/ui/fl/write/_internal/fieldExtensibility/cap/editor/getEditorConfig","sap/base/util/ObjectPath","sap/base/util/deepClone","sap/ui/model/resource/ResourceModel","sap/ui/model/json/JSONModel"],function(e,t,i,n,o,s,a,r,l){"use strict";var d=i.getResourceBundleFor("sap.ui.fl");function u(e,t,i){var n=e.getContent()[0];n.setJson(a(t));n.setConfig(o(i));return n}function p(e){if(!e||!e.element){return{}}var t=a(e);if(!s.get(["element","@Common.Label"],t)){var i=s.get(["element","name"],t);s.set(["element","@Common.Label"],i,t)}var n=s.get(["element","@assert.range"],t);if(s.get(["element","type"],t)==="cds.String"&&Array.isArray(n)){s.set(["element","enum"],n.reduce(function(e,t){e[t]={};return e},{}),t);s.set(["element","@assert.range"],true,t)}if(t.element.annotations){t.element=Object.assign({},t.element,t.element.annotations);delete t.element.annotations}var o={extend:t.extend,elements:{}};o.elements[t.element.name]=t.element;return o}var g=e.extend("sap.ui.fl.write._internal.fieldExtensibility.cap.dialog.CustomFieldCAPDialog",{metadata:{library:"sap.ui.fl",properties:{_dialog:{type:"sap.m.Dialog",visibility:"hidden"}}}});g.prototype.open=function(e,i){var n={element:{name:"NewField",type:"cds.String"},extend:e.boundEntitySet.$Type};var o=this.getProperty("_dialog");if(o){this._oEditor.setJson(a(n));o.open()}else{t.load({name:"sap.ui.fl.write._internal.fieldExtensibility.cap.dialog.CustomFieldCAPDialog",controller:this}).then(function(t){this._oDialogModel=new l({isValid:true});this._oDialogModel.setDefaultBindingMode("OneWay");t.setModel(this._oDialogModel,"dialog");t.setModel(new r({bundle:d}),"i18n");t.addStyleClass(i);this.setProperty("_dialog",t);this._oJson=a(n);this._oEditor=u(t,this._oJson,{entityTypes:e.entityTypes});this._oEditor.attachJsonChange(function(e){this._oJson=e.getParameter("json")}.bind(this));this._oEditor.attachValidationErrorChange(function(e){var t=e.getParameter("hasError");this._oDialogModel.setData({isValid:!t})}.bind(this));t.open()}.bind(this))}};g.prototype.exit=function(){var e=this.getProperty("_dialog");if(e){e.destroy()}if(this.oEditor){this.oEditor.destroy()}};g.prototype.onSave=function(){var e=p(this._oJson);var t={extensions:[JSON.stringify(e)]};var i=new Promise(function(e,i){var n=new XMLHttpRequest;n.open("POST","/-/cds/extensibility/addExtension");n.setRequestHeader("Content-Type","application/json");n.onload=function(){if(n.status>=200&&n.status<400){e(n.response)}else{i({status:n.status,message:n.statusText})}};n.send(JSON.stringify(t))});i.then(function(){n.show(d.getText("CAP_ADD_FIELD_SUCCESS"))});this.getProperty("_dialog").close()};g.prototype.onCancel=function(){this.getProperty("_dialog").close()};return g});
//# sourceMappingURL=CustomFieldCAPDialog.js.map