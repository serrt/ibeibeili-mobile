<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container assets-planner-commission">
      <div class="no-commission" v-if="list.length===0">
        <span></span>
        <p>暂无佣金记录</p>
      </div>
      <div v-else class="full-container commission-log">
        <!-- 本月佣金  默认进入该页面时展开本月份的 其他月份的折叠-->
        <div v-for="item in list">
          <div class="month container">{{item.month}}</div>
          <div class="month-list">
            <div class="flex container list-title open">
              <div class="friends">
                <p>累计邀请好友</p>
                <span>（{{item.number}}人）</span>
              </div>
              <div class="total-money flex-middle">
                <div>
                  <p>累计佣金</p>
                  <span>（{{item.money}}元）</span>
                </div>
                <i class="iconfont" v-on:click="toggle(item)" v-bind:class="{'icon-xiajiantou':!item.show, 'icon-jiantoushang':item.show}"></i>
              </div>
            </div>
            <!-- <transition name="fade"> -->
              <ul class="full-container user-list" v-show="item.show">
                <li class="container list-item" v-for="user in item.data">
                  <div class="list-item-detail">
                    <i class="iconfont" v-bind:class="{'icon-zhengque': user.status===1, 'icon-cuowu': user.status===-1, 'icon-bangzhu':  user.status===0}"></i>
                    <div class="person">
                      {{user.name}}
                      <span class="text-warning" v-if="user.status===0">-处理中</span>
                      <span class="text-danger" v-if="user.status===-1">-{{user.remarks}}</span>
                      <span class="fr">{{user.profit_money}}元</span>
                    </div>
                    <div class="invest">投资{{user.invest_money}}元<span class="fr">{{user.created_at}}</span></div>
                  </div>
                </li>
              </ul>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import {Indicator} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator},
  data: function () {
    return {
      title: '佣金详情',
      list: []
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('user/plannerMoneyList').then((response) => {
      this.list = response.data.data
      Indicator.close()
    })
  },
  computed: {
  },
  methods: {
    toggle: function (item) {
      item.show = !item.show
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.list-item-detail .iconfont {
  position: absolute;
  left: 0;
  font-size: 1.3rem;
  color: #f08300;
  top: 0.5rem;
}
.user-list{
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: margin-top 1.5s;
  /*transition: opacity .5s*/
}
.fade-enter, .fade-leave-active {
  margin-top: -150px;
  /*opacity: 0*/
}
</style>