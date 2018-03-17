# VXEUtils 用于Vue全局安装 xe-utils

[![npm version](https://img.shields.io/npm/v/vxe-utils.svg?style=flat-square)](https://www.npmjs.org/package/vxe-utils)
[![npm downloads](https://img.shields.io/npm/dm/vxe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-utils)

安装完成后自动挂载在vue实例：this.$utils(函数库)   
支持挂载函数列表：this.$browse(浏览器内核判断) this.$locat(用于读写地址栏参数)  
在 vue 实例中通过 this.$utils 调用的函数 this 默认指向当前vue实例。

## 兼容性

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
9+ ✔ | ✔ | ✔ | ✔ | 6.1+ ✔ |

## CDN 安装
使用 script 方式安装，VXEUtils 会定义为全局变量  
生产环境请使用 vxe-utils.min.js，更小的压缩版本，可以带来更快的速度体验。
### cdnjs 获取最新版本
[点击浏览](https://cdn.jsdelivr.net/npm/vxe-utils/)已发布的所有 npm 包的源代码。
``` shell
<script src="https://cdn.jsdelivr.net/npm/vxe-utils/dist/vxe-utils.js"></script>
```
### unpkg 获取最新版本
[点击浏览](https://unpkg.com/vxe-utils/)已发布的所有 npm 包的源代码
``` shell
<script src="https://unpkg.com/vxe-utils/dist/vxe-utils.js"></script>
```

## AMD 安装
### require.js 安装示例
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
```

## ES6 Module 安装方式
``` shell
npm install xe-utils vxe-utils --save
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

## vue 实例挂载自定义属性
### 示例
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils, {mounts: ['locat', 'browse', 'cookie']})

this.$locat // this.$locat.origin
this.$browse // this.$browse['-webkit']
this.$cookie // this.$cookie('name', 'value')
```

## 混合函数
### 文件 ./customs.js
``` shell
export function custom1 () {
  console.log('自定义函数')
} 
```
### 示例 ./main.js
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils)

// 调用自定义扩展函数
XEUtils.custom1()
```

## 示例
Home.vue
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
      this.list = [{
        id: this.$utils.uniqueId()
        date: this.$utils.dateToString('2018-01-01 10:00:00', 'MM/dd/yyyy')
      }]
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