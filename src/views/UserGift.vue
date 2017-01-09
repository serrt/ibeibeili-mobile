<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box">
      <div class="tabs full-container flex">
        <div class="tab-option" v-bind:class="{'select': item.key===selected}" v-on:click="toggleTab(item)" v-for="item in tabTitle">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="container">
        <!-- 红包 -->
        <div class="welfare2" v-show="selected==='gift'">
          <div class="welfare-item red-bag">
            <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
              <li v-for="item in giftData.list" v-bind:class="{'valid':item.status===0}">
                <img src="../../static/images/welfare-bg.png">
                <div class="welfare-content">
                  <div class="items flex">
                    <div class="flex-middle items-money">
                      <i class="iconfont icon-renminbi"></i><span>{{item.money}}</span>
                    </div>
                    <div class="flex-middle condition">
                      <div>
                        <span>单笔满{{item.rule_money}}元可用</span>
                        <span>仅限{{item.project_cate}}使用</span>
                      </div>
                    </div>
                  </div>
                  <div class="items flex">
                    <div class="flex-middle item-from">{{item.name}}</div>
                    <div class="flex-middle item-duration">
                      <div v-show="item.end_time">有效期至{{item.end_time}}</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 加息券 -->
        <div class="welfare" v-show="selected==='rate'">
          <div class="welfare-item rate-voucher">
            <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
              <li v-for="item in rateData.list" v-bind:class="{'valid':item.status===1}">
                <div class="use">
                  <span class="use-money">{{item.rate}}<span>%</span></span>
                  <div class="use-purpose fr flex-middle">
                    <div>
                      <p>单笔满{{item.rule_money}}元可用</p>
                      <p>仅限{{item.project_cate}}使用</p>
                    </div>
                  </div>
                </div>
                <div class="voucher-from">{{item.name}}<span class="valid-date fr">有效期至{{item.end_time}}</span></div>
                <div class="state overdue" v-show="item.status===3"></div>
                <div class="state alreay-use" v-show="item.status===2"></div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 财富值 -->
        <div class="welfare" v-show="selected==='virtual'">
          <div class="welfare-item wealth-value">
            <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
              <li v-for="item in virtualData.list" v-bind:class="{'valid': item.status===0}">
                <span class="left-pic">
                  <img src="../../static/images/welfare2.png">
                </span>
                <div class="use fr">
                  <span class="use-money">{{item.money}}</span>点
                  <div class="use-purpose fr flex-middle">
                    <div>
                      <p>仅限新手体验任务</p>
                      <p>仅限新手体验任务</p>
                    </div>
                  </div>
                </div>
                <div class="voucher-from"><span class="valid-date fr">{{item.end_time}}</span></div>
                <div class="state alreay-use" v-show="item.status===1"></div>
                <div class="state overdue" v-show="item.status===2"></div>
                <div class="state alreay-pay" v-show="item.status===3"></div>
              </li>
            </ul>
          </div>
        </div>
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
      giftData: {api: 'user/gift', nextApi: '', list: []},
      rateData: {api: 'user/rate', nextApi: '', list: []},
      virtualData: {api: 'user/virtual', nextApi: '', list: []},
      busy: false
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
        this.busy = false
        if ((this.selected === 'gift' && this.giftData.nextApi === undefined) || (this.selected === 'rate' && this.rateData.nextApi === undefined) || (this.selected === 'virtual' && this.virtualData.nextApi === undefined)) {
          this.busy = true
        }
        if ((this.selected === 'gift' && this.giftData.list.length === 0) || (this.selected === 'rate' && this.rateData.list.length === 0) || (this.selected === 'virtual' && this.virtualData.list.length === 0)) {
          this.loadData()
        }
      }
    },
    loadData: function (refresh) {
      let data = this.giftData
      if (this.selected === 'rate') {
        data = this.rateData
      } else if (this.selected === 'virtual') {
        data = this.virtualData
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
          this.busy = false
        }
        data.nextApi = response.data.meta.pagination.links.next
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