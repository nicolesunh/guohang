<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="OnlineAppCustoms">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="OnlineAppCustoms-bd">
        <div class="OnlineAppCustoms-bd-l">
          <OnlineAppInfSearchNavList></OnlineAppInfSearchNavList>
        </div>
        <div class="OnlineAppCustoms-bd-r">
          <OnlineAppCustomsList></OnlineAppCustomsList>
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
  import OnlineAppCustomsList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers2/OnlineAppCustomsList"
  export default {
    name: "OnlineAppCustoms",
    data(){
      return{
        showImg:"OnlineAppInfSearch",
        addClass:"OnlineAppInfSearch",
        breadcrumb:"OnlineAppCustoms"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppInfSearchNavList:OnlineAppInfSearchNavList,
      OnlineAppCustomsList:OnlineAppCustomsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppCustoms{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .OnlineAppCustoms-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .OnlineAppCustoms-bd-l{
        width: 25%;
        float: left;
      }
      .OnlineAppCustoms-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
