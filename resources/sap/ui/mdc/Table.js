/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Control","./ActionToolbar","./table/TableSettings","./table/GridTableType","./table/TreeTableType","./table/ResponsiveTableType","./table/PropertyHelper","./table/utils/Personalization","./mixin/FilterIntegrationMixin","sap/m/Text","sap/m/ToolbarSpacer","sap/m/Button","sap/m/Title","sap/m/OverflowToolbar","sap/m/library","sap/m/table/Util","sap/m/table/columnmenu/Menu","sap/m/MessageBox","sap/m/plugins/PluginBase","sap/ui/core/Core","sap/ui/core/format/NumberFormat","sap/ui/core/format/ListFormat","sap/ui/core/library","sap/ui/events/KeyCodes","sap/ui/model/base/ManagedObjectModel","sap/base/strings/capitalize","sap/base/util/deepEqual","sap/base/util/Deferred","sap/ui/core/InvisibleText","sap/ui/mdc/p13n/subcontroller/ColumnController","sap/ui/mdc/p13n/subcontroller/SortController","sap/ui/mdc/p13n/subcontroller/FilterController","sap/ui/mdc/p13n/subcontroller/GroupController","sap/ui/mdc/p13n/subcontroller/AggregateController","sap/m/table/ColumnWidthController","sap/ui/mdc/actiontoolbar/ActionToolbarAction","sap/ui/mdc/table/menu/QuickActionContainer","sap/ui/mdc/table/menu/ItemContainer","sap/ui/mdc/enums/ProcessingStrategy","sap/ui/core/theming/Parameters","sap/base/Log","sap/ui/performance/trace/FESRHelper","sap/ui/mdc/enums/TableMultiSelectMode","sap/ui/mdc/enums/TableSelectionMode","sap/ui/mdc/enums/TableP13nMode","sap/ui/mdc/enums/TableType","sap/ui/mdc/enums/TableGrowingMode","sap/ui/mdc/enums/TableRowAction","sap/ui/mdc/enums/TableRowCountMode"],function(t,e,o,i,n,s,r,a,l,u,p,h,d,c,g,f,_,y,b,m,T,C,x,E,B,P,I,A,S,D,M,w,R,v,F,z,H,O,L,N,V,k,j,G,U,K){"use strict";const W=g.ToolbarDesign;const q=g.ToolbarStyle;const Q=g.IllustratedMessageType;const X=x.TitleLevel;const $=x.SortOrder;const Y=new window.WeakMap;const J=function(t){if(!Y.has(t)){Y.set(t,{oFilterInfoBar:null})}return Y.get(t)};const Z={Table:i,TreeTable:n,ResponsiveTable:s,null:i};const tt=t.extend("sap.ui.mdc.Table",{metadata:{library:"sap.ui.mdc",designtime:"sap/ui/mdc/designtime/table/Table.designtime",interfaces:["sap.ui.mdc.IFilterSource","sap.ui.mdc.IxState"],defaultAggregation:"columns",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null,invalidate:true},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null,invalidate:true},p13nMode:{type:"sap.ui.mdc.enums.TableP13nMode[]",defaultValue:[]},delegate:{type:"object",defaultValue:{name:"sap/ui/mdc/TableDelegate",payload:{}}},headerLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:X.Auto},headerStyle:{type:"sap.ui.core.TitleLevel",group:"Appearance"},autoBindOnInit:{type:"boolean",group:"Misc",defaultValue:true},header:{type:"string",group:"Misc",defaultValue:null},headerVisible:{type:"boolean",group:"Misc",defaultValue:true},useColumnLabelsAsTooltips:{type:"boolean",group:"Misc",defaultValue:false},selectionMode:{type:"sap.ui.mdc.enums.TableSelectionMode",defaultValue:G.None},showRowCount:{type:"boolean",group:"Misc",defaultValue:true},threshold:{type:"int",group:"Appearance",defaultValue:-1},sortConditions:{type:"object"},filterConditions:{type:"object",defaultValue:{}},groupConditions:{type:"object"},aggregateConditions:{type:"object"},enableExport:{type:"boolean",defaultValue:false},busyIndicatorDelay:{type:"int",defaultValue:100},enableColumnResize:{type:"boolean",group:"Behavior",defaultValue:true},showPasteButton:{type:"boolean",group:"Behavior",defaultValue:false},enablePaste:{type:"boolean",group:"Behavior",defaultValue:true},multiSelectMode:{type:"sap.ui.mdc.enums.TableMultiSelectMode",group:"Behavior",defaultValue:j.Default},enableAutoColumnWidth:{type:"boolean",group:"Behavior",defaultValue:false},propertyInfo:{type:"object",defaultValue:[]}},aggregations:{_content:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},type:{type:"sap.ui.mdc.table.TableTypeBase",altTypes:["sap.ui.mdc.enums.TableType"],multiple:false},columns:{type:"sap.ui.mdc.table.Column",multiple:true},creationRow:{type:"sap.ui.mdc.table.CreationRow",multiple:false},actions:{type:"sap.ui.core.Control",multiple:true,forwarding:{getter:"_createToolbar",aggregation:"actions"}},variant:{type:"sap.ui.fl.variants.VariantManagement",multiple:false},quickFilter:{type:"sap.ui.core.Control",multiple:false},rowSettings:{type:"sap.ui.mdc.table.RowSettings",multiple:false},dataStateIndicator:{type:"sap.m.plugins.DataStateIndicator",multiple:false},noData:{type:"sap.ui.core.Control",multiple:false,altTypes:["string"]},copyProvider:{type:"sap.m.plugins.CopyProvider",multiple:false},contextMenu:{type:"sap.ui.core.IContextMenu",multiple:false},cellSelector:{type:"sap.m.plugins.CellSelector",multiple:false}},associations:{filter:{type:"sap.ui.mdc.IFilter",multiple:false}},events:{rowPress:{parameters:{bindingContext:{type:"sap.ui.model.Context"}}},selectionChange:{parameters:{selectAll:{type:"boolean"}}},beforeExport:{parameters:{exportSettings:{type:"object"},userExportSettings:{type:"object"},filterSettings:{type:"object[]"}}},paste:{parameters:{data:{type:"string[][]"}}},beforeOpenContextMenu:{allowPreventDefault:true,parameters:{bindingContext:{type:"sap.ui.model.Context"},column:{type:"sap.ui.mdc.table.Column"}}}}},constructor:function(){this._createInitPromises();t.apply(this,arguments);this.bCreated=true;this._updateAdaptation();this._initializeContent()},renderer:{apiVersion:2,render:function(t,e){t.openStart("div",e);t.class("sapUiMdcTable");t.style("width",e.getWidth());e._getType().getTableStyleClasses().forEach(e=>{t.class(e)});t.openEnd();t.renderControl(e.getAggregation("_content"));t.close("div")}}});const et=["variant","quickFilter"];l.call(tt.prototype);et.forEach(function(t){const e=P(t),o="_o"+e,i="get"+e,n="set"+e,s="destroy"+e;tt.prototype[i]=function(){return this[o]};tt.prototype[s]=function(){const t=this[o];this[n]();if(t){t.destroy()}return this};tt.prototype[n]=function(e){this.validateAggregation(t,e,false);const n=this._createToolbar(),s=e!==this[o];if(!e||s){n.removeBetween(this[i]());this[o]=e}if(s&&e){this._setToolbarBetween(n)}return this}});tt.prototype.init=function(){t.prototype.init.apply(this,arguments);this.mSkipPropagation={rowSettings:true};this._bForceRebind=true;this._setPropertyHelperClass(r);this._setupPropertyInfoStore("propertyInfo");this._oManagedObjectModel=new B(this);this.setModel(this._oManagedObjectModel,"$sap.ui.mdc.Table")};tt.prototype.applySettings=function(e,o){if(e&&"type"in e){const i={type:e.type};if("delegate"in e){i.delegate=e.delegate;delete e.delegate}delete e.type;t.prototype.applySettings.call(this,i,o)}t.prototype.applySettings.call(this,e,o);this.initControlDelegate()};tt.prototype._setToolbarBetween=function(t){[this._oVariant,this._oQuickFilter].forEach(function(e){if(e){t.addBetween(e)}})};tt.prototype.initialized=function(){return this._oTableReady.promise};tt.prototype._fullyInitialized=function(){return this._oFullInitialize.promise};["CopyProvider","CellSelector","DataStateIndicator"].forEach(t=>{tt.prototype[`get${t}PluginOwner`]=function(){return this._oTable||this._oFullInitialize?.promise}});tt.prototype.setCopyProvider=function(t){this.setAggregation("copyProvider",t,true);if(window.isSecureContext&&t&&!m.byId(this.getId()+"-copy")){this._oToolbar?.insertEnd(this._getCopyButton(),0)}return this};tt.prototype.attachEvent=function(e){t.prototype.attachEvent.apply(this,arguments);if(e=="rowPress"){this._getType().prepareRowPress()}return this};tt.prototype.detachEvent=function(e){t.prototype.detachEvent.apply(this,arguments);if(e=="rowPress"){this._getType().cleanupRowPress()}return this};tt.prototype.getColumnClipboardSettings=function(t){return this.getPropertyHelper().getColumnClipboardSettings(t)};tt.prototype.setDataStateIndicator=function(t){this._handleDataStateEvents(this.getDataStateIndicator(),"detach");this.setAggregation("dataStateIndicator",t,true);this._handleDataStateEvents(this.getDataStateIndicator(),"attach");return this};tt.prototype._handleDataStateEvents=function(t,e){if(t){t[e+"ApplyFilter"](this._onApplyMessageFilter,this);t[e+"ClearFilter"](this._onClearMessageFilter,this);t[e+"Event"]("filterInfoPress",function(){a.openFilterDialog(this)},this)}};tt.prototype._onApplyMessageFilter=function(t){this._oMessageFilter=t.getParameter("filter");t.preventDefault();if(this.isTableBound()){this.rebind()}};tt.prototype._onClearMessageFilter=function(t){this._oMessageFilter=null;t.preventDefault();if(this.isTableBound()){this.rebind()}};tt.prototype._isOfType=function(t,e){const o=this._getType();if(e){return o.isA(Z[t].getMetadata().getName())}else{return o.constructor===Z[t]}};tt.prototype.setContextMenu=function(t){this._oContextMenu=this.validateAggregation("contextMenu",t,false);if(!this._oTable){return this}this._oTable.setAggregation("contextMenu",t,true);if(!t){this._oTable.detachBeforeOpenContextMenu(this._onBeforeOpenContextMenu,this);return this}if(!this._oTable.hasListeners("beforeOpenContextMenu")){this._oTable.attachBeforeOpenContextMenu(this._onBeforeOpenContextMenu,this)}return this};tt.prototype._onBeforeOpenContextMenu=function(t){const e=this._getType().getContextMenuParameters(t);this.fireBeforeOpenContextMenu(e)};tt.prototype.getContextMenu=function(){return this._oContextMenu&&!this._oContextMenu.isDestroyed()?this._oContextMenu:null};tt.prototype.destroyContextMenu=function(){if(this._oTable){this._oTable.destroyContextMenu()}else if(this._oContextMenu){this._oContextMenu.destroy()}this._oContextMenu=null;return this};tt.prototype.scrollToIndex=function(t){if(typeof t!=="number"){return Promise.reject("The iIndex parameter has to be a number")}return this._getType().scrollToIndex(t)};tt.prototype.focusRow=function(t,e){return this.scrollToIndex(t).then(function(){return this._oTable._setFocus(t,e)}.bind(this))};tt.prototype.setType=function(t){if(!this.bCreated||this.getType()==t){return this.setAggregation("type",t,true)}if(this._oToolbar){this._getType().removeToolbar()}this._destroyDefaultType();this.setAggregation("type",t);if(this._oTable){const t=this.getNoData();this.setNoData();this._vNoData=t;const e=this.getContextMenu();this.setContextMenu();this._oContextMenu=e;this._oTable.destroy("KeepDom");this._oTable=null}else{this._onAfterInitialization("Type changed");this._onAfterFullInitialization("Type changed")}if(this._oRowTemplate){this._oRowTemplate.destroy();this._oRowTemplate=null}this._createInitPromises();this._initializeContent();return this};tt.prototype._getType=function(){const t=this.getType();if(!this._oDefaultType&&(typeof t==="string"||t===null)){this._oDefaultType=new Z[t];this.addDependent(this._oDefaultType)}return this._oDefaultType||this.getType()};tt.prototype._destroyDefaultType=function(){if(this._oDefaultType){this._oDefaultType.destroy();delete this._oDefaultType}};tt.prototype.setRowSettings=function(t){this.setAggregation("rowSettings",t,true);this._getType().updateRowSettings();if(this.isTableBound()){this._bForceRebind=true;this.rebind()}return this};tt.prototype.setHeaderLevel=function(t){if(this.getHeaderLevel()===t){return this}this.setProperty("headerLevel",t,true);this._oTitle&&this._oTitle.setLevel(t);return this};tt.prototype.setHeaderStyle=function(t){if(this.getHeaderStyle()===t){return this}this.setProperty("headerStyle",t,true);this._oTitle&&this._oTitle.setTitleStyle(this.getHeaderStyle()||X.H4);return this};tt.prototype.focus=function(t){if(this._oTable){this._oTable.focus(t)}};tt.prototype.setBusy=function(t){this.setProperty("busy",t,true);if(this._oTable){this._oTable.setBusy(t)}return this};tt.prototype.setBusyIndicatorDelay=function(t){this.setProperty("busyIndicatorDelay",t,true);if(this._oTable){this._oTable.setBusyIndicatorDelay(t)}return this};tt.prototype.setCreationRow=function(t){this.setAggregation("creationRow",t,true);if(t){t.update()}return this};tt.prototype.setEnableColumnResize=function(t){const e=this.getEnableColumnResize();this.setProperty("enableColumnResize",t,true);if(this.getEnableColumnResize()!==e){this._updateColumnResize();this._updateAdaptation()}return this};const ot=function(t){let e=false;if(t&&(t.indexOf("Sort")>-1||t.indexOf("Column")>-1||t.indexOf("Group")>-1||t.indexOf("Aggregate")>-1||t.indexOf("Filter")>-1)){e=true}return e};tt.prototype._onModifications=function(t){if(ot(t)&&this.isTableBound()){this.rebind()}if(!this.isPropertyHelperFinal()){this._bFinalzingPropertiesOnModification=true;this.finalizePropertyHelper().then(function(){delete this._bFinalzingPropertiesOnModification}.bind(this))}this.getColumns().forEach(function(t){t._onModifications()})};tt.prototype.setP13nMode=function(t){const e=this.getP13nMode();let o=[];if(t&&t.length>1){const e=t.reduce(function(t,e,o){t[e]=true;return t},{});if(e.Column){o.push("Column")}if(e.Sort){o.push("Sort")}if(e.Filter){o.push("Filter")}if(e.Group){o.push("Group")}if(e.Aggregate){o.push("Aggregate")}}else{o=t}this.setProperty("p13nMode",o,true);this._updateAdaptation();if(!I(e.sort(),this.getP13nMode().sort())){it(this)}return this};tt.prototype._updateAdaptation=function(){const t={controller:{}};const e=[];if(this.getColumns().length>0&&this._isOfType(K.TreeTable)){e.push(this.getColumns()[0].getPropertyKey())}const o={Column:new D({control:this,stableKeys:e}),Sort:new M({control:this}),Group:new R({control:this}),Filter:new w({control:this}),Aggregate:new v({control:this}),ColumnWidth:new F({control:this,exposeXConfig:true})};this.getActiveP13nModes().forEach(function(e){t.controller[e]=o[e]});if(this.getEnableColumnResize()){t.controller["ColumnWidth"]=o["ColumnWidth"]}this.getEngine().register(this,t)};function it(t){t._updateP13nButton();if(t._oTable){const e=t._oTable.getDragDropConfig()[0];if(e){e.setEnabled(t.getActiveP13nModes().indexOf("Column")>-1)}}if(t.isFilteringEnabled()){st(t)}nt(t)}tt.prototype.setFilterConditions=function(t){this.setProperty("filterConditions",t,true);const e=this.getInbuiltFilter();if(e){e.setFilterConditions(t)}nt(this);return this};function nt(t){const e=lt(t);const o=ut(t);const i=pt(t);if(!e){return}if(i.length===0){const o=e.getDomRef();if(o&&o.contains(document.activeElement)){t.focus()}e.setVisible(false);rt(t).setText("");return}t._fullyInitialized().then(function(){const n=t.getPropertyHelper();const s=i.map(function(t){return n.hasProperty(t)?n.getProperty(t).label:""});const r=m.getLibraryResourceBundle("sap.ui.mdc");const a=C.getInstance();let l;if(s.length>1){l=r.getText("table.MULTIPLE_FILTERS_ACTIVE",[s.length,a.format(s)])}else{l=r.getText("table.ONE_FILTER_ACTIVE",s[0])}if(!e.getVisible()){e.setVisible(true)}o.setText(l);rt(t).setText(l)})}function st(t){if(!t._oTable){return}let e=lt(t);const o=rt(t);if(!e){e=at(t)}t._getType().insertFilterInfoBar(e,o.getId())}function rt(t){if(!t._oFilterInfoBarInvisibleText){t._oFilterInfoBarInvisibleText=(new S).toStatic()}return t._oFilterInfoBarInvisibleText}function at(t){const e=t.getId()+"-filterInfoBar";let o=J(t).oFilterInfoBar;const i=m.getLibraryResourceBundle("sap.ui.mdc");if(o&&!o.isDestroyed()){o.destroy()}o=new c({id:e,active:true,design:W.Info,visible:false,content:[new u({id:e+"-text",wrapping:false}),new p,new h({type:g.ButtonType.Transparent,tooltip:i.getText("infobar.REMOVEALLFILTERS"),icon:"sap-icon://decline",press:function(){a.createFilterChange(t,{conditions:[],strategy:L.FullReplace});t.focus()}})],press:function(){a.openFilterDialog(t,function(){if(pt(t).length===0){t.focus()}})}});J(t).oFilterInfoBar=o;nt(t);return o}function lt(t){const e=J(t).oFilterInfoBar;if(e?.isDestroyStarted()){return null}return e}function ut(t){const e=lt(t);return e?e.getContent()[0]:null}tt.prototype.setThreshold=function(t){this.setProperty("threshold",t,true);if(!this._oTable){return this}t=this.getThreshold()>-1?this.getThreshold():undefined;if(this._isOfType(K.ResponsiveTable)){this._oTable.setGrowingThreshold(t)}else{this._oTable.setThreshold(t)}return this};tt.prototype._onFilterProvided=function(t){this._updateInnerTableNoData()};tt.prototype._onFilterRemoved=function(t){this._updateInnerTableNoData()};tt.prototype._onFiltersChanged=function(t){if(this.isTableBound()&&t.getParameter("conditionsBased")){this._oTable.setShowOverlay(true)}};tt.prototype._onFilterSearch=function(t){this._bAnnounceTableUpdate=true};tt.prototype.setNoData=function(t){this._vNoData=this.validateAggregation("noData",t,false);if(!this._oTable){return this}if(t&&t.isA&&t.isA("sap.m.IllustratedMessage")){this._sLastNoDataTitle="";t.setEnableVerticalResponsiveness(!this._isOfType(K.ResponsiveTable));let e=this._oTable.getAggregation("_noColumnsMessage");if(!e){e=f.getNoColumnsIllustratedMessage(function(){a.openSettingsDialog(this)}.bind(this));e.setEnableVerticalResponsiveness(!this._isOfType(K.ResponsiveTable));this._oTable.setAggregation("_noColumnsMessage",e)}}this._oTable.setNoData(t);this._updateInnerTableNoData();return this};tt.prototype.getNoData=function(){return this._vNoData&&!this._vNoData.isDestroyed?.()?this._vNoData:null};tt.prototype.destroyNoData=function(){if(this._oTable){this._oTable.destroyNoData(true)}else if(this._vNoData){this._vNoData.destroy?.()}this._vNoData=null;return this};tt.prototype._updateInnerTableNoData=function(){const t=this.getNoData();if(!t||typeof t=="string"){return this._updateInnerTableNoDataText()}if(!t.isA("sap.m.IllustratedMessage")||this._sLastNoDataTitle!=t.getTitle()){return}const e=m.getLibraryResourceBundle("sap.ui.mdc");if(!this.isTableBound()){t.setDescription(" ");if(this.getFilter()){t.setTitle(e.getText("table.NO_DATA_WITH_FILTERBAR"));t.setIllustrationType(Q.SearchEarth)}else{t.setIllustrationType(Q.EmptyList);t.setTitle(e.getText("table.NO_DATA"))}}else if(dt(this)){t.setTitle(e.getText("table.NO_RESULTS_TITLE"));t.setDescription(e.getText("table.NO_RESULTS_DESCRIPTION"));t.setIllustrationType(Q.NoFilterResults)}else{t.setTitle(e.getText("table.NO_DATA")).setDescription(" ");t.setIllustrationType(Q.NoEntries)}this._sLastNoDataTitle=t.getTitle()};tt.prototype._updateInnerTableNoDataText=function(){if(this._oTable){this._oTable.setNoData(this._getNoDataText())}};tt.prototype._getNoDataText=function(){const t=this.getNoData();if(t&&typeof t=="string"){return t}const e=m.getLibraryResourceBundle("sap.ui.mdc");if(!this.isTableBound()){return e.getText(this.getFilter()?"table.NO_DATA_WITH_FILTERBAR":"table.NO_DATA")}if(dt(this)){return e.getText("table.NO_RESULTS")}return e.getText("table.NO_DATA")};tt.prototype._updateRowActions=function(){this._getType().updateRowActions()};tt.prototype._initializeContent=function(){const t=this._getType();const e=[this.awaitControlDelegate(),t.loadModules()];if(this.isFilteringEnabled()){e.push(this.retrieveInbuiltFilter())}Promise.all(e).then(()=>{if(this.isDestroyed()){return Promise.reject("Destroyed")}this._updateAdaptation();const e=this.getControlDelegate();if(e.preInit){e.preInit(this)}if(!this._oTable&&t.constructor===this._getType().constructor){return this._createContent()}else{return Promise.resolve()}}).catch(t=>{this._onAfterInitialization(t||"");this._onAfterFullInitialization(t||"")})};tt.prototype._createInitPromises=function(){this._oTableReady=new A;this._oFullInitialize=new A;this._oFullInitialize.promise.catch(()=>{});this._bFullyInitialized=false};tt.prototype._onAfterInitialization=function(t){if(this._oTableReady){if(t!=null){this._oTableReady.reject(t)}else{this._oTableReady.resolve(this)}}};tt.prototype._onAfterFullInitialization=function(t){if(this._oFullInitialize){if(t!=null){this._oFullInitialize.reject(t)}else{this._bFullyInitialized=true;this._oFullInitialize.resolve(this)}}};tt.prototype._createContent=function(){this._createToolbar();this._createTable();this._updateColumnResize();this._updateRowActions();this._updateExpandAllButton();this._updateCollapseAllButton();this._updateExportButton();this.getColumns().forEach(this._insertInnerColumn,this);return this.getControlDelegate().initializeContent(this).then(()=>{if(this.isDestroyed()){return Promise.reject("Destroyed")}this.setAggregation("_content",this._oTable);this._onAfterInitialization();return Promise.all([this.getPropertyInfo().length===0?this.finalizePropertyHelper():this.awaitPropertyHelper(),this.initialized()])}).then(()=>{if(this.isDestroyed()){return Promise.reject("Destroyed")}const t=this.getCreationRow();if(t){t.update()}if(this.getAutoBindOnInit()){const t=this.getEngine();t.isModificationSupported(this).then(e=>{if(e){t.waitForChanges(this).then(()=>{this.rebind()})}else{this.rebind()}})}this._onAfterFullInitialization()})};tt.prototype.setHeader=function(t){this.setProperty("header",t,true);this._updateHeaderText();return this};tt.prototype.setHeaderVisible=function(t){this.setProperty("headerVisible",t,true);if(this._oTitle){this._oTitle.setWidth(this.getHeaderVisible()?undefined:"0px")}return this};tt.prototype.setShowRowCount=function(t){this.setProperty("showRowCount",t,true);this._updateHeaderText();return this};tt.prototype.setEnableExport=function(t){this.setProperty("enableExport",t,true);this._updateExportButton();return this};tt.prototype.setShowPasteButton=function(t){if((t=!!t)==this.getShowPasteButton()){return this}this.setProperty("showPasteButton",t,true);if(t&&!this._oPasteButton&&this._oToolbar){this._oToolbar.insertEnd(this._getPasteButton(),0);this._oPasteButton.setEnabled(this.getEnablePaste())}else if(this._oPasteButton){this._oPasteButton.setVisible(t);this._oPasteButton.setEnabled(this.getEnablePaste())}return this};tt.prototype.setEnablePaste=function(t){this.setProperty("enablePaste",t,true);if(this._oPasteButton){this._oPasteButton.setEnabled(this.getEnablePaste())}return this};tt.prototype._setShowP13nButton=function(t){this._bHideP13nButton=!t;this._updateP13nButton()};tt.prototype._isP13nButtonHidden=function(){return this._bHideP13nButton};tt.prototype._createToolbar=function(){if(this.isDestroyStarted()){return}if(!this._oToolbar){this._oTitle=new d(this.getId()+"-title",{text:this.getHeader(),width:this.getHeaderVisible()?undefined:"0px",level:this.getHeaderLevel(),titleStyle:this.getHeaderStyle()||X.H4});this._oToolbar=new e(this.getId()+"-toolbar",{design:W.Transparent,begin:[this._oTitle],end:[this._getCopyButton(),this._getPasteButton(),this._getP13nButton()]});this._oToolbar.setProperty("_endOrder",["copy","paste","showHideDetails","collapseAll","expandAll","settings","export"].map(t=>this.getId()+"-"+t))}this._oToolbar.setStyle(this._isOfType(K.ResponsiveTable)?q.Standard:q.Clear);return this._oToolbar};tt.prototype._getVisibleProperties=function(){const t=[];let e;this.getColumns().forEach(function(o,i){e=o&&o.getPropertyKey();if(e){t.push({name:e})}});return t};tt.prototype.getConditions=function(){return this.getInbuiltFilter()?this.getInbuiltFilter().getConditions():[]};tt.prototype._getSortedProperties=function(){return this.getSortConditions()?this.getSortConditions().sorters:[]};tt.prototype._getGroupedProperties=function(){return this.getGroupConditions()?this.getGroupConditions().groupLevels:[]};tt.prototype._getAggregatedProperties=function(){return this.getAggregateConditions()?this.getAggregateConditions():{}};tt.prototype._getXConfig=function(){return this.getEngine().readXConfig(this)};function pt(t){return t.isFilteringEnabled()?ct(t.getFilterConditions()):[]}function ht(t){const e=m.byId(t.getFilter());return e?ct(e.getConditions()):[]}function dt(t){const e=m.byId(t.getFilter());return pt(t).length>0||ht(t).length>0||e&&e.getSearch()!==""}function ct(t){return Object.keys(t||{}).filter(function(e){return t[e].length>0})}tt.prototype.getCurrentState=function(){const t={};const e=this.getActiveP13nModes();if(e.indexOf("Column")>-1){t.items=this._getVisibleProperties()}if(this.isSortingEnabled()){t.sorters=this._getSortedProperties()}if(this.isFilteringEnabled()){t.filter=this.getFilterConditions()}if(this.isGroupingEnabled()){t.groupLevels=this._getGroupedProperties()}if(this.isAggregationEnabled()){t.aggregations=this._getAggregatedProperties()}if(this.getEnableColumnResize()){t.xConfig=this._getXConfig()}return t};tt.prototype.isFilteringEnabled=function(){return this.getActiveP13nModes().includes(U.Filter)};tt.prototype.isSortingEnabled=function(){return this.getActiveP13nModes().includes(U.Sort)};tt.prototype.isGroupingEnabled=function(){return this.getActiveP13nModes().includes(U.Group)};tt.prototype.isAggregationEnabled=function(){return this.getActiveP13nModes().includes(U.Aggregate)};tt.prototype.getSupportedP13nModes=function(){let t=gt(Object.keys(U),this._getType().getSupportedP13nModes());if(this.isControlDelegateInitialized()){t=gt(t,this.getControlDelegate().getSupportedP13nModes(this))}return t};tt.prototype.getActiveP13nModes=function(){return gt(this.getP13nMode(),this.getSupportedP13nModes())};function gt(t,e){return t.filter(function(t){return e.includes(t)})}tt.prototype._getP13nButton=function(){if(!this._oP13nButton){this._oP13nButton=o.createSettingsButton(this.getId(),[function(){a.openSettingsDialog(this)},this])}this._updateP13nButton();return this._oP13nButton};tt.prototype._updateP13nButton=function(){if(this._oP13nButton){const t=this.getActiveP13nModes();const e=t.length===1&&t[0]==="Aggregate";this._oP13nButton.setVisible(t.length>0&&!e&&!this._bHideP13nButton)}};tt.prototype._getCopyButton=function(){if(window.isSecureContext){return this.getCopyProvider()?.getCopyButton({id:this.getId()+"-copy"})}};tt.prototype._getPasteButton=function(){if(this.getShowPasteButton()){if(!this._oPasteButton){this._oPasteButton=o.createPasteButton(this.getId())}return this._oPasteButton}};tt.prototype._isExportEnabled=function(){return this.getEnableExport()&&this.isControlDelegateInitialized()&&this.getControlDelegate().getSupportedFeatures(this).export};tt.prototype._updateExportButton=function(){const t=this._oToolbar!=null&&this._isExportEnabled();if(t&&!this._oExportButton){this._oExportButton=this._createExportButton()}if(!this._oExportButton){return}if(this._oToolbar&&!this._oToolbar.getEnd().includes(this._oExportButton)){this._oToolbar.addEnd(this._oExportButton)}this._oExportButton.setEnabled(!f.isEmpty(this.getRowBinding()));this._oExportButton.setVisible(this._isExportEnabled())};tt.prototype._createExportButton=function(){return o.createExportButton(this.getId(),{default:[function(){this._onExport()},this],exportAs:[function(){this._onExport(true)},this]})};tt.prototype._createExportColumnConfiguration=function(){const t=this.getColumns();return this._fullyInitialized().then(function(){return this.finalizePropertyHelper()}.bind(this)).then(function(){const e=this.getPropertyHelper();let o=[];t.forEach(function(t){const i=e.getColumnExportSettings(t);o=o.concat(i)},this);return o}.bind(this))};tt.prototype._isCollapseAllEnabled=function(){return this.isControlDelegateInitialized()&&this.getControlDelegate().getSupportedFeatures(this).collapseAll};tt.prototype._updateCollapseAllButton=function(){const t=this._oToolbar!=null&&this._isCollapseAllEnabled();if(t&&!this._oCollapseAllButton){this._oCollapseAllButton=o.createExpandCollapseAllButton(this.getId(),[function(){this.getControlDelegate().collapseAll(this)},this],false)}if(!this._oCollapseAllButton){return}if(this._oToolbar&&!this._oToolbar.getEnd().includes(this._oCollapseAllButton)){this._oToolbar.insertEnd(this._oCollapseAllButton,0)}this._oCollapseAllButton.setEnabled(!f.isEmpty(this.getRowBinding()));this._oCollapseAllButton.setVisible(this._isCollapseAllEnabled())};tt.prototype._isExpandAllEnabled=function(){return this.isControlDelegateInitialized()&&this.getControlDelegate().getSupportedFeatures(this).expandAll};tt.prototype._updateExpandAllButton=function(){const t=this._oToolbar!=null&&this._isExpandAllEnabled();if(t&&!this._oExpandAllButton){this._oExpandAllButton=o.createExpandCollapseAllButton(this.getId(),[function(){this.getControlDelegate().expandAll(this)},this],true)}if(!this._oExpandAllButton){return}if(this._oToolbar&&!this._oToolbar.getEnd().includes(this._oExpandAllButton)){this._oToolbar.insertEnd(this._oExpandAllButton,0)}this._oExpandAllButton.setEnabled(!f.isEmpty(this.getRowBinding()));this._oExpandAllButton.setVisible(this._isExpandAllEnabled())};tt.prototype._getColumnLabel=function(t){const e=this.getPropertyHelper();const o=e.getProperty(t);return o&&o.label};tt.prototype._onExport=function(t){const e=this;return this._createExportColumnConfiguration().then(function(o){if(!o||!o.length){sap.ui.require(["sap/m/MessageBox"],function(t){t.error(m.getLibraryResourceBundle("sap.ui.mdc").getText("table.NO_COLS_EXPORT"),{styleClass:this.$()&&this.$().closest(".sapUiSizeCompact").length?"sapUiSizeCompact":""})}.bind(e));return}const i=e.getRowBinding();const n=e._getColumnLabel.bind(e);const s=t?"exportAs":"export";const r={workbook:{columns:o,context:{title:e.getHeader()}},dataSource:i,fileName:e.getHeader()};e._getExportHandler().then(function(t){t[s](r,n)})})};tt.prototype._getExportHandler=function(){const t=this;if(this._oExportHandler){return Promise.resolve(this._oExportHandler)}return new Promise(function(e,o){Promise.all([t._loadExportLibrary(),t.getControlDelegate().fetchExportCapabilities(t)]).then(function(o){const i=o[1];sap.ui.require(["sap/ui/export/ExportHandler"],function(o){t._oExportHandler=new o(i);t._oExportHandler.attachBeforeExport(t._onBeforeExport,t);e(t._oExportHandler)})}).catch(function(t){if(!sap.ui.getCore().getLoadedLibraries().hasOwnProperty("sap.ui.export")){y.error(m.getLibraryResourceBundle("sap.ui.mdc").getText("ERROR_MISSING_EXPORT_LIBRARY"))}o(t)})})};tt.prototype._onBeforeExport=function(t){const e=t.getParameter("filterSettings");const o=this.getPropertyHelper();e.forEach(function(t){const e=o.getProperties().find(function(e){return e.path===t.getProperty()});if(e){t.setLabel(e.label);t.setType(e.typeConfig.typeInstance)}});this.fireBeforeExport({exportSettings:t.getParameter("exportSettings"),userExportSettings:t.getParameter("userExportSettings"),filterSettings:e})};tt.prototype._loadExportLibrary=function(){if(!this._oExportLibLoadPromise){this._oExportLibLoadPromise=m.loadLibrary("sap.ui.export",true)}return this._oExportLibLoadPromise};tt.prototype.onkeydown=function(t){if(t.isMarked()){return}if((t.metaKey||t.ctrlKey)&&t.shiftKey&&t.which===E.E){if(this._oExportButton&&this._oExportButton.getEnabled()&&this._isExportEnabled()){this._onExport(true);t.setMarked();t.preventDefault()}}if((t.metaKey||t.ctrlKey)&&t.which===E.COMMA){if(this._oP13nButton&&this._oP13nButton.getVisible()){this._oP13nButton.firePress();t.setMarked();t.preventDefault()}}};tt.prototype._createTable=function(){const t=this._getType();this._oTable=t.createTable(this.getId()+"-innerTable");this._oRowTemplate=t.createRowTemplate(this.getId()+"-innerTableRow");t.updateTable();if(this.getNoData()){this.setNoData(this.getNoData())}if(this.getContextMenu()){this.setContextMenu(this.getContextMenu())}if(this.isFilteringEnabled()){st(this)}if(!this._oColumnHeaderMenu){this._oQuickActionContainer=new H({table:this});this._oItemContainer=new O({table:this});this._oColumnHeaderMenu=new _({id:this.getId()+"-columnHeaderMenu",_quickActions:[this._oQuickActionContainer],_items:[this._oItemContainer]});this.addDependent(this._oColumnHeaderMenu);k.setSemanticStepname(this._oColumnHeaderMenu,"beforeOpen","mdc:tbl:p13n:col");this._oColumnHeaderMenu.attachBeforeOpen(this._createColumnMenuContent,this)}};tt.prototype._createColumnMenuContent=function(t){const e=t.getParameter("openBy");const o=this.getColumns()[e.getParent().indexOfColumn(e)];t.preventDefault();this._oQuickActionContainer.setColumn(o);this._oItemContainer.setColumn(o);this._fullyInitialized().then(function(){return this.finalizePropertyHelper()}.bind(this)).then(function(){Promise.all([this._oQuickActionContainer.initializeQuickActions(),this._oItemContainer.initializeItems()]).then(function(){if(this._oQuickActionContainer.hasQuickActions()||this._oItemContainer.hasItems()){this._oColumnHeaderMenu.openBy(e,true);a.detectUserPersonalizationCompletion(this,this._oColumnHeaderMenu)}}.bind(this))}.bind(this))};tt.prototype._updateColumnResize=function(){const t=this._getType();if(this.getEnableColumnResize()){t.enableColumnResize()}else{t.disableColumnResize()}};tt.prototype._onColumnMove=function(t){a.createColumnReorderChange(this,{column:t.column,index:t.newIndex})};tt.prototype._onCustomSort=function(t,e){const o=t.getParameter("property");this.getCurrentState().sorters.forEach(function(t){if(t.name===o){if(t.descending&&e===$.Descending||!t.descending&&e===$.Ascending){e=$.None}}});a.createSortChange(this,{property:o,sortOrder:e})};tt.prototype._onRowPress=function(t){if(this.getSelectionMode()!==G.SingleMaster){this.fireRowPress({bindingContext:t.bindingContext})}};tt.prototype._onSelectionChange=function(t){if(!this._bSelectionChangedByAPI){this.fireSelectionChange({selectAll:t.selectAll})}};tt.prototype._onColumnResize=function(t){a.createColumnWidthChange(this,{column:t.column,width:t.width})};tt.prototype._onCustomGroup=function(t){a.createGroupChange(this,{property:t})};tt.prototype._onCustomAggregate=function(t){a.createAggregateChange(this,{property:t})};tt.prototype._insertInnerColumn=function(t,e){if(!this._oTable){return}const o=t.getInnerColumn();this._setMobileColumnTemplate(t,e);this._bForceRebind=true;if(e===undefined){this._oTable.addColumn(o)}else{this._oTable.insertColumn(o,e)}this._getType()._onColumnInsert(t)};tt.prototype.moveColumn=function(t,e){t._bIsBeingMoved=true;this.removeAggregation("columns",t,true);this.insertAggregation("columns",t,e,true);delete t._bIsBeingMoved;if(this._oTable){const o=t.getInnerColumn();this._oTable.removeColumn(o);this._oTable.insertColumn(o,e);this._updateMobileColumnTemplate(t,e)}};tt.prototype.removeColumn=function(t){t=this.removeAggregation("columns",t,true);this._updateMobileColumnTemplate(t,-1);return t};tt.prototype.addColumn=function(t){this.addAggregation("columns",t,true);this._insertInnerColumn(t);return this};tt.prototype.insertColumn=function(t,e){this.insertAggregation("columns",t,e,true);this._insertInnerColumn(t,e);return this};tt.prototype._setMobileColumnTemplate=function(t,e){if(!this._oRowTemplate){return}const o=t.getTemplateClone();if(e>=0){this._oRowTemplate.insertCell(o,e);this._oTable.getItems().forEach(function(t){if(t.isA("sap.m.GroupHeaderListItem")){return}t.insertAggregation("cells",new S,e,true)})}else{this._oRowTemplate.addCell(o)}};tt.prototype._updateMobileColumnTemplate=function(t,e){if(!this._oRowTemplate){return}let o,i;if(this._oRowTemplate){o=t.getTemplateClone();i=this._oRowTemplate.indexOfCell(o);ft(this._oRowTemplate,i,e)}if(i>-1){this._oTable.getItems().forEach(function(t){if(t.removeCell){ft(t,i,e)}})}};function ft(t,e,o){const i=t.removeCell(e);if(i){if(o>-1){t.insertCell(i,o)}else{i.destroy()}}}tt.prototype.getSelectedContexts=function(){if(this.isControlDelegateInitialized()){return this.getControlDelegate().getSelectedContexts(this)}return[]};tt.prototype.clearSelection=function(){if(this.isControlDelegateInitialized()){this._bSelectionChangedByAPI=true;this.getControlDelegate().clearSelection(this);this._bSelectionChangedByAPI=false}};tt.prototype._registerInnerFilter=function(t){t.attachSearch(this._rebind,this)};tt.prototype.isTableBound=function(){return this._getType().isTableBound()};tt.prototype.bindRows=function(t){if(!this.isControlDelegateInitialized()||!this._oTable){return}if(this._bFinalzingPropertiesOnModification){this.propertiesFinalized().then(function(){this.bindRows()}.bind(this));return}const e={};this.getControlDelegate().updateBindingInfo(this,e);if(!e.path){return}if(this._oRowTemplate){e.template=this._oRowTemplate}else{delete e.template}tt._addBindingListener(e,"dataRequested",this._onDataRequested.bind(this));tt._addBindingListener(e,"dataReceived",this._onDataReceived.bind(this));tt._addBindingListener(e,"change",this._onBindingChange.bind(this));this._oTable.setShowOverlay(false);this._updateColumnsBeforeBinding();this.getControlDelegate().updateBinding(this,e,this._bForceRebind?null:this.getRowBinding(),{forceRefresh:t});this._updateInnerTableNoData();this._bForceRebind=false};tt.prototype._onDataRequested=function(){this._bIgnoreChange=true};tt.prototype._onDataReceived=function(){this._bIgnoreChange=false;this._updateTableHeaderState()};tt.prototype._onBindingChange=function(){this.fireEvent("_bindingChange");this._updateExpandAllButton();this._updateCollapseAllButton();this._updateExportButton();if(this._bIgnoreChange){return}this._updateTableHeaderState()};tt.prototype._updateTableHeaderState=function(){this._updateHeaderText()};tt.prototype._updateHeaderText=function(){let t,e;if(!this._oNumberFormatInstance){this._oNumberFormatInstance=T.getFloatInstance()}if(this._oTitle&&this.getHeader()){t=this.getHeader();if(this.getShowRowCount()){e=this.getRowBinding()?this.getRowBinding().getCount():0;if(e>0){const o=this._oNumberFormatInstance.format(e);t+=" ("+o+")"}}this._oTitle.setText(t)}if(!this._bIgnoreChange&&this._bAnnounceTableUpdate){this._bAnnounceTableUpdate=false;f.announceTableUpdate(this.getHeader(),e)}};tt.prototype._updateColumnsBeforeBinding=function(){const t=this.getColumns();const e=this.getPropertyHelper();t.forEach(function(t){const o=e.getProperty(t.getPropertyKey());const i=o?o.getSortableProperties().map(function(t){return t.name}):[];const n=this._getSortedProperties().find(function(t){return i.includes(t.name)});let s=$.None;if(n){s=n.descending?$.Descending:$.Ascending}this._getType().updateSortIndicator(t,s)},this)};tt.prototype.getRowBinding=function(){return this._getType().getRowBinding()};tt.prototype._getRowBinding=function(){V.error(this+": The method '_getRowBinding' must not be used will be deleted soon. Use 'getRowBinding' instead.");return this.getRowBinding()};tt._addBindingListener=function(t,e,o){if(!t.events){t.events={}}if(!t.events[e]){t.events[e]=o}else{const i=t.events[e];t.events[e]=function(){o.apply(this,arguments);i.apply(this,arguments)}}};tt.prototype._rebind=function(t){if(this._bFullyInitialized){this.bindRows(t)}else{this._fullyInitialized().then(this._rebind.bind(this,t))}};tt.prototype._onPaste=function(t){if(this.getEnablePaste()){this.firePaste({data:t.data})}};tt.prototype.exit=function(){this._onAfterInitialization("Destroyed");this._onAfterFullInitialization("Destroyed");["_oTable","_oTitle","_vNoData","_oContextMenu","_oNumberFormatInstance","_oTableReady","_oFullInitialize","_oPasteButton","_oP13nButton","_oRowTemplate","_oToolbar","_oFilterInfoBarInvisibleText","_oColumnHeaderMenu","_oManagedObjectModel","_oDefaultType"].concat((()=>et.map(t=>"_o"+P(t)))()).forEach(t=>{this[t]?.destroy?.();delete this[t]});t.prototype.exit.apply(this,arguments)};tt.prototype.addAction=function(e){if(e.getMetadata().getName()!=="sap.ui.mdc.actiontoolbar.ActionToolbarAction"){e=new z(e.getId()+"-action",{action:e})}return t.prototype.addAggregation.apply(this,["actions",e])};tt.prototype.onThemeChanged=function(){if(this._oExportButton){const t=g.ButtonType[N.get({name:"_sap_ui_mdc_Table_ExportButtonType"})];this._oExportButton.setType(t)}};tt.prototype._enableV4LegacySelection=function(){this._bV4LegacySelectionEnabled=true;if(this._oTable&&this._isOfType("Table",true)){const t=b.getPlugin(this._oTable,"sap.ui.table.plugins.ODataV4Selection");if(t){t.destroy();return this.getControlDelegate().initializeSelection(this)}}};tt.prototype._setSelectedContexts=function(t){this.getControlDelegate().setSelectedContexts(this,t)};return tt});
//# sourceMappingURL=Table.js.map