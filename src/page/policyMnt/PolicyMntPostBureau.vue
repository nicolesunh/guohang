<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntPostBureau">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntPostBureau-bd">
        <div class="policyMntPostBureau-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntPostBureau-bd-r">
          <PolicyMntPostBureauList></PolicyMntPostBureauList>
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
  import PolicyMntPostBureauList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntPostBureauList"
  export default {
    name: "PolicyMntPostBureau",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntPostBureau",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntPostBureauList:PolicyMntPostBureauList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntPostBureau{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntPostBureau-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntPostBureau-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntPostBureau-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
