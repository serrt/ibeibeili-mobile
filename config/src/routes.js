const routes = [{
  path: '/',
  name: 'home',
  component (resolve) {
    require(['./views/Home.vue'], (resolve))
  }
}, {
  path: '/reg-step1',
  name: 'reg-step1',
  component (resolve) {
    require(['./views/Reg-step1.vue'], (resolve))
  }
}, {
  path: '/reg-step2',
  name: 'reg-step2',
  component (resolve) {
    require(['./views/Reg-step2.vue'], (resolve))
  }
}, {
  path: '/login',
  name: 'login',
  component (resolve) {
    require(['./views/Login.vue'], (resolve))
  }
}, {
  path: '*',
  name: '404',
  component (resolve) {
    require(['./views/NotFound.vue'], (resolve))
  }
}]

export default routes
