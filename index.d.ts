import Vue from 'vue'
import { XEUtilsMethods } from 'xe-utils'

/**
 * 用于 Vue 全局安装 xe-utils
 * @example 
 ```javascript
 Vue.use(VXEUtils, XEUtils)
 ```
 */
declare var VXEUtils;

declare module 'vue/types/vue' {
  interface Vue {
    $utils: XEUtilsMethods;
  }
}

export default VXEUtils;