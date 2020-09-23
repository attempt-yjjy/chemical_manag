<template>
  <div class='header-title-bar' :style="{'padding':(HasPadding?'0 1em':'0')}">
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
      },
      HasPadding:{
          type:Boolean,
          default:true
      }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/header-title-bar.css';
</style>