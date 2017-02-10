<template>
  <div v-on:wheel="wheel">
    <transition name="fade">
      <div class="header container" v-show="header_show">
        <ul>
          <li class="back"></li>
          <li class="f-gray title">首页</li>
          <li class="other">
            <router-link :to="{name: 'login'}" tag="span" v-if="!is_login">登录</router-link>
          </li>
        </ul>
      </div>
    </transition>
    <div class="full-container homepage">
      <div class="banner full-container" v-bind:style="{height: banner_height}">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="swiper-slide" v-for="item in img_list">
            <img v-bind:src="item.url"/>
          </mt-swipe-item>
        </mt-swipe>
        <div class="swiper-pagination"></div>
      </div>
      <!-- trade-volume -->
      <div class="container trade-volume">
        <div class="accumulate flex-middle">
          <div class="go-detail full-container">
            累积交易额
            <span class="toNext">
              <i class="iconfont icon-unie61f"></i>
            </span>
          </div>
        </div>
        <div class="total-num flex-middle">
          <div class="full-container" v-html="fult_money"></div>
        </div>
      </div>

      <!-- 推荐项目 -->
      <div class="full-container recommend" v-if="project">
        <div class="invest-name flex-middle">
          <div class='container surplus'>
            {{project.name}}
            <span><i class="iconfont icon-danbao"></i>{{project.collateral_type}}</span>
            <span><i class="iconfont icon-dqhbfx"></i>{{project.payment_name}}</span>
          </div>
        </div>
        <div class="flex container invest-intro">
          <div class="rate">
            <div class="fl rate-detail">
              <div class="rate-num flex-middle h50"><p class="Pcenter expect" v-html="project.rate_show"></p></div>
              <div class="intro-title flex-middle h50">预期年化</div>
            </div>
          </div>
          <div class="days">
            <div class="days-num"><p class="Pcenter duration">{{project.finance_time}}</p></div>
            <div class="days-title"><p class="Pcenter">期限</p></div>
          </div>
          <div class="buy flex-middle">
            <router-link class="btn container invest-btn" :to="{name: 'project-detail', params: {id: project.id}}" tag="span">立即购买</router-link>
          </div>
        </div>
      </div>

      <!-- 四大功能 -->
      <div class='four-features full-container'>
        <div class="feature flex">
          <router-link class="feature-cont flex-middle" :to="{name: 'user-task'}" tag="div">
            <div class="full-container">
              <i class="iconfont icon-renwu"></i>
              <span class="title">任务中心</span>
              <span class="detail">领取每日福利</span>
            </div>
          </router-link>
          <router-link class="feature-cont flex-middle" :to="{name: 'virtual'}" tag="div">
            <div class="full-container">
              <i class="iconfont icon-yonghu2"></i>
              <span class="title">新手体验</span>
              <span class="detail">财富值专享</span>
            </div>
          </router-link>
        </div>
        <div class="feature flex">
          <router-link class="feature-cont flex-middle" :to="{name: 'planner'}" tag="div">
            <div class="full-container">
              <i class="iconfont icon-yaoqing"></i>
              <span class="title">邀请有奖</span>
              <span class="detail">财富值专享</span>
            </div>
          </router-link>
          <router-link class="feature-cont flex-middle" :to="{name: 'about'}" tag="div">
            <div class="full-container">
              <span class="BBL-logo flex-middle"><i></i></span>
              <span class="title">关于倍倍利</span>
              <span class="detail">了解我们及最新运营数据</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 平台公告 -->
      <router-link class="notice-news container flex-middle" v-if="notice.id" :to="{name: 'article-detail', params: {id: notice.id}}" tag="div">
        <i class="notice-logo"></i>{{notice.title}}
      </router-link>
      <div class="big-events">
        <img src="../../static/images/big-events.gif"/>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/Footer'
import {MessageBox, Indicator} from 'mint-ui'

export default {
  components: {FooterNav, MessageBox, Indicator},
  data: function () {
    return {
      title: '首页',
      is_login: this.$store.getters.isLogin,
      img_list: [],
      banner_height: window.innerHeight * 0.3 + 'px',
      project: false,
      header_show: false,
      notice: {},
      trade_money: 0 // 累计交易额
    }
  },
  mounted () {
    this.$http.get('projects/sumFinancedMoney').then((response) => {
      this.trade_money = response.data.money
    })
    this.$http.get('banner').then((response) => {
      this.img_list = response.data.data
    })
    this.$http.get('projects/recommoned').then((response) => {
      this.project = response.data.data
    })
    this.$http.get('article/system').then((response) => {
      if (response.data.data.length > 0) {
        this.notice = response.data.data[0]
      }
    })
  },
  computed: {
    fult_money: function () {
      let number1 = Math.floor(this.trade_money / 100000000) | 0
      let number2 = Math.floor((this.trade_money - 100000000 * number1) / 10000)
      let number3 = Math.floor(this.trade_money - 100000000 * number1 - 10000 * number2)
      // 少于4位用0代替
      let stringNumber2 = number2.toString()
      for (let i = 0; i < 4; i++) {
        if (stringNumber2[i] === undefined) {
          stringNumber2 = 0 + stringNumber2
        }
      }
      let stringNumber3 = number3.toString()
      for (let i = 0; i < 4; i++) {
        if (stringNumber3[i] === undefined) {
          stringNumber3 = 0 + stringNumber3
        }
      }
      let span = '<span>' + number1.toString() + '</span>亿'
      for (let i = 0; i < stringNumber2.length; i++) {
        span += '<span>' + (stringNumber2[i] | 0) + '</span>'
      }
      span += '万'
      for (let i = 0; i < stringNumber3.length; i++) {
        span += '<span>' + (stringNumber3[i] | 0) + '</span>'
      }
      span += '元'
      return span
    }
  },
  methods: {
    wheel: function () {
      if (document.body.scrollTop > 50) {
        this.header_show = true
      } else {
        this.header_show = false
      }
    }
  }
}
</script>
<style scoped>
  .banner img {
    width: 100%;
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>