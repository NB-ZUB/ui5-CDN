/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/Element","sap/ui/core/Fragment","sap/ui/core/Lib","sap/base/util/isEmptyObject","sap/base/util/restricted/_difference","sap/base/util/deepEqual","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Control","sap/ui/dt/OverlayRegistry","sap/ui/dt/ElementUtil","sap/ui/fl/write/api/PersistenceWriteAPI","sap/ui/fl/Layer","sap/ui/fl/Utils","sap/ui/model/resource/ResourceModel","sap/ui/model/json/JSONModel","sap/ui/rta/util/changeVisualization/ChangeIndicator","sap/ui/rta/util/changeVisualization/ChangeIndicatorRegistry","sap/ui/rta/util/changeVisualization/ChangeCategories","sap/ui/rta/util/changeVisualization/ChangeStates"],function(e,t,i,n,a,o,s,r,g,l,h,u,c,d,p,C,f,y,v,_){"use strict";function I(){var e=this.getPopover();if(e&&e.isOpen()){e.close()}}function m(e){return!e||!e.getDomRef()||!e.isVisible()}function V(e,t){var i=l.getOverlay(e);if(!i){var n=l.getOverlay(t);var a=n&&n.getRelevantContainer();if(a){i=l.getOverlay(a)}}return i}var M=g.extend("sap.ui.rta.util.changeVisualization.ChangeVisualization",{metadata:{library:"sap.ui.rta",properties:{rootControlId:{type:"string"},isActive:{type:"boolean",defaultValue:false}},aggregations:{popover:{type:"sap.m.Popover",multiple:false}}},constructor:function(...e){this._oChangeIndicatorRegistry=new y({changeCategories:v.getCategories()});g.prototype.constructor.apply(this,e);this._oTextBundle=n.getResourceBundleFor("sap.ui.rta");this.setModel(new p({bundle:this._oTextBundle}),"i18n");this._oChangeVisualizationModel=new C({active:this.getIsActive(),changeState:_.ALL});this._oChangeVisualizationModel.setDefaultBindingMode("TwoWay");this._sSelectedChangeCategory=v.ALL;this._bSetModeChanged=false;this._fnOnClickHandler=I.bind(this)}});M.prototype.setVersionsModel=function(e){this.oVersionsModel=e.getModel("versions")};M.prototype.setRootControlId=function(e){if(this.getRootControlId()&&this.getRootControlId()!==e){this._reset()}this.setProperty("rootControlId",e);this._oChangeIndicatorRegistry.setRootControlId(e)};M.prototype._getComponent=function(){return d.getAppComponentForControl(h.getElementInstance(this.getRootControlId()))};M.prototype.setIsActive=function(e){if(e===this.getIsActive()){return}this.setProperty("isActive",e);if(this._oChangeVisualizationModel){this._updateVisualizationModel({active:e})}};M.prototype.exit=function(){this._oChangeIndicatorRegistry.destroy();this._toggleRootOverlayClickHandler(false)};M.prototype.updateAfterSave=function(e){if(this.getProperty("rootControlId")){this._oChangeIndicatorRegistry.reset();this._updateChangeRegistry().then(function(){this._selectChangeCategory(this._sSelectedChangeCategory);this._selectChangeState(_.ALL);this._updateVisualizationModelMenuData();e.setModel(this._oChangeVisualizationModel,"visualizationModel")}.bind(this))}};M.prototype._reset=function(){this._oChangeIndicatorRegistry.reset()};M.prototype._determineChangeVisibility=function(e,t,i){function n(e){return e.filter(function(e){if(!i||i===_.ALL||e.changeStates.includes(i)){return true}return false})}var a=[];var o=[];var s=false;var r=false;var g=t.map(function(e){return e.id});e.forEach(function(e){if(e.changeStates.includes(_.DIRTY)){s=true;r=true}else if(e.changeStates.includes(_.DRAFT)){s=true}var t=V(e.visualizationInfo.displayElementIds[0],e.visualizationInfo.affectedElementIds[0]);if(!g.includes(e.change.getId())){a.push(e)}else if(m(t)){a.push(e)}else{o.push(e)}});var l=n(a);var h=n(o);return{relevantHiddenChanges:l,relevantVisualizedChanges:h,hasDirtyChanges:r,hasDraftChanges:s}};M.prototype._updateVisualizationModelMenuData=function(){var e=this._oChangeVisualizationModel.getData().changeState;var t=this._oChangeIndicatorRegistry.getAllRegisteredChanges();var i=this._oChangeIndicatorRegistry.getRelevantChangesWithSelector();var n=t.filter(function(e){if(!e.dependent){return true}return false});var a=this._determineChangeVisibility(n,i,e);var o=Object.keys(v.getCategories()).map(function(e){var t=this._getChangeCategoryLabel(e,this._getChangesForChangeCategory(e,a.relevantVisualizedChanges).length);return{key:e,count:this._getChangesForChangeCategory(e,a.relevantVisualizedChanges).length,title:t,icon:v.getIconForCategory(e)}}.bind(this));o.unshift({key:v.ALL,count:this._getChangesForChangeCategory(v.ALL,a.relevantVisualizedChanges).length,title:this._getChangeCategoryLabel(v.ALL,this._getChangesForChangeCategory(v.ALL,a.relevantVisualizedChanges).length),icon:v.getIconForCategory(v.ALL)});this._updateVisualizationModel({changeCategories:o,hasDraftChanges:a.hasDraftChanges,hasDirtyChanges:a.hasDirtyChanges,popupInfoMessage:this._oTextBundle.getText("MSG_CHANGEVISUALIZATION_HIDDEN_CHANGES_INFO",[a.relevantHiddenChanges.length]),sortedChanges:a})};M.prototype._getChangesForChangeCategory=function(e,t){return t.filter(function(t){return e===v.ALL?t.changeCategory!==undefined:e===t.changeCategory})};M.prototype._getChangeCategoryLabel=function(e,t){var i=`TXT_CHANGEVISUALIZATION_OVERVIEW_${e.toUpperCase()}`;return this._oTextBundle.getText(i,[t])};M.prototype._getChangeCategoryButton=function(e){var t=`BTN_CHANGEVISUALIZATION_OVERVIEW_${e.toUpperCase()}`;return this._oTextBundle.getText(t)};M.prototype.openChangeCategorySelectionPopover=function(e){this._oToolbarButton||=t.getElementById(e.getParameter("id"));var n=this.getPopover();if(!n){i.load({name:"sap.ui.rta.util.changeVisualization.ChangeIndicatorCategorySelection",id:this._getComponent().createId("changeVisualization_changesList"),controller:this}).then(function(e){this._oToolbarButton.addDependent(e);e.setModel(this._oChangeVisualizationModel,"visualizationModel");e.openBy(this._oToolbarButton);this.setPopover(e);e.close();e.openBy(this._oToolbarButton)}.bind(this));return}if(n.isOpen()){n.close()}else{n.openBy(this._oToolbarButton)}};M.prototype.onChangeCategorySelection=function(e){var t=e.getSource().getBindingContext("visualizationModel").getObject().key;this._selectChangeCategory(t)};M.prototype.onVersioningCategoryChange=function(e){var t=e.getSource().getSelectedKey();this._selectChangeState(t)};M.prototype._selectChangeCategory=function(e){this._sSelectedChangeCategory=e;var t=this._getChangeCategoryButton(e);this._updateVisualizationModel({changeCategory:e,changeCategoryText:t});this._updateChangeIndicators();this._setFocusedIndicator()};M.prototype._selectChangeState=function(e){this._sSelectedChangeState=e;this._updateVisualizationModel({changeState:e});this._updateChangeIndicators();this._updateVisualizationModelMenuData()};M.prototype._getCommandForChange=function(e){var t=e.getSupportInformation().command;if(t){return t}if(!e.getSelector||!e.getSelector()||a(e.getSelector())){return false}var i=this._getComponent();var n=r.bySelector(e.getSelector(),i);var o=e.getDependentSelectorList().slice(-1)[0];var s=r.bySelector(o,i);function g(t,i){var a=t.getElement();var o=t.getDesignTimeMetadata().getCommandName(e.getChangeType(),a,i);if(o){return o}var s=t.getParentElementOverlay();var r=t.getParentAggregationOverlay();if(t.getElement().getId()===n.getId()||!s){return undefined}return g(s,r&&r.getAggregationName())}return n&&s&&g(l.getOverlay(s))};M.prototype._collectChanges=function(){var e=this._getComponent();var t={selector:e,invalidateCache:false,includeCtrlVariants:true,currentLayer:c.CUSTOMER,includeDirtyChanges:true,onlyCurrentVariants:true};return u._getUIChanges(t)};M.prototype._updateChangeRegistry=function(){return this._collectChanges().then(function(e){this._oChangeIndicatorRegistry.removeOutdatedRegisteredChanges();this._oChangeIndicatorRegistry.removeRegisteredChangesWithoutVizInfo();if(this._oChangeVisualizationModel.getData().displayedVersion!=="0"){this._oChangeIndicatorRegistry.reset()}var t=this._oChangeIndicatorRegistry.getRegisteredChangeIds();var i=e.reduce(function(e,t){e[t.getId()]=t;return e},{});var n=Object.keys(i);o(t,n).forEach(function(e){this._oChangeIndicatorRegistry.removeRegisteredChange(e)}.bind(this));var a=[];o(n,t).forEach(function(e){var t=i[e];var n=this._getCommandForChange(t);a.push(this._oChangeIndicatorRegistry.registerChange(t,n,this.oVersionsModel))}.bind(this));return Promise.all(a)}.bind(this))};M.prototype.selectChange=function(e){var t=e.getParameter("changeId");this._selectChange(t)};M.prototype._selectChange=function(e){var t=this._oChangeIndicatorRegistry.getRegisteredChange(e).visualizationInfo.dependentElementIds;t.forEach(function(e){var t=l.getOverlay(e).getDomRef();t.scrollIntoView({block:"nearest"});t.classList.add("sapUiRtaChangeIndicatorDependent");t.addEventListener("animationend",function(){t.classList.remove("sapUiRtaChangeIndicatorDependent")},{once:true})})};M.prototype._updateVisualizationModel=function(e){this._oChangeVisualizationModel.setData(Object.assign({},this._oChangeVisualizationModel.getData(),e))};M.prototype._updateChangeIndicators=function(){var e=this._oChangeIndicatorRegistry.getSelectorsWithRegisteredChanges();var t={};this._mDisplayElementsKeyMap={};Object.keys(e).forEach(function(i){var n=e[i];var a=this._filterRelevantChanges(e[i]);var o=V(i,n[0].affectedElementId);if(m(o)){return undefined}var s=o.getDomRef().getClientRects()[0]||{left:0,top:0};t[i]={posX:parseInt(s.left),posY:parseInt(s.top),changes:a};var r=this._oChangeIndicatorRegistry.getChangeIndicator(i);var g=o.getId();if(!r){this._createChangeIndicator(o,i);var l=n[0].displayElementsKey;if(!this._mDisplayElementsKeyMap[l]){this._mDisplayElementsKeyMap[l]=[i]}else{this._mDisplayElementsKeyMap[l].push(i)}}else if(r.getOverlayId()!==g){r.setOverlayId(g)}return undefined}.bind(this));this._registerIndicatorBrowserEvents();if(!s(t,this._oChangeVisualizationModel.getData().content)){this._updateVisualizationModel({content:t})}};M.prototype._registerIndicatorBrowserEvents=function(){Object.keys(this._mDisplayElementsKeyMap).forEach(function(e){var i=this._mDisplayElementsKeyMap[e].map(function(e){return this._oChangeIndicatorRegistry.getChangeIndicator(e)}.bind(this));function n(e,t){i.forEach(function(i){if(i.getVisible()){i.onIndicatorBrowserInteraction(e,t)}})}function a(e){i.forEach(function(t){if(t.getVisible()){t.onDetailPopoverOpened(e)}})}i.forEach(function(e){e.attachBrowserEvent("mouseover",n.bind(this,true));e.attachBrowserEvent("focusin",n.bind(this,true));e.attachBrowserEvent("mouseout",n.bind(this,false));e.attachBrowserEvent("focusout",n.bind(this,false));e.attachDetailPopoverOpened(a.bind(this));var i=t.getElementById(e.getOverlayId());i.attachBrowserEvent("mouseout",n.bind(this,false));i.attachBrowserEvent("focusout",n.bind(this,false))})}.bind(this))};M.prototype._filterRelevantChanges=function(e){if(!Array.isArray(e)){return e}var t=this._oChangeVisualizationModel.getData();return e.filter(function(e){return!e.dependent&&e.changeCategory&&(t.changeCategory===v.ALL||t.changeCategory===e.changeCategory)&&(!t.changeState||t.changeState===_.ALL||e.changeStates.includes(t.changeState))})};M.prototype._createChangeIndicator=function(e,t){var i=new f({changes:"{changes}",posX:"{posX}",posY:"{posY}",visible:"{= ${/active} && (${changes} || []).length > 0}",overlayId:e.getId(),selectorId:t,selectChange:this.selectChange.bind(this)});i.setModel(this._oChangeVisualizationModel);i.bindElement(`/content/${t}`);i.setModel(this.getModel("i18n"),"i18n");this._oChangeIndicatorRegistry.registerChangeIndicator(t,i)};M.prototype._setFocusedIndicator=function(){e.applyChanges();var t=this._oChangeIndicatorRegistry.getChangeIndicators().filter(function(e){return e.getVisible()}).sort(function(e,t){var i=e.getPosY()-t.getPosY();var n=e.getPosX()-t.getPosX();return i||n});if(t.length===0){return}var i=[];t.forEach(function(e,t){e.getDomRef().tabIndex=t+2;if(e.getPosY()>0){i.push(e)}});if(i.length>0){i[0].focus()}else{t[0].focus()}};M.prototype._toggleRootOverlayClickHandler=function(e){var t=this.oRootOverlay&&this.oRootOverlay.getDomRef();if(t){if(e){t.addEventListener("click",this._fnOnClickHandler,{capture:true})}else{t.removeEventListener("click",this._fnOnClickHandler,{capture:true})}}};M.prototype.triggerModeChange=function(e,t){this.oMenuButton=t.getControl("toggleChangeVisualizationMenuButton");this.oRootOverlay=l.getOverlay(e);this.setVersionsModel(t);if(this.oVersionsModel&&this.oVersionsModel.getData().versioningEnabled){this._updateVisualizationModel({versioningAvailable:this.oVersionsModel.getData().versioningEnabled,displayedVersion:this.oVersionsModel.getData().displayedVersion})}else{this._updateVisualizationModel({versioningAvailable:false,displayedVersion:"0"})}if(this.getIsActive()){this.setIsActive(false);this._toggleRootOverlayClickHandler(false);return}this._toggleRootOverlayClickHandler(true);if(!this.getRootControlId()){this.setRootControlId(e)}this.setIsActive(true);this._updateChangeRegistry().then(function(){this._selectChangeCategory(this._sSelectedChangeCategory);t.adjustToolbarSectionWidths();this._updateVisualizationModelMenuData();t.setModel(this._oChangeVisualizationModel,"visualizationModel")}.bind(this))};return M});
//# sourceMappingURL=ChangeVisualization.js.map