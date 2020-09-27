<template>
  <div id="login-in">
    <div class="header">化学品物资管理系统</div>
    <div class="main">
      <div class="login-in-body">
        <div class="login-in-body-header">
          <span>欢 迎 登 录</span>
        </div>
        <div class="login-in-body-input-container">
          <el-input
            placeholder="请输入账号"
            v-model="login_info.username"
            prefix-icon="el-icon-user"
          ></el-input>
          <el-input
            placeholder="请输入密码"
            v-model="login_info.password"
            prefix-icon="el-icon-lock"
            type="password"
          ></el-input>
          <el-select placeholder="权限选择" v-model="login_info.identity_type">
            <el-option
              v-for="(key, value) in identity_type_options"
              :key="key"
              :value="value"
            ></el-option>
          </el-select>
        </div>
        <div class="login-in-body-btn-container">
          <el-button
            type="primary"
            @click="login_in"
            :loading="isloading"
            :disabled="isloading"
            >登录
          </el-button>
        </div>
      </div>
      <el-button @click="prerogativeEntrance" type="primary">特权入口</el-button>
    </div>
  </div>
</template>
<script>
import get from "js/common/request/get/get_request.js";
import post from "js/common/request/post/post_request.js";

import identity_converter from "js/common/translate/identity_code_and_name.js";
import data_to_urlsearchparams from "js/common/translate/data_to_urlsearchparams.js";

export default {
  name: "",
  props: {},
  data() {
    return {
      login_info: {
        username: "",
        password: "",
        identity_type: "",
      },
      identity_type_options: {
        高级管理员: 1,
        普通管理员: 2,
        使用人员: 3,
      },
      isloading: false,
    };
  },
  computed: {},
  methods: {
    login_in() {
      this.isloading = true;
      let post_data = {
        username: this.login_info.username,
        password: this.login_info.password,
        identity_type: identity_converter(this.login_info.identity_type),
      };

      let data = data_to_urlsearchparams(post_data);
      post("/login-in", data).then((result) => {
        this.isloading = false;
        let resultbody = result.data;

        if (!resultbody.success) {
          if (resultbody.message_code == 1) {
            this.$message.error("账户不存在!");
          } else {
            this.$message.error("密码错误!");
          }
        } else {
          this.$message({
            message: "登陆成功!",
            type: "success",
          });
          this.$store.commit("loginInStore/loginSuccess");
          this.$store.commit("loginInStore/setIdentityType", post_data.identity_type);
          this.$store.commit("loginInStore/setName", resultbody.reply.name);
          this.$router.push("/main");
        }
      });
    },
    prerogativeEntrance() {
      this.$message({
        message: "登陆成功!",
        type: "success",
      });
      this.$store.commit("loginInStore/loginSuccess");
      this.$store.commit("loginInStore/setIdentityType",0);
      this.$router.push("/main");
    },
  },
};
</script>
<style scoped>
@import "~css/login-in.css";
</style>