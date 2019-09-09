<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShipMarketNav :parentToChild="addClass"></ShipMarketNav>
    <div class="shipMarketHome">
      <div class="shipMarketHome-bd">
        <ShipMarketHome1></ShipMarketHome1>
        <ShipMarketHome2></ShipMarketHome2>
        <ShipMarketHome3></ShipMarketHome3>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import ShipMarketNav from "../.././components/ShipMarketCommon/ShipMarketNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import ShipMarketHome1 from "../.././components/ShipMarketCommon/ShipMarketHome/ShipMarketHome1"
  import ShipMarketHome2 from "../.././components/ShipMarketCommon/ShipMarketHome/ShipMarketHome2"
  import ShipMarketHome3 from "../.././components/ShipMarketCommon/ShipMarketHome/ShipMarketHome3"
  export default {
    name: "ShipMarketHome",
    data(){
      return{
        showImg:"ShipMarketHome",
        addClass:"ShipMarketHome",
        dataList2:[]
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShipMarketNav:ShipMarketNav,
      HeadFooter:HeadFooter,
      ShipMarketHome1:ShipMarketHome1,
      ShipMarketHome2:ShipMarketHome2,
      ShipMarketHome3:ShipMarketHome3
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .shipMarketHome{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shipMarketHome-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
    }
  }
</style>
