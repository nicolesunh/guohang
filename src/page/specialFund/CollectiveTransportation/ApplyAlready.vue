<template>
    <div class="ApplyAlready">
      <FundHomeTop></FundHomeTop>
      <div class="ApplyAlreadyAll">
         <div class="ApplyAlreadyAll-l">
             <FundHomeNavList :parentToChild="addClass"></FundHomeNavList>
         </div>
          <div class="ApplyAlreadyAll-r">
             <ApplyAlreadyList></ApplyAlreadyList>
          </div>

      </div>
      <FundFooter></FundFooter>
    </div>
</template>

<script>
  import FundHomeTop from "../../.././components/SpecialFundCommon/FundHomeTop"
  import FundHomeNavList from "../../.././components/SpecialFundCommon/FundHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import ApplyAlreadyList from "../../.././components/SpecialFundCommon/CollectiveTransportation/ApplyAlreadyList"

    export default {
        name: "ApplyAlready",
        data(){
          return{
            addClass:"ApplyAlready",

          }
        },
        components: {
          FundHomeTop:FundHomeTop,
          FundHomeNavList:FundHomeNavList,
          FundFooter:FundFooter,
          ApplyAlreadyList:ApplyAlreadyList
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
  .ApplyAlready{
     width: 100%;
     background: #ffffff;
    .ApplyAlreadyAll{
      /*width: 1060px;*/
       width: 90%;
       margin: 0 auto;
       padding: 40px 60px;
       padding-top: 15px;
       margin-top: 25px;
       min-height: 700px;
       overflow: hidden;
       .ApplyAlreadyAll-l{
         width: 20%;
         float: left;
       }
      .ApplyAlreadyAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
