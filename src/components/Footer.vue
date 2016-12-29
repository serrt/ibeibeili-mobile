<template>
  <div class="footer full-container flex">
    <div class="item home">
      <router-link :to="{name: 'home'}">
        <span class="item-icon"><i class="iconfont icon-home"></i></span>
        <span class="item-text">首页</span>
      </router-link>
    </div>
    <div class="item invest">
      <router-link :to="{name: 'projects'}">
        <span class="item-icon"><i class="iconfont icon-touzi"></i></span>
        <span class="item-text">投资</span>
      </router-link>
    </div>
    <div class="item discovery">
      <router-link :to="{name: 'find'}">
        <span class="item-icon"><i class="iconfont icon-discovery"></i></span>
        <span class="item-text">发现</span>
      </router-link>
    </div>
    <div class="item account">
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
  /* 底部导航 */
  .footer {
    position: fixed;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #fff;
    height: 50px;
    border-top: 1px solid #d2d2d2;
    padding: 5px 0;
  }

  .footer div.item {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    color: #6d6d6d;
  }

  .footer div.item .item-icon {
    height: 24px;
    line-height: 24px;
  }

  .footer div.item .item-icon .iconfont {
    font-size: 1.8rem;
  }

  .footer div.item .item-text {
    height: 16px;
    line-height: 16px;
    font-size: 1rem;
  }

  .footer div.item span {
    display: block;
  }

  .footer a.router-link-active {
    color: #e72418;
  }
  .footer a.router-link-active .icon-home:before {
    content: "\e603";
  }
  .footer a.router-link-active .icon-touzi:before {
    content: "\e64b";
  }
  .footer a.router-link-active .icon-discovery:before {
    content: "\e617";
  }
  .footer a.router-link-active .icon-caifu:before {
    content: "\e669";
  }

  .footer div.account span {
    display: block;
  }

  .footer div.account span .item-icon .iconfont {
    font-size: 2rem;
  }
</style>
