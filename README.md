# 用于 Vue 全局安装 xe-utils

[![npm version](https://img.shields.io/npm/v/vxe-utils.svg?style=flat-square)](https://www.npmjs.org/package/vxe-utils)
[![npm downloads](https://img.shields.io/npm/dm/vxe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-utils)

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
import customs from './customs'

XEUtils.mixin(customs)

// mounts 可以设置['cookie', 'browse', 'locat']
Vue.use(VXEUtils, XEUtils, {mounts: ['cookie']})
```

## 示例

./Home.vue

```HTML
<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{ $utils.dateToString(item.date1) }}</span>
        <span>{{ item.date2 }}</span>
      </li>
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
        id: 123,
        date1: new Date(),
        date2: this.$utils.dateToString(new Date(), 'MM/dd/yyyy')
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