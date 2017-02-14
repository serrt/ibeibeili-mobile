const state = {
  financedMoney: false, // 累计融资金额
  profitMoney: false, // 累计投资人收益
  planMoney: false // 风险倍付金计划
}

const getters = {
  platformMoney: state => {
    return state
  },
  financedMoney: state => {
    return state.financedMoney
  },
  profitMoney: state => {
    return state.profitMoney
  },
  planMoney: state => {
    return state.planMoney
  }
}

const actions = {
  platformMoney: function (state, info) {
    state.commit('platformMoney', info)
  }
}

const mutations = {
  platformMoney: function (state, info) {
    for (let i in info) {
      state[i] = info[i]
    }
  }
}

export default {
  state, getters, mutations, actions
}
