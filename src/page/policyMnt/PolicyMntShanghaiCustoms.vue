<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntShanghaiCustoms">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntShanghaiCustoms-bd">
        <div class="policyMntShanghaiCustoms-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntShanghaiCustoms-bd-r">
          <PolicyMntShanghaiCustomsList></PolicyMntShanghaiCustomsList>
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
  import PolicyMntShanghaiCustomsList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntShanghaiCustomsList"
  export default {
    name: "PolicyMntShanghaiCustoms",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntShanghaiCustoms",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntShanghaiCustomsList:PolicyMntShanghaiCustomsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntShanghaiCustoms{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntShanghaiCustoms-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntShanghaiCustoms-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntShanghaiCustoms-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
