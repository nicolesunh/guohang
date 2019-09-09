<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntLand">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntLand-bd">
        <div class="policyMntLand-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntLand-bd-r">
          <PolicyMntLandList></PolicyMntLandList>
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
  import PolicyMntLandList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntLandList"
  export default {
    name: "PolicyMntLand",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntLand",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntLandList:PolicyMntLandList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntLand{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntLand-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntLand-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntLand-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
