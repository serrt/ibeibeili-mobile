<template>
  <div>
    <div class="header container">
      <ul>
        <li class="back">
          <router-link :to="{name: 'home'}" tag="span" replace><i class="iconfont icon-01fanhui"></i></router-link>
        </li>
        <li class="f-gray title surplus">{{title}}</li>
        <li class="other" v-on:click="shareBox"><span>。。。</span></li>
      </ul>
    </div>
    <div class="full-container top-box">
      <div class="inviting-activity">
        <div class="">
          <img src="https://pre.ibeibeili.com/resources/invite/invite-friends-header.png" width="100%"/>
        </div>
        <div class="activity">
          <img src="https://pre.ibeibeili.com/resources/invite/invite-friends-activity1.png" width="100%">
          <a href="javascript:void(0)" class="rule">活动规则</a>
        </div>
        <div class="activity return-money">
          <img src="https://pre.ibeibeili.com/resources/invite/invite-friends-activity2.png" width="100%">
          <a href="javascript:void(0)" class="rule">活动规则</a>
        </div>
      </div>
      <div class="invite-rules" id="rules" name="rules">
        <img src="https://pre.ibeibeili.com/resources/invite/rules.png" width="100%"/>
      </div>
    </div>
    <share :show="popupVisible" @cancel="shareBox" :data="shareData"></share>
  </div>
</template>

<script>
import Share from '../../components/Share'

export default {
  components: {Share},
  data: function () {
    return {
      popupVisible: false,
      shareData: {url: 'https://pre.ibeibeili.com'},
      title: '邀请有奖'
    }
  },
  mounted () {
    this.baidu('c56325f5aa601a2d6c01ef9a2db2cfd8')
  },
  computed: {
  },
  methods: {
    shareBox: function () {
      this.popupVisible = !this.popupVisible
    }
  },
  watch: {
  }
}
</script>
<style scoped>
@import 'https://pre.ibeibeili.com/resources/invite/invite-friends-mobile.css';
</style>