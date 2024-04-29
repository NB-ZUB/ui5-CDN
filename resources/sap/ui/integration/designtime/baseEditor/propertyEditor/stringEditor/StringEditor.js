/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/base/util/restricted/_isNil","sap/base/util/isPlainObject"],function(t,e,i){"use strict";var a=t.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.stringEditor.StringEditor",{xmlFragment:"sap.ui.integration.designtime.baseEditor.propertyEditor.stringEditor.StringEditor",metadata:{library:"sap.ui.integration"},renderer:t.getMetadata().getRenderer().render});a.configMetadata=Object.assign({},t.configMetadata,{typeLabel:{defaultValue:"BASE_EDITOR.TYPES.STRING"},enabled:{defaultValue:true,mergeStrategy:"mostRestrictiveWins"},allowBindings:{defaultValue:true,mergeStrategy:"mostRestrictiveWins"}});a.prototype.getDefaultValidators=function(){var e=this.getConfig();return Object.assign({},t.prototype.getDefaultValidators.call(this),{isValidBinding:{type:"isValidBinding",isEnabled:e.allowBindings},notABinding:{type:"notABinding",isEnabled:!e.allowBindings},maxLength:{type:"maxLength",isEnabled:typeof e.maxLength==="number",config:{maxLength:e.maxLength}}})};a.prototype.setValue=function(a){if(!e(a)&&!i(a)){arguments[0]=a.toString()}t.prototype.setValue.apply(this,arguments)};a.prototype._onLiveChange=function(){var t=this.getContent();this.setValue(t.getValue())};return a});
//# sourceMappingURL=StringEditor.js.map