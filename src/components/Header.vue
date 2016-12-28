<template>
  <div class="header container">
    <ul>
      <li class="back">
        <span v-on:click="back()"><i class="iconfont icon-01fanhui"></i></span>
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
  props: ['title'],
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
