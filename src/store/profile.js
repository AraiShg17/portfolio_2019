const module = {

  state: {
    me: {
      name: null,
      age: null,
      sex: null,
      live: null,
      history: null,
      skill: null,
      git: null,
      qiita: null
    },
    message: ''
  },

  getters: {
    profile (state) {
      return state
    }
  },

  mutations: {
    setProfile (state, payload) {
      if(payload.tg === undefined) {
        state.me = payload
      } else if(( payload.tg === 'skill') || ( payload.tg === 'history')) {
        state.me[payload.tg] = payload.val.split('、')
      } else {
        state.me[payload.tg] = payload.val
      }
    }
  },

  actions: {
    profileData ({commit}, profile) {
      commit('setProfile', {profile})
    }
  }
}

export default module
