<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav :parentToChild="addClass"></PolicyMntNav>
    <div class="policyMntNotice">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntNotice-bd">
        <div class="policyMntNotice-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntNotice-bd-r">
          <PolicyMntNoticeList></PolicyMntNoticeList>
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
  import PolicyMntNoticeList from "../.././components/PolicyMntCommon/PolicyMntNotice/PolicyMntNoticeList"
  export default {
    name: "PolicyMntNotice",
    data(){
      return{
        showImg:"PolicyMntNotice",
        addClass:"PolicyMntNotice",
        breadcrumb:"PolicyMntNotice",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntNoticeList:PolicyMntNoticeList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntNotice{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntNotice-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntNotice-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntNotice-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
