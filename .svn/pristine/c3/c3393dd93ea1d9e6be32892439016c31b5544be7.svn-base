<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="PolicyMntTaxation">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="PolicyMntTaxation-bd">
        <div class="PolicyMntTaxation-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="PolicyMntTaxation-bd-r">
          <PolicyMntTaxationList></PolicyMntTaxationList>
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
  import PolicyMntTaxationList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntTaxationList"
  export default {
    name: "PolicyMntTaxation",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntTaxation",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntTaxationList:PolicyMntTaxationList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .PolicyMntTaxation{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .PolicyMntTaxation-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .PolicyMntTaxation-bd-l{
        width: 25%;
        float: left;
      }
      .PolicyMntTaxation-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
