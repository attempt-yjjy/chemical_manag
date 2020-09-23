<template>
  <div id="data-statistics">
    <header-title-bar prefix-title-text="数据统计"></header-title-bar>
    <div class="main">
      <div class="output-chart-container chart-container">
        <simple-title-bar title-text="出库详情"></simple-title-bar>
        <div class="search">
          <el-date-picker v-model="output_search"></el-date-picker>
          <el-button type="primary">搜索</el-button>
        </div>
        <div id="test1"></div>
      </div>
      <div class="input-chart-container chart-container">
        <simple-title-bar title-text="入库详情"></simple-title-bar>
        <div class="search">
          <el-date-picker v-model="input_search"></el-date-picker>
          <el-button type="primary">搜索</el-button>
        </div>
        <div id="test2"></div>
      </div>
      <div class="data-block-container">
        <div class="data-block">
          <simple-title-bar title-text="药品总库存"></simple-title-bar>
          <large-num line-height="10vh"></large-num>
        </div>
        <div class="data-block">
          <simple-title-bar title-text="设备总库存"></simple-title-bar>
          <large-num line-height="10vh"></large-num>
        </div>
        <div class="data-block">
          <simple-title-bar title-text="库存不足总量"></simple-title-bar>
          <large-num line-height="10vh"></large-num>
        </div>
        <div class="data-block">
          <simple-title-bar title-text="预到期总量"></simple-title-bar>
          <large-num line-height="10vh"></large-num>
        </div>
        <div class="user-record-block">
          <simple-title-bar title-text="今日使用人员详情"></simple-title-bar>
          <div class="user-record-list">
            <div class="user-record-item" v-for="item in user_record_list" :key="item['name']">
              <span>{{item['name']}}</span>
              <span>{{identity_type_name(item['identity_type'])}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import SimpleTitleBar from "components/common/simple-title-bar";
import LargeNum from "components/common/large-num.vue";
import HeaderTitleBar from 'components/common/header-title-bar.vue'
export default {
  name: "",
  name_zh:"数据统计",
  props: {},
  data() {
    return {
      input_search: new Date(),
      output_search: new Date(),
      user_record_list: [
        {
          name: "小明",
          identity_type: 2,
        },
        {
          name: "小红",
          identity_type: 1,
        },
        {
          name: "小刚",
          identity_type: 3,
        },
        {
          name: "小李",
          identity_type: 2,
        },
      ],
    };
  },
  components: {
    SimpleTitleBar,
    LargeNum,
    HeaderTitleBar
  },
  methods: {
    identity_type_name(identity_type_num) {
      let type_str;
      switch (identity_type_num) {
        case 1:
          type_str = "高级管理员";
          break;
        case 2:
          type_str = "普通管理员";
          break;
        case 3:
          type_str = "使用人员";
          break;
      }
      return type_str;
    },
  },
  computed: {},
  mounted() {
    let myChart1 = echarts.init(document.getElementById("test1"));
    let myChart2 = echarts.init(document.getElementById("test2"));
    let option = {
      color: ["blue", "yellow"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "每月花费",
          type: "bar",
          barWidth: "30%",
          data: [
            995,
            666,
            444,
            858,
            654,
            236,
            645,
            546,
            846,
            225,
            547,
            356,
            995,
            666,
            444,
            858,
            654,
            236,
            645,
            546,
            846,
            225,
            547,
            356,
          ],
        },
      ],
    };
    myChart1.setOption(option);
    myChart2.setOption(option);
    //******************** */
  },
};
</script>
<style scoped>
@import "~css/views/data-statistics/data-statistics.css";
</style>