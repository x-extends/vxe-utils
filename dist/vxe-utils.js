(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("vxe-utils", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.VXEUtils = mod.exports.default;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function VXEUtils(app, XEUtils, options) {
    var isV3 = typeof app !== 'function';
    var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : [];
    var variate = '$utils';

    var setMount = function setMount(name) {
      if (mounts.indexOf(name) > -1) {
        if (isV3) {
          app.config.globalProperties['$' + name] = XEUtils[name];
        } else {
          app.prototype['$' + name] = XEUtils[name];
        }
      }
    };

    if (isV3) {
      app.config.globalProperties[variate] = XEUtils;
    } else {
      Object.defineProperty(app.prototype, variate, {
        get: function get() {
          XEUtils.$context = this;
          return XEUtils;
        }
      });
    }

    setMount('cookie');
    setMount('browse');
    setMount('locat');
  }

  var _default = VXEUtils;
  _exports["default"] = _default;
});