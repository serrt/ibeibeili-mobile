<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex">
      <div class="tab-option" v-on:click="toggle(item)" v-for="item in tabTitle" v-bind:class="{select:selected===item.key}">
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="assets-planner-friends full-container">
      <div class="friends-list">
        <div class="friends-list-title flex container">
          <div class="name">姓名</div>
          <div class="phonenum">手机电话号码</div>
          <div class="is-remind"></div>
        </div>
        <ul>
          <li class="flex container" v-for="item in list" v-show="(selected==='tab1' && item.invest_money> 0) || (selected==='tab2' && item.invest_money === 0)">
            <div class="name">{{item.name}}</div>
            <div class="phonenum">{{item.phone_number}}</div>
            <div class="is-remind flex-middle">
              <button type="button" class="btn reminds" v-on:click="sms" v-bind:class="{invalid:item.phone===0 || item.phone_number===null}">提醒TA投资</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import {Indicator, MessageBox} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '已邀请好友',
      tabTitle: [
        {key: 'tab1', name: '已投资'},
        {key: 'tab2', name: '未投资'}
      ],
      list: [],
      selected: 'tab1',
      message: '坑B的短信'
    }
  },
  mounted () {
    this.$http.get('user/plannerUserList').then((response) => {
      this.list = response.data.data
    })
  },
  computed: {
  },
  methods: {
    toggle: function (item) {
      this.selected = item.key
    },
    sms: function () {
      MessageBox(this.message)
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.reminds{
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.1rem;
  background-color: #f08300;
  width: auto;
  padding: 0 0.5rem;
}
.reminds.invalid{
  background-color: #cccccc;
}
</style>