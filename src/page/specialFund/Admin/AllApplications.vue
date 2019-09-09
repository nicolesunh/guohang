<template>
  <div class="AllApplications">
    <FundHomeTop></FundHomeTop>
    <div class="AllApplicationsAll">
      <div class="AllApplicationsAll-l">
        <FundHomeNavList :parentToChild="addClass"></FundHomeNavList>
      </div>
      <div class="AllApplicationsAll-r">
        <AllApplicationsList></AllApplicationsList>
      </div>

    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import FundHomeTop from "../../.././components/SpecialFundCommon/FundHomeTop"
  import FundHomeNavList from "../../.././components/SpecialFundCommon/FundHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import AllApplicationsList from "../../.././components/SpecialFundCommon/Admin/AllApplicationsList"

  export default {
    name: "AllApplications",
    data(){
      return{
        addClass:"AllApplications",

      }
    },
    components: {
      FundHomeTop:FundHomeTop,
      FundHomeNavList:FundHomeNavList,
      FundFooter:FundFooter,
      AllApplicationsList:AllApplicationsList
    },
    created:function () {
        if(this.$store.state.common.status != 'admin'){
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
  .AllApplications{
    width: 100%;
    background: #ffffff;
    .AllApplicationsAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .AllApplicationsAll-l{
        width: 20%;
        float: left;
      }
      .AllApplicationsAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
