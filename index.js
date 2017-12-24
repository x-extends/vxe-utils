import { XEUtils } from './src/constructor'
import * as core from './src/core'
import * as browse from './src/browse'

XEUtils.mixin(core)
XEUtils.mixin(browse)

/**
 * Install Vue plugin
 */
function plugin (Vue) {
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
