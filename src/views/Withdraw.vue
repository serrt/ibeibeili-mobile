<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="valid-money container">可提现金额<i class="iconfont icon-renminbi"></i><span class="all-money">{{balance}}</span></div>
    <div class="recharge-withdraw full-container">
      <div class="recharge-box">
        <ul>
          <li>
            <div class="container flex-middle withdraw-input">
              <label for="recharge-money"><i class="iconfont icon-renminbi"></i></label>
              <input type="text" name="money" v-model="money" class="recharge-money" placeholder="请输入提现金额"/>
              <span class="get-all-money" v-on:click="money=balance">全部提现</span>
            </div>
          </li>
          <li>
            <div class="recharge-attention container">
              <div class="recharge-bank">
                提现银行
                <span class="fr bank-name">
                  <span class="bank CCB"></span>中国建设银行**3033
                </span>
              </div>
              <div class="fee">
                手续费
                <span class="fr">
                  <i class="iconfont icon-renminbi"></i><span class="fee-num">{{user_fee}}</span>
                </span>
              </div>
              <div class="limit">
                提现限额
                <span class="fr">
                  每笔<i class="iconfont icon-renminbi"></i><span class="limit-num">50000</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <a href="" class="recharge-explain">提现说明</a>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="recharge" >提&nbsp;现</button>
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
      title: '提现',
      money: null,
      balance: 200.15,
      user_fee: 2.00
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