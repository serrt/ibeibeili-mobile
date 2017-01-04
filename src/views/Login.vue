<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="container login-box">
      <div class="BBL-logo">
        <i class="logo"></i>
      </div>
      <div class="login-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="username"><i class="iconfont icon-yonghu"></i></label>
              <input type="text" name="username" v-model="username" placeholder="请输入手机号/用户名"/>
            </div>
            <div class="tip-box" v-show="name_input.error">{{name_input.msg}}</div>
          </li>
          <li>
            <div class="input-box">
              <label for="password"><i class="iconfont icon-suo"></i></label>
              <input type="password" name="password" v-model="password" placeholder="请输入密码"/>
            </div>
            <div class="tip-box" v-show="pwd_input.error">{{pwd_input.msg}}</div>
          </li>
          <li class="other-option">
            <router-link class="go-reg" :to="{name: 'register'}">立即注册</router-link>
            <a href="javascript:void(0);" class="forget-password">忘记密码</a>
          </li>
        </ul>
      </div>
      <span class="btn login" v-bind:class="{'inactive': unsubmit}" v-on:click="login()">登&nbsp;&nbsp;录</span>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '登录',
      username: '',
      password: '',
      name_input: {error: true, msg: ''},
      pwd_input: {error: true, msg: ''}
    }
  },
  mounted () {
  },
  computed: {
    unsubmit: function () {
      return (this.name_input.error || this.pwd_input.error)
    }
  },
  methods: {
    login: function () {
      let data = {username: this.username, password: this.password}
      if (!this.unsubmit) {
        console.log(data)
      }
    }
  },
  watch: {
    username: function (value) {
      if (value === '') {
        this.name_input = {error: true, msg: '请输入手机号/用户名'}
      } else {
        this.name_input = {error: false, msg: ''}
      }
    },
    password: function (value) {
      if (value === '') {
        this.pwd_input = {error: true, msg: '请输入密码'}
      } else {
        this.pwd_input = {error: false, msg: ''}
      }
    }
  }
}
</script>
<style scoped>
</style>