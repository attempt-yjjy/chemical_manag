<template>
  <div
    class="upload-block"
    @dragenter="dragenter_func"
    @dragleave="dragleave_func"
    @dragover="dragover_func"
    @drop="drop_func"
  >
    <el-dialog :title="tableTitle" :visible.sync="dialogTableVisible">
      <el-table 
        :data="gridData"
        :border="true"
        :stripe="true"
        >
        <el-table-column
          property="ch_name"
          label="药品名称"
          v-if="currentType=='chemical'"
        ></el-table-column>
        <el-table-column
          property="ch_type"
          label="药品类型"
          v-if="currentType=='chemical'"
        ></el-table-column>
        <el-table-column
          property="de_name"
          label="设备名称"
          v-if="currentType=='device'"
        ></el-table-column>
        <el-table-column
          property="de_type"
          label="设备类型"
          v-if="currentType=='device'"
        ></el-table-column>
        <el-table-column
          property="count"
          label="数量"
        ></el-table-column>
        <el-table-column
          property="output_time"
          label="出库时间"
        ></el-table-column>
        <el-table-column
          property="proposer"
          label="出库人"
        ></el-table-column>
      </el-table>
      <div class="finish-check">
          <el-button @click="submit_confirm" type="primary" :disabled="btn_lock">提交</el-button>
          <el-button @click="submit_cancel" type="primary" plain :disabled="btn_lock">取消</el-button>
      </div>
    </el-dialog>
    <div id="file-container">
        <input type="file" :name="FileName" id="input-up" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="chooseFile"/>
    </div>
    <img src="~assets/images/xls.png" />
    <span class="span" v-if="!alreadyHasFile">
        将文件拖拽至此，或
        <span class="upload-link" @click="click_open">
          点击上传
        </span>
    </span>
    <span class="span" v-else>
        {{currentFileName}}
        <span class="upload-link" @click="dialogTableVisible = true">
          查看
        </span>
        |
        <span class="upload-link" @click="click_open">重新上传</span>
    </span>

  </div>
</template>
<script>
import * as XLSX from "xlsx";
import timeConverter from 'js/common/translate/time_converter.js'
import post from 'js/common/request/post/post_list.js'
import modelControl from 'js/exclusive/status-control/can-operate-or-not.js'

export default {
  name: "UploadBlock",
  data() {
    return {
      reader: null,
      dialogTableVisible:false,
      gridData:[],
      currentType:"chemical",
      alreadyHasFile:false,
      currentFileName:"",
      btn_lock:false
    };
  },
  props: {
    FileName: {
      type: String,
      default: "fileupload",
    }
  },
  computed:{
    tableTitle(){
        if(this.currentType == 'chemical'){
            return "药品出库申请单"
        }
        else{
            return "设备出库申请单"
        }
    }
  },
  created() {
    this.reader = new FileReader();

    this.reader.onload = (event) => {
      try {
        const { result } = event.target;
        //以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: "binary" });
        let data = []; //存储获取到的数据
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
            );
          }
        }
        //此处应该判断是否为空
        for(let item in data[0]){
            if(item == 'ch_name'){
                this.currentType = 'chemical'
                break
            }
            if(item == 'de_name'){
                this.currentType = 'device'
                break
            }
        }
        this.gridData = data
        this.dialogTableVisible = true
      } catch (e) {
        this.alreadyHasFile = false
        this.$message.error("请操作正确格式的文件")
        return
      }
    };
  },
  methods: {
    click_open() {
      document.getElementById("input-up").click();
    },
    dragenter_func(e) {
      e.preventDefault();
    },
    dragleave_func(e) {
      e.preventDefault();
    },
    dragover_func(e) {
      e.preventDefault();
    },
    drop_func(e) {
      e.preventDefault();
      let dataTransfer = e.dataTransfer;
      let file = dataTransfer.files[0];
      // 通过FileReader对象读取文件
      this.alreadyHasFile = true
      this.currentFileName = file.name
      this.reader.readAsBinaryString(file);
    },
    chooseFile(e){
        this.alreadyHasFile = true
        let file = e.target.files[0]
        this.currentFileName = file.name
        this.reader.readAsBinaryString(file)
    },
    submit_confirm(){
        modelControl.intoModel()
        this.btn_lock = true
        let post_data = []
        
        for(let element of this.gridData){
            let obj = {}
            for(let item in element){
                if(item == 'output_time'){
                    obj[item] = timeConverter.stringToDate(element[item])
                }
                obj[item] = element[item]
            }
            obj["pro_id"] = this.$store.state.loginInStore.user_id
            post_data.push(obj)
        }
        console.log(post_data)
        let path = "/" + this.currentType + "_apply/submit_apply"
        post(path,post_data).then(result=>{
            let result_data = result.data
            if(result_data.success){
                modelControl.successOutModel()
                this.$message({
                    type:"success",
                    message:"添加成功!"
                })
                this.dialogTableVisible = false
                this.btn_lock = false
            }
            else{
                modelControl.errorOutModel(()=>{
                    this.$message.error("操作失败!请稍后再试!")
                    this.btn_lock = false
                })
            }
        }).catch(()=>{
            modelControl.errorOutModel(()=>{
                this.$message.error("操作失败!请稍后再试!")
                this.btn_lock = false
            })
        })
        
    },
    submit_cancel(){
        this.dialogTableVisible = false
    }
  },
};
</script>
<style scoped>
@import "~css/components/common/upload-block.css";
</style>