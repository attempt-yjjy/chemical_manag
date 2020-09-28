<template>
  <div class='btn-and-search' :style="{'display':(OnlySearch?'block':'flex')}">
      <el-button v-if="!OnlySearch" 
        :icon="PreBtnIcon" 
        type="primary" 
        :style="{'width':buttonWidth(PreBtnText) + 'em'}"
        @click="pre_btn_click"
        >

        {{PreBtnText}}
      </el-button>
      <div v-if="!OnlySearch" class="split-div"></div>
      <el-input :suffix-icon="SufInputIcon" v-model="input_value" @change="input_change"></el-input>
      <el-button type="primary" :style="{'width':buttonWidth(search_btn_text) + 'em'}" @click="suf_btn_click">{{search_btn_text}}</el-button>
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
      },
      EmptySufBtnText:{
          type:String,
          default:null
      }
    },
    data(){
      return {
        input_value:""
      }
    },
    computed:{
      search_btn_text(){
        if(this.EmptySufBtnText == null){
          return this.SufBtnText
        }
        else{
          if(this.input_value == ""){
            return this.EmptySufBtnText
          }
          else{
            return this.SufBtnText
          }
        }
      }
    },
    methods:{
        buttonWidth(str){
            let len = str.length * 2
            return len<6?6:len
        },
        pre_btn_click(){
          this.$emit("pre-btn-click")
        },
        suf_btn_click(){
          this.$emit("suf-btn-click",this.input_value)
        },
        input_change(value){
          console.log(value)
        }
    }
  }
</script>
<style scoped>
  @import '~css/components/common/btn-and-search.css';
</style>