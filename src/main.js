import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import appEnv from '../env'
import AwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(AwesomeSwiper)
Vue.use(infiniteScroll)

// Api 请求根地址
Vue.http.options.root = appEnv.apiUrl

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

new Vue({
  router,
  directives: { infiniteScroll }
}).$mount('#app')
