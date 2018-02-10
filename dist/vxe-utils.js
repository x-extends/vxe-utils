/*!
 * vxe-ajax.js v1.3.3
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.VXEUtils = factory())
}(this, function () {
  'use strict'

  function plugin (Vue, XEUtils, options) {
    Object.defineProperty(Vue.prototype, '$utils', {
      get: function () {
        return XEUtils
      }
    })
    if (options && options.mounts && options.mounts.length) {
      var mounts = options.mounts.join(';')
      if (mounts.indexOf('locat') > -1) {
        Object.defineProperty(Vue.prototype, '$locat', {
          get: XEUtils.locat
        })
      }
      if (mounts.indexOf('browse') > -1) {
        Object.defineProperty(Vue.prototype, '$browse', {
          get: XEUtils.browse
        })
      }
      if (mounts.indexOf('cookie') > -1) {
        Object.defineProperty(Vue.prototype, '$cookie', {
          get: function () {
            return XEUtils.cookie
          }
        })
      }
    }
  }

  return plugin
}))
