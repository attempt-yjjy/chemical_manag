<template>
  <div id='resource-manag'>
      <div class="header">
        <span> | </span>
        <span> &nbsp;物资管理</span>
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
  @import '~css/views/resource-manag/resources.css';
</style>