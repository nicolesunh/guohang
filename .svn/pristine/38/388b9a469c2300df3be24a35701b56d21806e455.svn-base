<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntFinance">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntFinance-bd">
        <div class="policyMntFinance-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntFinance-bd-r">
          <PolicyMntAviationList></PolicyMntAviationList>
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
  import PolicyMntAviationList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntAviationList"
  export default {
    name: "PolicyFinance",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyFinance",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntAviationList:PolicyMntAviationList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntFinance{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntFinance-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntFinance-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntFinance-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
