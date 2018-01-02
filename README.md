# vxe-utils 基于Vue全局安装xe-utils

## 通过NPM安装最新版本

``` shell
npm install vxe-utils --save
```

### 通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import VXEUtils from 'vxe-utils'

Vue.use(VXEUtils)

let dateStr = this.$utils.dateToString(new Date())
let date = this.$utils.stringToDate(dateStr)
```

### 支持自定义扩展
``` shell
import Vue from 'vue'
import VXEAjax from 'vxe-ajax'
import customs from './customs' // ./customs.js export function custom1 () {} 

Vue.use(VXEAjax, customs)

// 调用自定义扩展函数
this.$utils.custom1()
```

## License
Copyright (c) 2017-present, Xu Liangzhan