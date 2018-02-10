function plugin (Vue, XEUtils, options) {
  Object.defineProperty(Vue.prototype, '$utils', {
    get: function () {
      XEUtils.context = this
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

export default plugin
