/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/library","sap/ui/core/Control","sap/ui/core/IconPool","sap/ui/base/ManagedObject","sap/m/Text","sap/m/Image","sap/m/Button","sap/m/Title","sap/m/Bar","sap/m/FormattedText","./MessagePageRenderer","sap/ui/thirdparty/jquery"],function(t,e,i,r,s,o,n,a,g,p,u,l,jQuery){"use strict";var c=e.TextAlign;var d=e.TextDirection;var h=t.ButtonType;var y=t.BarDesign;var m=e.TitleLevel;var f=i.extend("sap.m.MessagePage",{metadata:{library:"sap.m",properties:{text:{type:"string",group:"Misc",defaultValue:"No matching items found."},description:{type:"string",group:"Misc",defaultValue:"Check the filter settings."},title:{type:"string",group:"Misc",defaultValue:null},titleLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:m.Auto},showHeader:{type:"boolean",group:"Appearance",defaultValue:true},showNavButton:{type:"boolean",group:"Appearance",defaultValue:false},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:"sap-icon://documents"},iconAlt:{type:"string",group:"Misc",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:d.Inherit},enableFormattedText:{type:"boolean",group:"Appearance",defaultValue:false}},aggregations:{customText:{type:"sap.m.Link",multiple:false},customDescription:{type:"sap.m.Link",multiple:false},buttons:{type:"sap.m.Button",multiple:true},_internalHeader:{type:"sap.m.Bar",multiple:false,visibility:"hidden"},_formattedText:{type:"sap.m.FormattedText",multiple:false,visibility:"hidden"},_text:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_description:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_icon:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{navButtonPress:{}},designtime:"sap/m/designtime/MessagePage.designtime"},renderer:l});f.ARIA_ROLE_DESCRIPTION="MESSAGE_PAGE_ROLE_DESCRIPTION";f.prototype.init=function(){var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");this._oTitle=null;this._oNavButton=new a(this.getId()+"-navButton",{type:h.Back,press:jQuery.proxy(function(){this.fireNavButtonPress()},this)});this.setAggregation("_internalHeader",new p(this.getId()+"-intHeader",{design:y.Header}));this.setProperty("text",t.getText("MESSAGE_PAGE_TEXT"),true);this.setProperty("description",t.getText("MESSAGE_PAGE_DESCRIPTION"),true);this._sAriaRoleDescription=t.getText(f.ARIA_ROLE_DESCRIPTION)};f.prototype.exit=function(){if(this._oNavButton){this._oNavButton.destroy();this._oNavButton=null}};f.prototype.setTitle=function(t){this.setProperty("title",t,true);this._getTitle().setText(t);return this};f.prototype.setTitleLevel=function(t){this.setProperty("titleLevel",t,true);this._getTitle().setLevel(t);return this};f.prototype.setText=function(t){this.setProperty("text",t,true);var e=this.getAggregation("_text");e&&e.setText(t);return this};f.prototype.setDescription=function(t){this.setProperty("description",t,true);var e=this.getAggregation("_formattedText"),i=this.getAggregation("_description");e&&e.setHtmlText(t);i&&i.setText(t);return this};f.prototype.setShowNavButton=function(t){this.setProperty("showNavButton",t,true);var e=this._getInternalHeader();if(t){e.addContentLeft(this._oNavButton)}else{e.removeAllContentLeft()}return this};f.prototype.setIcon=function(t){this.setProperty("icon",t,true);var e=this.getAggregation("_icon");e&&e.setSrc(t);return this};f.prototype.setEnableFormattedText=function(t){var e;if(t){e=this._getFormattedText();e.setHtmlText(this.getDescription())}return this.setProperty("enableFormattedText",t)};f.prototype._getIconControl=function(){var t=this.getAggregation("_icon");if(t){t.destroy()}t=r.createControlByURI({id:this.getId()+"-pageIcon",src:this.getIcon(),height:"8rem",width:"8rem",useIconTooltip:true,decorative:false,alt:this.getIconAlt()},n).addStyleClass("sapMMessagePageIcon");this.setAggregation("_icon",t,true);return t};f.prototype._getText=function(){if(this.getAggregation("customText")){return this.getAggregation("customText")}if(!this.getAggregation("_text")){var t=new o(this.getId()+"-text",{id:this.getId()+"-customText",text:s.escapeSettingsValue(this.getText()),textAlign:c.Center,textDirection:this.getTextDirection()});this.setAggregation("_text",t)}return this.getAggregation("_text")};f.prototype._getTitle=function(){if(!this._oTitle){this._oTitle=new g(this.getId()+"-title",{level:this.getTitleLevel()});this._getInternalHeader().addContentMiddle(this._oTitle)}return this._oTitle};f.prototype._getDescription=function(){if(this.getAggregation("customDescription")){return this.getAggregation("customDescription")}if(this.getEnableFormattedText()){return this._getFormattedText()}if(!this.getAggregation("_description")){var t=new o(this.getId()+"-description",{id:this.getId()+"-customDescription",text:s.escapeSettingsValue(this.getDescription()),textAlign:c.Center,textDirection:this.getTextDirection()});this.setAggregation("_description",t)}return this.getAggregation("_description")};f.prototype._getAnyHeader=function(){return this._getInternalHeader()};f.prototype._getInternalHeader=function(){return this.getAggregation("_internalHeader")};f.prototype._getFormattedText=function(){var t=this.getAggregation("_formattedText");if(!t){t=new u(this.getId()+"-formattedText");this.setAggregation("_formattedText",t)}return t};return f});
//# sourceMappingURL=MessagePage.js.map