import * as utils from 'xe-utils'

/**
 * Install Vconstructor
 */
function plugin (Vue, methods) {
  utils.mixin(methods)
  var XEUtils = utils.constructor
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
