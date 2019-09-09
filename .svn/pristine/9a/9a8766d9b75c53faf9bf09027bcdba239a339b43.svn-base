<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntChineseGovernment">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntChineseGovernment-bd">
        <div class="policyMntChineseGovernment-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntChineseGovernment-bd-r">
          <PolicyMntChineseGovernmentList></PolicyMntChineseGovernmentList>
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
  import PolicyMntChineseGovernmentList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntChineseGovernmentList"
  export default {
    name: "PolicyMntChineseGovernment",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntChineseGovernment",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntChineseGovernmentList:PolicyMntChineseGovernmentList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntChineseGovernment{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntChineseGovernment-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntChineseGovernment-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntChineseGovernment-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
