<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppShipDynamics">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppShipDynamics-bd">
        <div class="onlineAppShipDynamics-bd-l">
          <OnlineAppEntCationNavList></OnlineAppEntCationNavList>
        </div>
        <div class="onlineAppShipDynamics-bd-r">
          <OnlineAppShipDynamicsList></OnlineAppShipDynamicsList>
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
  import OnlineAppShipDynamicsList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers/OnlineAppShipDynamicsList"
  export default {
    name: "OnlineAppShipDynamics",
    data(){
      return{
        showImg:"OnlineAppEntCation",
        addClass:"OnlineAppEntCation",
        breadcrumb:"OnlineAppShipDynamics"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppEntCationNavList:OnlineAppEntCationNavList,
      OnlineAppShipDynamicsList:OnlineAppShipDynamicsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .onlineAppShipDynamics{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppShipDynamics-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppShipDynamics-bd-l{
        width: 25%;
        float: left;
      }
      .onlineAppShipDynamics-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
