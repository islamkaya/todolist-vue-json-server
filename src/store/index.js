import { createStore } from 'vuex'

export default createStore({
  state: {
    jwt_token: String
  },
  getters: {
    jwt_token: (state) => state.jwt_token
  },
  mutations: {
    set_jwt_token(state, data) {
      state.jwt_token = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
