<template>
  <div class="contactUs">
    <HeadTitle :parentToChild="showTitle"></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <HeadNav></HeadNav>
    <!--关于我们-->
    <div class="contactUsAll">
      <div class="contactUsAll-bd">
        <h3 class="contactUsAllTitle">联系我们</h3>
        <div class="contactUsAllItem">
          <p class="contactUsAllItem-p">地址：上海市 浦东新区 博霞路185号</p>
          <p class="contactUsAllItem-p">电话：+86-021-20260088</p>
          <p class="contactUsAllItem-p">传真：+86-021-20260011</p>
          <p class="contactUsAllItem-p">服务时间（9：00-17：00）</p>
          <p class="contactUsAllItem-p">Email：</p>
          <p class="contactUsAllItem-p"> 合作：<router-link to="">shisc@shisc.net</router-link></p>
          <p class="contactUsAllItem-p"> 投稿：<router-link to="">tougao@shisc.net</router-link></p>
          <p class="contactUsAllItem-p"> 客服：<router-link to="">kefu@shisc.net</router-link></p>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadNav from "../.././components/HomeCommon/HeadNav"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  export default {
    name: "ContactUs",
    data(){
      return{
        showImg:"ContactUs",
        showTitle:"ContactUs",
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

    }
  }
</script>

<style  lang = scss scoped>
  .contactUsAll{
    width: 1060px;
    margin: 0 auto;
    min-height: 550px;
    background: #ffffff;
    .contactUsAll-bd{
      padding: 40px 60px;
      .contactUsAllTitle{
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 15px;
      }
      .contactUsAllItem{
        margin-top: 15px;
        .contactUsAllItem-p{
          text-indent: 2em;
          color: #323232;
          font-size: 14px;
          line-height: 24px;
          a{
            font-size: 12px;
            color: #00297a;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
