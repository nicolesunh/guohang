<template>
  <div class="fundFooter">
    <div class="copyright">
      <p class="copyright-p">
        <router-link to="/aboutUs">关于我们</router-link>
        ｜ <router-link to="/siteMap">网站地图</router-link>
        ｜ <router-link to="/contactUs">联系我们</router-link>
        ｜ <router-link to="/legalStatement">法律声明</router-link>
        <br>上海国际航运中心网 版权所有© 2018   沪ICP备15009582号-1
        <br>主办单位：上海市国际航运中心建设工作推进小组办公室
        <br><span ><img src="../.././assets/img/gongan.png" alt="" style="vertical-align: sub"><router-link to="">沪公网安备 31011502008077号</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>
  import MemberUnit from './HeadFooter/MemberUnit'
  import RelevantUnit from './HeadFooter/RelevantUnit'
  import SupportUnit from './HeadFooter/SupportUnit'
  export default {
    name: "FundFooter",
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
        console.log(tab, event);
      }
    }
  }
</script>

<style lang = scss scoped>
  .fundFooter{
    width: 100%;
    margin: 0 auto;
    clear: both;
    display: block;
    background: #2258c2;
    .copyright {
      text-align: center;
      border-top: 1px solid #4074C0;
      padding: 30px 60px;
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

</style>
