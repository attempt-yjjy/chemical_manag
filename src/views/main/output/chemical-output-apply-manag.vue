<template>
  <div id="chemical-output-apply-manag" class="output-main">
    <el-drawer
      title="我嵌套了表格!"
      :visible.sync="dispatcherDrawerVisible"
      direction="rtl"
      size="60%"
      :withHeader="false"
    >
      <div class="dispatcherBody">
        <div class="demand-show"></div>
        <div class="selected-show"></div>
        <div class="operate-body">
          <div class="content-show">
            <el-table :data="source_list" border style="width: 100%">
              <el-table-column prop="ch_name" label="药品名称">
              </el-table-column>
              <el-table-column prop="ch_type" label="药品类型">
              </el-table-column>
              <el-table-column prop="count" label="剩余数量"> </el-table-column>
              <el-table-column prop="id" label="资源ID"> </el-table-column>
              <el-table-column prop="input_time" label="入库日期">
              </el-table-column>
              <el-table-column prop="useful_life" label="保质期">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="choose(scope.row)" type="text" size="small"
                    >选择</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="cabinet-list-container">
            <el-menu class="el-menu-demo" mode="vertical">
              <el-menu-item
                v-for="(item, index) in cabinet_list"
                :key="item['no']"
                @click="select_cabinet(item, index)"
              >
                {{ "药品柜" + item["no"] }}
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </el-drawer>
    <el-table
      :data="tableData"
      :border="true"
      :cell-style="{ 'text-align': 'center' }"
      :header-cell-style="{
        'text-align': 'center',
        'background-color': 'rgba(242,249,255,1)',
      }"
    >
      <el-table-column prop="ch_name" label="药品名称"> </el-table-column>
      <el-table-column prop="ch_type" label="药品类型"> </el-table-column>
      <el-table-column prop="count" label="数量"> </el-table-column>
      <el-table-column prop="output_time" label="期望出库日期">
      </el-table-column>
      <el-table-column prop="proposer" label="申请人"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="allocateChemical(scope.row)"
            type="text"
            size="small"
            >分配药品</el-button
          >
          <el-button @click="refuseAllocate(scope.row)" type="text" size="small"
            >拒绝分配</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next ,jumper"
      :total="data_total"
    >
    </el-pagination>
  </div>
</template>
<script>
import timeConverter from "js/common/translate/time_converter.js";
export default {
  name: "chemical-output-apply-manag",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
        {
          ch_name: "阿莫西林",
          ch_type: "消炎药",
          count: 100,
          output_time: "2020-10-20",
          proposer: "小红",
          id: 1,
          pro_id: 2,
        },
      ],
      cabinet_list: [
        {
          no: 1,
        },
        {
          no: 2,
        },
        {
          no: 3,
        },
        {
          no: 4,
        },
      ],
      data_total: 100,
      dispatcherDrawerVisible: false,
    };
  },
  methods: {
    dataSepcificate(data) {
      for (let item in data) {
        data.output_time = timeConverter.dateToString(data.output_time);
      }
      data = this.dataCompletion(data);
      return data;
    },
    dataCompletion(data) {
      if (data.length == 0) {
        return [];
      }
      let tempObj = {};
      for (let item in data[0]) {
        tempObj[item] = "";
      }
      if (data.length < 10) {
        let difference = 10 - data.length;
        for (let i = 0; i < difference; ++i) {
          data.push(tempObj);
        }
      }
      return data;
    },
    allocateChemical(apply) {
      this.dispatcherDrawerVisible = true;
      console.log(apply);
    },
    select_cabinet(item, index) {
      console.log(index, item);
      //在这更换当前药品柜
    },
    refuseAllocate(apply) {},
    choose(source) {},
  },
};
</script>
<style scoped>
@import "~css/views/output-management/chemical-output-apply-manag/chemical-output-apply-manag.css";
</style>