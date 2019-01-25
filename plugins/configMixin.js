/*-----------------------------------------------------------------
- Config Mixin
-----------------------------------------------------------------*/
import Vue from 'vue'

// Import configs
import General from '@/config/general'
import Services from '@/config/services'
import Offices from '@/config/offices'
import Reasons from '@/config/reasons'

Vue.mixin({
  data() {
    return {
      Configs: {
        General,
        Services,
        Offices,
        Reasons
      }
    }
  },
});
