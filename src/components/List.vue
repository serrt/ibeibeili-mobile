<template>
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <loadmore :top-method="refresh" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <slot name="list"></slot>
    </loadmore>
  </div>
</template>

<script>
export default {
  name: 'list',
  data: function () {
    return {
      myList: [],
      allLoaded: false,
      wrapperHeight: 0,
      bottomStatus: '',
      topStatus: ''
    }
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  },
  props: ['api', 'list'],
  computed: {
  },
  methods: {
    loadData: function (id, dir) {
      console.log(1)
      let dataList = this.api
      this.myList = this.myList.concat(dataList)
      if (dir === 'top') {
        this.$refs.loadmore.onBottomLoaded(id)
      } else if (dir === 'bottom') {
        this.$refs.loadmore.onTopLoaded(id)
      }
      // this.allLoaded = true
    },
    loadBottom: function (id) {
      this.loadData(id, 'top')
    },
    refresh: function (id) {
      this.myList = []
      this.loadData(id, 'bottom')
    }
  },
  watch: {
    list: function (value) {
      this.myList = value
    },
    myList: function (value) {
      this.$emit('handle-list-change', value)
    }
  }
}
</script>
<style scoped>
</style>