# 用于 Vue 全局安装 xe-utils

[![npm version](https://img.shields.io/npm/v/vxe-utils.svg?style=flat-square)](https://www.npmjs.org/package/vxe-utils)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-utils.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-utils)
[![npm downloads](https://img.shields.io/npm/dm/vxe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-utils)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-utils/blob/master/LICENSE)

## AMD 安装

```JavaScript
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

## NPM 安装方式

```JavaScript
npm install xe-utils vxe-utils --save
```

### 通过 Vue.use() 来全局安装

```JavaScript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

// mounts 可以设置['cookie', 'browse', 'locat']
Vue.use(VXEUtils, XEUtils, {mounts: ['cookie']})
```

## 使用

```html
<template>
  <div>{{ $utils.toDateString(startDate, 'yyyy-dd-MM HH:mm:ss') }}</div>
  <div>{{ endDate }}</div>
</template>
```

```html
<script>
export default {
  name: 'App',
  data: {
    return {
      startDate: new Date(),
      endDate: null
    }
  },
  created () {
    this.endDate = this.$utils.toDateString(new Date(), 'MM/dd/yyyy HH:mm:ss.SSS')
  }
}
</script>
```

## License

Copyright (c) 2017-present, Xu Liangzhan