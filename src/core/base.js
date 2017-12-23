import { stringToDate } from './date'

/*
  * 获取一个全局唯一标识
  *
  * @return Number
  */
var __uniqueId = 0
export var uniqueId = {
  get () {
    return ++__uniqueId
  }
}

/**
  * 判断是否非数值
  * @param String/Number number 数值
  * @return Boolean
  */
export var isNaN = window.isNaN

/**
  * 判断其数值是否是无穷大
  * @param Number number 数值
  * @return Boolean
  */
export var isFinite = window.isFinite

/**
  * 判断两个值是否是相同的值
  * @param Object v1 值
  * @param Object v2 值
  * @return Boolean
  */
export var is = Object.is

/**
  * 浅拷贝一个或者多个对象到目标对象中
  * @param Object obj 目标对象
  * @param Object ...
  * @return Boolean
  */
export var assign = Object.assign
export var extend = Object.assign

/**
  * 判断是否数组
  * @param Object obj 对象
  * @return Boolean
  */
export var isArray = Array.isArray

/**
  * 判断是否整数
  * @param Number/String number 数值
  * @return Boolean
  */
export var isInteger = Number.isInteger

export function isFunction (obj) {
  return typeof obj === 'function'
}

/**
  * 判断是否Object对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isObject (obj) {
  return typeof obj === 'object'
}

/**
  * 判断是否Boolean对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isBoolean (obj) {
  return typeof obj === 'boolean'
}

/**
  * 判断是否String对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isString (obj) {
  return typeof obj === 'string'
}

/**
  * 判断是否Number对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isNumber (obj) {
  return typeof obj === 'number'
}

/**
  * 判断是否RegExp对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isRegExp (obj) {
  return obj ? obj.constructor === RegExp : false
}

/**
  * 判断是否对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isPlainObject (obj) {
  return obj ? obj.constructor === Object : false
}

/**
  * 判断是否Date对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isDate (obj) {
  return obj ? obj.constructor === Date : false
}

/**
  * 判断是否Error对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isError (obj) {
  return obj ? obj.constructor === Error : false
}

/**
  * 判断是否TypeError对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isTypeError (obj) {
  return obj ? obj.constructor === TypeError : false
}

/**
  * 判断是否为空,包括空对象、空数值、空字符串
  * @param Object obj 对象
  * @return Boolean
  */
export function isEmpty (obj) {
  if (obj === 0 || !isNumber(obj)) {
    for (let key in obj) {
      return false
    }
    return true
  }
  return false
}

/**
  * 判断是否为Null
  * @param Object obj 对象
  * @return Boolean
  */
export function isNull (obj) {
  return obj === null
}

/**
  * 判断是否Symbol对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isSymbol (obj) {
  return typeof Symbol !== 'undefined' && Symbol.isSymbol ? Symbol.isSymbol(obj) : (typeof obj === 'symbol')
}

/**
  * 判断是否Arguments对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isArguments (obj) {
  return String(obj) === '[object Arguments]'
}

/**
  * 判断是否小数
  * @param Number num 数值
  * @return Boolean
  */
export function isFloat (num) {
  return !isNaN(num) && !isInteger(num)
}

/**
  * 判断是否Element对象
  * @param Number num 数值
  * @return Boolean
  */
export function isElement (obj) {
  return obj && isString(obj.nodeName) && isNumber(obj.nodeName)
}

/**
  * 判断是否Document对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isDocument (obj) {
  return obj && obj.nodeType === 9
}

/**
  * 判断是否Window对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isWindow (obj) {
  return obj && obj === obj.window
}

/**
  * 判断是否FormData对象
  * @param Object obj 对象
  * @return Boolean
  */
export function isFormData (obj) {
  return typeof FormData !== 'undefined' && obj instanceof FormData
}

/**
  * 判断是否闰年
  * @param Date date 日期或数字
  * @return Boolean
  */
export function isLeapYear (date) {
  let currentDate = date ? stringToDate(date) : new Date()
  let year = currentDate.getFullYear()
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)
}

/**
  * 获取对象类型
  * @param Object obj 对象
  * @return String
  */
export function getType (obj) {
  if (obj === null) {
    return '' + obj
  }
  if (isSymbol(obj)) {
    return 'symbol'
  }
  if (isDate(obj)) {
    return 'date'
  }
  if (isArray(obj)) {
    return 'array'
  }
  return typeof obj
}

/**
  * 返回对象第一个索引值
  * @param Object obj 对象
  * @param Object val 值
  * @return Number
  */
