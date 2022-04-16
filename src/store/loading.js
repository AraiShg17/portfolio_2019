const module = {

  state: {
    nowload: false,
  },

  getters: {
    loading (state) {
      return state
    }
  },

  mutations: {
    setLoading (state, payload) {
      state.nowload = payload
    }
  },

  actions: {
    loadingData ({commit}, loading) {
      commit('setLoading', {loading})
    }
  }
}

export default module
