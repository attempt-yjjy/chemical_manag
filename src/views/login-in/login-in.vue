<template>
  <div id='login-in'>
      <div class="header">
          化学品物资管理系统
      </div>
      <div class="main">
          <div class="login-in-body">
              <div class="login-in-body-header">
                  <span>欢 迎 登 录</span>
              </div>
              <div class="login-in-body-input-container">
                  <el-input placeholder="请输入账号" v-model="login_info.username" prefix-icon="el-icon-user"></el-input>
                  <el-input placeholder="请输入密码" v-model="login_info.password" prefix-icon="el-icon-lock" type="password"></el-input>
                  <el-select placeholder="权限选择" 
                    v-model="login_info.identity_type" 
                    >
                    <el-option v-for="(key,value) in identity_type_options" :key="key" :value="value"></el-option>
                  </el-select>
              </div>
              <div class="login-in-body-btn-container">
                  <el-button type="primary" @click="login_in">登录</el-button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import get from 'js/common/request/get/get_request.js'
import post from 'js/common/request/post/post_request.js'

  export default {
    name:'',
    props:{
      
    },
    data(){
        return{
            login_info:{
                username:"",
                password:"",
                identity_type:""
            },
            identity_type_options:{
               "高级管理员":1,
               "普通管理员":2,
               "使用人员":3
            }
        }
    },
    computed:{
        current_identity_code(){
            return this.identity_type_options[this.login_info.identity_type]
        }
    },
    methods:{
        login_in(){
            // post("/login-in",{
            //     data:this.login_info
            // }).then(result=>{
            //     console.log(result.data);
            // })
            this.$router.push("/main")
        }
    }
  }
</script>
<style scoped>
  @import '~css/login-in.css';
</style>