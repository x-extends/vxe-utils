function plugin (Vue, XEUtils) {
  Object.defineProperty(Vue.prototype, '$locat', {
    get: function () {
      return XEUtils.locat()
    }
  })
  Object.defineProperty(Vue.prototype, '$browse', {
    get: function () {
      return XEUtils.browse()
    }
  })
  Object.defineProperty(Vue.prototype, '$utils', {
    get: function () {
      XEUtils.context = this
      return XEUtils
    }
  })
}

export default plugin
