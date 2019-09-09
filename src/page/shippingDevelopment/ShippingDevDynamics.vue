<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShippingDevNav :parentToChild="addClass"></ShippingDevNav>
    <div class="shippingDevDynamics">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="shippingDevDynamics-bd">
          <ShipMarketDryCargoList></ShipMarketDryCargoList>
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
  import ShipMarketDryCargoList from "../.././components/ShippingDevCommon/ShippingDevDynamics/ShippingDevDynamicsList"

  export default {
    name: "ShippingDevDynamics",
    data(){
      return{
        showImg:"ShippingDevDynamics",
        addClass:"ShippingDevDynamics",
        breadcrumb:"ShippingDevDynamics"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShippingDevNav:ShippingDevNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      ShipMarketDryCargoList:ShipMarketDryCargoList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .shippingDevDynamics{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shippingDevDynamics-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
  }
</style>
