<template>
  <div>
    <div class="header container">
      <ul>
        <li class="back"></li>
        <li class="f-gray title">我的账户</li>
        <router-link :to="{name: 'user-set'}" class="other" tag="li">
          <span><i class="iconfont icon-shezhi"></i></span>
        </router-link>
      </ul>
    </div>
    <div class="user-account">
      <div class="myData full-container">
        <img src="../../static/images/u-account-bg.png">
        <div class="account">
          <ul>
            <li class="accumulate">累计收益（元）</li>
            <li class="all-income">{{data.total_bonus}}</li>
            <li class="pig">存钱罐收益（元）：<span class="pig-money">{{data.bonus}}</span></li>
            <li class="total">
              <div class="all-assets fl">
                <router-link :to="{name: 'user-wallet'}" tag="a">总资产(元):</router-link><span>{{data.total}}</span>
              </div>
              <div class="all-money fr">
                账户余额(元):<span>{{data.balance}}</span>
              </div>
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
          <router-link class="item" :to="{name: 'sign'}" tag="div">
            <i class="iconfont icon-xiugaioryijian"></i>签到
          </router-link>
          <router-link class="item" :to="{name: 'user-gift'}" tag="div">
            <i class="iconfont icon-37"></i>福利
          </router-link>
          <router-link class="item" :to="{name: 'user-project'}" tag="div">
            <i class="iconfont icon-xiangmu"></i>
            我的项目
          </router-link>
        </div>
        <div class="flex wrap">
          <router-link class="item" :to="{name: 'user-trade'}" tag="div">
            <i class="iconfont icon-jiaoyimingxichaxun"></i>
             交易明细
          </router-link>
          <router-link class="item" :to="{name: 'user-message'}" tag="div">
            <i class="iconfont icon-youjian"></i>
            我的消息
          </router-link>
          <div class="item">
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
import FooterNav from '../components/Footer'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {FooterNav, MessageBox, Indicator},
  data: function () {
    return {
      title: '我的账户',
      user_id: this.$store.getters.userId,
      data: {balance: 0.00, total: 0.00, bonus: 0.00, total_bonus: 0.00}
    }
  },
  created () {
    if (this.$route.params.refresh || this.$route.query.refresh) {
      this.$http.post('user/user').then((response) => {
        this.$store.dispatch('user', response.data)
      })
    }
    Indicator.open()
    this.$http.get('user/money').then((response) => {
      Indicator.close()
      if (response.data.code === 200) {
        this.data = response.data
      } else {
        MessageBox.alert('请重新登陆', '提示')
        this.$store.dispatch('logout')
        this.$router.replace({name: 'login'})
      }
    })
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