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
      <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
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
import { Indicator } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '我的消息',
      list: [],
      busy: false,
      api: 'user/messages',
      nextApi: ''
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
  },
  methods: {
    readAll: function () {
      Indicator.open()
      this.$http.post('user/readMessage', {id: 'all'}).then((response) => {
        Indicator.close()
        if (response.data.status === 0) {
          for (let i in this.list) {
            if (this.list[i].readed === 0) {
              this.list[i].readed = 1
            }
          }
        }
      })
    },
    back: function () {
      this.$router.back()
    },
    loadData: function (refresh) {
      let uri = this.api
      if (this.nextApi && !refresh) {
        uri = this.nextApi
      }
      if (refresh) {
        this.list = []
      }
      Indicator.open()
      this.$http.get(uri).then((response) => {
        let dataList = response.data.data
        this.list = this.list.concat(dataList)
        Indicator.close()
        if (response.data.meta.pagination.links.next) {
          this.nextApi = response.data.meta.pagination.links.next
          this.busy = false
        }
      })
      this.busy = true
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>