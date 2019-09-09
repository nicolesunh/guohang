<template>
    <div class="headFooter">
       <div class="copyTop" v-if="valueFromParent == 'ToIndexHome'   ">
         <el-tabs v-model="activeName" @tab-click="handleClick" stretch= "stretch">
           <el-tab-pane label="上海市国际航运中心建设推进小组成员单位" name="first">
             <MemberUnit></MemberUnit>
           </el-tab-pane>
           <el-tab-pane label="上海国际航运中心网支持单位" name="second">
             <SupportUnit></SupportUnit>
           </el-tab-pane>
           <el-tab-pane label="航运相关单位" name="third">
             <RelevantUnit></RelevantUnit>
           </el-tab-pane>
         </el-tabs>
       </div>
       <!--下部-->
       <div class="copyright">
         <p class="copyright-p">
           <router-link to="/aboutUs">关于我们</router-link>
           ｜ <router-link to="/siteMap">网站地图</router-link>
           ｜ <router-link to="/contactUs">联系我们</router-link>
           ｜ <router-link to="/legalStatement">法律声明</router-link>
            <br>上海国际航运中心网 版权所有© 2018 <a href="http://sh.beian.miit.gov.cn" target="_blank">沪ICP备15009582号-1</a>
            <br>主办单位：上海市国际航运中心建设工作推进小组办公室
            <br><span ><img src="../.././assets/img/gongan.png" alt="" style="vertical-align: sub"> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502008077" target="_blank">沪公网安备 31011502008077号</a></span>
         </p>
       </div>
    </div>
</template>

<script>
    import MemberUnit from './HeadFooter/MemberUnit'
    import RelevantUnit from './HeadFooter/RelevantUnit'
    import SupportUnit from './HeadFooter/SupportUnit'
    export default {
        name: "HeadFooter",
        data(){
          return{
            valueFromParent:'',
            activeName: 'first',
            stretch:false,

          }
        },
        components: {
          MemberUnit:MemberUnit,
          RelevantUnit:RelevantUnit,
          SupportUnit:SupportUnit
        },
        props: ['parentToChild'],//用来接收props
        created(){
          this.valueFromParent = this.parentToChild;
        },
        methods: {
          handleClick(tab, event) {

          }
        }
    }
</script>

<style lang = scss scoped>
  .headFooter{
    width: 1060px;
    margin: 0 auto;
    clear: both;
    display: block;
    background: #2258c2;
    .copyTop{
      padding: 30px 60px 60px 60px;
      margin: 0;
      color: #ffffff;
    }
    .copyright {
      text-align: center;
      border-top: 1px solid #4074C0;
      padding: 30px 60px 60px 60px;
      line-height: 30px;
      margin: 0 60px;
      .copyright-p {
        color: #FFF;
        font-size: 12px;
        a{
          color: #FFF;
        }
        a:hover{
          color: #323232;
        }
        .lgw:hover{
          color: #ffffff;
        }
      }
    }
  }
  .copyTop /deep/ .el-tabs__item{
    color: #ffffff;
    font-size: 18px;
  }
  .copyTop /deep/ .el-tabs__item.is-active {
    color: #409EFF;
  }
  .copyTop /deep/ .el-tabs__nav-wrap::after{
    display: none;
    border: 1px solid #ff8a00;
  }
  .copyTop /deep/ .el-tabs__active-bar{
    background:none;
  }


</style>
