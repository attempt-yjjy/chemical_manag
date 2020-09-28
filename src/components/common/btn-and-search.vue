<template>
  <div class='btn-and-search' :style="{'display':(OnlySearch?'block':'flex')}">
      <el-button v-if="!OnlySearch" 
        :icon="PreBtnIcon" 
        type="primary" 
        :style="{'width':buttonWidth(PreBtnText) + 'em'}"
        @click="btnBeClicked"
        >

        {{PreBtnText}}
      </el-button>
      <div v-if="!OnlySearch" class="split-div"></div>
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
      },
      OnlySearch:{
          type:Boolean,
          default:false
      }
    },
    methods:{
        buttonWidth(str){
            let len = str.length * 2
            return len<6?6:len
        },
        btnBeClicked(){
          this.$emit("btn-click")
        }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/btn-and-search.css';
</style>