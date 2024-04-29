/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/model/json/JSONModel","sap/ui/table/TreeTable","sap/ui/table/Column","sap/ui/table/rowmodes/Fixed","sap/m/Toolbar","sap/m/ToolbarSpacer","sap/m/Button","sap/m/SearchField","sap/m/Label","sap/m/Text","sap/m/RatingIndicator","./TableRenderer"],function(e,t,a,l,s,i,r,o,n,u,d,h,b){"use strict";var m=e.extend("sap.ui.dt.enablement.report.Table",{metadata:{library:"sap.ui.dt",properties:{data:{type:"object"}},aggregations:{_table:{type:"sap.ui.table.TreeTable",hidden:true,multiple:false}}},init(){this.setAggregation("_table",this._createTable())},exit(){clearTimeout(this._iFilterTimeout);this.setData(null)},setData(e){if(this._oModel){this._oModel.destroy();delete this._oModel}if(e){this._oModel=new t(e);this._getTable().setModel(this._oModel)}else{this._getTable().setModel(null)}this.setProperty("data",e)},filter(e){var t=this._getTable().getModel();if(t){if(e.length>0){var a=this.getData();var l=a.children.filter(function(t){if(e.indexOf("status=")!==-1){return t.status.value===e.substring(e.indexOf("=")+1)}return t.name.toLowerCase().indexOf(e.toLowerCase())!==-1});t.setData(l)}else{t.setData(this.getData())}}},_createTable(){var e=new a(`${this.getId()}--table`,{selectionMode:"MultiToggle",rowMode:new s({rowCount:20}),enableSelectAll:false,ariaLabelledBy:"title",extension:this._createToolbar(),rows:"{path:'/', parameters: {arrayNames:['children']}}",columns:[this._createTextColumn("name","Name","{name}"),this._createRatingIndicatorColumn("value","Status Values","{status/value}","{status/text} ({status/value})"),this._createTextColumn("status","Status","{status/text}"),this._createTextColumn("message","Message","{message}")]});return e},_createToolbar(){return new i(`${this.getId()}--toolbar`,{content:[new r(`${this.getId()}--toolbar-spacer`),new o(`${this.getId()}--toolbar-collapse-button`,{text:"Collapse all",press:this._onCollapseAll.bind(this)}),new o(`${this.getId()}--toolbar-expand-button`,{text:"Expand",press:this._onExpandSecondLevel.bind(this)}),new n(`${this.getId()}--toolbar-search-field`,{liveChange:this._onSearch.bind(this)})]})},_onSearch(e){var t=e.getParameter("newValue");clearTimeout(this._iFilterTimeout);this._iFilterTimeout=setTimeout(function(){this.filter(t)}.bind(this),100)},_createTextColumn(e,t,a){return this._createColumn(e,t,new d({text:a}))},_createRatingIndicatorColumn(e,t,a,l){return this._createColumn(e,t,new h({maxValue:3,value:a,enabled:false,tooltip:l}))},_createColumn(e,t,a){return new l(`${this.getId()}--table-column-${e}`,{label:new u({text:t}),width:"13em",template:a})},_getTable(){return this.getAggregation("_table")},_onCollapseAll(){var e=this._getTable();e.collapseAll()},_onExpandSecondLevel(){var e=this._getTable();e.expandToLevel(2)},renderer:b});return m});
//# sourceMappingURL=Table.js.map