<template>
     <div class="FundHomeTop">
       <div class="FundHomeTop-All">
            <span class="FundHomeTop-All-title">上海国际航运中心建设专项资金申请</span>
            <span class="FundHomeTop-All-Dropdown" v-if="viewShows">
                 <el-dropdown trigger="click">
                    <span class="el-dropdown-link" >
                        <i class="el-icon-user"></i>
                           {{userName}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item  @click.native="logOut()">退出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
            </span>
            <span class="FundHomeTop-All-SY" @click="toPush1()">国航网首页</span>
            <span class="FundHomeTop-All-service" v-if="status=='admin'" @click="toPush2()">航运服务</span>
       </div>

     </div>
</template>

<script>
    export default {
        name: "FundHomeTop",
        data(){
          return{
            status:null,
            userName:"",
            viewShows:false
          }
        },
        created(){
          this.isShow();
        },
        methods:{
          isShow:function(){
            this.status = this.$store.state.common.status;
            this.userName = this.$store.state.common.userName;
            if(this.$store.state.common.userName  == "" || this.$store.state.common.userName  == null){
              this.viewShows = false;
            }else {
              this.viewShows = true
            }
          },
          toPush1:function () {
            this.$router.push({
              name: 'IndexHome',
              path:"/",
            })
          },
          toPush2:function () {
            this.$router.push({
              name: 'NewService',
              path:"/p/fund/public/service",
            })
          },
          logOut:function () {
            this.$store.commit('removeUserName'); //清除用户名
            this.$store.commit('removeManageToken');  //token
            this.$router.push({
              name: 'IndexHome',
              path:"/",
            })
          }
        }
    }
</script>
u
<style lang = scss scoped>
  .FundHomeTop{
    width: 100%;
    background-color: #fff;
    box-shadow: 0 5px 10px #d6e7f7;
    .FundHomeTop-All{
      /*width: 1060px;*/
      width: 93%;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      background-image: url("../.././assets/img/fundlogo.png");
      background-repeat: no-repeat;
      background-position-x: 0;
      background-position-y: 12px;

      .FundHomeTop-All-title{
        color: #2258C2;
        font-size: 14px;
        margin-left: 55px;
      }
      .FundHomeTop-All-Dropdown{
        float: right;
        color: #1a1a1a;
        cursor: pointer;
        color: #2258C2;
        font-size: 14px;
      }
      .FundHomeTop-All-SY{
        float: right;
        color: #1a1a1a;
        font-size: 14px;
        padding: 0 25px;
        cursor: pointer;
      }
      .FundHomeTop-All-service{
        float: right;
        color: #1a1a1a;
        font-size: 14px;
        cursor: pointer;
      }

    }

  }
</style>
