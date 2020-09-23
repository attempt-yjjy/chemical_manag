<template>
  <div id="inform-manag">
    <header-title-bar prefix-title-text="通知管理"></header-title-bar>
    <div class="main">
        <div class="remind-block">
            <simple-title-bar title-text="预到期提醒"></simple-title-bar>
        </div>
        <div class="remind-block">
            <simple-title-bar title-text="库存提醒"></simple-title-bar>
        </div>
    </div>
  </div>
</template>
<script>
import SimpleTitleBar from 'components/common/simple-title-bar.vue'
import HeaderTitleBar from 'components/common/header-title-bar.vue'
export default {
  name: "",
  props: {},
  components:{
      SimpleTitleBar,
      HeaderTitleBar
  }
};
</script>
<style scoped>
@import '~css/views/inform-manag/inform-manag.css';
</style>