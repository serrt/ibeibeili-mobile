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
      data: {id: 1, title: '测试消息1', content: '<p>2016-05-25 15:03:18，您的客户 [xue123],成功注册!</p>', created_at: '2016-05-12 13:59:05', readed: 0}
    }
  },
  mounted () {
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