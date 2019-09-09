<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntMaritime">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntMaritime-bd">
        <div class="policyMntMaritime-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntMaritime-bd-r">
          <PolicyMntMaritimeList></PolicyMntMaritimeList>
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
  import PolicyMntMaritimeList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntMaritimeList"
  export default {
    name: "PolicyMntMaritime",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntMaritime",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntMaritimeList:PolicyMntMaritimeList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntMaritime{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntMaritime-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntMaritime-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntMaritime-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
