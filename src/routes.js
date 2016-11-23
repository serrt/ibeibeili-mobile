const routes = [{
  path: '/',
  name: 'home',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
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
