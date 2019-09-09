<template>
     <div class="headTitle">
       <p class="zb">
         <!--判断是否显示上海市国际航运中心建设工作推进小组办公室主办-->
         <router-link to="/aboutUs"  v-if="zbIsShow()" >
             <span :class="{active:valueFromParent=='AboutUs'}">上海市国际航运中心建设工作推进小组办公室主办</span>
         </router-link>
         <!--判断是否显示  上海国际航运中心网首页 资讯中心 航运市场 政策公告 在线应用 航运发展 办事指南-->
           <router-link to="/"  v-if="otherShow()" >
               <span class="active">上海国际航运中心网首页</span>
           </router-link>
           <router-link to="/infCenter/infCenterHome"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>资讯中心</span>
           </router-link>
           <router-link to="/shipMarket/shipMarketHome"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>航运市场</span>
           </router-link>
           <router-link to="/policyMnt/policyMntPolicy"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>政策公告</span>
           </router-link>
           <router-link to="/onlineApplication/onlineAppHome"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>在线应用</span>
           </router-link>
           <router-link to="/shippingDevelopment/shippingDevHome"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>航运发展</span>
           </router-link>
           <router-link to="/handlingGuide"  v-if="otherShow()" >
               <span style="color:#ddd;margin:0 3px;"></span>
               <span>办事指南</span>
           </router-link>
         <!--网站地图一直显示-->
         <router-link to="/siteMap">
            <span style="color:#ddd;margin:0 10px;">|</span>
            <span :class="{active:valueFromParent=='SiteMap'}">网站地图</span>
         </router-link>
         <!--判断是否显示English标题-->
         <a href="http://www.shisc.net/en/" target="_blank"  v-if="valueFromParent =='IndexHome' ">
            <span style="color:#ddd;margin:0 10px;">|</span>
            <span>English</span>
         </a>
         <!--判断是否显示订阅标题-->
         <router-link to="" v-if="dyIsShow()">
            <span style="color:#ddd;margin:0 10px;">|</span>
            <span>订阅</span>
         </router-link>

       </p>
       <p class="log" v-if="viewShow">
         <router-link to="/login">登录</router-link>
         <router-link to="/register">注册</router-link>
       </p>
       <p class="log2" v-if="viewShow2">
           <span class="userIconOut">
              <el-dropdown trigger="click">
                  <span class="el-dropdown-link" >
                        <img src="../.././assets/img/usericon.png" alt="" class="userIconImg" style="margin-top: 5px;vertical-align: top;">
                        <label style="color: #ff8a00" class="userIconTitle">
                           {{userName}}
                        </label>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                  <el-dropdown-menu slot="dropdown" @click.native="logOut()">
                      <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
           </span>
       </p>
     </div>
</template>

<script>
    export default {
        name: "HeadTitle",
        data(){
          return{
            valueFromParent:'', //用来接收props
            viewShow:true,
            viewShow2:false,
            userName:""
          }
        },
        props: ['parentToChild'],
        created(){
          this.valueFromParent = this.parentToChild;
          this.isShow();
          this.dyIsShow();
          this.zbIsShow();
          this.otherShow()
        },
        methods:{
              // 判断是否显示上海市国际航运中心建设工作推进小组办公室主办
              zbIsShow:function(){
                    if(this.valueFromParent =='IndexHome'|| this.valueFromParent =='SiteMap'|| this.valueFromParent =='AboutUs' || this.valueFromParent =='ContactUs'|| this.valueFromParent =='LegalStatement'){
                        return true
                    }else {
                        return false
                    }
               },
              // 判断是否显示订阅标题
              dyIsShow:function(){
                if(this.valueFromParent =='SiteMap'|| this.valueFromParent =='AboutUs' || this.valueFromParent =='ContactUs'|| this.valueFromParent =='LegalStatement'){
                    return true
                }else {
                    return false
                }
              },
            // 判断是否显示 上海国际航运中心网首页 资讯中心 航运市场 政策公告 在线应用 航运发展 办事指南
             otherShow:function(){
                if(this.valueFromParent =='SiteMap'|| this.valueFromParent =='AboutUs' || this.valueFromParent =='ContactUs'|| this.valueFromParent =='LegalStatement' || this.valueFromParent =='IndexHome'){
                    return false
                }else {
                    return true
                }
             },

            isShow:function () {
                this.userName = this.$store.state.common.userName;
                //通过是否含有用户名来判断隐藏登录注册
                if(this.userName  == "" ||  this.userName == null || this.userName == undefined){
                  this.viewShow = true
                  this.viewShow2 = false
                }else {
                  this.viewShow = false
                  this.viewShow2 = true
                }
          },
          logOut:function () {
                this.$store.commit('removeUserName');  //清除用户名
                this.$store.commit('removeManageToken');  //token
                this.isShow();
                //跳转到首页
                this.$router.push({
                  name: 'IndexHome',
                  path:"/",
                })
          }
        }

    }
</script>

<style lang = scss scoped>
  .headTitle{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #FFF;
    overflow: hidden;
    border-top: none;
    .zb{
      padding-left: 20px;
      color: #2258c2;
      float: left;
      display: inline-block;
    }
    .log{
      float: right;
      display: inline-block;
      padding-right: 60px;
      a{
        /*color: #00297a;*/
        color: #000000;
        margin-right: 15px;
      }
    }

    .log2{
      float: right;
      display: inline-block;
      padding-right: 60px;
      overflow: hidden;
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
  .active{
    color: #2258c2 !important;
  }

</style>
