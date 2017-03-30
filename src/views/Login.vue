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
            <router-link class="forget-password" :to="{name: 'reset-password'}">忘记密码</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn login" v-bind:class="{'inactive': unsubmit}" v-on:click="login()">
        <mt-spinner class="text" v-show="busy" type="fading-circle"></mt-spinner>
        <span class="text">登&nbsp;&nbsp;录</span>
      </button>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import md5 from 'blueimp-md5'
import { Toast } from 'mint-ui'

export default {
  components: {HeaderTop, Toast},
  beforeCreate: function () {
    if (this.$store.getters.isLogin) {
      this.$router.back()
    }
  },
  data: function () {
    return {
      title: '登录',
      username: '',
      password: '',
      busy: false,
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
      if (this.busy) {
        return false
      }
      let data = {username: this.username, password: md5(this.password)}
      if (!this.unsubmit) {
        data.grant_type = 'password'
        data.client_id = '2'
        data.client_secret = '0rQMzyS6RtjVudAJGXA79ax1dAz5zKe2dgU76M9U'
        data.scope = '*'
        this.busy = true
        this.$http.post('login', data).then((response) => {
          if (response.data.status === 1) {
            this.busy = false
            Toast(response.data.msg)
            this.password = ''
          } else {
            this.$store.dispatch('token', response.data.access_token)
            console.log(response.data.access_token)
            this.$http.post('user/user').then((response) => {
              if (response.data.code === 200) {
                this.$store.dispatch('user', response.data)
                this.$router.back()
              }
            })
          }
        })
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
.btn.login{
  padding: 3px 0;
}
.btn.login .text{
  display: inline-block;
  height: 28px;
}
.btn.login .mint-spinner-fading-circle{
  margin-top: 10px;
}
</style>