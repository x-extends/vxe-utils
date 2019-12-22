function VXEUtils (Vue, XEUtils, options) {
  var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : []
  var setMount = function (name, callback) {
    if (callback) {
      Object.defineProperty(Vue.prototype, '$' + name, { get: callback })
    } else if (mounts.indexOf(name) > -1) {
      Vue.prototype['$' + name] = XEUtils[name]
    }
  }
  setMount('utils', function () {
    XEUtils.$context = this
    return XEUtils
  })
  setMount('cookie')
  setMount('browse')
  setMount('locat')
}

export default VXEUtils
