# vxe-utils是一个基于Vue的函数库，提供一整套函数式编程功能

## 通过NPM安装最新版本

```shell
npm install vxe-utils --save
```

## 安装方式
## 1.按需导入
```shell
import { dateToString, stringToDate } from 'vxe-utils/core'

let dateStr = dateToString(new Date()
let date = this.$utils.stringToDate(dateStr)
```

## 2.在Vue模块化的打包环境中通过 Vue.use() 来全局安装 ：
```shell
import Vue from 'vue'
import XEUtils from 'vxe-utils'

Vue.use(XEUtils)

// 在Vue实例中使用
let date = this.$utils.stringToDate('2017-12-20', 'yyyy-MM-dd')
```
## 编程式 API :
### ./core/base
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| is | ( v1, v2 ) | 判断两个值是否是相同的值 |
| isNaN | ( obj ) | 判断是否非数值 |
| isFinite | ( obj ) | 判断其数值是否是无穷大 |
| isArray | ( obj ) | 判断是否数组 |
| isFloat | ( obj ) | 判断是否小数 |
| isInteger | ( obj ) | 判断是否整数 |
| isBoolean | ( obj ) | 判断是否Boolean对象 |
| isString | ( obj ) | 判断是否String对象 |
| isNumber | ( obj ) | 判断是否Number对象 |
| isRegExp | ( obj ) | 判断是否RegExp对象 |
| isObject | ( obj ) | 判断是否Object对象 |
| isPlainObject | ( obj ) | 判断是否是一个对象 |
| isDate | ( obj ) | 判断是否Date对象 |
| isError | ( obj ) | 判断是否Error对象 |
| isTypeError |  ( obj ) | 判断是否TypeError对象 |
| isEmpty | ( obj ) | 判断是否为空,包括空对象、空数值、空字符串 |
| isNull | ( obj ) | 判断是否为Null |
| isSymbol | ( obj ) | 判断是否Symbol对象 |
| isArguments | ( obj ) | 判断是否Arguments对象 |
| isElement | ( obj ) | 判断是否Element对象 |
| isDocument | (obj  ) | 判断是否Document对象 |
| isWindow | ( obj ) | 判断是否Window对象 |
| isFormData | ( obj ) | 判断是否FormData对象 |
| isLeapYear | ( date ) | 判断是否闰年 |
| getType | ( obj ) | 获取对象类型 |
| uniqueId | (  ) | 获取一个全局唯一标识 |
| indexOf | ( obj, val ) | 返回对象第一个索引值 |
| includes | ( obj, val  ) | 判断对象是否包含该值,成功返回true否则false |
| assign/extend | ( obj, ... ) | 浅拷贝一个或者多个对象到目标对象中 |
| stringToJson | ( str ) | 字符串转JSON |
| jsonToString | ( obj ) | JSON转字符串 |
| keys | ( obj ) | 获取对象所有属性 |
| values | ( obj ) | 获取对象所有值 |
| entries | ( obj ) | 获取对象所有属性、值 |
| first | ( obj ) | 获取对象第一个值 |
| last | ( obj ) | 获取对象最后一个值 |
| each | ( obj, callback, context ) | 迭代器 |
| clone | ( obj, deep ) | 浅拷贝/深拷贝 |
| groupBy | ( obj, callback, context ) | 集合分组,默认使用键值分组,如果有callback则使用结果进行分组 |
| mapObject | ( obj, callback, context ) | 指定方法后的返回值组成的新对象 |

### ./core/array
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| uniq | ( array ) | 数组去重 |
| union | ( ...array ) | 将多个数的值返回唯一的并集数组 |
| sort | ( arr, callback, context ) | 数组按属性值升序 |
| shuffle | ( array ) | 将一个数组随机打乱，返回一个新的数组 |
| sample | ( array, number ) | 从一个数组中随机返回元素 |
| some | ( obj, callback, context ) | 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false |
| every | ( obj, callback, context ) | 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false |
| filter | ( obj, callback, context ) | 根据回调过滤数据 |
| find | ( obj, callback, context ) | 查找匹配第一条数据 |
| map | ( obj, callback, context ) | 指定方法后的返回值组成的新数组 |

### ./core/date
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| now | (  ) | 返回时间戳 |
| stringToDate | ( str, format ) | 字符串转为日期(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、SSS毫秒) |
| dateToString | ( date, format ) | 日期格式化为字符串(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、S毫秒、E星期几、q季度) |
| getWhatMonth | ( date, mode, month ) | 返回前几个月或后几个月的日期 |
| getWhatWeek | ( date, mode, week ) | 返回前几周或后几周的星期几 |
| getWhatDay | ( date, day ) | 返回前几天或后几天的日期 |
| getDaysOfMonth | ( date, month ) | 返回前几个月或后几个月的当月天数 |
| getDateDiff | ( startDate, endDate, rules ) | 返回两个日期之间差距 |

### ./core/number
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| random | ( min, max ) | 获取一个指定范围内随机数 |
| min | ( arr, callback ) | 获取最小值 |
| max | ( arr, callback ) | 获取最大值 |

### ./core/string
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| escape | ( str ) | 转义HTML字符串，替换&, <, >, ", ', `字符 |
| unescape | ( str ) | 反转escape |

### ./browse/type
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| browse | (  ) | 获取浏览器内核 |

### ./browse/locat
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| locat | (  ) | 获取地址栏信息 |

### ./browse/cookie
| 方法 | 参数| 描述 |
|-------------|-----|-----|
| cookie | ( name, value, options ) | cookie操作函数 |

## License
Copyright (c) 2017-present, Xu Liangzhan