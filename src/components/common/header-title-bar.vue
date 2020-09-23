<template>
  <div class='header-title-bar' :style="{'padding':(HasPadding?'0 1em':'0')}">
      <span>{{"| "}}{{PrefixTitleText}}{{(current_path?'/':'')}}</span><span>{{(current_path?current_path:'')}}</span>
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
      HasPadding:{
          type:Boolean,
          default:true
      }
    },
    computed:{
        current_path(){
            return this.$store.state.currentSubPath
        }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/header-title-bar.css';
</style>