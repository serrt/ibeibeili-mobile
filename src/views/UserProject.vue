<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-on:click="toggleTab(item)" v-bind:class="{'select':item.key === selected}" v-for="item in tabTitle">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="user-projects">
      <div class="projects full-container">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
          <router-link v-for="item in list" tag="li" :to="{name: 'user-project-detail', params: {id: item.id}}">
            <div class="project-detail container">
              <span class="project-name surplus">{{item.project.data.name}}</span>
              <span class="project-item invest-money">
                投资金额
                <span class="fr">
                  <i class="iconfont icon-renminbi"></i>{{item.invest_money}}
                </span>
              </span>
              <span class="project-item project-rate">
                利率
                <span class="fr">
                  {{item.project.data.rate}}%<span v-show="item.rate>0">+{{item.rate}}%</span>
                </span>
              </span>
              <span class="project-item project-expect">
                收益
                <span class="fr">
                  <i class="iconfont icon-renminbi"></i>{{item.invest_money | projectProfit(item.project.data)}}<span v-show="item.rate>0">+{{item.rate_number}}</span>
                </span>
              </span>
              <span class="project-item project-start" v-show="item.project.data.interest_at !== null">
                起息时间
                <span class="fr">{{item.project.data.interest_at}}</span>
              </span>
            </div>
          </router-link>
        </ul>
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
      title: '我的项目',
      tabTitle: [
        {name: '投资中', key: 'rush'},
        {name: '还款中', key: 'payment'},
        {name: '已还款', key: 'finish'}
      ],
      selected: 'rush',
      rushData: {api: 'user/project?status=rush', nextApi: '', list: []},
      paymentData: {api: 'user/project?status=payment', nextApi: '', list: []},
      finishData: {api: 'user/project?status=finish', nextApi: '', list: []},
      busy: false
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
    list: function () {
      if (this.selected === 'rush') {
        return this.rushData.list
      } else if (this.selected === 'payment') {
        return this.paymentData.list
      } else if (this.selected === 'finish') {
        return this.finishData.list
      }
    }
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
        this.busy = false
        if ((this.selected === 'rush' && this.rushData.nextApi === undefined) || (this.selected === 'payment' && this.paymentData.nextApi === undefined) || (this.selected === 'finish' && this.finishData.nextApi === undefined)) {
          this.busy = true
        }
        if ((this.selected === 'rush' && this.rushData.list.length === 0) || (this.selected === 'payment' && this.paymentData.list.length === 0) || (this.selected === 'finish' && this.finishData.list.length === 0)) {
          this.loadData()
        }
      }
    },
    loadData: function (refresh) {
      let data = this.rushData
      if (this.selected === 'payment') {
        data = this.paymentData
      } else if (this.selected === 'finish') {
        data = this.finishData
      }
      let uri = data.api
      if (data.nextApi !== '' && !refresh) {
        uri = data.nextApi
      }
      if (refresh) {
        data.list = []
      }
      this.$http.get(uri).then((response) => {
        let dataList = response.data.data
        data.list = data.list.concat(dataList)
        if (response.data.meta.pagination.links.next) {
          data.nextApi = response.data.meta.pagination.links.next + '&status=' + this.selected
          this.busy = false
        } else {
          data.nextApi = response.data.meta.pagination.links.next
        }
      })
      this.busy = true
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.project-item,.project-detail{
  display: block;
}
</style>