/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./utils/TableUtils","./menus/ColumnHeaderMenuAdapter","sap/ui/core/Core","sap/ui/core/Element","sap/ui/core/library","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/FilterType","sap/ui/model/Sorter","sap/ui/model/Type","sap/ui/model/type/String","sap/base/util/ObjectPath","sap/base/util/JSTokenizer","sap/base/Log"],function(e,t,r,i,a,o,n,l,s,u,p,f,d,g){"use strict";var h=a.HorizontalAlign;var y=a.SortOrder;var c=a.ValueState;var m={Standard:"Standard",Creation:"Creation"};var b=e.createWeakMapFacade();var v=new window.WeakMap;var T=i.extend("sap.ui.table.Column",{metadata:{library:"sap.ui.table",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},minWidth:{type:"int",group:"Dimension",defaultValue:0},flexible:{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true},resizable:{type:"boolean",group:"Behavior",defaultValue:true},hAlign:{type:"sap.ui.core.HorizontalAlign",group:"Appearance",defaultValue:h.Begin},sorted:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},sortOrder:{type:"sap.ui.core.SortOrder",group:"Appearance",defaultValue:y.None},sortProperty:{type:"string",group:"Behavior",defaultValue:null},filtered:{type:"boolean",group:"Appearance",defaultValue:false},filterProperty:{type:"string",group:"Behavior",defaultValue:null},filterValue:{type:"string",group:"Behavior",defaultValue:null},filterOperator:{type:"string",group:"Behavior",defaultValue:null},defaultFilterOperator:{type:"string",group:"Behavior",defaultValue:null},filterType:{type:"any",group:"Misc",defaultValue:null},grouped:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},visible:{type:"boolean",group:"Appearance",defaultValue:true},name:{type:"string",group:"Appearance",defaultValue:null},showFilterMenuEntry:{type:"boolean",group:"Appearance",defaultValue:true},showSortMenuEntry:{type:"boolean",group:"Appearance",defaultValue:true},headerSpan:{type:"any",group:"Behavior",defaultValue:1},autoResizable:{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"label",aggregations:{label:{type:"sap.ui.core.Control",altTypes:["string"],multiple:false},multiLabels:{type:"sap.ui.core.Control",multiple:true,singularName:"multiLabel"},template:{type:"sap.ui.core.Control",altTypes:["string"],multiple:false},creationTemplate:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},menu:{type:"sap.ui.unified.Menu",multiple:false}},associations:{headerMenu:{type:"sap.ui.core.IColumnHeaderMenu",multiple:false}},events:{columnMenuOpen:{allowPreventDefault:true,parameters:{menu:{type:"sap.ui.unified.Menu"}}}}}});T._DEFAULT_FILTER_TYPE=new p;T.prototype.init=function(){this.mSkipPropagation={template:true,creationTemplate:true};b(this).oSorter=null;b(this).mCellContentVisibilitySettings=F(this);b(this).bHasDefaultLabel=false;b(this).bHasDefaultTemplate=false;this._initTemplateClonePool()};T.prototype._initTemplateClonePool=function(){this._mTemplateClones=Object.keys(m).reduce(function(e,t){e[t]=[];return e},{})};T.prototype.exit=function(){this._destroyTemplateClones();t.unlink(this)};T.prototype.invalidate=function(t){if(t!==this.getTemplate()&&t!==this.getCreationTemplate()&&!e.isA(t,"sap.ui.table.ColumnMenu")){i.prototype.invalidate.apply(this,arguments)}};T.prototype.setLabel=function(t){var r=t;if(typeof t==="string"){if(b(this).bHasDefaultLabel){this.getLabel().setText(t);return this}r=e._getTableTemplateHelper().createLabel({text:t});b(this).bHasDefaultLabel=true}else if(b(this).bHasDefaultLabel){this.destroyLabel();b(this).bHasDefaultLabel=false}if(r&&r.setIsInColumnHeaderContext){r.setIsInColumnHeaderContext(true)}var i=this.getLabel();if(i&&r!==i&&i.setIsInColumnHeaderContext){i.setIsInColumnHeaderContext(false)}return this.setAggregation("label",r)};T.prototype.setTemplate=function(t){var r=t;var i=this._getTable();var a=this.getTemplate();var o=true;if(typeof t==="string"){if(b(this).bHasDefaulTemplate){this.getTemplate().bindProperty("text",t);o=false}else{r=e._getTableTemplateHelper().createTextView().bindProperty("text",t);b(this).bHasDefaulTemplate=true}}else if(b(this).bHasDefaulTemplate){this.destroyTemplate();b(this).bHasDefaulTemplate=false}if(o){this.setAggregation("template",r,true)}if(this.getVisible()){this.invalidate()}this._destroyTemplateClones("Standard");if(i&&this.getVisible()){if(r){i.invalidateRowsAggregation()}if(!a||!r){var n=i.getCreationRow();if(n){n._update()}}}return this};T.prototype.destroyTemplate=function(){this.destroyAggregation("template");this._destroyTemplateClones("Standard");var e=this._getTable();var t=e?e.getCreationRow():null;if(t){t._update()}return this};T.prototype.setCreationTemplate=function(e){var t=this._getTable();this.setAggregation("creationTemplate",e,true);this._destroyTemplateClones("Creation");if(e&&t&&this.getVisible()){var r=t.getCreationRow();if(r){r._update()}}return this};T.prototype.getCreationTemplate=function(){return this.getAggregation("creationTemplate")};T.prototype.destroyCreationTemplate=function(){this.destroyAggregation("creationTemplate",true);this._destroyTemplateClones("Creation");return this};T.prototype._menuHasItems=function(){var t=this._getTable();var r=(t?t.getEnableColumnFreeze():false)||(t?t.getShowColumnVisibilityMenu():false)||this.isSortableByMenu()||this.isFilterableByMenu()||this.isGroupableByMenu();if(r){return true}return e.Hook.call(t,e.Hook.Keys.Column.MenuItemNotification,this).some(function(e){return e})};T.prototype.isFilterableByMenu=function(){return!!(this.getFilterProperty()&&this.getShowFilterMenuEntry())};T.prototype.isSortableByMenu=function(){return!!(this.getSortProperty()&&this.getShowSortMenuEntry())};T.prototype.isGroupableByMenu=function(){var e=this._getTable();return!!(e&&e.getEnableGrouping&&e.getEnableGrouping()&&this.getSortProperty())};T.prototype._isGroupableByMenu=function(){var e=false;e=this.isGroupableByMenu();return e};T.prototype.setSorted=function(e){if(e&&this.getSortOrder()===y.None&&!this.isBound("sortOrder")){this.setSortOrder(y.Ascending)}return this.setProperty("sorted",e)};T.prototype.setFilterValue=function(e){return this.setProperty("filterValue",e,true)};T.prototype.setFilterOperator=function(e){return this.setProperty("filterOperator",e,true)};T.prototype.setDefaultFilterOperator=function(e){return this.setProperty("defaultFilterOperator",e,true)};T.prototype._openHeaderMenu=function(e){var r=this.getHeaderMenuInstance();this._cellPressed=e;t.activateFor(this).then(function(){if(r){r.openBy(e)}})};T.prototype._isHeaderMenuOpen=function(){var e=this.getHeaderMenuInstance();if(e){return e.isOpen()}};T.prototype._setGrouped=function(e){var t=this._getTable();t.setGroupBy(e?this:null)};T.prototype._isAggregatableByMenu=function(){return false};T.prototype.toggleSort=function(){this.sort(this.getSorted()&&this.getSortOrder()===y.Ascending)};T.prototype.sort=function(e,t){this._sort(e?y.Descending:y.Ascending,t);return this};T.prototype._sort=function(e,t){var r=this._getTable();if(!r||this.getSortProperty()===""){return}var i=r.fireSort({column:this,sortOrder:e,columnAdded:e!==y.None&&t===true});if(!i){return}if(e===y.None){r._removeSortedColumn(this)}else{r.pushSortedColumn(this,t)}this.setSorted(e!==y.None);this.setSortOrder(e);this._updateSorters()};T.prototype._updateSorters=function(){var e=this._getTable();var t=e.getSortedColumns();var r=e.getColumns();var i=this.getSortOrder();for(let e=0,i=r.length;e<i;e++){if(t.indexOf(r[e])<0){r[e].resetProperty("sorted");r[e].resetProperty("sortOrder");delete b(r[e]).oSorter}}if(i!==y.None){b(this).oSorter=new s(this.getSortProperty(),i===y.Descending)}this._applySorters()};T.prototype._applySorters=function(){const e=this._getTable();const t=e.getBinding();if(!t){g.warning("Sorting not performed because no binding present",this);return}const r=e.getSortedColumns();const i=r.map(e=>b(e).oSorter);t.sort(i)};T.prototype._getFilterState=function(){try{this._getFilter();return c.None}catch(e){return c.Error}};T.prototype._getFilter=function(){var e,t=this.getFilterProperty(),r=this.getFilterValue(),i=this.getFilterOperator(),a,l,s=this.getFilterType()||T._DEFAULT_FILTER_TYPE,u=s instanceof p,f;if(r){if(!i){f=r.match(/(.*)\s*\.\.\s*(.*)/);if(r.indexOf("=")==0){i=n.EQ;a=r.substr(1)}else if(r.indexOf("!=")==0){i=n.NE;a=r.substr(2)}else if(r.indexOf("<=")==0){i=n.LE;a=r.substr(2)}else if(r.indexOf("<")==0){i=n.LT;a=r.substr(1)}else if(r.indexOf(">=")==0){i=n.GE;a=r.substr(2)}else if(r.indexOf(">")==0){i=n.GT;a=r.substr(1)}else if(f){if(f[1]&&f[2]){i=n.BT;a=f[1];l=f[2]}else if(f[1]&&!f[2]){i=n.GE;a=f[1]}else{i=n.LE;a=f[2]}}else if(u&&r.indexOf("*")==0&&r.lastIndexOf("*")==r.length-1){i=n.Contains;a=r.substr(1,r.length-2)}else if(u&&r.indexOf("*")==0){i=n.EndsWith;a=r.substr(1)}else if(u&&r.lastIndexOf("*")==r.length-1){i=n.StartsWith;a=r.substr(0,r.length-1)}else{if(this.getDefaultFilterOperator()){i=this.getDefaultFilterOperator()}else if(u){i=n.Contains}else{i=n.EQ}a=r.substr(0)}if(!l){e=new o(t,i,this._parseFilterValue(a))}else{e=new o(t,i,this._parseFilterValue(a),this._parseFilterValue(l))}}else{e=new o(t,i,this._parseFilterValue(r))}}return e};T.prototype.filter=function(t){var r=this._getTable();if(r&&r.isBound("rows")){var i=r.fireFilter({column:this,value:t});if(i){this.setFiltered(!!t);this.setFilterValue(t);var a=[];var o=r.getColumns();for(var n=0,s=o.length;n<s;n++){var u=o[n],p,f;try{p=u._getFilter();f=c.None}catch(e){f=c.Error}if(p){a.push(p)}e.Hook.call(this._getTable(),e.Hook.Keys.Column.SetFilterState,u,f)}r.getBinding().filter(a,l.Control)}}return this};T.prototype._parseFilterValue=function(e){var t=this.getFilterType();if(t){if(typeof t==="function"){e=t(e)}else{e=t.parseValue(e,"string")}}return e};T.prototype.shouldRender=function(){var e=this.getVisible()&&this.getTemplate()!=null;e=e&&!this.getGrouped();return e};T.prototype.setProperty=function(e,t){var r=this._getTable();var a=r&&this.getProperty(e)!=t;var o=a&&e==="visible";var n=a&&(e==="visible"||e==="headerSpan");var l=i.prototype.setProperty.apply(this,arguments);if(o){r.invalidateRowsAggregation();var s=r.getCreationRow();if(s){s._update()}}if(n){r._invalidateComputedFixedColumnCount()}return l};T.prototype.setFilterType=function(e){var t=e;if(typeof e==="string"){try{var r=d.parseJS(e);if(typeof r.type==="string"){var i=sap.ui.require(r.type.replaceAll(".","/"));if(!i){i=f.get(e)}t=i&&new i(r.formatOptions,r.constraints)}}catch(r){var i=sap.ui.require(e.replaceAll(".","/"));if(!i){i=f.get(e)}t=i&&new i}if(!(t instanceof u)){g.error("The filter type is not an instance of sap.ui.model.Type! Ignoring the filter type!");t=undefined}}this.setProperty("filterType",t,true);return this};T.prototype.getIndex=function(){var e=this._getTable();if(e){return e.indexOfColumn(this)}else{return-1}};T.prototype.isDragAllowed=function(t){return e.Column.isColumnMovable(this,true)};T.prototype._getFreeTemplateClone=function(e){var t=this._mTemplateClones[e];var r=null;if(!t){return null}for(var i=0;i<t.length;i++){if(!t[i]||t[i].bIsDestroyed){t.splice(i,1);i--}else if(!r&&!t[i].getParent()){r=t[i]}}return r};T.prototype.getTemplateClone=function(e,t){if(typeof e!=="number"||this.getTemplate()==null){return null}var r=t==null?"Standard":t;var i=this._getFreeTemplateClone(r);if(!i&&m.hasOwnProperty(r)){var a=this["get"+(r==="Standard"?"":r)+"Template"];var o=a.call(this);if(o){i=o.clone();this._mTemplateClones[r].push(i)}}if(i){v.set(i,this);var n=this._getTable();if(n){n._getAccExtension().addColumnHeaderLabel(this,i)}}return i};function C(e){for(var t=0;t<e.length;t++){if(e[t]!=null&&!e[t].bIsDestroyed){e[t].destroy()}}}T.prototype._destroyTemplateClones=function(e){if(e==null){for(var t in m){C(this._mTemplateClones[t])}this._initTemplateClonePool()}else{C(this._mTemplateClones[e]);this._mTemplateClones[e]=[]}};T.prototype._getTable=function(){var t=this.getParent();return e.isA(t,"sap.ui.table.Table")?t:null};T.prototype._setCellContentVisibilitySettings=function(e){_(e);b(this).mCellContentVisibilitySettings=F(this,e)};T.prototype._getCellContentVisibilitySettings=function(){return b(this).mCellContentVisibilitySettings};T.prototype.getHeaderMenuInstance=function(){return r.byId(this.getHeaderMenu())};function _(e){if(e==null){return}S(e,null,false,["standard","groupHeader","summary"]);S(e.standard,"standard",true);S(e.groupHeader,"groupHeader",true,["nonExpandable","expanded","collapsed"]);S(e.summary,"summary",true,["group","total"])}function S(e,t,r,i){if(e!=null&&!(r&&typeof e==="boolean"||i&&typeof e==="object")){throw new Error("Invalid value"+(t?" for '"+t+"'":""))}if(i&&e!=null&&typeof e==="object"){Object.keys(e).forEach(function(r){if(i.includes(r)){if(t!=null){S(e[r],t+"."+r,true)}}else{throw new Error("Unsupported setting '"+(t?t+".":"")+r+"'")}})}}function F(e,t){t=t?t:{};return{standard:V(t.standard),groupHeader:{nonExpandable:V(t.groupHeader,"nonExpandable"),expanded:V(t.groupHeader,"expanded"),collapsed:V(t.groupHeader,"collapsed")},summary:{group:V(t.summary,"group"),total:V(t.summary,"total")}}}function V(e,t){if(typeof e==="boolean"){return e}else if(t&&e){return e[t]!==false}else{return true}}T.ofCell=function(e){return v.get(e)||null};return T});
//# sourceMappingURL=Column.js.map