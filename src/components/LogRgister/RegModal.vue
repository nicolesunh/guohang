<template>
  <div class="RegModal">
    <div class="login-box reg-box">
      <div class="title">欢迎注册上海国际航运中心网</div>
      <el-form
        class="login-form"
        ref="regRuleForm"
        :model="regRuleForm"
        :rules="regRules"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="regRuleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="regRuleForm.phoneNumber" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="regRuleForm.pass"
            placeholder="输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="regRuleForm.checkPass"
            placeholder="确认密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div style="height: 42px;">
          <el-form-item
            label="验证码"
            prop="phoneCaptcha"
            class="float-left"
            style="width:240px;"
            @keyup.enter.native="doLogin('regRuleForm')"
          >
            <div>
              <el-input v-model="regRuleForm.phoneCaptcha" placeholder="输入验证码"></el-input>
            </div>
          </el-form-item>
          <!--点击获取手机验证码-->
             <!--<div class="phoneCode" @click="codeStopDBLclick()"  :disabled="pb_disabled">{{pb_show1}}</div>-->
            <div class="phoneCodeAll">
              <el-button class="phoneCode"  @click="codeStopDBLclick()" :disabled="pb_disabled">{{pb_show1}}</el-button>
            </div>
        </div>
        <el-form-item class="checkboxItem" label-width="0px">
          <div class="checkboxAll checkboxAll2">
            <el-checkbox v-model="checked">我已阅读并接受</el-checkbox>
            <span class="NoCheck2" @click="sendMsgToParent()">《上海国际航运中心网服务使用协议》</span>
          </div>
        </el-form-item>
        <el-form-item>
            <div class="forget-login"  :class="{addActive:show == 1}" type="primary" @click="regSubmitForm('regRuleForm')">立即注册</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { throttle,b64_md5 } from "@/common/common";
