import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import appEnv from '../env'
import 'mint-ui/lib/style.css'
import { Loadmore } from 'mint-ui'
import filters from './filters'

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
Vue.component('loadmore', Loadmore)
// Api 请求根地址
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
  // mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')
