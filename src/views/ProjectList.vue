<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="invest-filter full-container">
      <div class="filter-condition flex">
        <div class="filter" v-on:click="toggleTime()" >
          <span class="filter-duration">{{query_time}}</span>
          <i class="iconfont" v-bind:class="{'icon-jiantoushang': this.filter_time, 'icon-xiajiantou': !this.filter_time}"></i>
        </div>
        <div class="filter" v-on:click="toggleType()" >
          <span class="filter-types">{{query_type}}</span>
          <i class="iconfont" v-bind:class="{'icon-jiantoushang': this.filter_type, 'icon-xiajiantou': !this.filter_type}"></i>
        </div>
      </div>
      <div class="all-duration filter-list" v-show="this.filter_time">
        <ul>
          <li v-for="item in project_time" v-bind:class="{'selected': query.time === item.cate}" v-on:click="chooseTime(item)">
            {{item.name}}<span class="tick" v-show="query.time === item.cate">√</span>
          </li>
        </ul>
      </div>
      <div class="all-types filter-list" v-show="this.filter_type">
        <ul>
          <li v-for="item in project_type" v-bind:class="{'selected': query.type === item.cate}" v-on:click="chooseType(item)">
            {{item.name}}<span class="tick" v-show="query.type === item.cate">√</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 投资列表 -->
    <div id="investList" class="full-container">
      <div class="list">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
          <li v-show="list.length>0" v-for="item in list">
            <!-- 投资进度 -->
            <div class="progress" v-bind:style="{width: Math.floor(item.financed_money/item.finance_money*100)+'%'}"></div>
            <div class="list-item full-container">
              <!-- 投资标题 -->
              <div class="title surplus container" v-text="item.name"></div>
              <!-- 投资内容 -->
              <div class="full-container detail flex">
                <div class="rate">
                  <div class="rate-num" v-text="item.rate+'%'"></div>
                  <div>预期年化</div>
                </div>
                <div class="duration">
                  <div class="days" v-text="item.finance_time"></div>
                  <div>期限</div>
                </div>
                <div class="money">
                  <div class="total">{{item.finance_money | moneyFormat}}</div>
                  <div>金额</div>
                </div>
                <div class="state flex-middle">
                  <router-link :to="{ name: 'project-detail', params: { id: item.id }}" class="btn" v-bind:class="[item.status]">{{item.status | projectStatus}}</router-link>
                </div>
              </div>
              <!-- 投资担保之类 -->
              <div class="item-footer container">
                <span><i class="tubiao danbao"></i>{{item.collateral_type}}</span>
                <span><i class="tubiao huabenfuxi"></i>{{item.payment_name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/Footer'
import HeaderTop from '../components/Header'
import { Indicator } from 'mint-ui'

export default {
  components: {FooterNav, HeaderTop, Indicator},
  data: function () {
    return {
      title: '投资',
      filter_type: false,
      filter_time: false,
      list: [],
      project_time: [{name: '全部期限', cate: ''}, {name: '一月标', cate: '1,m'}, {name: '三月标', cate: '3,m'}, {name: '六月标', cate: '6,m'}, {name: '66天', cate: '66,d'}],
      project_type: [{name: '全部类型', cate: ''}, {name: '企业贷', cate: 1}, {name: '债权贷', cate: 2}, {name: '房/车贷', cate: 3}, {name: '消费贷', cate: 4}],
      query: {time: '', type: ''},
      busy: false,
      api: 'projects?',
      nextApi: ''
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
    queryString: function () {
      let str = ''
      for (let i in this.query) {
        str += '&' + i + '=' + this.query[i]
      }
      return str
    },
    query_time: function () {
      let str = '全部期限'
      for (let i in this.project_time) {
        if (this.project_time[i].cate === this.query.time) {
          str = this.project_time[i].name
        }
      }
      return str
    },
    query_type: function () {
      let str = '全部类型'
      for (let i in this.project_type) {
        if (this.project_type[i].cate === this.query.type) {
          str = this.project_type[i].name
        }
      }
      return str
    }
  },
  methods: {
    toggleTime () {
      this.filter_type = false
      this.filter_time = !this.filter_time
    },
    toggleType () {
      this.filter_time = false
      this.filter_type = !this.filter_type
    },
    chooseTime: function (item) {
      this.query.time = item.cate
      this.filter_time = false
      this.loadData(true)
    },
    chooseType: function (item) {
      this.query.type = item.cate
      this.filter_type = false
      this.loadData(true)
    },
    loadData: function (refresh) {
      let uri = this.api + this.queryString
      if (this.nextApi !== '' && !refresh) {
        uri = this.nextApi + this.queryString
      }
      if (refresh) {
        this.list = []
      }
      Indicator.open()
      this.$http.get(uri).then((response) => {
        let dataList = response.data.data
        this.list = this.list.concat(dataList)
        Indicator.close()
        if (response.data.meta.pagination.links.next) {
          this.nextApi = response.data.meta.pagination.links.next
          this.busy = false
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