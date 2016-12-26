<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-on:click="toggleTab(item)" v-bind:class="{'select':item.key === selected}" v-for="item in tabTitle">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="user-projects">
      <div class="projects full-container page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <loadmore :top-method="refresh" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <!-- <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span> -->
            <span v-show="topStatus === 'loading'">正在加载。。。</span>
          </div>
          <!-- 正在投资 -->
          <ul>
            <li v-for="item in list">
              <router-link class="project-detail container" :to="{name: 'user-project-detail', params: {id: item.id}}">
                <span class="project-name surplus">{{item.projects_name}}</span>
                <span class="project-item invest-money">
                  投资金额
                  <span class="fr">
                    <i class="iconfont icon-renminbi"></i>{{item.invest_money}}
                  </span>
                </span>
                <span class="project-item project-rate">
                  利率
                  <span class="fr">{{item.rate}}%</span>
                </span>
                <span class="project-item project-expect">
                  收益
                  <span class="fr">
                    <i class="iconfont icon-renminbi"></i>{{item.invest_money | projectProfit(item)}}
                  </span>
                </span>
                <span class="project-item project-start" v-show="item.interest_at !== null">
                  起息时间
                  <span class="fr">{{item.interest_at}}</span>
                </span>
              </router-link>
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
      title: '我的项目',
      tabTitle: [
        {name: '投资中', key: 'rush'},
        {name: '还款中', key: 'payment'},
        {name: '已还款', key: 'finish'}
      ],
      selected: 'rush',
      rushList: [],
      paymentList: [],
      finishList: [],
      list: [],
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
        if (this.selected === 'rush' && this.rushList.length === 0) {
          this.refresh(1)
        } else if (this.selected === 'payment' && this.paymentList.length === 0) {
          this.refresh(1)
        } else if (this.selected === 'finish' && this.finishList.length === 0) {
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
      let dataList = [
        {id: 1, projects_name: '项目1', rate: 9, finance_time_num: 1, finance_time_cate: 'm', invest_money: 2000, interest_at: null, status: 'rush'},
        {id: 2, projects_name: '项目2', rate: 10, finance_time_num: 66, finance_time_cate: 'd', invest_money: 10000, interest_at: null, status: 'full'},
        {id: 3, projects_name: '项目3', rate: 11, finance_time_num: 3, finance_time_cate: 'm', invest_money: 5000, interest_at: '2016-12-24 12:25:25', status: 'payment'},
        {id: 4, projects_name: '项目4', rate: 11, finance_time_num: 3, finance_time_cate: 'm', invest_money: 2000, interest_at: '2016-12-24 12:25:25', status: 'finish'}
      ]
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        if (this.selected === 'rush') {
          this.rushList = []
        } else if (this.selected === 'payment') {
          this.paymentList = []
        } else if (this.selected === 'finish') {
          this.finishList = []
        }
        this.$refs.loadmore.onTopLoaded(id)
      }
      if (this.selected === 'rush') {
        this.rushList = this.rushList.concat(dataList)
        this.list = this.rushList
      } else if (this.selected === 'payment') {
        this.paymentList = this.paymentList.concat(dataList)
        this.list = this.paymentList
      } else if (this.selected === 'finish') {
        this.finishList = this.finishList.concat(dataList)
        this.list = this.finishList
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
.project-item,.project-detail{
  display: block;
}
</style>