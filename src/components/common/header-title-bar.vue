<template>
  <div class='header-title-bar'>
      <span>{{"| "}}{{PrefixTitleText}}{{(SuffixTitleText?'/':'')}}</span><span>{{(SuffixTitleText?SuffixTitleText:'')}}</span>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      PrefixTitleText:{
          type:String,
          default:"大标题"
      },
      SuffixTitleText:{
          type:String,
          default:null
      }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/header-title-bar.css';
</style>