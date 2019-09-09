<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShippingDevNav :parentToChild="addClass"></ShippingDevNav>
    <div class="shippingDevSupport">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shippingDevSupport-bd">
        <div class="shippingDevSupport-bd-l">
          <ShippingDevSupportList></ShippingDevSupportList>
        </div>
        <div class="shippingDevSupport-bd-r">
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
  import ShippingDevSupportList from "../.././components/ShippingDevCommon/ShippingDevSupport/ShippingDevSupportList"
  import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
  import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
  export default {
    name: "ShippingDevSupport",
    data(){
      return{
        showImg:"ShippingDevSupport",
        addClass:"ShippingDevSupport",
        breadcrumb:"ShippingDevSupport"
    }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShippingDevNav:ShippingDevNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShippingDevSupportList:ShippingDevSupportList,
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
  .shippingDevSupport{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shippingDevSupport-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
    .shippingDevSupport-bd-l{
      width: 75%;
      float: left;
    }
    .shippingDevSupport-bd-r{
      width: 25%;
      float: right;

    }
  }
</style>
