<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="setup full-container">
      <ul class="container">
        <li class="account">
          <i class="iconfont icon-yonghu"></i>账户
          <router-link class="toNext right-words" :to="{name: 'user-set-username'}" tag="span" v-show="!user.username">设置用户名<i class="iconfont icon-unie61f"></i></router-link>
          <span class="toNext right-words" v-show="user.username">{{user.username}}</span>
        </li>
        <li class="identity">
          <i class="iconfont icon-shenfen"></i>身份认证
          <!-- 已认证 -->
          <span class="toNext right-words" v-show="user.name_verified===1">{{user.name}}</span>
          <!-- 未认证 -->
          <router-link class="toNext right-words" :to="{name: 'user-verify'}" v-show="user.name_verified===0" tag="span">未认证<i class="iconfont icon-unie61f"></i></router-link>
        </li>
        <li class="phone">
          <i class="iconfont icon-shouji"></i>手机认证
          <!-- 已认证 -->
          <span class="toNext right-words" v-show="user.phone_number_verified===1">{{user.phone_number | strHide(3,4)}}</span>
          <!-- 未认证 -->
          <span class="toNext right-words" v-show="user.phone_number_verified===0">未认证<i class="iconfont icon-unie61f"></i></span>
        </li>
        <li class="pay-account">
          <i class="iconfont icon-zhifu"></i>支付账户
          <!-- 已绑定 -->
          <router-link class="toNext right-words" :to="{name: 'user-bank'}" v-show="user.bank_card_id !== null" tag="span">已绑定<i class="iconfont icon-unie61f"></i></router-link>
          <!-- 未绑定 -->
          <router-link class="toNext right-words" :to="{name: 'user-verify'}" v-show="user.bank_card_id === null" tag="span">未绑定<i class="iconfont icon-unie61f"></i></router-link>
        </li>
        <li class="login-pass">
          <i class="iconfont icon-suo"></i>登录密码
          <router-link class="toNext right-words" :to="{name: 'user-edit-pwd'}" tag="span">修改<i class="iconfont icon-unie61f"></i></router-link>
        </li>
        <li class="pay-pass">
          <i class="iconfont icon-353245214507"></i>支付密码
          <!-- 已设置 -->
          <router-link class="toNext right-words" :to="{name: 'user-edit-paypwd'}" v-show="user.is_set_pay_password===1" tag="span">修改<i class="iconfont icon-unie61f"></i></router-link>
          <!-- 未设置 -->
          <router-link class="toNext right-words" :to="{name: 'user-verify'}" v-show="user.is_set_pay_password===0" tag="span">未设置<i class="iconfont icon-unie61f"></i></router-link>
        </li>
        <li class="login-pass" v-show="user.name_verified===1">
          <i class="iconfont icon-yonghu"></i>新浪支付
          <router-link class="toNext right-words" :to="{name: 'user-sina'}" tag="span">个人中心<i class="iconfont icon-unie61f"></i></router-link>
        </li>
      </ul>
    </div>
    <button type="button" class="btn signout" v-on:click="login">安全退出</button>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '设置',
      user: this.$store.getters.user
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    login: function () {
      MessageBox.confirm('确定退出?').then(action => {
        this.$store.dispatch('logout')
        this.$router.replace({name: 'login'})
      }).catch(action => {})
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>