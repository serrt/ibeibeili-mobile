<template>
  <div>
    <common-header title="支付密码"></common-header>

      
      <div class="container">
      <div class='certification '>
        <div class="current-steps">
          <img src="../assets/img/certification-step3.png">
        </div>
        <p class="tips">
          注意：为了您的账户安全，请设置支付密码！
        </p>

        <a class="btn set-code">设置支付密码</a>

        <p class="guard">倍倍利联手新浪支付全力保障您的资金安全</p>


        <div class='BBL-xinlang'></div>
      </div>
      


    </div>

  </div>
</template>

<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/iconfont";
  @import "../assets/scss/certification";
</style>

<script>
  import CommonHeader from '../components/CommonHeader'
  export default {
    components: {
      CommonHeader
    }
  }
</script>
