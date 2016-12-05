import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import appEnv from '../env'

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
