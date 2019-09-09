<template>
    <div class="Agreement">
      <div class="sux-fwxy">
        <div class="register-box">
          <h3 class="register-box-title">上海国际航运中心网服务使用协议</h3>
          <p class="register-box-head">欢迎阅读上海国际航运中心网（英文简称SHISC）服务协议（下称“本协议”）。本协议所包含的服务条款适用于本网站为用户提供的各种服务。</p>
          <p class="register-box-head">
            上海国际航运中心网（以下简称“本网站”）是由上海市国际航运中心建设推进工作小组办公室主办，上海亿通国际股份有限公司运营，集权威航运信息发布、高效应用服务和行业互动交流为一体的专业化航运信息门户和公共服务平台。将整合政府监管、公共服务和商业服务类信息和资源，实现航运信息的权威发布、航运信息的有效集聚和航运信息服务。
          </p>
          <div class="register-box-item">
            <p class="conTitle">1. 特别提示</p>
            <p class="register-box-item-cont">
              1.1本网站主办及运营方同意按照本协议的规定及其不时发布的操作规则提供基于互联网以及移动网的相关服务（以下称“网络服务”）， 为获得网络服务，服务使用人（以下称“用户”）应当同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击“同意”按 钮即表示用户完全接受本协议项下的全部条款。
            </p>
            <p class="register-box-item-cont">1.2用户注册成功后，本网站将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</p>
            <p class="register-box-item-cont">1.3用户注册成功后，在使用本网站服务的过程中，本网站有权基于用户的操作行为进行非商业性的调查研究。</p>
          </div>
          <div class="register-box-item">
            <p class="conTitle">2. 服务内容</p>
            <p class="register-box-item-cont">
              2.1 本网站网络服务的具体内容由本网站根据实际情况提供，例如资讯、社区、搜索、评论等。
            </p>
            <p class="register-box-item-cont">
              2.2本网站提供的部分网络服务（例如数据、文件下载等）为收费的网络服务，用户使用收费网络服务需要向本网站支付一定的费用。对于收费的网络服务，本网站会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用该等收费网络服务。如用户拒绝支付相关费用，则本网站有权不向用户提供该等收费网络服务。
            </p>
            <p class="register-box-item-cont">
              2.3用户理解，本网站仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。
            </p>
          </div>
        </div>
        <div class="sux-btnyd">
          <el-button type="primary" @click="sendMsgToParent()">我已阅读</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Agreement",
        data(){
          return{

          }
        },
        methods:{
          sendMsgToParent:function () {
            this.$emit("listenToChildEvent2","isShow2")
          },
        }
    }
</script>

<style  lang = scss scoped>
  .reg-box{
    height: 450px;
  }
  .sux-fwxy{
    margin-top: 20px;
    background: #ffffff;
    background: #fff;
    border: 1px solid #C4C4C4;
    padding: 20px;
    height: 420px;
  }
  .register-box{
    height: 360px;
    overflow: auto;
    overflow-x:hidden;
  }
  //协议
  .sux-btnyd{
    margin-top: 20px !important;
    width: 98px;
    height: 40px;
    margin: 0 auto;

  }
  .register-box-title{
    font-size: 14px;
    font-family: 宋体;
    color: #323232;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
    letter-spacing:1px;
  }
  .register-box-head{
    color: #323232;
    font-size: 9px;
    margin-bottom: 5px;
    line-height: 26px;
    text-indent: 2em;
  }
  .conTitle{
    color: #323232;
    font-size: 9px;
    margin-bottom: 5px;
    line-height: 26px;
    text-indent: 2em;
    font-weight: bold;
  }
  .register-box-item-cont{
    color: #323232;
    font-size: 9px;
    margin-bottom: 5px;
    line-height: 26px;
    text-indent: 2em;
  }
</style>
