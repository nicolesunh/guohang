<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntWaterway">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntWaterway-bd">
        <div class="policyMntWaterway-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntWaterway-bd-r">
          <PolicyMntWaterwayList></PolicyMntWaterwayList>
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
  import PolicyMntWaterwayList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntWaterwayList"
  export default {
    name: "PolicyMntWaterway",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntWaterway",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntWaterwayList:PolicyMntWaterwayList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntWaterway{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntWaterway-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntWaterway-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntWaterway-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
