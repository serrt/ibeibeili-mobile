<template>
  <div class="banner full-container guide" v-show="show" v-bind:style="{height: innerHeight}">
    <mt-swipe :auto="0" :continuous="false" :show-indicators="false">
      <mt-swipe-item class="swiper-slide">
        <div class="guide-bg">
          <div class="guide-img guide-img1"></div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="swiper-slide">
        <div class="guide-bg">
          <div class="guide-img guide-img2"></div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="swiper-slide">
        <div class="guide-bg">
          <div class="guide-img guide-img3"></div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="swiper-slide">
        <div class="guide-bg">
          <div class="guide-img guide-img4"></div>
          <button type="button" class="guide-btn" v-on:click="closeGuide">立即前往</button>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      innerHeight: window.innerHeight + 'px'
    }
  },
  props: ['show'],
  mounted () {
  },
  computed: {
  },
  methods: {
    closeGuide: function () {
      this.$emit('close', false)
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.guide-bg{
  width:100%;
  height:100%;
  position:relative;
}
.guide-img{
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
}
.guide-img1{
  background-image: url(../../static/images/guide/1.png);
}
.guide-img2{
  background-image: url(../../static/images/guide/2.png);
}
.guide-img3{
  background-image: url(../../static/images/guide/3.png);
}
.guide-img4{
  background-image: url(../../static/images/guide/4.png);
}

.guide-btn{
  position: absolute;
  bottom: 15%;
  left: 33%;
  height: 5%;
  background-color: #fff;
  color: red;
  border-radius: 25px;
  border: 1px solid red;
  padding: 20px 30px;
  font-size: 18px;
  line-height: 0;
}
</style>