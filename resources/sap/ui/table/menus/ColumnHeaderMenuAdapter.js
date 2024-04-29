/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../utils/TableUtils","sap/ui/base/Object","sap/ui/base/EventProvider","sap/ui/base/ManagedObjectObserver"],function(e,t,n,r){"use strict";var o=new window.Map;var i={default:"LegacyColumnMenuAdapter","sap.m.table.columnmenu.Menu":"MobileColumnHeaderMenuAdapter","sap.ui.table.test.Menu":"test/TestAdapter"};var u=t.extend("sap.ui.table.menus.ColumnHeaderMenuAdapter",{constructor:function(){t.apply(this,arguments);this._mInjectionTarget=null;this._oColumnHeaderMenuObserver=new r(function(e){this.onAfterMenuDestroyed(e.object)}.bind(this))}});u.activateFor=function(t){var n=t.getHeaderMenuInstance();var r=a(n);var i;if(!r||!t._getTable()){return Promise.resolve()}o.forEach(function(e,n){if(n!==r){c(t,n)}});if(!o.has(r)){i={adapter:s(r).then(function(n){i=o.get(r);i.adapter=new n;i.adapter._injectMenuItems(i.activeFor.getHeaderMenuInstance(),i.activeFor);if(r==="LegacyColumnMenuAdapter"){e.Hook.register(t._getTable(),e.Hook.Keys.Table.InvalidateColumnMenus,i.adapter._invalidateAllMenus,i.adapter)}}),columns:[t],activeFor:t};o.set(r,i)}else{i=o.get(r);i.activeFor=t;if(!i.columns.includes(t)){i.columns.push(t)}}if(i.adapter instanceof Promise){return i.adapter}i.adapter._injectMenuItems(n,t);return Promise.resolve()};u.unlink=function(e){c(e)};u.prototype._injectMenuItems=function(e,t){this._removeMenuItems();this._oColumnHeaderMenuObserver.observe(e,{destroy:true});this.injectMenuItems(e,t);this._mInjectionTarget={column:t,menu:e}};u.prototype._removeMenuItems=function(){if(!this._mInjectionTarget){return}this.removeMenuItems(this._mInjectionTarget.menu);this._mInjectionTarget=null};u.prototype.injectMenuItems=function(e,t){};u.prototype.removeMenuItems=function(e){};u.prototype.onAfterMenuDestroyed=function(e){};u.prototype.destroy=function(){t.prototype.destroy.apply(this,arguments);this._removeMenuItems();this._oColumnHeaderMenuObserver.disconnect();delete this._oColumnHeaderMenuObserver};function s(e){return new Promise(function(t,n){sap.ui.require(["sap/ui/table/menus/"+e],function(e){t(e)},function(e){n(e)})})}function a(t){for(var n in i){if(e.isA(t,n)){return i[n]}}return i.default}function c(e,t){var n;if(t){n=o.get(t)}else{o.forEach(function(r,o){if(r.columns.includes(e)){n=r;t=o}})}if(!n){return}if(n.adapter instanceof Promise){n.adapter.then(function(){c(e,t)})}else{if(n.columns.includes(e)){n.columns.splice(n.columns.indexOf(e),1)}if(n.columns.length===0){n.adapter.destroy();o.delete(t)}}}return u});
//# sourceMappingURL=ColumnHeaderMenuAdapter.js.map