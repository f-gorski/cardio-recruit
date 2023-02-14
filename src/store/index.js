import { createStore } from "vuex"

export default createStore({
  state() {
    return {
      token: "",
    }
  },
  mutations: {
    token(state, newToken) {
      state.token = newToken
    },
  },
  actions: {
    setToken({ commit }, newToken) {
      commit("token", newToken)
    },
  },
  getters: {
    hasToken(state) {
      return state.token.length > 0
    },
    token(state) {
      return state.token
    },
  },
})
