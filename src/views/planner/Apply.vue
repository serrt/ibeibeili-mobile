<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container assets-planner-apply">
      <div class="must-complete">
        <p>----- 身份获取必达任务 -----</p>
        <ul class="container">
          <li><span>1</span>当月（自然月）邀请2位好友注册且投资（新手标除外）</li>
          <li><span>2</span>自有账户持有至少2000元在投资金</li>
        </ul>
      </div>

      <div class="must-complete">
        <p>----- 身份保有必达任 -----</p>
        <ul class="container">
          <li><span>1</span>每两月（自然月）至少邀请1位好友注册且投资（新手标除外）</li>
          <li><span>2</span>自有账户持有至少2000元在投资金</li>
        </ul>
      </div>

      <div class="btns flex">
        <div class='container'>
          <button type="button" class="btn btn-warning" v-on:click="shareBox">立即邀请好友</button>
        </div>
        <div class="container">
          <router-link class="btn btn-warning" :to="{name: 'projects'}">立即投资</router-link>
        </div>
      </div>
    </div>
    <share :show="popupVisible" @cancel="shareBox"></share>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import Share from '../../components/Share'

export default {
  components: {HeaderTop, Share},
  data: function () {
    return {
      title: '申请成为理财师',
      popupVisible: false
    }
  },
  mounted () {
    this.$http.post('user/applyPlanner')
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
</style>