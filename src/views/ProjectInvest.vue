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
                <router-link class="btn investNow" :to="{name: 'project-invest' ,params: {id: project.id}}">充值</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="container purchase">
            购买金额（元）
            <div class="fr"><input type="number" v-model="user_money" class="purchase-money" placeholder="请输入购买金额"></div>
          </div>
        </li>
        <li class="income">
          <div class="container expact">
            <div class="fr">
              预期收益
              <span>
                <i class="iconfont icon-renminbi"></i>
                <span class="expact-money">{{invest_money | projectProfit(project)}}</span>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="container surplus">
            剩余可投金额
            <div class="fr surplus-money"><span><i class="iconfont icon-renminbi"></i>{{project.finance_money-project.financed_money}}</span></div>
          </div>
        </li>
        <li>
          <div class="container red-bag">
            红包
            <div class="fr bag-nums" v-on:click="toggleGift()" v-bind:class="{'invalid': gifts.length==0 || !gift_check, 'valid': gifts.length>0}">
              <span v-if="gift_check">{{gifts.length}}个可用&gt;</span>
              <span v-if="!gift_check">不允许使用红包</span>
            </div>
          </div>
          <div class="container bags" v-show="gift_show && gift_check">
            <span v-on:click="chooseGift(item)" v-for="item in gifts" v-bind:class="{'select': item.choosed}"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
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

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '投资',
      project: {
        id: 1,
        name: '项目1',
        rate: 9,
        finance_time: '1个月',
        finance_time_num: 1,
        finance_time_cate: 'm',
        finance_money: 185000,
        financed_money: 174500,
        status: 'rush',
        gift_check: '1',
        gift_money_auto: '0', // 是否累计使用红包
        finance_rule_money: 180.00,
        end_time: '2016-12-28 00:00:00'
      },
      balance: 20000.00,
      user_money: '', // 用户输入金额
      invest_money: 0, // 总的投资金额
      // 红包
      gifts: [
        {id: 1, money: 25.00, used_rule_money: 2500, choosed: false},
        {id: 2, money: 10.00, used_rule_money: 1000, choosed: false},
        {id: 3, money: 50.00, used_rule_money: 5000, choosed: false}
      ],
      gift_show: false,
      // 加息券
      rates: [
        {id: 1, rate: 0.2, choosed: false},
        {id: 2, rate: 1.2, choosed: false}
      ],
      rate_show: false
    }
  },
  mounted () {
  },
  computed: {
    gift_check: function () {
      return this.project.gift_check === '1'
    },
    gift_auto: function () {
      return this.project.gift_money_auto === '1'
    },
    gift_total: function () {
      let money = 0
      if (this.user_money) {
        for (var i in this.gifts) {
          if (this.gifts[i].choosed) {
            money += this.gifts[i].money
          }
        }
      }
      return money
    },
    rate_check: function () {
      return true
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
      if (this.user_money) {
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
        let data = {user_money: this.user_money, invest_money: this.invest_money, gifts: choosedGifts, rate: choosedRate}
        console.log(data)
        this.$router.push({name: 'invest-success', params: {id: 1}})
      }
    }
  },
  watch: {
    user_money: function (value) {
      let money = parseFloat(value)
      if (isNaN(money)) {
        money = 0
      }
      this.invest_money = money + this.gift_total
    }
  }
}
</script>
<style scoped>
</style>