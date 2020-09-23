<template>
  <div id='output-management'>
    <header-title-bar prefix-title-text="出库管理"></header-title-bar>
      <router-view></router-view>
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
  @import '~css/views/output-management/output.css';
</style>