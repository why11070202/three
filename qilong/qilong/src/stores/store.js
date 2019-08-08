import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import  mutations from './mutations'
import  actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  // 仓库里面的值
  state,
  // 用于修改仓库里面的值
  mutations,
  actions,
    // 定义getters方法
  getters,
})
