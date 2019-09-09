<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntCivilChina">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntCivilChina-bd">
        <div class="policyMntCivilChina-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntCivilChina-bd-r">
          <PolicyMntCivilChinaList></PolicyMntCivilChinaList>
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
  import PolicyMntCivilChinaList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntCivilChinaList"
  export default {
    name: "PolicyMntCivilChina",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntCivilChina",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntCivilChinaList:PolicyMntCivilChinaList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntCivilChina{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntCivilChina-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntCivilChina-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntCivilChina-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
