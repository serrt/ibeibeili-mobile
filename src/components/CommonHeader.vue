<template>
  <div class="header container">
    <ul>
      <li class="back">
        <span>
          <i class="iconfont icon-01fanhui"></i>
        </span>
      </li>
      <li class="f-gray title">{{ title }}</li>
      <li class="other">
        <span>
         <!--  <i class="iconfont icon-shouyeshouye"></i> -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'common-header',
    props: ['title']
  }
</script>
<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/components/common-header";
</style>
