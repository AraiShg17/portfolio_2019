const module = {

  state: {
    /* モーダル切り替え用 */
    login: false,
    /* モーダル切り替え用 */
    modal: false,
    /* マスク替え用 */
    mask: false,
    /* ページ全体の高さ用 */
    height: document.documentElement.scrollHeight || document.body.scrollHeight,
    /* スクロール量 */
    scroll: 0,
    /* セキュリティ */
    security: []
  },

  getters: {
    login (state) {
      return state.login
    },
    modal (state) {
      return state.modal
    },
    mask (state) {
      return state.mask
    },
    height (state) {
      return state.height
    },
    scroll (state) {
      return state.scroll
    },
    security (state) {
      return state.security
    }
  },

  mutations: {
    setLogin (state, payload) {
      state.login = payload
    },
    setModal (state, payload) {
      state.modal = payload
    },
    setMask (state, payload) {
      state.mask = payload
    },
    setHeight (state, payload) {
      state.height = payload
    },
    setScroll (state, payload) {
      state.scroll = payload
    },
    setSecurity (state, payload) {
      state.security = (payload === 'UUa3AS7')
    }
  },

  actions: {
    loginData ({commit}, login) {
      commit('setLogin', {login})
    },
    modalData ({commit}, modal) {
      commit('setModal', {modal})
    },
    maskData ({commit}, mask) {
      commit('setMask', {mask})
    },
    heightData ({commit}, height) {
      commit('setHeight', {height})
    },
    scrollData ({commit}, scroll) {
      commit('setScroll', {scroll})
    },
    securityData ({commit}, security) {
      commit('setSecurity', {security})
    }
  }
}

export default module
