<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntCustoms">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntCustoms-bd">
        <div class="policyMntCustoms-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntCustoms-bd-r">
          <PolicyMntCustomsList></PolicyMntCustomsList>
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
  import PolicyMntCustomsList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntCustomsList"
  export default {
    name: "PolicyMntCustoms",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntCustoms",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntCustomsList:PolicyMntCustomsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntCustoms{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntCustoms-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntCustoms-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntCustoms-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
