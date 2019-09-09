<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterPort">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterPort-bd">
        <InfCenterPort1></InfCenterPort1>
        <InfCenterPort2></InfCenterPort2>
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
  import InfCenterPort1 from "../.././components/InfCenterCommon/InfCenterPort/InfCenterPort1"
  import InfCenterPort2 from "../.././components/InfCenterCommon/InfCenterPort/InfCenterPort2"
  export default {
    name: "InfCenterPort",
    data(){
      return{
        showImg:"InfCenterPort",
        addClass:"InfCenterPort",
        breadcrumb:"InfCenterPort"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterPort1:InfCenterPort1,
      InfCenterPort2:InfCenterPort2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterPort{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterPort-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
