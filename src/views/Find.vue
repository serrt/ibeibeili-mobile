<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="discovery-box full-container">
      <div class="banner">
        <img src="../../static/images/discovery-test.png">
      </div>
      <div class="options full-container">
        <ul>
          <li class="flex">
            <div class="option-item">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-shangdian"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">积分商城</span>
                <span class="abstract">赚积分  积分兑换</span>
              </div>
            </div>
            <div class="option-item">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-yaoqing"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">邀请有奖</span>
                <span class="abstract">邀请就有惊喜</span>
              </div>
            </div>
          </li>
          <li class="flex">
            <div class="option-item">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-gonggao"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">公告中心</span>
                <span class="abstract">公司动态信息</span>
              </div>
            </div>
            <div class="option-item">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-yunying"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">运营报告</span>
                <span class="abstract">了解最新运营数据</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="latest-news">
        <div class="info full-container page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
              <li v-for="item in list">
                <div class="words fl">
                  <span class="abstract">{{item.title}}</span>
                </div>
                <span class="date">{{item.published_at}}</span>
                <div class="news-pic flex-middle">
                  <img v-bind:src="item.image">
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
    <div class="full-container">
      <div class="footer full-container flex">
        <div class="item home ">
          <a href="">
            <span class="item-icon"><i class="iconfont icon-home"></i></span>
            <span class="item-text">首页</span>
          </a>
        </div>
        <div class="item invest ">
          <a href="invest.html">
            <span class="item-icon"><i class="iconfont icon-touzi"></i></span>
            <span class="item-text">投资</span>
          </a>
        </div>
        <div class="item discovery active">
          <a href="">
            <span class="item-icon"><i class="iconfont icon-discoveryActive"></i></span>
            <span class="item-text">发现</span>
          </a>
        </div>
        <div class="item account">
          <a href="">
            <span class="item-icon"><i class="iconfont icon-caifu"></i></span>
            <span class="item-text">我的账户</span>
          </a>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import FooterNav from '../components/Footer'

export default {
  components: {HeaderTop, FooterNav},
  data: function () {
    return {
      title: '发现',
      list: [],
      allLoaded: false,
      wrapperHeight: 0,
      bottomStatus: ''
    }
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 80
  },
  computed: {
  },
  methods: {
    handleBottomChange: function (status) {
      this.bottomStatus = status
    },
    loadData: function (id, dir) {
      let dataList = [
        {id: 1, title: '1倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-12-24 12:24:58', image: '../../static/images/news.png'},
        {id: 2, title: '2倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-11-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '3倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '4倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '5倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 4, title: '6倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-09-24 12:24:58', image: '../../static/images/news.png'}
      ]
      if (this.list.length > 0) {
        dataList = []
      }
      if (dataList.length === 0) {
        this.allLoaded = true
      }
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        this.list = []
        this.$refs.loadmore.onTopLoaded(id)
      }
      this.list = this.list.concat(dataList)
    },
    loadBottom: function (id) {
      console.log(1)
      this.loadData(id, 'top')
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>