<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketShip">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shipMarketShip-bd">
        <div class="shipMarketShip-bd-l">
          <ShipMarketShipList></ShipMarketShipList>
        </div>
        <div class="shipMarketShip-bd-r">
          <NewArticle></NewArticle>
          <!--<WeeklyRanking :parentToChild="viewShow"></WeeklyRanking>-->
          <LabelCloud></LabelCloud>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import ShipMarketNav from "../.././components/ShipMarketCommon/ShipMarketNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import ShipMarketShipList from "../.././components/ShipMarketCommon/ShipMarketShip/ShipMarketShipList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketShip",
    data(){
      return{
        showImg:"ShipMarketShip",
        addClass:"ShipMarketShip",
        viewShow:"ShipMarketShip",
        breadcrumb:"ShipMarketShip"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketShipList:ShipMarketShipList,
      NewArticle:NewArticle,
      LabelCloud:LabelCloud,
      WeeklyRanking:WeeklyRanking
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .shipMarketShip{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketShip-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketShip-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketShip-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
