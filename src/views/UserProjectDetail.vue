<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="myproject-detail">
      <!-- 项目信息 -->
      <div class="project-items container" v-touch-ripple>
        <div class="project-name surplus">{{project.name}}</div>
        <div class="project-item">
          融资总额 
          <span class="fr"><i class="iconfont icon-renminbi"></i>{{project.finance_money}}</span>
        </div>
        <div class="project-item">
          投资金额 <i class="iconfont icon-bangzhu"></i>
          <span class="fr invest-moey">
            <i class="iconfont icon-renminbi"></i>{{invest.invest_money-invest.gift_money}}
            <span v-if="invest.gift_money > 0">
              +<i class="iconfont icon-renminbi"></i>{{invest.gift_money}}
            </span>
          </span>
        </div>
        <div class="project-item">
          利率 <i class="iconfont icon-bangzhu"></i>
          <span class="fr" v-if="invest.rate_number > 0">+{{invest.rate}}%</span>
          <span class="fr">{{project.rate}}%</span>
        </div>
        <div class="project-item">
          收益 <i class="iconfont icon-bangzhu"></i>
          <span class="fr income-money">
            <i class="iconfont icon-renminbi"></i>{{invest.invest_money | projectProfit(project)}}
            <span v-if="invest.rate_number > 0">
              +<i class="iconfont icon-renminbi"></i>{{invest.rate_number}}
            </span>
          </span>
        </div>
        <div class="project-item">
          投资时间
          <span class="fr">{{invest.invest_time}}</span>
        </div>
        <div class="project-item">
          起息时间
          <span class="fr">{{project.interest_at}}</span>
        </div>
        <div class="project-item">
          还款时间
          <span class="fr">{{project.trade_repayment_date}}</span>
        </div>
      </div>

      <!-- 还款计划 -->
      <div class="pay-plan container" v-touch-ripple>
        还款计划
        <ul>
          <li>
            <div class="full-container title flex">
              <div>本金</div>
              <div>利息</div>
              <div>状态</div>
              <div>还款日期</div>
            </div>
          </li>
          <li v-for="item in profit">
            <div class="full-container invest-detial flex">
              <div>{{item.money}}</div>
              <div>
                {{item.profit}}
                <span v-if="item.rate_number > 0">+{{item.rate_number}}</span>
              </div>
              <div class="payed" v-bind:class="{'payed': item.status===1, 'paying': item.status===0}">{{item.status===1?'已还':'未还'}}</div>
              <div class="surplus">{{item.pay_time?item.pay_time:item.input_time}}</div>
            </div>
          </li>
        </ul>
      </div> 

      <!-- 投资合同 -->
      <div class="invest-contract container">
        投资合同
        <span class="toNext">
          查看详情<i class="iconfont icon-unie61f"></i>
        </span>
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
      title: '我的项目详细',
      project: {
        id: 1,
        name: '项目1',
        rate: 9,
        finance_time: '3个月',
        finance_time_num: 3,
        finance_time_cate: 'm',
        finance_money: 185000,
        financed_money: 500,
        status: 'rush',
        gift_check: 1,
        rate_check: 1,
        finance_rule_money: 180.00,
        end_time: '2016-12-28 00:00:00',
        interest_at: '2016-12-24 12:25:25',
        trade_repayment_date: '2017-02-25 12:12:12'
      },
      invest: {
        invest_money: 505.00,
        invest_time: '2016-12-23 14:58:12',
        gift_money: 5.00,
        rate: 0.2,
        rate_number: 1.20
      },
      profit: [
        {id: 1, money: 0, profit: 3.75, status: 1, pay_time: '2016-12-25 12:12:12', input_time: '2016-12-25 14:12:12', rate_number: 0},
        {id: 2, money: 0, profit: 3.75, status: 0, pay_time: null, input_time: '2017-01-25 14:12:12', rate_number: 1.02},
        {id: 3, money: 500, profit: 3.75, status: 0, pay_time: null, input_time: '2017-02-25 14:12:12', rate_number: 0}
      ]
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