/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseFilter","sap/m/Select","sap/ui/core/ListItem","sap/ui/model/json/JSONModel","sap/ui/integration/util/BindingResolver","sap/base/util/merge"],function(e,t,i,a,l,r){"use strict";var s=e.extend("sap.ui.integration.cards.filters.SelectFilter",{metadata:{library:"sap.ui.integration",aggregations:{_select:{type:"sap.m.Select",multiple:false,visibility:"hidden"}}},renderer:{apiVersion:2}});s.prototype.exit=function(){e.prototype.exit.apply(this,arguments);if(this._oItemTemplate){this._oItemTemplate.destroy()}};s.prototype.getField=function(){return this._getSelect()};s.prototype.onDataChanged=function(){var e=this._getSelect();e.setSelectedKey(this.getValue().value);this._syncValue()};s.prototype.getValueForModel=function(){var e=this._getSelect().getSelectedItem();if(e){return{value:e.getKey(),selectedItem:{title:e.getText(),key:e.getKey()}}}return{value:this._getSelect().getSelectedKey()}};s.prototype.setValueFromOutside=function(e){this._getSelect().setSelectedKey(l.resolveValue(e,this.getCardInstance()));this._syncValue()};s.prototype.getStaticConfiguration=function(){var e=this.getConfig();var t="/";var i;var a=[];var s;if(e.item&&e.item.path){t=e.item.path}i=this.getModel().getProperty(t);if(e.item&&e.item.template){s=e.item.template;a=i.map(function(e,i){var a=t==="/"?t+i:t+"/"+i;return l.resolveValue(s,this,a)}.bind(this))}else{a=i}a=a.map(function(e){return{key:e.key&&e.key.toString(),title:e.title&&e.title.toString()}});var n=r({},e);delete n.item;n.items=a;n.value=this.getValueForModel().value;return n};s.prototype._getSelect=function(){var e=this.getAggregation("_select");if(!e){e=this._createSelect();this.setAggregation("_select",e)}return e};s.prototype._createSelect=function(){var e=new t,r=this.getCardInstance(),s,n,o="/",p=this.getConfig(),u=this.createLabel(p),c;e.attachChange(function(e){this._syncValue()}.bind(this));if(p&&p.item){o=p.item.path||o}if(p&&p.item&&p.item.template){s=p.item.template.key;n=p.item.template.title}if(p&&p.items){s="{key}";n="{title}";c=new a(p.items);c.setSizeLimit(r.getModelSizeLimit());this.setModel(c)}this._oItemTemplate=new i({key:s,text:n});e.bindItems({path:o,template:this._oItemTemplate});e.setSelectedKey(l.resolveValue(p.value,r));if(u){e.addAriaLabelledBy(u)}return e};return s});
//# sourceMappingURL=SelectFilter.js.map