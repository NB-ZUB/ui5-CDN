/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer","sap/f/cards/loading/GenericPlaceholder","sap/m/MessageStrip","sap/m/VBox","sap/m/library","sap/m/IllustratedMessageType","sap/m/IllustratedMessageSize","sap/ui/core/Core","sap/ui/core/Control","sap/ui/core/InvisibleMessage","sap/ui/core/library","sap/ui/integration/controls/BlockingMessage","sap/ui/integration/model/ObservableModel","sap/ui/base/ManagedObjectObserver","sap/ui/integration/util/LoadingProvider","sap/ui/integration/util/BindingHelper","sap/ui/integration/util/BindingResolver","sap/base/util/merge","sap/ui/integration/library"],function(t,e,i,n,a,o,r,s,d,g,h,p,c,l,u,f,y,v,_){"use strict";var C=h.InvisibleMessageMode;var m=_.CardDesign;var P=_.CardBlockingMessageType;var D=_.CardPreviewMode;var b=d.extend("sap.ui.integration.cards.BaseContent",{metadata:{library:"sap.ui.integration",properties:{design:{type:"sap.ui.integration.CardDesign",group:"Appearance",defaultValue:m.Solid},configuration:{type:"object"},noDataConfiguration:{type:"object"}},aggregations:{_content:{multiple:false,visibility:"hidden"},_loadingProvider:{type:"sap.ui.core.Element",multiple:false,visibility:"hidden"},_loadingPlaceholder:{type:"sap.ui.core.Element",multiple:false,visibility:"hidden"},_messageContainer:{type:"sap.m.VBox",multiple:false,visibility:"hidden"},_blockingMessage:{type:"sap.ui.integration.controls.BlockingMessage",multiple:false,visibility:"hidden"}},associations:{card:{type:"sap.ui.integration.widgets.Card",multiple:false}},events:{press:{},ready:{}}},renderer:t});b.prototype.init=function(){this._oAwaitedEvents=new Set;this._bReady=false;this._mObservers={};this.setAggregation("_loadingProvider",new u);this.awaitEvent("_dataReady");this.awaitEvent("_actionContentReady")};b.prototype.onBeforeRendering=function(){var t=this.getConfiguration(),e=this.getCardInstance(),i=this.getAggregation("_loadingPlaceholder");if(!i&&t){this.setAggregation("_loadingPlaceholder",this.createLoadingPlaceholder(t));i=this.getAggregation("_loadingPlaceholder")}if(i&&e){i.setRenderTooltip(e.getPreviewMode()!==D.Abstract);if(typeof this._getTable==="function"){i.setHasContent(this._getTable().getColumns().length>0)}}};b.prototype.ontap=function(t){if(!t.isMarked()){this.firePress({})}};b.prototype.exit=function(){this.hideLoadingPlaceholders();this._oAwaitedEvents=null;if(this._mObservers){Object.keys(this._mObservers).forEach(function(t){this._mObservers[t].disconnect();delete this._mObservers[t]},this)}this._oServiceManager=null;this._oDataProviderFactory=null;this._oIconFormatter=null;if(this._oDataProvider){this._oDataProvider.destroy();this._oDataProvider=null}if(this._oActions){this._oActions.destroy();this._oActions=null}this._sContentBindingPath=null};b.prototype.createLoadingPlaceholder=function(t){return new e};b.prototype.loadDependencies=function(t){return Promise.resolve()};b.prototype.applyConfiguration=function(){};b.prototype.setLoadDependenciesPromise=function(t){this._pLoadDependencies=t;this.awaitEvent("_loadDependencies");this._pLoadDependencies.then(function(){this.fireEvent("_loadDependencies")}.bind(this))};b.prototype.getLoadDependenciesPromise=function(){return this._pLoadDependencies};b.prototype.getActions=function(){return this._oActions};b.prototype.setActions=function(t){this._oActions=t};b.prototype.awaitEvent=function(t){if(this._oAwaitedEvents.has(t)){return}this._bReady=false;this._oAwaitedEvents.add(t);this.showLoadingPlaceholders(true);this.attachEventOnce(t,function(){this._oAwaitedEvents.delete(t);if(this._oAwaitedEvents.size===0){this._bReady=true;this.hideLoadingPlaceholders();this.fireReady()}}.bind(this))};b.prototype._forceCompleteAwaitedEvents=function(){this._oAwaitedEvents.forEach(function(t){this.fireEvent(t)}.bind(this))};b.prototype.getParsedConfiguration=function(){var t=v({},this.getConfiguration()),e=t.data;delete t.data;t=f.createBindingInfos(t,this.getCardInstance().getBindingNamespaces());if(e){t.data=e}return t};b.prototype.getStaticConfiguration=function(){return this.getConfiguration()};b.prototype.showMessage=function(t,e){var n=this._getMessageContainer();var a=new i({text:f.createBindingInfos(t,this.getCardInstance().getBindingNamespaces()),type:e,showCloseButton:true,showIcon:true,close:function(){this._getMessageContainer().destroy()}.bind(this)}).addStyleClass("sapFCardContentMessage");var o=this.getDomRef();n.destroyItems();n.addItem(a);if(o&&o.contains(document.activeElement)){g.getInstance().announce(t,C.Assertive)}else{g.getInstance().announce(t,C.Polite)}};b.prototype.hideMessage=function(){var t=this._getMessageContainer();t.destroyItems()};b.prototype.showBlockingMessage=function(t){this.destroyAggregation("_blockingMessage");this.setAggregation("_blockingMessage",p.create(t,this.getCardInstance()));this._forceCompleteAwaitedEvents()};b.prototype.hideBlockingMessage=function(){this.destroyAggregation("_blockingMessage")};b.prototype.getBlockingMessage=function(){var t=this.getAggregation("_blockingMessage");if(t){return{type:t.getType(),illustrationType:t.getIllustrationType(),illustrationSize:t.getIllustrationSize(),title:t.getTitle(),description:t.getDescription(),httpResponse:t.getHttpResponse()}}return null};b.prototype.showNoDataMessage=function(t){var e=this.getNoDataConfiguration()||{};e=y.resolveValue(e,this.getCardInstance());var i={type:P.NoData,illustrationType:o[e.type]||e.type||t.illustrationType,illustrationSize:r[e.size]||t.illustrationSize,title:e.title||t.title,description:e.description||t.description};this.showBlockingMessage(i)};b.prototype.hideNoDataMessage=function(){this.hideBlockingMessage()};b.prototype.setDataConfiguration=function(t){var e=this.getCardInstance(),i;if(!t){this._sContentBindingPath=null;this.fireEvent("_dataReady");return}this._sContentBindingPath=y.resolveValue(t.path||"/",this.getCardInstance());this.bindObject(this._sContentBindingPath);if(this._oDataProvider){this._oDataProvider.destroy()}this._oDataProvider=this._oDataProviderFactory.create(t,this._oServiceManager);if(t.name){i=e.getModel(t.name)}else if(this._oDataProvider){i=new c;i.setSizeLimit(e.getModelSizeLimit());this.setModel(i)}if(!i){this.fireEvent("_dataReady");return}i.attachEvent("change",function(){this.getLoadDependenciesPromise().then(function(t){if(t&&!this.isDestroyed()){this.onDataChanged();this.onDataRequestComplete()}}.bind(this))}.bind(this));if(this._oDataProvider){this._oDataProvider.attachDataRequested(function(){this.onDataRequested()}.bind(this));this._oDataProvider.attachDataChanged(function(t){var e=t.getParameter("data");this.getLoadDependenciesPromise().then(function(t){if(t&&!this.isDestroyed()){i.setData(e)}}.bind(this))}.bind(this));this._oDataProvider.attachError(function(t){this.handleError({requestErrorParams:t.getParameters(),requestSettings:this._oDataProvider.getSettings()});this.onDataRequestComplete()}.bind(this));this._oDataProvider.triggerDataUpdate()}else{this.fireEvent("_dataReady")}};b.prototype.onDataRequested=function(){this.awaitEvent("_dataReady")};b.prototype.onDataRequestComplete=function(){var t=this.getCardInstance();this.fireEvent("_dataReady");if(t){t._fireContentDataChange()}};b.prototype.refreshData=function(){if(this._oDataProvider){this._oDataProvider.triggerDataUpdate()}};b.prototype.showLoadingPlaceholders=function(t){if(!t&&this._isDataProviderJson()){return}var e=this.getAggregation("_loadingProvider"),i=this.getCardInstance();e.setLoading(true);if(i){i.addActiveLoadingProvider(e)}};b.prototype.hideLoadingPlaceholders=function(){var t=this.getAggregation("_loadingProvider"),e=this.getCardInstance();if(!t.getLoading()){return}t.setLoading(false);if(e){e.removeActiveLoadingProvider(t)}};b.prototype.onDataChanged=function(){};b.prototype.onCardDataChanged=function(){this.getLoadDependenciesPromise().then(function(t){if(t&&!this.isDestroyed()){this.onDataChanged()}}.bind(this))};b.prototype._bindAggregationToControl=function(t,e,i){var n;if(!i){return}if(!i.path){i.path=this._sContentBindingPath}if(!i.path){n=this.getCardInstance().getBindingContext();i.path=n&&n.getPath()}if(!i.path){return}this._observeAggregation(t,e);e.bindAggregation(t,i)};b.prototype._observeAggregation=function(t,e){var i=this.getCardInstance().getModel("parameters"),n;if(this._mObservers[t]){return}n=new l(function(n){var a;if(n.name!==t){return}if(!(n.mutation==="insert"||n.mutation==="remove")){return}a=e.getMetadata().getAggregation(t).get(e);var o=a.length;a.forEach(function(t){if(t.isA("sap.m.GroupHeaderListItem")){o-=1}});i.setProperty("/visibleItems",o)});i.setProperty("/visibleItems",0);n.observe(e,{aggregations:[t]});this._mObservers[t]=n};b.prototype.isReady=function(){return this._bReady};b.prototype.handleError=function(t){this.fireEvent("_error",{errorInfo:t})};b.prototype.setServiceManager=function(t){this._oServiceManager=t;return this};b.prototype.setDataProviderFactory=function(t){this._oDataProviderFactory=t;return this};b.prototype.setIconFormatter=function(t){this._oIconFormatter=t;return this};b.prototype.isLoading=function(){if(!this.isReady()){return true}if(this._oDataProvider){return this.getAggregation("_loadingProvider").getLoading()}var t=this.getCardInstance();return t&&t.isLoading()};b.prototype.attachPress=function(){var t=Array.prototype.slice.apply(arguments);t.unshift("press");d.prototype.attachEvent.apply(this,t);this.invalidate();return this};b.prototype.detachPress=function(){var t=Array.prototype.slice.apply(arguments);t.unshift("press");d.prototype.detachEvent.apply(this,t);this.invalidate();return this};b.prototype.onActionSubmitStart=function(t){};b.prototype.onActionSubmitEnd=function(t,e){};b.prototype.validateControls=function(t,e){};b.prototype.getCardInstance=function(){return s.byId(this.getCard())};b.prototype.isSkeleton=function(){var t=this.getCardInstance();return t&&t.isSkeleton()};b.prototype.sliceData=function(t,e){};b.prototype.getDataLength=function(){return 0};b.prototype._getMessageContainer=function(){var t=this.getAggregation("_messageContainer");if(!t){t=new n({renderType:a.FlexRendertype.Bare,alignItems:a.FlexAlignItems.Center}).addStyleClass("sapFCardContentMessageContainer");this.setAggregation("_messageContainer",t)}return t};b.prototype._isDataProviderJson=function(){return this._oDataProvider&&this._oDataProvider.getSettings()&&this._oDataProvider.getSettings()["json"]};b.prototype.getHeaderTitleId=function(){var t=this.getCardInstance();if(!t){return undefined}return t.getId()+"-header-title-inner"};b.prototype.isInteractive=function(){return this.hasListeners("press")};return b});
//# sourceMappingURL=BaseContent.js.map