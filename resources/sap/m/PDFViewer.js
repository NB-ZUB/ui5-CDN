/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/Device","sap/m/PDFViewerRenderManager","sap/m/MessageBox","sap/m/PDFViewerRenderer","sap/base/Log","sap/base/assert","sap/ui/thirdparty/jquery","./PDFViewerRenderer","sap/ui/core/Lib"],function(e,t,i,r,o,s,n,a,jQuery,p,l){"use strict";var u=e.PDFViewerDisplayType;var d=t.extend("sap.m.PDFViewer",{metadata:{library:"sap.m",properties:{height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},source:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},errorMessage:{type:"string",group:"Misc",defaultValue:null,deprecated:true},errorPlaceholderMessage:{type:"string",group:"Misc",defaultValue:null},popupHeaderTitle:{type:"string",group:"Misc",defaultValue:null,deprecated:true},title:{type:"string",group:"Misc",defaultValue:null},showDownloadButton:{type:"boolean",group:"Misc",defaultValue:true},displayType:{type:"sap.m.PDFViewerDisplayType",group:"Misc",defaultValue:u.Auto},isTrustedSource:{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{errorPlaceholder:{type:"sap.ui.core.Control",multiple:false},popupButtons:{type:"sap.m.Button",multiple:true,singularName:"popupButton"},_illustratedMessage:{type:"sap.m.IllustratedMessage",multiple:false,visibility:"hidden"}},events:{loaded:{},error:{parameters:{target:{type:"any"}}},sourceValidationFailed:{}}},renderer:p});d.prototype.init=function(){this._objectsRegister={};this._bIsPopupOpen=false;this._isError=false;this._initPopupControl();this._initPopupDownloadButtonControl();this._initPlaceholderIllustratedMessageControl();this._initToolbarDownloadButtonControl();this._initOverflowToolbarControl();this._initControlState()};d.prototype._initControlState=function(){this._bRenderPdfContent=true};d.prototype.setWidth=function(e){this.setProperty("width",e,true);var t=this.$();if(t===null){return this}t.css("width",this._getRenderWidth());return this};d.prototype.setHeight=function(e){this.setProperty("height",e,true);var t=this.$();if(t===null){return this}t.css("height",this._getRenderHeight());return this};d.prototype.onBeforeRendering=function(){try{if(!this.getIsTrustedSource()&&!this._isDisplayTypeLink()){this.sInitialDisplayType=this.getDisplayType();this.setProperty("displayType",u.Link,true)}var e=this._getIframeDOMElement();e.remove()}catch(e){n.info(e)}};d.prototype.onAfterRendering=function(){if(this.sInitialDisplayType){this.setProperty("displayType",this.sInitialDisplayType,true)}var e=function(){var e=this._getIframeDOMElement();e.on("load",this._onLoadListener.bind(this));e.on("error",this._onErrorListener.bind(this))}.bind(this);try{this.setBusy(true);e()}catch(e){n.error(e);if(this._isError){this._isError=false;this._objectsRegister.getPlaceholderIllustratedMessageControl().rerender()}this.setBusy(false)}};d.prototype._fireErrorEvent=function(e){this._renderErrorState();this.fireError({target:e||null})};d.prototype._renderErrorState=function(){var e=this._objectsRegister.getToolbarDownloadButtonControl();e.setEnabled(false);var e=this._objectsRegister.getPopupDownloadButtonControl();e.setEnabled(false);this.setBusy(false);this._bRenderPdfContent=false;t.prototype.invalidate.call(this)};d.prototype._fireLoadedEvent=function(){this._bRenderPdfContent=true;this.setBusy(false);try{this._getIframeDOMElement().removeClass("sapMPDFViewerLoading")}catch(e){n.fatal("Iframe not founded in loaded event");n.fatal(e)}this.fireEvent("loaded")};d.prototype._onLoadListener=function(e){try{var t=jQuery(e.target),r=true;var o="application/pdf";try{var a=t[0].contentWindow.document.embeds;r=!!a&&a.length===1;if(r){o=a[0].attributes.getNamedItem("type").value}}catch(e){if(!i.browser.firefox&&this.fireEvent("sourceValidationFailed",{},true)){this._fireLoadedEvent();return}}if(r&&s._isSupportedMimeType(o)&&s._isPdfPluginEnabled()){this._fireLoadedEvent()}else{this._fireErrorEvent(e.target)}}catch(e){n.fatal(false,"Fatal error during the handling of load event happened.");n.fatal(false,e.message)}};d.prototype._onErrorListener=function(){this._fireErrorEvent()};d.prototype.downloadPDF=function(){var e=window.open(this.getSource());e.opener=null;e.focus()};d.prototype._onSourceValidationErrorMessageBoxCloseListener=function(e){if(e===o.Action.CANCEL){this._renderErrorState()}else{this._fireLoadedEvent()}};d.prototype._onAfterPopupClose=function(e){var t=this._objectsRegister.getPopup();t.removeAllContent();this._bIsPopupOpen=false};d.prototype._shouldRenderPdfContent=function(){return s._isPdfPluginEnabled()&&this._bRenderPdfContent&&this._isSourceValidToDisplay()};d.prototype._isSourceValidToDisplay=function(){var e=this.getSource();return e!==null&&e!==""&&typeof e!=="undefined"};d.prototype.invalidate=function(e){this._initControlState();t.prototype.invalidate.call(this,e)};d.prototype.open=function(){if(!this.getIsTrustedSource()&&!this._isDisplayTypeLink()){this.setProperty("displayType",u.Link,true)}if(!this._isSourceValidToDisplay()){a(false,"The PDF file cannot be opened with the given source. Given source: "+this.getSource());return}else if(!s._isPdfPluginEnabled()){n.warning("The PDF plug-in is not available on this device.")}if(this._isEmbeddedModeAllowed()){this._openOnDesktop()}else{this._openOnMobile()}};d.prototype._openOnDesktop=function(){var e=this._objectsRegister.getPopup();if(this._bIsPopupOpen){return}this._initControlState();this._preparePopup(e);e.addContent(this);this._bIsPopupOpen=true;e.open()};d.prototype._openOnMobile=function(){var e=window.open(this.getSource());e.opener=null;e.focus()};d.prototype._getIframeDOMElement=function(){var e=this.$("iframe");if(e.length===0){throw Error("Underlying iframe was not found in DOM.")}if(e.length>1){n.fatal("Initialization of iframe fails. Reason: the control somehow renders multiple iframes")}return e};d.prototype._isEmbeddedModeAllowed=function(){return this._isDisplayTypeAuto()?i.system.desktop:this._isDisplayTypeEmbedded()};d.prototype._isDisplayTypeAuto=function(){return this.getDisplayType()===u.Auto};d.prototype._isDisplayTypeEmbedded=function(){return this.getDisplayType()===u.Embedded};d.prototype._isDisplayTypeLink=function(){return this.getDisplayType()===u.Link};d.prototype._isDisplayDownloadButton=function(){return this.getShowDownloadButton()||this._isDisplayTypeLink()||this._isDisplayTypeAuto()&&!this._isEmbeddedModeAllowed()};d.prototype._getLibraryResourceBundle=function(){return l.getResourceBundleFor("sap.m")};d.prototype._getIllustratedMessageErrorMessage=function(){return this.getErrorPlaceholderMessage()?this.getErrorPlaceholderMessage():this._getLibraryResourceBundle().getText("PDF_VIEWER_PLACEHOLDER_ERROR_TEXT")};d.prototype._getRenderWidth=function(){return this._bIsPopupOpen?"100%":this.getWidth()};d.prototype._getRenderHeight=function(){if(this._bIsPopupOpen){return"100%"}if(!this._isEmbeddedModeAllowed()){return"auto"}return this.getHeight()};d.prototype._showMessageBox=function(){o.show(this._getLibraryResourceBundle().getText("PDF_VIEWER_SOURCE_VALIDATION_MESSAGE_TEXT"),{icon:o.Icon.WARNING,title:this._getLibraryResourceBundle().getText("PDF_VIEWER_SOURCE_VALIDATION_MESSAGE_HEADER"),actions:[o.Action.OK,o.Action.CANCEL],defaultAction:o.Action.CANCEL,id:this.getId()+"-validationErrorSourceMessageBox",styleClass:"sapUiSizeCompact",contentWidth:"100px",onClose:this._onSourceValidationErrorMessageBoxCloseListener.bind(this)})};d.prototype.exit=function(){jQuery.each(this._objectsRegister,function(e,t){var i=t(true);if(i){i.destroy()}});try{var e=this._getIframeDOMElement();e.off()}catch(e){n.info(e)}};r.extendPdfViewer(d);return d});
//# sourceMappingURL=PDFViewer.js.map