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
                <span class="fr bank-name">
                  <span class="bank" v-bind:class="[user.bank_code]"></span>{{bank_name}}{{user.bank_card_number.substring(user.bank_card_number.length-6, user.bank_card_number.length) | strHide(0,4)}}
                </span>
              </div>
              <div class="limit">充值限额<span class="fr">每笔<i class="iconfont icon-renminbi"></i><span class="limit-num">{{max_money}}</span></span></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-link class="recharge-explain" :to="{name: 'article-detail', params: {id: 1222}}">充值说明</router-link>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="recharge" >充&nbsp;值</button>
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
      title: '充值',
      money: null,
      user: this.$store.getters.user,
      bank_name: 'xx',
      max_money: 50000
    }
  },
  mounted () {
    this.$http.get('code/' + this.user.bank_code).then((response) => {
      this.bank_name = response.data.data.name
    })
  },
  computed: {
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
      }
      console.log(this.money)
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>