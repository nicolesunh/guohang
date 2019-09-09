<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppEntCation">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppEntCation-bd">
        <div class="onlineAppEntCation-bd-l">
          <OnlineAppEntCationNavList></OnlineAppEntCationNavList>
        </div>
        <div class="onlineAppEntCation-bd-r">
          <OnlineAppEntCationList></OnlineAppEntCationList>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>

  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import OnlineAppNav from "../.././components/OnlineApplicationCommon/OnlineAppNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import OnlineAppEntCationNavList from "../.././components/OnlineApplicationCommon/OnlineAppEntCation/OnlineAppEntCationNavList"
  import OnlineAppEntCationList from "../.././components/OnlineApplicationCommon/OnlineAppEntCation/OnlineAppEntCationList"
  export default {
    name: "OnlineAppEntCation",
    data(){
      return{
        showImg:"OnlineAppEntCation",
        addClass:"OnlineAppEntCation",
        breadcrumb:"OnlineAppEntCation"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppEntCationNavList:OnlineAppEntCationNavList,
      OnlineAppEntCationList:OnlineAppEntCationList
    },
   created:function () {

   },
   methods:{

   }

  }
</script>

<style lang = scss scoped>
  .onlineAppEntCation{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppEntCation-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppEntCation-bd-l{
        width: 25%;
        float: left;
      }
      .onlineAppEntCation-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
