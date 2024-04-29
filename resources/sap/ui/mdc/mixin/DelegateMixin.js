/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/util/loadModules","sap/base/Log","sap/ui/mdc/BaseDelegate"],function(e,t,i){"use strict";const a=function(e){if(!e||!e.name){throw new Error("Delegate configuration '"+(e&&JSON.stringify(e))+"' invalid")}};const n=function(e){if(!this.bIsDestroyed){if(e instanceof Error){this.fnRejectDelegate(e)}else{this._oDelegate=e[0];this.fnResolveDelegate(this._oDelegate);this.bDelegateInitialized=true}}this.bDelegateLoading=false;delete this.fnResolveDelegate;delete this.fnRejectDelegate};const l={};l.init=function(e){return function(){this.bDelegateInitialized=false;this.bDelegateLoading=false;this._oDelegateInitialized=new Promise(function(e,t){this.fnResolveDelegate=e;this.fnRejectDelegate=t}.bind(this));if(e){e.apply(this,arguments)}}};l.applySettings=function(e){return function(t){e.apply(this,arguments);this._bDelegateLocked=true;return this}};l.setDelegate=function(e){return function(t){if(this._bDelegateLocked){throw new Error("Runtime delegate configuration is not permitted.")}a(t);e.call(this,t);this._oPayload=t&&t.payload;return this}};l.initControlDelegate=function(i){if(this.bIsDestroyed){t.warning("Delegate module initialization omitted as control is being destroyed.")}else if(!this._oDelegate&&!this.bDelegateLoading){if(i){n.call(this,[i])}else{const t=this.getDelegate();a(t);this.bDelegateLoading=true;e(t.name).then(n.bind(this)).catch(n.bind(this))}}return this._oDelegateInitialized};l.isControlDelegateInitialized=function(){return this.bDelegateInitialized};l.getPayload=function(){if(!this._oPayload){const e=this.getDelegate();this._oPayload=e&&e.payload}return this._oPayload};l.getTypeUtil=function(){return this.getTypeMap()};l.getTypeMap=function(){if(!this._oTypeMap){if(!this._oDelegate){throw new Error("A delegate instance providing a TypeMap is not (yet) available.")}this._oTypeMap=this._oDelegate.getTypeMap(this)}return this._oTypeMap};l.getControlDelegate=function(){if(!this._oDelegate){if(this.isDestroyed()){throw new Error("A delegate instance is not available. The object instance is destroyed.")}else{throw new Error("A delegate instance is not (yet) available. You must call initControlDelegate before calling getControlDelegate.")}}return this._oDelegate};l.awaitControlDelegate=function(){return this._oDelegateInitialized};l.exit=function(e){return function(){this.fnResolveDelegate=null;this.fnRejectDelegate=null;this.bDelegateInitialized=false;this.bDelegateLoading=false;this._oDelegateInitialized=null;this._oDelegate=null;this._oPayload=null;this._oTypeMap=null;if(e){e.apply(this,arguments)}}};return function(){this.applySettings=l.applySettings(this.applySettings);this.exit=l.exit(this.exit);this.init=l.init(this.init);this.setDelegate=l.setDelegate(this.setDelegate);this.awaitControlDelegate=l.awaitControlDelegate;this.isControlDelegateInitialized=l.isControlDelegateInitialized;this.getControlDelegate=l.getControlDelegate;this.getPayload=l.getPayload;this.getTypeUtil=l.getTypeUtil;this.getTypeMap=l.getTypeMap;this.initControlDelegate=l.initControlDelegate}});
//# sourceMappingURL=DelegateMixin.js.map