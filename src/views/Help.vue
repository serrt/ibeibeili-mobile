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
        {id: 8, name: '注册登录', alias: 'zcdl'},
        {id: 9, name: '充值提现', alias: 'cztx'},
        {id: 10, name: '投资理财', alias: 'tzlc'},
        {id: 11, name: '备付金', alias: 'bfj'},
        {id: 12, name: '数据安全', alias: 'sjaq'}
      ],
      selected: 8,
      tabList: []
    }
  },
  created: function () {
    for (let i in this.tabTitle) {
      let cateId = this.tabTitle[i].id
      this.tabList.push([
        {id: 8, open: false, cate_id: cateId, title: '注册时收不到验证码怎么办' + cateId, content: '<p style="line-height: 2em;"><span style="font-family: 微软雅黑, &#39;Microsoft YaHei&#39;; font-size: 14px;">Q：注册时手机收不到验证码怎么办？</span></p><p style="line-height: 2em;"><span style="font-family: 微软雅黑, &#39;Microsoft YaHei&#39;; font-size: 14px;">1. 确认短信是否被手机软件拦截或过滤；<br/></span></p><p style="line-height: 2em;"><span style="font-family: 微软雅黑, &#39;Microsoft YaHei&#39;; font-size: 14px;">2. 确认手机是否能正常接收短信（信号问题、欠费、停机等）；</span></p><p style="line-height: 2em;"><span style="font-family: 微软雅黑, &#39;Microsoft YaHei&#39;; font-size: 14px;">3. 短信收发过程中可能会有延时，请耐心等候；</span></p><p style="line-height: 2em;"><span style="font-family: 微软雅黑, &#39;Microsoft YaHei&#39;; font-size: 14px;">4. 如经过反复尝试还不能收取验证码，可直接联系客服为您服务。</span></p><p><br/></p>'}
      ])
    }
  },
  mounted () {
  },
  computed: {
    selectedList: function () {
      let current = []
      for (let i in this.tabList) {
        let parent = this.tabList[i]
        for (let k in parent) {
          if (parent[k].cate_id === this.selected) {
            current.push(parent[k])
          }
        }
      }
      return current
    }
  },
  methods: {
    openTab: function (item) {
      item.open = !item.open
    },
    toggleTitle: function (item) {
      this.selected = item.id
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>