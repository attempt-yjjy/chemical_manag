<template>
  <div id='outborrow-apply' class="output-main">
    <simple-title-bar title-text="设备外借申请"></simple-title-bar>
    <div class="upload-container">
      <upload-block></upload-block>
    </div>
  </div>
</template>
<script>
import SimpleTitleBar from 'components/common/simple-title-bar.vue' 
import UploadBlock from 'components/common/upload-block.vue'
  export default {
    name:'outborrow-apply',
    props:{
      
    },
    components:{
      SimpleTitleBar,
      UploadBlock
    }
  }
</script>
<style scoped>
  @import '~css/views/output-management/outborrow-apply/outborrow-apply.css';
</style>