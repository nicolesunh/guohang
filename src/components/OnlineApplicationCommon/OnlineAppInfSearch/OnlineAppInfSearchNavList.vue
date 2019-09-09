<template>
  <div class="onlineAppInfSearchNavList">
    <!--垂直的导航列表-->
    <h3 class="onlineAppInfSearchNavList-h">所有应用</h3>
    <el-menu
      :default-active= "$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#4074C0"
      @select="handleSelect"
      router>
      <el-submenu index="1">
        <template slot="title">
          <span>主题数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppGoods">货物</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppTransportMeans">运输工具</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppDocuments">单证</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>口岸监管 </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppCustoms">海关</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppInspectionQuarantine">检验检疫</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppMaritimeAffairs">海事</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppPortArea">港区</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" style="display: block">
        <template slot="title">
          <span>航运服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppScheduledFlights">船期航班</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppRoadTraffic">路况交通</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppShippingMarket">航运市场</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppLogisticsResources">物流资源</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppMarineMeteorology">海洋气象</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "OnlineAppInfSearchNavList",
    data(){
      return{

      }
    },
    created:function () {
      this.isType();
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      handleSelect(key, keyPath) {

      },
      isType(){
        this.url = this.$route.path;
      }
    }
  }
</script>

<style  lang = scss scoped>
  .onlineAppInfSearchNavList{
    .onlineAppInfSearchNavList-h{
      padding: 2px 20px;
      font-size: 18px;
      font-weight: bold;
    }
    /deep/
    .el-menu{
      border-right: none;
    }
  }

</style>
