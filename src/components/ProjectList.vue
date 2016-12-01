<template>
  <div>
    <div class="page-box center invest">
      <div class="bg-white invest-filter">
        <!-- 添加active类 即已经选中 或者点击过，箭头向上 -->
        <a href="javascript:void(0);" class="all-term">
          全部期限<span></span>
        </a>
        <a href="javascript:void(0);" class="all-types">
          全部类型<span></span>
        </a>
      </div>

      <!-- 项目期限 -->
      <div class="filter-list filer-list-term hide">
        <ul>
          <li class="selected" v-for="item in project_time">{{item.num+item.cate}}<span>√</span></li>
        </ul>
      </div>

      <!-- 项目类型 -->
      <div class="filter-list filer-list-types hide">
        <ul>
          <li class="selected" v-for="item in project_type">{{item.name}}<span>√</span></li>
        </ul>
      </div>

      <!-- 项目列表 -->
      <div class="invest-list mb50" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
        <ul>
          <li class="bg-white" v-for="item in lists">
            <div class="project-intro">
              <div class="expact">
                <p><strong>{{item.rate_search}}</strong>%</p>
                <p>预期年化</p>
              </div>
              <div class="duration">
                <p>{{item.finance_time}}</p>
                <p>期限</p>
              </div>
              <div class="usable">
                <p><span>{{reduceMoney(item)}}</span>万</p>
                <p>剩余可投金额</p>
              </div>
            </div>
            <div class="invest-type">{{item.projects_name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      lists: [],
      busy: false,
      query: {time: null, type: null},
      project_time: [{id: 1, cate: 'm', num: 1}, {id: 2, cate: 'm', num: 3}, {id: 3, cate: 'd', num: 66}],
      project_type: [{id: 1, name: '企业贷'}, {id: 2, name: '债权贷'}, {id: 3, name: '房/车贷'}, {id: 4, name: '消费贷'}]
    }
  },
  mounted () {
  },
  computed: {
    queryTime: function () {
      let str = '全部期限'
      if (this.query.time) {
        for (let i in this.project_time) {
          let item = this.project_time[i]
          if (item.id === this.query.time) {
            str = item.num + item.cate
            break
          }
        }
      }
      return str
    }
  },
  methods: {
    // 项目的可投金额
    reduceMoney: function (item) {
      return parseFloat(((item.finance_money - item.financed_money) / 10000).toFixed(2))
    },
    loadMore: function () {
      this.busy = true
      let dataList = [
        {id: 1, projects_name: '项目一号(20万-Y20160297)', rate_search: 9.5, finance_time: '1个月', finance_money: 200000, financed_money: 15000},
        {id: 2, projects_name: '项目二号(30万-Y20160298)', rate_search: 9.5, finance_time: '66天', finance_money: 300000, financed_money: 200},
        {id: 2, projects_name: '项目三号(50万-Y20160299)', rate_search: 9, finance_time: '3自然月', finance_money: 500000, financed_money: 20000},
        {id: 2, projects_name: '项目四号(50万-Y20160299)', rate_search: 9, finance_time: '3自然月', finance_money: 500000, financed_money: 20000},
        {id: 2, projects_name: '项目五号(50万-Y20160299)', rate_search: 9, finance_time: '3自然月', finance_money: 500000, financed_money: 20000}
      ]
      this.lists = this.lists.concat(dataList)
      this.busy = false
    }
  },
  components: {
  },
  created () {
    this.loadMore()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>