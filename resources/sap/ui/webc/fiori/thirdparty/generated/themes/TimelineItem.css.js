sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(i,t,o,e){"use strict";Object.defineProperty(i,"__esModule",{value:true});i.default=void 0;o=r(o);e=r(e);function r(i){return i&&i.__esModule?i:{default:i}}(0,t.registerThemePropertiesLoader)("@ui5/webcomponents-theming","sap_fiori_3",async()=>o.default);(0,t.registerThemePropertiesLoader)("@ui5/webcomponents-fiori","sap_fiori_3",async()=>e.default);const l={packageName:"@ui5/webcomponents-fiori",fileName:"themes/TimelineItem.css",content:':host(:not([hidden])){display:block}.ui5-tli-root{display:flex}:host([layout=Horizontal]) .ui5-tli-root{flex-direction:column}:host(:not([layout=Horizontal])) .ui5-tli-indicator{position:relative;width:2rem}:host([layout=Horizontal]) .ui5-tli-indicator{align-items:center;display:flex;height:2rem;position:relative}:host(:not([layout=Horizontal])) .ui5-tli-indicator:before{background-color:var(--sapContent_ForegroundBorderColor);bottom:var(--_ui5-v1-18-0_timeline_tli_indicator_before_bottom);content:"";display:inline-block;left:50%;position:absolute;top:2.125rem;width:1px}:host([layout=Horizontal]) .ui5-tli-indicator:before{background-color:var(--sapContent_ForegroundBorderColor);content:"";display:inline-block;height:1px;left:2.0625rem;position:absolute;right:var(--_ui5-v1-18-0_timeline_tli_indicator_before_right);top:50%}:host(:not([layout=Horizontal])) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:var(--_ui5-v1-18-0_timeline_tli_indicator_before_without_icon_bottom)}:host([layout=Horizontal]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{right:var(--_ui5-v1-18-0_timeline_tli_indicator_before_without_icon_right)}:host(:not([layout=Horizontal])):not([icon]) .ui5-tli-indicator:before{bottom:var(--_ui5-v1-18-0_timeline_tli_indicator_before_without_icon_bottom);top:1.875rem}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator:before{left:1.6875rem;right:var(--_ui5-v1-18-0_timeline_tli_indicator_before_without_icon_right);top:50%}:host(:not([layout=Horizontal])):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{bottom:var(--_ui5-v1-18-0_timeline_tli_indicator_before_bottom)}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{right:var(--_ui5-v1-18-0_timeline_tli_indicator_before_right)}:host(:not([icon])) .ui5-tli-indicator:after{background-color:var(--sapContent_NonInteractiveIconColor);border:1px solid var(--sapContent_NonInteractiveIconColor);border-radius:50%;box-sizing:border-box;content:"";display:inline-block;height:.375rem;left:51.75%;position:absolute;top:.9375rem;transform:translateX(-50%);width:.375rem}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator:after{left:.9625rem;top:.84rem}:host(:last-child) .ui5-tli-indicator:before{display:none}.ui5-tli-icon-outer{align-items:center;display:flex;height:1.625rem;justify-content:center;margin-top:.25rem;width:2rem}:host([layout=Horizontal]) .ui5-tli-icon-outer{height:1.3125rem;margin-top:0}.ui5-tli-icon{color:var(--sapContent_NonInteractiveIconColor);height:1.375rem;width:1.375rem}:host([layout=Horizontal]) .ui5-tli-dummy-icon-container{display:inline-block;height:1.375rem;outline:none;width:1.375rem}.ui5-tli-bubble{background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-18-0_TimelineItem_bubble_border_color);border-radius:var(--_ui5-v1-18-0_TimelineItem_bubble_border_radius);box-sizing:border-box;flex:1;margin-left:.5rem;padding:var(--_ui5-v1-18-0_TimelineItem_bubble_content_padding);position:relative}:host([layout=Horizontal]) .ui5-tli-bubble{margin-left:0;margin-top:.5rem}.ui5-tli-bubble:focus{outline:none}.ui5-tli-bubble:focus:after{border:var(--_ui5-v1-18-0_TimelineItem_bubble_border_width) var(--_ui5-v1-18-0_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-18-0_TimelineItem_bubble_focus_border_radius);bottom:var(--_ui5-v1-18-0_TimelineItem_bubble_border_bottom);content:"";left:var(--_ui5-v1-18-0_TimelineItem_bubble_border_left);pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_TimelineItem_bubble_border_right);top:var(--_ui5-v1-18-0_TimelineItem_bubble_border_top)}:host([layout=Horizontal]) .ui5-tli-bubble:focus:after{left:var(--_ui5-v1-18-0_TimelineItem_horizontal_bubble_focus_left_offset);top:var(--_ui5-v1-18-0_TimelineItem_horizontal_bubble_focus_top_offset)}.ui5-tli-bubble-arrow{left:0;overflow:hidden;padding-bottom:var(--_ui5-v1-18-0_TimelineItem_arrow_size);pointer-events:none;position:absolute;top:0;width:var(--_ui5-v1-18-0_TimelineItem_arrow_size)}.ui5-tli-bubble-arrow:before{background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-18-0_TimelineItem_bubble_border_color);content:"";height:100%;left:0;position:absolute;top:0;transform:rotate(45deg);transform-origin:0 100%;width:100%}:host([layout=Horizontal]) .ui5-tli-bubble-arrow:before{transform:rotate(315deg)}.ui5-tli-bubble-arrow--left{left:calc(var(--_ui5-v1-18-0_TimelineItem_arrow_size)*-1)}.ui5-tli-bubble-arrow--top{top:calc(var(--_ui5-v1-18-0_TimelineItem_arrow_size)*-1)}.ui5-tli-bubble-arrow--left:before{left:50%;transform-origin:100% 100%;width:50%}.ui5-tli-bubble-arrow--top:before{left:42%;transform-origin:152% 104%;width:75%}.ui5-tli-desc,.ui5-tli-title{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400}.ui5-tli-title span{display:inline-block}.ui5-tli-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);font-weight:400;overflow:hidden;padding-top:var(--_ui5-v1-18-0_TimelineItem_bubble_content_subtitle_padding_top);text-overflow:ellipsis;white-space:nowrap}.ui5-tli-desc{padding-top:var(--_ui5-v1-18-0_TimelineItem_bubble_content_description_padding_top)}[dir=rtl] .ui5-tli-bubble-arrow--left{left:auto;right:calc(var(--_ui5-v1-18-0_TimelineItem_arrow_size)*-1);transform:scaleX(-1)}[dir=rtl] .ui5-tli-bubble-arrow--top{left:auto;right:0;transform:scaleX(-1)}[dir=rtl] .ui5-tli-bubble{margin-left:auto;margin-right:.5rem}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-bubble{margin-right:0}[dir=rtl] .ui5-tli-bubble:focus:after{left:var(--_ui5-v1-18-0_TimelineItem_bubble_rtl_left_offset);right:var(--_ui5-v1-18-0_TimelineItem_bubble_rtl_right_offset)}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-bubble:focus:after{right:0}:host([layout=Horizontal]:not([icon])) [dir=rtl] .ui5-tli-indicator:after{right:.625rem}:host([layout=Horizontal]:not([icon])) [dir=rtl] .ui5-tli-indicator:before{left:var(--_ui5-v1-18-0_timeline_tli_indicator_before_right);right:1.9375rem}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-indicator:before{left:var(--_ui5-v1-18-0_timeline_tli_indicator_before_right);right:2.125rem}'};var n=l;i.default=n});
//# sourceMappingURL=TimelineItem.css.js.map