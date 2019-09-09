<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntKPort">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntKPort-bd">
        <div class="policyMntKPort-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntKPort-bd-r">
          <PolicyMntKPortList></PolicyMntKPortList>
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
  import PolicyMntKPortList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntKPortList"
  export default {
    name: "PolicyMntKPort",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntKPort",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntKPortList:PolicyMntKPortList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntKPort{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntKPort-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntKPort-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntKPort-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
