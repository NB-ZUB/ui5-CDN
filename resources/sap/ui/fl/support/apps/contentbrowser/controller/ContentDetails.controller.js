/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/Dialog","sap/m/Text","sap/m/Button","sap/m/Input","sap/ui/fl/support/apps/contentbrowser/lrepConnector/LRepConnector","sap/ui/fl/support/apps/contentbrowser/utils/DataUtils","sap/ui/fl/Layer","sap/m/library","sap/ui/model/json/JSONModel","sap/ui/core/UIComponent","sap/ui/core/Element"],function(e,t,n,a,i,o,s,r,l,c,d,p){"use strict";var{ButtonType:u}=l;return e.extend("sap.ui.fl.support.apps.contentbrowser.controller.ContentDetails",{oSelectedContentModel:undefined,oDataUtils:s,onInit(){this._initAndBindSelectedContentModel();var e=d.getRouterFor(this);e.getRoute("ContentDetails").attachMatched(this._onRouteMatched,this);e.getRoute("ContentDetailsFlip").attachMatched(this._onRouteMatched,this)},_initAndBindSelectedContentModel(){this.oSelectedContentModel=new c;this.getView().setModel(this.oSelectedContentModel,"selectedContent")},_onRouteMatched(e){var t=this;var n=e.getParameter("arguments");var a={};a.layer=n.layer;a.namespace=decodeURIComponent(n.namespace);a.fileName=n.fileName;a.fileType=n.fileType;if(a.namespace[a.namespace.length-1]!=="/"){a.namespace+="/"}var i=`${a.namespace+a.fileName}.${a.fileType}`;var s=t.getView().getContent()[0];s.setBusy(true);return o.getContent(a.layer,i,null,null,true).then(t._onContentReceived.bind(t,a,s,i),function(){s.setBusy(false)})},_onContentReceived(e,t,n,a){var i=this;e.data=s.formatData(a,e.fileType);if(e.fileType){return o.getContent(e.layer,n,true).then(i._onContentMetadataReceived.bind(i,e,t),function(){t.setBusy(false)})}return Promise.resolve()},_onContentMetadataReceived(e,t,n){e.metadata=n;this.oSelectedContentModel.setData(e);e.metadata.some(function(e){if(e.name==="layer"){if(e.value==="CUSTOMER"){this.getView().byId("activeVersionCheckBox").setVisible(true)}else{this.getView().byId("activeVersionCheckBox").setVisible(false)}return true}}.bind(this));var a=this.getView().createId("contentDetailsIconTabBar");var i=p.getElementById(a);if(i){var o=i.getItems()[0];if(i.getSelectedKey()!==o.getId()){i.setSelectedItem(o)}}t.setBusy(false)},onEditClicked(){var e=this.getView().getModel("selectedContent");var t=e.getData();var n=d.getRouterFor(this);n.navTo("ContentDetailsEdit",{layer:t.layer,namespace:encodeURIComponent(t.namespace),fileName:t.fileName,fileType:t.fileType})},onDeleteClicked(){var e=this;var i=new t({title:"{i18n>confirmDeletionTitle}",type:"Message",content:new n({text:"{i18n>questionFileDeletion}"}),beginButton:new a({text:"{i18n>confirm}",type:u.Reject,press(){i.close();e._selectTransportAndDeleteFile()}}),endButton:new a({text:"{i18n>cancel}",press(){i.close()}}),afterClose(){i.destroy()}});this.getView().addDependent(i);i.open()},_selectTransportAndDeleteFile(){var e=this;var o=this.getView().getModel("selectedContent");var s=this.getView().byId("activeVersionCheckBox").getSelected();var l=o.getData();var c=l.layer;var d="";var p;var m;var f;l.metadata.some(function(e){if(e.name==="layer"){d=e.value;return true}});l.metadata.some(function(e){if(e.name==="transportId"){p=e.value;return true}});try{m=JSON.parse(l.data).packageName}catch(e){}var v=l.namespace;var h=l.fileName;var y=l.fileType;if(d===r.USER||d==="LOAD"||d==="VENDOR_LOAD"||!p&&(!m||m==="$TMP")){f=undefined;e._deleteFile(d,v,h,y,f,c,s)}else if(p==="ATO_NOTIFICATION"){f=p;e._deleteFile(d,v,h,y,f,c,s)}else{var C=new i({placeholder:"Transport ID or ATO_NOTIFICATION"});var g=new t({title:"{i18n>transportInput}",type:"Message",content:[new n({text:"{i18n>transportInputDescription}"}),C],beginButton:new a({text:"{i18n>confirm}",type:u.Accept,press(){f=C.getValue();g.close();e._deleteFile(d,v,h,y,f,c)}}),endButton:new a({text:"{i18n>cancel}",press(){g.close()}}),afterClose(){g.destroy()}});this.getView().addDependent(g);g.open()}},_deleteFile(e,t,n,a,i,s,r){return o.deleteFile(e,t,n,a,i,r).then(function(){var e=d.getRouterFor(this);e.navTo("LayerContentMaster",{layer:s,namespace:encodeURIComponent(t)})}.bind(this))}})});
//# sourceMappingURL=ContentDetails.controller.js.map