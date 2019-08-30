import Vue from 'vue'
import XEUtils from 'xe-utils'

export interface VXEUtilsPlugin {
  install(vue: typeof Vue, xUtils: typeof XEUtils): void;
}

/**
 * 用于 Vue 全局安装 xe-utils
 */
declare const VXEUtils: VXEUtilsPlugin;

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * JavaScript 函数库、工具类
     */
    $utils: typeof XEUtils;
  }
}

export default VXEUtils;