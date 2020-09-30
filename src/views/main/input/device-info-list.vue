<template>
  <div id="input-device" class="input-main">
    <el-container>
      <el-main>
        <btn-and-search pre-btn-text="入库新设备信息" @pre-btn-click="goToAdd"></btn-and-search>
        <el-table 
          :data="tableData" 
          stripe 
          border
          :cell-style="{'text-align':'center'}"
          :header-cell-style="{'text-align':'center'}"
          @cell-click="tableClick">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="批准人">
                  <span>{{ props.row.approver }}</span>
                </el-form-item>
                <el-form-item label="单位">
                  <span>{{ props.row.unit }}</span>
                </el-form-item>
                <br />
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="input_time" label="入库时间" :formatter="time_convert"></el-table-column>
          <el-table-column prop="de_name" label="设备名称"></el-table-column>
          <el-table-column prop="de_type" label="设备类型"></el-table-column>
          <el-table-column prop="count" label="设备数量"></el-table-column>
          <el-table-column prop="cabinet" label="设备柜号"></el-table-column>
          <el-table-column prop="input_person" label="入库人"></el-table-column>
          <el-table-column prop="approver" label="审批人"></el-table-column>
           <!-- <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="modifyItem(scope.row)"
                  type="text"
                  size="small"
                  v-if="scope.row.username != ''"
                  :disabled="identityCodeToNameC(scope.row.identity_type) <= $store.state.loginInStore.identity_type"
                  >
                  修改
                </el-button>
                <el-button
                  @click="deleteItem(scope.row.username)"
                  type="text"
                  size="small"
                  v-if="scope.row.username != ''"
                  :disabled="
                    identityCodeToNameC(scope.row.identity_type) <=
                    $store.state.loginInStore.identity_type
                  "
                  >删除</el-button
                >
              </template>
            </el-table-column> -->
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :total="data_total"
          @current-change="pageChange"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import get from 'js/common/request/get/get_request.js'
import BtnAndSearch from "components/common/btn-and-search.vue"
import canOperateOrNot from 'js/exclusive/status-control/can-operate-or-not.js'
import timeConverter from 'js/common/translate/time_converter.js'

export default {
  name: "",
  props: {},
  data() {
    return {
      drawer_show: false,
      to_index: {
        input_time: new Date(),
        device_name: "",
        device_type: "",
        device_count: 0,
        device_cabinet: 0,
        input_person: "",
        approver: "",
      },
      tableData: [
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",        
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          
          unit: "",
          approver: "",
        },
        {
          input_time: "",
          de_name: "",
          de_type: "",
          count: "",
          cabinet: "",
          input_person: "",
          
          unit: "",
          approver: "",
        }
      ],
      data_total:0,
      current_model:'all',
      search_input_flash:"",
      current_real_count:0,
      currentPage:1
    };
  },
  components: {
    BtnAndSearch,
  },
  mounted(){
    this.setPageCount()
    this.pageChange(1)
  },
  methods: {
    tableClick(row, column, cell, event) {
      console.log(row, column);
    },
    pageChange(pageIndex) {
      canOperateOrNot.intoModel()
      if(this.current_model == 'all'){
        get('/device_input_record_one_page',{preNum:(pageIndex-1)*10}).then(result=>{
          let result_data = result.data
          this.tableData = this.fillToTen(result_data.reply)
          canOperateOrNot.successOutModel()
        }).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操作失败!请检查网络设置!")
          })
        })
      }
      else{
        get('/device_input_record_fuzzy_one_page',{preNum:(pageIndex-1)*10,pattern:this.search_input_flash}).then(result=>{
          let result_data = result.data
          this.tableData = this.fillToTen(result_data.reply)
          canOperateOrNot.successOutModel()
        }).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操作失败!请检查网络设置!")
          })
        })
      }
    },
    goToAdd(){
      this.$router.push({
          path:"/main/input-manag/entering-info",
          query:{
            whatToInput:'设备'
          }
        })
    },
    setPageCount(){
      canOperateOrNot.intoModel()
      if(this.current_model == 'all'){
        get("/device_input_record__all_count").then(result=>{
          let result_data = result.data
          this.data_total = result_data.reply
          canOperateOrNot.successOutModel()
        }).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操作失败!请检查网络设置!")
          })
        })
      }
      else{
        get("/device_input_record_fuzzy_count",{pattern:this.search_input_flash}).then(result=>{
          let result_data = result.data
          this.data_total = result_data.reply
          canOperateOrNot.successOutModel()
        }).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操作失败!请检查网络设置!")
          })
        })
      }
    },
    fillToTen(list){
      let model = {}
      for(let item in list[0]){
        model[item] = ''
      }
      this.current_real_count = list.length
      let difference = 10 - list.length
      for(let i = 0;i < difference;++i){
        list.push(model)
      }
      return list
    },
    start_search(input_value){
      this.search_input_flash = input_value
      if(input_value == ''){
        this.current_model = 'all'
        this.setPageCount()
        this.pageChange(1)
        this.currentPage = 1
      } 
      else{
        this.current_model = 'fuzzy'
        this.setPageCount()
        this.pageChange(1)
        this.currentPage = 1
      }
    },
    time_convert(row){
      return timeConverter.millsToDate(row.input_time)
    }
  }
};
</script>
<style scoped>
@import "~css/views/input-management/device/device-info-list.css";
</style>