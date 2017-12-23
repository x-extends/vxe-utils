import { sort } from './array'

/**
  * 获取一个指定范围内随机数
  * @param Number min 最小值
  * @param Number max 最大值
  * @return Number
  */
export function random (min, max) {
  return min >= max ? min : ((min = min >> 0) + Math.round(Math.random() * ((max || 9) - min)))
}

/**
  * 获取最小值
  * @param Array arr 数组
  * @param Function callback(item, index, obj) 回调
  * @return Number
  */
export function min (arr, callback) {
  return sort(arr, callback)[0]
}

/**
  * 获取最大值
  * @param Array arr 数组
  * @param Function callback(item, index, obj) 回调
  * @return Number
  */
export function max (arr, callback) {
  return sort(arr, callback).reverse()[0]
}
