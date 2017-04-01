<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="notice full-container">
      <ul>
        <li class="myMessage">
          <div class="container">
            <!-- class: hasNew -->
            <span class="user-message fl"></span>
            <router-link class="newMessage" :to="{name: 'article-list', params: {cate: sale_notice.cate}}" tag="div">
              <div class="message-title surplus">预售公告<span class="date fr">{{sale_notice.published_at}}</span></div>
              <div class="abstract surplus">{{sale_notice.title}}</div>
            </router-link>
          </div>
        </li>
        <li class="projectsMessage">
          <div class="container">
            <!-- class: hasNew -->
            <span class="project-remind fl"></span>
            <router-link class="newMessage" :to="{name: 'article-list', params: {cate: payment_notice.cate}}" tag="div">
              <div class="message-title surplus">还款公告<span class="date fr">{{payment_notice.published_at}}</span></div>
              <div class="abstract surplus">{{payment_notice.title}}</div>
            </router-link>
          </div>
        </li>
      </ul>
      <div class="full-container">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy">
          <router-link v-for="item in list" :to="{name: 'article-detail', params: {id: item.id}}" tag="li">
            <div class="container">
              <div class="newMessage">
                <div class="message-title surplus"><span class="title surplus">{{item.title}}</span><span class="date fr">{{item.published_at}}</span></div>
                <div class="message-pic full-container" v-if="item.image">
                  <img v-bind:src="item.image" width="100%" height="100%">
                </div>
                <!-- <div class="abstract surplus">{{item.content}}</div> -->
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import {Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '公告中心',
      sale_notice: {id: 1, cate: 1},
      payment_notice: {id: 1, cate: 1},
      list: [],
      busy: false,
      api: 'article/system',
      nextApi: ''
    }
  },
  mounted () {
    this.$http.get('article/sale').then((response) => {
      this.sale_notice = response.data.data
    })
    this.$http.get('article/payment').then((response) => {
      this.payment_notice = response.data.data
    })
  },
  computed: {
  },
  methods: {
    loadData: function (refresh) {
      this.busy = true
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
          // this.busy = false
        }
      })
    }
  },
  watch: {
    busy: function (v) {
      console.log(v)
    }
  }
}
</script>
<style scoped>
</style>