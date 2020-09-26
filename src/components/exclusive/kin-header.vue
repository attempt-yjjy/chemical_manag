<template>
  <div id='kin-header'>
    <div>
      <span class="title">化学药品管理系统</span>
    </div>
    <div class="header-operate">
      <span class="font">欢迎登录 , <span>{{name}}</span></span>
      <div><el-badge is-dot><i class="el-icon-bell"></i></el-badge></div>
      <div><i class="el-icon-s-management"></i></div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'KinHeader',
    props:{
    },
    computed:{
      name(){
        return this.$store.state.loginInStore.name
      }
    }
  }
</script>
<style scoped>
  #kin-header{
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  #kin-header .title{
    font-size: large;
  }

  #kin-header .header-operate{
    width:250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
  }

  #kin-header .header-operate .font{
    font-size:medium;
  }

  #kin-header .header-operate i{
    cursor: pointer;
  }
</style>