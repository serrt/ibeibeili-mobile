<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="investSuccess container">
      <div class="ok-logo full-container">
        <div class="ok">
          <img src="../../static/images/ok.png">
        </div>
        投资成功
      </div>
      <ul>
        <li class="project-name">装饰公司抵押贷Y20160383</li>
        <li>投资金额（元）<i class="iconfont icon-renminbi fr"><span class="invest-money">210</span></i></li>
        <li>投资期限<span class="fr">3个月</span></li>
        <li>收益率<span class="fr">8%+0.05%</span></li>
        <li>预期收益（元）<span class="fr income-money"><i class="iconfont icon-renminbi"><span>210</span></i>+<i class="iconfont icon-renminbi"><span>210</span></i></span></li>
        <li>投资时间<span class="fr">2016-10-27</span></li>
      </ul>

      <div class="btns flex">
        <div class="container">
          <router-link class="btn" :to="{name: 'user-project'}" replace>查看项目</router-link>
        </div>
        <div class="container">
          <router-link class="btn" :to="{name: 'projects'}" replace>继续投资</router-link>
        </div>
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
      title: '投资成功'
    }
  },
  mounted () {
    if (window.top.location !== window.location) {
      window.top.location.href = window.location.href
    }
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
</style>