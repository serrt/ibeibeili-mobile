<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="help-center full-container">
      <div class="tabs full-container flex help-center-tabs">
        <div class="tab-option" v-for="item in tabTitle" v-bind:class="[item.alias,item.id===selected?'select':'']" v-on:click="toggleTitle(item)">
          <span></span>{{item.name}}
        </div>
      </div>

      <div class="help-list full-container">
        <ul>
          <li v-for="item in selectedList">
            <div class="help-detail" v-bind:class="{'open': item.open}">
              <div class="problem" v-on:click="openTab(item)">
                <span><i class="iconfont" v-bind:class="{'icon-triangle-right-copy': !item.open, 'icon-xiasanjiao': item.open}"></i></span>
                {{item.title}}
              </div>
              <div class="answer" v-html="item.content"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '帮助中心',
      tabTitle: [
        {id: 21, name: '注册登录', alias: 'zcdl'},
        {id: 22, name: '充值提现', alias: 'cztx'},
        {id: 23, name: '投资理财', alias: 'tzlc'},
        {id: 24, name: '备付金', alias: 'bfj'},
        {id: 25, name: '数据安全', alias: 'sjaq'}
      ],
      selected: 21,
      selectedList: [],
      tabList: this.$store.getters.articleList
    }
  },
  mounted () {
    this.toggleTitle(this.tabTitle[0])
  },
  computed: {
  },
  methods: {
    openTab: function (item) {
      item.open = !item.open
    },
    toggleTitle: function (item) {
      this.selected = item.id
      if (!this.tabList[this.selected]) {
        this.$http.get('article/cateArticles/' + this.selected).then((response) => {
          this.$store.dispatch('article', response.data.data)
          this.selectedList = response.data.data
        })
      } else {
        this.selectedList = this.tabList[this.selected]
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>