<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterEncy">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterEncy-bd">
        <InfCenterEncy1></InfCenterEncy1>
        <InfCenterEncy2></InfCenterEncy2>
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
  import InfCenterEncy1 from "../.././components/InfCenterCommon/InfCenterEncy/InfCenterEncy1"
  import InfCenterEncy2 from "../.././components/InfCenterCommon/InfCenterEncy/InfCenterEncy2"
  export default {
    name: "InfCenterEncy",
    data(){
      return{
        showImg:"InfCenterEncy",
        addClass:"InfCenterEncy",
        breadcrumb:"InfCenterEncy"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterEncy1:InfCenterEncy1,
      InfCenterEncy2:InfCenterEncy2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterEncy{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterEncy-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
