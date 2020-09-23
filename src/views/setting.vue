<template>
  <div id='settings'>
      <div class="header">
        <span> | </span>
        <span> &nbsp;系统设置</span>
      </div>
      <div class="main">
        <router-view/>
      </div>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      
    }
  }
</script>
<style scoped>
  @import '~css/views/settings/settings.css';
</style>