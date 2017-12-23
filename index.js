import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

Object.assign(XEUtils, {
  context: window,
  build (methods) {
    Object.keys(methods).forEach(name => {
      var fn = methods[name]
      if (fn && (fn.set || fn.get)) {
        Object.defineProperty(XEUtils, name, fn)
      } else {
        XEUtils[name] = core.isFunction(fn) ? function () {
          let rest = fn.apply(XEUtils.context || window, arguments)
          XEUtils.context = window
          return rest
        } : fn
      }
    })
  }
})

XEUtils.build(core)
XEUtils.build(browse)

/**
 * Install plugin
 */
function plugin (Vue) {
  Object.defineProperties(Vue.prototype, {
    $locat: {
      get: function get () {
        return XEUtils.locat
      }
    },
    $browse: {
      get () {
        return XEUtils.browse
      }
    },
    $utils: {
      get: function get () {
        XEUtils.context = this
        return XEUtils
      }
    }
  })
}

export default plugin
