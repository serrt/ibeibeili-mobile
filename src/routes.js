const routes = [{
  path: '/',
  name: 'home',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/home',
  name: 'index',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/projects',
  name: 'projects',
  component: (resolve) => {
    require.ensure(['./views/ProjectList.vue'], () => {
      resolve(require('./views/ProjectList.vue'))
    })
  }
}, {
  path: '/user',
  name: 'user',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/login',
  name: 'login',
  component: (resolve) => {
    require.ensure(['./views/Login.vue'], () => {
      resolve(require('./views/Login.vue'))
    })
  }
}, {
  path: '*',
  name: '404',
  component: (resolve) => {
    require.ensure(['./views/NotFound.vue'], () => {
      resolve(require('./views/NotFound.vue'))
    })
  }
}]

export default routes
