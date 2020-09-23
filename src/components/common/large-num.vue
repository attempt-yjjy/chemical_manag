<template>
  <div class='large-num' :style="{'width':AreaWidth,'font-size':NumSize,'color':NumColor,'line-height':LineHeight}">
    {{numToShow}}
  </div>
</template>
<script>
  export default {
    name:'LargeNum',
    props:{
      AreaWidth:{
          type:String,
          default:"100%"
      },
      NumSize:{
          type:String,
          default:"50px"
      },
      NumColor:{
          type:String,
          default:"#20A0FF"
      },
      LineHeight:{
          type:String,
          default:"100px"
      },
      numToShow:{
          type:Number,
          default:0
      }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/large-num.css';
</style>