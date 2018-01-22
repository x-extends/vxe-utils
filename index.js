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

export default plugin
