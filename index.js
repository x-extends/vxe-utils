/**
 * Install Vue plugin
 */
function plugin (Vue, XEUtils) {
  Object.defineProperty(Vue, 'utils', function () {
    XEUtils.context = window
    return XEUtils
  })
  Object.defineProperties(Vue.prototype, {
    $locat: {
      get () {
        return XEUtils.locat()
      }
    },
    $browse: {
      get () {
        return XEUtils.browse()
      }
    },
    $utils: {
      get () {
        XEUtils.context = this
        return XEUtils
      }
    }
  })
}

export default plugin
