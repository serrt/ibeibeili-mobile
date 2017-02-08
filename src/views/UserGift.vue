<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box">
      <div class="tabs full-container flex">
        <div class="tab-option" v-bind:class="{'select': item.key===selected}" v-on:click="toggleTab(item)" v-for="item in tabTitle">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="container welfare2">
        <!-- 红包 -->
        <div class="welfare-item red-bag" v-show="selected==='gift'">
          <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
            <li class="state" v-for="item in giftData.list" v-bind:class="{'used':item.status===1, 'overdue':item.status===2}">
              <img src="../../static/images/welfare-bg.png"/>
              <div class="welfare-content container">
                <div class="fl">
                  <div class="welfare-nums flex-middle">
                    <i class="iconfont icon-renminbi"></i>{{item.money}}
                  </div>
                  <div class="welfare-from flex-middle">{{item.name}}</div>
                </div>
                <div class="fr">
                  <div class="welfare-use flex-middle">
                    <div class="welfare-function" v-if="item.type==1">单笔满{{item.rule_money}}元可用</div>
                    <div class="welfare-function" v-else>现金红包</div>
                    <!-- <div class="welfare-function" v-show="item.project_cate">仅限{{item.project_cate}}使</div> -->
                  </div>
                  <div class="welfare-duration flex-middle">
                    <span class="durationTo" v-if="item.type==1">有效期至{{item.end_time}}</span>
                    <span class="durationTo" v-else>领取时间{{item.end_time}}</span>
                  </div>
                </div>
              </div>
              <div class="welfare-state" v-if="item.status!==0"></div>
            </li>
          </ul>
        </div>
        <!-- 加息券 -->
        <div class="welfare-item rate-voucher" v-show="selected==='rate'">
          <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
            <li class="state" v-for="item in rateData.list" v-bind:class="{'used':item.status===2, 'overdue':item.status===3}">
              <img src="../../static/images/welfare-bg.png">
              <div class="welfare-content container">
                <div class="fl">
                  <div class="welfare-nums flex-middle">{{item.rate}}<span>%</span></div>
                  <div class="welfare-from flex-middle">{{item.name}}</div>
                </div>
                <div class="fr">
                  <div class="welfare-use flex-middle">
                    <div class="welfare-function">
                      <p v-if="item.rule_money>0">单笔满{{item.rule_money}}元可用</p>
                      <p v-if="item.project_cate">仅限{{item.project_cate}}月标使用</p>
                    </div>
                  </div>
                  <div class="welfare-duration flex-middle">
                    <div class="durationTo">有效期至{{item.end_time}}</div>
                  </div>
                </div>
              </div>
              <div class="welfare-state" v-if="item.status>1"></div>
            </li>
          </ul>
        </div>
        <!-- 财富值 -->
        <div class="welfare-item wealth-value" v-show="selected==='virtual'">
          <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
            <li class="state" v-for="item in virtualData.list" v-bind:class="{'used':item.status===1 || item.status===4, 'overdue':item.status===2, 'alreay-pay':item.status===3}">
              <img src="../../static/images/welfare-bg.png">
              <div class="welfare-content container">
                <div class="fl">
                  <div class="welfare-nums flex-middle">{{item.money}}<span>点</span></div>
                  <div class="welfare-from flex-middle" v-if="item.profit > 0">奖励：{{item.profit}}</div>
                  <div class="welfare-from flex-middle" v-else>财富值</div>
                </div>
                <div class="fr">
                  <div class="welfare-use flex-middle">
                    <div class="welfare-function">仅新手体验任务</div>
                  </div>
                  <div class="welfare-duration flex-middle">
                    <div class="durationTo">有效期至{{item.end_time}}</div>
                  </div>
                </div>
              </div>
              <div class="welfare-state" v-if="item.status >0"></div>
            </li>
          </ul>
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