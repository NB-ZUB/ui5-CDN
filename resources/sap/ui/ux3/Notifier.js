/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/commons/Callout","sap/ui/core/Element","./library","sap/ui/core/library","sap/ui/Device","sap/base/Log","sap/ui/base/EventProvider","sap/ui/core/Configuration"],function(jQuery,e,t,s,i,o,a,r,n){"use strict";var l=i.MessageType;var u=t.extend("sap.ui.ux3.Notifier",{metadata:{deprecated:true,library:"sap.ui.ux3",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},title:{type:"string",group:"Misc",defaultValue:null}},aggregations:{messages:{type:"sap.ui.core.Message",multiple:true,singularName:"message"},views:{type:"sap.ui.core.Control",multiple:true,singularName:"view",visibility:"hidden"}},events:{messageSelected:{parameters:{message:{type:"sap.ui.core.Message"},notifier:{type:"sap.ui.ux3.Notifier"}}}}}});var p=function(){this.fireEvent("_childControlCalling",{type:"openCallout",callout:this._oCallout,notifier:this})};var g=function(e){if(e.getSource()){e.getSource().destroyContent()}if(this._oCallout){this._oCallout.$().css("display","none")}};u.prototype.hasItems=function(){if(this.getMessages().length>0){return true}return false};u.prototype.init=function(){this._oCallout=new e(this.getId()+"-callout",{beforeOpen:jQuery.proxy(p,this),open:function(e){this.$().css({position:"fixed",display:"block"})},close:jQuery.proxy(g,this),collision:"none"});this._oCallout.addStyleClass("sapUiNotifierCallout");if(o.browser.mobile){this._oCallout.setOpenDelay(0)}this._oCallout.setMyPosition("begin bottom");this._oCallout.setAtPosition("begin top");this._oCallout.setTip=function(){e.prototype.setTip.apply(this,arguments);var t=this.$("arrow");t.css("bottom","-24px");var s=n.getRTL();if(!s){t.css("left","6px")}};this.setTooltip(this._oCallout);this.setTooltip=function(){a.warning("Setting toolstips for notifiers deactivated");return this};this._proxyEnableMessageSelect=jQuery.proxy(h,this);this.attachEvent(r.M_EVENTS.EventHandlerChange,this._proxyEnableMessageSelect)};var h=function(e){var t=e.getParameter("EventId");if(t==="messageSelected"){if(e.getParameter("type")==="listenerAttached"){this._bEnableMessageSelect=true}else if(e.getParameter("type")==="listenerDetached"){this._bEnableMessageSelect=false}this.fireEvent("_enableMessageSelect",{enabled:this._bEnableMessageSelect,notifier:this})}};u.prototype.exit=function(e){this._oCallout=undefined;if(this._oMessageView){this._oMessageView.destroy();delete this._oMessageView}this.detachEvent(r.M_EVENTS.EventHandlerChange,this._proxyEnableMessageSelect);delete this._proxyEnableMessageSelect};u.prototype.onclick=function(e){e.preventDefault();this.$().trigger("mouseover")};var c=function(e,t,s){var i=t?t.getLevel():l.None;s.fireEvent("_childControlCalling",{type:e,notifier:s,level:i,message:t,callout:s._oCallout})};u.prototype.addMessage=function(e){this.addAggregation("messages",e);c("added",e,this);return this};u.prototype.insertMessage=function(e,t){this.insertAggregation("messages",e,t);c("added",e,this);return this};u.prototype.removeMessage=function(e){var t=this.removeAggregation("messages",e);if(t){c("removed",t,this)}return t};u.prototype.removeAllMessages=function(){var e=this.removeAllAggregation("messages");if(e.length>0){c("removed",null,this)}return e};u.prototype.destroyMessages=function(){var e=this.getMessages().length;this.destroyAggregation("messages");if(e>0){c("removed",null,this)}return this};return u});
//# sourceMappingURL=Notifier.js.map