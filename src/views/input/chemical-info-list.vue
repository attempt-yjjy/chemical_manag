<template>
  <div id="input-chemical" class="input-main">
    <el-container>
      <el-header>
        <el-drawer
          title="药品列表检索"
          :visible="drawer_show"
          :before-close="handleClose"
          :modal="false"
          :size="'20%'"
          :show-close="false"
          :withHeader="false"
        >
          <div class="all_input_container">
            <div class="input_container">
              <label>入库日期 :</label>
              <el-date-picker v-model="to_index.input_time"></el-date-picker>
            </div>
            <div class="input_container">
              <label>药品名 :</label>
              <el-input v-model="to_index.chemical_name"></el-input>
            </div>
            <div class="input_container">
              <label>药品类型 :</label>
              <el-input v-model="to_index.chemical_type"></el-input>
            </div>
            <div class="input_container">
              <label>药品数量 :</label>
              <el-input v-model="to_index.chemical_count" type="number"></el-input>
            </div>
            <div class="input_container">
              <label>药品柜号 :</label>
              <el-input v-model="to_index.chemical_cabinet" type="number"></el-input>
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
        </el-drawer>
        <span>化学药品信息列表</span>
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
                <el-form-item label="保质期">
                  <span>{{ props.row.expiration }}</span>
                </el-form-item><br />
                <el-form-item label="单位">
                  <span>{{ props.row.unit }}</span>
                </el-form-item><br />
                <el-form-item label="批准人">
                  <span>{{ props.row.approver }}</span>
                </el-form-item><br />
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="input_time" label="入库时间"></el-table-column>
          <el-table-column prop="chemical_name" label="药品名称"></el-table-column>
          <el-table-column prop="chemical_type" label="药品类型"></el-table-column>
          <el-table-column prop="chemical_count" label="药品数量"></el-table-column>
          <el-table-column prop="chemical_cabinet" label="药品柜号"></el-table-column>
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
          >
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
        input_time: new Date(),
        chemical_name: "",
        chemical_type: "",
        chemical_count: 0,
        chemical_cabinet: 0,
        who_input: "",
        who_check: "",
      },
      tableData:[
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "input_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_input":"不知道",
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
@import "~css/views/input-management/chemical/chemical-info-list.css";
</style>