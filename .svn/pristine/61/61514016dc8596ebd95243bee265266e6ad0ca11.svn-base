<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterDomestic">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterDomestic-bd">
        <InfCenterDomestic1></InfCenterDomestic1>
        <InfCenterDomestic2></InfCenterDomestic2>
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
  import InfCenterDomestic1 from "../.././components/InfCenterCommon/InfCenterDomestic/InfCenterDomestic1"
  import InfCenterDomestic2 from "../.././components/InfCenterCommon/InfCenterDomestic/InfCenterDomestic2"
  export default {
    name: "InfCenterDomestic",
    data(){
      return{
        showImg:"InfCenterDomestic",
        addClass:"InfCenterDomestic",
        breadcrumb:"InfCenterDomestic"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterDomestic1:InfCenterDomestic1,
      InfCenterDomestic2:InfCenterDomestic2

    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterDomestic{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterDomestic-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
