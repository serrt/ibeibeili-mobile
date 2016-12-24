const routes = [{
  path: '/',
  name: 'root',
  component: (resolve) => {
    require(['./views/Home.vue'], (resolve))
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
    require(['./views/ProjectList.vue'], (resolve))
  }
}, {
  path: '/project/:id',
  name: 'project-detail',
  component: (resolve) => {
    require(['./views/ProjectDetail.vue'], (resolve))
  }
}, {
  path: '/project/:id/invest-project',
  name: 'project-invest',
  component: (resolve) => {
    require(['./views/ProjectInvest.vue'], (resolve))
  }
}, {
  path: '/project/:id/invest-success',
  name: 'invest-success',
  component: (resolve) => {
    require(['./views/InvestSuccess.vue'], (resolve))
  }
}, {
  path: '/find',
  name: 'find',
  component: (resolve) => {
    require(['./views/Find.vue'], (resolve))
  }
}, {
  path: '/user',
  name: 'user',
  component: (resolve) => {
    require(['./views/User.vue'], (resolve))
  }
}, {
  path: '/recharge',
  name: 'recharge',
  component: (resolve) => {
    require(['./views/Recharge.vue'], (resolve))
  }
}, {
  path: '/withdraw',
  name: 'withdraw',
  component: (resolve) => {
    require(['./views/Withdraw.vue'], (resolve))
  }
}, {
  path: '/sign',
  name: 'sign',
  component: (resolve) => {
    require(['./views/User.vue'], (resolve))
  }
}, {
  path: '/gift',
  name: 'gift',
  component: (resolve) => {
    require(['./views/Gift.vue'], (resolve))
  }
}, {
  path: '*',
  name: '404',
  component (resolve) {
    require(['./views/NotFound.vue'], (resolve))
  }
}]

export default routes
