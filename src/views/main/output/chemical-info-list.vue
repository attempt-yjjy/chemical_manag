<template>
  <div id="output-chemical" class="output-main">
    <el-container>
      <el-main>
        <btn-and-search pre-btn-text="出库药品信息"></btn-and-search>
        <el-table 
          :data="tableData" 
          stripe
          border
          :cell-style="{'text-align':'center'}"
          :header-cell-style="{'text-align':'center'}"
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
          <el-table-column prop="output_time" label="出库时间"></el-table-column>
          <el-table-column prop="chemical_name" label="药品名称"></el-table-column>
          <el-table-column prop="chemical_type" label="药品类型"></el-table-column>
          <el-table-column prop="chemical_count" label="药品数量"></el-table-column>
          <el-table-column prop="chemical_cabinet" label="药品柜号"></el-table-column>
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
          @current-change="pageChange"
          >
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import BtnAndSearch from 'components/common/btn-and-search.vue'
export default {
  name: "",
  props: {},
  data() {
    return {
      drawer_show: false,
      to_index: {
        output_time: new Date(),
        chemical_name: "",
        chemical_type: "",
        chemical_count: 0,
        chemical_cabinet: 0,
        who_output: "",
        who_check: "",
      },
      tableData:[
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
        ,
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        },
        {
          "output_time":"2020-09-10",
          "chemical_name":"阿莫西林",
          "chemical_type":"消炎药",
          "chemical_count":20,
          "chemical_cabinet":2,
          "who_output":"不知道",
          "who_check":"知不道",
          "expiration":"2020-09-11",
          "unit":"创模科技",
          "approver":"小红"
        }
      ]
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
    tableClick(row, column, cell, event){
      console.log(row,column)
    },
    pageChange(pageIndex){
      console.log(pageIndex)
    }
  }
};
</script>
<style scoped>
@import "~css/views/output-management/chemical/chemical-info-list.css";
</style>