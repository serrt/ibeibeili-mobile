<template>
  <div>
    <div class="full-container" id="home">
      <div class="home-content" v-on:scroll="scrollT">
        <div class="banner full-container swiper-container">
          <mt-swipe :auto="4000">
            <mt-swipe-item class="swiper-slide" v-for="item in img_list">
              <img v-bind:src="'http://www.bbl.com'+item.url"/>
            </mt-swipe-item>
          </mt-swipe>
          <!-- If we need pagination -->
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
            <div class="full-container" v-html="this.fult_money"></div>
          </div>
        </div>

        <!-- 推荐项目 -->
        <div class="full-container recommend">
          <div class="invest-name flex-middle">
            <div class='container surplus'>
              {{project.name}}
              <span><i class="tubiao danbao"></i>{{project.collateral_type}}</span>
              <span><i class="tubiao huabenfuxi"></i>{{project.payment_name}}</span>
            </div>
          </div>
          <div class="flex container invest-intro">
            <div class="rate">
              <div class="fl rate-detail">
                <div class="rate-num flex-middle h50"><p class="Pcenter expect">{{project.rate}}%</p></div>
                <div class="intro-title flex-middle h50">预期年化</div>
              </div>
            </div>
            <div class="days">
              <div class="days-num flex-middle h50"><p class="Pcenter duration">{{project.finance_time}}</p></div>
              <div class="days-title flex-middle h50"><p class="Pcenter">期限</p></div>
            </div>
            <div class="buy flex-middle">
              <router-link class="btn container invest-btn" :to="{name: 'project-detail', params: {id: project.id}}" tag="span">立即购买</router-link>
            </div>
          </div>
        </div>

        <!-- 四大功能 -->
        <div class='four-features full-container'>
          <router-link class="feature h50 mission" :to="{name: 'user-task'}" tag="div">
            <div class="feature-cont flex-middle ">
              <div class="full-container">
                <i class="iconfont icon-renwu"></i><br>
                <span class="title">任务中心</span><br>
                <span class="detail">领取每日福利</span>
              </div>
            </div>
          </router-link>
          <router-link class="feature h50 invite" :to="{name: 'virtual'}" tag="div">
            <div class="feature-cont flex-middle">
              <div class="full-container">
                <i class="iconfont icon-yonghu2"></i><br>
                <span class="title">新手体验</span><br>
                <span class="detail">财富值专享</span>
              </div>
            </div>
          </router-link>
          <div class="feature h50 help" :to="{name: 'about'}" tag="div">
            <div class="feature-cont flex-middle" :to="{name: 'about'}">
              <div class="full-container">
                <i class="iconfont icon-yaoqing"></i><br>
                <span class="title">邀请有奖</span><br>
                <span class="detail">经纪人制度</span>
              </div>
            </div>
          </div>
          <router-link class="feature h50 about" :to="{name: 'about'}" tag="div">
            <div class="feature-cont flex-middle">
              <div class="full-container">
                <span class="BBL-logo flex-middle"><i></i></span>
                <span class="title">关于倍倍利</span><br>
                <span class="detail">了解我们及最新运营数据</span>
              </div>
            </div>
          </router-link>
        </div>

        <!-- 平台公告 -->
        <div class="notice-news container flex-middle">
          <i class="notice-logo"></i>招商、民生、广发、华夏、工商银行系统维护公告
        </div>
        <div class="big-events" style="min-height:520px;">
          <img src="../../static/images/big-events.gif" v-if="img_show"/>
        </div>
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
      img_list: [],
      project: {id: 0},
      img_show: false,
      trade_money: 0 // 累计交易额
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('projects/sumFinancedMoney').then((response) => {
      this.trade_money = response.data.money
    })
    this.$http.get('banner').then((response) => {
      this.img_list = response.data.data
      Indicator.close()
    })
    this.$http.get('projects/recommoned').then((response) => {
      this.project = response.data.data
    })
  },
  computed: {
    fult_money: function () {
      let number1 = Math.floor(this.trade_money / 100000000) | 0
      let number2 = Math.floor((this.trade_money - 100000000 * number1) / 10000)
      let number3 = Math.floor(this.trade_money - 100000000 * number1 - 10000 * number2)
      // 少于4位用0代替
      let stringNumber2 = number2.toString()
      for (let i = 0; i < 5; i++) {
        if (stringNumber2[i] === undefined) {
          stringNumber2 = 0 + stringNumber2
        }
      }
      let stringNumber3 = number3.toString()
      for (let i = 0; i < 5; i++) {
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
    scrollT: function (event) {
      if (event.srcElement.scrollTop >= window.outerHeight / 2 && !this.img_show) {
        this.img_show = true
      }
    }
  }
}
</script>
<style scoped>
  #home {
    margin-bottom: 50px;
  }  
  .banner{
    height: 30%;
  }
  #home .banner img {
    width: 100%;
    height: 100%;
  }

  #home .four-features {
    height: 30%;
  }
</style>