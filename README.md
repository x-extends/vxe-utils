# VXEUtils 用于Vue全局安装xe-utils

## 通过NPM安装最新版本

``` shell
npm install vxe-utils --save
```

### 通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

Vue.use(VXEUtils, XEUtils)

// 通过vue实例的调用方式
const dateStr = this.$utils.dateToString(new Date(), 'yyyy-MM-dd')
const date = this.$utils.stringToDate(dateStr, 'yyyy-MM-dd')
```

### 混合函数
#### 文件 ./customs.js
``` shell
export function custom1 () {
  console.log('自定义函数')
} 
```
#### 代码
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils)

// 调用自定义扩展函数
this.$utils.custom1()
```

## License
Copyright (c) 2017-present, Xu Liangzhan