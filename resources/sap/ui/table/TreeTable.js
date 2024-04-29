/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Table","./TableRenderer","sap/ui/model/ClientTreeBindingAdapter","sap/ui/model/TreeBindingCompatibilityAdapter","./library","./utils/TableUtils","./plugins/BindingSelection","sap/base/Log","sap/base/assert","sap/ui/model/controlhelper/TreeBindingProxy"],function(e,t,o,r,i,n,s,a,p,l){"use strict";var u=n.createWeakMapFacade();var d=e.extend("sap.ui.table.TreeTable",{metadata:{library:"sap.ui.table",properties:{expandFirstLevel:{type:"boolean",defaultValue:false,deprecated:true},useGroupMode:{type:"boolean",group:"Appearance",defaultValue:false},groupHeaderProperty:{type:"string",group:"Data",defaultValue:null},collapseRecursive:{type:"boolean",defaultValue:true,deprecated:true},rootLevel:{type:"int",group:"Data",defaultValue:0,deprecated:true}},events:{toggleOpenState:{parameters:{rowIndex:{type:"int"},rowContext:{type:"object"},expanded:{type:"boolean"}}}}},renderer:t});d.prototype.init=function(){e.prototype.init.apply(this,arguments);u(this).bPendingRequest=false;n.Grouping.setToDefaultTreeMode(this);n.Hook.register(this,n.Hook.Keys.Row.UpdateState,y,this);n.Hook.register(this,n.Hook.Keys.Row.Expand,g,this);n.Hook.register(this,n.Hook.Keys.Row.Collapse,h,this);this._oProxy=new l(this,"rows")};d.prototype._bindRows=function(t){u(this).bPendingRequest=false;var o=this.getExpandFirstLevel()?1:0;this._oProxy.applyLegacySettingsToBindingInfo(t,{rootLevel:this.isPropertyInitial("rootLevel")?undefined:this.getRootLevel(),collapseResursive:this.isPropertyInitial("collapseRecursive")?undefined:this.getCollapseRecursive(),numberOfExpandedLevels:this.isPropertyInitial("expandFirstLevel")?undefined:o});return e.prototype._bindRows.call(this,t)};function y(e){var t=e.context["_mProxyInfo"];e.level=t.level;e.expandable=!t.isLeaf;e.expanded=t.isExpanded;if(n.Grouping.isInGroupMode(this)){var o=this.getGroupHeaderProperty();if(o){e.title=e.context.getProperty(o)}if(e.expandable){e.type=e.Type.GroupHeader;e.contentHidden=true}}}function g(e){var t=e.getIndex();this._oProxy.expand(t);var o=this._oProxy.isExpanded(t);if(typeof o==="boolean"){this._onGroupHeaderChanged(t,o)}}function h(e){var t=e.getIndex();this._oProxy.collapse(t);var o=this._oProxy.isExpanded(t);if(typeof o==="boolean"){this._onGroupHeaderChanged(t,o)}}d.prototype.setFixedRowCount=function(e){a.warning('TreeTable: the property "fixedRowCount" is not supported and will be ignored!');return this};d.prototype.isTreeBinding=function(t){t=t||"rows";if(t==="rows"){return this._oProxy.isTreeBinding()}return e.prototype.isTreeBinding.apply(this,arguments)};d.prototype.getBinding=function(t){t=t==null?"rows":t;var i=e.prototype.getBinding.call(this,t);if(i&&t==="rows"&&!i.getLength){if(i.isA("sap.ui.model.odata.ODataTreeBinding")){r(i,this)}else if(i.isA("sap.ui.model.odata.v2.ODataTreeBinding")){i.applyAdapterInterface()}else if(i.isA("sap.ui.model.ClientTreeBinding")){o.apply(i)}else{a.error("Binding not supported by sap.ui.table.TreeTable")}}return i};d.prototype._getContexts=function(e,t,o,r){return this._oProxy.getContexts(e,t,o,r)};d.prototype._getRowContexts=function(e){return c(this,e)};function c(t,o,r){var i=t._getTotalRowCount();var n=e.prototype._getRowContexts.call(t,o);if(r===true){return n}var s=t._getTotalRowCount();var a=t._getFirstRenderedRowIndex();var p=t._getMaxFirstRenderedRowIndex();t._adjustToTotalRowCount();if(p<a&&t._bContextsAvailable){n=c(t,o,true)}else if(i!==s){n=c(t,o,true)}return n}d.prototype._onGroupHeaderChanged=function(e,t){this.fireToggleOpenState({rowIndex:e,rowContext:this.getContextByIndex(e),expanded:t})};d.prototype.expand=function(e){this._oProxy.expand(e);return this};d.prototype.collapse=function(e){this._oProxy.collapse(e);return this};d.prototype.collapseAll=function(){this._oProxy.collapseAll();if(this.getBinding()){this.setFirstVisibleRow(0)}return this};d.prototype.expandToLevel=function(e){this._oProxy.expandToLevel(e);return this};d.prototype.isExpanded=function(e){return this._oProxy.isExpanded(e)};d.prototype.getContextByIndex=function(e){return this._oProxy.getContextByIndex(e)};d.prototype.setRootLevel=function(e){this.setFirstVisibleRow(0);this._oProxy.setRootLevel(e);this.setProperty("rootLevel",e,true);return this};d.prototype.setCollapseRecursive=function(e){this._oProxy.setCollapseRecursive(e);this.setProperty("collapseRecursive",!!e,true);return this};d.prototype.setUseGroupMode=function(e){this.setProperty("useGroupMode",!!e);f(this);return this};d.prototype.setEnableGrouping=function(){a.warning("The property enableGrouping is not supported by the sap.ui.table.TreeTable control");return this};d.prototype.setGroupBy=function(){a.warning("The groupBy association is not supported by the sap.ui.table.TreeTable control");return this};d.prototype.setUseFlatMode=function(e){this._bFlatMode=!!e;f(this);return this};function f(e){if(e.getUseGroupMode()){n.Grouping.setHierarchyMode(e,n.Grouping.HierarchyMode.GroupedTree)}else if(e._bFlatMode){n.Grouping.setToDefaultFlatMode(e)}else if(!e._bFlatMode){n.Grouping.setToDefaultTreeMode(e)}}d.prototype._createLegacySelectionPlugin=function(){return new s};d.prototype._onBindingDataRequested=function(t){u(this).bPendingRequest=true;e.prototype._onBindingDataRequested.apply(this,arguments)};d.prototype._onBindingDataReceived=function(t){u(this).bPendingRequest=false;e.prototype._onBindingDataReceived.apply(this,arguments)};d.prototype._hasPendingRequests=function(){return u(this).bPendingRequest};return d});
//# sourceMappingURL=TreeTable.js.map