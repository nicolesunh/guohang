<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="OnlineAppDocuments">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="OnlineAppDocuments-bd">
        <div class="OnlineAppDocuments-bd-l">
          <OnlineAppInfSearchNavList></OnlineAppInfSearchNavList>
        </div>
        <div class="OnlineAppDocuments-bd-r">
          <OnlineAppDocumentsList></OnlineAppDocumentsList>
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
  import OnlineAppDocumentsList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers2/OnlineAppDocumentsList"
  export default {
    name: "OnlineAppDocuments",
    data(){
      return{
        showImg:"OnlineAppInfSearch",
        addClass:"OnlineAppInfSearch",
        breadcrumb:"OnlineAppDocuments"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppInfSearchNavList:OnlineAppInfSearchNavList,
      OnlineAppDocumentsList:OnlineAppDocumentsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppDocuments{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .OnlineAppDocuments-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .OnlineAppDocuments-bd-l{
        width: 25%;
        float: left;
      }
      .OnlineAppDocuments-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
