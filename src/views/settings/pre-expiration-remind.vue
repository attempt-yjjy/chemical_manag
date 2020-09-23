<template>
  <div id='pre-expiration-remind'>
      <div class="item">
          <simple-title-bar title-text="预到期提醒"></simple-title-bar>
          <div class="item-body">
              <div class="name-input-container">
                  <span><span class="necessary_mark">*</span>药品名称:</span>
                  <input type="text" v-model="name"/>
              </div>
              <div class="number-input-container">
                  <span><span class="necessary_mark">*</span>预到期</span>
                  <input type="number" v-model="number"/>
                  <span>天提醒</span>
              </div>
              <el-button type="primary">确定</el-button>
          </div>
      </div>
  </div>
</template>
<script>
import SimpleTitleBar from 'components/common/simple-title-bar.vue'
  export default {
    name:'',
    props:{
      
    },
    data(){
        return{
            name:"",
            number:0
        }
    },
    components:{
      SimpleTitleBar
    }
  }
</script>
<style scoped>
  @import '~css/views/settings/pre-expiration-remind/pre-expiration-remind.css';
</style>