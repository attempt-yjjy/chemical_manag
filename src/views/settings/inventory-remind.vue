<template>
  <div id='inventory-remind'>
      <div class="item">
          <div class="title">
              <span>库存提醒</span>
          </div>
          <div class="item-body">
              <div class="name-input-container">
                  <span><span class="necessary_mark">*</span>药品/设备名称:</span>
                  <input type="text" v-model="name"/>
              </div>
              <div class="number-input-container">
                  <span><span class="necessary_mark">*</span>库存剩余</span>
                  <input type="number" v-model="number"/>
                  <span>提醒</span>
              </div>
              <el-button type="primary">确定</el-button>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      
    },
    data(){
        return{
            name:"",
            number:0
        }
    }
  }
</script>
<style scoped>
  @import '~css/views/settings/inventory-remind/inventory-remind.css';
</style>