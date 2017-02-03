const state = {
  list: []
}

const getters = {
  articleList: state => {
    return state.list
  }
}

const actions = {
  article: function (state, info) {
    state.commit('article', info)
  }
}

const mutations = {
  article: function (state, info) {
    if (info.length > 0) {
      state.list[info[0].cate] = info
    }
  }
}

export default {
  state, getters, mutations, actions
}