export default {
  name: "RegModal",
  data() {
      //第一次密码验证方法
      var validatePass1 = (rule, value, callback) => {
          if (value == '') {
              callback(new Error('请输入6-26位数字、字母或特殊字符'));
          } else if (!(/^[^\s]{6,26}$/.test(value))) {
              callback(new Error('请输入6-26位数字、字母或特殊字符'));

          }
      };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regRuleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      }
    };
    //手机号验证方法
    var validatePhone = (rule, value, callback) => {
        if (value == '') {
            callback(new Error('请输入手机号'));
        }
        else if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value))) {
            callback(new Error('手机号错误，请输入正确号码'));
        }
    };

    return {
      regRuleForm: {
        username: "",
        phoneNumber: "",
        pass: "",
        checkPass: "",
        phoneCaptcha: ""
      },
      pb_disabled:false,
      uummloginId:"",
      checked:true,
      show:null,
      pb_show1: "获取手机验证码",
      regRules: {
        username: [
          { required: true, message: "请输入登录用户名", trigger: "blur" }
        ],
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" }
        ],
        pass: [
            {required: true, validator: validatePass1, trigger: 'blur'},
        ],
        checkPass: [
            { validator: validatePass2, trigger: "blur" }
         ],
        phoneCaptcha: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  props: ["message"], //子组件向父组件传值
  computed: {
      getSearchKey(){
          return this.checked
      }
  },
  watch:{
      getSearchKey: {
          handler(newValue){  //当词条改变时执行事件
              console.log(newValue)
              if(newValue == true){
                   this.show = null
              }else {
                  this.show = 1
              }
          }
      },
  },
  methods: {
    // 短信验证按钮的节流
    codeStopDBLclick: throttle(function() {
      this.getPhoneCode1(1, "http://192.168.125.139/");
    }, 1000),
    //获取手机验证码
    getPhoneCode1: function(regType, url) {
      var _that = this;
      let phonenum = this.regRuleForm.phoneNumber;
      let app_code = "SHISC";
      let client_id = "http://www.shisc.net";
      let author_code = "shisc123";
      // regType = 1  为手机号
      if (regType == 1) {
          _that.$axios({
          url: url + "epoa/oauth/serverAuthor?client_id=" + client_id + "&app_code=" + app_code + "&author_code=" + author_code,
          method: "get",
          async: false,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(response => {
          let access_token = "";
          if (response.status === 200) {
            if (response.data.flag == "T") {
              access_token = response.data.access_token;
                //倒计时60s
                this.pb_show1 = 60
                this.pb_disabled = true;
                let timeInt = setInterval(() => {
                    this.pb_show1--;
                    if (this.pb_show1 <= 0) {
                        this.pb_show1 = "获取手机验证码"
                        window.clearInterval(timeInt)
                    }
                }, 1000)

              // 发送验证码接口
                _that.$axios({
                url: url + "newepoauthweb/phoneRegister?client_id=" + client_id + "&access_token=" + access_token + "&phone=" + phonenum + "&regType=1" + "&phoneTemplet=phone",
                method: "get",
                async: false,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              })
                .then(response => {
                  if (response.status === 200) {
                    if (response.data.flag == "T") {
                        this.pb_show1 = "获取手机验证码"
                        this.pb_disabled = false;
                        window.clearInterval(timeInt)
                        this.$message({
                            message: '验证码请求成功',
                            type: 'success'
                        });

                    } else {
                        this.pb_show1 = "重新发送"
                        this.pb_disabled = false;
                        window.clearInterval(timeInt)
                        this.$message.error(response.data.errorInfo);

                    }
                  }
                })
                .catch(err => {
                  console.log(err);
                });

            }
          } else {
              this.$message.error(response.statusText);
          }
        });
      }
    },

    //提交注册
    regSubmitForm: function(formName) {
        var _that = this;
        this.$refs[formName].validate(valid => {
                if (valid) {
                    if(this.checked =="" || this.checked == false){
                        this.$message.error("请先阅读并同意使用协议");
                    }else {
                        // 获取用户 access_token 接口的参数（参数：短信验证码，密码等 ）
                        let app_code = "SHISC";
                        let client_id = "http://www.shisc.net";
                        let author_code = "shisc123";
                        let phonenum = this.regRuleForm.phoneNumber;
                        let captcha = this.regRuleForm.phoneCaptcha;
                        let pwd = b64_md5(this.regRuleForm.pass);
                        let orgCode = "SHISC0001";
                        let postdata = "phone=" + phonenum + "&verifyCode=" + captcha + "&orgCode=" + orgCode + "&password=" + pwd;
                        // 调serverAuthor接口获取 access_token
                        const  url = "http://192.168.125.139/"
                        _that.$axios({
                            url: url + "epoa/oauth/serverAuthor?client_id=" + client_id + "&app_code=" + app_code + "&author_code=" + author_code,
                            method: "get",
                            async: false,
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(response => {
                            if (response.status === 200) {
                                let access_token = "";
                                if (response.data.flag == "T") {
                                    access_token = response.data.access_token;
                                    postdata = postdata + "&client_id=" + client_id + "&app_code=" + app_code + "&access_token=" + access_token;

                                    _that.$axios({
                                        url: url + "newepoauthweb/user",
                                        method: "post",
                                        data: postdata,
                                        async: false,
                                        withCredentials: true,
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        }
                                    }).then(response => {
                                        if (response.status === 200) {
                                            if (response.data.flag == "F") {
                                                this.$message.error(response.data.errorInfo);
                                            } else if (response.data.flag == "T") {
                                                this.uummloginId = response.data.loginId;

                                                let data = {
                                                    user_login: this.regRuleForm.phoneNumber,
                                                    realname: this.regRuleForm.username,
                                                    user_pass: this.regRuleForm.pass,
                                                    confirm_pass: this.regRuleForm.checkPass,
                                                    uummloginId: this.uummloginId
                                                };
                                                _that.$axios({
                                                    url: serviceUrl + "/register",
                                                    method: "post",
                                                    params: data,
                                                    async: false,
                                                    withCredentials: true,
                                                    headers: {
                                                        "Content-Type": "application/x-www-form-urlencoded"
                                                    }
                                                }).then(response => {
                                                    if (response.status === 200) {
                                                        if (!response.data.code == 1) {
                                                            this.$message.error(response.data.msg);
                                                        } else {
                                                            this.$message({
                                                                message: '注册成功,即将前往登录页',
                                                                type: 'success'
                                                            });
                                                            setTimeout(this.$router.push("/login"), 2000);

                                                        }
                                                    } else {
                                                        this.$message.error(response.data.message);
                                                    }

                                                });
                                            }
                                        } else {
                                            this.$message.error(response.data.message);

                                        }
                                    });
                                }
                            } else {
                                this.$message.error(response.data.message);
                            }
                        });
                    }


                }
            });
    },
    // 《上海国际航运中心网服务使用协议》
    sendMsgToParent: function() {
      this.$emit("listenToChildEvent", "isShow");
    }
  }
};
</script>

<style lang = scss scoped>
.login-box {
  width: 450px;
  height: 410px;
  position: absolute;
  top: 15px;
  right: 0;
  background-color: #fff;
  padding: 15px;
  border: solid 1px #c4c7cc;
}
.login-box .title {
  font-size: 18px;
  color: #2d6dc1;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
}
.login-form {
  width: 360px;
  margin: 0 auto;
}
.login-box .el-form-item__label {
  color: #fff;
}
.login-box .el-form-item__label:before {
  content: "" !important;
}
.login-box .btn-login {
  width: 45%;
  display: inline-block;
}
.login-box .btn-reg {
  width: 20%;
  display: inline-block;
  background: none;
  border: none;
  color: #ea6101;
}
.login-box .btn-forget {
  width: 20%;
  display: inline-block;
  background: none;
  border: none;
  color: #ea6101;
}
.login-box .captcha-img {
  margin-left: 20px;
  content: normal;
}
.checkboxItem {
  margin-bottom: 0;
}
.checkboxAll .el-checkbox {
  margin-right: 0px;
  margin-left: -168px;
  margin-top: 10px;
  margin-bottom: 0;
}
.checkboxAll2 {
  margin-left: 10px;
}
.checkboxAll2 .el-checkbox {
  margin-left: 0;
  margin-top: 0px;
}
.NoCheck {
  font-size: 10px;
  color: #bbb;
}
.NoCheck2 {
  font-size: 10px;
  color: #2d6dc1;
  line-height: 0;
  cursor: pointer;
}
/*******************************************************************************************************************************************************************/
/*设置注册弹框*/
.reg-box {
  height: 450px;
}
.sux-fwxy {
  margin-top: 20px;
  background: #ffffff;
  background: #fff;
  border: 1px solid #c4c4c4;
  padding: 20px;
  height: 420px;
}
.register-box {
  height: 360px;
  overflow: auto;
  overflow-x: hidden;
}
//协议
.sux-btnyd {
  margin-top: 20px !important;
  width: 98px;
  height: 40px;
  margin: 0 auto;
}
.register-box-title {
  font-size: 14px;
  font-family: 宋体;
  color: #323232;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  letter-spacing: 1px;
}
.register-box-head {
  color: #323232;
  font-size: 9px;
  margin-bottom: 5px;
  line-height: 26px;
  text-indent: 2em;
}
.conTitle {
  color: #323232;
  font-size: 9px;
  margin-bottom: 5px;
  line-height: 26px;
  text-indent: 2em;
  font-weight: bold;
}
.register-box-item-cont {
  color: #323232;
  font-size: 9px;
  margin-bottom: 5px;
  line-height: 26px;
  text-indent: 2em;
}
/*******************************************************************************************************************************************************************/
/*设置忘记密码弹框*/
.phoneCode {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  float: right;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  font-size: 12px;
  padding: 0 !important;

}
.reg-box  .phoneCodeAll  /deep/  .el-button:focus, .el-button.is-disabled, .el-button:hover{
  background: none;
  color: #606266;
  border-color:#dcdfe6;
}

.forget-login {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
.addActive{
  background:#dddddd; //为带有disabled的input框添加背景颜色
  pointer-events:none;//鼠标点击不可修改

}
</style>
