# vxe-utils 用于Vue全局安装xe-utils

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

let dateStr = this.$utils.dateToString(new Date())
let date = this.$utils.stringToDate(dateStr)
```

## License
Copyright (c) 2017-present, Xu Liangzhan