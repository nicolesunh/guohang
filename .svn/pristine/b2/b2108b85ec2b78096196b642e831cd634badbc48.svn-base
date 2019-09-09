<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterTrade">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterTrade-bd">
        <InfCenterTrade1></InfCenterTrade1>
        <InfCenterTrade2></InfCenterTrade2>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import InfCenterTrade1 from "../.././components/InfCenterCommon/InfCenterTrade/InfCenterTrade1"
  import InfCenterTrade2 from "../.././components/InfCenterCommon/InfCenterTrade/InfCenterTrade2"
  export default {
    name: "InfCenterTrade",
    data(){
      return{
        showImg:"InfCenterTrade",
        addClass:"InfCenterTrade",
        breadcrumb:"InfCenterTrade"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterTrade1:InfCenterTrade1,
      InfCenterTrade2:InfCenterTrade2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterTrade{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterTrade-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
