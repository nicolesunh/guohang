<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="OnlineAppMaritimeAffairs">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="OnlineAppMaritimeAffairs-bd">
        <div class="OnlineAppMaritimeAffairs-bd-l">
          <OnlineAppInfSearchNavList></OnlineAppInfSearchNavList>
        </div>
        <div class="OnlineAppMaritimeAffairs-bd-r">
          <OnlineAppMaritimeAffairsList></OnlineAppMaritimeAffairsList>
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
  import OnlineAppMaritimeAffairsList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers2/OnlineAppMaritimeAffairsList"
  export default {
    name: "OnlineAppMaritimeAffairs",
    data(){
      return{
        showImg:"OnlineAppInfSearch",
        addClass:"OnlineAppInfSearch",
        breadcrumb:"OnlineAppMaritimeAffairs"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppInfSearchNavList:OnlineAppInfSearchNavList,
      OnlineAppMaritimeAffairsList:OnlineAppMaritimeAffairsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppMaritimeAffairs{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .OnlineAppMaritimeAffairs-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .OnlineAppMaritimeAffairs-bd-l{
        width: 25%;
        float: left;
      }
      .OnlineAppMaritimeAffairs-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
