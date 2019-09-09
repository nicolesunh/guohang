<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav></PolicyMntNav>
    <div class="policyMntShanghaiTaxBureau">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntShanghaiTaxBureau-bd">
        <div class="policyMntShanghaiTaxBureau-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntShanghaiTaxBureau-bd-r">
          <PolicyMntShanghaiTaxBureauList></PolicyMntShanghaiTaxBureauList>
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
  import PolicyMntShanghaiTaxBureauList from "../.././components/PolicyMntCommon/PolicyMntAll/PolicyMntShanghaiTaxBureauList"
  export default {
    name: "PolicyMntShanghaiTaxBureau",
    data(){
      return{
        showImg:"PolicyMntNotice",
        breadcrumb:"PolicyMntShanghaiTaxBureau",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntShanghaiTaxBureauList:PolicyMntShanghaiTaxBureauList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntShanghaiTaxBureau{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntShanghaiTaxBureau-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntShanghaiTaxBureau-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntShanghaiTaxBureau-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
