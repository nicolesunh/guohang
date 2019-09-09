<template>
  <div class="NewsletterLogin">
    <h3>
      <router-link to="">
        <img src="../.././assets/img/W-logo-2.png" alt="">
      </router-link>
    </h3>
    <div class="NewsletterLogin-box">
      <div class="NewsletterLogin-box-login">
        <el-form class="login-form" ref="loginRuleForm" :model="loginRuleForm" :rules="loginRules" label-width="70px">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginRuleForm.username"  placeholder="证件号/手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="loginRuleForm.pwd"  placeholder="输入密码"></el-input>
          </el-form-item>
          <div style="height: 42px;">
            <el-form-item label="验证码" prop="captcha" class="float-left" style="width:240px;" @keyup.enter.native="doLoginNew('loginRuleForm')">
              <div>
                <el-input v-model="loginRuleForm.captcha"  placeholder="输入验证码">
                </el-input>
              </div>
            </el-form-item>
            <img class="float-right pointer" :src="loginRuleForm.captchaImg" style="width:100px;height:40px;" @click="getCaptcha()">
            <div class="cb"></div>
          </div>
          <el-form-item class="checkboxItem" style="display: none">
            <div class="checkboxAll" style="width: 108px;">
              <el-checkbox v-model="checked">记住我的登录信息</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-login" type="primary" @click="doLoginNew('loginRuleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <p class="backtoblog"><router-link to="/">← 回到上海国际航运中心网</router-link></p>
    </div>

  </div>
</template>

<script>
 import { throttle, getRequest } from "@/common/common";
  export default {
    name: "NewsletterLogin",
    data(){
      return{
        loginRuleForm: {
          username: '',
          pwd: '',
          captcha: '',
          captchaImg: ''
        },
        checked:"",
        loginRules: {
              username: [
                  {required: true, message: '请输入登录用户名', trigger: 'blur'},
                  {min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur'}
              ],
              pwd: [
                  {required: true, message: '请输入登录密码', trigger: 'blur'}
              ],
              captcha: [
                  {required: true, message: '请输入验证码', trigger: 'blur'}
              ]
          },
        manageToken:"",
        status:"",
      }
    },
    created(){
      this.getCaptcha();
    },
    methods: {
      //获取图形验证码
      getCaptcha: function () {
          let time = new Date().getTime();
          this.loginRuleForm.captchaImg = "http://192.168.125.139/epoa/jcaptcha?t=" + time;
      },
      //登录
      doLoginNew: function (formName) {
          var _that  =  this;
          this.$refs[formName].validate( (valid) =>{
              if (valid) {
                  // 参数1
                  let client_id = "http://www.shisc.net";
                  let appCode = "shiscweb";
                  let data = {
                      generateKeypair: true,
                      _: new Date().getTime()
                  };
                  // oauth登录接口
                  let url = 'http://192.168.125.139/'
                  _that.$axios({
                      url: url + "epoa/oauth/encryption",
                      method: "get",
                      params: data,
                      withCredentials: true,
                      headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                      }
                  }).then(response => {
                      if (response.status == 200) {
                          let keys = new jCryptionKeyPair(
                              response.data.e,
                              response.data.n,
                              response.data.maxdigits
                          );
                          let encryptedUser = encrypt(this.loginRuleForm.username, keys);
                          let encryptedPassword = encrypt(this.loginRuleForm.pwd, keys);
                          let encryptedClient = encrypt(client_id, keys);
                          let encryptedAppCode = encrypt(appCode, keys);

                          // 参数2
                          let data2 = {
                              id: encryptedUser,
                              password: encryptedPassword,
                              client_id: encryptedClient,
                              app_code: encryptedAppCode,
                              yzm: this.loginRuleForm.captchaImg
                          };
                          // oauth  AuthAuto接口 获取refresh_token
                          _that.$axios({
                              url: url + "epoa/oauth/AuthAuto",
                              method: "get",
                              params: data2,
                              withCredentials: true,
                              headers: {
                                  "Content-Type": "application/x-www-form-urlencoded"
                              }
                          }).then(res => {
                              if (res.status == 200) {
                                  if (res.data.flag == "T") {
                                      //将获取的token 存贮起来
                                      this.manageToken = res.data.refresh_token
                                      this.$store.commit('setManageToken',this.manageToken );
                                      // 参数3
                                      let data3 = {
                                          refresh_token: res.data.refresh_token,
                                          client_id: client_id,
                                          app_code: appCode
                                      };
                                      _that.$axios({
                                          url: url + "epoa/oauth/accesstoken",
                                          method: "get",
                                          params: data3,
                                          withCredentials: true,
                                          headers: {
                                              "Content-Type": "application/x-www-form-urlencoded"
                                          }
                                      }).then(res2 => {
                                          if (res.status == 200) {
                                              if (res2.data.flag == "T") {
                                                  // 参数4
                                                  let data4 = {
                                                      username: this.loginRuleForm.username,
                                                      pwd: this.loginRuleForm.pwd
                                                  };
                                                  _that.$axios({
                                                      url: serviceUrl + "/login",
                                                      method: "post",
                                                      params: data4,
                                                      withCredentials: true,
                                                      headers: {
                                                          "Content-Type": "application/x-www-form-urlencoded"
                                                      }
                                                  }).then(res3 => {
                                                      if (res3.data.code == 1) {
                                                          //使用状态管理工具存储状态用于判断是管理员登录还是用户登录
                                                          // this.status = res3.data.fund_role
                                                          // this.status ="user"
                                                          this.status ="admin"
                                                          this.$store.commit('setStatus',this.status);
                                                          // //登录成功后，存储一个状态值，用于判断用户是否成功登录以及隐藏显示登录注册按钮
                                                          this.$store.commit('setUserName',this.loginRuleForm.username);

                                                          if(this.status == ''){
                                                              this.$message.error('抱歉，您还没有登录权限');
                                                              this.getCaptcha();
                                                          }else {
                                                              this.$router.push({
                                                                  name: 'Report',
                                                                  path:"/p/report"
                                                              })
                                                          }

                                                      }
                                                  });
                                              } else if(res2.data.flag == "F"){
                                                  this.getCaptcha();
                                                  this.$message.error(res2.data.errorInfo);
                                              }
                                          }
                                      });
                                  }else {
                                      this.$message.error(res.data.errorInfo);
                                  }
                              } else {
                                  this.$message.error(res.data.errorInfo);
                              }
                          });
                      }else {
                          this.$message.error(response.data.errorInfo);
                      }
                  });
              }else {
                  this.getCaptcha();
              }
          });
      },
    }
  }
</script>

<style  lang = scss scoped>
  .NewsletterLogin{
    width: 100%;
    min-height: 850px;
    background: url("../.././assets/img/W-bg.png");
    h3{
      width: 794px;
      height: 247px;
      margin: 0 auto;
      padding-top: 50px;
      a{
        img{
          width: 794px;
          height: 247px;
        }
      }
    }
    .NewsletterLogin-box{
      width: 794px;
      margin: 0 auto;
      position: relative;
      .NewsletterLogin-box-login{
        position: absolute;
        width: 350px;
        padding: 25px 45px;
        background: #ffffff;
        top: -50px;
        left: 202px;
        .btn-login{
          width: 100%;
        }
      }
      .backtoblog{
        position: absolute;
        width: 350px;
        top: 335px;
        left: 215px;
        a{
          color: #ffffff;
        }
        a:hover{
          color:#0074a2;
        }
      }
    }

  }

</style>
