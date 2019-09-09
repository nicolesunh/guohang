<template>
  <div class="NewApplication">
    <FundHomeTop></FundHomeTop>
    <div class="NewApplicationAll">
      <div class="NewApplicationAll-l">
        <FundHomeNavList :parentToChild="addClass"></FundHomeNavList>
      </div>
      <div class="NewApplicationAll-r">
         <NewApplicationList></NewApplicationList>
      </div>

    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import FundHomeTop from "../../.././components/SpecialFundCommon/FundHomeTop"
  import FundHomeNavList from "../../.././components/SpecialFundCommon/FundHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import NewApplicationList from "../../.././components/SpecialFundCommon/CollectiveTransportation/NewApplicationList"
  export default {
    name: "NewApplication",
    data(){
      return{
        addClass:"NewApplication"
      }
    },
    components: {
      FundHomeTop:FundHomeTop,
      FundHomeNavList:FundHomeNavList,
      FundFooter:FundFooter,
      NewApplicationList:NewApplicationList
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
  .NewApplication{
    width: 100%;
    background: #ffffff;
    .NewApplicationAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .NewApplicationAll-l{
        width: 20%;
        float: left;
      }
      .NewApplicationAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
