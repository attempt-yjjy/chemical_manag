<template>
  <div id="return-input" class="input-main">
    <el-container>
      <el-main>
        <!-- <el-button @click="drawer_show = !drawer_show" class="button_open" type="primary">打开检索</el-button>
        <el-drawer
          title="外借列表"
          :visible="drawer_show"
          :before-close="handleClose"
          :modal="false"
          :size="'20%'"
          :show-close="false"
          :withHeader="false"
        >
          <div class="all_input_container">
            <div class="input_container">
              <label>外借日期 :</label>
              <el-date-picker v-model="to_index.input_time"></el-date-picker>
            </div>
            <div class="input_container">
              <label>设备名 :</label>
              <el-input v-model="to_index.device_name"></el-input>
            </div>
            <div class="input_container">
              <label>设备类型 :</label>
              <el-input v-model="to_index.device_type"></el-input>
            </div>
            <div class="input_container">
              <label>设备数量 :</label>
              <el-input v-model="to_index.device_count" type="number"></el-input>
            </div>
            <div class="input_container">
              <label>设备柜号 :</label>
              <el-input v-model="to_index.device_cabinet" type="number"></el-input>
            </div>
            <div class="input_container">
              <label>入库人 :</label>
              <el-input v-model="to_index.who_input"></el-input>
            </div>
            <div class="input_container">
              <label>审批人 :</label>
              <el-input v-model="to_index.who_check"></el-input>
            </div>
            <div class="input_container button-container">
              <el-button type="primary">开始检索</el-button>
            </div>
          </div>
        </el-drawer> -->
        <btn-and-search pre-btn-text="入库新药品信息" :only-search="true"></btn-and-search>
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
                <el-form-item label="批准人">
                  <span>{{ props.row.approver }}</span>
                </el-form-item>
                <br />
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="input_time" label="入库时间"></el-table-column>
          <el-table-column prop="device_name" label="设备名称"></el-table-column>
          <el-table-column prop="device_type" label="设备类型"></el-table-column>
          <el-table-column prop="device_count" label="设备数量"></el-table-column>
          <el-table-column prop="device_cabinet" label="设备柜号"></el-table-column>
          <el-table-column prop="who_input" label="入库人"></el-table-column>
          <el-table-column prop="who_check" label="审批人"></el-table-column>
          <el-table-column label="操作">
            <el-link type="primary">显示详情</el-link>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :total="1000"
          @current-change="pageChange"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import BtnAndSearch from "components/common/btn-and-search.vue"
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
        who_input: "",
        who_check: "",
      },
      tableData: [],
    };
  },
  components:{
    BtnAndSearch
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
      console.log(pageIndex);
    },
  },
};
</script>
<style scoped>
@import "~css/views/input-management/return/return-input.css";
</style>