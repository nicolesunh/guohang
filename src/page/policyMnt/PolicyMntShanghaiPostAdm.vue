<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntShanghaiPostAdm">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntShanghaiPostAdm-bd">
        <div class="policyMntShanghaiPostAdm-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntShanghaiPostAdm-bd-r">
          <PolicyMntShanghaiPostAdmList></PolicyMntShanghaiPostAdmList>
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
  import PolicyMntShanghaiPostAdmList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntShanghaiPostAdmList"
  export default {
    name: "PolicyMntShanghaiPostAdm",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntShanghaiPostAdm",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntShanghaiPostAdmList:PolicyMntShanghaiPostAdmList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntShanghaiPostAdm{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntShanghaiPostAdm-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntShanghaiPostAdm-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntShanghaiPostAdm-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
