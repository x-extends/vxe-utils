import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

Object.assign(XEUtils, {

  context: window,

  /**
   * 函数扩展
   *
   * @param {Object} methods 扩展函数对象
   */
  mixin (methods) {
    Object.keys(methods).forEach(name => {
      var fn = methods[name]
      XEUtils[name] = core.isFunction(fn) ? function () {
        let rest = fn.apply(XEUtils.context || window, arguments)
        XEUtils.context = window
        return rest
      } : fn
    })
  }
})

XEUtils.mixin(core)
XEUtils.mixin(browse)

/**
 * Install Vue plugin
 */
function plugin (Vue) {
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
