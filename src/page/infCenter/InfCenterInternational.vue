<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterInternational">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterInternational-bd">
        <InfCenterInternational1></InfCenterInternational1>
        <InfCenterInternational2></InfCenterInternational2>
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
  import InfCenterInternational1 from "../.././components/InfCenterCommon/InfCenterInternational/InfCenterInternational1"
  import InfCenterInternational2 from "../.././components/InfCenterCommon/InfCenterInternational/InfCenterInternational2"
  export default {
    name: "InfCenterInternational",
    data(){
      return{
        showImg:"InfCenterInternational",
        addClass:"InfCenterInternational",
        breadcrumb:"InfCenterInternational"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterInternational1:InfCenterInternational1,
      InfCenterInternational2:InfCenterInternational2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterInternational{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterInternational-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
