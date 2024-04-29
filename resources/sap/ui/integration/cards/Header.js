/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/model/json/JSONModel","sap/base/util/merge","sap/f/cards/Header","sap/f/cards/HeaderRenderer","sap/m/library","sap/m/Text","sap/ui/integration/util/BindingHelper","sap/ui/integration/util/BindingResolver","sap/ui/integration/util/LoadingProvider","sap/ui/integration/util/Utils","sap/ui/integration/formatters/IconFormatter"],function(t,i,e,a,r,o,n,s,d,c,h,u){"use strict";var l=o.AvatarColor;var g=a.extend("sap.ui.integration.cards.Header",{constructor:function(t,i,e,r){i=i||{};var o={title:i.title,titleMaxLines:i.titleMaxLines,subtitle:i.subTitle,subtitleMaxLines:i.subTitleMaxLines,dataTimestamp:i.dataTimestamp,visible:i.visible};if(i.status&&i.status.text&&!i.status.text.format){o.statusText=i.status.text;o.statusVisible=i.status.visible}if(i.icon){var d=i.icon.initials||i.icon.text;var c=i.icon.backgroundColor||(d?l.Accent6:l.Transparent);o.iconSrc=i.icon.src;o.iconDisplayShape=i.icon.shape;o.iconInitials=d;o.iconAlt=i.icon.alt;o.iconBackgroundColor=c;o.iconVisible=i.icon.visible}if(o.iconSrc){o.iconSrc=s.formattedProperty(o.iconSrc,function(t){return r.formatSrc(t)})}if(i.banner){o.bannerLines=i.banner.map(function(t){var i=new n({text:t.text,visible:t.visible});if(t.diminished){i.addStyleClass("sapFCardHeaderBannerLineDiminished")}return i})}o.toolbar=e;a.call(this,t,o);this._oConfiguration=i;this._oIconFormatter=r},metadata:{library:"sap.ui.integration",properties:{interactive:{type:"boolean",defaultValue:false}},aggregations:{_loadingProvider:{type:"sap.ui.core.Element",multiple:false,visibility:"hidden"}},associations:{card:{type:"sap.ui.integration.widgets.Card",multiple:false}}},renderer:r});g.prototype.init=function(){a.prototype.init.call(this);this._bReady=false;this.setAggregation("_loadingProvider",new c);this._aReadyPromises=[];this._awaitEvent("_dataReady");this._awaitEvent("_actionHeaderReady");Promise.all(this._aReadyPromises).then(function(){this._bReady=true;this.fireEvent("_ready")}.bind(this))};g.prototype.exit=function(){a.prototype.exit.call(this);this._oServiceManager=null;this._oDataProviderFactory=null;if(this._oDataProvider){this._oDataProvider.destroy();this._oDataProvider=null}if(this._oActions){this._oActions.destroy();this._oActions=null}};g.prototype.shouldShowIcon=function(){return this.getIconVisible()&&this.getIconSrc()!==u.SRC_FOR_HIDDEN_ICON};g.prototype.isInteractive=function(){return this.getInteractive()};g.prototype.isReady=function(){return this._bReady};g.prototype.isLoading=function(){if(!this.isReady()){return true}if(this._oDataProvider){return this.getAggregation("_loadingProvider").getLoading()}var t=this.getCardInstance();return t&&t.isLoading()};g.prototype._handleError=function(t){this.fireEvent("_error",{errorInfo:t})};g.prototype._awaitEvent=function(t){this._aReadyPromises.push(new Promise(function(i){this.attachEventOnce(t,function(){i()})}.bind(this)))};g.prototype.setServiceManager=function(t){this._oServiceManager=t;return this};g.prototype.setDataProviderFactory=function(t){this._oDataProviderFactory=t;return this};g.prototype.getStaticConfiguration=function(){var t=e({},this._oConfiguration),i=h.getNestedPropertyValue(t,"/status/text/format"),a;if(i){a=h.getStatusTextBindingInfo(i)}if(a){t.status.text=a}if(t.icon&&t.icon.src){t.icon.src=this._oIconFormatter.formatSrc(d.resolveValue(t.icon.src,this))}return t};g.prototype._setDataConfiguration=function(t){var e=this.getCardInstance(),a="/",r;if(t&&t.path){a=d.resolveValue(t.path,this.getCardInstance())}this.bindObject(a);if(this._oDataProvider){this._oDataProvider.destroy()}this._oDataProvider=this._oDataProviderFactory.create(t,this._oServiceManager);if(t&&t.name){r=e.getModel(t.name)}else if(this._oDataProvider){r=new i;this.setModel(r)}if(this._oDataProvider){this._oDataProvider.attachDataRequested(function(){this.showLoadingPlaceholders()}.bind(this));this._oDataProvider.attachDataChanged(function(t){r.setData(t.getParameter("data"));this.onDataRequestComplete()}.bind(this));this._oDataProvider.attachError(function(t){this._handleError({requestErrorParams:t.getParameters(),requestSettings:this._oDataProvider.getSettings()});this.onDataRequestComplete()}.bind(this));this._oDataProvider.triggerDataUpdate()}else{this.fireEvent("_dataReady")}};g.prototype.refreshData=function(){if(this._oDataProvider){this._oDataProvider.triggerDataUpdate()}};g.prototype.showLoadingPlaceholders=function(){if(!this._isDataProviderJson()){this.getAggregation("_loadingProvider").setLoading(true)}};g.prototype.hideLoadingPlaceholders=function(){this.getAggregation("_loadingProvider").setLoading(false)};g.prototype.onDataRequestComplete=function(){var t=this.getCardInstance();if(t){t._fireDataChange()}this.fireEvent("_dataReady");this.hideLoadingPlaceholders()};g.prototype.getCardInstance=function(){return t.byId(this.getCard())};g.prototype._isDataProviderJson=function(){return this._oDataProvider&&this._oDataProvider.getSettings()&&this._oDataProvider.getSettings()["json"]};return g});
//# sourceMappingURL=Header.js.map