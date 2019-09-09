<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntCommunications">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntCommunications-bd">
        <div class="policyMntCommunications-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntCommunications-bd-r">
          <PolicyMntCommunicationsList></PolicyMntCommunicationsList>
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
  import PolicyMntCommunicationsList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntCommunicationsList"
  export default {
    name: "PolicyMntCommunications",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntCommunications",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntCommunicationsList:PolicyMntCommunicationsList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntCommunications{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntCommunications-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntCommunications-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntCommunications-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
