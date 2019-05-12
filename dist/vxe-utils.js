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
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function VXEUtils(Vue, XEUtils, options) {
    var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : [];

    var definePro = function definePro(name, getFn) {
      Object.defineProperty(Vue.prototype, '$' + name, {
        get: getFn
      });
    };

    var setMount = function setMount(name, callback) {
      if (mounts.indexOf(name) > -1) {
        definePro(name, callback || XEUtils[name]);
      }
    };

    definePro('utils', function () {
      XEUtils.$context = this;
      return XEUtils;
    });
    setMount('cookie', function () {
      return XEUtils.cookie;
    });
    setMount('browse');
    setMount('locat');
  }

  var _default = VXEUtils;
  _exports["default"] = _default;
});