<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box">
      <div class="tabs full-container flex">
        <div class="tab-option" v-bind:class="{'select': item.key===selected}" v-on:click="toggleTab(item)" v-for="item in tabTitle">
          <span>{{item.name}}</span>
        </div>
      </div>
      <list class="welfare" :api="api" :list="giftList" @handle-list-change="handleListChange">
        <!-- 红包 -->
        <ul slot="list" class="red-bag welfare-item" v-show="selected==='gift'">
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
      </list>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import List from '../components/List'

export default {
  components: {HeaderTop, List},
  data: function () {
    return {
      title: '福利',
      tabTitle: [
        {name: '红包', key: 'gift'},
        {name: '加息券', key: 'rate'},
        {name: '财富值', key: 'virtual'}
      ],
      selected: 'gift',
      api: [
        {id: 1, money: 5.00, invest_money: 500, project_cate: '6月标', name: '注册送5元投资红包', end_time: '2016-12-28 23:59:59', status: 0},
        {id: 4, money: 6.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-28 23:59:59', status: 0},
        {id: 5, money: 7.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-28 23:59:59', status: 0},
        {id: 2, money: 8.00, invest_money: 800, project_cate: '3月标', name: '元宝游戏赠送', end_time: '2016-12-28 23:59:59', status: 1},
        {id: 3, money: 9.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-21 23:59:59', status: 2},
        {id: 3, money: 9.00, invest_money: 1000, project_cate: '3月标', name: '签到赠送', end_time: '2016-12-21 23:59:59', status: 2}
      ],
      giftList: [],
      rateList: [],
      virtualList: []
    }
  },
  mounted () {
    // this.giftList = this.api
  },
  computed: {
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
      }
    },
    handleListChange: function (value) {
      this.giftList = value
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.welfare{
  margin-top: 40px;
  overflow: scroll;
  position: relative;
}
.welfare .welfare-item li .use{
  width: 80%;
}
</style>