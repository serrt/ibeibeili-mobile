<template>
  <div>
    <div class="error-page full-container">
      <img src="../../static/images/404.png">
      <p>您访问的页面不存在，或被绑架</p>
      <div class="back-home">
        <router-link class="btn" :to="{name: 'home'}">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>