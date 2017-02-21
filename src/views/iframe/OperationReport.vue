<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container top-box">
      <iframe frameborder="0" width="100%" v-bind:height="height" v-bind:src="src" name="iframe" id="iframe"></iframe>
    </div>
  </div>
</template>

<script>
import env from '../../../env'
import HeaderTop from '../../components/Header'

export default {
  components: {HeaderTop, env},
  data: function () {
    return {
      title: '运营报告',
      height: 100,
      src: ''
    }
  },
  mounted () {
    this.height = window.innerHeight
    this.src = env.baseUrl + '/discovery/report'
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style scoped>
</style>