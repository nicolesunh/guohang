<template>
  <div class="indexHome">
      <HeadTitle :parentToChild="showTitle"></HeadTitle>
      <HeadSearch :parentToChild="showImg"></HeadSearch>
      <!--首页中的大图滚动(走马灯)-->
      <div class="indexHome-carousel">
        <el-carousel  class="indexHome-carousel-w" style="display: none">
               <el-carousel-item>
                 <img src="../.././assets/img/hanghai.jpg" alt="">
               </el-carousel-item>
               <el-carousel-item >
                 <img src="../.././assets/img/hanghai2.jpg" alt="">
               </el-carousel-item>
        </el-carousel>
        <div>
            <img src="../.././assets/img/hanghai.jpg" alt="">
        </div>
      </div>
      <HeadNav :parentToChild="addClass"></HeadNav>
      <!--首页中的内容-->
      <div class="indexHome-bd">
        <div class="indexHome-bd-C">
          <IndexHome1></IndexHome1>
          <IndexHome2></IndexHome2>
          <IndexHome3></IndexHome3>
          <IndexHome4></IndexHome4>
        </div>
      </div>
      <HeadFooter :parentToChild="indexHome"></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadNav from "../.././components/HomeCommon/HeadNav"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"

  import IndexHome1 from "../.././components/HomeCommon/IndexHome/IndexHome1"
  import IndexHome2 from "../.././components/HomeCommon/IndexHome/IndexHome2"
  import IndexHome3 from "../.././components/HomeCommon/IndexHome/IndexHome3"
  import IndexHome4 from "../.././components/HomeCommon/IndexHome/IndexHome4"

  export default {
    name: 'IndexHome',
    data(){
      return{
        indexHome:"ToIndexHome",
        showTitle:"IndexHome",
        showImg:"IndexHome",
        addClass:"IndexHome",

      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      HeadNav:HeadNav,
      HeadFooter:HeadFooter,
      IndexHome1:IndexHome1,
      IndexHome2:IndexHome2,
      IndexHome3:IndexHome3,
      IndexHome4:IndexHome4
    },
    created:function () {
        this.getDate();
    },
    methods:{
        getDate:function () {
            var _that  = this
            _that.$axios.post(serviceUrl)
                .then(function(res){
                if(res.data.code == 200){
                    _that.$store.commit('setHomeList',res.data.data.IndexData);
                }
                }).catch(function(error){

                })
            },
        }
      }
</script>
<style lang = scss scoped>
  .indexHome-carousel{
    width: 1060px;
    margin: 0 auto;
  }
  .indexHome-carousel-w{
    width: 100%;
  }
  .indexHome-bd{
    width: 1060px;
    margin: 0 auto;
    min-height: 1000px;
    text-align: center;
    .indexHome-bd-C{
        padding: 40px 60px;
    }
  }
</style>
