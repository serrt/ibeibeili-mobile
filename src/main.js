import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import appEnv from '../env'
import TouchRipple from 'vue-touch-ripple'
import axios from 'axios'
import Loadmore from 'vue-loadmore'
import filters from './filters'

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
Vue.use(TouchRipple)
Vue.component('loadmore', Loadmore)
// Api 请求根地址
Vue.prototype.$http = axios

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
Vue.prototype.env = appEnv
Vue.use(VueRouter)

axios.defaults.baseURL = appEnv.apiUrl
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      console.log('请求没有找到')
    } else if (error.response.status === 405) {
      console.log('方法不被允许')
    }
  } else {
    console.log('Error', error.message)
  }
  return Promise.reject(error)
})

Vue.prototype.$http = axios

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
