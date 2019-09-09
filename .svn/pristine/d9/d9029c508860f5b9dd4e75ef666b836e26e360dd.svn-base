<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntShanghaiGovernment">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntShanghaiGovernment-bd">
        <div class="policyMntShanghaiGovernment-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntShanghaiGovernment-bd-r">
          <PolicyMntShanghaiGovernmentList></PolicyMntShanghaiGovernmentList>
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
  import PolicyMntShanghaiGovernmentList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntShanghaiGovernmentList"
  export default {
    name: "PolicyMntShanghaiGovernment",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntShanghaiGovernment",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntShanghaiGovernmentList:PolicyMntShanghaiGovernmentList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntShanghaiGovernment{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntShanghaiGovernment-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntShanghaiGovernment-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntShanghaiGovernment-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
