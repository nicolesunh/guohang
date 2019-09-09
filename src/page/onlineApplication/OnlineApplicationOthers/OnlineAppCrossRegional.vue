<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppCrossRegional">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppCrossRegional-bd">
        <div class="onlineAppCrossRegional-bd-l">
          <OnlineAppEntCationNavList></OnlineAppEntCationNavList>
        </div>
        <div class="onlineAppCrossRegional-bd-r">
          <OnlineAppCrossRegionalList></OnlineAppCrossRegionalList>
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
  import OnlineAppCrossRegionalList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers/OnlineAppCrossRegionalList"
  export default {
    name: "OnlineAppCrossRegional",
    data(){
      return{
        showImg:"OnlineAppEntCation",
        addClass:"OnlineAppEntCation",
        breadcrumb:"OnlineAppCrossRegional"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppEntCationNavList:OnlineAppEntCationNavList,
      OnlineAppCrossRegionalList:OnlineAppCrossRegionalList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .onlineAppCrossRegional{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppCrossRegional-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppCrossRegional-bd-l{
        width: 25%;
        float: left;
      }
      .onlineAppCrossRegional-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
