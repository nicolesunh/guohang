<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav :parentToChild="addClass"></PolicyMntNav>
    <div class="policyMntPolicy">
       <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntPolicy-bd">
          <div class="policyMntPolicy-bd-l">
            <PolicyMntNavList></PolicyMntNavList>
          </div>
          <div class="policyMntPolicy-bd-r">
            <PolicyMntPolicyList></PolicyMntPolicyList>
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
  import PolicyMntPolicyList from "../.././components/PolicyMntCommon/PolicyMntPolicy/PolicyMntPolicyList"
  export default {
    name: "PolicyMntPolicy",
    data(){
      return{
        showImg:"PolicyMntPolicy",
        addClass:"PolicyMntPolicy",
        breadcrumb:"PolicyMntPolicy",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntPolicyList:PolicyMntPolicyList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntPolicy{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntPolicy-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntPolicy-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntPolicy-bd-r{
        width: 75%;
        float: right;
      }
    }

  }
</style>
