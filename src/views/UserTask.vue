<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="mission-center full-container">
      <div class="mission-progress container">
        今日完成<span class="finish">1</span>个任务，共获得<span class="points">5</span>个积分
      </div>

      <!-- 新手任务 -->
      <div class="freshmen-mission missions full-container">
        <div class="mission-title container">
          新手任务
        </div>
        <div class="mission-list container">
          <ul>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-shiming"></i>
                </div>
                完成实名认证
                <span class="fr mission-points">
                  +5
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-bangdingyinhangka"></i>
                </div>
                绑定银行卡
                <span class="fr mission-points">
                  +5
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-mimashezhi"></i>
                </div>
                设置支付密码
                <span class="fr mission-points">
                  +5
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-yiyue"></i>
                </div>
                完成1月标任意金额投资
                <span class="fr mission-points">
                  +10
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-sanyue"></i>
                </div>
                完成3月标任意金额投资
                <span class="fr mission-points">
                  +10
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-liuyue"></i>
                </div>
                完成6月标任意金额投资
                <span class="fr mission-points">
                  +10
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-yaoqinghaoyou"></i>
                </div>
                邀请好友注册并投资
                <span class="fr mission-points">
                  +15
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 常规任务 -->
      <div class="normal-mission missions full-container">
        <div class="mission-title container">
          每日任务
        </div>
        <div class="mission-list container">
          <ul>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-qiandao"></i>
                </div>
                签到
                <span class="fr mission-points">
                  +15
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-youxi"></i>
                </div>
                玩游戏接元宝
                <span class="fr mission-points">
                  +15
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-yaoqinghaoyou"></i>
                </div>
                邀请好友注册
                <span class="fr mission-points">
                  +15
                </span>
              </div>
            </li>
            <li>
              <div class="mission-items">
                <div class="mission-icon fl">
                  <i class="iconfont icon-yibitouzi"></i>
                </div>
                完成任意1笔投资
                <span class="fr mission-points">
                  +15
                </span>
              </div>
            </li>
          </ul>
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
      title: '任务中心'
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
</style>