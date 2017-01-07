<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container top-box">
      <iframe v-bind:src="src" frameborder="0" width="100%" v-bind:height="height"></iframe>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import { Indicator } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '项目合同',
      src: '',
      height: 0
    }
  },
  mounted () {
    this.height = window.innerHeight - 42 + 'px'
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