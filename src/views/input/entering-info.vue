<template>
  <div id="entering-info" class="input-main">
    <el-container>
      <el-header>
        <span>入库登记</span>
        <div>
          <el-radio-group v-model="radio">
            <el-radio-button label="药品"></el-radio-button>
            <el-radio-button label="设备"></el-radio-button>
          </el-radio-group>
        </div>
      </el-header>
      <el-main>
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
                <el-date-picker v-model="currentInfo.expiration"></el-date-picker>
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
            <el-button type="primary">提交</el-button>
            <el-button type="primary" plain>清空</el-button>
          </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
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
              expiration:new Date(),
              unit:""
          }
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
      }
  }
};
</script>
<style scoped>
@import "~css/views/input-management/entering/entering-info.css";
</style>