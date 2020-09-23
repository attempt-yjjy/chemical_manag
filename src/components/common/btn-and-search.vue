<template>
  <div class='btn-and-search'>
      <el-button :icon="PreBtnIcon" type="primary" :style="{'width':buttonWidth(PreBtnText) + 'em'}">{{PreBtnText}}</el-button>
      <div class="split-div"></div>
      <el-input :suffix-icon="SufInputIcon"></el-input>
      <el-button type="primary" :style="{'width':buttonWidth(SufBtnText) + 'em'}">{{SufBtnText}}</el-button>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      PreBtnText:{
          type:String,
          default:"入库新设备信息"
      },
      PreBtnIcon:{
          type:String,
          default:"el-icon-plus"
      },
      SufInputIcon:{
          type:String,
          default:"el-icon-search"
      },
      SufBtnText:{
          type:String,
          default:"搜索"
      }
    },
    methods:{
        buttonWidth(str){
            let len = str.length * 2
            return len<6?6:len
        }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/btn-and-search.css';
</style>