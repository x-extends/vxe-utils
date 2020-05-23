function VXEUtils (app, XEUtils, options) {
  var isV3 = typeof app !== 'function'
  var mounts = options && options.mounts && options.mounts.length ? options.mounts.join(';') : []
  var variate = '$utils'
  var setMount = function (name) {
    if (mounts.indexOf(name) > -1) {
      if (isV3) {
        app.config.globalProperties['$' + name] = XEUtils[name]
      } else {
        app.prototype['$' + name] = XEUtils[name]
      }
    }
  }
  if (isV3) {
    app.config.globalProperties[variate] = XEUtils[name]
  } else {
    Object.defineProperty(app.prototype, variate, {
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
