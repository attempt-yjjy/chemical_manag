<template>
  <div id='resource-manag'>
      <header-title-bar prefix-title-text="物资管理"></header-title-bar>
      <div class="main">
        <router-view/>
      </div>
  </div>
</template>
<script>
import HeaderTitleBar from 'components/common/header-title-bar.vue'
  export default {
    name:'',
    props:{
      
    },
    components:{
      HeaderTitleBar
    }
  }
</script>
<style scoped>
  @import '~css/views/resource-manag/resources.css';
</style>