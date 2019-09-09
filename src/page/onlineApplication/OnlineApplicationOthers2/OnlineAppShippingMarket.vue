<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="OnlineAppShippingMarket">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="OnlineAppShippingMarket-bd">
        <div class="OnlineAppShippingMarket-bd-l">
          <OnlineAppInfSearchNavList></OnlineAppInfSearchNavList>
        </div>
        <div class="OnlineAppShippingMarket-bd-r">
          <OnlineAppShippingMarketList></OnlineAppShippingMarketList>
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
  import OnlineAppInfSearchNavList from "../../.././components/OnlineApplicationCommon/OnlineAppInfSearch/OnlineAppInfSearchNavList"
  import OnlineAppShippingMarketList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers2/OnlineAppShippingMarketList"
  export default {
    name: "OnlineAppShippingMarket",
    data(){
      return{
        showImg:"OnlineAppInfSearch",
        addClass:"OnlineAppInfSearch",
        breadcrumb:"OnlineAppShippingMarket"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppInfSearchNavList:OnlineAppInfSearchNavList,
      OnlineAppShippingMarketList:OnlineAppShippingMarketList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppShippingMarket{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .OnlineAppShippingMarket-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .OnlineAppShippingMarket-bd-l{
        width: 25%;
        float: left;
      }
      .OnlineAppShippingMarket-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
