<template>
  <div class="ShowPost">
    <NewsletterTop></NewsletterTop>
    <div class="ShowPost-bd" ref="companyStyle" id="box">
              详情
    </div>
  </div>
</template>

<script>
  import NewsletterTop from "../../.././components/SpecialFundCommon/Newsletter/NewsletterTop"

  export default {
    name: "ShowPost",
    data(){
      return{

      }
    },
    created:function(){

    },
    components: {
      NewsletterTop:NewsletterTop,

    },
    created:function(){
      this.newAddBtn()
    },
    methods:{
      newAddBtn(){
        var box = document.getElementById("box")
        console.log(box)
      }
    },
  }
</script>

<style  lang = scss scoped>
  .ShowPost{
    width: 100%;
    background: #ffffff;
    .ShowPost-bd{
      width: 1250px;
      margin: 0 auto;
      padding: 20px 40px;
      margin-top: 45px;
      min-height: 800px;

    }
  }
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
