<template>
  <div class="footer full-container flex">
    <div class="item home">
      <router-link :to="{name: 'home'}" tag="div">
        <span class="item-icon"><i class="iconfont icon-home"></i></span>
        <span class="item-text">首页</span>
      </router-link>
    </div>
    <div class="item invest">
      <router-link :to="{name: 'projects'}" tag="div">
        <span class="item-icon"><i class="iconfont icon-touzi"></i></span>
        <span class="item-text">投资</span>
      </router-link>
    </div>
    <div class="item discovery">
      <router-link :to="{name: 'find'}" tag="div">
        <span class="item-icon"><i class="iconfont icon-discovery"></i></span>
        <span class="item-text">发现</span>
      </router-link>
    </div>
    <div class="item account" tag="div">
      <router-link :to="{name: 'user'}">
        <span class="item-icon"><i class="iconfont icon-caifu"></i></span>
        <span class="item-text">我的账户</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer .router-link-active {
    color: #e72418;
  }
  .footer .router-link-active .icon-home:before {
    content: "\e603";
  }
  .footer .router-link-active .icon-touzi:before {
    content: "\e64b";
  }
  .footer .router-link-active .icon-discovery:before {
    content: "\e617";
  }
  .footer .router-link-active .icon-caifu:before {
    content: "\e669";
  }

</style>
