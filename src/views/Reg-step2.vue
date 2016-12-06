<template>
  <div>
    <common-header title="注册"></common-header>

    <div class="container reg-box">
    
    
      <div class="reg-input user-inputs setpassword">
        <ul>
          <li>
            <div class="input-box">
              <label for="password1"><i class="iconfont icon-suo"></i></label>
              <input type="password" name="password1" id="password1" placeholder="请输入密码（6位以上字符）">
            </div>
            <div class="tip-box hide">
              请输入密码（6位以上字符）
            </div>
          </li>
          <li>
            <div class="input-box password2">
              <label for="password2"><i class="iconfont icon-353245214507"></i></label>
              <input type="password" name="password2" id="password2" placeholder="请确认密码">
            </div>
            <div class="tip-box hide">
              请输入密码
            </div>
          </li>
          <li>
            <div class="input-box referee">
              <label for="referee"><i class="iconfont icon-yonghu1"></i></label>
              <input type="text" name="referee" id="referee" placeholder="请输入推荐编码（选填）">
            </div>
            <div class="tip-box hide">
              请输入推荐编码错误
            </div>
          </li>
        
        </ul>
      
        <a href="javascript:void(0);" class="btn finish-reg">注&nbsp;&nbsp;册</a>
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
