<template>
  <div>
    <div class="header container">
      <ul>
        <li class="back">
          <span v-on:click="back()"><i class="iconfont icon-01fanhui"></i></span>
        </li>
        <li class="f-gray title">{{title}}</li>
        <li class="other" v-on:click="readAll()">
          <span class="all-read">全部已读</span>
        </li>
      </ul>
    </div>
    <div class="infolist full-container page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <loadmore :top-method="refresh" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'drop'">释放刷新</span>
          <!-- <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span> -->
          <span v-show="topStatus === 'loading'">正在加载。。。</span>
        </div>
        <ul>
          <router-link :to="{name: 'user-message-detail', params: {id: item.id}}" tag="li" v-for="item in list">
            <div class="info-content container" v-bind:class="{'isNew': item.readed === 0}">
              <div class="info-title surplus">{{item.title}}</div>
              <div class="info-date">{{item.created_at}}</div>
            </div>
            <span class="toNext">
              <i class="iconfont icon-unie61f"></i>
            </span>
          </router-link>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus === 'drop'">上拉加载</span>
          <!-- <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span> -->
          <span v-show="bottomStatus === 'loading'">正在加载。。。</span>
        </div>
      </loadmore>
      <!-- <div class="no-Data full-container">加载完毕，没有更多内容了</div> -->
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '我的消息',
      list: [],
      allLoaded: false,
      wrapperHeight: 0,
      bottomStatus: '',
      topStatus: ''
    }
  },
  created: function () {
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  },
  computed: {
    selectedList: function () {
    }
  },
  methods: {
    handleBottomChange: function (status) {
      this.bottomStatus = status
    },
    handleTopChange: function (status) {
      this.topStatus = status
    },
    loadData: function (id, dir) {
      let dataList = [
        {id: 1, title: '测试消息1', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 2, title: '测试消息2', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 1},
        {id: 3, title: '测试消息3', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 1},
        {id: 4, title: '测试消息4', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 5, title: '测试消息5', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 6, title: '测试消息5', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 7, title: '测试消息5', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 8, title: '测试消息5', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 9, title: '测试消息5', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0},
        {id: 10, title: '测试消息6', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0}
      ]
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        this.list = []
        this.$refs.loadmore.onTopLoaded(id)
      }
      this.list = this.list.concat(dataList)
    },
    loadBottom: function (id) {
      this.loadData(id, 'top')
    },
    refresh: function (id) {
      this.allLoaded = false
      this.loadData(id, 'bottom')
    },
    readAll: function () {
      for (let i in this.list) {
        if (this.list[i].readed === 0) {
          this.list[i].readed = 1
        }
      }
    },
    back: function () {
      this.$router.back()
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>