<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketEconomyTrade">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shipMarketEconomyTrade-bd">
        <div class="shipMarketEconomyTrade-bd-l">
          <ShipMarketEconomyTradeList></ShipMarketEconomyTradeList>
        </div>
        <div class="shipMarketEconomyTrade-bd-r">
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
  import ShipMarketEconomyTradeList from "../.././components/ShipMarketCommon/ShipMarketEconomyTrade/ShipMarketEconomyTradeList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketEconomyTrade",
    data(){
      return{
        showImg:"ShipMarketEconomyTrade",
        addClass:"ShipMarketEconomyTrade",
        viewShow:"ShipMarketEconomyTrade",
        breadcrumb:"ShipMarketEconomyTrade"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketEconomyTradeList:ShipMarketEconomyTradeList,
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
  .shipMarketEconomyTrade{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketEconomyTrade-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketEconomyTrade-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketEconomyTrade-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
