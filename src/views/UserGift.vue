<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box">
      <div class="tabs full-container flex">
        <div class="tab-option" v-bind:class="{'select': item.key===selected}" v-on:click="toggleTab(item)" v-for="item in tabTitle">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="page-loadmore-wrapper welfare" ref="wrapper" :style="{height: wrapperHeight + 'px' }">
        <loadmore :autoFill="false" :top-method="refresh" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <!-- 红包 -->
          <ul class="red-bag welfare-item" v-show="selected==='gift'">
            <li v-bind:class="{'valid': item.status===0}" v-for="item in giftList">
              <span class="left-pic">
                <img src="../../static/images/welfare.png">
                <i class="iconfont icon-renminbi"></i>
              </span>
              <div class="use fr">
                <span class="use-money">{{item.money}}</span>
                <div class="use-purpose fr">
                  <p>单笔满{{item.rule_money}}元可用</p>
                  <p v-show="item.project_cate===''">不限标</p>
                  <p v-show="item.project_cate!==''">仅限{{item.project_cate}}使用</p>
                </div>
              </div>
              <div class="voucher-from">{{item.name}}<span class="valid-date fr">有效期至{{item.end_time | timeFormat}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===2"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===1"></div>
            </li>
          </ul>
          <!-- 加息券 -->
          <ul class="rate-voucher welfare-item" v-show="selected==='rate'">
            <li v-bind:class="{'valid': item.status===1}" v-for="item in rateList">
              <div class="use">
                <span class="use-money">{{item.rate}}<span>%</span></span>
                <div class="use-purpose fr flex-middle">
                  <div>
                    <p>单笔满200元可用</p>
                    <p>仅限6月标使用</p>
                  </div>
                </div>
              </div>
              <div class="voucher-from">签到奖励<span class="valid-date fr">有效期至{{item.effect_time | timeFormat}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===3"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===2"></div>
            </li>
          </ul>
          <ul class="wealth-value welfare-item" v-show="selected==='virtual'">
            <li v-show="virtualList.length === 0">
              <div class="use">
                没有数据
              </div>
            </li>
            <li v-bind:class="{'valid': item.status===0}" v-for="item in virtualList">
              <span class="left-pic">
                <img src="../../static/images/welfare2.png">
                <i class="iconfont icon-renminbi"></i>
              </span>
              <div class="use fr">
                <span class="use-money">{{item.money}}</span>
                <div class="use-purpose fr flex-middle">
                  <div>
                    <p>仅限新手体验任务</p>
                  </div>
                </div>
              </div>
              <div class="voucher-from"><span class="valid-date fr">有效期至{{item.effect_time | timeFormat}}</span></div>
              <!-- 过期 -->
              <div class="state overdue" v-show="item.status===2"></div>
              <!-- 已使用 -->
              <div class="state alreay-use" v-show="item.status===1"></div>
            </li>
          </ul>
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
      selected: 'rate',
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
    this.refresh(1)
  },
  computed: {
    api: function () {
      if (this.selected === 'gift') {
        return 'user-gift.json'
      } else if (this.selected === 'rate') {
        return 'user-rate.json'
      } else if (this.selected === 'virtual') {
        return 'user-virtual.json'
      }
    }
  },
  methods: {
    toggleTab (item) {
      if (item.key !== this.selected) {
        this.selected = item.key
        if ((this.selected === 'gift' && this.giftList.length === 0) || (this.selected === 'rate' && this.rateList.length === 0) || (this.selected === 'virtual' && this.virtualList.length === 0)) {
          this.refresh(1)
        }
      }
    },
    loadData: function (id, dir) {
      this.$http.get(this.api).then((response) => {
        let dataList = response.data.data
        if (this.selected === 'gift') {
          this.giftList = this.giftList.concat(dataList)
        } else if (this.selected === 'rate') {
          this.rateList = this.rateList.concat(dataList)
        } else if (this.selected === 'virtual') {
          this.virtualList = this.virtualList.concat(dataList)
        }
        if (dir === 'top') {
          this.$refs.loadmore.onBottomLoaded(id)
        } else if (dir === 'bottom') {
          this.$refs.loadmore.onTopLoaded(id)
        }
      })
      // this.allLoaded = true
    },
    loadBottom: function (id) {
      this.loadData(id, 'top')
    },
    refresh: function (id) {
      if (this.selected === 'gift') {
        this.giftList = []
      } else if (this.selected === 'rate') {
        this.rateList = []
      } else if (this.selected === 'virtual') {
        this.virtualList = []
      }
      this.loadData(id, 'bottom')
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
.welfare .welfare-item li .use.fr{
  width: 80%;
}
</style>