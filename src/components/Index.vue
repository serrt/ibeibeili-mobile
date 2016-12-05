<template>
	<div>
		<div class="page-box center" v-bind:style="{height:img_height}">
			
			<!-- banner -->
	    <swiper :options="swiperOption" class="full-with banner">
			  <!-- 幻灯内容 -->
			  <swiper-slide><img src="/static/img/1.jpg"></swiper-slide>
			  <swiper-slide><img src="/static/img/2.jpg"></swiper-slide>
			  <swiper-slide><img src="/static/img/3.jpg"></swiper-slide>
			  <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
			  <div class="swiper-pagination" slot="pagination"></div>
			</swiper>

			<!-- freshmenMission -->
			<div class="freshmen-mission full-with text-center bottom-gray">
				<div class="title">
					<h1>新手体验任务</h1>
				</div>
				
				<div class="freshmen-content">
					<ul>
						<li>
							<p><span>8</span>%</p>
							<p>预期年化</p>
						</li>
						<li>
							<p><span>1天</span>任务期限&nbsp;|&nbsp;<i></i>仅限用财富值投资</p>
						</li>
						<li>
							<a href="javascript:void(0)" class="center text-center ">立即体验</a>
						</li>
					</ul>
				</div>
			</div>

			<!-- btns -->
			<div class="user-btns full-with">
				
					<a href="">
						<div class="icon">
							<span></span>
						</div>
						<h5>签到</h5>
						<p>签到领钱</p>
					</a>
					<div class="slide"></div>
					<a href="">
						<div class="icon">
							<span></span>
						</div>
						<h5>邀请有奖</h5>
						<p>邀请好友福利多多</p>
					</a>
					<hr>
					<a href="">
						<div class="icon">
							<span></span>
						</div>
						<h5>关于倍倍利</h5>
						<p>了解我们及最新动态</p>
					</a>
					<div class="slide"></div>
					<a href="">
						<div class="icon">
							<span></span>
						</div>
						<h5>帮助中心</h5>
						<p>有问题找小倍</p>
					</a>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { swiper, swiperSlide },
  data () {
    return {
      img_height: (window.innerHeight - 90) + 'px',
      swiperOption: {
        autoplay: 500,
        setWrapperSize: false,
        pagination: '.swiper-pagination',
        paginationClickable: false,
        mousewheelControl: false,
        observeParents: false,
        loop: true
      },
      swiperSlides: [1, 2, 3]
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
