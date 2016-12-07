const routes = [{
  path: '/',
  name: 'home',
  component (resolve) {
    require(['./views/Home.vue'], (resolve))
  }
}, {
  path: '/home',
  name: 'home',
  component (resolve) {
    require(['./views/Home.vue'], (resolve))
  }
}, {
  path: '/setup',
  name: 'setup',
  component (resolve) {
    require(['./views/Setup.vue'], (resolve))
  }
}, {
  path: '/certification-step3',
  name: 'certification-step3',
  component (resolve) {
    require(['./views/Certification-step3.vue'], (resolve))
  }
}, {
  path: '/certification-step2',
  name: 'certification-step2',
  component (resolve) {
    require(['./views/Certification-step2.vue'], (resolve))
  }
}, {
  path: '/certification-step1',
  name: 'certification-step1',
  component (resolve) {
    require(['./views/Certification-step1.vue'], (resolve))
  }
}, {
  path: '/reg-protocol',
  name: 'reg-protocol',
  component (resolve) {
    require(['./views/Reg-protocol.vue'], (resolve))
  }
}, {
  path: '/reg-success',
  name: 'reg-success',
  component (resolve) {
    require(['./views/Reg-success.vue'], (resolve))
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
