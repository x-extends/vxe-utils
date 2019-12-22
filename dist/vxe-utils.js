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

  function VXEUtils(Vue, XEUtils, options) {
    var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : [];

    var setMount = function setMount(name, callback) {
      if (callback) {
        Object.defineProperty(Vue.prototype, '$' + name, {
          get: callback
        });
      } else if (mounts.indexOf(name) > -1) {
        Vue.prototype['$' + name] = XEUtils[name];
      }
    };

    setMount('utils', function () {
      XEUtils.$context = this;
      return XEUtils;
    });
    setMount('cookie');
    setMount('browse');
    setMount('locat');
  }

  var _default = VXEUtils;
  _exports["default"] = _default;
});