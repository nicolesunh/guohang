<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntTrade">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntTrade-bd">
        <div class="policyMntTrade-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntTrade-bd-r">
          <PolicyMntTradeList></PolicyMntTradeList>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import PolicyMntNav from "../.././components/PolicyMntCommon/PolicyMntNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import PolicyMntNavList from "../.././components/PolicyMntCommon/PolicyMntNavList"
  import PolicyMntTradeList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntTradeList"
  export default {
    name: "PolicyMntTrade",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntTrade",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntTradeList:PolicyMntTradeList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntTrade{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntTrade-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntTrade-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntTrade-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
