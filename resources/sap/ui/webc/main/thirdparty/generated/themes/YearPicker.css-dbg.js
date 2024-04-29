sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/YearPicker.css",
    content: ":host(:not([hidden])){display:block}:host{height:100%;width:100%}.ui5-yp-root{align-items:center;display:flex;flex-direction:column;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;padding:2rem 0 1rem 0}.ui5-yp-interval-container{align-items:center;display:flex;justify-content:center;width:100%}.ui5-yp-item{align-items:center;background-color:var(--sapLegend_WorkingBackground);border:var(--_ui5-v1-18-0_yearpicker_item_border);border-radius:var(--_ui5-v1-18-0_yearpicker_item_border_radius);box-sizing:border-box;color:var(--sapButton_Lite_TextColor);cursor:default;display:flex;height:var(--_ui5-v1-18-0_year_picker_item_height);justify-content:center;margin:var(--_ui5-v1-18-0_yearpicker_item_margin);outline:none;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:calc(25% - .125rem)}.ui5-yp-item-secondary-type{flex-direction:column;width:calc(50% - .125rem)}.ui5-yp-item-sec-type{color:var(--sapNeutralElementColor);font-size:.75rem}.ui5-yp-item:hover{background-color:var(--sapList_Hover_Background)}.ui5-yp-item.ui5-yp-item--selected,.ui5-yp-item.ui5-yp-item--selected .ui5-yp-item-sec-type{background-color:var(--_ui5-v1-18-0_yearpicker_item_selected_background_color);box-shadow:var(--_ui5-v1-18-0_yearpicker_item_selected_box_shadow);color:var(--_ui5-v1-18-0_yearpicker_item_selected_text_color);font-weight:700}.ui5-yp-item.ui5-yp-item--disabled{opacity:.5;pointer-events:none}.ui5-yp-item.ui5-yp-item--selected:focus{background-color:var(--_ui5-v1-18-0_yearpicker_item_selected_focus)}.ui5-yp-item.ui5-yp-item--selected:focus:after{border-color:var(--_ui5-v1-18-0_yearpicker_item_focus_after_border)}.ui5-yp-item.ui5-yp-item--selected:hover{background-color:var(--_ui5-v1-18-0_yearpicker_item_selected_hover_color)}.ui5-yp-item:focus:after{border:var(--_ui5-v1-18-0_yearpicker_item_focus_after_border);border-radius:var(--_ui5-v1-18-0_yearpicker_item_focus_after_border_radius);content:\"\";inset:0;outline:var(--_ui5-v1-18-0_yearpicker_item_focus_after_outline);position:absolute}"
  };
  var _default = styleData;
  _exports.default = _default;
});