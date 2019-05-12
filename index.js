function VXEUtils (Vue, XEUtils, options) {
  var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : []
  var definePro = function (name, getFn) {
    Object.defineProperty(Vue.prototype, '$' + name, { get: getFn })
  }
  var setMount = function (name, callback) {
    if (mounts.indexOf(name) > -1) {
      definePro(name, callback || XEUtils[name])
    }
  }
  definePro('utils', function () {
    XEUtils.$context = this
    return XEUtils
  })
  setMount('cookie', function () {
    return XEUtils.cookie
  })
  setMount('browse')
  setMount('locat')
}

export default VXEUtils
