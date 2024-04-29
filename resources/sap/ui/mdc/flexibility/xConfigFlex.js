/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/p13n/Engine","sap/ui/mdc/flexibility/Util","sap/ui/fl/changeHandler/condenser/Classification"],function(e,n,t){"use strict";const a={};const r=function(e,n){const t=function(n){if(e._pQueue===n){delete e._pQueue}};e._pQueue=e._pQueue instanceof Promise?e._pQueue.then(n):n();e._pQueue.then(t.bind(null,e._pQueue));return e._pQueue};a.createSetChangeHandler=function(a){if(!a||!a.hasOwnProperty("aggregation")||!a.hasOwnProperty("property")){throw new Error("Please provide a map containing the affected aggregation and property name!")}const o=a.aggregation;const g=a.property;const i=function(n,t,a){return r(t,function(){return e.getInstance().readXConfig(t,{propertyBag:a}).then(function(r){let i=null;if(r&&r.aggregations&&r.aggregations[o]&&r.aggregations[o][n.getContent().name]&&r.aggregations[o][n.getContent().name][g]){i=r.aggregations[o][n.getContent().name][g]}n.setRevertData({name:n.getContent().name,value:i});return e.getInstance().enhanceXConfig(t,{controlMeta:{aggregation:o},property:g,name:n.getContent().name,value:n.getContent().value,propertyBag:a})})})};const u=function(n,t,a){return e.getInstance().enhanceXConfig(t,{controlMeta:{aggregation:o},property:g,name:n.getRevertData().name,value:n.getRevertData().value,propertyBag:a}).then(function(){n.resetRevertData()})};return n.createChangeHandler({apply:i,revert:u,getCondenserInfo:function(e,n){return{classification:t.LastOneWins,affectedControl:e.getSelector(),uniqueKey:e.getContent().name+"_"+a.aggregation+"_"+a.property}}})};return a});
//# sourceMappingURL=xConfigFlex.js.map