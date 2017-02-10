<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="investing full-container">
      <ul>
        <li>
          <div class="container balance">
            账户余额 
            <div class="fr">
              <span><i class="iconfont icon-renminbi"></i>{{balance}}</span>
              <router-link class="btn investNow" :to="{name: 'recharge'}">充值</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="container purchase">
            购买金额（元）
            <div class="fr"><input type="number" v-model.number="user_money" class="purchase-money" placeholder="请输入购买金额"></div>
          </div>
        </li>
        <li class="income" v-show="user_money > 0">
          <div class="container expact">
            <div class="fr">预期收益<span><i class="iconfont icon-renminbi"></i><span class="expact-money">{{invest_money | projectProfit(project)}}</span><span class="expact-money" v-show="rate_project">+{{invest_money | projectProfit(rate_project)}}</span></span>
            </div>
          </div>
        </li>
        <li>
          <div class="container surplus">
            剩余可投金额
            <div class="fr surplus-money"><span><i class="iconfont icon-renminbi"></i>{{project.finance_money?project.finance_money-project.financed_money:0}}</span></div>
          </div>
        </li>
        <li>
          <div class="container red-bag">
            红包
            <div class="fr bag-nums" v-on:click="toggleGift()" v-bind:class="{'invalid': gifts.length==0 || !gift_check, 'valid': gifts.length>0}">
              <span v-if="gift_check">{{gift_avaliable}}个可用&gt;</span>
              <span v-if="!gift_check">不允许使用红包</span>
            </div>
          </div>
          <div class="container bags" v-show="gift_show && gift_check">
            <span v-on:click="chooseGift(item)" v-for="item in gifts" v-bind:class="{'select': item.choosed}" v-show="!item.disabled"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
          </div>
        </li>
        <li>
          <div class="container raise-interest">
            加息券
            <div class="fr tickets" v-on:click="toggleRate()" v-bind:class="{'invalid': rates.length==0 || !rate_check, 'valid': rates.length>0}">
              <span v-if="rate_check">{{rates.length}}个可用&gt;</span>
              <span v-if="!rate_check">不允许使用加息券</span>
            </div>
          </div>
          <div class="container rate-tickets" v-show="rate_show && rate_check">
            <span v-on:click="chooseRate(item)" v-for="item in rates" v-bind:class="{'select': item.choosed}">{{item.rate}}%</span>
          </div>
        </li>
        <li>
          <div class="container total">
            总投资金额
            <div class="fr total-money"><span><i class="iconfont icon-renminbi"></i>{{invest_money}}</span></div>
          </div>
        </li>
      </ul>
      <div class="invest-btn container">
        <button type="button" class="btn" v-on:click="invest()">我要投资</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import md5 from 'blueimp-md5'
