<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="invest-friends-content container">
      <div class="tab">
        <div class="tab-item" v-bind:class="{active: current === 'content1'}" v-on:click="toggleContent('content1')">邀请有奖</div>
        <div class="tab-item" v-bind:class="{active: current === 'content2'}" v-on:click="toggleContent('content2')">投资返佣</div>
      </div>
      <!-- 邀请有奖 -->
      <div class="first-reward showcontent" v-show="current === 'content1'">
        <div class="reward">
            <div class="reward-item"><i>昨日奖励（元）：</i><span v-text="inviteData.last_day_gift"></span></div>
            <div class="reward-item"><i>累计奖励（元）：</i><span v-text="inviteData.total_gift"></span></div>
            <div class="reward-buttons">
                <div>
                    <a href="javascript:void(0)" v-on:click="shareBox">邀请好友</a>
                </div>
                <div>
                  <router-link :to="{path: 'user-invite-friend'}">投资明细</router-link>
                </div>
            </div>
            <p>本月邀请好友注册首投<span>≥2000</span>元，您将获得返现奖励如下：</p>
            <p>（当月注册后当月10天内首投才能生效）</p>
        </div>
        <div class="process">
            <div class="process-title">
                本月任务进展
                <a href="javascript:void(0)" v-on:click="ruleBox">规则说明</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>现金奖励</td>
                        <td>是否领取</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in inviteData.awards">
                        <td>{{item.name}}（邀请注册首投≥{{item.standard}}人）</td>
                        <td>{{item.receive?'已领':'未领'}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

      <!-- 投资返佣 -->
      <div class="commission showcontent" v-show="current === 'content2'">
        <div class="reward">
            <div class="reward-item"><i>昨日佣金（元）：</i><span>{{plannerData.last_day_money}}</span></div>
            <div class="reward-item"><i>累计佣金（元）：</i><span>{{plannerData.total_money}}</span></div>
            <p class="formula">每日佣金=佣金利率×好友总待收÷360</p>
            <p class="rule-explain"><a href="javascript:void(0)" v-on:click="ruleBox">规则说明</a></p>
        </div>
        <div class="my-income">
            <ul>
                <li><i>我的待收资金（元）：</i><span>{{plannerData.user_money}}</span></li>
                <li><i>当前佣金利率：</i><span>{{plannerData.rate}}%</span></li>
                <li><i>好友待收本金(元)：</i><span>{{plannerData.friends_money}}</span></li>
            </ul>
        </div>
        <div class="commission-explain">
            <p>佣金利率说明</p>
            <table>
                <tr>
                    <td>我的待收</td>
                    <td>待收＜0.2万</td>
                    <td>0.2万≤待收 ＜5万</td>
                    <td>5万≤待收 ＜10万</td>
                </tr> 
                <tr>
                    <td>佣金利率</td>
                    <td>0％</td>
                    <td>0.5％</td>
                    <td>0.6％</td>
                </tr>
            </table>

            <table>
                <tr>
                    <td>我的待收</td>
                    <td>10万≤待收 ＜30万</td>
                    <td>30万≤待收 ＜50万</td>
                    <td>待收≥50万</td>
                </tr> 
                <tr>
                    <td>佣金利率</td>
                    <td>0.7％</td>
                    <td>0.8％</td>
                    <td>1％</td>
                </tr>
            </table>
        </div>
      </div>
    </div>
    <!-- 分享 -->
    <share :show="popupVisible" @cancel="shareBox"></share>
    <!-- 活动规则 -->
    <popup v-model="popupRule" position="right">
      <img src="https://pre.ibeibeili.com/resources/invite/rules.png" alt="" width="100%" height="100%" v-on:click="ruleBox"/>
    </popup>
  </div>
</template>

<script>
import appEnv from '../../env'
import HeaderTop from '../components/Header'
import {Indicator, Popup} from 'mint-ui'
import Share from '../components/Share'

export default {
  components: {appEnv, HeaderTop, Indicator, Share, Popup},
  data: function () {
    return {
      title: '邀请有奖',
      current: 'content1',
      // 邀请信息
      inviteData: {
        last_day_gift: 0,
        total_gift: 0
      },
      // 返佣信息
      plannerData: {
        friends_money: 0,
        last_day_money: 0,
        rate: 0,
        total_money: 0,
        user_money: 0
      },
      // 分享显示状态
      popupVisible: false,
      // 规则窗体
      popupRule: false
    }
  },
  mounted () {
    Indicator.open()
    this.$http.post('user/inviteInfo').then((response) => {
      Indicator.close()
      this.inviteData = response.data
    })
    this.$http.post('user/plannerInfo').then((response) => {
      Indicator.close()
      this.plannerData = response.data
    })
  },
  computed: {
  },
  methods: {
    toggleContent: function (key) {
      this.current = key
    },
    shareBox: function () {
      this.popupVisible = !this.popupVisible
    },
    ruleBox: function () {
      this.popupRule = !this.popupRule
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.tab-item{
  width: 50%;
  height: 28px;
  line-height: 28px;
  display: block;
  color: #e72418;
  float: left;
  text-align: center;
}
</style>