/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/testrecorder/interaction/Commands"],function(e,t){"use strict";var n=null;var r=e.extend("sap.ui.testrecorder.codeSnippets.POMethodUtil",{constructor:function(){if(!n){e.apply(this,arguments)}else{return n}}});r.prototype.getPOMethod=function(e,t,n){if(t&&t.formatAsPOMethod){var r=e.map(function(e){return e.replace(/^/gm,"    ")}).join("\n\n");if(n){return this._getMethodName(t)+": async () => {\n"+r+"\n}"}else{return this._getMethodName(t)+": function () {\n"+r+"\n}"}}else{return e.join("\n\n")}};r.prototype._getMethodName=function(e){if(e.multipleSnippets){switch(e.action){case t.PRESS:case t.ENTER_TEXT:return"iInteractWithTheControls";default:return"iAssertTheUIState"}}else{switch(e.action){case t.PRESS:return"iPressTheControl";case t.ENTER_TEXT:return"iEnterTextInTheControl";default:return"iAssertTheControlState"}}};n=new r;return n});
//# sourceMappingURL=POMethodUtil.js.map