import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import appEnv from '../env'
import TouchRipple from 'vue-touch-ripple'
import axios from 'axios'
import Loadmore from 'vue-loadmore'

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

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')
