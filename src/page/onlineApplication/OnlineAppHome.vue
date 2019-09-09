<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppHome">
      <div class="onlineAppHome-bd">
          <!--公告-->
            <div class="onlineAppHome-bd-announcement">
                <h3>
                  <span><img src="../.././assets/img/gg.png" alt=""></span>
                  <span>公告:</span>
                </h3>
                <ul>
                  <li><router-link to="">上海亿通国际股份有限公司客户服务热线号码变更公告 <span>2016-09-21</span></router-link></li>
                  <li><router-link to="">电子装箱单实用手册下载 <span>2016-09-21</span></router-link></li>
                  <li><router-link to="">内贸集装箱预录规范<span>2016-09-21</span></router-link></li>
                </ul>
            </div>
          <!--轮播图-->
            <div class="onlineAppHome-bd-carousel">
              <el-carousel :interval="1000" type="card" :autoplay="false" height="342">
                <el-carousel-item v-for="(item1,index) in logoList" :key="index">
                  <img :src="checkImg(item1.img)" alt="" style="width: 100%;height: 100%" @click="yyClick(item1.ID)">
                </el-carousel-item>
              </el-carousel>
            </div>
           <!--导航栏1-->
            <div class="onlineAppHome-bd-nav1">
              <el-tabs v-model="activeName1" @tab-click="handleClick" :stretch="false">
                <el-tab-pane label="最新应用" name="nav1-first">
                  <LatestApplication></LatestApplication>
                </el-tab-pane>
                <el-tab-pane label="热门应用" name="nav1-second">
                  <PopularApplication></PopularApplication>
                </el-tab-pane>
                <el-tab-pane label="移动" name="nav1-third">
                  <Move></Move>
                </el-tab-pane>
                <el-tab-pane label="通关" name="nav1-fourth">
                  <Clearance></Clearance>
                </el-tab-pane>
                <el-tab-pane label="物流" name="nav1-five">
                  <Logistics></Logistics>
                </el-tab-pane>
                <el-tab-pane label="金融" name="nav1-six">
                  <Finance></Finance>
                </el-tab-pane>
                <el-tab-pane label="资讯" name="nav1-seven">
                  <Information></Information>
                </el-tab-pane>
                <el-tab-pane label="政务" name="nav1-eight">
                  <GovernmentAffair></GovernmentAffair>
                </el-tab-pane>
              </el-tabs>
            </div>
            <p class="onlineAppHome-bd-more">
              <router-link to="/onlineApplication/onlineAppEntCation">更多</router-link>
            </p>
           <!--导航栏2-->
            <div class="onlineAppHome-bd-nav2">
              <el-tabs v-model="activeName2" @tab-click="handleClick" :stretch="false">
                <el-tab-pane label="最新查询" name="nav2-first">
                  <LatestQuerie></LatestQuerie>
                </el-tab-pane>
                <el-tab-pane label="热门查询" name="nav2-second">
                  <HotQuerie></HotQuerie>
                </el-tab-pane>
                <el-tab-pane label="主题数据" name="nav2-third">
                  <TopicData></TopicData>
                </el-tab-pane>
                <el-tab-pane label="口岸监管" name="nav2-fourth">
                  <PortSupervision></PortSupervision>
                </el-tab-pane>
                <el-tab-pane label="航运服务" name="nav2-five">
                  <ShippingService></ShippingService>
                </el-tab-pane>
              </el-tabs>
            </div>
            <p class="onlineAppHome-bd-more">
              <router-link to="/onlineApplication/onlineAppInfSearch">更多</router-link>
            </p>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import {isImg} from '@/common/common.js';
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import OnlineAppNav from "../.././components/OnlineApplicationCommon/OnlineAppNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  //导航1
  import LatestApplication from "../.././components/OnlineApplicationCommon/NavList1/LatestApplication"
  import PopularApplication from "../.././components/OnlineApplicationCommon/NavList1/PopularApplication"
  import Move from "../.././components/OnlineApplicationCommon/NavList1/Move"
  import Clearance from "../.././components/OnlineApplicationCommon/NavList1/Clearance"
  import Logistics from "../.././components/OnlineApplicationCommon/NavList1/Logistics"
  import Finance from "../.././components/OnlineApplicationCommon/NavList1/Finance"
  import Information from "../.././components/OnlineApplicationCommon/NavList1/Information"
  import GovernmentAffair from "../.././components/OnlineApplicationCommon/NavList1/GovernmentAffair"
  //导航2
  import LatestQuerie from "../.././components/OnlineApplicationCommon/NavList2/LatestQuerie"
  import HotQuerie from "../.././components/OnlineApplicationCommon/NavList2/HotQuerie"
  import TopicData from "../.././components/OnlineApplicationCommon/NavList2/TopicData"
  import PortSupervision from "../.././components/OnlineApplicationCommon/NavList2/PortSupervision"
  import ShippingService from "../.././components/OnlineApplicationCommon/NavList2/ShippingService"
  export default {
    name: "OnlineAppHome",
    data(){
      return{
        showImg:"OnlineAppHome",
        addClass:"OnlineAppHome",
        activeName1:"nav1-first",
        activeName2:"nav2-first",
        logoList:[],
        id:null

      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      // 导航1
      LatestApplication:LatestApplication,
      PopularApplication:PopularApplication,
      Move:Move,
      Clearance:Clearance,
      Logistics:Logistics,
      Finance:Finance,
      Information:Information,
      GovernmentAffair:GovernmentAffair,
      // 导航2
      LatestQuerie:LatestQuerie,
      HotQuerie:HotQuerie,
      TopicData:TopicData,
      PortSupervision:PortSupervision,
      ShippingService:ShippingService

    },
    created:function(){
        this.getDate();
    },
    methods:{
        handleClick() {

        },
        getDate:function (){
            var _that  = this
            _that.$axios.post(serviceUrl + 'zxyy')
                .then(function(res){
                    if(res.data.code == 200){
                        const dataList = res.data.data
                        //图片list
                        _that.logoList = JSON.parse(dataList.logo)
                        _that.$store.commit('setOnlineAppHome', dataList);

                    }
                }).catch(function(error){
            })
        },
        //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
        checkImg(val){
            return isImg(val);
        },
        yyClick:function (ID) {
            this.id = ID
            this.$store.commit('setOnlineDetailId',this.id);
            /* this.$router.push({
                 path: '/yy_detail',
                 name:'yyDetail',
             })*/
            this.$router.push( '/yy_detail/' + ID)

        }
    }
  }
</script>

<style lang = scss scoped>
  .onlineAppHome{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppHome-bd{
      padding: 40px 60px;
      padding-top: 15px;
      //公告
      .onlineAppHome-bd-announcement{
        h3{
          span:nth-child(1){
            img{
              vertical-align: middle;
              margin-top: -3px;
            }
          }
          span:nth-child(2){
            padding-left: 10px;
            color: #ff9211;
            font-size: 14px;
          }
        }
        ul{
          overflow: hidden;
          li{
            float: left;
            margin-right: 30px;
            padding: 5px 0;
          }
        }
      }
      //轮播图
      .onlineAppHome-bd-carousel{
        padding: 10px 0;
        width: 100%;
        /deep/
        .el-carousel__item--card{
          width: 50%;

        }
      }
      //导航栏1
      .onlineAppHome-bd-nav1{
        margin-bottom: 25px;
        /deep/
        .el-tabs__item{
          font-size: 16px;
          .el-tabs__nav-wrap::after{
            height: 1px;
          }

        }
      }
      .onlineAppHome-bd-more{
        overflow: hidden;
        a{
          font-size: 14px;
          float: right;
          text-align: right;
          padding-right: 15px;
        }
      }
      //导航栏2
      .onlineAppHome-bd-nav2{
        /deep/
        .el-tabs__item{
          font-size: 16px;
          .el-tabs__nav-wrap::after{
            height: 1px;
          }

        }
      }

    }
  }
</style>
