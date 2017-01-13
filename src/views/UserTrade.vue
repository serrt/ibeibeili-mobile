<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-for="item in tabTitle" v-bind:class="{'select': selected === item.key}" v-on:click="toggleTab(item)">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="transaction-details full-container">
      <!-- 收支 -->
      <div class="list income-out full-container">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
          <li v-for="item in list">
            <div class="container">
              <i class="iconfont fl" v-bind:class="{'icon-cuowu': item.status === -1, 'icon-zhengque': item.status === 1, 'icon-bangzhu': item.status === 0}"></i>
              <div class="detail">
                <div class="card">
                  <span class="detail-title surplus">{{item.remarks}}</span>
                  <span class="fr">{{item.money_cate}}<i class="iconfont icon-renminbi"></i>{{item.money}}</span>
                </div>
                <div class="date">{{item.pay_time}}<span class="fr">{{item.statusName}}</span></div>
              </div>
            </div>
          </li>
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
      title: '交易详细',
      tabTitle: [
        {name: '收支', key: 'trade'},
        {name: '充值', key: 'recharge'},
        {name: '提现', key: 'withdraw'}
      ],
      tradeData: {api: 'user/trade?status=trade', nextApi: '', list: []},
      rechargeData: {api: 'user/trade?status=recharge', nextApi: '', list: []},
      withdrawData: {api: 'user/trade?status=withdraw', nextApi: '', list: []},
      selected: 'trade',
      busy: false
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
    list: function () {
      if (this.selected === 'trade') {
        return this.tradeData.list
      } else if (this.selected === 'recharge') {
        return this.rechargeData.list
      } else if (this.selected === 'withdraw') {
        return this.withdrawData.list
      }
    }
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
        this.busy = false
        if ((this.selected === 'trade' && this.tradeData.nextApi === undefined) || (this.selected === 'recharge' && this.rechargeData.nextApi === undefined) || (this.selected === 'withdraw' && this.withdrawData.nextApi === undefined)) {
          this.busy = true
        }
        if ((this.selected === 'trade' && this.tradeData.list.length === 0) || (this.selected === 'recharge' && this.rechargeData.list.length === 0) || (this.selected === 'withdraw' && this.withdrawData.list.length === 0)) {
          this.loadData()
        }
      }
    },
    loadData: function (refresh) {
      let data = this.tradeData
      if (this.selected === 'recharge') {
        data = this.rechargeData
      } else if (this.selected === 'withdraw') {
        data = this.withdrawData
      }
      let uri = data.api
      if (data.nextApi && !refresh) {
        uri = data.nextApi
      }
      if (refresh) {
        data.list = []
      }
      this.$http.get(uri).then((response) => {
        let dataList = response.data.data
        data.list = data.list.concat(dataList)
        if (response.data.meta.pagination.links.next) {
          this.busy = false
          data.nextApi = response.data.meta.pagination.links.next + '&status=' + this.selected
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
</style>