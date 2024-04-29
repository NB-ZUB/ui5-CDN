/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/thirdparty/adaptivecards","sap/ui/integration/cards/adaptivecards/overwrites/inputsGeneralOverwrites"],function(e,t){"use strict";function n(){e.TimeInput.apply(this,arguments)}var i="HH:mm";n.prototype=Object.create(e.TimeInput.prototype);n.prototype.overrideInternalRender=function(){var n=e.TextInput.prototype.overrideInternalRender.call(this,arguments);t.overwriteLabel(this);t.overwriteRequired(this);return n};n.prototype.internalRender=function(){var e="ui5-time-picker";this._timeInputElement=document.createElement(e);this._timeInputElement.id=this.id;this._timeInputElement.value=this.defaultValue||"";this._timeInputElement.formatPattern=i;t.createValueStateElement(this,this._timeInputElement);this._timeInputElement.addEventListener("input",function(e){this.valueChanged()}.bind(this));return this._timeInputElement};n.prototype.updateInputControlAriaLabelledBy=function(){t.overwriteAriaLabelling(this,"aria-labelledby")};n.prototype.showValidationErrorMessage=function(){if(this.renderedInputControlElement){this.renderedInputControlElement.valueState="Error"}};n.prototype.resetValidationFailureCue=function(){e.TextInput.prototype.resetValidationFailureCue.call(this,arguments);if(this.renderedInputControlElement){this.renderedInputControlElement.valueState="None"}};return n});
//# sourceMappingURL=UI5InputTime.js.map