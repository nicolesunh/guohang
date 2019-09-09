<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketPort">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shipMarketPort-bd">
        <div class="shipMarketPort-bd-l">
          <ShipMarketPortList></ShipMarketPortList>
        </div>
        <div class="shipMarketPort-bd-r">
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
  import ShipMarketPortList from "../.././components/ShipMarketCommon/ShipMarketPort/ShipMarketPortList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketPort",
    data(){
      return{
        showImg:"ShipMarketPort",
        addClass:"ShipMarketPort",
        viewShow:"ShipMarketPort",
        breadcrumb:"ShipMarketPort"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketPortList:ShipMarketPortList,
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
  .shipMarketPort{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketPort-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketPort-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketPort-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
