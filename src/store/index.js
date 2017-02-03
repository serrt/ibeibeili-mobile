import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import userInfo from './modules/user-info'
import project from './modules/project'
import article from './modules/article'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  actions,
  modules: {userInfo, project, article},
  strict: debug
})
