<template>
  <div>
    <div class="login-box">
      <div class="title">找回密码</div>
      <el-form
        class="login-form"
        ref="forgetRuleForm"
        :model="forgetRuleForm"
        :rules="forgetRules"
        label-width="80px"
      >
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="forgetRuleForm.phoneNumber" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="forgetRuleForm.pass"
            placeholder="输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="forgetRuleForm.checkPass"
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
            @keyup.enter.native="doLogin('forgetRuleForm')"
          >
            <div>
              <el-input v-model="forgetRuleForm.phoneCaptcha" placeholder="输入验证码"></el-input>
            </div>
          </el-form-item>
          <!--点击获取手机验证码-->
          <div class="phoneCode" @click="codeStopDBLclickUpdate()">{{pb_show2}}</div>
        </div>
        <el-form-item>
          <el-button
            class="forget-login"
            type="primary"
            @click="forgetSubmitForm('forgetRuleForm')"
          >提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { throttle, b64_md5 } from "@/common/common";
export default {
  name: "ForgetModal",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.forgetRuleForm.checkPass !== "") {
          this.$refs.forgetRuleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.forgetRuleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      forgetRuleForm: {
        phoneNumber: "",
        pass: "",
        checkPass: "",
        phoneCaptcha: ""
      },
      pb_show2: "获取手机验证码",
      forgetRules: {
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phoneCaptcha: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
      // 短信验证按钮的节流
      codeStopDBLclickUpdate: throttle(function() {
          let that = this;
          that.getPhoneCode2(1, 'http://192.168.125.139/');
      }, 1000),
    //获取手机验证码
    getPhoneCode2: function(regType, url) {
        var _that = this;
        let phonenum = this.forgetRuleForm.phoneNumber;
        let app_code = "SHISC";
        let client_id = "http://www.shisc.net";
        let author_code = "shisc123";
        // regType = 1  为手机号
        if (regType == 1) {
            // 获取用户 access_token 接口（参数：client_id等 ）
            _that.$axios({
                url: url + "epoa/oauth/serverAuthor?client_id=" + client_id + "&app_code=" + app_code + "&author_code=" + author_code,
                method: "get",
                async: false,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(response => {
                let access_token = "";
                if (response.status === 200) {
                    if (response.data.flag == "T") {
                        access_token = response.data.access_token;
                        // 发送验证码接口
                        _that.$axios({
                            url: url + "newepoauthweb/phoneRegister?client_id=" + client_id + "&access_token=" + access_token + "&phone=" + phonenum + "&regType=1" + "&phoneTemplet=phone",
                            method: "get",
                            async: false,
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    if (response.data.flag == "T") {
                                        this.$message({
                                            message: '验证码请求成功',
                                            type: 'success'
                                        });
                                    } else {
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
    //点击提交按钮
    forgetSubmitForm(formName) {
        var _that = this;
        this.$refs[formName].validate(valid => {
        if (valid) {
            // 获取用户 access_token 接口的参数（参数：短信验证码，密码等 ）
            let app_code = "SHISC";
            let client_id = "http://www.shisc.net";
            let author_code = "shisc123";
            let phonenum = this.forgetRuleForm.phoneNumber;
            let captcha = this.forgetRuleForm.phoneCaptcha;
            let pwd = b64_md5(this.forgetRuleForm.pass);
            let postdata =
                "phone=" + phonenum + "&verifyCode=" + captcha + "&newPassword=" + pwd;
            // 调serverAuthor接口获取 access_token
            const url = "http://192.168.125.139/"
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
                        //Oauth接口返回用户唯一ID（uummloginId）需要的参数
                        postdata = postdata +"&client_id=" + client_id+ "&access_token=" + access_token;
                        _that.$axios({
                            url: url + "newepoauthweb/updatePwdByPhone",
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
                                    this.$message({
                                        message: '重置成功,即将前往登录页',
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
      });
    },
    haveRead: function() {

    }
  }
};
</script>

<style  lang = scss scoped>
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
/*设置复选框*/
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
}
.forget-login {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}
</style>
