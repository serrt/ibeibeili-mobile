<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box anniversary2 full-container">
      <div class="swiper-container anniversary-content">
        <swiper class="swiper-wrapper" :options="swiperOption">
          <!-- 初始页面 -->
          <swiper-slide class="swiper-slide first">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/flower.png" class="flower">
              <img src="../../static/images/activity-anniversary2/1.png" class="first-page">
              <div class="next"></div>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/2.png" class="second-page">
              <div class="next"></div>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/3.png" class="third-page">
              <div class="next"></div>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/4.png" class="forth-page">
              <div class="next"></div>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/5.png" class="fifth-page">
              <div class="next"></div>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div class="slide-content">
              <img src="../../static/images/activity-anniversary2/6.png" class="sixth-page">
              <router-link class="invest" :to="{path: 'projects'}"></router-link>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
      title: '2周年庆',
      swiperOption: {
        direction: 'vertical',
        nextButton: '.next'
      }
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style scoped>
.anniversary2 .swiper-slide{
  background-image: url(../../static/images/activity-anniversary2/bg.png);
}
.anniversary2 .swiper-slide .next{
  background-image: url(../../static/images/activity-anniversary2/next.png);
}
.anniversary2 .invest{
  background-image: url(../../static/images/activity-anniversary2/invest.png);
}
</style>