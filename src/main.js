import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import appEnv from '../env'
import store from './store'
import 'mint-ui/lib/style.css'
import {InfiniteScroll, MessageBox, Indicator, Swipe, SwipeItem, Spinner} from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import filters from './filters'
import VuePreview from 'vue-preview' // 图片预览

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
Vue.use(InfiniteScroll)
Vue.use(VuePreview)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Spinner.name, Spinner)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter({
  // mode: 'history',
  routes
})

// Api 请求根地址
axios.defaults.baseURL = appEnv.apiUrl

// http 请求
axios.interceptors.request.use((config) => {
  // 请求头部添加token
  config.headers.common['Authorization'] = 'Bearer ' + store.getters.token
  return config
}, (error) => {
  return Promise.reject(error)
})

// 获取token,用户信息
if (window.localStorage.bbl_token) {
  store.dispatch('token', JSON.parse(window.localStorage.bbl_token))
  if (window.localStorage.bbl_user) {
    store.dispatch('user', JSON.parse(window.localStorage.bbl_user))
  } else {
    axios.post('user/user').then((response) => {
      if (response.data.code === 200) {
        store.dispatch('user', response.data)
      } else {
        MessageBox.alert(response.data.message, '提示')
      }
    })
  }
}

// http 响应
axios.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    router.push({name: 'login'})
  } else if (response.data.code === 404) {
    Indicator.close()
    router.replace({name: 'not-found'})
  } else if (response.data.code === 500) {
    MessageBox('网络错误,刷新重试')
    window.location.reload()
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
      router.push({name: 'login'})
    }
  } else {
    console.log('Error', error.message)
  }
  MessageBox.alert('请稍后再试')
  Indicator.close()
  return Promise.reject(error)
})

Vue.prototype.$http = axios
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.isLogin) {
      next()
    } else {
      Indicator.close()
      next({path: '/login'})
    }
  } else {
    next()
  }
})
if (window.app.getConnection) {
  document.addEventListener('deviceready', function () {
    new Vue({router, store}).$mount('#app')
    // 检查网络状态
    if (window.app.getConnection() === 'none') {
      router.push({name: 'not-found'})
    }
    // 检查更新
    if (!/ios/i.test(window.device.platform)) {
      window.cordova.getAppVersion.getVersionNumber(function (version) {
        var versionCode = parseInt(version.toString().replace(/\./g, ''))
        var data = {
          versionCode: 101,
          versionName: '1.0.1',
          msg: '有新版本可供更新.\n 1.界面美化 \n 2.性能优化',
          apk: 'https://www.ibeibeili.com/ibeibeili.apk'
        }
        if (versionCode < data.versionCode) {
          MessageBox.confirm(data.msg, '倍倍利').then(action => {
            window.open(data.apk, '_system', 'location=yes')
          })
        }
      })
    }
  }, false)
} else {
  new Vue({router, store}).$mount('#app')
}

// baidu统计
Vue.prototype.baidu = function (code) {
  if (appEnv.appEnv === 'production') {
    let hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?' + code
    let s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  }
}
