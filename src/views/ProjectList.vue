<template>
  <div>
    <header-top :title="title"></header-top>
    <project-list></project-list>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import ProjectList from '../components/ProjectList'
import FooterNav from '../components/FooterNav'

export default {
  components: { HeaderTop, FooterNav, ProjectList },
  data: function () {
    return { title: '投资' }
  }
}
</script>