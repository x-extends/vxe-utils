# vxe-utils

[![gitee star](https://gitee.com/xuliangzhan_admin/vxe-utils/badge/star.svg?theme=dark)](https://gitee.com/xuliangzhan_admin/vxe-utils/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-utils.svg?style=flat-square)](https://www.npmjs.org/package/vxe-utils)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-utils.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-utils)
[![npm downloads](https://img.shields.io/npm/dm/vxe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-utils)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-utils/dist/vxe-utils.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vxe-utils/dist/vxe-utils.min.js)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-utils/blob/master/LICENSE)

用于 Vue 全局安装 xe-utils

## Installing

```shell
npm install xe-utils vxe-utils
```

Get on [unpkg](https://unpkg.com/vxe-utils/) and [cdnjs](https://cdn.jsdelivr.net/npm/vxe-utils/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
<script src="https://cdn.jsdelivr.net/npm/vxe-utils"></script>
```

## Example

[Run this demo on jsfiddle.net](https://jsfiddle.net/tcf15qu4/)

```javascript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

// use:
Vue.use(VXEUtils, XEUtils, { mounts: ['cookie'] })

// vue2.x:
// Vue.prototype.$utils = XEUtils
// Vue.prototype.$cookie = XEUtils.cookie

// vue3.x:
// app.config.globalProperties.$utils = XEUtils
// app.config.globalProperties.$cookie = XEUtils.cookie
```

```html
<template>
  <h1>{{ userName }}</h1>
  <div>{{ $utils.toDateString(startDate, 'yyyy-dd-MM HH:mm:ss') }}</div>
  <div>{{ endDate }}</div>
</template>
```

```html
<script>
export default {
  data () {
    return {
      userName: null,
      startDate: new Date(),
      endDate: null
    }
  },
  created () {
    this.userName = this.$cookie('U_NAME')
    this.endDate = this.$utils.toDateString(new Date(), 'MM/dd/yyyy HH:mm:ss.SSS')
  }
}
</script>
```

## License

MIT License, 2017-present, Xu Liangzhan
