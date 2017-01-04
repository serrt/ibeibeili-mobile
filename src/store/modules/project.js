const state = {
  info: {},
  attr: []
}

const getters = {
  projectId: state => {
    return state.info.id
  },
  projectInfo: state => {
    return state.info
  },
  projectAttr: state => {
    return state.attr
  }
}

const actions = {
  project: function (state, info) {
    state.commit('project', info)
  },
  attr: function (state, info) {
    state.commit('attr', info)
  }
}

const mutations = {
  project: function (state, info) {
    state.info = info
  },
  attr: function (state, info) {
    state.attr = info
  }
}

export default {
  state, getters, mutations, actions
}
