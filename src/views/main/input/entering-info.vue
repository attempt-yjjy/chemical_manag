<template>
  <div id="entering-info" class="input-main">
    <el-container>
      <el-main>
        <div>
          <el-radio-group v-model="radio">
            <el-radio-button label="药品"></el-radio-button>
            <el-radio-button label="设备"></el-radio-button>
          </el-radio-group>
        </div>
          <table class="input-info-table">
            <tr>
              <td><span class="necessary_mark">*</span>入 库 日 期:</td>
              <td>
                <el-date-picker v-model="currentInfo.input_time"></el-date-picker>
              </td>
              <td class="space-td"></td>
              <td>
                <span v-if="currentOperate=='device'"><span class="necessary_mark">*</span>设 备</span>
                <span v-if="currentOperate=='chemical'"><span class="necessary_mark">*</span>药 品</span>
                名 称:
              </td>
              <td>
                <el-input v-model="currentInfo.name"></el-input>
              </td>
            </tr>
            <tr>
              <td>
                <span v-if="currentOperate=='device'"><span class="necessary_mark">*</span>设 备</span>
                <span v-if="currentOperate=='chemical'"><span class="necessary_mark">*</span>药 品</span>
                类 型:
              </td>
              <td>
                <el-input v-model="currentInfo.type"></el-input>
              </td>
              <td class="space-td"></td>
              <td>
                <span v-if="currentOperate=='device'"><span class="necessary_mark">*</span>设 备</span>
                <span v-if="currentOperate=='chemical'"><span class="necessary_mark">*</span>药 品</span>
                数 量:
              </td>
              <td>
                <el-input v-model="currentInfo.count" type="number"></el-input>
              </td>
            </tr>
            <tr>
              <td>
                <span class="necessary_mark">*</span>入 库 人:
              </td>
              <td>
                <el-input v-model="currentInfo.who_input"></el-input>
              </td>
              <td class="space-td"></td>
              <td>
                <span v-if="currentOperate=='device'"><span class="necessary_mark">*</span>设 备</span>
                <span v-if="currentOperate=='chemical'"><span class="necessary_mark">*</span>药 品</span>
                柜 号:
              </td>
              <td>
                <el-input v-model="currentInfo.cabinet" type="number"></el-input>
              </td>
            </tr>
            <tr>
              <td v-if="currentOperate=='chemical'">
                <span class="necessary_mark">*</span>
                保 质 期:
              </td>
              <td v-if="currentOperate=='chemical'">
                <el-input type="number" v-model="currentInfo.useful_life"></el-input>
              </td>
              <td class="space-td" v-if="currentOperate=='chemical'"></td>
              <td>
                <span class="necessary_mark">*</span>单 位:
              </td>
              <td>
                <el-input v-model="currentInfo.unit"></el-input>
              </td>
            </tr>
              
          </table>
          <div class="confirm-btn">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="primary" plain @click="empty">清空</el-button>
          </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import post from 'js/common/request/post/post_request.js'
import canOperateOrNot from 'js/exclusive/status-control/can-operate-or-not.js'
import dataToUrlsearchparams from "js/common/translate/data_to_urlsearchparams.js"

export default {
  name: "",
  props: {},
  data(){
      return{
          radio:"药品",
          currentInfo:{
              input_time:new Date(),
              name:"",
              type:"",
              count:0,
              who_input:"",
              cabinet:0,
              useful_life:"",
              unit:""
          },
          emptyInfo:{
              input_time:new Date(),
              name:"",
              type:"",
              count:0,
              who_input:"",
              cabinet:0,
              useful_life:"",
              unit:""
          }
      }
  },
  created(){
     let whatToInput = this.$route.query.whatToInput
     if(whatToInput){
       this.radio = this.$route.query.whatToInput
     }
  },
  computed:{
      currentOperate(){
          let result;
          switch(this.radio){
              case "药品":result = "chemical";break;
              case "设备":result = "device";break;
          }
          console.log(result)
          return result;
      },
      post_data(){
        if(this.currentOperate == 'chemical'){
          return {
            input_time:this.currentInfo.input_time,
            ch_name:this.currentInfo.name,
            ch_type:this.currentInfo.type,
            count:this.currentInfo.count,
            input_person:this.currentInfo.who_input,
            cabinet:this.currentInfo.cabinet,
            useful_life:this.currentInfo.useful_life,
            unit:this.currentInfo.unit
          }
        }else{
          return {
            input_time:this.currentInfo.input_time,
            de_name:this.currentInfo.name,
            de_type:this.currentInfo.type,
            count:this.currentInfo.count,
            input_person:this.currentInfo.who_input,
            cabinet:this.currentInfo.cabinet,
            unit:this.currentInfo.unit
          }
        }
        
      }
  },
  methods:{
    submit(){
      canOperateOrNot.intoModel()
      let path = "/" + this.currentOperate + "_input_record_insert"
      post(path,dataToUrlsearchparams(this.post_data)).then(result=>{
        let result_data = result.data
        if(result_data.success){
          this.$message({
            message:"添加成功!",
            type:"success"
          })
        }else{
          this.$message.error("添加失败!")
        }
        canOperateOrNot.successOutModel()
      }).catch(()=>{
        canOperateOrNot.errorOutModel(()=>{
          this.$message.error("操作失败!请检查网络!")
        })
      })
    },
    empty(){
      for(let key in this.emptyInfo){
        this.currentInfo[key] = this.emptyInfo[key]
      }
    }
  }
};
</script>
<style scoped>
@import "~css/views/input-management/entering/entering-info.css";
</style>