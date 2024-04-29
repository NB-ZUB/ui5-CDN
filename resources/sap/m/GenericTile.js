/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/m/Text","sap/ui/core/HTML","sap/ui/core/Icon","sap/ui/core/IconPool","sap/m/Button","sap/m/GenericTileRenderer","sap/m/GenericTileLineModeRenderer","sap/m/Image","sap/ui/Device","sap/ui/core/ResizeHandler","sap/base/strings/camelize","sap/base/util/deepEqual","sap/ui/events/PseudoEvents","sap/ui/core/theming/Parameters","sap/ui/thirdparty/jquery","sap/ui/core/library","sap/ui/core/Configuration","sap/ui/core/InvisibleText","sap/ui/core/Core","sap/ui/core/Theming"],function(e,t,i,s,o,n,a,r,l,h,p,d,c,g,u,f,jQuery,_,T,y,m,v){"use strict";var M=e.GenericTileScope,I=e.LoadState,A=_.CSSColor,S=e.FrameType,C=e.Size,b=e.GenericTileMode,R=e.TileSizeBehavior,L=e.WrappingType,x=e.URLHelper,B;B=f.get({name:"sapLegendColor9",callback:function(e){B=e}});var E="GenericTileDeviceSet";var D={};var P=t.extend("sap.m.GenericTile",{metadata:{library:"sap.m",properties:{mode:{type:"sap.m.GenericTileMode",group:"Appearance",defaultValue:b.ContentMode},header:{type:"string",group:"Appearance",defaultValue:null},subheader:{type:"string",group:"Appearance",defaultValue:null},failedText:{type:"string",group:"Appearance",defaultValue:null},size:{type:"sap.m.Size",group:"Misc",defaultValue:C.Auto,deprecated:true},frameType:{type:"sap.m.FrameType",group:"Misc",defaultValue:S.OneByOne},systemInfo:{type:"string",group:"Misc",defaultValue:null},appShortcut:{type:"string",group:"Misc",defaultValue:null},backgroundImage:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},headerImage:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},state:{type:"sap.m.LoadState",group:"Misc",defaultValue:I.Loaded},imageDescription:{type:"string",group:"Accessibility",defaultValue:null},scope:{type:"sap.m.GenericTileScope",group:"Misc",defaultValue:M.Display},sizeBehavior:{type:"sap.m.TileSizeBehavior",defaultValue:R.Responsive},ariaLabel:{type:"string",group:"Accessibility",defaultValue:null},ariaRole:{type:"string",group:"Accessibility",defaultValue:null},ariaRoleDescription:{type:"string",group:"Accessibility",defaultValue:null},url:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},enableNavigationButton:{type:"boolean",group:"Misc",defaultValue:false},pressEnabled:{type:"boolean",group:"Misc",defaultValue:true},navigationButtonText:{type:"string",group:"Misc",defaultValue:null},wrappingType:{type:"sap.m.WrappingType",group:"Appearance",defaultValue:L.Normal},width:{type:"sap.ui.core.CSSSize",group:"Appearance"},additionalTooltip:{type:"string",group:"Accessibility",defaultValue:null},tileIcon:{type:"sap.ui.core.URI"},backgroundColor:{type:"string",group:"Appearance",defaultValue:B},valueColor:{type:"sap.m.ValueColor",group:"Appearance",defaultValue:"None"},iconLoaded:{type:"boolean",group:"Misc",defaultValue:true},renderOnThemeChange:{type:"boolean",group:"Misc",defaultValue:false},tileBadge:{type:"string",group:"Misc",defaultValue:""},dropAreaOffset:{type:"int",group:"Misc",defaultValue:0}},defaultAggregation:"tileContent",aggregations:{tileContent:{type:"sap.m.TileContent",multiple:true,bindable:"bindable"},linkTileContents:{type:"sap.m.LinkTileContent",multiple:true,singularName:"linkTileContent"},icon:{type:"sap.ui.core.Control",multiple:false,deprecated:true},actionButtons:{type:"sap.m.Button",multiple:true,bindable:"bindable"},_titleText:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_failedMessageText:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_invisibleText:{type:"sap.ui.core.InvisibleText",multiple:false,visibility:"hidden"},_tileIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"},_tileIconImage:{type:"sap.m.Image",multiple:false,visibility:"hidden"}},events:{press:{parameters:{scope:{type:"sap.m.GenericTileScope"},action:{type:"string"},domRef:{type:"any"}}}}},renderer:{apiVersion:2,render:function(e,t){if(t.getMode()===b.LineMode){l.render(e,t)}else{r.render(e,t)}}}});P._Action={Press:"Press",Remove:"Remove",More:"More"};P.LINEMODE_SIBLING_PROPERTIES=["state","subheader","header","scope"];P.prototype.init=function(){this._oRb=m.getLibraryResourceBundle("sap.m");if(!p.media.hasRangeSet(E)){p.media.initRangeSet(E,[450],"px",["small","large"])}this._oTitle=new i(this.getId()+"-title");this._oTitle.addStyleClass("sapMGTTitle");this._oTitle.cacheLineHeight=false;this.setAggregation("_titleText",this._oTitle,true);this._oAppShortcut=new i(this.getId()+"-appShortcut");this._oAppShortcut.cacheLineHeight=false;this.addDependent(this._oAppShortcut);this._oSystemInfo=new i(this.getId()+"-systemInfo");this._oSystemInfo.cacheLineHeight=false;this.addDependent(this._oSystemInfo);this._oSubTitle=new i(this.getId()+"-subTitle");this._oSubTitle.cacheLineHeight=false;this.addDependent(this._oSubTitle);this._sFailedToLoad=this._oRb.getText("INFOTILE_CANNOT_LOAD_TILE");this._sLoading=this._oRb.getText("INFOTILE_LOADING");this._oFailedText=new i(this.getId()+"-failed-txt",{maxLines:2});this._oFailedText.cacheLineHeight=false;this._oFailedText.addStyleClass("sapMGTFailed");this.setAggregation("_failedMessageText",this._oFailedText,true);this._oInvisibleText=new y(this.getId()+"-ariaText");this.setAggregation("_invisibleText",this._oInvisibleText,true);this._oErrorIcon=new o(this.getId()+"-warn-icon",{src:"sap-icon://error",size:"1.375rem"});this._oErrorIcon.addStyleClass("sapMGTFtrFldIcnMrk");var e=f.get({name:"sapNegativeTextColor",callback:function(e){this._oErrorIcon.setColor(e)}.bind(this)});if(e){this._oErrorIcon.setColor(e)}this._oBusy=new s(this.getId()+"-overlay");this._oBusy.setBusyIndicatorDelay(0);this._bTilePress=true;this._sBGColor=B;this._bThemeApplied=false;m.ready(this._handleCoreInitialized.bind(this));this._oNavigateAction=new a(this.getId()+"-navigateAction");this._oNavigateAction._bExcludeFromTabChain=true;this.addDependent(this._oNavigateAction)};P.prototype.setWrappingType=function(e){this.setProperty("wrappingType",e,true);this._oTitle.setWrappingType(e);this._oFailedText.setWrappingType(e);this._oSubTitle.setWrappingType(e);this._oAppShortcut.setWrappingType(e);this._oSystemInfo.setWrappingType(e);return this};P.prototype.setSubheader=function(e){this.setProperty("subheader",e);this._oSubTitle.setText(e);return this};P.prototype.setAppShortcut=function(e){this.setProperty("appShortcut",e);this._oAppShortcut.setText(e);return this};P.prototype.setSystemInfo=function(e){this.setProperty("systemInfo",e);this._oSystemInfo.setText(e);return this};P.prototype._handleCoreInitialized=function(){v.attachApplied(this._handleThemeApplied.bind(this))};P.prototype._handleThemeApplied=function(){this._bThemeApplied=true;this._oTitle.clampHeight();v.detachApplied(this._handleThemeApplied.bind(this))};P.prototype.onThemeChanged=function(){if(this.getDomRef()&&this.getRenderOnThemeChange()){this.invalidate()}};P.prototype._initScopeContent=function(e){if(!this.getState||this.getState()!==I.Disabled){if(this._oMoreIcon){this._oMoreIcon.destroy();this._oMoreIcon=null}if(this.isA("sap.m.GenericTile")&&this._isIconMode()&&this.getFrameType()===S.TwoByHalf){this._oMoreIcon=this._oMoreIcon||new a({id:this.getId()+"-action-more",icon:"sap-icon://overflow",type:"Transparent",tooltip:this._oRb.getText("GENERICTILE_MORE_ACTIONBUTTON_TEXT")}).addStyleClass("sapMPointer").addStyleClass(e+"MoreIcon").addStyleClass(e+"ActionMoreButton");this._oMoreIcon.ontouchstart=function(){this.removeFocus()}.bind(this)}else{this._oMoreIcon=this._oMoreIcon||new a({id:this.getId()+"-action-more",icon:"sap-icon://overflow",type:"Unstyled"}).addStyleClass("sapMPointer").addStyleClass(e+"MoreIcon");this._oMoreIcon._bExcludeFromTabChain=true}this._oRemoveButton=this._oRemoveButton||new a({id:this.getId()+"-action-remove",icon:"sap-icon://decline",tooltip:this._oRb.getText("GENERICTILE_REMOVEBUTTON_TEXT")}).addStyleClass("sapUiSizeCompact").addStyleClass(e+"RemoveButton");this._oRemoveButton._bExcludeFromTabChain=true;switch(this.getScope()){case M.Actions:this._oMoreIcon.setVisible(true);this._oRemoveButton.setVisible(true);break;case M.ActionMore:this._oMoreIcon.setVisible(true);this._oRemoveButton.setVisible(false);break;case M.ActionRemove:this._oRemoveButton.setVisible(true);this._oMoreIcon.setVisible(false);break;default:}}};P.prototype._addClassesForButton=function(){this._oMoreIcon.getDomRef().classList.add("sapMBtn");this._oMoreIcon.getDomRef("inner").classList.add("sapMBtnInner");this._oMoreIcon.getDomRef("inner").classList.add("sapMBtnTransparent")};P.prototype.removeFocus=function(){this.getDomRef().classList.add("sapMGTActionButtonPress");this._oMoreIcon._activeButton()};P.prototype._isSmall=function(){return this.getSizeBehavior()===R.Small||window.matchMedia("(max-width: 374px)").matches};P.prototype.exit=function(){if(this._sParentResizeListenerId){d.deregister(this._sResizeListenerId);this._sParentResizeListenerId=null}if(this._sGenericTileResizeListenerId){d.deregister(this._sGenericTileResizeListenerId);this._sGenericTileResizeListenerId=null}p.media.detachHandler(this._handleMediaChange,this,E);if(this._$RootNode){this._$RootNode.off(this._getAnimationEvents());this._$RootNode=null}this._clearAnimationUpdateQueue();this._oErrorIcon.destroy();if(this._oImage){this._oImage.destroy()}this._oBusy.destroy();if(this._oMoreIcon){this._oMoreIcon.destroy()}if(this._oRemoveButton){this._oRemoveButton.destroy()}if(this._oNavigateAction){this._oNavigateAction.destroy()}};P.prototype.onBeforeRendering=function(){var e=!!this.getSubheader();if(this.getMode()===b.HeaderMode||this.getMode()===b.IconMode){this._applyHeaderMode(e)}else{this._applyContentMode(e)}var t=this.getTileContent().length;for(var i=0;i<t;i++){this.getTileContent()[i].setDisabled(this.getState()===I.Disabled)}this._initScopeContent("sapMGT");this._generateFailedText();this.$().off("mouseenter");this.$().off("mouseleave");if(this._sParentResizeListenerId){d.deregister(this._sResizeListenerId);this._sParentResizeListenerId=null}if(this._sGenericTileResizeListenerId){d.deregister(this._sGenericTileResizeListenerId);this._sGenericTileResizeListenerId=null}var s=this.getParent();if(s&&s.isA("sap.f.GridContainer")){this._applyNewDim()}p.media.detachHandler(this._handleMediaChange,this,E);if(this._$RootNode){this._$RootNode.off(this._getAnimationEvents())}if(this.getFrameType()===S.Auto){this.setFrameType(S.OneByOne)}if(this.getMode()!==b.LineMode&&(this.getAppShortcut()||this.getSystemInfo())){this._setMaxLines()}if(this._isNavigateActionEnabled()){var o=this.getNavigationButtonText()?this.getNavigationButtonText():this._oRb.getText("ACTION_READ_MORE");this._oNavigateAction.setText(o);this._oNavigateAction.detachPress(this._navigateEventHandler,this)}if(this._isIconMode()){this._validateBackgroundColor()}this._isLinkTileContentPresent=this.getLinkTileContents().length>0};P.prototype.onAfterRendering=function(){this._setupResizeClassHandler();var e=this.getMode();var i=this._isScreenLarge();this._sGenericTileResizeListenerId=d.register(this,this._handleResizeOnTile.bind(this));this._handleResizeOnTile();if(e===b.LineMode){var s=this.$().parent();if(i){this._updateHoverStyle(true);if(this.getParent()instanceof t){this._sParentResizeListenerId=d.register(this.getParent(),this._handleResize.bind(this))}else{this._sParentResizeListenerId=d.register(s,this._handleResize.bind(this))}}}if(e===b.LineMode&&this._bUpdateLineTileSiblings){this._updateLineTileSiblings();this._bUpdateLineTileSiblings=false}if(e===b.LineMode){p.media.attachHandler(this._handleMediaChange,this,E)}if(this._isNavigateActionEnabled()){this._oNavigateAction.attachPress(this._navigateEventHandler,this)}if(this._oMoreIcon&&this._oMoreIcon.getDomRef()&&!this._isIconMode()){this._oMoreIcon.getDomRef().firstChild.classList.remove("sapMBtnHoverable");this._oMoreIcon.getDomRef().firstChild.classList.remove("sapMFocusable")}if(this._isIconMode()&&this.getFrameType()===S.TwoByHalf&&this._oMoreIcon.getDomRef()){this._addClassesForButton()}if(this.getFrameType()===S.TwoByOne&&(this.getMode()===b.ActionMode||this._isLinkTileContentPresent)&&this.getState()===I.Loaded&&!this.isA("sap.m.ActionTile")){this._applyExtraHeight()}if(this.getTooltip()&&this.getDomRef()){this.getDomRef().setAttribute("aria-describedby",this.getAggregation("_invisibleText").getId())}this.onDragComplete();if(this.getDomRef()&&this.getParent()&&this.getParent().isA("sap.m.SlideTile")){this.getDomRef().setAttribute("tabindex","-1")}};P.prototype._applyExtraHeight=function(){var e=this.getDomRef("hdr-text").offsetHeight,t=parseInt(getComputedStyle(this.getDomRef("title")).lineHeight.slice(0,2)),i=Math.ceil(e/t);if(i===1&&!this.getHeaderImage()){this.getDomRef("content").classList.add("sapMGTFtrMarginTop")}else{this.getDomRef("content").classList.remove("sapMGTFtrMarginTop")}if(this._isLinkTileContentPresent){this._adjustFocusOnLinkTiles(this.getDomRef().classList.contains("sapMTileSmallPhone"),i)}};P.prototype._adjustFocusOnLinkTiles=function(e,t){var i=e?5:6;i=t===2?--i:i;var s;for(s=this.getLinkTileContents().length-1;s>i-1;--s){this.getLinkTileContents()[s]._getLink().getDomRef().setAttribute("tabindex",-1)}while(s>=0){this.getLinkTileContents()[s]._getLink().getDomRef().setAttribute("tabindex",0);s--}};P.prototype._validateBackgroundColor=function(){var e=this.getBackgroundColor();if(A.isValid(e)){this._sBGColor=e}else{var t=f.get({name:e,callback:function(e){this._sBGColor=e?e:B}.bind(this)});if(t){this._sBGColor=t}}};P.prototype._setMaxLines=function(){var e=this.getFrameType(),t=e===S.OneByOne||e===S.TwoByHalf?1:2;this._oAppShortcut.setMaxLines(t);this._oSystemInfo.setMaxLines(t);if(this.getFrameType()===S.TwoByHalf){var i=this.getAppShortcut().length>11,s=this.getSystemInfo().length>11;if(i&&s||i){this._oAppShortcut.setMaxLines(2)}else if(s){this._oSystemInfo.setMaxLines(2)}}};P.prototype.onDragComplete=function(){if(this.hasStyleClass("sapMGTPressActive")){this.removeStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").removeClass("sapMGTPressActive")}if(this.getMode()===b.LineMode){this.removeStyleClass("sapMGTLineModePress")}}if(this.getDomRef()){this.getDomRef().removeEventListener("mouseenter",this._updateAriaAndTitle.bind(this));this.getDomRef().removeEventListener("mouseleave",this._removeTooltipFromControl.bind(this));this.getDomRef().addEventListener("mouseenter",this._updateAriaAndTitle.bind(this));this.getDomRef().addEventListener("mouseleave",this._removeTooltipFromControl.bind(this))}};P.prototype._handleResize=function(){if(this.getMode()===b.LineMode&&this._isScreenLarge()&&this.getParent()){this._queueAnimationEnd()}};P.prototype._handleResizeOnTile=function(){if(this._isIconMode()&&this.getFrameType()===S.OneByOne){this._handleResizeOnIconTile()}};P.prototype._handleResizeOnIconTile=function(){var e=this._oTitle.getDomRef();var t=window.matchMedia("(max-width: 600px)").matches;var i=window.matchMedia("(max-width: 374px)").matches;if(e){var s=parseInt(getComputedStyle(e).height.slice(0,2));var o=parseInt(getComputedStyle(e).lineHeight.slice(0,2));var n=s/o;if(n===1){this.addStyleClass("sapMGTHeaderOneLine")}else{this.removeStyleClass("sapMGTHeaderOneLine")}if(!(t||i)&&n===3&&this._oSubTitle.getDomRef()){this._oSubTitle.setMaxLines(1);this.addStyleClass("sapMGTHeaderThreeLine")}else{this.removeStyleClass("sapMGTHeaderThreeLine");this._oSubTitle.setMaxLines(2)}}};P.prototype._setupResizeClassHandler=function(){var e=function(){var e=this.getParent();if(e&&e.isA("sap.f.GridContainer")){this._applyNewDim()}if(this.getSizeBehavior()===R.Small||window.matchMedia("(max-width: 374px)").matches||this._isSmallStretchTile()){this.$().addClass("sapMTileSmallPhone");if(this._isSmallStretchTile()){this.addStyleClass("sapMGTStretch")}}else{this.$().removeClass("sapMTileSmallPhone");this.removeStyleClass("sapMGTStretch")}if(this.__isLinkTileContentPresent){this._applyExtraHeight()}}.bind(this);jQuery(window).on("resize",e);e()};P.prototype._isSmallStretchTile=function(){return this.getFrameType()===S.Stretch&&window.matchMedia("(max-width: 600px)").matches};P.prototype._isCompact=function(){return jQuery("body").hasClass("sapUiSizeCompact")||this.$().is(".sapUiSizeCompact")||this.$().closest(".sapUiSizeCompact").length>0};P.prototype._calculateStyleData=function(){this.$("lineBreak").remove();if(!this._isScreenLarge()||!this.getDomRef()||this.$().is(":hidden")){return null}var e=this.$(),t=this.$("endMarker"),i=this.$("startMarker");if(t.length===0||i.length===0){return null}var s=this._getLineCount(),o,n,a=Math.ceil(l._getCSSPixelValue(this,"margin-top")),r,h=this.$().parent().innerWidth(),d=Math.ceil(l._getCSSPixelValue(this,"min-height")),c=l._getCSSPixelValue(this,"line-height"),g=this.$().is(":not(:first-child)")&&s>1,u=jQuery("<span><br></span>"),f=0,_=T.getRTL(),y=t.position();if(g){u.attr("id",this.getId()+"-lineBreak");e.prepend(u);s=this._getLineCount();y=t.position()}var m={rtl:_,lineBreak:g,startOffset:i.offset(),endOffset:t.offset(),availableWidth:h,lines:[]};var v;if(p.browser.msie||p.browser.edge){v=u.find("br").position()}else{v=u.position()}var M=v;if(!(p.browser.mozilla||p.browser.msie||p.browser.edge)&&v.left<y.left){M=y}m.positionLeft=g?v.left:e.position().left;m.positionRight=g?e.width()-M.left:m.availableWidth-e.position().left;if(!g&&s>1){m.positionRight=i.parent().innerWidth()-(i.position().left+i.width())}for(f;f<s;f++){if(g&&f===0){continue}if(s===1){o=_?m.availableWidth-m.positionLeft:m.positionLeft;r=e.width()}else if(f===s-1){o=0;r=_?e.width()-y.left:y.left}else if(g&&f===1){o=0;r=h}else{o=0;r=h}n=f*c+a;m.lines.push({offset:{x:o,y:n},width:r,height:d})}return m};P.prototype._getStyleData=function(){var e=this._calculateStyleData();if(!g(this._oStyleData,e)){delete this._oStyleData;this._oStyleData=e;return true}return false};P.prototype._getAnimationEvents=function(){return"transitionend.sapMGT$id animationend.sapMGT$id".replace(/\$id/g,c(this.getId()))};P.prototype._updateHoverStyle=function(e){if(!this._getStyleData()&&!e){return}this._clearAnimationUpdateQueue();this._cHoverStyleUpdates=-1;this._oAnimationEndCallIds={};if(this._oStyleData&&this._oStyleData.lineBreak&&this.getUIArea()){this._$RootNode=jQuery(this.getUIArea().getRootNode());this._$RootNode.on(this._getAnimationEvents(),this._queueAnimationEnd.bind(this))}this._queueAnimationEnd()};P.prototype._queueAnimationEnd=function(e){if(e){var t=jQuery(e.target);if(t.is(".sapMGT, .sapMGT *")){return false}}if(typeof this._cHoverStyleUpdates!=="number"){this._cHoverStyleUpdates=-1}if(!this._oAnimationEndCallIds){this._oAnimationEndCallIds={}}this._cHoverStyleUpdates++;this._oAnimationEndCallIds[this._cHoverStyleUpdates]=setTimeout(this._handleAnimationEnd.bind(this,this._cHoverStyleUpdates),10)};P.prototype._handleAnimationEnd=function(e){delete this._oAnimationEndCallIds[e];if(this._cHoverStyleUpdates===e){this._getStyleData();l._updateHoverStyle.call(this)}};P.prototype._clearAnimationUpdateQueue=function(){for(var e in this._oAnimationEndCallIds){clearTimeout(this._oAnimationEndCallIds[e]);delete this._oAnimationEndCallIds[e]}};P.prototype._getLineCount=function(){var e=this.getDomRef().getBoundingClientRect(),t=l._getCSSPixelValue(this,"line-height");return Math.round(e.height/t)};P.prototype.getBoundingRects=function(){var e=this.$().offset();return[{offset:{x:e.left,y:e.top},width:this.$().outerWidth(),height:this.$().height()}]};P.prototype._updateLineTileSiblings=function(){var e=this.getParent();if(this.getMode()===b.LineMode&&this._isScreenLarge()&&e){var t=e.indexOfAggregation(this.sParentAggregationName,this);var i=e.getAggregation(this.sParentAggregationName).splice(t+1);for(t=0;t<i.length;t++){var s=i[t];if(s instanceof P&&s.getMode()===b.LineMode){s._updateHoverStyle()}}}};P.prototype.ontouchstart=function(e){if(e&&e.target.id.indexOf("-action-more")===-1&&this.getDomRef()){this.getDomRef().classList.remove("sapMGTActionButtonPress")}this.addStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").addClass("sapMGTPressActive")}if(this.getMode()===b.LineMode){this.addStyleClass("sapMGTLineModePress")}};P.prototype.ontouchcancel=function(){this.removeStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").removeClass("sapMGTPressActive")}};P.prototype.ontouchend=function(){this.removeStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").removeClass("sapMGTPressActive")}if(this.getMode()===b.LineMode){this.removeStyleClass("sapMGTLineModePress")}};P.prototype.ondragend=function(){this.onDragComplete()};P.prototype.ontap=function(e){if(!w(e,this)&&!this._isLinkPressed(e)){var t;if((this._bTilePress||this._isActionMoreButtonVisibleIconMode(e))&&this.getState()!==I.Disabled){this.$().trigger("focus");t=this._getEventParams(e);if(!(this.isInActionRemoveScope()&&t.action===P._Action.Press)){this.firePress(t)}e.preventDefault()}}};var G=false;P.prototype.onkeydown=function(e){if(!w(e,this)&&!this._isLinkPressed(e)){G=e.keyCode===16||e.keyCode===27?true:false;var t=D[e.keyCode];if(!t){D[e.keyCode]=true;if(D[32]||D[13]){e.preventDefault()}}if(u.events.sapselect.fnCheck(e)&&this.getState()!==I.Disabled){this.addStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").addClass("sapMGTPressActive")}e.preventDefault()}}};P.prototype._updateAriaLabel=function(){var e=this._getAriaText(),t=this.$(),i=false;if(t.attr("aria-label")!==e){t.attr("aria-label",e);i=true}return i};P.prototype.onsaptabnext=function(e){if(this._isIconMode()&&this.getFrameType()===S.TwoByHalf&&e&&e.keyCode){if(e.keyCode===9&&e.srcControl.getId()==this._oMoreIcon.getId()){this._oMoreIcon.removeStyleClass("sapMGTVisible")}else if(e.keyCode===9){this._oMoreIcon.addStyleClass("sapMGTVisible")}}};P.prototype.onsaptabprevious=function(){if(this._isIconMode()&&this.getFrameType()===S.TwoByHalf){this._oMoreIcon.removeStyleClass("sapMGTVisible")}};P.prototype.onkeyup=function(e){if(!w(e,this)&&!this._isLinkPressed(e)){var t=D[e.keyCode];if(t){delete D[e.keyCode]}var i,s=false,o=this.getScope(),n=o===M.Actions||o===M.ActionRemove;if(n&&(u.events.sapdelete.fnCheck(e)||u.events.sapbackspace.fnCheck(e))){i={scope:o,action:P._Action.Remove,domRef:this._oRemoveButton.getPopupAnchorDomRef()};s=true}if(D[16]&&e.keyCode!==16&&this.getState()!==I.Disabled){G===false}if((u.events.sapselect.fnCheck(e)||G)&&this.getState()!==I.Disabled){this.removeStyleClass("sapMGTPressActive");if(this.$("hover-overlay").length>0){this.$("hover-overlay").removeClass("sapMGTPressActive")}i=this._getEventParams(e);s=true}if(!G&&s&&(this._bTilePress||this._isActionMoreButtonVisibleIconMode(e))){this.firePress(i);e.preventDefault()}this._updateAriaLabel()}};P.prototype.setProperty=function(e){t.prototype.setProperty.apply(this,arguments);if(this.getMode()===b.LineMode&&P.LINEMODE_SIBLING_PROPERTIES.indexOf(e)!==-1){this._bUpdateLineTileSiblings=true}return this};P.prototype.getHeader=function(){return this._oTitle.getText()};P.prototype.setHeader=function(e){this.setProperty("header",e);this._oTitle.setText(e);return this};P.prototype.setHeaderImage=function(e){var t=!g(this.getHeaderImage(),e);if(t){if(this._oImage){this._oImage.destroy();this._oImage=undefined}if(e){this._oImage=n.createControlByURI({id:this.getId()+"-icon-image",src:e},h);this._oImage.addStyleClass("sapMGTHdrIconImage")}}return this.setProperty("headerImage",e)};P.prototype._applyHeaderMode=function(e){var t=this.getFrameType();if(this._isIconMode()){var i,s;s=t===S.TwoByHalf?1:2;if(t===S.OneByOne){i=4}else if(t===S.TwoByHalf){i=e?1:2}this._oTitle.setMaxLines(i);this._oSubTitle.setMaxLines(s)}else if(t===S.TwoByOne&&(this.getLinkTileContents()>0||this.getMode()===b.ActionMode)){this._oTitle.setMaxLines(2)}else if(t===S.OneByHalf||t===S.TwoByHalf){this._oTitle.setMaxLines(2)}else{if(e){this._oTitle.setMaxLines(4)}else{this._oTitle.setMaxLines(5)}}this._changeTileContentContentVisibility(false)};P.prototype._applyContentMode=function(e){var t=this.getFrameType();var i=this.getTileContent();var s=false;if(t===S.TwoByHalf||t===S.OneByHalf){if(i.length){for(var o=0;o<i.length;o++){var n=i[o].getAggregation("content");if(n!==null){if(t===S.OneByHalf&&n.getMetadata().getName()==="sap.m.ImageContent"){s=true;this._oTitle.setMaxLines(2);break}else{this._oTitle.setMaxLines(1);break}}this._oTitle.setMaxLines(2)}}else{this._oTitle.setMaxLines(2)}}else if(t===S.TwoByOne&&(this.getLinkTileContents().length>0||this.getMode()===b.ActionMode)){if(e){this._oTitle.setMaxLines(1)}else{this._oTitle.setMaxLines(2)}}else if(e){this._oTitle.setMaxLines(2)}else{this._oTitle.setMaxLines(3)}this._changeTileContentContentVisibility(true,t,s)};P.prototype._changeTileContentContentVisibility=function(e,t,i){var s;s=this.getTileContent();for(var o=0;o<s.length;o++){if(t==S.OneByHalf&&i){s[o].setRenderContent(false)}else{s[o].setRenderContent(e)}}};P.prototype._getHeaderAriaAndTooltipText=function(){var e="";var t=true;if(this.getHeader()){e+=this.getHeader();t=false}if(this.getSubheader()){e+=(t?"":"\n")+this.getSubheader();t=false}if(this.getImageDescription()){e+=(t?"":"\n")+this.getImageDescription()}return e};P.prototype._getContentAriaAndTooltipText=function(){var e="";var t=true;var i=this.getTileContent();var s=this.getAdditionalTooltip();if(!this._isInActionScope()&&(this.getMode()===b.ContentMode||this.getMode()===b.ArticleMode||this.getMode()===b.ActionMode)){for(var o=0;o<i.length;o++){if(i[o].getVisible()){if(typeof i[o]._getAriaAndTooltipText==="function"){e+=(t?"":"\n")+i[o]._getAriaAndTooltipText()}else if(i[o].getTooltip_AsString()){e+=(t?"":"\n")+i[o].getTooltip_AsString()}t=false}}}if(s){e+=(t?"":"\n")+s}return e};P.prototype._getAriaAndTooltipText=function(){var e=this._getHeaderAriaAndTooltipText()+"\n"+this._getContentAriaAndTooltipText();switch(this.getState()){case I.Disabled:return"";case I.Loading:return e+"\n"+this._sLoading;case I.Failed:return e+"\n"+this._oFailedText.getText();default:if(e.trim().length===0){return""}else{return e}}};P.prototype._getAriaText=function(e){var t=this._getAriaAndTooltipText();var i=this.getAriaLabel();if(!t||this._isTooltipSuppressed()){t=this._getAriaAndTooltipText()}if(this._isInActionScope()&&this.getScope()!==M.ActionMore){t=this._oRb.getText("GENERICTILE_ACTIONS_ARIA_TEXT")+" "+t}if(i){t=i+" "+t}if(!e){t=t.trim();if(this.getLinkTileContents().length>0){t+="\n"+this._oRb.getText("GENERICTILE_LINK_TILE_CONTENT_DESCRIPTION")}else{t+="\n"+this._getSizeDescription()}}return t.trim()};P.prototype._getSizeDescription=function(){var e="",t=this.getFrameType();if(this.getMode()===b.LineMode){var i=this.getUrl()&&!this._isInActionScope()&&this.getState()!==I.Disabled;var s=this.hasListeners("press");if(i||s){e="GENERIC_TILE_LINK"}else{e="GENERIC_TILE_LINE_SIZE"}}else if(t===S.OneByHalf){e="GENERIC_TILE_FLAT_SIZE"}else if(t===S.TwoByHalf){e="GENERIC_TILE_FLAT_WIDE_SIZE"}else if(t===S.TwoByOne){e="GENERIC_TILE_WIDE_SIZE"}else if(t===S.OneByOne){e="GENERIC_TILE_ROLE_DESCRIPTION"}return this._oRb.getText(e)};P.prototype._getTooltipText=function(){var e=this.getTooltip_Text();if(this._isTooltipSuppressed()===true){e=null}return e};P.prototype._checkFooter=function(e,t){var i=t.getState();var s=this._isInActionScope()||this._bShowActionsView===true;var o=this.getFrameType();var n=e.getAggregation("content");if(this._isIconMode()){e.setRenderFooter(false)}else if(i===I.Failed||s&&i!==I.Disabled){e.setRenderFooter(false)}else if(o===S.TwoByHalf&&(n!==null||this.getSubheader())){e.setRenderFooter(false)}else if(o===S.OneByHalf&&(n!==null&&n.getMetadata().getName()!=="sap.m.ImageContent"||this.getSubheader())){e.setRenderFooter(false)}else{e.setRenderFooter(true);return true}};P.prototype._isInActionScope=function(){return this.getScope()===M.Actions||this.getScope()===M.ActionMore||this.getScope()===M.ActionRemove};P.prototype._isLinkPressed=function(e){var t=e.target.id;var i=this.getLinkTileContents().find(function(e){return e._getLink().getDomRef().id===t});return!!i};P.prototype.isInActionRemoveScope=function(){return this.getScope()===M.ActionRemove};P.prototype._isActionMoreButtonVisibleIconMode=function(e){return(this.getScope()===M.ActionMore||this.getScope()===M.Actions)&&this._isIconMode()&&this.getFrameType()===S.TwoByHalf&&e.target.id.indexOf("-action-more")>-1};P.prototype._generateFailedText=function(){var e=this.getFailedText();var t=e?e:this._sFailedToLoad;this._oFailedText.setText(t);this._oFailedText.setTooltip(t)};P.prototype._isTooltipSuppressed=function(){var e=this.getTooltip_Text();if(e&&e.length>0&&e.trim().length===0){return true}else{return false}};P.prototype._isHeaderTextTruncated=function(){var e,t,i,s;if(this.getMode()===b.LineMode){i=this.$("hdr-text");if(i.length>0){s=Math.ceil(i[0].getBoundingClientRect().width);return i[0]&&s<i[0].scrollWidth}else{return false}}else{e=this.getAggregation("_titleText").getDomRef("inner");t=this.getAggregation("_titleText").getClampHeight(e);return t<e.scrollHeight}};P.prototype._isSubheaderTextTruncated=function(){var e;if(this.getMode()===b.LineMode){e=this.$("subHdr-text")}else{e=this.$("subTitle")}if(e.length>0){var t=Math.ceil(e[0].getBoundingClientRect().width);return e[0]&&t<e[0].scrollWidth}else{return false}};P.prototype._setTooltipFromControl=function(){var e=this._getAriaAndTooltipText();if(e&&!this._getTooltipText()&&!this._isTooltipSuppressed()){this.$().attr("title",e.trim());this._bTooltipFromControl=true}};P.prototype._updateAriaAndTitle=function(){var e=this._getAriaAndTooltipText();var t=this._getAriaText();var i=this.$();if(i.attr("title")!==e){i.attr("aria-label",t)}if(this._isInActionScope()){i.find("*:not(.sapMGTRemoveButton,.sapMGTActionMoreButton)").removeAttr("aria-label").removeAttr("title").off("mouseenter")}else{i.find("*").removeAttr("aria-label").removeAttr("title").off("mouseenter")}this._setTooltipFromControl()};P.prototype._removeTooltipFromControl=function(){if(this._bTooltipFromControl){this.$().removeAttr("title");this._bTooltipFromControl=false}};P.prototype._isScreenLarge=function(){return this._getCurrentMediaContainerRange(E).name==="large"};P.prototype._getEventParams=function(e){var t,i=P._Action.Press,s=this.getScope(),o=this.getDomRef();if((s===M.Actions||M.ActionRemove)&&e.target.id.indexOf("-action-remove")>-1){i=P._Action.Remove;o=this._oRemoveButton.getPopupAnchorDomRef()}else if((s===M.Actions||s===M.ActionMore)&&this._isIconMode&&this._isIconMode()&&e.target.id.indexOf("-action-more")>-1){i=P._Action.More;o=this._oMoreIcon.getDomRef()}else if(s===M.Actions||s===M.ActionMore){o=this._oMoreIcon.getDomRef()}t={scope:s,action:i,domRef:o};return t};P.prototype._handleMediaChange=function(){this._bUpdateLineTileSiblings=true;this.invalidate()};P.prototype.setPressEnabled=function(e){this._bTilePress=e;this.setProperty("pressEnabled",e);return this};P.prototype.showActionsView=function(e){if(this._bShowActionsView!==e){this._bShowActionsView=e;this.invalidate()}};P.prototype._generateIconAggregation=function(e){var t="";this._oIcon=n.createControlByURI({size:this.getFrameType()===S.OneByOne?"2rem":"1.25rem",useIconTooltip:false,src:e});if(!this._oIcon){this._oIcon=n.createControlByURI({height:this.getFrameType()===S.OneByOne?"2rem":"1.25rem",width:this.getFrameType()===S.OneByOne?"2rem":"1.25rem",useIconTooltip:false,src:e},h).addStyleClass("sapMPointer").addStyleClass("sapMGTTileIcon")}this._oIcon.addStyleClass("sapMPointer").addStyleClass("sapMGTTileIcon");if(this._oIcon instanceof h){t="_tileIconImage"}else if(this._oIcon instanceof o){t="_tileIcon"}if(t){this.setAggregation(t,this._oIcon)}return t};P.prototype._isIconMode=function(){var e=this.getMode(),t=this.getFrameType(),i=this.getTileIcon(),s=this.getBackgroundColor(),o=this.getIconLoaded();this._sTileBadge=t===S.TwoByHalf&&this.getTileBadge().trim().substring(0,3);return e===b.IconMode&&(t===S.OneByOne||t===S.TwoByHalf)&&(i&&s||this._sTileBadge&&s||!o)};P.prototype._isNavigateActionEnabled=function(){return this.getMode()===b.ArticleMode&&this.getUrl()&&this.getEnableNavigationButton()};P.prototype._applyNewDim=function(e){var t=e?e.getActiveLayoutSettings().getGap():this.getParent().getActiveLayoutSettings().getGap();var i=t==="16px"||t==="1rem";if(i){this.addStyleClass("sapMGTGridContainerOneRemGap")}else if(!i&&this.hasStyleClass("sapMGTGridContainerOneRemGap")){this.removeStyleClass("sapMGTGridContainerOneRemGap")}};P.prototype._isActionMode=function(){return this.getFrameType()===S.TwoByOne&&this.getMode()===b.ActionMode&&this.getActionButtons().length};P.prototype._getNavigateAction=function(){return this._oNavigateAction};P.prototype._navigateEventHandler=function(e){e.preventDefault();var t=e.getSource().getParent().getUrl();x.redirect(t,true)};P.prototype.getDropAreaRect=function(e){var t=this.getDomRef().getBoundingClientRect().toJSON();var i=this.getDropAreaOffset();if(e==="Horizontal"){t.left-=i;t.right+=i}else{t.top-=i;t.bottom+=i}return t};function w(e,t){var i=false,s=false;if(t._isActionMode()){var o=document.querySelector('[id="'+t.getId()+"-actionButtons"+'"]');i=o&&o!==e.target&&o.contains(e.target)}if(t._isNavigateActionEnabled()){var n=document.querySelector('[id="'+t.getId()+"-navigateActionContainer"+'"]');s=n&&n!==e.target&&n.contains(e.target)}return i||s}return P});
//# sourceMappingURL=GenericTile.js.map