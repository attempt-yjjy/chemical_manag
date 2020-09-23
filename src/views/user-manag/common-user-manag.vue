<template>
  <div id="common-user-manag">
    <el-container>
      <el-header>
        <div class="user-info-input-container">
          <table>
            <tr>
              <td>
                <span>人员姓名:</span>
              </td>
              <td class="input-td">
                <el-input v-model="new_info.name"></el-input>
              </td>
              <td class="split-td"></td>

              <td>
                <span>账&nbsp;&nbsp;&nbsp;&nbsp;号:</span>
              </td>
              <td class="input-td">
                <el-input v-model="new_info.username"></el-input>
              </td>
              <td class="split-td"></td>

              <td>
                <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
              </td>
              <td  class="input-td">
                <el-input v-model="new_info.password"></el-input>
              </td>
              <td class="split-td"></td>

              <td>
                <span>身份类型:</span>
              </td>
              <td  class="input-td">
                <el-select v-model="new_info.identity_type"></el-select>
              </td>
            </tr>
          </table>
        </div>
        <div class="btn-container">
          <el-button type="primary">添加</el-button>
          <el-button type="primary" plain>清空</el-button>
        </div>
      </el-header>
      <el-main>
        <div class="for-index">
          <el-button type="primary">管理员表</el-button>
          <el-button type="primary" plain>使用人员表</el-button>

          <div class="split-space"></div>

          <el-input placeholder="请输入内容" v-model="search_input">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="for-table">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :header-cell-style="{textAlign:'center',backgroundColor:'#F2F9FF',color:'black'}"
            :cell-style="{textAlign:'center'}"
          >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="username" label="账号"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="identity_type" label="身份类型"></el-table-column>
            <el-table-column prop="operate" label="操作"></el-table-column>
          </el-table>
        </div>
        <div class="for-pagination">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
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
      new_info: {
        name: "",
        username: "",
        password: "",
        identity_type: "",
      },
      search_input: "",
      tableData: [],
    };
  },
};
</script>
<style scoped>
@import "~css/views/user-manag/common-user-manag/common-user-manag.css";
</style>