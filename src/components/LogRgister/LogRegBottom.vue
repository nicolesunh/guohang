<template>
     <div class="LogRegBottom">
       <div class="sux-log-footer">
         <div class="sux-log-footbox">
           <p>上海市国际航运中心建设工作推进小组办公室   版权所有  2014   <router-link to="">沪ICP备06026647号-7</router-link></p>
           <div class="sux-footer-nav">
             <router-link to="/aboutUs">关于我们</router-link>  |  <router-link to="/siteMap">网站地图</router-link>  |  <router-link to="/contactUs">联系我们</router-link>  |  <router-link to="/legalStatement">法律声明</router-link>
           </div>
         </div>
       </div>
       <div class="lenWebsite">
            <a href="https://new.cnzz.com/v1/login.php?siteid=1270642263" target="_blank">站长统计</a>
       </div>
     </div>
</template>

<script>
    export default {
        name: "LogRegBottom"
    }
</script>

<style  lang = scss scoped>
  .LogRegBottom{
    width: 100%;
    background-color: #ffffff;
    .sux-log-footer{
      margin: 0;
      padding: 0;
      .sux-log-footbox{
        width: 970px;
        padding: 20px 0;
        margin: 0 auto;
        overflow: hidden;
        p{
          float: left;
          color: #000;
          font-size: 14px;
          display: inline-block;
        }
        .sux-footer-nav {
          float: right;
          display: inline-block;
          a{
            font-size: 14px;
            padding: 0 5px;
            color: #000;
          }
        }
      }
    }
    .lenWebsite{
       a{
           font-size: 12px;
           color: #00297a;
       }
        a:hover{
            color: #001a4c;
        }
    }
  }



</style>
