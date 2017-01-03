import * as types from '../mutation-types'

const state = {
  id: 8677,
  user: {username: 18223350967, password: 123456, id: 8677},
  accessToken: '123456',
  isLogin: true
}

const getters = {
  isLogin: state => {
    return state.isLogin
  },
  userId: state => {
    return state.id
  }
}

const actions = {
  login: function (state, info) {
    state.commit([types.LOGIN], info)
  }
}

const mutations = {
  [types.LOGIN] (state, info) {
    state.user = info
    state.id = info.id
    state.isLogin = true
  }
}

export default {
  state, getters, mutations, actions
}
