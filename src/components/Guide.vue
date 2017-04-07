<template>
  <div class="banner full-container guide" v-show="show" v-bind:style="{height: innerHeight}">
    <mt-swipe :auto="0" :continuous="false" :show-indicators="false">
      <mt-swipe-item class="swiper-slide" v-for="(item, index) in guideList">
        <div class="guide-bg">
          <img class="guide-img" v-bind:src="item.url"/>
        </div>
      </mt-swipe-item>
      <mt-swipe-item class="swiper-slide">
        <div class="guide-bg">
          <img class="guide-img" src="/static/images/guide/4.png" alt=""/>
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
      innerHeight: window.innerHeight + 'px',
      // 引导页图片地址
      guideList: [
        {url: '/static/images/guide/1.png'},
        {url: '/static/images/guide/2.png'},
        {url: '/static/images/guide/3.png'}
      ]
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
  position: absolute;
  top:50%;
  -webkit-transform: translate(0,-50%);
  -moz-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  -o-transform: translate(0,-50%);
  transform: translate(0,-50%);
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