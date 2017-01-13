const state = {
  accessToken: null,
  id: null,
  user: {},
  isLogin: false
}

const getters = {
  isLogin: state => {
    return state.isLogin
  },
  userId: state => {
    return state.id
  },
  user: state => {
    return state.user
  },
  token: state => {
    return state.accessToken
  }
}

const actions = {
  user: function (state, info) {
    state.commit('user', info)
  },
  token: function (state, info) {
    state.commit('token', info)
  },
  logout: function (state) {
    state.commit('logout')
  }
}

const mutations = {
  user: function (state, info) {
    state.user = info
    window.localStorage.bbl_user = JSON.stringify(info)
    state.id = info.id
    state.isLogin = true
  },
  token: function (state, info) {
    state.accessToken = info
    window.localStorage.bbl_token = JSON.stringify(info)
  },
  logout: function (state) {
    state.accessToken = null
    state.isLogin = false
    state.id = null
    state.user = {}
    window.localStorage.bbl_token = ''
    window.localStorage.bbl_user = ''
  }
}

export default {
  state, getters, mutations, actions
}
