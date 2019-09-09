<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterShipping">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterShipping-bd">
        <InfCenterShipping1></InfCenterShipping1>
        <InfCenterShipping2></InfCenterShipping2>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import InfCenterShipping1 from "../.././components/InfCenterCommon/InfCenterShipping/InfCenterShipping1"
  import InfCenterShipping2 from "../.././components/InfCenterCommon/InfCenterShipping/InfCenterShipping2"
  export default {
    name: "InfCenterShipping",
    data(){
      return{
        showImg:"InfCenterShipping",
        addClass:"InfCenterShipping",
        breadcrumb:"InfCenterShipping"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterShipping1:InfCenterShipping1,
      InfCenterShipping2:InfCenterShipping2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterShipping{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterShipping-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
