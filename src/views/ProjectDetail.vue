<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="invest-details full-container">
      <div class="project-name">{{project.name}}</div>
      <div class="can-use">
        <span v-show="project.gift_check"><i class="iconfont icon-renwu"></i>可使用红包</span>
        <span v-show="project.rate_check"><i class="iconfont icon-renwu"></i>可使用加息券</span>
      </div>
      <div class="year-rate">预期年化</div>
      <div class="year-rate-num">{{project.rate}}<span>%</span></div>
      <div class="start-base">
        借款{{project.finance_money | moneyFormat}} |
        期限 {{project.finance_time}} |
        <i class="iconfont icon-renminbi"></i>{{project.finance_rule_money}}起投
      </div>
      <div class="progress container">
        <span class="num fr">{{projectPercent}}%</span>
        <div class="progress-bar">
          <span class="progress-state" v-bind:style="{width: projectPercent+'%'}"></span>
        </div>
        剩余可投<span class="overplus">{{(project.finance_money-project.financed_money) | moneyFormat}}</span>元
      </div>

      <ul>
        <li class="container" >
          截止时间
          <span class="toNext">{{project.end_time}}</span>
        </li>
        <li class="container" >
          项目信息
          <span class="toNext"><i class="iconfont icon-unie61f"></i></span>
        </li>
        <li class="container" >
          承诺信息
          <span class="toNext"><i class="iconfont icon-unie61f"></i></span>
        </li>
        <li class="container" >
          相关证件
          <span class="toNext"><i class="iconfont icon-unie61f"></i></span>
        </li>
        <li class="container" >
          投资明细
          <span class="toNext"><i class="iconfont icon-unie61f"></i></span>
        </li>
      </ul>
      <div class="rights">
        <i class="iconfont icon-renwu"></i>{{project.collateral_type}}
        <span v-show="project.is_plan===1">
          <i class="iconfont icon-renwu"></i>风险备付金
        </span>
        <i class="iconfont icon-renwu"></i>{{project.payment_name}}
      </div>
    </div>

    <div class="go-invest full-container">
      <span class="calc fl" v-on:click="toggleOpen()">
        <i class="iconfont icon-jisuanqi1"></i>
      </span>
      <span class="btn invest-btn invalid" v-if="project.status !== 'rush'">{{project.status | projectStatus}}</span>
      <router-link class="btn invest-btn" v-if="project.status === 'rush'" v-bind:class="[project.status]" :to="{name: 'project-invest' ,params: {id: project.id}}">{{project.status | projectStatus}}</router-link>
    </div>

    <div class="Expectation" v-show="isOpen">
      <div class="ExpeBox">
        <p>计算预期收益</p>
        <div class="money">
          <input type="number" v-model="invest_money" placeholder="请输入购买金额，最低200元" maxlength="8" />
          <span>元</span>
        </div>
        <div class="profit">
          <div class="profitLt clear">
            <p>{{project.finance_time}}</p>
            <i>{{invest_money | projectProfit(project)}}</i>
          </div>
          <div class="profitRt clear">
            <em class="fl">理财期限</em>
            <em class="fr">预期收益(元)</em>
          </div>
        </div>
        <div class="cancel" v-on:click="toggleOpen()"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import {Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '项目详细',
      project: {
        id: 1,
        name: '项目1',
        rate: 9,
        finance_time: '1个月',
        finance_time_num: 1,
        finance_time_cate: 'm',
        finance_money: 185000,
        financed_money: 0,
        status: 'rush',
        gift_check: 1,
        rate_check: 1,
        finance_rule_money: 180.00,
        end_time: '2016-12-28 00:00:00'
      },
      isOpen: false,
      invest_money: '',
      profit: 0
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('projects/' + this.$route.params.id).then((response) => {
      Indicator.close()
      // console.log(response.data.data)
      this.project = response.data.data
    })
  },
  computed: {
    projectPercent: function () {
      return Math.floor(this.project.financed_money / this.project.finance_money * 100)
    }
  },
  methods: {
    toggleOpen: function () {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.Expectation{
  display: block;
}
</style>