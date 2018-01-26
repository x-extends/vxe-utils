# VXEUtils 用于Vue全局安装 xe-utils

安装完成后自动挂载在vue实例 this.$utils(函数库) this.$browse(浏览器内核判断) this.$locat(用于读写地址栏参数)

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
#### 示例
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

#### 案例
./Home.vue
``` shell
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.dateStr }}</li>
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