<template>
  <div>
    <header-top :title="data.title"></header-top>
    <detail :title="data.title" :content="data.content"></detail>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import Detail from '../components/Detail'

export default {
  components: {HeaderTop, Detail},
  data: function () {
    return {
      data: {}
    }
  },
  mounted () {
    this.$http.get('user/message/' + this.$route.params.id).then((response) => {
      this.data = response.data.data
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