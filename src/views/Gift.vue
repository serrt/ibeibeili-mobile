<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-bind:class="{'select': item.key===selected}" v-on:click="toggleTab(item)" v-for="item in tabTitle">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="container welfare">
      <div class="welfare-item red-bag page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <loadmore :top-method="refresh" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <!-- <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span> -->
            <span v-show="topStatus === 'loading'">正在加载。。。</span>
          </div>
          <!-- 红包 -->
          <ul v-show="selected==='gift'">
            <li v-bind:class="{'valid': item.status===0}" v-for="item in giftList">
              <span class="left-pic">
                <img src="../../static/images/welfare.png">
                <i class="iconfont icon-renminbi"></i>
              </span>
              <div class="use fr">
                <span class="use-money">{{item.money}}</span>
                <div class="use-purpose fr">
                  <p>单笔满{{item.invest_money}}元可用</p>
                  <p>仅限{{item.project_cate}}使用</p>
                </div>
              </div>
              <div class="voucher-from">{{item.name}}<span class="valid-date fr">有效期至{{item.end_time}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===2"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===1"></div>
            </li>
          </ul>
          <!-- 加息券 -->
          <ul v-show="selected==='rate'">
            <li v-bind:class="{'valid': item.status===1}" v-for="item in rateList">
              <span class="left-pic">
                <img src="../../static/images/welfare.png">
                <i class="iconfont icon-renminbi"></i>
              </span>
              <div class="use fr">
                <span class="use-money">{{item.rate}}%</span>
              </div>
              <div class="voucher-from"><span class="valid-date fr">有效期至{{item.effect_time}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===3"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===2"></div>
            </li>
          </ul>
          <!-- 财富值 -->
          <ul v-show="selected==='virtual'">
            <li v-bind:class="{'valid': item.status===0}" v-for="item in virtualList">
              <span class="left-pic">
                <img src="../../static/images/welfare.png">
                <i class="iconfont icon-renminbi"></i>
              </span>
              <div class="use fr">
                <span class="use-money">{{item.money}}</span>
              </div>
              <div class="voucher-from"><span class="valid-date fr">有效期至{{item.effect_time}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===2"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===1"></div>
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
  data: function () {
    return {
      title: '福利',
      tabTitle: [
        {name: '红包', key: 'gift'},
        {name: '加息券', key: 'rate'},
        {name: '财富值', key: 'virtual'}
      ],
      selected: 'gift',
      giftList: [],
      rateList: [],
      virtualList: [],
      allLoaded: false,
      wrapperHeight: 0,
      bottomStatus: '',
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
        this.refresh(1)
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
      if (this.selected === 'gift') {
        dataList = [
          {id: 1, money: 5.00, invest_money: 500, project_cate: '6月标', name: '注册送5元投资红包', end_time: '2016-12-28 23:59:59', status: 0},
          {id: 4, money: 6.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-28 23:59:59', status: 0},
          {id: 5, money: 7.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-28 23:59:59', status: 0},
          {id: 2, money: 8.00, invest_money: 800, project_cate: '3月标', name: '元宝游戏赠送', end_time: '2016-12-28 23:59:59', status: 1},
          {id: 3, money: 9.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-21 23:59:59', status: 2},
          {id: 3, money: 9.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-21 23:59:59', status: 2}
        ]
      } else if (this.selected === 'rate') {
        dataList = [
          {id: 1, rate: 1.00, effect_time: '2016-12-25 00:00:00', status: 1},
          {id: 2, rate: 2.00, effect_time: '2016-12-25 00:00:00', status: 1},
          {id: 3, rate: 3.50, effect_time: '2016-12-25 00:00:00', status: 2},
          {id: 4, rate: 4.80, effect_time: '2016-12-25 00:00:00', status: 3},
          {id: 5, rate: 5.50, effect_time: '2016-12-24 00:00:00', status: 3},
          {id: 5, rate: 5.50, effect_time: '2016-12-24 00:00:00', status: 3}
        ]
      } else if (this.selected === 'virtual') {
        dataList = [
          {id: 1, money: 10000.00, effect_time: '2016-12-25 00:00:00', status: 0},
          {id: 2, money: 20000.00, effect_time: '2016-12-25 00:00:00', status: 1},
          {id: 3, money: 30000.00, effect_time: '2016-12-25 00:00:00', status: 2},
          {id: 4, money: 40000.00, effect_time: '2016-12-25 00:00:00', status: 3},
          {id: 4, money: 40000.00, effect_time: '2016-12-25 00:00:00', status: 3},
          {id: 5, money: 50000.00, effect_time: '2016-12-25 00:00:00', status: 3}
        ]
      }
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        if (this.selected === 'gift') {
          this.giftList = []
        } else if (this.selected === 'rate') {
          this.rateList = []
        } else if (this.selected === 'virtual') {
          this.virtualList = []
        }
        this.$refs.loadmore.onTopLoaded(id)
      }
      if (this.selected === 'gift') {
        this.giftList = this.giftList.concat(dataList)
      } else if (this.selected === 'rate') {
        this.rateList = this.rateList.concat(dataList)
      } else if (this.selected === 'virtual') {
        this.virtualList = this.virtualList.concat(dataList)
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