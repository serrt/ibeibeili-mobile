<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container top-box">
      <iframe frameborder="0" width="100%" v-bind:height="height" id="iframe"></iframe>
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
      title: '投资支付',
      html: '',
      height: 0
    }
  },
  mounted () {
    this.height = window.innerHeight - 42 + 'px'
    Indicator.open()
    this.$http.get('user/investPay/' + this.$route.params.sn).then((response) => {
      Indicator.close()
      if (response.data.status === 0) {
        this.html = response.data.html
        let iframe = document.getElementById('iframe')
        // iframe.src = 'data:text/html;charset=utf-8,' + escape(this.html)
        iframe.contentWindow.document.write(this.html)
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