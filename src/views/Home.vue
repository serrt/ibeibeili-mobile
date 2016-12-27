<template>
  <div>
    <div class="full-container" id="home">
      <div class="home-content">
        <div class="banner full-container swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in img_list">
              <img class="swiper-lazy" v-bind:src="item.url"/>
              <!-- <div class="swiper-lazy-preloader"></div> -->
            </div>
          </div>
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
            <div class="full-container" v-bind:money="this.fult_money">
              <span>1</span>亿
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>万
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>元
            </div>
          </div>
        </div>

        <!-- 推荐项目 -->
        <div class="full-container recommend">
          <div class="invest-name flex-middle">
            <div class='container surplus'>
              商贸公司经营贷Y20160297
              <span><i class="tubiao danbao"></i>担保</span>
              <span><i class="tubiao huabenfuxi"></i>到期还本利息</span>
            </div>
          </div>
          <div class="flex container invest-intro">
            <div class="rate">
              <div class="fl rate-detail">
                <div class="rate-num flex-middle h50"><p class="Pcenter expect">11%<span>+1%</span></p></div>
                <div class="intro-title flex-middle h50">预期年化</div>
              </div>
            </div>
            <div class="days">
              <div class="days-num flex-middle h50"><p class="Pcenter duration">66天</p></div>
              <div class="days-title flex-middle h50"><p class="Pcenter">期限</p></div>
            </div>
            <div class="buy flex-middle">
              <span class="btn container invest-btn" >立即购买</span>
            </div>
          </div>
        </div>

        <!-- 四大功能 -->
        <div class='four-features full-container'>
          <div class="feature h50 mission" >
            <div class="feature-cont flex-middle ">
              <div class="full-container">
                <i class="iconfont icon-renwu"></i><br>
                <span class="title">任务中心</span><br>
                <span class="detail">领取每日福利</span>
              </div>
            </div>
          </div>
          <div class="feature h50 invite" >
            <div class="feature-cont flex-middle ">
              <div class="full-container">
                <i class="iconfont icon-yaoqing"></i><br>
                <span class="title">邀请有奖</span><br>
                <span class="detail">财富值专享</span>
              </div>
            </div>
          </div>
          <router-link class="feature h50 about" :to="{name: 'about'}" tag="div">
            <div class="feature-cont flex-middle" :to="{name: 'about'}">
              <div class="full-container">
                <span class="BBL-logo flex-middle">
                  <i></i>
                </span>
                <span class="title">关于倍倍利</span><br>
                <span class="detail">了解我们及最新运营数据</span>
              </div>
            </div>
          </router-link>
          <router-link class="feature h50 help" :to="{name: 'help'}" tag="div">
            <div class="feature-cont flex-middle">
              <div class="full-container">
                <i class="iconfont icon-bangzhu"></i><br>
                <span class="title">帮助中心</span><br>
                <span class="detail">有问题找小倍</span>
              </div>
            </div>
          </router-link>
        </div>

        <!-- 平台公告 -->
        <div class="notice container flex-middle">
          <i class="notice-icon"></i>招商、民生、广发、华夏、工商银行系统维护公告
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/Footer'
import Swiper from 'swiper'

