<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="container reg-box" v-show="page === 1">
      <div class="reg-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="phonenumber"><i class="iconfont icon-shouji"></i></label>
              <input type="text" name="phonenumber" v-model="phone" placeholder="输入您的手机号码"/>
            </div>
            <div class="tip-box" v-show="phone_valid.error">{{phone_valid.msg}}</div>
          </li>
          <li class="verify-code">
            <div class="input-box identifying-code">
              <input type="text" name="code" v-model="code" placeholder="输入您的短信验证码">
              <a href="javascript:void(0)" class="get-code get" v-on:click="getCode()">{{code_btn.click?code_btn.time+code_btn.msg2:code_btn.msg1}}</a>
            </div>
            <div class="tip-box" v-show="code_valid.error">{{code_valid.msg}}</div>
          </li>
          <li class="protocol">
            <span class="tick" v-bind:class="{'untick':!agreement}" v-on:click="agree()"><input type="checkbox" class="i-agree" v-model="agreement"/></span>
            我已阅读并同意
            <a href="u-reg-protocal.html" class="protocol-explain">《倍倍利注册协议》</a>
          </li>
        </ul> 
      </div>
      <a href="javascript:void(0);" class="btn next-step" v-bind:class="{'inactive': next}" v-on:click="nextPage()">下一步</a>
      <p class="login">已有账号？<router-link class="go-reg" :to="{name: 'login'}">马上登录</router-link></p>
    </div>
    <div class="container reg-box" v-show="page === 2">
      <div class="reg-input user-inputs setpassword">
        <ul>
          <li>
            <div class="input-box">
              <label for="password1"><i class="iconfont icon-suo"></i></label>
              <input type="password" name="password" v-model="password" placeholder="请输入密码（6位以上字符）">
            </div>
            <div class="tip-box" v-show="pwd_valid.error">{{pwd_valid.msg}}</div>
          </li>
          <li>
            <div class="input-box password2">
              <label for="password2"><i class="iconfont icon-353245214507"></i></label>
              <input type="password" name="password2" v-model="repassword" placeholder="请确认密码">
            </div>
            <div class="tip-box" v-show="repwd_valid.error">{{repwd_valid.msg}}</div>
          </li>
          <li>
            <div class="input-box referee">
              <label for="referee"><i class="iconfont icon-yonghu1"></i></label>
              <input type="text" name="referee" id="referee" placeholder="请输入推荐编码（选填）">
            </div>
            <div class="tip-box" v-show="invite_valid.error">{{invite_valid.msg}}</div>
          </li>
        </ul>
        <button type="button" class="btn finish-reg" v-bind:class="{'inactive': unsubmit}" v-on:click="register()">注&nbsp;&nbsp;册</button>
      </div>
    </div>
    <div class="container" v-show="page === 3">
      <div class="reg-success">
        <div class="success"></div>
        <h5>恭喜{{phone}}注册成功！</h5>
        <p>您可以直接用手机号码登录</p>
        <router-link class="btn authentication" :to="{name: 'user-verify'}">去实名认证</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import md5 from 'blueimp-md5'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '注册',
      phone: '1822335084',
      phone_valid: {error: false, msg: ''},
      code: '',
      code_valid: {error: true, msg: ''},
      code_btn: {click: false, msg1: '获取验证码', msg2: '秒后点击重新发送', time: 0, timer: null},
      password: '',
      pwd_valid: {error: true, msg: ''},
      repassword: '',
      repwd_valid: {error: true, msg: ''},
      invite_code: '',
      invite_valid: {error: true, msg: ''},
      agreement: true,
      page: 1
    }
  },
  mounted () {
  },
  computed: {
    next: function () {
      return (this.phone_valid.error || this.code_valid.error || !this.agreement)
    },
    unsubmit: function () {
      return (this.repwd_valid.error || this.pwd_valid.error)
    }
  },
  methods: {
    getCode: function () {
      if (!this.phone_valid.error && !this.code_btn.click) {
        this.$http.post('registerCode', {phone_number: this.phone}).then((response) => {
          if (response.data.status !== 0) {
            this.phone_valid = {error: true, msg: response.data.msg}
          } else {
            this.code_btn.click = true
            this.code_btn.time = 10
            let self = this
            if (this.code_btn.timer) {
              clearInterval(this.code_btn.timer)
            }
            this.code_btn.timer = setInterval(function () {
              self.code_btn.time --
              if (self.code_btn.time === 0) {
                self.code_btn.click = false
              }
            }, 1000)
          }
        })
      }
    },
    agree: function () {
      this.agreement = !this.agreement
    },
    nextPage: function () {
      if (!this.next) {
        let data = {phone_number: this.phone, code: this.code}
        this.$http.post('checkCode', data).then((response) => {
          if (response.data.status !== 0) {
            this.code_valid = {error: true, msg: response.data.msg}
          } else {
            this.page = 2
          }
        })
      }
    },
    register: function () {
      let data = {phone_number: this.phone, code: this.code, password: md5(this.password), invite_code: this.invite_code}
      if (!this.unsubmit) {
        Indicator.open()
        this.$http.post('register', data).then((response) => {
          if (response.data.status !== 0) {
            Indicator.close()
            MessageBox('提示', response.data.msg)
          } else {
            data.username = data.phone_number
            data.grant_type = 'password'
            data.client_id = '2'
            data.client_secret = '0rQMzyS6RtjVudAJGXA79ax1dAz5zKe2dgU76M9U'
            data.scope = '*'
            this.$http.post('login', data).then((response) => {
              Indicator.close()
              if (response.data.status === 1) {
                MessageBox('提示', response.data.msg)
              } else {
                this.$store.dispatch('token', response.data.access_token)
                console.log(response.data.access_token)
                this.page = 3
              }
            })
          }
        })
      }
    }
  },
  watch: {
    page: function (value) {
      if (value === 2) {
        this.title = '设置密码'
      } else if (value === 3) {
        this.title = '注册成功'
      } else {
        this.title = '注册'
      }
    },
    phone: function (value) {
      let pat = /[1]\d{10}/
      if (pat.test(value)) {
        this.phone_valid = {error: false, msg: ''}
      } else {
        this.phone_valid = {error: true, msg: '手机号为11位数字'}
      }
    },
    code: function (value) {
      if (value === '') {
        this.code_valid = {error: true, msg: '请输入验证码'}
      } else if (value.length !== 6) {
        this.code_valid = {error: true, msg: '验证码6位'}
      } else {
        this.code_valid = {error: false, msg: ''}
      }
    },
    password: function (value) {
      if (value.length < 6) {
        this.pwd_valid = {error: true, msg: '密码最少6位'}
      } else if (value.length > 10) {
        this.pwd_valid = {error: true, msg: '密码最多10位'}
      } else {
        this.pwd_valid = {error: false, msg: ''}
      }
    },
    repassword: function (value) {
      if (value !== this.password) {
        this.repwd_valid = {error: true, msg: '两次密码不一致'}
      } else {
        this.repwd_valid = {error: false, msg: ''}
      }
    }
  }
}
</script>
<style scoped>
.protocol .untick {
  background-position: 0 0;
}
</style>