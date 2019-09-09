<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppBulletin">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppBulletin-bd">
        <div class="onlineAppBulletin-bd-l">
          <OnlineAppBulletin1></OnlineAppBulletin1>
        </div>
        <div class="onlineAppBulletin-bd-r">
          <OnlineAppBulletin2></OnlineAppBulletin2>
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
  import OnlineAppBulletin1 from "../.././components/OnlineApplicationCommon/OnlineAppBulletin/OnlineAppBulletin1"
  import OnlineAppBulletin2 from "../.././components/OnlineApplicationCommon/OnlineAppBulletin/OnlineAppBulletin2"
  export default {
    name: "OnlineAppBulletin",
    data(){
      return{
        showImg:"OnlineAppBulletin",
        addClass:"OnlineAppBulletin",
        breadcrumb:"OnlineAppBulletin"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      OnlineAppBulletin1:OnlineAppBulletin1,
      OnlineAppBulletin2:OnlineAppBulletin2

    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .onlineAppBulletin{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppBulletin-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppBulletin-bd-l{
        width: 75%;
        float: left;
      }
      .onlineAppBulletin-bd-r{
        width: 25%;
        float: right;
      }
    }
  }
</style>
