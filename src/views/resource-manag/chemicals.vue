<template>
  <div id="resource-manag-chemicals">
    <el-container direction="vertical">
      <div class="retrieval-top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>物资管理</el-breadcrumb-item>
          <el-breadcrumb-item>化学药品管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-main>
        <div>
          <template>
            <el-select v-model="value1" filterable placeholder="请输入药品名">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label1"
                :value="item.value1"
              ></el-option>
            </el-select>
          </template>

          <template>
            <el-select v-model="value2" filterable placeholder="请选择类型">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label2"
                :value="item.value2"
              ></el-option>
            </el-select>
          </template>

          <template>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="999999"
              label="请选择数量"
            ></el-input-number>
          </template>

          <template>
            <el-select v-model="value3" filterable placeholder="请选择药品柜">
              <el-option
                v-for="item in options3"
                :key="item.value3"
                :label="item.label3"
                :value="item.value3"
              ></el-option>
            </el-select>
          </template>
          <el-button style="margin-left: 20px" type="primary" icon="el-icon-search">搜索</el-button>
          <el-button style="margin-left: 20px" type="success" icon="el-icon-download">导出</el-button>
          <el-button style="margin-left: 20px" type="danger" @click="toggleSelection()">取消选择</el-button>
        </div>
        <div class="table">
          <template>
            <el-table
              ref="multipleTable"
              :data="tableData"
              :row-class-name="tableRowClassName"
              highlight-current-row
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection"></el-table-column>
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="cname" label="药品名"></el-table-column>
              <el-table-column prop="ctype" label="药品类型"></el-table-column>
              <el-table-column prop="cnum" label="药品数量"></el-table-column>
              <el-table-column prop="ccabinet" label="药品柜"></el-table-column>
              <el-table-column prop="cexp" label="有效期截止日期"></el-table-column>
              <el-table-column prop="cunit" label="单位"></el-table-column>
              <el-table-column prop="cstatus" label="药品状态"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-main>
    </el-container>
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
          value3: "选项5",
          label3: "北京烤鸭",
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
@import "~css/views/resource-manag/chemicals/chemicals.css";
</style>