const module = {

  state: {
    loading: '',
    work: {
      category: null,
      day: null,
      href: null,
      id: null,
      image: null,
      security: null,
      sort: null,
      thumb: null,
      title: null
    }
  },

  getters: {
    regist (state) {
      return state
    }
  },

  mutations: {
    setRegist (state, payload) {
      state.work[payload.tg] = payload.val
    }
  },

  actions: {
    registData ({commit}, regist) {
      commit('setRegist', {regist})
    }
  }
}

export default module
