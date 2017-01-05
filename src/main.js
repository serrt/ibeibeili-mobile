import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import appEnv from '../env'
import store from './store'
import 'mint-ui/lib/style.css'
import {Loadmore} from 'mint-ui'
import filters from './filters'
// import VuePreview from 'vue-preview' // 图片预览

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
// Vue.use(VuePreview)
Vue.component('loadmore', Loadmore)

const router = new VueRouter({
  // mode: 'history',
  routes
})

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.isLogin) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
})

// Api 请求根地址
axios.defaults.baseURL = appEnv.apiUrl
axios.interceptors.request.use((config) => {
  config.headers.common['Authorization'] = 'Bearer ' + store.getters.token
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    router.replace({name: 'login'})
  } else if (response.data.code === 500) {
    console.error(response.data)
  }
  return response
}, (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      console.log('请求没有找到')
    } else if (error.response.status === 405) {
      console.log('方法不被允许')
    } else if (error.response.status === 401) {
      console.log('授权失败')
    }
  } else {
    console.log('Error', error.message)
  }
  return Promise.reject(error)
})
Vue.prototype.$http = axios

new Vue({
  router, store
}).$mount('#app')
