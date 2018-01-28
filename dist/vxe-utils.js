/*!
 * vxe-ajax.js v1.3.0
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.VXEUtils = factory())
}(this, function () {
  'use strict'

  function plugin (Vue, XEUtils) {
    Object.defineProperty(Vue.prototype, '$locat', {
      get: XEUtils.locat
    })
    Object.defineProperty(Vue.prototype, '$browse', {
      get: XEUtils.browse
    })
    Object.defineProperty(Vue.prototype, '$utils', {
      get: function () {
        return XEUtils
      }
    })
  }

  return plugin
}))
