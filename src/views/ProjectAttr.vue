<template>
  <div>
    <header-top :title="data.attr_name"></header-top>
    <detail v-show="data.cate !== 1" :title="data.attr_name" :content="data.content"></detail>
    <div class="project-info container" v-show="list.length > 0">
      <div v-for="item in list">
        <img v-bind:src="'http://www.bbl.com' + item.full_url" v-bind:alt="item.filename">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import Detail from '../components/Detail'

export default {
  components: {HeaderTop, Detail},
  data: function () {
    return {
      data: {},
      list: []
    }
  },
  mounted () {
    if (this.$route.params.id === this.$store.getters.projectId) {
      let attrs = this.$store.getters.projectAttr
      for (let i in attrs) {
        if (attrs[i].attr_id === this.$route.params.attr) {
          this.data = attrs[i]
        }
      }
    } else {
      this.$http.get('attr/' + this.$route.params.id + '/' + this.$route.params.attr).then((response) => {
        this.data = response.data.data
        if (this.data.cate === 1) {
          this.list = JSON.parse(this.data.content)
        }
      })
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
img{
  width: 100%;
}
</style>