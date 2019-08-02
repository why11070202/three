import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adress: "请选择地址",
  },
  mutations: {
    setAdress(state, val) {
      this.state.adress = val
    }
  },
  actions: {
    setAdress(context, val) {
      context.commit('setAdress', val)
    }

  },
  getters: {
    getAdress(state) {
      return state.adress
    }
  }
})