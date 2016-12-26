<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container freshmen-experience">
      <ul>
        <li>
          <span>项目名称</span>
          <span>{{project.projects_name}}</span>
        </li>
        <li>
          <span>项目期限</span>
          <span>{{project.time_cate}}</span>
        </li>
        <li>
          <span>预期年化</span>
          <span>{{project.rate}}%</span>
        </li>
        <li>
          <span>消耗财富值</span>
          <span>{{totalMoney}}</span>
        </li>
        <li>
          <span>任务奖励</span>
          <span>{{totalMoney | projectProfit(project)}}</span>
        </li>
        <li>
          <span>选择财富值</span>
          <span class="toNext">
            <i class="iconfont icon-unie61f"></i>
          </span>
          <div class="assets-value">
            <span v-for="item in list" class="value1" v-on:click="select(item)" v-bind:class="{'select': item.selected}">{{item.money}}点</span>
          </div>
        </li> 
        <li>
          <span>实际消耗：</span>
          <span>{{totalMoney}}</span>
        </li> 
        <li>
          <span>总消耗：</span>
          <span>{{totalMoney}}</span>
        </li>
      </ul>
    </div>
    <button type="button" v-on:click="submit()" class="btn confirm-experience full-container">确认体验</button>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '新手体验任务',
      project: {projects_name: '新手体验任务', finance_time_num: 1, finance_time_cate: 'd', time_cate: '1天', rate: 8},
      list: [
        {id: 1, money: 10000.00, selected: false},
        {id: 2, money: 20000.00, selected: false},
        {id: 2, money: 20000.00, selected: false},
        {id: 2, money: 20000.00, selected: false},
        {id: 2, money: 20000.00, selected: false},
        {id: 2, money: 20000.00, selected: false},
        {id: 3, money: 30000.00, selected: false}
      ]
    }
  },
  mounted () {
  },
  computed: {
    totalMoney: function () {
      let money = 0
      for (let i in this.list) {
        if (this.list[i].selected) {
          money += this.list[i].money
        }
      }
      return money
    }
  },
  methods: {
    select: function (item) {
      item.selected = !item.selected
    },
    submit: function () {
      let data = { id: [] }
      for (let i in this.list) {
        if (this.list[i].selected) {
          data.id.push(this.list[i].id)
        }
      }
      if (data.id.length === 0) {
        window.alert('请选择财富值')
      }
      console.log(data)
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.value1{
  margin: 2px 5px;
}
.freshmen-experience ul li .assets-value .select{
  border: 1px solid #e72418;
}
</style>