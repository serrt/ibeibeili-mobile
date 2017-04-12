<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="discovery-box full-container">
      <div class="banner">
        <img src="../../static/images/discovery-test.png">
      </div>
      <div class="options full-container">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
          <li class="flex">
            <div :to="{name: 'planner'}" class="option-item" tag="div" v-on:click="shareBox">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-invite"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">邀请有奖</span>
                <span class="abstract">邀请就有惊喜</span>
              </div>
            </div>
            <router-link class="option-item" :to="{name: 'notice'}" tag="div">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-info"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">公告中心</span>
                <span class="abstract">公司动态信息</span>
              </div>
            </router-link>
          </li>
          <li class="flex">
            <router-link class="option-item" :to="{name: 'user-feedback'}" tag="div">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-report"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">用户反馈</span>
                <span class="abstract">改进建议</span>
              </div>
            </router-link>
            
            <router-link class="option-item" :to="{name: 'help'}" tag="div">
              <div class="logo fl clear">
                <span>
                  <i class="iconfont icon-bangzhu2"></i>
                </span>
              </div>
              <div class="intro">
                <span class="title">帮助中心</span>
                <span class="abstract">有问题找小倍</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="latest-news">
        <ul>
          <router-link :to="{name: 'article-detail', params:{id:item.id}}" v-for="item in list" tag="li">
            <div class="words fl">
              <span class="abstract">{{item.title}}</span>
            </div>
            <span class="date">{{item.published_at}}</span>
            <div class="news-pic flex-middle">
              <img v-bind:src="item.image || '/static/images/message-pic.png'">
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <share :show="popupVisible" @cancel="shareBox"></share>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Share from '../components/Share'
import HeaderTop from '../components/Header'
import FooterNav from '../components/Footer'
import {Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, FooterNav, Indicator, Share},
  data: function () {
    return {
      title: '发现',
      list: [],
      busy: false,
      api: 'article/activity',
      popupVisible: false,
      nextApi: ''
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
  },
  methods: {
    loadData: function (refresh) {
      let uri = this.api
      if (this.nextApi && !refresh) {
        uri = this.nextApi
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
    },
    shareBox: function () {
      this.popupVisible = !this.popupVisible
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>