<template>
  <div id='user-manag'>
      <div class="header">
        <span> | </span>
        <span> &nbsp;人员管理</span>
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
  @import '~css/views/user-manag/user-manag.css';
</style>