import Vue from 'vue'
import { XEUtilsMethods } from 'xe-utils'

/**
 * A small wrapper for integrating xe-utils to Vuejs.
 */
declare var VXEUtils;

declare module 'vue/types/vue' {
  interface Vue {
    $utils: XEUtilsMethods;
  }
}

export default VXEUtils;