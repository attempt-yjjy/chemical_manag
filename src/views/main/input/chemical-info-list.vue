<template>
  <div id="input-chemical" class="input-main">
    <el-container>
      <el-main>
        <btn-and-search pre-btn-text="入库新药品信息" @pre-btn-click="goToAdd" @suf-btn-click="start_search" empty-suf-btn-text="查看全部"></btn-and-search>
        <el-table 
          :data="tableData" 
          stripe 
          border
          :cell-style="{'text-align':'center'}"
          :header-cell-style="{'text-align':'center'}"
          @cell-click="tableClick">
          
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="保质期">
                  <span>{{ props.row.useful_life }}天</span>
                </el-form-item>
                <br />
                <el-form-item label="单位">
                  <span>{{ props.row.unit }}</span>
                </el-form-item>
                <br />
                <el-form-item label="批准人">
                  <span>{{ props.row.approver }}</span>
                </el-form-item>
                <br />
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="input_time" label="入库时间"></el-table-column>
          <el-table-column prop="ch_name" label="药品名称"></el-table-column>
          <el-table-column prop="ch_type" label="药品类型"></el-table-column>
          <el-table-column prop="count" label="药品数量"></el-table-column>
          <el-table-column prop="cabinet" label="药品柜号"></el-table-column>
          <el-table-column prop="input_person" label="入库人"></el-table-column>
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
          :current-page="currentPage"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import get from 'js/common/request/get/get_request.js'
import BtnAndSearch from "components/common/btn-and-search.vue"
export default {
  name: "",
  props: {},
  data() {
    return {
      drawer_show: false,
      to_index: {
        input_time: new Date(),
        chemical_name: "",
        chemical_type: "",
        chemical_count: 0,
        chemical_cabinet: 0,
        who_input: "",
        who_check: "",
      },
      tableData: [
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
        {
          input_time: "2020-09-10",
          chemical_name: "阿莫西林",
          chemical_type: "消炎药",
          chemical_count: 20,
          chemical_cabinet: 2,
          who_input: "不知道",
          who_check: "知不道",
          expiration: "2020-09-11",
          unit: "创模科技",
          approver: "小红",
        },
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
    handleClose(done) {
      this.drawer_show = false;
      done();
    },
    tableClick(row, column, cell, event) {
      console.log(row, column);
    },
    pageChange(pageIndex) {
      if(this.current_model == 'all'){
        get('/chemical_input_record_one_page',{preNum:(pageIndex-1)*10}).then(result=>{
          let result_data = result.data
          this.tableData = this.fillToTen(result_data.reply)
        })
      }
      else{
        get('/chemical_input_record_fuzzy_one_page',{preNum:(pageIndex-1)*10,pattern:this.search_input_flash}).then(result=>{
          let result_data = result.data
          this.tableData = this.fillToTen(result_data.reply)
        })
      }
    },
    goToAdd(){
      this.$router.push({
          path:"/main/input-manag/entering-info",
          query:{
            whatToInput:'药品'
          }
        })
    },
    setPageCount(){
      if(this.current_model == 'all'){
        get("/chemical_input_record__all_count").then(result=>{
          let result_data = result.data
          this.data_total = result_data.reply
        })
      }
      else{
        get("/chemical_input_record_fuzzy_count",{pattern:this.search_input_flash}).then(result=>{
          let result_data = result.data
          this.data_total = result_data.reply
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
    }
  }
};
</script>
<style scoped>
@import "~css/views/input-management/chemical/chemical-info-list.css";
</style>