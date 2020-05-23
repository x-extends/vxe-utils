function VXEUtils (app, XEUtils, options) {
  var isV3 = typeof app !== 'function'
  var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : []
  var setMount = function (name, obj) {
    if (mounts.indexOf(name) > -1) {
      if (isV3) {
        app.config.globalProperties['$' + name] = obj || XEUtils[name]
      } else {
        app.prototype['$' + name] = obj || XEUtils[name]
      }
    }
  }
  if (isV3) {
    setMount('utils', XEUtils)
  } else {
    Object.defineProperty(app.prototype, '$utils', {
      get: function () {
        XEUtils.$context = this
        return XEUtils
      }
    })
  }
  setMount('cookie')
  setMount('browse')
  setMount('locat')
}

export default VXEUtils
