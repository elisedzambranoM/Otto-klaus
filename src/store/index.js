import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    
  },
  mutations: {
    UPDATE_CURRENT_USER(state, user) {state.currentUser = user}
  },
  actions: {
    updateCurrentUser({commit}, user){
    commit('UPDATE_CURRENT_USER', user)
    }
  },
  modules: {
  }
})
