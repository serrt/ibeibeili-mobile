const routes = [{
  path: '/',
  name: 'home',
  component (resolve) {
    require(['./views/Home.vue'], (resolve))
  }
}, {
  path: '*',
  name: '404',
  component (resolve) {
    require(['./views/NotFound.vue'], (resolve))
  }
}]

export default routes
