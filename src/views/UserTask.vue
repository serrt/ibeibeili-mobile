<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="mission-center full-container">
      <div class="mission-progress container">
        今日完成<span class="finish">{{info.total}}</span>个任务，共获得<span class="points">{{info.score}}</span>个积分
      </div>

      <!-- 新手任务 -->
      <div class="freshmen-mission missions full-container">
        <div class="mission-title container">新手任务</div>
        <div class="mission-list container">
          <ul>
            <li v-for="item in list" v-on:click="redirect(item)" v-if="item.type===1">
              <!-- complete -->
              <div class="mission-items" v-bind:class="{complete: item.completed}">
                <div class="mission-icon fl"><i class="iconfont" v-bind:class="item.icon"></i></div>
                {{item.name}}
                <span class="fr mission-points">+{{item.score}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 常规任务 -->
      <div class="normal-mission missions full-container">
        <div class="mission-title container">每日任务</div>
        <div class="mission-list container">
          <ul>
            <li v-for="item in list" v-on:click="redirect(item)" v-if="item.type===0">
              <!-- complete -->
              <div class="mission-items" v-bind:class="{complete: item.completed}">
                <div class="mission-icon fl"><i class="iconfont" v-bind:class="item.icon"></i></div>
                {{item.name}}
                <span class="fr mission-points">+{{item.score}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <share :show="popupVisible" @cancel="shareBox"></share>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, Toast } from 'mint-ui'
import Share from '../components/Share'

export default {
  components: {HeaderTop, Indicator, Toast, Share},
  data: function () {
    return {
      title: '任务中心',
      list: [],
      info: {total: 0, score: 0},
      popupVisible: false
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('user/task').then((response) => {
      this.list = response.data.data
      this.info.total = response.data.total
      this.info.score = response.data.score
      Indicator.close()
    })
  },
  computed: {
  },
  methods: {
    redirect: function (item) {
      if (item.link) {
        this.$router.push({name: item.link})
      } else if (item.key === 'invite') {
        this.popupVisible = true
      }
    },
    shareBox: function () {
      this.popupVisible = !this.popupVisible
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.mission-items.complete .mission-icon{
  border-color: gray !important;
  color: gray !important;
}
.mission-items.complete .mission-icon:after{
  border: none !important;
  background-color: transparent !important;
  content: '' !important;
}
.mission-items.complete .mission-points{
  color: gray !important;
}
</style>