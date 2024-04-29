/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/Sorter","sap/ui/Device","sap/ui/thirdparty/jquery"],function(e,r,jQuery){"use strict";var a=new window.WeakMap;var t={TableUtils:null,HierarchyMode:{Flat:"Flat",Group:"Group",Tree:"Tree",GroupedTree:"GroupedTree"},setHierarchyMode:function(e,r){if(!t.TableUtils.isA(e,"sap.ui.table.Table")||!(r in t.HierarchyMode)){return}var o=t.getHierarchyMode(e);if(o!==r){a.set(e,r);e.invalidate()}},getHierarchyMode:function(e){return t.TableUtils.isA(e,"sap.ui.table.Table")?a.get(e)||t.HierarchyMode.Flat:null},setToDefaultFlatMode:function(e){t.setHierarchyMode(e,t.HierarchyMode.Flat)},setToDefaultGroupMode:function(e){t.setHierarchyMode(e,t.HierarchyMode.Group)},setToDefaultTreeMode:function(e){t.setHierarchyMode(e,t.HierarchyMode.Tree)},isInFlatMode:function(e){return t.getHierarchyMode(e)===t.HierarchyMode.Flat},isInGroupMode:function(e){var r=t.getHierarchyMode(e);return r===t.HierarchyMode.Group||r===t.HierarchyMode.GroupedTree},isInTreeMode:function(e){return t.getHierarchyMode(e)===t.HierarchyMode.Tree},getModeCssClass:function(e){switch(t.getHierarchyMode(e)){case t.HierarchyMode.Group:case t.HierarchyMode.GroupedTree:return"sapUiTableGroupMode";case t.HierarchyMode.Tree:return"sapUiTableTreeMode";default:return null}},showGroupMenuButton:function(e){return!r.system.desktop&&t.TableUtils.isA(e,"sap.ui.table.AnalyticalTable")},isInGroupHeaderRow:function(e){var r=t.TableUtils.getCellInfo(e);if(r.isOfType(t.TableUtils.CELLTYPE.ANYCONTENTCELL)){return r.cell.parent().hasClass("sapUiTableGroupHeaderRow")}return false},isInSummaryRow:function(e){var r=t.TableUtils.getCellInfo(e);if(r.isOfType(t.TableUtils.CELLTYPE.ANYCONTENTCELL)){return r.cell.parent().hasClass("sapUiTableSummaryRow")}return false},calcGroupIndent:function(e){var r=t.getHierarchyMode(e.getTable())===t.HierarchyMode.GroupedTree;var a=!r&&!e.isGroupHeader()&&!e.isTotalSummary();var o=e.getLevel()-(a?1:0);var n=0;for(var i=1;i<o;i++){if(i===1){n=24}else if(i===2){n+=12}else{n+=8}}return n},calcTreeIndent:function(e){return(e.getLevel()-1)*17},setGroupIndent:function(e,r){var a=e.getDomRefs(true);var t=a.row;var o=a.rowHeaderPart;var n=e.getTable()._bRtlMode;var i=t.find("td.sapUiTableCellFirst > .sapUiTableCellInner");var l=o.find(".sapUiTableGroupShield");if(r<=0){o.css(n?"right":"left","");l.css("width","").css(n?"margin-right":"margin-left","");i.css(n?"padding-right":"padding-left","");t.css("--CalculatedGroupIndent","0")}else{o.css(n?"right":"left",r+"px");l.css("width",r+"px").css(n?"margin-right":"margin-left",-1*r+"px");i.css(n?"padding-right":"padding-left",r+8+"px");t.css("--CalculatedGroupIndent",r+"px")}},setTreeIndent:function(e,r){var a=e.getDomRefs(true);var t=a.row;var o=e.getTable()._bRtlMode;var n=t.find(".sapUiTableTreeIcon");n.css(o?"margin-right":"margin-left",r>0?r+"px":"")},updateTableRowForGrouping:function(e){var r=e.getTable();var a=e.getDomRefs(true);var o=a.row;var n=e.isExpanded();var i=e.isExpandable();o.toggleClass("sapUiTableSummaryRow",e.isSummary());if(t.isInGroupMode(r)){var l=e.getTitle();var s=t.calcGroupIndent(e);e.$("groupHeader").toggleClass("sapUiTableGroupIconOpen",i&&n).toggleClass("sapUiTableGroupIconClosed",i&&!n).attr("title",!r._getHideStandardTooltips()&&l?l:null).text(l);t.setGroupIndent(e,s);o.toggleClass("sapUiTableRowIndented",s>0).toggleClass("sapUiTableGroupHeaderRow",e.isGroupHeader());if(t.showGroupMenuButton(r)){var p=r.$();var u=p.hasClass("sapUiTableVScr")?p.find(".sapUiTableVSb").width():0;var d=a.rowHeaderPart.find(".sapUiTableGroupMenuButton");var g=p.width()-d.width()-u-5-s;d.css(r._bRtlMode?"right":"left",g+"px")}}if(t.isInTreeMode(r)){var c=o.find(".sapUiTableTreeIcon");if(!i&&document.activeElement===c[0]){t.TableUtils.getParentCell(r,c[0]).trigger("focus")}c.toggleClass("sapUiTableTreeIconLeaf",!i).toggleClass("sapUiTableTreeIconNodeOpen",i&&n).toggleClass("sapUiTableTreeIconNodeClosed",i&&!n);t.setTreeIndent(e,t.calcTreeIndent(e))}if(!t.isInFlatMode(r)){r._getAccExtension().updateAriaExpandAndLevelState(e)}},cleanupTableRowForGrouping:function(e){var r=e.getTable();var a=e.getDomRefs(true);if(t.isInGroupMode(r)){a.row.removeClass("sapUiTableGroupHeaderRow sapUiTableSummaryRow sapUiTableRowIndented");e.$("groupHeader").removeClass("sapUiTableGroupIconOpen","sapUiTableGroupIconClosed").attr("title","").text("");t.setGroupIndent(e,0)}if(t.isInTreeMode(r)){a.row.find(".sapUiTableTreeIcon").removeClass("sapUiTableTreeIconLeaf").removeClass("sapUiTableTreeIconNodeOpen").removeClass("sapUiTableTreeIconNodeClosed");t.setTreeIndent(e,0)}r._getAccExtension().updateAriaExpandAndLevelState(e)},updateGroups:function(e){if(e.getBinding()){e.getRows().forEach(function(e){t.updateTableRowForGrouping(e)})}else{e.getRows().forEach(function(e){t.cleanupTableRowForGrouping(e)})}},setupExperimentalGrouping:function(r){if(!r.getEnableGrouping()){return}var a=r.getBinding();var o=sap.ui.getCore().byId(r.getGroupBy());var n=o&&o.getGrouped()&&t.TableUtils.isA(a,"sap.ui.model.ClientListBinding");if(!n||a._modified){return}a._modified=true;t.setToDefaultGroupMode(r);var i=o.getSortProperty();a.sort(new e(i));var l=r._getTotalRowCount(),s=a.getContexts(0,l);var p;var u=0;for(var d=l-1;d>=0;d--){var g=s[d].getProperty(i);if(!p){p=g}if(p!==g){var c=s[d+1].getModel().getContext("/sap.ui.table.GroupInfo"+d);c.__groupInfo={oContext:s[d+1],name:p,count:u,groupHeader:true,expanded:true};s.splice(d+1,0,c);p=g;u=0}u++}var c=s[0].getModel().getContext("/sap.ui.table.GroupInfo");c.__groupInfo={oContext:s[0],name:p,count:u,groupHeader:true,expanded:true};s.splice(0,0,c);jQuery.extend(a,{getLength:function(){return s.length},getContexts:function(e,r){return s.slice(e,e+r)}});function f(e){var r=s[e];return(r&&r.__groupInfo&&r.__groupInfo.groupHeader)===true}r._experimentalGroupingRowState=function(e){var r=e.context;if((r&&r.__groupInfo&&r.__groupInfo.groupHeader)===true){e.type=e.Type.GroupHeader}e.title=r&&r.__groupInfo&&r.__groupInfo.name+" - "+r.__groupInfo.count;e.expandable=e.type===e.Type.GroupHeader;e.expanded=e.expandable&&r.__groupInfo&&r.__groupInfo.expanded;e.level=e.expandable?1:2;e.contentHidden=e.expandable};r._experimentalGroupingExpand=function(e){var r=e.getIndex();if(f(r)&&!s[r].__groupInfo.expanded){for(var t=0;t<s[r].__childs.length;t++){s.splice(r+1+t,0,s[r].__childs[t])}delete s[r].__childs;s[r].__groupInfo.expanded=true;a._fireChange()}};r._experimentalGroupingCollapse=function(e){var r=e.getIndex();if(f(r)&&s[r].__groupInfo.expanded){s[r].__childs=s.splice(r+1,s[r].__groupInfo.count);s[r].__groupInfo.expanded=false;a._fireChange()}};var T=t.TableUtils.Hook;T.register(r,T.Keys.Row.UpdateState,r._experimentalGroupingRowState);T.register(r,T.Keys.Row.Expand,r._experimentalGroupingExpand);T.register(r,T.Keys.Row.Collapse,r._experimentalGroupingCollapse);r._mTimeouts.groupingFireBindingChange=r._mTimeouts.groupingFireBindingChange||window.setTimeout(function(){a._fireChange()},0)},resetExperimentalGrouping:function(e){var r=e.getBinding();var a=t.TableUtils.Hook;if(r&&r._modified){t.setToDefaultFlatMode(e);e.bindRows(e.getBindingInfo("rows"))}a.deregister(e,a.Keys.Row.UpdateState,e._experimentalGroupingRowState);a.deregister(e,a.Keys.Row.Expand,e._experimentalGroupingExpand);a.deregister(e,a.Keys.Row.Collapse,e._experimentalGroupingCollapse);delete e._experimentalGroupingRowState;delete e._experimentalGroupingExpand;delete e._experimentalGroupingCollapse}};return t},true);
//# sourceMappingURL=_GroupingUtils.js.map