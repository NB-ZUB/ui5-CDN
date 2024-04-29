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
    fileName: "themes/GroupHeaderListItem.css",
    content: ".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{background:var(--ui5-v1-18-0-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor);height:var(--_ui5-v1-18-0_group_header_list_item_height)}:host([has-border]){border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0;padding-top:.5rem}.ui5-ghli-title{display:block;font-family:var(--sapFontHeaderFamily);font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"
  };
  var _default = styleData;
  _exports.default = _default;
});