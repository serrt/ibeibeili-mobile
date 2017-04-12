<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container top-box">
      <iframe frameborder="0" width="100%" v-bind:height="height" v-bind:src="src" name="iframe" id="iframe"></iframe>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox } from 'mint-ui'
import env from '../../env'

export default {
  components: {HeaderTop, Indicator, MessageBox, env},
  data: function () {
    return {
      title: '投资合同',
      data: {title: '', content: ''},
      height: window.innerHeight - 42 + 'px',
      src: ''
    }
  },
  mounted () {
    this.src = env.apiUrl + 'project-contract?project_id=' + this.$route.params.id + '&user_id=' + this.$store.getters.userId
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