<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="assets-planner full-container assets-planner-rules">
      <img src="../../../static/images/assets-planner-rules.png">
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import { Indicator, MessageBox } from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox},
  data: function () {
    return {
      title: '理财师规则'
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