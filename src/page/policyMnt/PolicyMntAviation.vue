<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntAviation">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntAviation-bd">
        <div class="policyMntAviation-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntAviation-bd-r">
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
    name: "PolicyMntAviation",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntAviation",
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
  .policyMntAviation{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntAviation-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntAviation-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntAviation-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
