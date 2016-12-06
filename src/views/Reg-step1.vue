<template>
  <div>
    <common-header title="注册"></common-header>

    <div class="container reg-box">
      <div class="reg-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="phonenumber"><i class="iconfont icon-shouji"></i></label>

              <input type="text" name="phonenumber" id="phonenumber" placeholder="输入您的手机号码">
            </div>
            <div class="tip-box hide">
              输入您的手机号码
            </div>
          </li>
          <li class="verify-code">
            <div class="input-box identifying-code">
              <input type="text" name="code" id="code" placeholder="输入您的短信验证码">
              <a href="javascript:void(0)" class="get-code get">获取验证码</a>
            </div>
            <div class="tip-box hide">
              输入您的短信验证码
            </div>
          </li>
          <li class="protocol">
            <span class="tick"><input type="checkbox" class="i-agree"></span>我已阅读并同意<span class="protocol-explain">《倍倍利注册协议》</span>
          </li>
        </ul> 
      </div>
      
      <a href="javascript:void(0);" class="btn next-step">下一步</a>

      <p class="login">已有账号？<a href="javascript:void(0)">马上登录</a></p>
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
