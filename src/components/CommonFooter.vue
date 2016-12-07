<template>
  <div class="full-container">
    <div class="footer full-container flex">
      <div class="item home active">
        <!-- <p class="item-icon"><i class="iconfont icon-home"></i></p> -->
        <p class="item-icon"><i class="iconfont icon-homeActive"></i></p>
        <p class="item-text">首页</p>
      </div>
      <div class="item invest">
        <p class="item-icon"><i class="iconfont icon-touzi"></i></p>
        <!-- <p class="item-icon"><i class="iconfont icon-touziActive"></i></p> -->
        <p class="item-text">投资</p>
      </div>
      <div class="item discovery">
        <p class="item-icon"><i class="iconfont icon-discovery"></i></p>
        <!-- <p class="item-icon"><i class="iconfont icon-discoveryActive"></i></p> -->
        <p class="item-text">发现</p>
      </div>
      <div class="item account">
        <p class="item-icon"><i class="iconfont icon-caifu"></i></p>
        <!-- <p class="item-icon"><i class="iconfont icon-caifuActive"></i></p> -->
        <p class="item-text">我的账户</p>
      </div>
    </div>
      
  </div>
</template>

<script>
  export default {
    name: 'common-footer'
  }
</script>
<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/iconfont";
  @import "../assets/scss/components/common-footer";
</style>
