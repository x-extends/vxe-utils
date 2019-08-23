import Vue from 'vue'
import XEUtils from 'xe-utils'

export interface VXEUtilsPlugin {
  install(vue: typeof Vue, xUtils: typeof XEUtils): void;
}

/**
 * A small wrapper for integrating xe-utils to Vuejs.
 */
declare const VXEUtils: VXEUtilsPlugin;

declare module 'vue/types/vue' {
  interface Vue {
    $utils: typeof XEUtils;
  }
}

export default VXEUtils;