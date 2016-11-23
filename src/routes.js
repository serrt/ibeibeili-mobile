const routes = [{
  path: '/',
  name: 'home',
  component: (resolve) => {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}]

export default routes
