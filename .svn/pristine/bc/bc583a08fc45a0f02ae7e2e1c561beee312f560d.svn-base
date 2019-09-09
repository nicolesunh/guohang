<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketContainer">
        <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
        <div class="shipMarketContainer-bd">
            <div class="shipMarketContainer-bd-l">
              <ShipMarketContainerList></ShipMarketContainerList>
            </div>
            <div class="shipMarketContainer-bd-r">
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
  import ShipMarketContainerList from "../.././components/ShipMarketCommon/ShipMarketContainer/ShipMarketContainerList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
  export default {
    name: "ShipMarketContainer",
    data(){
      return{
        showImg:"ShipMarketContainer",
        addClass:"ShipMarketContainer",
        viewShow:"ShipMarketContainer",
        breadcrumb:"ShipMarketContainer"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketContainerList:ShipMarketContainerList,
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
  .shipMarketContainer{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketContainer-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shipMarketContainer-bd-l{
      width: 75%;
      float: left;
    }
    .shipMarketContainer-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
