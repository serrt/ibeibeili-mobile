<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="user-account">
      <div class="myData full-container">
        <img src="../../static/images/u-account-bg.png">
        <div class="account">
          <ul>
            <li class="accumulate">累计收益（元）</li>
            <li class="all-income">32123.21</li>
            <li class="pig">存钱罐收益（元）：<span class="pig-money">0.00</span></li>
            <li class="total">
              <div class="all-assets fl"><a href="">总资产(元):</a><span >1115000000.12</span></div>
              <div class="all-money fr">账户余额(元):<span>10500000.00</span></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="money-operate">
        <router-link class="btn fl chongzhi" :to="{name: 'recharge'}">充值</router-link>
        <router-link class="btn fl tixian" :to="{name: 'withdraw'}">提现</router-link>
      </div>
      <div class="functions">
        <div class="flex wrap">
          <div class="item" >
            <i class="iconfont icon-xiugaioryijian"></i>
            签到
          </div>
          <router-link class="item" :to="{name: 'user-gift'}">
            <i class="iconfont icon-37"></i>福利
          </router-link>
          <router-link class="item" :to="{name: 'user-project'}">
            <i class="iconfont icon-xiangmu"></i>
            我的项目
          </router-link>
        </div>
        <div class="flex wrap">
          <div class="item" >
            <i class="iconfont icon-jiaoyimingxichaxun"></i>
             交易明细
          </div>
          <div class="item" >
            <i class="iconfont icon-youjian"></i>
            我的消息
          </div>
          <div class="item" >
            <i class="iconfont icon-yijianfankui1"></i>
            意见反馈
          </div>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import FooterNav from '../components/Footer'

export default {
  components: {HeaderTop, FooterNav},
  data: function () {
    return {
      title: '我的账户'
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