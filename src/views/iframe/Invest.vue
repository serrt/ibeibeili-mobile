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
      title: '新浪用户中心',
      user: this.$store.getters.user,
      src: '',
      height: 0
    }
  },
  mounted () {
    this.height = window.innerHeight - 42 + 'px'
    Indicator.open()
    this.$http.get('user/sinaInfo').then((response) => {
      Indicator.close()
      if (response.data.status === 0) {
        this.src = response.data.redirect_url
      } else {
        window.alert(response.data.msg)
      }
    })
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