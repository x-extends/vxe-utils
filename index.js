/**
 * Install Vconstructor
 */
function plugin (Vue, func) {
  var constructor = func.utils
  Object.defineProperty(Vue, 'utils', function () {
    constructor.context = window
    return constructor
  })
  Object.defineProperties(Vue.prototype, {
    $locat: {
      get () {
        return constructor.locat()
      }
    },
    $browse: {
      get () {
        return constructor.browse()
      }
    },
    $utils: {
      get () {
        constructor.context = this
        return constructor
      }
    }
  })
}

export default plugin
