<template>
  <div id="data-statistics">
    <div class="header">
      <span>|</span>
      <span>&nbsp;数据统计</span>
    </div>
    <div class="main">
      <div class="output-chart-container chart-container">
        <div class="title">出库详情</div>
        <div class="search">
            <el-date-picker v-model="output_search"></el-date-picker>
            <el-button type="primary">搜索</el-button>
        </div>
        <div id="test1"></div>
      </div>
      <div class="input-chart-container chart-container">
        <div class="title">入库详情</div>
        <div class="search">
            <el-date-picker v-model="input_search"></el-date-picker>
            <el-button type="primary">搜索</el-button>
        </div>
        <div id="test2"></div>
      </div>
      <div class="data-block-container">
          <div class="data-block"></div>
          <div class="data-block"></div>
          <div class="data-block"></div>
          <div class="data-block"></div>
          <div class="user-record-block"></div>
      </div>
      
    </div>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "",
  props: {},
  data(){
      return{
          input_search:new Date(),
          output_search:new Date()
      }
  },
  mounted() {
    let myChart1 = echarts.init(document.getElementById("test1"));
    let myChart2 = echarts.init(document.getElementById("test2"));
    let option = {
      color: ["blue","yellow"],
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
            "12月"
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
          data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356,995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356],
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