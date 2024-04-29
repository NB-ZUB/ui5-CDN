/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/mdc/filterbar/FilterBarBase","sap/ui/mdc/filterbar/FilterBarBaseRenderer","sap/ui/mdc/filterbar/aligned/FilterItemLayout","sap/ui/mdc/filterbar/vh/FilterContainer","sap/m/Button","sap/m/p13n/enum/PersistenceMode"],function(t,e,i,r,o,s,l){"use strict";const a=e.extend("sap.ui.mdc.filterbar.vh.FilterBar",{metadata:{library:"sap.ui.mdc",properties:{delegate:{type:"object",defaultValue:{name:"sap/ui/mdc/filterbar/vh/FilterBarDelegate",payload:{modelName:undefined,collectionName:""}}},expandFilterFields:{type:"boolean",defaultValue:true},filterFieldThreshold:{type:"int",defaultValue:8}},aggregations:{}},renderer:i});const h=t.ButtonType;a.prototype._createInnerLayout=function(){this._cLayoutItem=r;this._oFilterBarLayout=new o(this.getId()+"-innerLayout",{});this.setAggregation("layout",this._oFilterBarLayout,true);this._oBtnFilters=new s(this.getId()+"-btnShowFilters",{type:h.Transparent,press:this._onToggleFilters.bind(this)});this._oBtnFilters.bindProperty("text",{model:e.INNER_MODEL_NAME,path:"/expandFilterFields",formatter:function(t){return this._oRb.getText("valuehelp."+(t?"HIDE":"SHOW")+"ADVSEARCH")}.bind(this)});this._oBtnFilters.bindProperty("visible",{model:e.INNER_MODEL_NAME,path:"/filterItems",formatter:function(t){return t.length>0}});this._oFilterBarLayout.addControl(this._getSearchButton().bindProperty("visible",{parts:[{path:"/showGoButton",model:e.INNER_MODEL_NAME},{path:"/liveMode",model:e.INNER_MODEL_NAME}],formatter:function(t,e){return t&&(this._isPhone()?true:!e)}.bind(this)}));this._oFilterBarLayout.addControl(this._oBtnFilters);this._oShowAllFiltersBtn=new s(this.getId()+"-btnShowAllFilters",{type:h.Transparent,press:this._onShowAllFilters.bind(this),text:this._oRb.getText("valuehelp.SHOWALLFILTERS"),visible:false});this._oFilterBarLayout.addEndContent(this._oShowAllFiltersBtn)};a.prototype.init=function(){e.prototype.init.apply(this,arguments);this.getEngine().defaultProviderRegistry.attach(this,l.Transient)};a.prototype.exit=function(){this.getEngine().defaultProviderRegistry.detach(this);if(this._oCollectiveSearch){this._oFilterBarLayout.removeControl(this._oCollectiveSearch);this._oCollectiveSearch=null}e.prototype.exit.apply(this,arguments);this._oBasicSearchField=null;this._oBtnFilters=null;this._oShowAllFiltersBtn=null};a.prototype._onToggleFilters=function(t){this.setExpandFilterFields(!this.getExpandFilterFields())};a.prototype._onShowAllFilters=function(t){this._oFilterBarLayout._updateFilterBarLayout(true)};a.prototype.setCollectiveSearch=function(t){if(this._oCollectiveSearch){if(this._oFilterBarLayout){this._oFilterBarLayout.removeControl(this._oCollectiveSearch)}}this._oCollectiveSearch=t;if(this._oFilterBarLayout&&this._oCollectiveSearch){this._oFilterBarLayout.insertControl(this._oCollectiveSearch,0)}return this};a.prototype.getCollectiveSearch=function(){return this._oCollectiveSearch};a.prototype.destroyCollectiveSearch=function(){if(this._oCollectiveSearch&&this._oFilterBarLayout){this._oFilterBarLayout.removeControl(this._oCollectiveSearch);this._oCollectiveSearch.destroy();this._oCollectiveSearch=undefined}return this};a.prototype.setBasicSearchField=function(t){if(this._oBasicSearchField){if(this._oFilterBarLayout){this._oFilterBarLayout.removeControl(this._oBasicSearchField)}this._oBasicSearchField.detachSubmit(this._handleFilterItemSubmit,this)}this._oBasicSearchField=t;if(t){if(this.isPropertyInitial("expandFilterFields")){this.setExpandFilterFields(false)}if(this._oFilterBarLayout){this._oFilterBarLayout.insertControl(t,this._oCollectiveSearch?1:0)}t.attachSubmit(this._handleFilterItemSubmit,this);if(!this._oObserver.isObserved(t,{properties:["visible"]})){this._oObserver.observe(t,{properties:["visible"]})}}return this};a.prototype.getBasicSearchField=function(){return this._oBasicSearchField};a.prototype.destroyBasicSearchField=function(){if(this._oBasicSearchField&&this._oFilterBarLayout){this._oFilterBarLayout.removeControl(this._oBasicSearchField);this._oBasicSearchField.detachSubmit(this._handleFilterItemSubmit,this);if(this._oObserver.isObserved(this._oBasicSearchField,{properties:["visible"]})){this._oObserver.unobserve(this._oBasicSearchField)}this._oBasicSearchField.destroy();this._oBasicSearchField=undefined}return this};a.prototype.getInitialFocusedControl=function(){let t=this.getBasicSearchField();if(!t&&this.getShowGoButton()){t=this._btnSearch}return t};return a});
//# sourceMappingURL=FilterBar.js.map