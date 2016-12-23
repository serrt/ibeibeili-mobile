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
            <div class="fr">预期收益<span><i class="iconfont icon-renminbi"></i><span class="expact-money">132132</span></span></div>
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
            <div class="fr bag-nums" v-on:click="toggleGift()" v-bind:class="{'invalid': gifts.length==0, 'valid': gifts.length>0}">
              <span>{{gifts.length}}个可用&gt;</span>
            </div>
          </div>
          <div class="container bags" v-show="gift_show && gift_check">
            <span v-on:click="chooseGift(item)" v-for="item in gifts" v-bind:class="{'select': item.choosed}"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
          </div>
        </li>
        <li>
          <div class="container raise-interest">
            加息券
            <div class="fr tickets invalid"><span>无可用加息券></span></div>
          </div>
          <div class="container rate-tickets hide">
            <span>0.05%</span>
            <span>0.5%</span>
            <span>1%</span>
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
        <a href="" class="btn">我要投资</a>
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
        rate_check: '1',
        gift_money_auto: '0', // 是否累计使用红包
        finance_rule_money: 180.00,
        end_time: '2016-12-28 00:00:00'
      },
      user_money: '',
      invest_money: 0,
      balance: 20000.00,
      gifts: [
        {id: 1, money: 25.00, used_rule_money: 2500, choosed: false},
        {id: 2, money: 10.00, used_rule_money: 1000, choosed: false},
        {id: 3, money: 50.00, used_rule_money: 5000, choosed: false}
      ],
      gift_show: false
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
    }
  },
  methods: {
    toggleGift () {
      this.gift_show = !this.gift_show
    },
    chooseGift (gift) {
      if (this.gift_check) {
        if (!gift.choosed && this.gift_auto) {
          for (let i in this.gifts) {
            this.gifts[i].choosed = false
          }
        }
        gift.choosed = !gift.choosed
      }
    }
  },
  watch: {
    user_money: function (value) {
      let money = parseFloat(value)
      if (isNaN(money)) {
        money = 0
      }
      for (let i in this.gifts) {
        if (this.gifts[i].choosed) {
          money += this.gifts[i].money
        }
      }
      this.invest_money = money
    }
  }
}
</script>
<style scoped>
</style>