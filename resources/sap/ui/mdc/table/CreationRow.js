/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/mdc/enums/TableType"],function(e,t){"use strict";const n=e.extend("sap.ui.mdc.table.CreationRow",{metadata:{library:"sap.ui.mdc",properties:{applyEnabled:{type:"boolean",group:"Behavior",defaultValue:true},busy:{type:"boolean",group:"Behavior",defaultValue:false},visible:{type:"boolean",group:"Appearance",defaultValue:true}},events:{apply:{allowPreventDefault:true}}}});n.prototype.init=function(){this._oInnerCreationRow=null;this._mBindingContexts={}};n.prototype.exit=function(){if(this._oInnerCreationRow){this._oInnerCreationRow.destroy();this._oInnerCreationRow=null}this._mBindingContexts=null};n.prototype.setBusy=function(e){this.setProperty("busy",e,true);if(this._oInnerCreationRow){this._oInnerCreationRow.setBusy(e)}return this};n.prototype.setBindingContext=function(t,n){e.prototype.setBindingContext.call(this,t,n);this._mBindingContexts[n]={context:t,modelName:n};if(this._oInnerCreationRow){this._oInnerCreationRow.setBindingContext(t,n)}return this};n.prototype.setApplyEnabled=function(e){this.setProperty("applyEnabled",e,true);if(this._oInnerCreationRow){this._oInnerCreationRow.setApplyEnabled(e)}return this};n.prototype.setVisible=function(e){this.setProperty("visible",e,true);if(this._oInnerCreationRow){this._oInnerCreationRow.setVisible(e);this._getTable()._oTable.getRowMode().setHideEmptyRows(e)}return this};n.prototype._onInnerApply=function(e){if(!this.fireApply()){e.preventDefault()}};n.prototype.update=function(){return this._updateInnerCreationRow()};n.prototype._updateInnerCreationRow=function(){const e=this._getTable();let n;if(!e||!e._oTable){return Promise.resolve()}if(e._isOfType(t.Table,true)){if(!this._oInnerCreationRow||this._oInnerCreationRow.isDestroyed()){n=this._createGridTableCreationRow();e._oTable.getRowMode().setHideEmptyRows(this.getVisible())}else{n=Promise.resolve()}}else{n=this._createResponsiveTableCreationRow()}return n.then(function(t){i(e,t)})};function o(e){return new Promise(function(t,n){sap.ui.require([e],function(e){t(e)},function(e){n(e)})})}n.prototype._createGridTableCreationRow=function(){return o("sap/ui/table/CreationRow").then(function(e){r(this);this._oInnerCreationRow=new e(this.getId()+"-inner",{visible:this.getVisible(),applyEnabled:this.getApplyEnabled(),apply:[this._onInnerApply,this]});this._getTable()._oTable.getRowMode().setHideEmptyRows(this.getVisible());for(const e in this._mBindingContexts){const t=this._mBindingContexts[e];this._oInnerCreationRow.setBindingContext(t.context,t.modelName)}return this._oInnerCreationRow}.bind(this))};n.prototype._createResponsiveTableCreationRow=function(){r(this);return Promise.resolve()};function i(e,t){if(e&&e._oTable&&t){e._oTable.setCreationRow(t)}}function r(e){if(e&&e._oInnerCreationRow){e._oInnerCreationRow.destroy();e._oInnerCreationRow=null}}n.prototype._getTable=function(){const e=this.getParent();return e&&e.isA("sap.ui.mdc.Table")?e:null};return n});
//# sourceMappingURL=CreationRow.js.map