<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterTechnology">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterTechnology-bd">
        <InfCenterTechnology1></InfCenterTechnology1>
        <InfCenterTechnology2></InfCenterTechnology2>
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
  import InfCenterTechnology1 from "../.././components/InfCenterCommon/InfCenterTechnology/InfCenterTechnology1"
  import InfCenterTechnology2 from "../.././components/InfCenterCommon/InfCenterTechnology/InfCenterTechnology2"
  export default {
    name: "InfCenterTechnology",
    data(){
      return{
        showImg:"InfCenterTechnology",
        addClass:"InfCenterTechnology",
        breadcrumb:"InfCenterTechnology"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterTechnology1:InfCenterTechnology1,
      InfCenterTechnology2:InfCenterTechnology2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterTechnology{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterTechnology-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
