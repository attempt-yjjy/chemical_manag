<template>
  <div class='simple-title-bar'>
      <div>{{titleText}}</div>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      titleText:{
          type:String,
          default:"默认标题"
      }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/simple-title-bar.css';
</style>