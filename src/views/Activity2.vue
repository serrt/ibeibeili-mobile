<template>
  <div>
    <div class="anniversary2 full-container">
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
              <a href="" class="invest"></a>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: '邀请有奖',
      swiperOption: {
        direction: 'vertical'
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