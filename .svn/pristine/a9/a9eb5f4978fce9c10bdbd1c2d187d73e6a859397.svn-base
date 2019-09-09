<template>
  <div class="ExistApply">
    <ServiceHomeTop></ServiceHomeTop>
    <div class="ExistApplyAll">
      <div class="ExistApplyAll-l">
        <ServiceHomeNavList :parentToChild="addClass"></ServiceHomeNavList>
      </div>
      <div class="ExistApplyAll-r">
        <ExistApplyList></ExistApplyList>
      </div>

    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import ServiceHomeTop from "../../.././components/SpecialFundCommon/ServiceHomeTop"
  import ServiceHomeNavList from "../../.././components/SpecialFundCommon/ServiceHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import ExistApplyList from "../../.././components/SpecialFundCommon/Service/ExistApplyList"

  export default {
    name: "ExistApply",
    data(){
      return{
        addClass:"ExistApply",

      }
    },
    components: {
      ServiceHomeTop:ServiceHomeTop,
      ServiceHomeNavList:ServiceHomeNavList,
      FundFooter:FundFooter,
      ExistApplyList:ExistApplyList
    },
    created:function () {


    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .ExistApply{
    width: 100%;
    background: #ffffff;
    .ExistApplyAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .ExistApplyAll-l{
        width: 20%;
        float: left;
      }
      .ExistApplyAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
