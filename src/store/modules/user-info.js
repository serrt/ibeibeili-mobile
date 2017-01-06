const state = {
  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmMDNlNDFlZGNmNDY1MjVhOGYzZTQxYjZlNjJhOWQwZmQwYjBlM2E0YmFmYjZiOGQ5NWMzMWZkZTJmZWU2NzFhNTRjMDQyMDk3YTYwM2NhIn0.eyJhdWQiOiIyIiwianRpIjoiNmYwM2U0MWVkY2Y0NjUyNWE4ZjNlNDFiNmU2MmE5ZDBmZDBiMGUzYTRiYWZiNmI4ZDk1YzMxZmRlMmZlZTY3MWE1NGMwNDIwOTdhNjAzY2EiLCJpYXQiOjE0ODM1ODA4MTEsIm5iZiI6MTQ4MzU4MDgxMSwiZXhwIjoxNTE1MTE2ODExLCJzdWIiOiI4Njc3Iiwic2NvcGVzIjpbIioiXX0.vlzHsmRlGIfLcG_OwNben--yLMM0p3iErobtymcvVjgAQEmsW8hQkTIeHO6OdgwkmJuv4az6dJLQ3wqb1D_l2qoDX1NkErBaLlLC_TirxtUXMBg-JTEyAYAcrUJgizaqt4Q4ruzmsJkcpeNjtS7rv-HXjevbjyg8jyfg5iogMxCG7YfigtkjfmOqKjMfy1_hkZSwLzaeT74V0Z4eHUNFyIsD5jzX1_lHISDfF2nkvCxVsvZFvHzSj7-w-YHf6cESbRSkCdYdTcKcNokL2yVCWcL6emAe-Hj95npK4CCC5nxk3ThXRrx4PQThrI-NyDpMsIzhwn60X6HK0IZhUNjWSVwMpBjIrP8OzSKw0gzMIxdPu-EfyJtNZ1CjbUUH86gsgfvULV0OeO6eItPllbZv8KgWoz6soLyktwGF1obzTpcMXeFQD8O2OPxKr3bbZ7Ea0tm1XwnNu1Fy6stSgZPBxbzAjs_o5BNEsO0MCpdZM5c3pAttFXgPpHulv_jzk9wc7BgbopFXrHFZ_ZlNs9kd9oA6VeK7J_PMSaYYMJTUR4Io2259DgJ2QUBW-KTsnZvJlp_nxVF6kN0yUajOyzGdtiUrDHChMf8UkmzAMfX_USsPYtK7InJrQSDM6G7ci-QvBl4frWE324lb4YfgImI2cgpWHsHDjhsEGv5GBWZ9bZo',
  id: null,
  user: {},
  isLogin: true
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
  }
}

const mutations = {
  user: function (state, info) {
    state.user = info
    state.id = info.id
  },
  token: function (state, info) {
    state.accessToken = info
    state.isLogin = true
  }
}

export default {
  state, getters, mutations, actions
}