export function indexOf (obj, val) {
  if (obj) {
    if (isString(obj) || isArray(obj)) {
      return obj.indexOf(val)
    }
    for (let key in obj) {
      if (val === obj[key]) {
        return key
      }
    }
  }
  return -1
}

/**
  * 判断对象是否包含该值,成功返回true否则false
  * @param Object obj 对象
  * @param Object val 值
  * @return Boolean
  */
export function includes (obj, val) {
  return indexOf(obj, val) !== -1
}

/**
  * 字符串转JSON
  * @param String str 字符串
  * @return Object 返回转换后对象
  */
export function stringToJson (str) {
  if (isObject(str)) {
    return str
  } else if (isString(str)) {
    try {
      return JSON.parse(str)
    } catch (e) {
      console.error(e)
    }
  }
  return {}
}

/**
  * JSON转字符串
  * @param Object obj 对象
  * @return String 返回字符串
  */
export function jsonToString (obj) {
  if (isObject(obj)) {
    try {
      return JSON.stringify(obj)
    } catch (e) {
      console.error(e)
    }
  }
  return obj ? '' + obj : ''
}

/**
  * 获取对象所有属性
  * @param Object obj 对象/数组
  * @return Array
  */
export function keys (obj) {
  return obj ? Object.keys(obj) : []
}

/**
  * 获取对象所有值
  * @param Object obj 对象/数组
  * @return Array
  */
export function values (obj) {
  return obj ? Object.values(obj) : []
}

/**
  * 获取对象所有属性、值
  * @param Object obj 对象/数组
  * @return Array
  */
export function entries (obj) {
  return obj ? Object.entries(obj) : []
}

/**
  * 获取对象第一个值
  * @param Object obj 对象/数组
  * @return Object
  */
export function first (obj) {
  return values(obj)[0]
}

/**
  * 获取对象最后一个值
  * @param Object obj 对象/数组
  * @return Object
  */
export function last (obj) {
  let list = values(obj)
  return list[list.length - 1]
}

function eachObj (obj, callback, context) {
  Object.keys(obj).forEach(key => {
    callback.call(context, obj[key], key, obj)
  })
}

/**
  * 迭代器
  * @param Object obj 对象/数组
  * @param Function callback(item, index, obj) 回调
  * @param Object context 上下文(this默认指向当前vue组件)
  * @return Object
  */
export function each (obj, callback, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.forEach(callback, context)
    }
    eachObj(obj, callback, context)
  }
  return this
}

function cloneObj (obj) {
  var result = {}
  each(obj, (val, key) => {
    result[key] = deepClone(val)
  })
  return result
}

function cloneArr (arr) {
  return arr.map((val, index) => {
    return deepClone(val)
  })
}

function deepClone (obj) {
  return isPlainObject(obj) ? cloneObj(obj) : isArray(obj) ? cloneArr(obj) : obj
}

/**
  * 浅拷贝/深拷贝
  * @param Object obj 对象/数组
  * @param Boolean deep 是否深拷贝
  * @return Object
  */
export function clone (obj, deep) {
  return deep ? deepClone(obj) : assign(isPlainObject(obj) ? {} : [], obj)
}

/**
  * 集合分组,默认使用键值分组,如果有callback则使用结果进行分组
  * @param Array obj 对象
  * @param Function callback 回调/对象属性
  * @param Object context 上下文(this默认指向当前vue组件)
  * @return Object
  */
export function groupBy (obj, callback, context) {
  var groupKey, attr
  var result = {}
  if (obj) {
    context = context || this
    if (isString(callback)) {
      attr = callback
      callback = null
    } else if (isFunction(callback)) {
      callback = callback.bind(context)
    } else {
      callback = attr = null
    }
    each(obj, (val, key) => {
      groupKey = callback ? callback(val, key, obj) : (attr ? val[attr] : val)
      if (result[groupKey]) {
        result[groupKey].push(val)
      } else {
        result[groupKey] = [val]
      }
    })
  }
  return result
}

/**
  * 指定方法后的返回值组成的新对象
  * @param Object obj 对象/数组
  * @param Function callback(item, index, obj) 回调
  * @param Object context 上下文(this默认指向当前vue组件)
  * @return Object
  */
export function mapObject (obj, callback, context) {
  var result = {}
  context = context || this
  each(obj, (val, index) => {
    result[index] = callback.call(context, val, index, obj)
  })
  return result
}