export default {
  components: {FooterNav},
  data: function () {
    return {
      swiper: null, // 滑动插件
      // 图片列表
      img_list: [{url: './static/images/banner.png'}, {url: './static/images/bank.png'}, {url: './static/images/message-pic.png'}],
      trade_money: 102587896.00, // 累计交易额
      money_html: '<span>1</span>已'
    }
  },
  mounted () {
    let sw = new Swiper('.swiper-container', {
      loop: true,
      speed: 2000,
      preloadImages: true,
      autoplay: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false
    })
    this.swiper = sw
  },
  computed: {
    fult_money: function () {
      let number1 = Math.floor(this.trade_money / 100000000)
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
      let string = {number1: number1.toString(), number2: stringNumber2, number3: stringNumber3}
      return string
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  #home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    margin-bottom: 50px;
  }

  #home .home-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  
  .banner{
    height: 30%;
  }
  #home .banner img {
    width: 100%;
    height: 100%;
  }

  #home .trade-volume {
    height: 11%;
    background-color: #fff;
    margin-bottom: 1rem;
    border-bottom: 1px solid #efefef;
  }

  #home .trade-volume .accumulate {
    height: 30%;
    width: 100%;
    color: #e72418;
    padding-top: 0.5rem;
    font-size: 1.2rem;
  }

  #home .trade-volume .accumulate .toNext {
    color: #e6e6e6;
  }

  #home .trade-volume .accumulate .toNext i {
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
    font-size: 1.2rem;
  }

  #home .trade-volume .total-num {
    height: 70%;
    width: 100%;
    color: #666;
    font-size: 1.2rem;
  }

  #home .trade-volume .total-num span {
    padding: 1px 2px;
    font-size: 1.8rem;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin: 0 0px;
  }

  #home .recommend {
    height: 18%;
    background-color: #fff;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    margin-bottom: 10px;
  }

  #home .recommend .invest-name {
    height: 30%;
    font-size: 1.2rem;
    color: #6d6d6d;
    border-bottom: 1px solid #efefef;
  }

  #home .recommend .invest-name span {
    font-size: 1rem;
  }

  #home .recommend .invest-intro {
    height: 70%;
    width: 100%;
  }

  #home .recommend .invest-intro .rate {
    -webkit-box-flex: 1;
    flex: 1;
    height: 100%;
  }

  #home .recommend .invest-intro .rate .rate-detail {
    height: 100%;
    width: auto;
  }

  #home .recommend .invest-intro .rate .rate-detail .rate-num p.expect {
    color: #e72418;
    font-size: 2rem;
  }

  #home .recommend .invest-intro .rate .rate-detail .rate-num p.expect span {
    font-size: 1.3rem;
    vertical-align: top;
  }

  #home .recommend .invest-intro .rate .rate-detail .intro-title {
    font-size: 1.2rem;
    color: #6d6d6d;
  }

  #home .recommend .invest-intro .days {
    -webkit-box-flex: 2;
    flex: 2;
    height: 100%;
  }

  #home .recommend .invest-intro .days .days-num p.duration {
    font-size: 1.4rem;
    color: #6d6d6d;
  }

  #home .recommend .invest-intro .days .days-title {
    font-size: 1.2rem;
    color: #6d6d6d;
  }

  #home .recommend .invest-intro .buy {
    -webkit-box-flex: 2;
    flex: 2;
    height: 100%;
  }

  #home .recommend .invest-intro .buy .invest-btn {
    height: 36px;
    line-height: 36px;
    background-color: #f18101;
    font-size: 1.8rem;
  }

  #home .four-features {
    height: 30%;
    background-color: #fff;
    margin-bottom: 10px;
  }

  #home .four-features .feature {
    display: block;
    float: left;
    width: 50%;
  }

  #home .four-features .feature .feature-cont {
    height: 100%;
    text-align: center;
    align-content: center;
  }

  #home .four-features .feature .feature-cont i {
    color: #e72418;
    font-size: 2.5rem;
  }

  #home .four-features .feature .feature-cont .title {
    font-weight: 100;
    font-size: 1rem;
    color: #4d4d4d;
  }

  #home .four-features .feature .feature-cont .detail {
    font-size: 0.8rem;
    color: #ababab;
  }

  #home .four-features .feature .BBL-logo {
    width: 3.5rem;
    height: 2.5rem;
    margin: 0 auto;
  }

  #home .four-features .feature .BBL-logo i {
    height: 1.5rem;
    width: 2rem;
    background-image: url(../../static/images/bbl.png);
    background-size: 100% 100%;
    display: block;
    margin: 0 auto;
  }

  #home .four-features .mission {
    border-right: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    margin-right: -1px;
    margin-bottom: -1px;
  }

  #home .four-features .help {
    border-left: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
    margin-left: -1px;
    margin-top: -1px;
  }

  #home .notice {
    height: 8%;
    margin-top: 30px;
    background-color: #fff;
    font-size: 1.3rem;
    color: #4d4d4d;
  }

  #home .notice .notice-icon {
    display: block;
    float: left;
    width: 3.7rem;
    height: 3.6rem;
    background-image: url(../../static/images/notice.png);
    background-size: 100% 100%;
    margin-right: 10px;
  }
</style>