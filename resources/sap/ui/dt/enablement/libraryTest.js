/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/model/resource/ResourceModel","sap/ui/model/json/JSONModel"],function(e,t,n){"use strict";var i=[];var r=[];var a={};var s;function o(e,t){return t.hasText(e)||t.getText(e,[],true)!==undefined}var u=function(o){return new Promise(function(u){e.load({name:o}).then(function(l){var d=l.controls.concat(l.elements);s=o;sap.ui.require(d.map(function(e){return e.replace(/\./g,"/")}),function(...s){var l=e.all();try{var d=new t({bundleUrl:sap.ui.require.toUrl(o,"messagebundle.properties"),bundleLocale:"en"});var f=new t({bundleUrl:sap.ui.require.toUrl(`${o}.designtime`,"messagebundle.properties"),bundleLocale:"en"});a.runtime=d.getResourceBundle();a.designtime=f.getResourceBundle();Object.keys(l).forEach(function(e){if(o!==e){d.enhance({bundleUrl:sap.ui.require.toUrl(e,"messagebundle.properties"),bundleLocale:"en"});f.enhance({bundleUrl:sap.ui.require.toUrl(`${e}.designtime`,"messagebundle.properties"),bundleLocale:"en"})}})}catch(e){}var p=[];var m=[];for(var g=0;g<s.length;g++){if(s[g].getMetadata()._oDesignTime){p.push(s[g].getMetadata().loadDesignTime());m.push(s[g].getMetadata())}}Promise.all(p).then(function(e){var t=0;i=e;r=i.map(function(e){var i=new n(e);i._oControlMetadata=m[t];t++;return i});c();u()})})})})};u.version=2;var l={"/":{optional:false,check(e,t,n){e.strictEqual(typeof t,"object",`${n} is an object`)}},"/designtimeModule":{optional:false,check(e,t,n){e.strictEqual(typeof t,"string",`${n} defines /designtimeModule : ${t}`)}},"/actions":{optional:true,check(e,t,n){Object.keys(t).forEach(function(i){if(t[i].changeType){e.strictEqual(typeof t[i].changeType,"string",`${n} defines ${i} with changetype:${t[i].changeType}`)}else if(typeof t[i]==="string"){e.strictEqual(typeof t[i],"string",`${n} defines ${i} as string`)}else if(i==="settings"&&typeof t[i]==="object"){l["/actions"].check(e,t[i],n)}else{e.strictEqual(typeof t[i],"function",`${n} defines ${i} as function`)}})}},"/name":{optional:true,check(e,t,n){if(typeof t==="string"&&t.indexOf("{")===0&&t.indexOf("}")===t.length-1){return true}var i=["singular","plural"];i.forEach(function(i){if(typeof t[i]==="function"){e.strictEqual(typeof t[i],"function",`${n} defines mandatory entry /name/${i}`)}else{e.strictEqual(typeof t[i],"string",`${n} defines mandatory entry /name/${i}`)}});i.forEach(function(i){var r=false;if(typeof t[i]==="function"){e.strictEqual(typeof t[i],"function",`${n} defines function for translation of entry /name/${i}`);e.strictEqual(typeof t[i](),"string",`Assuming that ${i} with ${t[i].toString()} returns a translation at runtime`);return}if(t[i].toUpperCase()!==t[i]){e.ok(true,`Assuming that ${i} with ${t[i]} needs currently no translation`);return}if(a.designtime){r=o(t[i],a.designtime);e.strictEqual(r,true,`${t[i]} found in designtime message bundle`)}if(a.runtime){if(r){e.strictEqual(o(t[i],a.runtime),false,`${t[i]} found in runtime message bundle and designtime message bundle, please delete the entry from the runtime message bundle (messagebundle.properties + messagebundle_en.properties)`)}else{e.strictEqual(o(t[i],a.runtime),true,`${t[i]} found in runtime message bundle only, consider to move this text to the designtime message bundle`)}}});return undefined}},"/palette":{optional:true,check(e,t,n){var i=["ACTION","DISPLAY","LAYOUT","LIST","INPUT","CONTAINER","CHART","TILE","DIALOG"];e.strictEqual(typeof t,"object",`${n} defines optional entry /palette/`);e.strictEqual(i.indexOf(t.group)>-1,true,`palette entry defines valid group ${t.group}`);if(t.icons){return Promise.all(Object.keys(t.icons).map(function(n){var i=t.icons[n];e.strictEqual(typeof i,"string",`palette/icons/${n} entry defines icon path ${i}`);return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",`${sap.ui.require.toUrl(i)}`,true);r.onload=function(){if(r.readyState===4){if(r.status===200){if(i.indexOf(".svg")===i.length-4){e.equal(r.responseXML.documentElement&&r.responseXML.documentElement.tagName,"svg",`File ${i} starts with a svg node`)}t()}else{n()}}};r.send()})}))}return undefined}},"/templates":{optional:true,check(e,t){if(t.create){var n=t.create;e.strictEqual(typeof n,"string",`templates/create entry defines fragment path to ${n}`);return new Promise(function(t,i){var r=new XMLHttpRequest;r.open("GET",`${sap.ui.require.toUrl(n)}`,true);r.onload=function(){if(r.readyState===4){if(r.status===200){e.ok(r.responseXML.documentElement&&r.responseXML.documentElement.localName==="FragmentDefinition",`File ${n} exists and starts with a FragmentDefinition node`);t()}else{i()}}};r.send()})}return undefined}}};function c(){QUnit.test("Checking library.designtime.js",function(t){var n=e.all()[s];if(n.designtime){var i=t.async();sap.ui.require([n.designtime],function(e){t.ok(e!==null,`${n.designtime} loaded successfully`);i()})}else{t.ok(true,`No library.designtime.js ${s}`)}});QUnit.test("Checking loaded designtime data",function(e){i.forEach(function(t){e.strictEqual(t!==null,true,"Designtime data found and loaded successful");e.strictEqual(typeof t,"object","Designtime data returned an object")})});r.forEach(function(e){var t=e._oControlMetadata;var n=t.getName();QUnit.test(`${n}: Checking entries in designtime data`,function(t){return Promise.all(Object.keys(l).map(function(i){var r=l[i];var a=e.getProperty(i);if(a===undefined&&!r.optional){t.equal(false,true,`${n} does not define mandatory entry ${i}`);return Promise.resolve()}else if(a!==undefined&&r.optional){t.equal(true,true,`${n} does define optional entry ${i}`);return r.check(t,a,n)}else if(a!==undefined&&!r.optional){t.equal(true,true,`${n} does define mandatory entry ${i}`);return r.check(t,a,n)}return undefined}))})})}return u},true);
//# sourceMappingURL=libraryTest.js.map