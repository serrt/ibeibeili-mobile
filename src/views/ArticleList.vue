<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="infolist full-container">
      <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-immediate-check="false">
        <router-link v-for="item in list" :to="{name: 'article-detail', params: {id: item.id}}" tag="li">
          <div class="info-content container">
            <div class="info-title surplus">{{item.title}}</div>
            <div class="info-date">{{item.published_at}}</div>
          </div>
          <span class="toNext"><i class="iconfont icon-unie61f"></i></span>
        </router-link>
      </ul>
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
      title: '',
      list: [],
      busy: false,
      api: 'article/cateArticles/' + this.$route.params.cate,
      nextApi: ''
    }
  },
  mounted () {
    this.loadData()
    this.$http.get('article/cateInfo/' + this.$route.params.cate).then((response) => {
      this.title = response.data.data.name
    })
  },
  computed: {
  },
  methods: {
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