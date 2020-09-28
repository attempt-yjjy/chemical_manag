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
          <el-button type="primary" @click="switch_show('admin')"
            >管理员表</el-button
          >
          <el-button type="primary" plain @click="switch_show('common')"
            >使用人员表</el-button
          >

          <div class="split-space"></div>

          <el-input placeholder="请输入内容" v-model="search_input">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button type="primary" @click="fuzzySearch">搜索</el-button>
          <el-button type="primary" plain @click="switch_show('users')"
            >查看全部</el-button
          >
        </div>
        <el-dialog title="信息修改" 
          :width="style_details.modifyDialogWidth" 
          :top="style_details.modifyDialogTop" 
          :visible.sync="modifyDialogFormVisible"
          custom-class="modify_dialog"
          >

          <el-form :model="modify_form">
            <el-form-item label="账户" :label-width="style_details.formLabelWidth">
              <el-input v-model="modify_form.username" autocomplete="off" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="style_details.formLabelWidth">
              <el-input v-model="modify_form.name" ></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="style_details.formLabelWidth">
              <el-input v-model="modify_form.password"></el-input>
            </el-form-item>
            <el-form-item label="类型" :label-width="style_details.formLabelWidth">
              <el-select v-model="modify_form.identity_type">
                <el-option value="高级管理员"></el-option>
                <el-option value="普通管理员"></el-option>
                <el-option value="使用人员"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="modifyDialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="modify_dialog_submit">确 定</el-button>
          </div>
        </el-dialog>
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
            <el-table-column
              prop="identity_type"
              label="身份类型"
            ></el-table-column>
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="modifyItem(scope.row)"
                  type="text"
                  size="small"
                  v-if="scope.row.username != ''"
                  :disabled="identityCodeToNameC(scope.row.identity_type) <= $store.state.loginInStore.identity_type"
                  >
                  修改
                </el-button>
                <el-button
                  @click="deleteItem(scope.row.username)"
                  type="text"
                  size="small"
                  v-if="scope.row.username != ''"
                  :disabled="
                    identityCodeToNameC(scope.row.identity_type) <=
                    $store.state.loginInStore.identity_type
                  "
                  >删除</el-button
                >
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
            :current-page.sync="current_page"
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
import canOperateOrNot from 'js/exclusive/status-control/can-operate-or-not.js'

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
      search_input_flash: "",
      tableData: [],
      data_total: 0,
      identity_type_options: {
        高级管理员: 1,
        普通管理员: 2,
        使用人员: 3,
      },
      current_type: "users",
      current_page: 1,
      current_remain:0,
      modifyDialogFormVisible:false,
      modify_form:{
        username:"",
        password:"",
        name:"",
        identity_type:""
      },
      style_details:{
        formLabelWidth:'20%',
        modifyDialogWidth:"30%",
        modifyDialogTop:"20vh"
      }
    };
  },
  mounted() {
    canOperateOrNot.intoModel()
    this.setPageCount();
    let path_get_page = "/" + this.current_type + "_get_onepage";
    get(path_get_page, { preNum: 0 }).then((result) => {
      let data = result.data;
      this.auto_completion(data);
      this.tableData = this.resultTranslate(data);
      canOperateOrNot.successOutModel()
    }).catch(()=>{
      canOperateOrNot.errorOutModel(()=>{
        this.$message.error("操纵失败!请检查网络设置!")
      })
    });
  },
  methods: {
    setPageCount() {
      canOperateOrNot.intoModel()
      if (this.current_type == "fuzzy") {
        get("/users_fuzzy_count", { pattern: this.search_input_flash }).then(
          (result) => {
            let data = result.data;
            this.data_total = data.reply;
            canOperateOrNot.successOutModel()
          }
        ).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操纵失败!请检查网络设置!")
          })
        });
      } else {
        let path_count = "/" + this.current_type + "_get_count";
        get(path_count).then((result) => {
          let data = result.data;
          this.data_total = data.reply;
          canOperateOrNot.successOutModel()
        }).catch(()=>{
          canOperateOrNot.errorOutModel(()=>{
            this.$message.error("操纵失败!请检查网络设置!")
          })
        });
      }
    },
    changePage(value) {
      canOperateOrNot.intoModel()
      let path;
      let params;
      if (this.current_type == "fuzzy") {
        path = "/users_fuzzy";
        params = {
          preNum: (value - 1) * this.pageSize,
          pattern: this.search_input_flash,
        };
      } else {
        path = "/" + this.current_type + "_get_onepage";
        params = { preNum: (value - 1) * this.pageSize };
      }
      get(path, params).then((result) => {
        let data = result.data;
        this.auto_completion(data);
        this.tableData = this.resultTranslate(data);
        canOperateOrNot.successOutModel()
      }).catch(()=>{
        canOperateOrNot.errorOutModel(()=>{
          this.$message.error("操纵失败!请检查网络设置!")
        })
      });
    },
    auto_completion(data) {
      this.current_remain = data.reply.length
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
        return data.reply;
      }
    },
    addRequest() {
      if (!this.verify_not_empyt(this.new_info)) {
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
            this.setPageCount()
            this.changePage(1)
            this.current_page = 1
          }
        })
        .catch((result) => {
          console.log(result)
          this.$message.error("添加失败,请稍后再试!");
        });
    },
    verify_not_empyt(user) {
      if (!user.name) {
        this.$message.error("姓名不可以为空");
        return false;
      }
      if (!user.username) {
        this.$message.error("账号不可以为空!");
        return false;
      }
      if (!user.password) {
        this.$message.error("密码不可以为空!");
        return false;
      }
      if (!user.identity_type) {
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
    modifyItem(userinfo) {
      this.modify_form.name = userinfo.name
      this.modify_form.username = userinfo.username
      this.modify_form.password = userinfo.password
      this.modify_form.identity_type = userinfo.identity_type
      this.modifyDialogFormVisible = true
    },
    deleteItem(username) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          get("/user_delete", { username })
            .then((result) => {
              let result_data = result.data;
              if (result_data.success) {
                this.$message({
                  message: "删除成功!",
                  type: "success",
                });
                this.setPageCount()
                if(this.current_remain == 1){
                  this.changePage(this.current_page-1)
                }
                else{
                  this.changePage(this.current_page);
                }
              } else {
                this.$message.error("删除失败!");
              }
            })
            .catch(() => {
              this.$message.error("删除失败!");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    identityCodeToNameC(value) {
      return identityCodeToName(value);
    },
    switch_show(value) {
      this.current_type = value
      this.setPageCount()
      this.changePage(1)
      this.current_page = 1
    },
    fuzzySearch() {
      this.current_type = "fuzzy";
      this.search_input_flash = this.search_input;
      this.setPageCount()
      get("/users_fuzzy", { pattern: this.search_input, preNum: 0 }).then(
        (result) => {
          let data = result.data;
          this.tableData = this.resultTranslate(data);
          this.current_page = 1
        }
      );
    },
    resultTranslate(data) {
      return data.reply.map((value) => {
        let tempvalue = value;
        tempvalue.identity_type = identityCodeToName(value.identity_type);
        return tempvalue;
      });
    },
    modify_dialog_submit(){

      if(!this.verify_not_empyt(this.modify_form)){
        return
      }
      let post_data = {
        name: this.modify_form.name,
        username: this.modify_form.username,
        password: this.modify_form.password,
        identity_type: identityCodeToName(this.modify_form.identity_type),
      };
      post_data = dataToUrlsearchparams(post_data);
      post('/users_update',post_data).then(result=>{
        console.log(result)
        let result_data = result.data
        if(result_data.success){
          this.$message({
            message:"修改成功!",
            type:"success"
          })
          this.modifyDialogFormVisible = false
          this.changePage(this.current_page)
        }
        else{
          this.$message.error("1修改失败!")
        }
      }).catch((error)=>{
        console.log(error)
      })

    }
  }
};
</script>
<style scoped>
@import "~css/views/user-manag/common-user-manag/common-user-manag.css";
</style>