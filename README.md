# vxe-utils 使用Vue全局安装xe-utils

## 通过NPM安装最新版本

``` shell
npm install vxe-utils --save
```

### 在Vue模块化的打包环境中通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

Vue.use(VXEUtils, XEUtils)
```

## License
Copyright (c) 2017-present, Xu Liangzhan