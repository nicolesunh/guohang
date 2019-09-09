<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntGPort">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntGPort-bd">
        <div class="policyMntGPort-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntGPort-bd-r">
          <PolicyMntGPortList></PolicyMntGPortList>
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
  import PolicyMntGPortList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntGPortList"
  export default {
    name: "PolicyMntGPort",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntGPort",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntGPortList:PolicyMntGPortList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntGPort{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntGPort-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntGPort-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntGPort-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
