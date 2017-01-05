<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="setup full-container">
      <ul class="container">
        <li class="account">
          <i class="iconfont icon-yonghu"></i>账户
          <span class="fr right-words">
            151****9700
            <!-- 如果实名认证了 显示实名 -->
            <!-- 如果没有实名 显示手机号 -->
          </span>
        </li>
        <li class="identity">
          <i class="iconfont icon-shenfen"></i>身份认证
          <span class="toNext right-words">
            未认证
            <i class="iconfont icon-unie61f"></i>
            <!-- 已认证 -->
            <!-- 当认证完后显示已认证，去除箭头符号 -->
          </span>
        </li>
        <li class="phone">
          <i class="iconfont icon-shouji"></i>手机认证
          <span class="toNext right-words">
            已认证
            <!-- <i class="iconfont icon-unie61f"></i> -->
          </span>
        </li>
        <!-- <li class="mail">
          <i class="iconfont icon-svg17"></i>邮箱认证
          <span class="toNext right-words">
            未认证
            <i class="iconfont icon-unie61f"></i>
          </span>
        </li> -->
        <li class="pay-account">
          <i class="iconfont icon-zhifu"></i>支付账户
          <span class="toNext right-words">
            已激活
            <!-- <i class="iconfont icon-unie61f"></i> -->
          </span>
        </li>
        <li class="login-pass">
          <i class="iconfont icon-suo"></i>登录密码
          <span class="toNext right-words">
            已设置
            <i class="iconfont icon-unie61f"></i>
            <!-- 跳转到修改页面 -->
          </span>
        </li>
        <li class="pay-pass">
          <i class="iconfont icon-353245214507"></i>支付密码
          <span class="toNext right-words">
            已设置
            <i class="iconfont icon-unie61f"></i>
            <!-- 跳转到新浪页面 -->
          </span>
        </li>
        <!-- <li class="gesture-pass">
          <i class="iconfont icon-shoushimima"></i>手势密码
          <span class="toNext right-words">
            未设置
            <i class="iconfont icon-unie61f"></i>
            
          </span>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '设置'
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style scoped>
</style>