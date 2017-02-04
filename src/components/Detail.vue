<template>
  <div class="project-info container">
    <h3>{{title}}</h3>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: ['content', 'title'],
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
h3{
  padding: 5px 0;
  text-align: center;
}
</style>