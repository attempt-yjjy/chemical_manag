<template>
  <div id="resource-manag-chemicals">
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
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input" clearable></el-input>
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
            <el-table-column prop="cname" label="药品名称"></el-table-column>
            <el-table-column prop="ctype" label="药品类型"></el-table-column>
            <el-table-column prop="cnum" label="药品数量"></el-table-column>
            <el-table-column prop="ccabinet" label="药柜位置"></el-table-column>
            <el-table-column prop="cexp" label="保质日期"></el-table-column>
            <el-table-column prop="cunit" label="单位"></el-table-column>
            <el-table-column prop="cstatus" label="药品状态"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template>
                <el-button type="text" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="10"
            layout="prev, pager, next, total, jumper"
            :total="200">
          </el-pagination>
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
          value2: "选项1",
          label2: "蚵仔煎",
        },
        {
          value2: "选项2",
          label2: "龙须面",
        },
      ],
      options3: [
        {
          value3: "选项1",
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
          label: "药品名称",
        },
        {
          value: "选项3",
          label: "药品类型",
        },
        {
          value: "选项4",
          label: "药柜位置",
        },
        {
          value: "选项5",
          label: "保质日期",
        },
        {
          value: "选项6",
          label: "药品状态",
        },
      ],

      tableData: [
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
        {
          cname: "罗红霉素",
          ctype: "抗生素",
          cnum: "60",
          ccabinet: "BD-kcn001",
          cexp: "2020-10-30",
          cunit: "盒",
          cstatus: "",
        },
      ],

      currentRow: null,
      num: 1,
      value1: "",
      value2: "",
      value3: "",
      value: "",
      input: "",
      currentPage: 5,
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style scoped>
@import "~css/views/resource-manag/chemicals/chemicals.css";
</style>