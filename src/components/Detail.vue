<template>
  <div class="project-info container">
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: ['content'],
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
.container{
  background-color: white;
}
</style>