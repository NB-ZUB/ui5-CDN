sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i,e){"use strict";Object.defineProperty(i,"__esModule",{value:true});i.default=void 0;function t(i,t,a){return a?(0,e.html)`<div id="${(0,e.ifDefined)(this._id)}" class="ui5-time-picker-root"><${(0,e.scopeTag)("ui5-input",t,a)} id="${(0,e.ifDefined)(this._id)}-inner" value="${(0,e.ifDefined)(this.value)}" placeholder="${(0,e.ifDefined)(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${(0,e.ifDefined)(this.valueState)}" ._inputAccInfo="${(0,e.ifDefined)(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${(0,e.ifDefined)(this._handleInputChange)}" @ui5-input="${(0,e.ifDefined)(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?n.call(this,i,t,a):undefined}${!this.readonly?s.call(this,i,t,a):undefined}</${(0,e.scopeTag)("ui5-input",t,a)}></div>`:(0,e.html)`<div id="${(0,e.ifDefined)(this._id)}" class="ui5-time-picker-root"><ui5-input id="${(0,e.ifDefined)(this._id)}-inner" value="${(0,e.ifDefined)(this.value)}" placeholder="${(0,e.ifDefined)(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${(0,e.ifDefined)(this.valueState)}" ._inputAccInfo="${(0,e.ifDefined)(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${(0,e.ifDefined)(this._handleInputChange)}" @ui5-input="${(0,e.ifDefined)(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?n.call(this,i,t,a):undefined}${!this.readonly?s.call(this,i,t,a):undefined}</ui5-input></div>`}function n(i,t,n){return(0,e.html)`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function s(i,t,n){return n?(0,e.html)`<${(0,e.scopeTag)("ui5-icon",t,n)} slot="icon" name="${(0,e.ifDefined)(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></${(0,e.scopeTag)("ui5-icon",t,n)}>`:(0,e.html)`<ui5-icon slot="icon" name="${(0,e.ifDefined)(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></ui5-icon>`}var a=t;i.default=a});
//# sourceMappingURL=TimePickerTemplate.lit.js.map