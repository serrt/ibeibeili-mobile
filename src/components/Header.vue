<template>
  <div class="header container">
    <ul>
      <li class="back">
        <span v-on:click="back()" v-if="backUrl === undefined"><i class="iconfont icon-01fanhui"></i></span>
        <router-link :to="{path: 'home'}" v-else tag="span"><i class="iconfont icon-01fanhui"></i></router-link>
      </li>
      <li class="f-gray title surplus">{{title}}</li>
      <li class="other">
        <span>
         
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  mounted: function () {
  },
  props: ['title', 'backUrl'],
  methods: {
    back: function () {
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
