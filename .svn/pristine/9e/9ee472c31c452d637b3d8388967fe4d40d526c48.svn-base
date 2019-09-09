<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterShanghai">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="infCenterShanghai-bd">
        <InfCenterShanghai1></InfCenterShanghai1>
        <InfCenterShanghai2></InfCenterShanghai2>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>

  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import InfCenterShanghai1 from "../.././components/InfCenterCommon/InfCenterShanghai/InfCenterShanghai1"
  import InfCenterShanghai2 from "../.././components/InfCenterCommon/InfCenterShanghai/InfCenterShanghai2"
  export default {
    name: "InfCenterShanghai",
    data(){
      return{
        showImg:"InfCenterShanghai",
        addClass:"InfCenterShanghai",
        breadcrumb:"InfCenterShanghai"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      InfCenterShanghai1:InfCenterShanghai1,
      InfCenterShanghai2:InfCenterShanghai2
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterShanghai{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterShanghai-bd{
      padding: 40px 60px;
      padding-top: 15px;
    }
  }
</style>
