/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/util/loadModules","sap/ui/mdc/valuehelp/base/ListContent","sap/ui/mdc/condition/Condition","sap/ui/mdc/enums/ConditionValidated","sap/ui/mdc/enums/OperatorName","sap/ui/mdc/util/Common","sap/m/p13n/enum/PersistenceMode","sap/m/p13n/Engine","sap/base/util/merge","sap/ui/mdc/p13n/StateUtil","sap/ui/mdc/condition/FilterOperatorUtil","sap/base/Log"],function(t,e,i,n,r,o,l,s,a,c,u,h){"use strict";const p=e.extend("sap.ui.mdc.valuehelp.base.FilterableListContent",{metadata:{library:"sap.ui.mdc",properties:{filterFields:{type:"string",defaultValue:""},keyPath:{type:"string",defaultValue:""},descriptionPath:{type:"string",defaultValue:""},group:{type:"string",defaultValue:""}},aggregations:{filterBar:{type:"sap.ui.mdc.filterbar.vh.FilterBar",multiple:false},_defaultFilterBar:{type:"sap.ui.mdc.filterbar.vh.FilterBar",multiple:false,visibility:"hidden"}},associations:{},events:{}}});p.prototype.init=function(){e.prototype.init.apply(this,arguments);this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");this._oObserver.observe(this,{properties:["filterFields"],aggregations:["_defaultFilterBar","filterBar"]});s.getInstance().defaultProviderRegistry.attach(this,l.Transient)};p.prototype.handleFilterValueUpdate=function(t){if((this.isContainerOpening()||this.isContainerOpen())&&this._bContentBound){Promise.resolve(this.applyFilters()).finally(function(){e.prototype.handleFilterValueUpdate.apply(this,arguments)}.bind(this))}};p.prototype.applyFilters=function(){};p.prototype._prettyPrintFilters=function(t){let e;if(!t){return""}if(Array.isArray(t)){e="";t.forEach(function(t,i,n){e+=this._prettyPrintFilters(t);if(n.length-1!=i){e+=" or "}},this);return"("+e+")"}else if(t._bMultiFilter){e="";const i=t.bAnd;t.aFilters.forEach(function(t,n,r){e+=this._prettyPrintFilters(t);if(r.length-1!=n){e+=i?" and ":" or "}},this);return"("+e+")"}else{e=t.sPath+" "+t.sOperator+" '"+t.oValue1+"'";if(t.sOperator==="BT"){e+="...'"+t.oValue2+"'"}return e}};p.prototype.getItemFromContext=function(t,e){const i=e&&e.keyPath||this.getKeyPath();const n=e&&e.descriptionPath||this.getDescriptionPath();let r;let o;if(!i){throw new Error("KeyPath missing")}if(t){r=i?t.getProperty(i):undefined;o=n?t.getProperty(n):undefined}if(r===null||r===undefined){return false}const l=this.createConditionPayload([r,o],t);return{key:r,description:o,payload:l}};p.prototype.createConditionPayload=function(t,e){let i;const n=this.getValueHelpDelegate();if(n){const r=this.getValueHelpInstance();i={};i=n.createConditionPayload(r,this,t,e)}return i};p.prototype._isContextSelected=function(t,e){return!!t&&!!this._findConditionsForContext(t,e).length};p.prototype._findConditionsForContext=function(t,e){const i=this.isValueHelpDelegateInitialized()&&this.getValueHelpDelegate();if(t&&i){if(i.isFilterableListItemSelected){h.warning("MDC.ValueHelp","Delegate method 'isFilterableListItemSelected' is deprecated, please implement 'findConditionsForContext' instead.");const n=i.isFilterableListItemSelected(this.getValueHelpInstance(),this,{getBindingContext:function(){return t}},e);if(n){const i=this.getItemFromContext(t);const n=i&&this.createCondition(i.key,i.description,i.payload);return e.filter(function(t){return u.compareConditions(t,n)})}return[]}return i.findConditionsForContext(this.getValueHelpInstance(),this,t,e)}return[]};p.prototype._createDefaultFilterBar=function(){return t(["sap/ui/mdc/filterbar/vh/FilterBar"]).then(function(t){if(this.isDestroyStarted()){return null}const e=t[0];const i=new e(this.getId()+"-FB",{liveMode:false,showGoButton:true});d.call(this,i);this.setAggregation("_defaultFilterBar",i,true);return i}.bind(this))};p.prototype._handleSearch=function(t){const e=t.getSource();this._setLocalFilterValue(e.getSearch());this.applyFilters()};function d(e){const i=e.getBasicSearchField();const n=this.getFilterFields();if(!i&&n){if(!this._oSearchField){return t(["sap/ui/mdc/FilterField"]).then(function(t){if(!e.isDestroyed()){const i=t[0];this._oSearchField=new i(this.getId()+"-search",{conditions:"{$filters>/conditions/"+n+"}",propertyKey:n,placeholder:"{$i18n>filterbar.SEARCH}",label:"{$i18n>filterbar.SEARCH}",maxConditions:1,width:"50%"});this._oSearchField._bCreatedByValueHelp=true;d.call(this,e)}}.bind(this))}e.setBasicSearchField(this._oSearchField)}else if(i){if(n){i.setConditions([])}else if(i._bCreatedByValueHelp){e.setBasicSearchField()}}}p.prototype.onContainerClose=function(){this._setLocalFilterValue(undefined)};p.prototype._getPriorityFilterBar=function(){return this.getFilterBar()||this.getAggregation("_defaultFilterBar")};p.prototype.observeChanges=function(t){if(t.object==this){let e;if(["_defaultFilterBar","filterBar"].indexOf(t.name)!==-1){e=t.child;let i;if(t.mutation==="insert"){d.call(this,e);this._assignCollectiveSearchSelect();if(t.name!=="_defaultFilterBar"||!this.getFilterBar()){e.attachSearch(this._handleSearch,this)}if(t.name==="filterBar"){i=this.getAggregation("_defaultFilterBar");if(i){i.detachSearch(this._handleSearch,this)}}}else{const n=e.getBasicSearchField();if(n&&n._bCreatedByValueHelp){e.setBasicSearchField()}e.detachSearch(this._handleSearch,this);if(t.name==="filterBar"){i=this.getAggregation("_defaultFilterBar");if(i){i.attachSearch(this._handleSearch,this)}else{this._createDefaultFilterBar()}}}}else if(t.name==="filterFields"){e=this._getPriorityFilterBar();if(e){d.call(this,e)}}}e.prototype.observeChanges.apply(this,arguments)};p.prototype.getCollectiveSearchKey=function(){return this._oCollectiveSearchSelect&&this._oCollectiveSearchSelect.getSelectedItemKey()};p.prototype.getListBindingInfo=function(){throw new Error("FilterableListContent: Every filterable listcontent must implement this method.")};p.prototype._getListItemBindingContext=function(t){const e=this.getListBindingInfo().model;return t&&t.getBindingContext(e)};p.prototype.getInitialFocusedControl=function(){return this._getPriorityFilterBar().getInitialFocusedControl()};p.prototype._getTypesForConditions=function(t){const e=this.getValueHelpDelegate();const i=this.getValueHelpInstance();return e?e.getTypesForConditions(i,this,t):{}};p.prototype.getFormattedTitle=function(t){let i=e.prototype.getFormattedTitle.apply(this,arguments);if(!i){i=this._oResourceBundle.getText(t?"valuehelp.SELECTFROMLIST":"valuehelp.SELECTFROMLISTNONUMBER",[t])}return i};p.prototype.getFormattedShortTitle=function(){let t=this.getShortTitle();if(!t){t=this._oResourceBundle.getText("valuehelp.SELECTFROMLIST.Shorttitle")}return t};p.prototype.getFormattedTokenizerTitle=function(t){let e=this.getTokenizerTitle();if(!e){e=this._oResourceBundle.getText("valuehelp.SELECTFROMLIST.TokenizerTitle"+(t===0?"NoCount":""),[t])}return e};p.prototype.isSearchSupported=function(){const t=this.getFilterFields();let e=!!t;if(t==="$search"){const t=this.getListBinding();const i=this.getValueHelpDelegate();const n=this.getValueHelpInstance();e=i&&i.isSearchSupported(n,this,t)}return e};p.prototype.setCollectiveSearchSelect=function(t){this._oCollectiveSearchSelect=t;this._assignCollectiveSearchSelect()};p.prototype._assignCollectiveSearchSelect=function(){const t=this._getPriorityFilterBar();if(t.setCollectiveSearch){t.setCollectiveSearch(this._oCollectiveSearchSelect)}};p.prototype.onBeforeShow=function(t){if(t){const e=this.getValueHelpDelegate();return Promise.resolve(e&&e.getFilterConditions(this.getValueHelpInstance(),this)).then(function(e){this._oInitialFilterConditions=e;const i=this._getPriorityFilterBar();if(i){const e=this.getFilterFields();const n=a({},this._oInitialFilterConditions);return Promise.resolve(!n[e]&&c.retrieveExternalState(i).then(function(r){if(t){f(n,e,this._getPriorityFilterValue());return c.diffState(i,r,{filter:n})}}.bind(this))).then(function(t){return c.applyExternalState(i,t)})}}.bind(this))}return undefined};p.prototype._fireSelect=function(t){const e=this.getValueHelpDelegate();const i=this.getValueHelpInstance();const n=e&&e.modifySelectionBehaviour?e.modifySelectionBehaviour(i,this,t):t;if(n){this.fireSelect(n)}};p.prototype.exit=function(){s.getInstance().defaultProviderRegistry.detach(this);o.cleanup(this,["_oCollectiveSearchSelect","_oInitialFilterConditions"]);if(this._oSearchField&&!this._oSearchField.getParent()){this._oSearchField.destroy();delete this._oSearchField}e.prototype.exit.apply(this,arguments)};p.prototype.getCount=function(t,i){const n=this.isValueHelpDelegateInitialized()&&this.getValueHelpDelegate();const r=n&&this.getValueHelpInstance();return n&&n.getCount?n.getCount(r,this,t,i):e.prototype.getCount.apply(this,arguments)};p.prototype._getLocalFilterValue=function(){const t=this.getParent();return t&&t.getLocalFilterValue()};p.prototype._setLocalFilterValue=function(t){const e=this.getParent();return e&&e.setLocalFilterValue(t)};p.prototype._getPriorityFilterValue=function(){const t=this._getLocalFilterValue();if(typeof t!=="undefined"){return t}return this.getFilterValue()};p.prototype.getSelectableConditions=function(){return this.getConditions().filter(function(t){return t.validated===n.Validated})};function f(t,e,o){t[e]=o?[i.createCondition(r.Contains,[o],undefined,undefined,n.NotValidated)]:[];return}return p});
//# sourceMappingURL=FilterableListContent.js.map