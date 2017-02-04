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
        <li class="choose-value">
          <span>选择财富值</span>
          <span class="toNext">
            <i class="iconfont icon-unie61f"></i>
          </span>
          <div class="assets-value">
            <div v-for="item in list" class="value1" v-on:click="select(item)" v-bind:class="{'select': item.selected}">{{item.money}}点</div>
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
import {Indicator, MessageBox, Toast} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '新手体验任务',
      project: {},
      totalMoney: 0,
      list: []
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('user/availableVirtual').then((response) => {
      this.list = response.data.data
      Indicator.close()
    })
    this.$http.get('virtual/project').then((response) => {
      this.project = response.data.data
    })
  },
  computed: {
  },
  methods: {
    select: function (item) {
      item.selected = !item.selected
      let money = 0
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].selected) {
          money += this.list[i].money
        }
      }
      this.totalMoney = money
    },
    submit: function () {
      let id = []
      for (let i in this.list) {
        if (this.list[i].selected) {
          id.push(this.list[i].id)
        }
      }
      if (id.length === 0) {
        MessageBox.alert('请选择财富值')
      } else {
        let data = {id: id}
        Indicator.open()
        this.$http.post('user/virtual/invest', data).then((response) => {
          Indicator.close()
          if (response.data.status !== 0) {
            MessageBox.alert(response.data.msg, '提示')
          } else {
            Toast({message: '操作成功', iconClass: 'icon icon-success'})
            this.$router.push({name: 'user-gift'})
          }
        })
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>