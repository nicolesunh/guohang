<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav :parentToChild="addClass"></PolicyMntNav>
    <div class="policyMntUnscramble">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntUnscramble-bd">
        <div class="policyMntUnscramble-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntUnscramble-bd-r">
          <PolicyMntUnscrambleList></PolicyMntUnscrambleList>
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
  import PolicyMntUnscrambleList from "../.././components/PolicyMntCommon/PolicyMntUnscramble/PolicyMntUnscrambleList"
  export default {
    name: "PolicyMntUnscramble",
    data(){
      return{
        showImg:"PolicyMntUnscramble",
        addClass:"PolicyMntUnscramble",
        breadcrumb:"PolicyMntUnscramble",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntUnscrambleList:PolicyMntUnscrambleList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntUnscramble{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntUnscramble-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntUnscramble-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntUnscramble-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>

