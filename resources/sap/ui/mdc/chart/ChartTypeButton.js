/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/OverflowToolbarButton","sap/m/ButtonRenderer","sap/ui/base/ManagedObjectObserver","sap/m/library","sap/m/IllustratedMessage","sap/m/library","sap/ui/model/Filter","sap/ui/model/json/JSONModel"],function(e,t,a,s,i,o,r,n){"use strict";const c=s.PlacementType;let p,l,h,d,u,b,y;const f=e.extend("sap.ui.mdc.chart.ChartTypeButton",{metadata:{library:"sap.ui.mdc",associations:{chart:{type:"sap.ui.mdc.Chart",multiple:false}}},renderer:t});f.prototype.init=function(){e.prototype.init.apply(this,arguments);this.bindProperty("icon","$chart>/ChartTypeInfo/icon");this.bindProperty("tooltip","$chart>/ChartTypeInfo/text");this.bindProperty("text","$chart>/ChartTypeInfo/text");this.attachPress(this.displayChartTypes.bind(this))};f.prototype._updateChart=function(e){if(e){const t=new n;t.setProperty("/ChartTypeInfo",e.getChartTypeInfo());this.setModel(t,"$chart");this._oObserver=new a(function(a){if(a.name==="chartType"){t.setProperty("/ChartTypeInfo",e.getChartTypeInfo())}});this._oObserver.observe(e,{aggregations:["items"],properties:["chartType"]})}else{this.setModel(null,"$chart");if(this._oObserver){this._oObserver.disconnect();this._oObserver.destroy();delete this._oObserver}}};f.prototype.setChart=function(e){this.setAssociation("chart",e);this._updateChart(e);return this};f.prototype._getChart=function(){let e;const t=this.getChart();if(t){e=sap.ui.getCore().byId(t)}return e};f.mMatchingIcon={bar:"sap-icon://horizontal-bar-chart",bullet:"sap-icon://horizontal-bullet-chart",bubble:"sap-icon://bubble-chart",column:"sap-icon://vertical-bar-chart",combination:"sap-icon://business-objects-experience",dual_bar:"sap-icon://horizontal-bar-chart",dual_column:"sap-icon://vertical-bar-chart",dual_combination:"sap-icon://business-objects-experience",dual_horizontal_combination:"sap-icon://business-objects-experience",dual_horizontal_stacked_combination:"sap-icon://business-objects-experience",dual_line:"sap-icon://line-chart",dual_stacked_bar:"sap-icon://full-stacked-chart",dual_stacked_column:"sap-icon://vertical-stacked-chart",dual_stacked_combination:"sap-icon://business-objects-experience",donut:"sap-icon://donut-chart",heatmap:"sap-icon://heatmap-chart",horizontal_stacked_combination:"sap-icon://business-objects-experience",line:"sap-icon://line-chart",pie:"sap-icon://pie-chart",scatter:"sap-icon://scatter-chart",stacked_bar:"sap-icon://full-stacked-chart",stacked_column:"sap-icon://vertical-stacked-chart",stacked_combination:"sap-icon://business-objects-experience",treemap:"sap-icon://Chart-Tree-Map",vertical_bullet:"sap-icon://vertical-bullet-chart","100_dual_stacked_bar":"sap-icon://full-stacked-chart","100_dual_stacked_column":"sap-icon://vertical-stacked-chart","100_stacked_bar":"sap-icon://full-stacked-chart","100_stacked_column":"sap-icon://full-stacked-column-chart",waterfall:"sap-icon://vertical-waterfall-chart",horizontal_waterfall:"sap-icon://horizontal-waterfall-chart"};f.prototype.displayChartTypes=function(e){const t=this._getChart();const a=e.getSource();if(!t||!a){return}if(!this.oReadyPromise){this.oReadyPromise=new Promise(function(e){if(p){e(true)}else{sap.ui.require(["sap/m/ResponsivePopover","sap/m/List","sap/m/SearchField","sap/m/StandardListItem","sap/ui/core/InvisibleText","sap/ui/Device"],function(t,a,s,i,o,r){p=t;l=a;h=s;d=i;u=o;b=r;if(!y){sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc",true).then(function(t){y=t;e(true)})}else{e(true)}})}})}this.oReadyPromise.then(function(){if(!this.oPopover){this.oPopover=this._createPopover(t);this.oPopover.attachAfterClose(function(){this.oPopover.destroy();delete this.oPopover}.bind(this));return this.oPopover.openBy(a)}else if(this.oPopover){this.oPopover.close()}}.bind(this))};f.prototype._createPopover=function(e){const t=new d({title:"{$chartTypes>text}",icon:"{$chartTypes>icon}",selected:"{$chartTypes>selected}"});const a=new l({mode:"SingleSelectMaster",noData:new i({title:y.getText("chart.NO_CHART_TYPES_AVAILABLE"),description:y.getText("chart.NO_CHART_TYPES_AVAILABLE_ACTION"),illustrationType:o.IllustratedMessageType.AddDimensions}),items:{path:"$chartTypes>/AvailableChartTypes",template:t},selectionChange:function(t){if(t&&t.mParameters&&t.mParameters.listItem){const a=t.mParameters.listItem.getBinding("title");if(a){const t=a.getContext();if(t){const a=t.getObject();if(a&&a.key){sap.ui.require(["sap/ui/mdc/flexibility/Chart.flexibility"],function(t){e.getEngine().createChanges({control:e,key:"Type",state:{properties:{chartType:a.key}}}).then(function(t){e.getControlDelegate().requestToolbarUpdate(e)})})}}}}r.close()}});const s=new h({placeholder:y.getText("chart.CHART_TYPE_SEARCH"),liveChange:function(t){if(e){this._triggerSearchInPopover(t,a)}}.bind(this)});const r=new p({id:e.getId()+"-btnChartTypePopover",placement:c.VerticalPreferredBottom,contentWidth:"25rem"});if(!b.system.phone){r.setSubHeader(s)}else{r.addContent(s)}const f=new n;f.setProperty("/AvailableChartTypes",this._getChart().getAvailableChartTypes());r.setModel(f,"$chartTypes");if(b.system.desktop){const e=new u({text:y.getText("chart.CHART_TYPELIST_TEXT")});r.setShowHeader(false);r.addContent(e);r.addAriaLabelledBy(e)}else{r.setTitle(y.getText("chart.CHART_TYPELIST_TEXT"))}r.addContent(a);if(a.getItems().length<7){s.setVisible(false)}return r};f.prototype._triggerSearchInPopover=function(e,t){if(!e||!t){return}const a=e.getParameter("newValue");let s=[];if(a){s=new r("text","Contains",a)}t.getBinding("items").filter(s)};f.prototype.exit=function(){e.prototype.exit.apply(this,arguments);if(this.oPopover){this.oPopover.destroy();this.oPopover=null}if(this._oObserver){this._oObserver.disconnect();this._oObserver.destroy();delete this._oObserver}};return f});
//# sourceMappingURL=ChartTypeButton.js.map