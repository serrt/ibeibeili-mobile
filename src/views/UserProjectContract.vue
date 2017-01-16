<template>
  <div>
    <header-top :title="title"></header-top>
    <detail :title="data.title" :content="data.content"></detail>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import Detail from '../components/Detail'
import { Indicator } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, Detail},
  data: function () {
    return {
      title: '投资合同',
      data: {title: '', content: ''}
    }
  },
  mounted () {
    this.$http.get('user/project/' + this.$route.params.id + '/contract').then((response) => {
      this.data.content = response.data.html
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