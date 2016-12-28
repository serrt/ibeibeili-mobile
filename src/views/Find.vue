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
            <router-link class="option-item" :to="{name: 'notice'}" tag="div">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-gonggao"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">公告中心</span>
                <span class="abstract">公司动态信息</span>
              </div>
            </router-link>
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

      <!-- <div class="info full-container page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <loadmore class="latest-news" :top-method="refresh" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'drop'">释放刷新</span>
            <span v-show="topStatus === 'pull'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">正在加载。。。</span>
          </div>
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
            <span v-show="bottomStatus == 'pull'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">正在加载。。。</span>
          </div>
        </loadmore>
      </div> -->
      <list :api="example" :list="list" @handle-list-change="handleListChange">
        <ul class="latest-news" solt="list">
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
      </list>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import FooterNav from '../components/Footer'
import List from '../components/List'

export default {
  components: {HeaderTop, FooterNav, List},
  data: function () {
    return {
      title: '发现',
      api: '/article/1',
      example: [
        {id: 1, title: '1倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-12-24 12:24:58', image: '../../static/images/news.png'},
        {id: 2, title: '2倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-11-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '3倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '3倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 4, title: '6倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-09-24 12:24:58', image: '../../static/images/news.png'}
      ],
      list: []
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    handleListChange: function (value) {
      this.list = value
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>