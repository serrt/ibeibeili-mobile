<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="container bank-unbind">
      <div class="reg-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="check-code"><i class="iconfont icon-shouji"></i></label>
              <input type="text" name="check-code" v-model="code" class="check-code" placeholder="请输入验证码"/>
              <span class="fr get-verify-code" v-on:click="getCode()">{{code_btn.click?code_btn.time+code_btn.msg2:code_btn.msg1}}</span>
            </div>
            <div class="tip-box" v-show="valid.error">{{valid.msg}}</div>
          </li>
        </ul>
      </div>
      <button type="button" class="btn unbind" v-on:click="submit">确认解绑</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox, Toast},
  data: function () {
    return {
      title: '解绑银行卡',
      user: this.$store.getters.user,
      valid: {error: false, msg: ''},
      code_btn: {click: false, msg1: '获取验证码', msg2: '秒后点击重新发送', time: 0, timer: null},
      code: ''
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    getCode: function () {
      if (!this.code_btn.click) {
        this.code_btn.click = true
        this.code_btn.time = 10
        let self = this
        if (this.code_btn.timer) {
          clearInterval(this.code_btn.timer)
        }
        this.$http.post('user/bankUnbindCode').then((response) => {
          if (response.data.status !== 0) {
            this.valid = {error: true, msg: response.data.msg}
          }
        })
        this.code_btn.timer = setInterval(function () {
          self.code_btn.time --
          if (self.code_btn.time === 0) {
            self.code_btn.click = false
          }
        }, 1000)
      }
    },
    submit: function () {
      if (this.code !== '') {
        Indicator.open()
        this.$http.post('user/bankUnbind', {code: this.code}).then((response) => {
          Indicator.close()
          if (response.data.status === 0) {
            Toast({message: '解绑成功', iconClass: 'icon icon-success'})
            this.$store.dispatch('user', response.data.user)
            this.$router.replace({name: 'user-set'})
          } else {
            MessageBox.alert(response.data.msg, '解绑失败')
          }
        })
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>