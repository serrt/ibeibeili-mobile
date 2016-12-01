<template>
  <div>
    <header-top></header-top>
    <index-content></index-content>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import FooterNav from '../components/FooterNav'
import IndexContent from '../components/Index'

export default {
  components: {
    HeaderTop, FooterNav, IndexContent
  }
}
</script>