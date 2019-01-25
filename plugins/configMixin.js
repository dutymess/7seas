/*-----------------------------------------------------------------
- Config Mixin
-----------------------------------------------------------------*/
import Vue from 'vue'

// Import configs
import General from '@/config/general'
import Services from '@/config/services'
import Offices from '@/config/offices'
import Reasons from '@/config/reasons'
import Team from '@/config/team'

Vue.mixin({
  data() {
    return {
      Configs: {
        General,
        Services,
        Offices,
        Reasons,
        Team
      }
    }
  },
});
