<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="ivest-logs full-container">
      <div class="flex full-container detail-title">
        <div>投资人</div>
        <div>投资金额（元）</div>
        <div>投资时间</div>
      </div>
      <div class="logs">
        <ul v-infinite-scroll="loadData" infinite-scroll-disabled="busy" infinite-scroll-distance="250" infinite-scroll-immediate-check="false">
          <li class="flex full-container" v-for="item in list">
            <div>{{item.username | strHide(1, 0)}}</div>
            <div>{{item.invest_money}}</div>
            <div>
              <p>{{item.invest_time}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import {MessageBox, Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, MessageBox, Indicator},
  data: function () {
    return {
      title: '投资明细',
      projectId: this.$route.params.id,
      list: [],
      busy: false,
      api: 'projects/{project_id}/investList',
      nextApi: ''
    }
  },
  mounted () {
    if (!this.projectId && this.$store.getters.projectInfo.id) {
      this.projectId = this.$store.getters.projectInfo.id
    }
    if (!this.projectId) {
      this.$router.back()
    } else {
      this.api = 'projects/' + this.projectId + '/investList'
      this.loadData()
    }
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