const state = {
  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmMDNlNDFlZGNmNDY1MjVhOGYzZTQxYjZlNjJhOWQwZmQwYjBlM2E0YmFmYjZiOGQ5NWMzMWZkZTJmZWU2NzFhNTRjMDQyMDk3YTYwM2NhIn0.eyJhdWQiOiIyIiwianRpIjoiNmYwM2U0MWVkY2Y0NjUyNWE4ZjNlNDFiNmU2MmE5ZDBmZDBiMGUzYTRiYWZiNmI4ZDk1YzMxZmRlMmZlZTY3MWE1NGMwNDIwOTdhNjAzY2EiLCJpYXQiOjE0ODM1ODA4MTEsIm5iZiI6MTQ4MzU4MDgxMSwiZXhwIjoxNTE1MTE2ODExLCJzdWIiOiI4Njc3Iiwic2NvcGVzIjpbIioiXX0.vlzHsmRlGIfLcG_OwNben--yLMM0p3iErobtymcvVjgAQEmsW8hQkTIeHO6OdgwkmJuv4az6dJLQ3wqb1D_l2qoDX1NkErBaLlLC_TirxtUXMBg-JTEyAYAcrUJgizaqt4Q4ruzmsJkcpeNjtS7rv-HXjevbjyg8jyfg5iogMxCG7YfigtkjfmOqKjMfy1_hkZSwLzaeT74V0Z4eHUNFyIsD5jzX1_lHISDfF2nkvCxVsvZFvHzSj7-w-YHf6cESbRSkCdYdTcKcNokL2yVCWcL6emAe-Hj95npK4CCC5nxk3ThXRrx4PQThrI-NyDpMsIzhwn60X6HK0IZhUNjWSVwMpBjIrP8OzSKw0gzMIxdPu-EfyJtNZ1CjbUUH86gsgfvULV0OeO6eItPllbZv8KgWoz6soLyktwGF1obzTpcMXeFQD8O2OPxKr3bbZ7Ea0tm1XwnNu1Fy6stSgZPBxbzAjs_o5BNEsO0MCpdZM5c3pAttFXgPpHulv_jzk9wc7BgbopFXrHFZ_ZlNs9kd9oA6VeK7J_PMSaYYMJTUR4Io2259DgJ2QUBW-KTsnZvJlp_nxVF6kN0yUajOyzGdtiUrDHChMf8UkmzAMfX_USsPYtK7InJrQSDM6G7ci-QvBl4frWE324lb4YfgImI2cgpWHsHDjhsEGv5GBWZ9bZo',
  // accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyNmUxODBhYTkwYTU4ODBkY2NkM2Q5YTRjYmE3N2Q4OGUwY2U3NmFkN2NiOTQ5ODg4ZDNlMDlmOWJiYjYxZWM4MmU4MjAxYjljYmY3YzEyIn0.eyJhdWQiOiIyIiwianRpIjoiYTI2ZTE4MGFhOTBhNTg4MGRjY2QzZDlhNGNiYTc3ZDg4ZTBjZTc2YWQ3Y2I5NDk4ODhkM2UwOWY5YmJiNjFlYzgyZTgyMDFiOWNiZjdjMTIiLCJpYXQiOjE0ODM5Mzk2ODQsIm5iZiI6MTQ4MzkzOTY4NCwiZXhwIjoxNTE1NDc1Njg0LCJzdWIiOiI5MjI3Iiwic2NvcGVzIjpbIioiXX0.vLDVk-5IhUv2mQG1Tv4P225cDO8bv8GmsChIlGaZU1UveW5e4UbcO3TwSIAPMUGbuD-mJDrE-wwEpVYF36tzVfPN-myhxJTLhcsAxJzz_c54DLx8l-U6lJGJdLAJCecZqXFtqFsS5tfum2NHATyviqL7sk9sUYGxnijXwgaPwc5E9n2l4bgnpG70H_M2V9sNjSWqua0tJ8rp2aZUHhaf7hTyUjHl31vRQHZN8FIgyxDo6KAgk3Zn9qpn335WvuNigD0d_cUkQ4ydG1Uy_0Rhu1JdCovJBF7HgWXCfBpaGLpu4IPre66qrq1Cu2gXt9lPAip3X_Z03bMLZfBX-UU45PvMmPkfelyLQtTK71uniAX7bTaZVzsq_ZTukuSgvyuSI6R6dXaTyoTPcd96yilVszmVtVRC6uLn7CLoI020W7zU3zDHtZwakl-SSDoC7SHq_As_bh-Bz1lr_ZcB9GYUBk97UFTdOpSJrkFqmLb9_ieem28y9R4CNg6KJLVTI-6og2xDhUiDmxXA268GEJOxw50tzuq4tFu4GTBXkQV7nUhCra29cFZo_F-Pu8M639hcWBzC96sSfAwA7Jt1KkSVKDbGwaUkGJWonmf1MhXgAsZR8XfJN2vm3RoW7SYJQojqE0H0BmD29P3V_jhKi0QyyprO6Yhuw4uPeEPnwpRQAQA',
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
    window.sessionStorage.bbl_user = JSON.stringify(info)
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
