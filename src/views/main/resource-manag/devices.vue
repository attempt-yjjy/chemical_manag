<template>
  <div id="resource-manag-devices">
    <div class="item">
        <div class="input">
          <el-button type="primary">导出表格</el-button>
          <div class="split-div1"></div>
          <el-select v-model="value" filterable placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button type="primary">筛选</el-button>
          <div class="split-div2"></div>
          <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input2" clearable></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="table">
          <template>
            <el-table
              ref="multipleTable"
              :data="tableData"
              border
              :row-class-name="tableRowClassName"
              highlight-current-row
              :cell-style="{textAlign:'center'}"
              :header-cell-style="{textAlign:'center'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection"></el-table-column>
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="dname" label="设备名"></el-table-column>
              <el-table-column prop="dtype" label="设备类型"></el-table-column>
              <el-table-column prop="dnum" label="设备数量"></el-table-column>
              <el-table-column prop="dcabinet" label="设备柜"></el-table-column>
              <el-table-column prop="dstatus" label="设备状态"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button type="text" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="300"></el-pagination>
          </template>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options1: [
        {
          value1: "选项1",
          label1: "黄金糕",
        },
        {
          value1: "选项2",
          label1: "双皮奶",
        },
      ],
      options2: [
        {
          value2: "选项3",
          label2: "蚵仔煎",
        },
        {
          value2: "选项4",
          label2: "龙须面",
        },
      ],
      options3: [
        {
          value3: "选项5",
          label3: "北京烤鸭",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "设备名称",
        },
        {
          value: "选项3",
          label: "设备类型",
        },
        {
          value: "选项4",
          label: "设备位置",
        },
        {
          value: "选项5",
          label: "设备状态",
        },
      ],

      tableData: [
        {
          dname: "试管",
          dtype: "玻璃",
          dnum: "60",
          dcabinet: "SB-bl001",
          dstatus: "",
        },
      ],

      currentRow: null,
      num: 1,
      value1: "",
      value2: "",
      value3: "",
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
<style scoped>
@import "~css/views/resource-manag/devices/devices.css";
</style>