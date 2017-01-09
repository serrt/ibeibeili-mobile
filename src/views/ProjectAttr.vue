<template>
  <div>
    <header-top :title="data.attr_name"></header-top>
    <detail v-show="data.cate !== 1" :title="data.attr_name" :content="data.content"></detail>
    <div class="project-info container" v-show="list.length > 0">
      <div v-for="(item, index) in list">
        <img class="preview-img" v-on:click="preview(index)" v-bind:src="baseUrl + item.full_url" v-bind:alt="item.filename">
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
      baseUrl: 'http://www.bbl.com',
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
      this.list = JSON.parse(this.data.content)
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
    preview: function (index) {
      let preImg = [{src: 'https://www.ibeibeili.com/resources/uploads/2016/12/22/fe36a11756cbb8668fb9ec4bf359eb0a.jpg', w: 1600, h: 333}]
      // for (let i in this.list) {
      //   preImg[i] = {src: this.baseUrl + this.list[i].full_url, w: 600, h: 400}
      // }
      this.$preview.open(index, preImg)
    }
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