<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="feedback">
      <div class="container">
        <textarea class="feedback-content" placeholder="请输入你的反馈意见（500字以内）" v-model="content"></textarea>
      </div>
      <div class="container">
        <button type="button" class="btn" v-on:click="submit">告诉我们</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import {Indicator, Toast} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, Toast},
  data: function () {
    return {
      title: '意见反馈',
      content: null
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    submit: function () {
      if (this.content.length > 0 && this.content.length <= 500) {
        Indicator.open()
        this.$http.post('user/feedback', {content: this.content}).then((response) => {
          Indicator.close()
          if (response.data.result === true) {
            Toast('提交成功')
            this.$router.back()
          } else {
            Toast('请稍后再试')
          }
        })
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>