<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketIndex">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shipMarketIndex-bd">
        <div class="shipMarketIndex-bd-l">
          <ShipMarketIndexList></ShipMarketIndexList>
        </div>
        <div class="shipMarketIndex-bd-r">
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
  import ShipMarketIndexList from "../.././components/ShipMarketCommon/ShipMarketIndex/ShipMarketIndexList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketIndex",
    data(){
      return{
        showImg:"ShipMarketIndex",
        addClass:"ShipMarketIndex",
        viewShow:"ShipMarketIndex",
        breadcrumb:"ShipMarketIndex"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketIndexList:ShipMarketIndexList,
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
  .shipMarketIndex{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketIndex-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketIndex-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketIndex-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
