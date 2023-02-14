import { createStore } from "vuex"
// const TOKEN = import.meta.env.VITE_PRIVATE_TOKEN
const TOKEN = ""

export default createStore({
  state() {
    return {
      token: TOKEN || "",
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
