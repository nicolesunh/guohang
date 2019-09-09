<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketLogistics">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shipMarketLogistics-bd">
        <div class="shipMarketLogistics-bd-l">
          <ShipMarketLogisticsList></ShipMarketLogisticsList>
        </div>
        <div class="shipMarketLogistics-bd-r">
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
  import ShipMarketLogisticsList from "../.././components/ShipMarketCommon/ShipMarketLogistics/ShipMarketLogisticsList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketLogistics",
    data(){
      return{
        showImg:"ShipMarketLogistics",
        addClass:"ShipMarketLogistics",
        viewShow:"ShipMarketLogistics",
        breadcrumb:"ShipMarketLogistics"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketLogisticsList:ShipMarketLogisticsList,
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
  .shipMarketLogistics{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketLogistics-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketLogistics-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketLogistics-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
