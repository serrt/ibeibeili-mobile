<template>
  <div>
    <div class="header container assets-planner-header">
      <ul>
        <li class="back">
          <span v-on:click="$router.back()"><i class="iconfont icon-01fanhui"></i></span>
        </li>
        <li class="title">理财师</li>
        <li class="other">
          <router-link class="rules" :to="{name: 'planner-rule'}" tag="span">规则</router-link>
        </li>
      </ul>
    </div>
    <div class="assets-planner full-container">
      <div class="levels full-container">
        <ul class="container">
          <li class="full-container flex">
            <div class="level-icon">
              <!-- complete -->
              <span><i class="level-num">4</i></span>
            </div>
            <div class="level-explain">
              <p>好友投资，得年化2.0%佣金，好友当月累计投资X≥20万元</p>
            </div>
            <div class="isPrivilege flex-middle"><span></span></div>
          </li>
          <li class="full-container flex">
            <div class="level-icon">
              <span><i class="level-num">3</i></span>
            </div>
            <div class="level-explain">
              <p>好友投资，得年化1.5%佣金，好友当月累计投资5万元≤X＜20万元</p>
            </div>
            <div class="isPrivilege flex-middle"><span></span></div>
          </li>
          <li class="full-container flex">
            <div class="level-icon">
              <span><i class="level-num">2</i></span>
            </div>
            <div class="level-explain">
              <p>好友投资，得年化1.0%佣金，好友当月累计投资x＜5万元</p>
            </div>
            <div class="isPrivilege flex-middle"><span></span></div>
          </li>
          <li class="full-container flex">
            <div class="level-icon">
              <span><i class="level-num">1</i></span>
            </div>
            <div class="level-explain">
              <p>好友首投，一次性得年化1.0%佣金</p>
            </div>
            <div class="isPrivilege flex-middle"></div>
          </li>
        </ul>
        <router-link class="btn be-planner full-container" :to="{name: 'planner-apply'}" v-show="user.scope===0">成为理财师</router-link>
        <button type="button" class="btn be-planner full-container" v-show="user.scope === 1">等待审核...</button>
      </div>
      <div class="invite-log full-container flex">
        <router-link class="friends" :to="{name: 'planner-user'}" tag="div">
          <!-- <i class="new-friends"></i> -->
          <span>累计邀请 &gt;</span>
          <span>{{planInfo.totalInvite}}人</span>
        </router-link>
        <router-link class="commission" :to="{name: 'planner-money'}" tag="div">
          <span>累计已得佣金 &gt;</span>
          <span>{{planInfo.totalPlanMoney}}元</span>
        </router-link>
        <div class="total-invest">
          <span>好友当月累计投资</span>
          <span>{{planInfo.monthInvest}}元</span>
        </div>
      </div>
      <div class="month-commission full-container">
        <p>当月获得佣金</p>
        <p class="earn-money"><span>{{planInfo.monthPlanMoney}}</span>元</p>
        <p ><span>2016年12月31日</span>前还需邀请1位好友注册且投资</p>
      </div>
      <div class="container add-friends">
        <button type="button" class="btn" v-on:click="shareBox">立即邀请好友</button>
      </div>
    </div>
    <share :show="popupVisible" @cancel="shareBox"></share>
  </div>
</template>

<script>
import Share from '../../components/Share'
import HeaderTop from '../../components/Header'
import {Indicator} from 'mint-ui'

export default {
  components: {Share, HeaderTop, Indicator},
  data: function () {
    return {
      title: '理财师',
      user: this.$store.getters.user,
      planInfo: {},
      popupVisible: false
    }
  },
  mounted () {
    Indicator.open()
    this.$http.post('user/plannerInfo').then((response) => {
      this.$store.dispatch('user', response.data.data)
      this.user = response.data.data
      this.planInfo = response.data
      Indicator.close()
    })
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
.complete {
  background-image: url('../../../static/images/levels-reach.png') !important;
}
</style>