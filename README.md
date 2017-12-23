# vxe-utils一个轻量级函数库，提供了可使常见的 JavaScript 编程更为简单的 API

## 通过[NPM](npmjs.org)安装最新版本

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
