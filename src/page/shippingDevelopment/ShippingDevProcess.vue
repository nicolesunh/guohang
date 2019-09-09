<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShippingDevNav :parentToChild="addClass"></ShippingDevNav>
    <div class="shippingDevProcess">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shippingDevProcess-bd">
        <div class="shippingDevProcess-bd-l">
          <ShippingDevProcessList></ShippingDevProcessList>
        </div>
        <div class="shippingDevProcess-bd-r">
          <NewArticle></NewArticle>
          <LabelCloud></LabelCloud>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import ShippingDevNav from "../.././components/ShippingDevCommon/ShippingDevNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import ShippingDevProcessList from "../.././components/ShippingDevCommon/ShippingDevProcess/ShippingDevProcessList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  export default {
    name: "ShippingDevProcess",
    data(){
      return{
        showImg:"ShippingDevProcess",
        addClass:"ShippingDevProcess",
        breadcrumb:"ShippingDevProcess"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShippingDevNav:ShippingDevNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShippingDevProcessList:ShippingDevProcessList,
      NewArticle:NewArticle,
      LabelCloud:LabelCloud,
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .shippingDevProcess{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shippingDevProcess-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shippingDevProcess-bd-l{
      width: 75%;
      float: left;
    }
    .shippingDevProcess-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
