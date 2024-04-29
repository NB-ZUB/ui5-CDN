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
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-fiori", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents-fiori",
    fileName: "themes/NotificationListGroupItem.css",
    content: ".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){background:var(--ui5-v1-18-0-listitem-background-color);cursor:pointer;display:block;min-height:var(--_ui5-v1-18-0_list_item_base_height);width:100%}:host([has-border]){border-bottom:var(--ui5-v1-18-0-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-inline-end:.5rem}.ui5-nli-overflow-btn{margin-inline-end:.5rem}.ui5-prio-icon{min-height:1rem;min-width:1rem;padding-inline-end:.625rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}:host{--_ui5-v1-18-0-notification_item-border-raius:0px}:host(:not([collapsed])) .ui5-nli-group-toggle-btn{transform:var(--_ui5-v1-18-0_li_notification_group_toggle_btn_rotation)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{box-sizing:border-box;display:flex;flex-direction:column;position:relative;width:100%}.ui5-nli-group-header{align-items:center;background:var(--sapList_GroupHeaderBackground);border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:default;display:flex;padding-block:.75rem .25rem;padding-inline:.75rem .5rem;width:100%}.ui5-nli-group-toggle-btn{cursor:pointer;margin-inline-end:.75rem}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontHeader6Size);font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-nli-group-divider{flex:1}.ui5-nli-group-counter{color:var(--sapList_TableGroupHeaderTextColor);font-family:\"72override\",var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);margin-inline-end:1rem;margin-inline-start:.25rem}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}"
  };
  var _default = styleData;
  _exports.default = _default;
});