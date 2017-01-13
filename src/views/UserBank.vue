<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="my-bank full-container">
      <div class="container bankbox boc">
        <span class="fl clear banklogo">
          <div class="bank" v-bind:class="[user.bank_code]">{{user.bank_code}}</div>
        </span>

        <p class="bankname">{{bank_name}}</p>
        <p class="banknum">{{user.bank_card_number | strHide(0, 4)}}</p>
      </div>

      <div class="container">
        <router-link class="btn unbind" :to="{name: 'user-bank-unbind'}">解除绑定</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '我的银行卡',
      user: this.$store.getters.user,
      bank_name: 'xx银行'
    }
  },
  mounted () {
    if (this.user.bank_code) {
      Indicator.open()
      this.$http.get('code/' + this.user.bank_code).then((response) => {
        Indicator.close()
        this.bank_name = response.data.data.name
      })
    } else {
      MessageBox.alert('未绑定银行卡')
      this.$router.back()
    }
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