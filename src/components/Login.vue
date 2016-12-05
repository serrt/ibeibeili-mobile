<template>
  <div>
      <div class="page-box center login-box">
        <div class="BBL-logo">
          <i class="logo"></i>
        </div>
        <div class="login-input user-inputs">
          <ul>
            <li>
              <div class="input-box">
                <label for="username"><i class="iconfont icon-yonghu"></i></label>
                <input type="text" name="username" id="username" placeholder="请输入手机号/用户名">
              </div>
              <div class="tip-box hide">
                请输入手机号/用户名
              </div>
            </li>
            <li>
              <div class="input-box">
                <label for="password"><i class="iconfont icon-suo"></i></label>
                <input type="password" name="password" id="password" placeholder="请输入密码">
              </div>
              <div class="tip-box hide">
                请输入密码
              </div>
            </li>
            <li class="other-option">
              <a href="javascript:void(0);" class="go-reg">立即注册</a>
              <a href="javascript:void(0);" class="forget-password">忘记密码</a>
            </li>
          </ul>
      </div>
      
      <a href="javascript:void(0);" class="logoin">登&nbsp;&nbsp;录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
