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
              <div class="recharge-bank">充值银行
                <span class="fr bank-name flex-middle">
                  <span class="bank" v-bind:class="[user.bank_code]"></span>{{bank.name}}{{bank_card_number | strHide(0,4)}}
                </span>
              </div>
              <div class="limit">充值限额<span class="fr">每笔<i class="iconfont icon-renminbi"></i><span class="limit-num">{{bank.recharge_once}}</span></span></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-link class="recharge-explain" :to="{name: 'article-detail', params: {id: 1222}}">充值说明</router-link>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="recharge">充&nbsp;值</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox, Toast},
  beforeCreate: function () {
    let user = this.$store.getters.user
    if (!user.bank_card_number) {
      let str = '请先身份认证?'
      if (user.name_verified) {
        str = '请先绑定支付账户?'
      }
      MessageBox.confirm(str).then(({ value, action }) => {
        this.$router.push({name: 'user-verify'})
      }).catch(action => {})
      this.$router.back()
    }
  },
  data: function () {
    return {
      title: '充值',
      money: null,
      user: this.$store.getters.user,
      bank: {}
    }
  },
  mounted () {
    if (this.user.bank_code) {
      this.$http.get('bank/' + this.user.bank_code).then((response) => {
        this.bank = response.data.data
      })
    }
  },
  computed: {
    bank_card_number: function () {
      let user = this.user
      let bankNumber = user.bank_card_number || ''
      if (bankNumber.length > 6) {
        return bankNumber.substring(bankNumber.length - 6, bankNumber.length)
      } else {
        return ''
      }
    }
  },
  methods: {
    recharge () {
      if (this.money > 0) {
        this.$http.post('user/recharge', {money: this.money}).then((response) => {
          if (response.data.status === 0) {
            this.$router.replace({name: 'user-recharge-pay', params: {sn: response.data.sn}})
          } else {
            MessageBox.alert(response.data.msg, '充值失败')
          }
        })
      } else {
        Toast('请输入充值金额')
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>