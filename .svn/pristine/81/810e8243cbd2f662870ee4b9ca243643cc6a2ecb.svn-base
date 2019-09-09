<template>
  <div class="logRegNav">
    <div class="logRegAll">
        <div class="log-logo">
            <img src="../.././assets/img/loglogo.png" @click="click_slef()" alt="" style="cursor: pointer">
        </div>
        <div class="log-menu">
           <span>
             <router-link to="/" class="log-menu-a1">上海国际航运中心网首页</router-link>
           </span>
           <span class="wee-line"></span>
           <span @click="siteMapClick()">网站地图</span>
           <span :class="{active:valueFromParent=='Login'}" @click="logClick()">登录</span>
           <span :class="{active:valueFromParent=='Register'}" @click="regClick()">注册</span>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LogRegNav",
        data(){
          return{
            valueFromParent:'', //用来接收props
            viewShow:true,

          }
        },
        props: ['parentToChild'],
        created(){
          this.valueFromParent = this.parentToChild;
        },
        methods:{
           click_slef:function(){
               // console.log(this.$route.path)
               // var _this = this;
               // _this.$router.push(this.$route.path)
               //刷新网页
               // window.location.reload();
               this.$router.go(0);
           },
           logClick:function () {
               var _this = this;
               _this.$router.push({
                 path: '/login',
                 name:'Login'
               })
               /*setTimeout(function () {
                 this.shows = 1;
               },200)*/
           },
          //点击跳转到注册页面
           regClick:function () {
             var _this = this;
             _this.$router.push({
               path: '/register',
               name:'Register'
             })
             /*setTimeout(function () {
               this.shows = 2;
             },200)*/
           },
          //点击跳转到网站地图
          siteMapClick:function () {
            var _this = this;
            _this.$router.push({
              path: '/siteMap',
              name:'SiteMap'
            })
          }
        }
    }
</script>

<style lang = scss scoped>
  .logRegNav{
    width: 100%;
    height: 95px;
    background-color: #ffffff;
  }
  .logRegAll{
    width: 970px;
    margin: 0 auto;
    overflow: hidden;
  }
  .logRegNav{
    .log-logo{
      float: left;
    }
    .wee-line {
      background: url(../.././assets/img/line.png) 0px 2px no-repeat;
      width: 1px;
      height: 16px;
      float: left;
      padding: 0 10px 0 10px;
    }
    .log-menu{
      float: right;
      width: auto;
      margin-left: 20px;
      margin-top: 55px;
      span{
          float: left;
          margin-right: 15px;
          font-size: 14px;
          color: #1e1e1e;
          text-decoration: none;
          cursor:pointer;
      }
      .log-menu-a1{
         color: #2258c2 !important;
      }


    }
  }
  .active{
     color: #2258c2 !important;
  }
</style>
