<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="container set-name">
      <div class="login-input user-inputs">
        <ul>
          <li>
            <div class="input-box">
              <label for="username"><i class="iconfont icon-yonghu"></i></label>
              <input type="text" name="username" v-model="username" placeholder="请输入用户名"/>
            </div>
            <div class="tip-box" v-show="error_box.error">{{error_box.msg}}</div>
          </li>
        </ul>
      </div>
      <button type="button" class="btn" v-on:click="submit()">确&nbsp;&nbsp;认</button>
    </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, Toast},
  data: function () {
    return {
      title: '设置用户名',
      error_box: {error: false, msg: ''},
      username: ''
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    submit: function () {
      if (this.username === '') {
        this.error_box = {error: true, msg: '请输入用户名'}
      } else if (this.username.length < 6 || this.username.length > 20) {
        this.error_box = {error: true, msg: '用户名长度6-20'}
      } else if (!/^[a-zA-Z0-9_]*[a-zA-Z]+[a-zA-Z0-9_]*$/.test(this.username)) {
        this.error_box = {error: true, msg: '用户名由英文字母、数字和下划线（ _ ）组成,且至少有一个英文字符'}
      } else {
        Indicator.open()
        this.$http.post('user/setUsername', {username: this.username}).then((response) => {
          Indicator.close()
          if (response.data.status === 0) {
            Toast({message: '操作成功', iconClass: 'icon icon-success'})
            this.$store.dispatch('user', response.data.user)
            this.$router.back()
          } else {
            this.error_box = {error: true, msg: response.data.msg}
          }
        })
      }
    }
  },
  watch: {
    username: function () {
      this.error_box = {error: false, msg: ''}
    }
  }
}
</script>
<style scoped>
</style>