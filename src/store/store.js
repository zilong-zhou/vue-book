import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isCollapse: false,
  tabsPage: [{title: '首页', name: '/home'}], //定义tabs 所需参数
  TabsValue: ''
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
