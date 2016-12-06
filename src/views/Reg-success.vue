<template>
  <div>
    <common-header title="注册成功"></common-header>

    <div class="container">
     
      <div class="reg-success">
    
        <div class="success">
        </div>
        <h5>恭喜15825452564注册成功！</h5>
        <p>您可以直接用手机号码登录</p>

        <a href="javascript:void(0)" class="btn authentication">去实名认证</a>
      </div>

    </div>

  </div>
</template>

<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/iconfont";
  @import "../assets/scss/reg";
</style>

<script>
  import CommonHeader from '../components/CommonHeader'
  export default {
    components: {
      CommonHeader
    }
  }
</script>
