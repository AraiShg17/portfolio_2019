const module = {

  state: {
    id: '',
    password: '',
    login: false,
    message: '',
    loading: false
  },

  getters: {
    account (state) {
      return state
    }
  },

  mutations: {
    setAccount (state, payload) {
      state[payload.tg] = payload.val
    }
  },

  actions: {
    accountData ({commit}, account) {
      commit('setAccount', {account})
    }
  }
}

export default module
