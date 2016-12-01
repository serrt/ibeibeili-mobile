<template>
  <div>
    <header-top></header-top>
    <project-list></project-list>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import ProjectList from '../components/ProjectList'
import FooterNav from '../components/FooterNav'

export default {
  components: {
    HeaderTop, FooterNav, ProjectList
  }
}
</script>