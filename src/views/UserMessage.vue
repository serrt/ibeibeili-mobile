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
    <div class="infolist full-container">
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
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import List from '../components/List'

export default {
  components: {HeaderTop, List},
  data: function () {
    return {
      title: '我的消息',
      list: [
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
    }
  },
  created: function () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
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