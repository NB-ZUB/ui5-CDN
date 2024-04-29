/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TableRenderer","./utils/TableUtils","sap/ui/core/Renderer"],function(e,t,n){"use strict";var a={apiVersion:2};a.render=function(e,t){var n=t.getTable();if(!n){return}e.openStart("div",t);e.attr("data-sap-ui-fastnavgroup","true");n._getAccRenderExtension().writeAriaAttributesFor(e,n,"CREATIONROW",{creationRow:t});e.class("sapUiTableCreationRow");e.openEnd();this.renderBeginSection(e);this.renderMiddleSection(e,t,n);this.renderEndSection(e,n);n._getAccRenderExtension().writeAccCreationRowText(e,n,t);e.close("div")};a.renderBeginSection=function(e){e.openStart("div");e.class("sapUiTableCreationRowBeginSection");e.class("sapUiTableRowHdrScr");e.openEnd();e.close("div")};a.renderMiddleSection=function(e,t,n){e.openStart("div");e.class("sapUiTableCreationRowMiddleSection");e.openEnd();this.renderForm(e,t,n);this.renderToolbar(e,t);e.close("div")};a.renderEndSection=function(e,n){e.openStart("div");e.class("sapUiTableCreationRowEndSection");if(t.hasRowActions(n)){e.class("sapUiTableCell");e.class("sapUiTableRowActionHeaderCell")}else{e.class("sapUiTableVSbBg")}e.openEnd();e.close("div")};a.renderForm=function(e,t,n){if(t.getCells().length===0){return}e.openStart("div");e.class("sapUiTableCreationRowForm");e.openEnd();if(n.getComputedFixedColumnCount()>0){this.renderRowFormTable(e,n,true)}e.openStart("div");e.class("sapUiTableCtrlScr");e.openEnd();this.renderRowFormTable(e,n,false);e.close("div");e.close("div")};a.renderRowFormTable=function(a,i,r){var o=r?0:i.getComputedFixedColumnCount();var l=r?i.getComputedFixedColumnCount():i.getColumns().length;var s=i.getCreationRow();a.openStart("table");i._getAccRenderExtension().writeAriaAttributesFor(a,i,"CREATIONROW_TABLE");a.class("sapUiTableCtrl");a.style(r?"width":"min-width",i._getColumnsWidth(o,l)+"px");a.openEnd();a.openStart("thead").openEnd();a.openStart("tr");a.class("sapUiTableCtrlCol");a.openEnd();var d=i.getColumns();var c=new Array(l);var p;var u;var C=!r&&l>o;var T;for(p=o;p<l;p++){u=d[p];T={shouldRender:!!(u&&u.shouldRender())};if(T.shouldRender){var b=u.getWidth();if(t.isVariableWidth(b)){C=false;if(r){u._iFixWidth=u._iFixWidth||160;b=u._iFixWidth+"px"}}else if(r){delete u._iFixWidth}T.width=b}c[p]=T}for(p=o;p<l;p++){u=d[p];T=c[p];if(T.shouldRender){a.openStart("th");a.style("width",T.width);a.attr("data-sap-ui-headcolindex",p);a.attr("data-sap-ui-colid",u.getId());a.openEnd();a.close("th")}}if(C){a.openStart("th").openEnd().close("th")}a.close("tr");a.close("thead");a.openStart("tbody").openEnd();a.openStart("tr");a.class("sapUiTableTr");a.openEnd();var g=s.getCells();var h=e.getColumnsToRender(i,o,l);for(p=o;p<l;p++){u=d[p];T=c[p];if(T.shouldRender){a.openStart("td");a.attr("data-sap-ui-colid",u.getId());var v=s._getCell(p);var f=h.length;var R=f>0&&h[0]===u;var S=f>0&&h[f-1]===u;var E=e.getLastFixedColumnIndex(i);var w=r&E===p;var x=n.getTextAlign(u.getHAlign(),v&&v.getTextDirection&&v.getTextDirection());a.style("text-align",x);a.class("sapUiTableCell");a.class("sapUiTablePseudoCell");if(R){a.class("sapUiTableCellFirst")}if(w){a.class("sapUiTableCellLastFixed")}if(S){a.class("sapUiTableCellLast")}a.openEnd();if(v){a.openStart("div");a.class("sapUiTableCellInner");a.openEnd();e.renderTableCellControl(a,i,v,R);a.close("div")}a.close("td")}}if(!r&&C&&g.length>0){a.openStart("td").class("sapUiTableCellDummy").openEnd().close("td")}a.close("tr");a.close("tbody");a.close("table")};a.renderToolbar=function(e,t){e.renderControl(t._getToolbar())};return a},true);
//# sourceMappingURL=CreationRowRenderer.js.map