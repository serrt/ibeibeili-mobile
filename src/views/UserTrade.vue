<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-for="item in tabTitle" v-bind:class="{'select': selected === item.key}" v-on:click="toggleTab(item)">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="transaction-details full-container">
      <div class="list welfare-item page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <loadmore :top-method="refresh" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <!-- <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span> -->
            <span v-show="topStatus === 'loading'">正在加载。。。</span>
          </div>
          <!-- 收支 -->
          <ul v-show="selected === 'trade'">
            <li v-for="item in tradeList" v-touch-ripple>
              <div class="container">
                <i class="iconfont fl" v-bind:class="{'icon-cuowu': item.status === -1, 'icon-zhengque': item.status !== -1}"></i>
                <div class="detail">
                  <div class="card">
                    {{item.remarks}}
                    <span class="fr"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
                  </div>
                  <div class="date">
                    {{item.pay_time}}
                    <span class="fr">{{item.status | tradeStatus}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 充值 -->
          <ul v-show="selected === 'recharge'">
            <li v-for="item in rechargeList" v-touch-ripple>
              <div class="container">
                <i class="iconfont fl" v-bind:class="{'icon-cuowu': item.status === -1, 'icon-zhengque': item.status !== -1}"></i>
                <div class="detail">
                  <div class="card">
                    {{item.remarks}}
                    <span class="fr"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
                  </div>
                  <div class="date">
                    {{item.pay_time}}
                    <span class="fr">{{item.status | tradeStatus}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 提现 -->
          <ul v-show="selected === 'withdraw'">
            <li v-for="item in withdrawList" v-touch-ripple>
              <div class="container">
                <i class="iconfont fl" v-bind:class="{'icon-cuowu': item.status === -1, 'icon-zhengque': item.status !== -1}"></i>
                <div class="detail">
                  <div class="card">
                    {{item.remarks}}
                    <span class="fr"><i class="iconfont icon-renminbi"></i>{{item.money}}</span>
                  </div>
                  <div class="date">
                    {{item.pay_time}}
                    <span class="fr">{{item.status | tradeStatus}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus === 'drop'">加载更多</span>
            <!-- <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span> -->
            <span v-show="bottomStatus === 'loading'">正在加载。。。</span>
          </div>
        </loadmore>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  filters: {
    tradeStatus: function (value) {
      let str = value
      switch (value) {
        case -1:
          str = '交易失败'
          break
        case 0:
          str = '处理中'
          break
        case 1:
          str = '交易成功'
          break
        case 2:
          str = '项目流标'
          break
      }
      return str
    }
  },
  data: function () {
    return {
      title: '交易详细',
      tabTitle: [
        {name: '收支', key: 'trade'},
        {name: '充值', key: 'recharge'},
        {name: '提现', key: 'withdraw'}
      ],
      tradeList: [],
      rechargeList: [],
      withdrawList: [],
      allLoaded: false,
      wrapperHeight: 0,
      bottomStatus: '',
      selected: 'trade',
      topStatus: ''
    }
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  },
  computed: {
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
        if (this.selected === 'trade' && this.tradeList.length === 0) {
          this.refresh(1)
        } else if (this.selected === 'recharge' && this.rechargeList.length === 0) {
          this.refresh(1)
        } else if (this.selected === 'withdraw' && this.withdrawList.length === 0) {
          this.refresh(1)
        }
      }
    },
    handleBottomChange: function (status) {
      this.bottomStatus = status
    },
    handleTopChange: function (status) {
      this.topStatus = status
    },
    loadData: function (id, dir) {
      let dataList = []
      if (this.selected === 'trade') {
        dataList = [
          {id: 1, sn: '20161227254554258684', money: 25.00, remarks: '双倍加息', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '现金红包', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 3, sn: '20161227254554258684', money: 2000.00, remarks: '投资项目', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '项目还款', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '项目还款', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '项目还款', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '项目还款', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 5, sn: '20161227254554258684', money: 25.00, remarks: '投资项目', pay_time: '2016-12-27 12:54:12', status: -1}
        ]
      } else if (this.selected === 'recharge') {
        dataList = [
          {id: 1, sn: '20161227254554258684', money: 25.00, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 3, sn: '20161227254554258684', money: 2000.00, remarks: '订单支付超时关闭', pay_time: '2016-12-27 12:54:12', status: -1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '账户充值', pay_time: '2016-12-27 12:54:12', status: 0}
        ]
      } else if (this.selected === 'withdraw') {
        dataList = [
          {id: 1, sn: '20161227254554258684', money: 25.00, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 2, sn: '20161227254554258684', money: 0.20, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 1},
          {id: 3, sn: '20161227254554258684', money: 2000.00, remarks: '订单支付超时关闭', pay_time: '2016-12-27 12:54:12', status: -1},
          {id: 4, sn: '20161227254554258684', money: 25.00, remarks: '提现', pay_time: '2016-12-27 12:54:12', status: 0}
        ]
      }
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        if (this.selected === 'trade') {
          this.tradeList = []
        } else if (this.selected === 'recharge') {
          this.rechargeList = []
        } else if (this.selected === 'withdraw') {
          this.withdrawList = []
        }
        this.$refs.loadmore.onTopLoaded(id)
      }
      if (this.selected === 'trade') {
        this.tradeList = this.tradeList.concat(dataList)
      } else if (this.selected === 'recharge') {
        this.rechargeList = this.rechargeList.concat(dataList)
      } else if (this.selected === 'withdraw') {
        this.withdrawList = this.withdrawList.concat(dataList)
      }
    },
    loadBottom: function (id) {
      this.loadData(id, 'top')
    },
    refresh: function (id) {
      this.allLoaded = false
      this.loadData(id, 'bottom')
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>