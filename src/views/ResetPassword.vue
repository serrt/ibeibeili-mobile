<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="container reg-box" v-show="page===1">
      <div class="reg-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="phonenumber"><i class="iconfont icon-shouji"></i></label>
              <input type="text" name="phonenumber" v-model="info.phone_number" placeholder="输入您的手机号码"/>
            </div>
            <div class="tip-box" v-show="phone_valid.error">{{phone_valid.msg}}</div>
          </li>
          <li class="verify-code">
            <div class="input-box identifying-code">
              <input type="text" name="code" v-model="info.code" placeholder="输入您的短信验证码"/>
              <a href="javascript:void(0)" class="get-code get" v-on:click="getCode()">{{code_btn.click?code_btn.time+code_btn.msg2:code_btn.msg1}}</a>
            </div>
            <div class="tip-box" v-show="code_valid.error">{{code_valid.msg}}</div>
          </li>
        </ul> 
      </div>
      <button type="button" class="btn next-step" v-bind:class="{inactive: nextStatus}" v-on:click="nextPage">下一步</button>
    </div>
    <div class="container reg-box" v-show="page===2">
      <div class="reg-input user-inputs setpassword">
        <ul>
          <li>
            <div class="input-box">
              <label for="password1"><i class="iconfont icon-suo"></i></label>
              <input type="password" name="password1" v-model="info.pwd" placeholder="请输入密码（6位以上字符）"/>
            </div>
            <div class="tip-box" v-show="pwd_valid.error">{{pwd_valid.msg}}</div>
          </li>
          <li>
            <div class="input-box password2">
              <label for="password2"><i class="iconfont icon-353245214507"></i></label>
              <input type="password" name="password2" v-model="info.repwd" placeholder="请再次输入密码"/>
            </div>
            <div class="tip-box" v-show="repwd_valid.error">{{repwd_valid.msg}}</div>
          </li>
        </ul>
        <button type="button" class="btn finish-reg" v-bind:class="{inactive: submitStaus}" v-on:click="submit">确&nbsp;&nbsp;定</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import md5 from 'blueimp-md5'
import { Indicator, MessageBox, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, MessageBox, Indicator, Toast},
  data: function () {
    return {
      page: 2,
      info: {phone_number: '', code: '', pwd: '', repwd: ''},
      code_btn: {click: false, msg1: '获取验证码', msg2: '秒后点击重新发送', time: 0, timer: null},
      phone_valid: {error: true, msg: ''},
      code_valid: {error: true, msg: ''},
      pwd_valid: {error: true, msg: ''},
      repwd_valid: {error: true, msg: ''}
    }
  },
  mounted () {
  },
  computed: {
    title: function () {
      if (this.page === 1) {
        return '找回密码'
      } else if (this.page === 2) {
        return '重置密码'
      }
    },
    nextStatus: function () {
      return (this.phone_valid.error || this.code_valid.error)
    },
    submitStaus: function () {
      return (this.pwd_valid.error || this.repwd_valid.error)
    }
  },
  methods: {
    getCode: function () {
      if (!this.phone_valid.error && !this.code_btn.click) {
        this.$http.post('resetPasswordGetCode', this.info).then((response) => {
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
    nextPage: function () {
      if (!this.nextStatus) {
        Indicator.open()
        this.$http.post('resetPasswordCheckCode', this.info).then((response) => {
          Indicator.close()
          if (response.data.status !== 0) {
            this.code_valid = {error: true, msg: response.data.msg}
          } else {
            this.page = 2
          }
        })
      }
    },
    submit: function () {
      if (!this.submitStaus) {
        Indicator.open()
        let data = JSON.parse(JSON.stringify(this.info))
        data.pwd = md5(this.info.pwd)
        data.repwd = md5(this.info.repwd)
        this.$http.post('resetPassword', data).then((response) => {
          Indicator.close()
          if (response.data.status !== 0) {
            MessageBox.alert(response.data.msg, '修改失败')
            this.info.repwd = ''
            this.info.pwd = ''
            this.repwd_valid = {error: true, msg: response.data.msg}
          } else {
            Toast({message: '操作成功', iconClass: 'icon icon-success'})
            this.$router.back()
          }
        })
      }
    }
  },
  watch: {
    'info.phone_number': function (value) {
      let pat = /[1]\d{10}/g
      if (pat.test(value) && value.length === 11) {
        this.phone_valid = {error: false, msg: ''}
      } else {
        this.phone_valid = {error: true, msg: '无效的手机号码'}
      }
    },
    'info.code': function (value) {
      if (value === '') {
        this.code_valid = {error: true, msg: '输入您的短信验证码'}
      } else {
        this.code_valid = {error: false, msg: ''}
      }
    },
    'info.pwd': function (value, old) {
      if (value.length < 6) {
        this.pwd_valid = {error: true, msg: '密码最少6位'}
      } else if (value.length > 20) {
        // this.info.pwd = old
        this.pwd_valid = {error: true, msg: '密码最多20位'}
      } else if (value === this.info.repwd) {
        this.repwd_valid = {error: false, msg: ''}
      } else {
        this.pwd_valid = {error: false, msg: ''}
      }
      console.log(value.length)
    },
    'info.repwd': function (value) {
      if (value !== this.info.pwd) {
        this.repwd_valid = {error: true, msg: '两次密码不一致'}
      } else {
        this.repwd_valid = {error: false, msg: ''}
      }
    }
  }
}
</script>
<style scoped>
</style>