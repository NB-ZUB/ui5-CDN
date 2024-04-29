sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function t(e,t,a){return(0,i.html)`${this.showSuggestions?s.call(this,e,t,a):undefined}${this.hasValueStateMessage?D.call(this,e,t,a):undefined} `}function s(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-responsive-popover",t,s)} class="${(0,i.classMap)(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${(0,i.styleMap)(this.styles.suggestionsPopover)}" @ui5-after-open="${(0,i.ifDefined)(this._afterOpenPopover)}" @ui5-after-close="${(0,i.ifDefined)(this._afterClosePopover)}" @ui5-scroll="${(0,i.ifDefined)(this._scroll)}">${this._isPhone?a.call(this,e,t,s):undefined}${!this._isPhone?p.call(this,e,t,s):undefined}<${(0,i.scopeTag)("ui5-list",t,s)} separators="${(0,i.ifDefined)(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${(0,i.repeat)(this.suggestionObjects,(e,i)=>e._id||i,(i,a)=>f.call(this,e,t,s,i,a))}</${(0,i.scopeTag)("ui5-list",t,s)}>${this._isPhone?m.call(this,e,t,s):undefined}</${(0,i.scopeTag)("ui5-responsive-popover",t,s)}>`:(0,i.html)`<ui5-responsive-popover class="${(0,i.classMap)(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${(0,i.styleMap)(this.styles.suggestionsPopover)}" @ui5-after-open="${(0,i.ifDefined)(this._afterOpenPopover)}" @ui5-after-close="${(0,i.ifDefined)(this._afterClosePopover)}" @ui5-scroll="${(0,i.ifDefined)(this._scroll)}">${this._isPhone?a.call(this,e,t,s):undefined}${!this._isPhone?p.call(this,e,t,s):undefined}<ui5-list separators="${(0,i.ifDefined)(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${(0,i.repeat)(this.suggestionObjects,(e,i)=>e._id||i,(i,a)=>f.call(this,e,t,s,i,a))}</ui5-list>${this._isPhone?m.call(this,e,t,s):undefined}</ui5-responsive-popover>`}function a(e,t,s){return s?(0,i.html)`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${(0,i.ifDefined)(this._headerTitleText)}</span><${(0,i.scopeTag)("ui5-button",t,s)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${(0,i.scopeTag)("ui5-button",t,s)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${(0,i.scopeTag)("ui5-input",t,s)} class="ui5-input-inner-phone" type="${(0,i.ifDefined)(this.inputType)}" .value="${(0,i.ifDefined)(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${(0,i.ifDefined)(this.placeholder)}" @ui5-input="${(0,i.ifDefined)(this._handleInput)}" @ui5-change="${(0,i.ifDefined)(this._handleChange)}"></${(0,i.scopeTag)("ui5-input",t,s)}></div></div>${this.hasValueStateMessage?n.call(this,e,t,s):undefined}</div>`:(0,i.html)`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${(0,i.ifDefined)(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${(0,i.ifDefined)(this.inputType)}" .value="${(0,i.ifDefined)(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${(0,i.ifDefined)(this.placeholder)}" @ui5-input="${(0,i.ifDefined)(this._handleInput)}" @ui5-change="${(0,i.ifDefined)(this._handleChange)}"></ui5-input></div></div>${this.hasValueStateMessage?n.call(this,e,t,s):undefined}</div>`}function n(e,t,s){return s?(0,i.html)`<div class="${(0,i.classMap)(this.classes.popoverValueState)}" style="${(0,i.styleMap)(this.styles.suggestionPopoverHeader)}"><${(0,i.scopeTag)("ui5-icon",t,s)} class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></${(0,i.scopeTag)("ui5-icon",t,s)}>${this.shouldDisplayDefaultValueStateMessage?o.call(this,e,t,s):l.call(this,e,t,s)}</div>`:(0,i.html)`<div class="${(0,i.classMap)(this.classes.popoverValueState)}" style="${(0,i.styleMap)(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?o.call(this,e,t,s):l.call(this,e,t,s)}</div>`}function o(e,t,s){return(0,i.html)`${(0,i.ifDefined)(this.valueStateText)}`}function l(e,t,s){return(0,i.html)`${(0,i.repeat)(this.valueStateMessageText,(e,i)=>e._id||i,(i,a)=>u.call(this,e,t,s,i,a))}`}function u(e,t,s,a,n){return(0,i.html)`${(0,i.ifDefined)(a)}`}function p(e,t,s){return(0,i.html)`${this.hasValueStateMessage?r.call(this,e,t,s):undefined}`}function r(e,t,s){return s?(0,i.html)`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${(0,i.classMap)(this.classes.popoverValueState)}" style=${(0,i.styleMap)(this.styles.suggestionPopoverHeader)}><${(0,i.scopeTag)("ui5-icon",t,s)} class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></${(0,i.scopeTag)("ui5-icon",t,s)}>${this.shouldDisplayDefaultValueStateMessage?c.call(this,e,t,s):d.call(this,e,t,s)}</div>`:(0,i.html)`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${(0,i.classMap)(this.classes.popoverValueState)}" style=${(0,i.styleMap)(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?c.call(this,e,t,s):d.call(this,e,t,s)}</div>`}function c(e,t,s){return(0,i.html)`${(0,i.ifDefined)(this.valueStateText)}`}function d(e,t,s){return(0,i.html)`${(0,i.repeat)(this.valueStateMessageText,(e,i)=>e._id||i,(i,a)=>h.call(this,e,t,s,i,a))}`}function h(e,t,s,a,n){return(0,i.html)`${(0,i.ifDefined)(a)}`}function f(e,t,s,a,n){return(0,i.html)`${a.groupItem?$.call(this,e,t,s,a,n):v.call(this,e,t,s,a,n)}`}function $(e,t,s,a,n){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-li-groupheader",t,s)} data-ui5-key="${(0,i.ifDefined)(a.key)}">${(0,i.unsafeHTML)(a.text)}</${(0,i.scopeTag)("ui5-li-groupheader",t,s)}>`:(0,i.html)`<ui5-li-groupheader data-ui5-key="${(0,i.ifDefined)(a.key)}">${(0,i.unsafeHTML)(a.text)}</ui5-li-groupheader>`}function v(e,t,s,a,n){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-li-suggestion-item",t,s)} wrapping-type="Normal" image="${(0,i.ifDefined)(a.image)}" icon="${(0,i.ifDefined)(a.icon)}" additional-text="${(0,i.ifDefined)(a.additionalText)}" type="${(0,i.ifDefined)(a.type)}" additional-text-state="${(0,i.ifDefined)(a.additionalTextState)}" data-ui5-key="${(0,i.ifDefined)(a.key)}">${(0,i.unsafeHTML)(a.text)}${a.description?g.call(this,e,t,s,a,n):undefined}</${(0,i.scopeTag)("ui5-li-suggestion-item",t,s)}>`:(0,i.html)`<ui5-li-suggestion-item wrapping-type="Normal" image="${(0,i.ifDefined)(a.image)}" icon="${(0,i.ifDefined)(a.icon)}" additional-text="${(0,i.ifDefined)(a.additionalText)}" type="${(0,i.ifDefined)(a.type)}" additional-text-state="${(0,i.ifDefined)(a.additionalTextState)}" data-ui5-key="${(0,i.ifDefined)(a.key)}">${(0,i.unsafeHTML)(a.text)}${a.description?g.call(this,e,t,s,a,n):undefined}</ui5-li-suggestion-item>`}function g(e,t,s,a,n){return(0,i.html)`<span slot="richDescription">${(0,i.unsafeHTML)(a.description)}</span>`}function m(e,t,s){return s?(0,i.html)`<div slot="footer" class="ui5-responsive-popover-footer"><${(0,i.scopeTag)("ui5-button",t,s)} design="Transparent" @click="${this._closeRespPopover}">OK</${(0,i.scopeTag)("ui5-button",t,s)}></div>`:(0,i.html)`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`}function D(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-popover",t,s)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${(0,i.ifDefined)(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${(0,i.classMap)(this.classes.popoverValueState)}" style="${(0,i.styleMap)(this.styles.popoverHeader)}"><${(0,i.scopeTag)("ui5-icon",t,s)} class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></${(0,i.scopeTag)("ui5-icon",t,s)}>${this.shouldDisplayDefaultValueStateMessage?y.call(this,e,t,s):T.call(this,e,t,s)}</div></${(0,i.scopeTag)("ui5-popover",t,s)}>`:(0,i.html)`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${(0,i.ifDefined)(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${(0,i.classMap)(this.classes.popoverValueState)}" style="${(0,i.styleMap)(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${(0,i.ifDefined)(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?y.call(this,e,t,s):T.call(this,e,t,s)}</div></ui5-popover>`}function y(e,t,s){return(0,i.html)`${(0,i.ifDefined)(this.valueStateText)}`}function T(e,t,s){return(0,i.html)`${(0,i.repeat)(this.valueStateMessageText,(e,i)=>e._id||i,(i,a)=>M.call(this,e,t,s,i,a))}`}function M(e,t,s,a,n){return(0,i.html)`${(0,i.ifDefined)(a)}`}var _=t;e.default=_});
//# sourceMappingURL=InputPopoverTemplate.lit.js.map