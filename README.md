# VXEUtils 用于Vue全局安装 xe-utils

安装完成后自动挂载在vue实例 this.$utils

### 直接引用 script 全局安装，VXEUtils 会定义为全局变量
``` shell
<script src="./dist/xe-utils.min.js" type="text/javascript"></script>
<script src="./dist/vxe-utils.min.js" type="text/javascript"></script>

// ./main.js 安装
Vue.use(VXEUtils, XEUtils)

// ./app.js 通过vue实例的调用方式
// ...vue代码省略
this.$utils.dateToString(new Date(), 'yyyy-MM-dd')
```

### AMD 安装， 以 require.js 为例
``` shell
// require 配置
require.config({
  paths: {
    // ...,
    'xe-utils': './dist/xe-utils.min',
    'vxe-utils': './dist/vxe-utils.min'
  }
})

// ./main.js 安装
define(['Vue', 'xe-utils', 'vxe-utils'], function (Vue, XEUtils, VXEUtils) {
  Vue.use(VXEUtils, XEUtils)
})

// ./app.js 调用
define([], function () {
  // 通过vue实例的调用方式
  // ...vue代码省略
  this.$utils.dateToString(new Date(), 'yyyy-MM-dd')
})
```

### ES6 Module 安装方式
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
const date = this.$utils.stringToDate('11/20/2017 10:10:30', 'MM/dd/yyyy HH:mm:ss')
```

### vue 实例挂载自定义属性
#### 示例
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils, {mounts: ['locat', 'browse', 'cookie']})

this.$locat // this.$locat.origin
this.$browse // this.$browse['-webkit'] true
this.$cookie // this.$cookie('name', 'value')
```

### 混合函数
#### 文件 ./customs.js
``` shell
export function custom1 () {
  console.log('自定义函数')
} 
```
#### 示例
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils)

// 调用自定义扩展函数
XEUtils.custom1()
```

#### 案例
./Home.vue
``` shell
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.dateStr }}或者{{ $utils.dateToString(item.date) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    init () {
      this.$ajax.getJSON('services/user/list', {id: 123})
      .then(data => {
        this.list = data.map(item => {
          item.dateStr = this.$utils.dateToString(item.date, 'MM/dd/yyyy')
        })
      }).catch(data => {
        this.list = []
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
```

## License
Copyright (c) 2017-present, Xu Liangzhan