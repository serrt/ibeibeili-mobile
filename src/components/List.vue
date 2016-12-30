<template>
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <loadmore :top-method="refresh" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'drop'">释放刷新</span>
        <span v-show="topStatus === 'pull'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">正在加载。。。</span>
      </div>
      <slot name="list"></slot>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus === 'drop'">加载更多</span>
        <span v-show="bottomStatus == 'pull'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">正在加载。。。</span>
      </div>
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
    handleBottomChange: function (status) {
      this.bottomStatus = status
    },
    handleTopChange: function (status) {
      this.topStatus = status
    },
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