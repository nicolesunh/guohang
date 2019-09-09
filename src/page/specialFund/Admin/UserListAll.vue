<template>
  <div class="UserList">
    <FundHomeTop></FundHomeTop>
    <div class="UserListAll">
      <div class="UserListAll-l">
        <FundHomeNavList :parentToChild="addClass"></FundHomeNavList>
      </div>
      <div class="UserListAll-r">
        <UserListAllList></UserListAllList>
      </div>

    </div>
    <FundFooter></FundFooter>
  </div>
</template>

<script>
  import FundHomeTop from "../../.././components/SpecialFundCommon/FundHomeTop"
  import FundHomeNavList from "../../.././components/SpecialFundCommon/FundHomeNavList"
  import FundFooter from "../../.././components/HomeCommon/FundFooter"
  import UserListAllList from "../../.././components/SpecialFundCommon/Admin/UserListAllList"

  export default {
    name: "UserListAll",
    data(){
      return{
        addClass:"UserListAll",

      }
    },
    components: {
      FundHomeTop:FundHomeTop,
      FundHomeNavList:FundHomeNavList,
      FundFooter:FundFooter,
      UserListAllList:UserListAllList
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
  .UserList{
    width: 100%;
    background: #ffffff;
    .UserListAll{
      /*width: 1060px;*/
      width: 90%;
      margin: 0 auto;
      padding: 40px 60px;
      padding-top: 15px;
      margin-top: 25px;
      min-height: 700px;
      overflow: hidden;
      .UserListAll-l{
        width: 20%;
        float: left;
      }
      .UserListAll-r{
        width: 80%;
        float: left;
        min-height: 750px;
        box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      }
    }
  }

</style>
