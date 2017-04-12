<template>
  <div>
    <div class="header container">
      <ul>
        <li class="back">
          <router-link :to="{name: 'user-project', params: {refresh: 1}}" tag="span" replace><i class="iconfont icon-01fanhui"></i></router-link>
        </li>
        <li class="f-gray title surplus">{{title}}</li>
        <li class="other"><span></span></li>
      </ul>
    </div>
    <div class="full-container top-box">
      <iframe frameborder="0" width="100%" v-bind:height="height" name="iframe" id="iframe"></iframe>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
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
        MessageBox.alert(response.data.msg, '错误')
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