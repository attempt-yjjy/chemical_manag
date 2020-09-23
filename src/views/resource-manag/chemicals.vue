<template>
    <div id="resource-manag-chemicals">
        <div class="item">
            <!-- <div class="retrieval-top">
                <span> | </span>
                <span> &nbsp;化学药品管理</span>
            </div> -->
            <!-- <div class="title">
                <span>库存提醒</span>
            </div> -->
            <!-- <div class="input">
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
            </div> -->
            <div class="input">
                <div>
                    <el-button type="primary">导出表格</el-button>
                        <el-select v-model="value" filterable placeholder="全部">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    <el-button type="primary">筛选</el-button>
                    <div >
                        <el-input
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search"
                            v-model="input2"
                            clearable>
                        </el-input>
                        <el-button type="primary">搜索</el-button>
                    </div>
                </div>
            </div>
            <div class="table">
                <template>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        :row-class-name="tableRowClassName"
                        highlight-current-row
                        @selection-change="handleSelectionChange"
                         >
                        <el-table-column align=center type="selection"></el-table-column>
                        <el-table-column align=center type="index"></el-table-column>
                        <el-table-column align=center prop="cname" label="药品名称"></el-table-column>
                        <el-table-column align=center prop="ctype" label="药品类型"></el-table-column>
                        <el-table-column align=center prop="cnum" label="药品数量"></el-table-column>
                        <el-table-column align=center prop="ccabinet" label="药柜位置"></el-table-column>
                        <el-table-column align=center prop="cexp" label="保质日期"></el-table-column>
                        <el-table-column align=center prop="cunit" label="单位"></el-table-column>
                        <el-table-column align=center prop="cstatus" label="药品状态"></el-table-column>
                        <el-table-column align=center fixed="right" label="操作" width="100">
                            <template >
                                <el-button type="text" size="small">修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
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
      ],

      currentRow: null,
      num: 1,
      value1: "",
      value2: "",
      value3: "",
      value: "",
      input2: '',
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
    }
  },
};
</script>
<style scoped>
@import "~css/views/resource-manag/chemicals/chemicals.css";
</style>