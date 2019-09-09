<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterService">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterService-bd">
        <InfCenterService1></InfCenterService1>
        <InfCenterService2></InfCenterService2>
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
  import InfCenterService1 from "../.././components/InfCenterCommon/InfCenterService/InfCenterService1"
  import InfCenterService2 from "../.././components/InfCenterCommon/InfCenterService/InfCenterService2"
  export default {
    name: "InfCenterService",
    data(){
      return{
        showImg:"InfCenterService",
        addClass:"InfCenterService",
        breadcrumb:"InfCenterService"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterService1:InfCenterService1,
      InfCenterService2:InfCenterService2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterService{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterService-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
