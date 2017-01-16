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
              <input type="number" name="money" v-model="money" class="recharge-money" placeholder="请输入提现金额"/>
              <span class="get-all-money" v-on:click="money=balance">全部提现</span>
            </div>
          </li>
          <li>
            <div class="recharge-attention container">
              <div class="recharge-bank">
                提现银行
                <span class="fr bank-name">
                  <span class="bank" v-bind:class="[user.bank_code]"></span>{{bank_name}}{{user.bank_card_number.substring(user.bank_card_number.length-6, user.bank_card_number.length) | strHide(0,4)}}
                </span>
              </div>
              <div class="fee">
                手续费
                <span class="fr">
                  <mt-spinner type="snake" v-show="spinner"></mt-spinner>
                  <i class="iconfont icon-renminbi" v-show="!spinner"></i><span class="fee-num">{{user_fee}}</span>
                </span>
              </div>
              <div class="limit">
                提现限额
                <span class="fr">
                  每笔<i class="iconfont icon-renminbi"></i><span class="limit-num">{{max_money}}</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-link class="recharge-explain" :to="{name: 'article-detail', params: {id: 1222}}">提现说明</router-link>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="withdraw">提&nbsp;现</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  beforeCreate: function () {
    if (!this.$store.getters.user.bank_card_number) {
      this.$router.back()
    }
  },
  data: function () {
    return {
      title: '提现',
      user: this.$store.getters.user,
      bank_name: 'xx',
      money: null,
      timer: null,
      spinner: false,
      balance: 0,
      user_fee: 0,
      max_money: 50000
    }
  },
  mounted () {
    this.$http.get('user/balance').then((response) => {
      this.balance = response.data.balance
    })
    this.$http.get('code/' + this.user.bank_code).then((response) => {
      this.bank_name = response.data.data.name
    })
  },
  computed: {
  },
  methods: {
    withdraw () {
      if (this.money > 0) {
        this.$http.post('user/withdraw', {money: this.money}).then((response) => {
          if (response.data.status === 0) {
            this.$router.replace({name: 'user-withdraw-pay', params: {sn: response.data.sn}})
          } else {
            MessageBox.alert(response.data.msg, '充值失败')
          }
        })
      }
    }
  },
  watch: {
    money: function (value) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (value > 0) {
        this.spinner = true
        let self = this
        this.timer = setTimeout(function () {
          self.$http.get('user/withdrawFee', {money: value}).then((response) => {
            self.user_fee = response.data.fee.user_fee
            self.spinner = false
          })
        }, 2000)
      }
    }
  }
}
</script>
<style scoped>
</style>