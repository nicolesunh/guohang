<template>
  <div class="MyMessage">
    <FundHomeTop></FundHomeTop>
    <div class="MyMessageAll">
      <div class="MyMessageAll-l">
         <FundHomeNavList :parentToChild="addClass"></FundHomeNavList>
      </div>
      <div class="MyMessageAll-r">
        <MyMessageList></MyMessageList>
      </div>

    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import FundHomeTop from "../../.././components/SpecialFundCommon/FundHomeTop"
  import FundHomeNavList from "../../.././components/SpecialFundCommon/FundHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import MyMessageList from "../../.././components/SpecialFundCommon/CollectiveTransportation/MyMessageList"
  export default {
    name: "MyMessage",
    data(){
      return{
        addClass:"MyMessage"
      }
    },
    components: {
      FundHomeTop:FundHomeTop,
      FundHomeNavList:FundHomeNavList,
      FundFooter:FundFooter,
      MyMessageList:MyMessageList
    },
    created:function () {
      if(this.$store.state.common.status == 'admin'){
        this.$router.push({
          name: 'FundLogin',
          path:"/fundLogin"
        })
      }else {

      }
    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .MyMessage{
    width: 100%;
    background: #ffffff;
    .MyMessageAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .MyMessageAll-l{
        width: 20%;
        float: left;
      }
      .MyMessageAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
