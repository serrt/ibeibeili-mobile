<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="discovery-box full-container bottom-box page-box">
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
      <list class="latest-news" :api="api" :list="list" @handle-list-change="handleListChange">
        <ul slot="list">
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
      api: [
        {id: 1, title: '1倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-12-24 12:24:58', image: './static/images/news.png'},
        {id: 2, title: '2倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-11-24 12:24:58', image: './static/images/news.png'},
        {id: 3, title: '3倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: './static/images/news.png'},
        {id: 3, title: '4倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: './static/images/news.png'},
        {id: 3, title: '5倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: './static/images/news.png'},
        {id: 4, title: '6倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-09-24 12:24:58', image: './static/images/news.png'}
      ],
      list: []
    }
  },
  mounted () {
    this.list = this.api
  },
  computed: {
  },
  methods: {
    handleListChange: function (value) {
      this.list = value
    },
    loadData: function () {
      return this.api
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.discovery-box .latest-news{
  margin-bottom: 0;
}
.latest-news{
  overflow: scroll;
}
.latest-news li{
  padding: 1rem
}
</style>