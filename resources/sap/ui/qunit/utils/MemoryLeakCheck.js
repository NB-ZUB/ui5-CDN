/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ElementRegistry","sap/ui/core/Control","sap/ui/qunit/utils/nextUIUpdate"],function(e,t,n){"use strict";if(typeof QUnit==="undefined"){sap.ui.requireSync("sap/ui/qunit/qunit-css");sap.ui.requireSync("sap/ui/thirdparty/qunit");sap.ui.requireSync("sap/ui/qunit/qunit-junit");sap.ui.requireSync("sap/ui/qunit/qunit-coverage")}QUnit.config.reorder=false;var o={};function a(){return e.all()}var r=function(e){var t=e.getMetadata().getAllProperties();for(var n in t){if(e.isPropertyInitial(n)){var o=t[n];try{e[o._sMutator]("dummyValueForMemLeakTest")}catch(e){}}}if(!e.getTooltip()){e.setTooltip("test")}};var i=function(e,o,i,l){QUnit.test("Control "+e+" should not have any memory leaks",async function(e){var u=o();e.ok(u,"calling fnControlFactory() should return something (a control)");e.ok(u instanceof t,"calling fnControlFactory() should return something that is really instanceof sap.ui.core.Control");if(u.placeAt&&!l){try{u.getMetadata().getRenderer()}catch(t){e.ok(false,"Error: control does not have a renderer. If this is known, please set the 'bControlCannotRender' flag when calling MemoryLeakCheck.checkControl")}}r(u);if(u.placeAt&&!l){try{u.placeAt("qunit-fixture");await n()}catch(t){e.ok(false,"Error: control has a renderer, but could not be rendered. If this is known, please set the 'bControlCannotRender' flag when calling MemoryLeakCheck.checkControl");throw t}}if(i){i(u);await n()}u.destroy();await n();var s=a(),f=o();r(f);if(f.placeAt&&!l){f.placeAt("qunit-fixture");await n();f.rerender()}if(i){i(f);await n()}f.destroy();await n();var d=a();c(e,d,s,"Memory leak check should not find any leftover controls after creating two instances and rendering twice"+(i?"\n(and calling fnSomeAdditionalFunction)":""))})};var c=function(e,t,n,o){var a=[];for(var r in t){if(!n[r]){a.push(t[r])}}for(var i=0;i<a.length;i++){if(typeof a[i].getText==="function"){a[i]+=" (text: '"+a[i].getText()+"')"}}o=o+(a.length>0?". LEFTOVERS: "+a.join(", "):"");e.equal(a.length,0,o)};o.checkControl=function(t,n,o,r){if(typeof t!=="string"){r=o;o=n;n=t;t="[some control, id: "+Math.random()+" - please update your test to also pass the control name]"}if(o===true||o===false){r=o;o=undefined}var c;QUnit.module("MemoryLeakCheck.checkControl: "+t,{beforeEach:function(){c=a()},afterEach:function(t){e.forEach(function(e,n){if(!c[n]){t.ok(e.getMetadata().getName(),"Cleanup of id: "+n+", control: "+e.getMetadata().getName());e.destroy()}})}});QUnit.test("MemoryLeakCheck.checkControl(fnControlFactory) should receive a control factory",function(e){e.equal(typeof n,"function","MemoryLeakCheck should have received a control factory");e.ok(document.getElementById("qunit-fixture"),"the test page HTML should contain an element with ID 'qunit-fixture'")});i(t,n,o,r)};return o},true);
//# sourceMappingURL=MemoryLeakCheck.js.map