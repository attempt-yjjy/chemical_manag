<template>
  <div class=''>
      <el-menu  :background-color="backgroundColor"
                :text-color="textColor"
                :active-text-color="activeTextColor"
                :unique-opened="true">
          <el-submenu v-for="(item,index) in menuData" 
                        :key="item['menu-item-name']" 
                        :title="item['menu-item-name']"
                        :index="'' + index"
                        @click.native="itemBeClick(item)">
                <template slot="title">
                    <i :class="item['icon']"></i>
                    <span>{{item["menu-item-name"]}}</span>
                </template>
                <el-menu-item   v-for="(item_sub,index_sub) in item['sub_menu']" 
                                :key="item_sub['menu-item-name']"
                                :index="''+ index + index_sub"
                                @click="subBeClick(item,item_sub)"
                                >
                                {{item_sub['menu-item-name']}}
                </el-menu-item>
          </el-submenu>
      </el-menu>
  </div>
</template>
<script>
import AsideData from "json/aside/menu-data.js"
import { log } from 'util'

  export default {
    name:'KinAside',
    props:{
      
    },
    data(){
        return {
            menuData:AsideData.menuData,
            backgroundColor:AsideData.style.backgroundColor,
            textColor:AsideData.style.textColor,
            activeTextColor:AsideData.style.activeTextColor
        }
    },
    methods:{
        itemBeClick(item){
          if(item["sub_menu"].length == 0){
            this.$router.push('/main' + item["path"])
          }
        },
        subBeClick(item,item_sub){
          this.$router.push('/main' + item["path"] + item_sub["path"])
        }
    }
  }
</script>
<style scoped>
  
</style>