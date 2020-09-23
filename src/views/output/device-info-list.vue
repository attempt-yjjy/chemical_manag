<template>
  <div id="output-device" class="output-main">
    <el-container>
      <el-header>
        <el-drawer
          title="设备列表检索"
          :visible="drawer_show"
          :before-close="handleClose"
          :modal="false"
          :size="'20%'"
          :show-close="false"
          :withHeader="false"
        >
          <div class="all_output_container">
            <div class="output_container">
              <label>出库日期 :</label>
              <el-date-picker v-model="to_index.output_time"></el-date-picker>
            </div>
            <div class="output_container">
              <label>设备名 :</label>
              <el-input v-model="to_index.device_name"></el-input>
            </div>
            <div class="output_container">
              <label>设备类型 :</label>
              <el-input v-model="to_index.device_type"></el-input>
            </div>
            <div class="output_container">
              <label>设备数量 :</label>
              <el-input v-model="to_index.device_count" type="number"></el-input>
            </div>
            <div class="output_container">
              <label>设备柜号 :</label>
              <el-input v-model="to_index.device_cabinet" type="number"></el-input>
            </div>
            <div class="output_container">
              <label>出库人 :</label>
              <el-input v-model="to_index.who_output"></el-input>
            </div>
            <div class="output_container">
              <label>审批人 :</label>
              <el-input v-model="to_index.who_check"></el-input>
            </div>
            <div class="output_container button-container">
              <el-button type="primary">开始检索</el-button>
            </div>
          </div>
        </el-drawer>
        <span>设备信息列表</span>
        <el-button @click="drawer_show = !drawer_show" class="button_open" type="primary">打开检索</el-button>
      </el-header>
      <el-main>
        <el-table 
          :data="tableData" 
          style="width: 100%"
          stripe
          @cell-click="tableClick"
          >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="批准人">
                  <span>{{ props.row.approver }}</span>
                </el-form-item><br />
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="output_time" label="出库时间"></el-table-column>
          <el-table-column prop="device_name" label="设备名称"></el-table-column>
          <el-table-column prop="device_type" label="设备类型"></el-table-column>
          <el-table-column prop="device_count" label="设备数量"></el-table-column>
          <el-table-column prop="device_cabinet" label="设备柜号"></el-table-column>
          <el-table-column prop="who_output" label="出库人"></el-table-column>
          <el-table-column prop="who_check" label="审批人"></el-table-column>
          <el-table-column label="操作">
            <el-link type="primary">显示详情</el-link>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :total="1000"
          @current-change="pageChange">
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      drawer_show: false,
      to_index: {
        output_time: new Date(),
        device_name: "",
        device_type: "",
        device_count: 0,
        device_cabinet: 0,
        who_output: "",
        who_check: "",
      },
      tableData:[
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "device_name":"阿莫西林",
          "device_type":"消炎机",
          "device_count":20,
          "device_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
      ]
    };
  },
  methods: {
    handleClose(done) {
      this.drawer_show = false;
      done();
    },
    tableClick(row, column, cell, event){
      console.log(row,column)
    },
    pageChange(pageIndex){
      console.log(pageIndex)
    }
  },
};
</script>
<style scoped>
@import "~css/views/output-management/device/device-info-list.css";
</style>