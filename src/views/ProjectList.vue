<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="invest-filter full-container">
      <div class="filter-condition flex">
        <div class="filter" v-on:click="toggleTime()" >
          <span class="filter-duration">全部期限</span>
          <i class="iconfont" v-bind:class="{'icon-jiantoushang': this.filter_time, 'icon-xiajiantou': !this.filter_time}"></i>
        </div>
        <div class="filter" v-on:click="toggleType()" >
          <span class="filter-types">全部类型</span>
          <i class="iconfont" v-bind:class="{'icon-jiantoushang': this.filter_type, 'icon-xiajiantou': !this.filter_type}"></i>
        </div>
      </div>
      <div class="all-duration filter-list" v-show="this.filter_time">
        <ul>
          <li v-for="item in project_time" v-bind:class="{'selected': query.time === item.cate}" v-on:click="query.time=item.cate">
            {{item.name}}<span class="tick" v-show="query.time === item.cate">√</span>
          </li>
        </ul>
      </div>
      <div class="all-types filter-list" v-show="this.filter_type">
        <ul>
          <li v-for="item in project_type" v-bind:class="{'selected': query.type === item.cate}" v-on:click="query.type=item.cate">
            {{item.name}}<span class="tick" v-show="query.type === item.cate">√</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 投资列表 -->
    <div class="full-container" id="investList">
      <list :api="api" :list="list" @handle-list-change="handleListChange">
        <ul class="list">
          <router-link v-for="item in list" :to="{ name: 'project-detail', params: { id: item.id }}" tag="li">
            <!-- 投资进度 -->
            <div class="progress" v-bind:style="{width: Math.floor(item.financed_money/item.finance_money*100)+'%'}"></div>
            <div class="list-item full-container">
              <!-- 投资标题 -->
              <div class="title surplus container" v-text="item.name"></div>
              <!-- 投资内容 -->
              <div class="full-container detail flex">
                <div class="rate">
                  <div class="rate-num" v-text="item.rate+'%'"></div>
                  <div>预期年化</div>
                </div>
                <div class="duration">
                  <div class="days" v-text="item.finance_time"></div>
                  <div>期限</div>
                </div>
                <div class="money">
                  <div class="total">{{item.finance_money | moneyFormat}}</div>
                  <div>金额</div>
                </div>
                <div class="state flex-middle">
                  <button type="button" class="btn" v-bind:class="[item.status]">{{item.status | projectStatus}}</button>
                </div>
              </div>
              <!-- 投资担保之类 -->
              <div class="item-footer container">
                <span><i class="tubiao danbao"></i>担保</span>
                <span><i class="tubiao huabenfuxi"></i>到期还本利息</span>
              </div>
            </div>
          </router-link>
        </ul>
      </list>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/Footer'
import HeaderTop from '../components/Header'
import List from '../components/List'

export default {
  components: {FooterNav, HeaderTop, List},
  data: function () {
    return {
      title: '投资',
      filter_type: false,
      filter_time: false,
      api: [
        {id: 1, name: '项目1', rate: 9, finance_time: '1个月', finance_money: 185000, financed_money: 0, status: 'prepare'},
        {id: 2, name: '项目2', rate: 10, finance_time: '3个月', finance_money: 110000, financed_money: 110000, status: 'full'},
        {id: 3, name: '项目3', rate: 11, finance_time: '66天', finance_money: 250000, financed_money: 250000, status: 'payment'},
        {id: 4, name: '项目4', rate: 11, finance_time: '3个月', finance_money: 500000, financed_money: 14000, status: 'rush'},
        {id: 5, name: '项目5', rate: 8, finance_time: '3个月', finance_money: 100000, financed_money: 20000, status: 'rush'},
        {id: 6, name: '项目6', rate: 9.5, finance_time: '1个月', finance_money: 200000, financed_money: 200000, status: 'finish'},
        {id: 7, name: '项目7', rate: 10, finance_time: '3自然月', finance_money: 200000, financed_money: 2500, status: 'rush'}
      ],
      list: [],
      project_time: [{name: '全部期限', cate: ''}, {name: '一月标', cate: '1,m'}, {name: '三月标', cate: '3,m'}, {name: '六月标', cate: '6,m'}, {name: '66天', cate: '66,d'}],
      project_type: [{name: '全部类型', cate: ''}, {name: '企业贷', cate: 1}, {name: '债权贷', cate: 2}, {name: '房/车贷', cate: 3}, {name: '消费贷', cate: 4}],
      query: {time: '', type: ''}
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    toggleTime () {
      this.filter_type = false
      this.filter_time = !this.filter_time
    },
    toggleType () {
      this.filter_time = false
      this.filter_type = !this.filter_type
    },
    handleListChange: function (value) {
      this.list = value
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>