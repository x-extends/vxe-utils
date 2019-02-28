# vxe-utils

[![npm version](https://img.shields.io/npm/v/vxe-utils.svg?style=flat-square)](https://www.npmjs.org/package/vxe-utils)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-utils.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-utils)
[![npm downloads](https://img.shields.io/npm/dm/vxe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-utils)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-utils/dist/vxe-utils.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vxe-utils/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-utils/blob/master/LICENSE)

## Installing

```javascript
npm install xe-utils vxe-utils --save
```

Using requirejs

```javascript
// require 配置
require.config({
  paths: {
    // ...,
    'xe-utils': './dist/xe-utils.min',
    'vxe-utils': './dist/vxe-utils.min'
  }
})
define(['vue', 'xe-utils', 'vxe-utils'], function (Vue, XEUtils, VXEUtils) {
  Vue.use(VXEUtils, XEUtils)
})
```

## Example

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

// mounts 可以设置['cookie', 'browse', 'locat']
Vue.use(VXEUtils, XEUtils, {mounts: ['cookie']})
```

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