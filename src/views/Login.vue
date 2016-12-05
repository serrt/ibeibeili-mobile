<template>
  <div>
    <header-top :title="title"></header-top>
    <login></login>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import Login from '../components/Login'
import FooterNav from '../components/FooterNav'

export default {
  components: { HeaderTop, FooterNav, Login },
  data: function () {
    return { title: '登录' }
  }
}
</script>