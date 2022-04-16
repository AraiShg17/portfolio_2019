const module = {

  state: {
    data: {
    },
    modal: {
      image: {
        src: null,
        alt: null
      }
    },
    position : 0
  },

  getters: {
    work (state) {
      return state
    }
  },

  mutations: {
    setWork (state, payload) {
      state[payload.tg] = payload.val
    }
  },

  actions: {
    workData ({commit}, work) {
      commit('setWork', {work})
    }
  }
}

export default module