import {MessageBox, Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, MessageBox, Indicator, md5},
  data: function () {
    return {
      user: this.$store.getters.user,
      project: this.$store.getters.projectInfo,
      balance: 0,
      user_money: '', // 用户输入金额
      invest_money: 0, // 总的投资金额
      user_password: '', // 用户输入的密码
      // 红包
      gifts: [],
      gift_show: false,
      // gift_avaliable: 0,
      // 加息券
      rates: [],
      rate_show: false
    }
  },
  mounted () {
    // 是否实名认证和绑卡
    if (this.$store.getters.userId) {
      if (this.user.name_verified !== 1) {
        MessageBox.confirm('是否去实名认证?').then(action => {
          this.$router.push({name: 'user-verify'})
        }).catch(action => {})
      } else if (this.user.bank_card_id === null) {
        MessageBox.confirm('是否去绑定银行卡?').then(action => {
          this.$router.push({name: 'user-verify'})
        }).catch(action => {})
      }
    }
    if (this.$store.getters.projectInfo.id !== parseInt(this.$route.params.id)) {
      this.$http.get('projects/' + this.$route.params.id).then((response) => {
        this.project = response.data.data
        this.$store.dispatch('project', this.project)
      })
    }
    Indicator.open()
    this.$http.get('user/balance').then((response) => {
      this.balance = response.data.balance
    })
    this.$http.get('user/availableGift').then((response) => {
      this.gifts = response.data.data
      // this.gift_avaliable = response.data.data.length
      Indicator.close()
    })
    this.$http.get('user/availableRate').then((response) => {
      this.rates = response.data.data
    })
  },
  computed: {
    title: function () {
      return (this.project.name ? this.project.name : '投资')
    },
    gift_check: function () {
      return this.project.gift_check === 1
    },
    gift_auto: function () {
      return this.project.gift_money_auto === 1
    },
    rate_check: function () {
      return this.project.rate_check === 1
    },
    rate_project: function () {
      let project = null
      for (let i in this.rates) {
        if (this.rates[i].choosed) {
          project = JSON.parse(JSON.stringify(this.project))
          project.rate = this.rates[i].rate
        }
      }
      return project
    },
    gift_total: function () {
      let money = 0
      if (this.user_money) {
        for (let i in this.gifts) {
          if (this.gifts[i].choosed) {
            money += this.gifts[i].money
          }
        }
      }
      return money
    },
    gift_avaliable: function () {
      let num = this.gifts.length
      for (let i = 0; i < this.gifts.length; i++) {
        if (this.gifts[i] && this.gifts[i].disabled) {
          num--
        }
      }
      return num
    }
  },
  methods: {
    toggleGift () {
      this.gift_show = !this.gift_show
    },
    chooseGift (gift) {
      if (!gift.choosed && !this.gift_auto) {
        for (let i in this.gifts) {
          this.gifts[i].choosed = false
        }
      }
      gift.choosed = !gift.choosed
      this.invest_money = this.gift_total + this.user_money
    },
    toggleRate () {
      this.rate_show = !this.rate_show
    },
    chooseRate (rate) {
      if (!rate.choosed) {
        for (let i in this.rates) {
          this.rates[i].choosed = false
        }
      }
      rate.choosed = !rate.choosed
    },
    invest () {
      let projectMoney = this.project.finance_money - this.project.financed_money
      let invsetMoney = this.gift_total + this.user_money
      if (invsetMoney > projectMoney) {
        MessageBox.alert('超出项目可投金额', '提示')
        return false
      }
      if (invsetMoney < this.project.start_money) {
        MessageBox.alert('最低' + this.project.start_money + '元起', '提示')
        return false
      }
      if (projectMoney <= this.project.finance_rule_money && invsetMoney !== projectMoney) {
        MessageBox.alert('只允许投资' + projectMoney + '元', '提示')
        return false
      }
      if (this.user_money) {
        // 项目密码
        let self = this
        if (this.project.password) {
          MessageBox.prompt('请输入密码').then(({ value, action }) => {
            self.user_password = md5(value)
            this.investRequest()
          }).catch(action => {
            return false
          })
        } else {
          this.investRequest()
        }
      }
    },
    investRequest () {
      let choosedGifts = []
      for (let i in this.gifts) {
        if (this.gifts[i].choosed) {
          choosedGifts.push(this.gifts[i].id)
        }
      }
      let choosedRate = null
      for (let i in this.rates) {
        if (this.rates[i].choosed) {
          choosedRate = this.rates[i].id
        }
      }
      let data = {project_id: this.project.id, user_money: this.user_money, invest_money: this.user_money + this.gift_total, gifts: choosedGifts, rate: choosedRate, password: this.user_password}
      Indicator.open()
      this.$http.post('user/invest', data).then((response) => {
        Indicator.close()
        if (response.data.status === 0) {
          this.$router.replace({name: 'user-invest-pay', params: {sn: response.data.sn}})
        } else {
          MessageBox.alert(response.data.msg, '提示')
        }
      })
    }
  },
  watch: {
    user_money: function (value) {
      let money = parseInt(value)
      if (isNaN(money)) {
        money = 0
      }
      if (value !== '') {
        this.user_money = money
      }
      if (money > 0) {
        for (let i in this.gifts) {
          if (this.gifts[i].rule_money > money) {
            this.gifts[i].choosed = false
            this.gifts[i].disabled = true
          } else {
            this.gifts[i].disabled = false
          }
        }
      }
      // 不能超过项目剩余金额
      // let projectMoney = this.project.finance_money - this.project.financed_money
      // if (money > projectMoney) {
      //   this.user_money = money = projectMoney
      // }
      this.invest_money = money + this.gift_total
    }
  }
}
</script>
<style scoped>
.investing ul li .bags span{
  margin-top: 5px;
  margin-right: 15px;
}
</style>