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
              <td class="input-td">
                <el-input
                  v-model="new_info.password"
                  type="password"
                ></el-input>
              </td>
              <td class="split-td"></td>

              <td>
                <span>身份类型:</span>
              </td>
              <td class="input-td">
                <el-select v-model="new_info.identity_type">
                  <el-option
                    v-for="(key, value) in identity_type_options"
                    :key="key"
                    :value="value"
                  ></el-option>
                </el-select>
              </td>
            </tr>
          </table>
        </div>
        <div class="btn-container">
          <el-button type="primary" @click="addRequest">添加</el-button>
          <el-button type="primary" plain @click="resetInput">清空</el-button>
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
            :header-cell-style="{
              textAlign: 'center',
              backgroundColor: '#F2F9FF',
              color: 'black',
            }"
            :cell-style="{ textAlign: 'center' }"
          >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="username" label="账号"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="identity_type" label="身份类型"></el-table-column>
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">
                  查看
                </el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="for-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="data_total"
            @current-change="changePage"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import get from "js/common/request/get/get_request.js";
import post from "js/common/request/post/post_request.js";
import identityCodeToName from "js/common/translate/identity_code_and_name.js";
import dataToUrlsearchparams from "js/common/translate/data_to_urlsearchparams.js";

export default {
  name: "",
  props: {},
  data() {
    return {
      pageSize: 10,
      new_info: {
        name: "",
        username: "",
        password: "",
        identity_type: "",
      },
      search_input: "",
      tableData: [],
      data_total: 0,
      identity_type_options: {
        高级管理员: 1,
        普通管理员: 2,
        使用人员: 3,
      },
    };
  },
  mounted() {
    get("/users_get_count").then((result) => {
      let data = result.data;
      this.data_total = data.reply;
    });
    get("/users_get_onepage", { preNum: 0 }).then((result) => {
      let data = result.data;
      this.tableData = data.reply.map((value) => {
        let tempvalue = value;
        tempvalue.identity_type = identityCodeToName(value.identity_type);
        return tempvalue;
      });
    });
  },
  methods: {
    changePage(value) {
      get("/users_get_onepage", { preNum: (value - 1) * this.pageSize }).then(
        (result) => {
          let data = result.data;
          if (data.reply.length > 0 && data.reply.length < this.pageSize) {
            let differenceNum = this.pageSize - data.reply.length;
            for (let i = 0; i < differenceNum; ++i) {
              data.reply.push({
                name: "",
                username: "",
                password: "",
                identity_type: "",
              });
            }
          }
          this.tableData = data.reply.map((value) => {
            let tempvalue = value;
            tempvalue.identity_type = identityCodeToName(value.identity_type);
            return tempvalue;
          });
        }
      );
    },
    addRequest() {
      if (!this.verify_not_empyt()) {
        return;
      }
      let post_data = {
        name: this.new_info.name,
        username: this.new_info.username,
        password: this.new_info.password,
        identity_type: identityCodeToName(this.new_info.identity_type),
      };
      let data = dataToUrlsearchparams(post_data);
      post("/user_insert", data)
        .then((result) => {
          let result_data = result.data;
          if (!result_data.reply) {
            this.$message.error("添加失败,请稍后再试!");
          } else {
            this.$message({
              message: "添加成功",
              type: "success",
            });
          }
        })
        .catch((result) => {
          this.$message.error("添加失败,请稍后再试!");
        });
    },
    verify_not_empyt() {
      if (!this.new_info.name) {
        this.$message.error("姓名不可以为空");
        return false;
      }
      if (!this.new_info.username) {
        this.$message.error("账号不可以为空!");
        return false;
      }
      if (!this.new_info.password) {
        this.$message.error("密码不可以为空!");
        return false;
      }
      if (!this.new_info.identity_type) {
        this.$message.error("请选择一项身份类型!");
        return false;
      }
      return true;
    },
    resetInput() {
      this.new_info.name = "";
      this.new_info.username = "";
      this.new_info.password = "";
      this.new_info.identity_type = "";
    },
    handleClick(value){
      console.log(value)
    }
  },
};
</script>
<style scoped>
@import "~css/views/user-manag/common-user-manag/common-user-manag.css";
</style>