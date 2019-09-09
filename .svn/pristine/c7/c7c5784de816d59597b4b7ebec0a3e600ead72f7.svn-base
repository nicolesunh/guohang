<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterLook">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterLook-bd">
        <InfCenterLook1></InfCenterLook1>
        <InfCenterLook2></InfCenterLook2>
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
  import InfCenterLook1 from "../.././components/InfCenterCommon/InfCenterLook/InfCenterLook1"
  import InfCenterLook2 from "../.././components/InfCenterCommon/InfCenterLook/InfCenterLook2"
  export default {
    name: "InfCenterLook",
    data(){
      return{
        showImg:"InfCenterLook",
        addClass:"InfCenterLook",
        breadcrumb:"InfCenterLook"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterLook1:InfCenterLook1,
      InfCenterLook2:InfCenterLook2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterLook{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterLook-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
