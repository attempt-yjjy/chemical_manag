<template>
  <div id='settings'>
      <header-title-bar prefix-title-text="系统设置"></header-title-bar>
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
  @import '~css/views/settings/settings.css';
</style>