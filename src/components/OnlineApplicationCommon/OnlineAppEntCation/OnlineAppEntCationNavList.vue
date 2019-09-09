<template>
  <div class="onlineAppEntCationNavList">
    <!--垂直的导航列表-->
    <h3 class="onlineAppEntCationNavList-h">所有应用</h3>
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
          <span>业务分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppClearance" >通关</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppLogistics">物流</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppFinance" >金融</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppInformation">资讯</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppGovernmentAffairs" >政务</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppMobile">移动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>用户行业</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppShipper">货主</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppFreight">货代</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppFleet">车队</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppShippingCompany">船公司</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppCustomsBroker">报关行</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppCommodityBroker">报检行</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppExpressOperator">快件营运人</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppWharf">码头</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppPreviewPoint">预录点</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppYard">堆场</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppTally">理货</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppStorage">仓储</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppShipGeneration">船代</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" style="display: block">
        <template slot="title">
          <span>主题应用</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/onlineApplication/onlineAppNewspaper">一单两报</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppShipDynamics">船舶动态</el-menu-item>
          <el-menu-item index="/onlineApplication/onlineAppCrossRegional">跨区域通关</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "OnlineAppEntCationNavList",
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
  .onlineAppEntCationNavList{
    .onlineAppEntCationNavList-h{
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
