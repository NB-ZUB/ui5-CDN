/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};var t={};var n={};e.registerTypes=function(e){Object.keys(e).forEach(function(r){if(!t[r]){t[r]=new Promise(function(t,n){sap.ui.require([e[r]],t,n)}).then(function(e){n[e.getMetadata().getName()]=e;return e})}});return Promise.all(Object.values(t)).then(function(){return n})};e.deregisterType=function(e){if(t[e]){delete t[e]}};e.deregisterAllTypes=function(){t={}};e.create=function(e){return new Promise(function(n,r){if(!e){r("No editor type was specified in the property configuration.");return}if(!t[e]){r("Editor type was not registered");return}t[e].then(function(e){return n(new e)}).catch(function(e){return r(e)})})};e.getByClassName=function(e){return n[e]};e.getTypes=function(){return Object.assign({},t)};e.hasType=function(t){return Object.keys(e.getTypes()).includes(t)};return e});
//# sourceMappingURL=PropertyEditorFactory.js.map