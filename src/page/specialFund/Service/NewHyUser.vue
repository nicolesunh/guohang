<template>
  <div class="NewHyUser">
    <ServiceHomeTop></ServiceHomeTop>
    <div class="NewHyUserAll">
      <div class="NewHyUserAll-l">
        <ServiceHomeNavList :parentToChild="addClass"></ServiceHomeNavList>
      </div>
      <div class="NewHyUserAll-r">
        <NewHyUserList></NewHyUserList>
      </div>
    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import ServiceHomeTop from "../../.././components/SpecialFundCommon/ServiceHomeTop"
  import ServiceHomeNavList from "../../.././components/SpecialFundCommon/ServiceHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import NewHyUserList from "../../.././components/SpecialFundCommon/Service/NewHyUserList"

  export default {
    name: "NewHyUser",
    data(){
      return{
        addClass:"NewHyUser",

      }
    },
    components: {
      ServiceHomeTop:ServiceHomeTop,
      ServiceHomeNavList:ServiceHomeNavList,
      FundFooter:FundFooter,
      NewHyUserList:NewHyUserList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .NewHyUser{
    width: 100%;
    background: #ffffff;
    .NewHyUserAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .NewHyUserAll-l{
        width: 20%;
        float: left;
      }
      .NewHyUserAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
