<template>
   <div class="headSearch">
     <div class="headSerCont">
       <div class="logo">
         <router-link to="/" v-if="show1">
           <img src="../.././assets/img/hyCenter.png"  alt="首页/专项资金/办事指南">
         </router-link>
         <router-link to="/" v-if="show2">
           <img src="../.././assets/img/zixunzhongxin.png" alt="咨询中心">
         </router-link>
         <router-link to="/" v-if="show3">
           <img src="../.././assets/img/hangyunShichang.png" alt="航运市场">
         </router-link>
         <router-link to="/" v-if="show4">
           <img src="../.././assets/img/zhengcegonggao.png" alt="政策公告">
         </router-link>
         <router-link to="/" v-if="show5">
           <img src="../.././assets/img/zxAppcition.png" alt="在线应用">
         </router-link>
         <router-link to="/" v-if="show6">
           <img src="../.././assets/img/hangyufanzhan.png" alt="航运发展">
         </router-link>

       </div>
       <div class="site-search-2">
         <el-button type="primary" icon="el-icon-search" style="width: 21%;float: right" @click="searchKey">搜索</el-button>
          <!--<el-select v-model="value" placeholder="请选择" style="width: 21%;float: right;" >-->
           <!--<el-option-->
             <!--v-for="item in options"-->
             <!--:key="item.value"-->
             <!--:label="item.label"-->
             <!--:value="item.value">-->
           <!--</el-option>-->
         <!--</el-select>-->
         <el-input v-model="input" placeholder="请输入关键词。。。"   clearable  style="width: 50%;float: right" @keyup.enter.native="searchKey"></el-input>
       </div>
     </div>

   </div>
</template>

<script>
   import {mapActions} from 'vuex';
    export default {
        name: "HeadSearch",
        data(){
          return{
            valueFromParent:'', //用来接收props
            input:"",
            options: [{
              value: '选项1',
              label: '全部'
            }, {
              value: '选项2',
              label: '资讯'
            }, {
              value: '选项3',
              label: '应用'
            }],
            value: '全部',
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            show6:false,
            //历史记录
            HistoryRecord:[]

          }
        },
      props: ['parentToChild'],
      created(){
        this.valueFromParent = this.parentToChild;
        this.isShow();
      },
      methods: {
        ...mapActions(['setSearchtext']),
        searchKey(){
            if(this.input == "" || this.input == null){
                this.$message({
                    message: '请先输入搜索信息',
                    type: 'warning'
                });
            }else {
                this.setSearchtext(this.input);
                this.$router.push({
                    name:'Search'
                });
            }

        },
          isShow:function () {
            if(this.valueFromParent == 'AboutUs' || this.valueFromParent == 'ContactUs' || this.valueFromParent == 'IndexHome' || this.valueFromParent == 'LegalStatement' || this.valueFromParent == 'SiteMap' || this.valueFromParent == 'HandlingGuide' || this.valueFromParent == 'SpecialFund'){
               this.show1 = true;
            }else {
              this.show1 = false;
            }
            if(this.valueFromParent == 'InfCenterHome' || this.valueFromParent == 'InfCenterShanghai' || this.valueFromParent == 'InfCenterDomestic' || this.valueFromParent == 'InfCenterInternational'  || this.valueFromParent == 'InfCenterShipping'|| this.valueFromParent == 'InfCenterTrade' || this.valueFromParent == 'InfCenterPort'|| this.valueFromParent == 'InfCenterTechnology'|| this.valueFromParent == 'InfCenterService'|| this.valueFromParent == 'InfCenterPolicy'|| this.valueFromParent == 'InfCenterLook'|| this.valueFromParent == 'InfCenterEncy'|| this.valueFromParent == 'InfCenterDetail'|| this.valueFromParent == 'InfCenterDocumentAttached'){
              this.show2 = true;
            }else {
              this.show2 = false;
            }
            if(this.valueFromParent == 'ShipMarketHome' || this.valueFromParent == 'ShipMarketContainer' || this.valueFromParent == 'ShipMarketDryCargo' || this.valueFromParent == 'ShipMarketTanker'  || this.valueFromParent == 'ShipMarketPort'|| this.valueFromParent == 'ShipMarketShip' || this.valueFromParent == 'ShipMarketWaterTransport'|| this.valueFromParent == 'ShipMarketEconomyTrade'|| this.valueFromParent == 'ShipMarketLogistics'|| this.valueFromParent == 'ShipMarketComprehensive'|| this.valueFromParent == 'ShipMarketIndex'){
              this.show3 = true;
            }else {
              this.show3 = false;
            }
            if(this.valueFromParent == 'PolicyMntPolicy' || this.valueFromParent == 'PolicyMntUnscramble' || this.valueFromParent == 'PolicyMntNotice' || this.valueFromParent == 'PolicyMntAnnouncement'){
              this.show4 = true;
            }else {
              this.show4 = false;
            }
            if(this.valueFromParent == 'OnlineAppHome' || this.valueFromParent == 'OnlineAppEntCation' || this.valueFromParent == 'OnlineAppInfSearch' || this.valueFromParent == 'OnlineAppBulletin'){
              this.show5 = true;
            }else {
              this.show5 = false;
            }
            if(this.valueFromParent == 'ShippingDevHome' || this.valueFromParent == 'ShippingDevDynamics' || this.valueFromParent == 'ShippingDevProcess' || this.valueFromParent == 'ShippingDevSupport'){
              this.show6 = true;
            }else {
              this.show6 = false;
            }
          },


      }
    }
</script>

<style  lang = scss scoped>
  .headSearch{
    width: 100%;
    height: 70px;
    background: #00297a;
  }
  .headSerCont{
    width: 1060px;
    margin: 0 auto;
    .logo{
       float: left;
       img{
         height: 70px;
       }
    }
    .site-search-2 {
      float: right;
      width: 375px;
      margin-top: 18px;
      margin-right: 60px;
      color: #ffffff;
      overflow: hidden;
    }
  }
  /*输入框*/
  .site-search-2 /deep/ .el-input__inner{
    border-radius: 0 !important;
  }
  .site-search-2 /deep/ .el-button{
    border-radius: 0 !important;
  }
</style>
