<template>
  <div>
    
   	<div class="full-container" id='home'>
   		<div class="banner">
   			<img src="../assets/img/banner.png">
   		</div>

   		<div class="container trade-volume">
   			<ul>
   				<li class="go-detail">
   					<div>
   						累积交易额
	   					<span class="fr">
		                	<i class="iconfont icon-unie61f"></i>
		              	</span>
   					</div>
   				</li>
   				<li class="total-num">
   					<div>
   						<span>1</span>亿
	   					<span>3</span>
	   					<span>0</span>
	   					<span>8</span>
	   					<span>9</span>万
	   					<span>6</span>
	   					<span>6</span>
	   					<span>2</span>
	   					<span>0</span>元
   					</div>
   				</li>
   			</ul>
   		</div>


   		<div class="full-container recommend-invest">
   			<div class="invest-title flex">
   				<div class='container'>
   					商贸公司经营贷 Y20160297 <span><i class=""></i>担保</span><span>到期还本利息</span>
   				</div>
   			</div>
			<div class='container invest-detail'>
				<div class="flex invest-show">
					<div class="expect">
						<div>
							<p class="rate"><span>9</span>.5%</p>
							<p class="item-title">预期年化</p>
						</div>
					</div>
					<div class="duration">
						<p class="days">66天</p>
						<p class="item-title">期限</p>
					</div>
					<div class="buy">
						<a class="btn">立即购买</a>
					</div>
				</div>
			</div>

   		</div>

   		<div class="full-container function-nav">
   			<ul>
   				<li>
   					<i class="iconfont icon-discovery"></i>
   					<h5>任务中心</h5>
   					<p>领取每日福利</p>
   				</li>
   				<li>
   					<i class="iconfont icon-discovery"></i>
   					<h5>邀请有奖</h5>
   					<p>财富值专享</p>
   				</li>
   				<li>
   					<i class="iconfont icon-discovery"></i>
   					<h5>关于倍倍利</h5>
   					<p>了解我们及最新运营数据</p>
   				</li>
   				<li>
   					<i class="iconfont icon-discovery"></i>
   					<h5>帮助中心</h5>
   					<p>有问题找小倍</p>
   				</li>
   			</ul>
   		</div>
   	</div>
    <common-footer></common-footer>
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/home";
  @import "../assets/scss/iconfont";
</style>

<script>
  import CommonHeader from '../components/CommonHeader'
  import CommonFooter from '../components/CommonFooter'

  export default {
    components: {
      CommonHeader,
      CommonFooter
    }
  }
</script>