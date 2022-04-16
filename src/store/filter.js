const module = {

  state: [],

  getters: {
    filter (state) {
      return state
    }
  },

  mutations: {
    setFilter (state, payload) {
      if(state.indexOf(payload) >= 0) { return }
      state.push(payload)
    },
    removeFilter (state, payload) {
      state.splice(state.indexOf(payload), 1)
    },
    removeAllFilter (state) {
      state.splice(0, state.length)
    }
  },

  actions: {
    filterData ({commit}, filter) {
      commit('setFilter', {filter})
    }
  }
}

export default module
