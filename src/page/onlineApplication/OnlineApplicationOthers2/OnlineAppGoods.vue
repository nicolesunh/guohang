<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="OnlineAppGoods">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="OnlineAppGoods-bd">
        <div class="OnlineAppGoods-bd-l">
          <OnlineAppInfSearchNavList></OnlineAppInfSearchNavList>
        </div>
        <div class="OnlineAppGoods-bd-r">
          <OnlineAppGoodsList></OnlineAppGoodsList>
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
  import OnlineAppGoodsList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers2/OnlineAppGoodsList"
  export default {
    name: "OnlineAppGoods",
    data(){
      return{
        showImg:"OnlineAppInfSearch",
        addClass:"OnlineAppInfSearch",
        breadcrumb:"OnlineAppGoods"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppInfSearchNavList:OnlineAppInfSearchNavList,
      OnlineAppGoodsList:OnlineAppGoodsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppGoods{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .OnlineAppGoods-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .OnlineAppGoods-bd-l{
        width: 25%;
        float: left;
      }
      .OnlineAppGoods-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
