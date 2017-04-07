<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="friends-invest-detail container">
      <p>好友投资明细</p>
      <table>
          <thead>
              <tr>
                  <td>好友</td>
                  <td>注册时间</td>
                  <td>首投≥2000元</td>
              </tr>
          </thead>
          <tbody>
              <tr class="complete" v-for="item in inviteData.invite_users">
                  <td>{{item.name?item.name:item.phone_number}}</td>
                  <td>{{item.invite_time | timeFormat}}</td>
                  <td>{{item.status===0?'否':'是'}}</td>
              </tr>
          </tbody>
      </table>
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
      title: '投资明细',
      // 邀请信息
      inviteData: {
        last_day_gift: 0,
        total_gift: 0
      }
    }
  },
  mounted () {
    Indicator.open()
    this.$http.post('user/inviteInfo').then((response) => {
      Indicator.close()
      this.inviteData = response.data
    })
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style scoped>
</style>