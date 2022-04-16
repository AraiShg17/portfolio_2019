import Vue from 'vue'
import Vuex from 'vuex'

import storeCommon from '@/store/common.js'
import storeAccount from '@/store/account.js'
import storeFilter from '@/store/filter.js'
import storeWork from '@/store/work.js'
import storeProfile from '@/store/profile.js'
import storeLoading from '@/store/loading.js'
import storeRegist from '@/store/regist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: storeCommon,
    account: storeAccount,
    filter: storeFilter,
    work: storeWork,
    profile: storeProfile,
    loading: storeLoading,
    regist: storeRegist
  }
})
