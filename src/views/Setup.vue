<template>
  <div>
    <common-header title="设置"></common-header>

   
    
      <div class="container">
        <div class="setup">
          <ul>
            <li>
              <i class="iconfont icon-yonghu item-icon"></i>
              账户
              <span class="fr">
                151****9700
              </span>
            </li>
            <li>
              <i class="iconfont icon-shenfen item-icon"></i>
               身份认证
              <span class="fr">
                未认证
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
            <li>
              <i class="iconfont icon-shouji item-icon"></i>
                手机认证
              <span class="fr">
                未认证
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
            <li>
              <i class="iconfont icon-shenfen item-icon"></i>
                邮箱认证
              <span class="fr">
                未认证
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li> 
            <li>
              <i class="iconfont icon-zhifu item-icon"></i>
              支付账户
              <span class="fr">
                未激活
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
            <li>
              <i class="iconfont icon-suo item-icon"></i>
              登录密码
              <span class="fr">
                已设置
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
            <li>
              <i class="iconfont icon-zhifu1 item-icon"></i>
              支付密码
              <span class="fr">
                未设置
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
            <li>
              <i class="iconfont icon-shoushimima item-icon"></i>
              手势密码
              <span class="fr">
                未设置
                <i class="iconfont icon-unie61f"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>


</div>
</template>

<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/iconfont";
  @import "../assets/scss/setup";
</style>

<script>
  import CommonHeader from '../components/CommonHeader'
  export default {
    components: {
      CommonHeader
    }
  }
</script>
