sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v2/application", "./v3/application"], function (_exports, _Theme, _application, _application2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _application.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _application.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _application.pathData : _application2.pathData;
  _exports.pathData = pathData;
  var _default = "tnt/application";
  _exports.default = _default;
});