<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="recharge-withdraw full-container">
      <div class="recharge-box">
          <ul>
            <li>
              <div class="container flex-middle">
                <label for="recharge-money"><i class="iconfont icon-renminbi"></i></label>
                <input type="number" name="money" v-model="money" class="recharge-money" placeholder="请输入充值金额"/>
              </div>
            </li>
            <li>
              <div class="recharge-attention container">
                <div class="recharge-bank">充值银行<span class="fr bank-name"><span class="bank CCB"></span>中国建设银行**3033</span></div>
                <div class="limit">充值限额<span class="fr">每笔<i class="iconfont icon-renminbi"></i><span class="limit-num">50000</span></span></div>
              </div>
            </li>
          </ul>
      </div>
      <div class="container">
        <a href="" class="recharge-explain">充值说明</a>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="recharge" v-touch-ripple>充&nbsp;值</button>
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
      title: '充值',
      money: null
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    recharge () {
      console.log(this.money)
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>