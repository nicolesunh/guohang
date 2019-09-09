<template>
  <div class="NewsletterTop">
    <div class="NewsletterTopAll">
      <div class="NewsletterTopAllTitle">
         信息专报-文章列表
      </div>
      <div class="log2">
        <img src="../../.././assets/img/usericon.png" alt="" class="userIconImg">
        <span style="color: #ff8a00" class="userIconTitle">
             {{userName}}
         </span>
         <span class="userIconOut">
            <el-dropdown trigger="click">
                <i class="el-icon-arrow-down el-icon--right"></i>
                <el-dropdown-menu slot="dropdown" @click.native="logOut()">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
         </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsletterTop",
    data(){
      return{
        userName:"王培杰"
      }
    },

    created:function () {

    },
    methods:{
      logOut:function () {
        this.$store.commit('removeUserName');  //清除用户名
        this.$store.commit('removeManageToken');  //token
        this.$router.push({
          name: 'Report',
          path:"/p/report",
        })
        location.reload();//刷新下页面
      }
    }

  }
</script>

<style lang = scss scoped>
  .NewsletterTop{
    background: #ffffff;
    border-bottom:1px solid #E5E5E5;
    .NewsletterTopAll{
      width: 1250px;
      margin: 0 auto;
      height: 60px;
      overflow: hidden;
      .NewsletterTopAllTitle{
        color: #5e5e5e;
        background-color: transparent;
        margin-top: 5px;
        float: left;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
        font-weight: bold;
      }
      .log2{
        float: right;
        display: inline-block;
        padding-right: 60px;
        overflow: hidden;
        margin-top: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        .userIconImg{
          cursor: pointer;
          margin: 0 3px;
        }
        .userIconTitle{
          cursor: pointer;
          margin: 0 3px;
        }
        .userIconOut{
          cursor: pointer;
          margin: 0 3px;
        }
      }
    }
  }

</style>
