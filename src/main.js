import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import appEnv from '../env'

Vue.use(VueRouter)
Vue.use(VueResource)

// Api 请求根地址
Vue.http.options.root = appEnv.apiUrl

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')
