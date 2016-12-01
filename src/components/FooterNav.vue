<template>
  <div>
  	<div class="foot-nav fixed">
      <router-link to="/home" class="nav-items text-center home"><i></i><span>首页</span></router-link>
      <router-link to="/projects" class="nav-items text-center invest"><i></i><span>投资</span></router-link>
      <router-link to="/user" class="nav-items text-center account"><i></i><span>我的账户</span></router-link>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
