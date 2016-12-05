<template>
	<div class="header bg-white">
		<ul>
			<li><a href="javascript:void(0)" class="back"></a></li>
			<li class="f-gray">{{title}}</li>
			<li><a href="javascript:void(0)">注册</a></li>
			<!-- 消息提示铃
			<li>
				<a href="javascript:void(0)" class="icon bell flash">
					<div class="news-num text-center ">11</div>
				</a>
			</li> -->
		</ul>
	</div>
</template>

<script>
export default {
  props: [ 'title' ],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>