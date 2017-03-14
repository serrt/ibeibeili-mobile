<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="modify-password container">
      <div class="login-input user-inputs">
        <ul class="modify-input">
          <li>
            <div class="input-box">
              <label for="password-org"><i class="iconfont icon-suo"></i></label>
              <input type="password" name="password-org" v-model="info.old_pwd" class="password-org" placeholder="请输原始密码"/>
            </div>
          </li>
          <li>
            <div class="input-box">
              <label for="password1"><i class="iconfont icon-mima"></i></label>
              <input type="password" name="password1" v-model="info.new_pwd" class="password1" placeholder="请输新密码">
            </div>
          </li>
          <li>
            <div class="input-box">
              <label for="password2"><i class="iconfont icon-mima"></i></label>
              <input type="password" name="password2" v-model="info.re_pwd" class="password2" placeholder="请输再次输入新密码">
            </div>
          </li>
          <p class="notValid" v-show="valid.error">{{valid.msg}}</p>
        </ul>
        <button type="button" class="btn change-password-btn" v-on:click="submit()">修改密码</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import md5 from 'blueimp-md5'
import { Indicator, MessageBox, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox, Toast},
  data: function () {
    return {
      title: '修改密码',
      info: {old_pwd: '', new_pwd: '', re_pwd: ''},
      valid: {error: false, msg: ''},
      timer: ''
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    check: function () {
      if (this.info.old_pwd === '') {
        this.valid = {error: true, msg: '请输原始密码'}
      } else if (this.info.new_pwd === '') {
        this.valid = {error: true, msg: '请输新密码'}
      } else if (this.info.new_pwd.length < 6) {
        this.valid = {error: true, msg: '密码最少6位'}
      } else if (this.info.new_pwd.length > 20) {
        this.valid = {error: true, msg: '密码最多20位'}
      } else if (this.info.old_pwd === '') {
        this.valid = {error: true, msg: '请输再次输入新密码'}
      } else if (this.info.new_pwd !== this.info.re_pwd) {
        this.valid = {error: true, msg: '两次密码不一致'}
      }
      let self = this
      if (this.timer !== '') {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(function () {
        self.valid = {error: false, msg: ''}
      }, 2000)
    },
    submit: function () {
      this.check()
      if (!this.valid.error) {
        let data = {}
        for (let i in this.info) {
          data[i] = md5(this.info[i])
        }
        Indicator.open()
        this.$http.post('user/editPassword', data).then((response) => {
          Indicator.close()
          if (response.data.status === 0) {
            let instance = Toast({message: '操作成功', iconClass: 'icon icon-success'})
            setTimeout(() => { instance.close() }, 500)
            this.$router.back()
          } else {
            MessageBox('提示', response.data.msg)
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