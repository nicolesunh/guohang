<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppExpressOperator">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppExpressOperator-bd">
        <div class="onlineAppExpressOperator-bd-l">
          <OnlineAppEntCationNavList></OnlineAppEntCationNavList>
        </div>
        <div class="onlineAppExpressOperator-bd-r">
          <OnlineAppExpressOperatorList></OnlineAppExpressOperatorList>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../../.././components/HomeCommon/HeadTitle"
  import OnlineAppNav from "../../.././components/OnlineApplicationCommon/OnlineAppNav"
  import HeadSearch from "../../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import OnlineAppEntCationNavList from "../../.././components/OnlineApplicationCommon/OnlineAppEntCation/OnlineAppEntCationNavList"
  import OnlineAppExpressOperatorList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers/OnlineAppExpressOperatorList"
  export default {
    name: "OnlineAppExpressOperator",
    data(){
      return{
        showImg:"OnlineAppEntCation",
        addClass:"OnlineAppEntCation",
        breadcrumb:"OnlineAppExpressOperator"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppEntCationNavList:OnlineAppEntCationNavList,
      OnlineAppExpressOperatorList:OnlineAppExpressOperatorList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .onlineAppExpressOperator{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppExpressOperator-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppExpressOperator-bd-l{
        width: 25%;
        float: left;
      }
      .onlineAppExpressOperator-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
