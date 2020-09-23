<template>
  <div id='input-management'>
      <header-title-bar prefix-title-text="入库管理" :has-padding="true"></header-title-bar>
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
  @import '~css/views/input-management/input.css';
</style>