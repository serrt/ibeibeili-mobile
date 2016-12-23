const routes = [{
  path: '/',
  name: 'root',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/home',
  name: 'home',
  component (resolve) {
    require(['./views/Home.vue'], (resolve))
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
  path: '/project/:id',
  name: 'project-detail',
  component: (resolve) => {
    require.ensure(['./views/ProjectDetail.vue'], () => {
      resolve(require('./views/ProjectDetail.vue'))
    })
  }
}, {
  path: '/project/investProject/:id',
  name: 'project-invest',
  component: (resolve) => {
    require.ensure(['./views/ProjectInvest.vue'], () => {
      resolve(require('./views/ProjectInvest.vue'))
    })
  }
}, {
  path: '/find',
  name: 'find',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
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
  path: '*',
  name: '404',
  component (resolve) {
    require(['./views/NotFound.vue'], (resolve))
  }
}]

export default routes
