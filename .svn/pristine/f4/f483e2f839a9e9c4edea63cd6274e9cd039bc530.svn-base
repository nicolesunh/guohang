<template>
  <div class="specialFund">
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <HeadNav :parentToChild="addClass"></HeadNav>
    <!--专项资金-->
    <div class="specialFundAll">
      <div class="specialFundAll-bd">
         <div class="specialFundAll-bd-all">
             <h3>法律依据</h3>
             <p @click="xz1Click()">
                关于印发《上海市调整优化航运集疏运结构项目资金管理实施细则》和《上海市促进现代航运服务业创新资金管理实施细则》的通知
             </p>
             <p @click="xz2Click()">
                上海市人民政府办公厅转发市交通委、市财政局制订的《上海国际航运中心建设专项资金管理办法》的通知
             </p>
             <ul>
                 <li @click="collectClick()"><img src="../.././assets/img/jsy.jpg" alt=""></li>
                 <li @click="serviceClick()"><img src="../.././assets/img/fwcx.jpg" alt=""></li>
             </ul>
         </div>

      </div>
    </div>
    <HeadFooter></HeadFooter>
    <div class="lenWebsite">
        <a href="https://new.cnzz.com/v1/login.php?siteid=1270642263" target="_blank">站长统计</a>
    </div>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadNav from "../.././components/HomeCommon/HeadNav"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  export default {
    name: "SpecialFund",
    data(){
      return{
        showImg:"SpecialFund",
        addClass:"SpecialFund",
        id:null
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      HeadNav:HeadNav,
      HeadFooter:HeadFooter
    },
    created:function () {

    },
    methods:{
      //判断是否登录页面，如果是已经登录状态，则直接跳转到home 页面
      collectClick:function () {
        if(this.$store.state.common.userName  == "" || this.$store.state.common.userName == null || this.$store.state.common.userName == undefined){
          this.$router.push({
            name: 'FundLogin',
            path:"/fundlogin1",
          })
        }else {
          if(this.$store.state.common.status == 'admin'){
            // this.$router.push({
            //   name: 'FundHomeAdmin',
            //   path:"/fundHomeAdmin",
            // })
              this.$router.push({
                  name: 'HyAdmin',
                  path:"/p/fund/public/hyadmin",
              })
          }else if(this.$store.state.common.status == 'user'){
            this.$router.push({
              name: 'FundHome',
              path:"/fundHome"
            })
          }else if(this.$store.state.common.status == null || this.$store.state.common.status == ""){
              this.$message.error('抱歉，您还没有登录权限');
          }

        }
      },
      serviceClick:function () {
        if(this.$store.state.common.userName  == "" || this.$store.state.common.userName  == null  || this.$store.state.common.userName  == undefined){
          this.$router.push({
            name: 'Login',
            path:"/login",
          })
        }else {
          this.$router.push({
            name: 'ServiceHome',
            path:"/serviceHome",
          })
        }
      },
      xz1Click:function () {
          this.id = 47458
          this.$store.commit('setDetailId',this.id);
          this.$router.push('/detail/' + this.id)
      },
      xz2Click:function () {
          this.id = 47471
          this.$store.commit('setDetailId',this.id);
          this.$router.push('/detail/' + this.id)
      },

    }
  }
</script>

<style  lang = scss scoped>
  .specialFundAll{
    width: 1060px;
    margin: 0 auto;
    min-height: 550px;
    background: #ffffff;
    .specialFundAll-bd{
      padding: 40px 60px;
      padding-top: 15px;
      .specialFundAll-bd-all{
        h3{
          font-size: 18px;
          line-height: 24px;
          text-indent: 28px;
          font-weight: bold;
        }
        p{
          line-height: 24px;
          text-indent: 28px;
          padding: 12px 0;
          font-size: 14px;
          color: #00297a;
          cursor: pointer;
        }
        p:hover{
          color: #001a4c;
        }
        ul{
          li{
            padding: 20px 0;
            width: 56%;
            margin: 0 auto;
            img{
              width: 520px;
              height: 130px;
              cursor: pointer;
            }
          }
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
</style>
