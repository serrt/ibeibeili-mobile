<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="myproject-detail">
      <!-- 项目信息 -->
      <div class="project-items container" >
        <div class="project-name surplus">{{project.name}}</div>
        <div class="project-item">
          融资总额 
          <span class="fr"><i class="iconfont icon-renminbi"></i>{{project.finance_money}}</span>
        </div>
        <div class="project-item">
          投资金额 <i class="iconfont icon-bangzhu"></i>
          <span class="fr invest-moey">
            <i class="iconfont icon-renminbi"></i>{{invest.invest_money}}
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
            <i class="iconfont icon-renminbi"></i>{{invest.invest_money | projectProfit(project)}}<span v-if="invest.rate_number>0">+<i class="iconfont icon-renminbi"></i>{{invest.rate_number}}</span>
          </span>
        </div>
        <div class="project-item">
          投资时间
          <span class="fr">{{invest.invest_time}}</span>
        </div>
        <div class="project-item" v-if="project.interest_at">
          起息时间
          <span class="fr">{{project.interest_at}}</span>
        </div>
        <div class="project-item" v-if="project.interest_at">
          还款时间
          <span class="fr">{{project.payment_time}}</span>
        </div>
      </div>

      <!-- 还款计划 -->
      <div class="pay-plan container" >
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
                {{item.profit}}<span v-if="item.rate_number>0">+{{item.rate_number}}</span>
              </div>
              <div class="payed" v-bind:class="{'payed': item.status===1, 'paying': item.status===0}">{{item.status===1?'已还款':'待还款'}}</div>
              <div>{{item.pay_time?item.pay_time:item.input_time}}</div>
            </div>
          </li>
        </ul>
      </div> 

      <!-- 投资合同 -->
      <div class="invest-contract container">
        投资合同
        <router-link class="toNext" :to="{name: 'user-project-contract', params: {id: project.id}}" tag="span">查看详情<i class="iconfont icon-unie61f"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '我的项目详细',
      project: {id: 0},
      invest: {},
      profit: []
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('user/project-detail/' + this.$route.params.id).then((response) => {
      this.invest = response.data.data
      this.project = this.invest.project.data
      this.profit = this.invest.profit.data
      Indicator.close()
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