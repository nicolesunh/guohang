<template>
    <div class="policyMntNavList">
          <!--垂直的导航列表-->
      <h3 class="policyMntNavList-h">内容分类</h3>
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
            <span>按行业主题</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/policyMnt/policyMntGPort" >港口</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntKPort">口岸</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntWaterway" >水路</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntLand">陆路</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntAviation" >航空</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntTrade">贸易</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntFinance" >财税</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntMaritime">海事</el-menu-item>

          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>按公文文种</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/policyMnt/policyMntPolicy" >政策</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntUnscramble" >政策解读</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntNotice" >通知</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntAnnouncement">公告</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" style="display: block">
          <template slot="title">
            <span>按来源单位</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/policyMnt/policyMntCustoms">海关总署</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntShanghaiCustoms">上海海关</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntMinistry">交通运输部</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntCommunications">上海交通委</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntChineseGovernment">中国政府</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntShanghaiGovernment">上海政府</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntTaxation">国家税务总局</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntShanghaiTaxBureau">上海国税局</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntPostBureau">国家邮政局</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntShanghaiPostAdm">上海市邮政管理局</el-menu-item>
            <el-menu-item index="/policyMnt/policyMntCivilChina">中国民航局</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <div class="policyMntNavList-footer">
        <ul>
          <li><router-link to=""><img src="../.././assets/img/jtjn.png" alt=""></router-link></li>
          <li><router-link to=""><img src="../.././assets/img/gjhy.png" alt=""></router-link></li>
          <li><router-link to=""><img src="../.././assets/img/wccy.png" alt=""></router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PolicyMntNavList",
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
  .policyMntNavList{
    .policyMntNavList-h{
      padding: 2px 20px;
      font-size: 18px;
      font-weight: bold;
    }
    /deep/
    .el-menu{
       border-right: none;
    }
    .policyMntNavList-footer{
      ul{
        li{
          padding: 5px 0;
          img{
            width: 176px;
            height: 97px;
          }
        }
      }
    }
  }

</style>
