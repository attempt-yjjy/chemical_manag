<template>
  <div id="main">
    <el-container>
      <el-header>
        <kin-header></kin-header>
      </el-header>
      <el-container>
        <el-aside>
          <kin-aside></kin-aside>
        </el-aside>
        <el-main>
          <kin-main></kin-main>
        </el-main>
      </el-container>
    </el-container>
    <div class="general-mask" v-show="shouldModel"></div>
  </div>
</template>
<script>
import KinAside from 'components/exclusive/kin-aside.vue'
import KinMain from 'components/exclusive/kin-main.vue'
import KinHeader from 'components/exclusive/kin-header.vue'
export default {
  name: "",
  props: {},
  components:{
    KinAside,
    KinMain,
    KinHeader
  },
  computed:{
    shouldModel(){
      return !this.$store.getters["statusControl/shouldModel"]
    }
  }
};
</script>
<style scoped>
@import '~css/main.css';
</style>