<template>
  <div class="MyMessageList">
    <div class="MyMessageList-title">
        我的信息
    </div>
    <div class="MyMessageList-notice">
        友情提示:多张图片上传请粘贴到word文档中再上传即可
    </div>
    <div class="MyMessageList-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="登录名" prop="loginName">
          18221807870
        </el-form-item>
        <el-form-item label="单位名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="单位类别" prop="category">
          <el-radio-group v-model="ruleForm.category">
            <el-radio label="航运"></el-radio>
            <el-radio label="港口"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单位地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人	" prop="legal">
          <el-input v-model="ruleForm.legal"></el-input>
        </el-form-item>
        <el-form-item label="法人电话	" prop="corTelephone">
          <el-input v-model="ruleForm.corTelephone"></el-input>
        </el-form-item>
        <el-form-item label="联系人	" prop="contacts">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话	" prop="contactTelephone">
          <el-input v-model="ruleForm.contactTelephone"></el-input>
        </el-form-item>
        <el-form-item label="联系人手机	" prop="cellPhone">
          <el-input v-model="ruleForm.cellPhone"></el-input>
        </el-form-item>
        <el-form-item label="联系人传真	" prop="contactFax">
          <el-input v-model="ruleForm.contactFax"></el-input>
        </el-form-item>
        <el-form-item label="开户银行	" prop="openingBank">
          <el-input v-model="ruleForm.openingBank"></el-input>
        </el-form-item>
        <el-form-item label="银行账号	" prop="bankAccount">
          <el-input v-model="ruleForm.bankAccount"></el-input>
        </el-form-item>
        <el-form-item label="营业执照	">
             <span>查看</span>
             <span class="MyMessageList-form-special">营业执照</span>
             <div class="MyMessageList-form-upload">
               <el-upload
                 class="upload-demo"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :before-remove="beforeRemove"
                 multiple
                 :limit="3"
                 accept=".xls,.xlsx,.jpg,.png,.gif"
                 :on-exceed="handleExceed"
                 :before-upload="beforeUpload"
                 :file-list="fileList">
                 <el-button size="small" type="primary">点击上传</el-button>
                 <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
               </el-upload>
             </div>
        </el-form-item>
        <el-form-item label="作业协议	">
            <span>查看</span>
            <span class="MyMessageList-form-special">作业协议</span>
            <div class="MyMessageList-form-upload">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
               multiple
              :limit="3"
              accept=".xls,.xlsx,.jpg,.png,.gif,.txt"
              :on-exceed="handleExceed"
              :before-upload="beforeUpload"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 75%;margin: 15px 0;padding: 8px 0" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyMessageList",
        data() {
          return {
            ruleForm: {
              loginName:"",
              name: '',
              category: '',
              address: '',
              legal:"",
              corTelephone:"",
              contacts:"",
              contactTelephone:"",
              cellPhone:"",
              contactFax:"",
              openingBank:"",
              bankAccount:""
            },
            rules: {
              loginName: [
                { required: true, message: '请输入登录名', trigger: 'blur' },
              ],
              name: [
                { required: true, message: '请输入单位名称', trigger: 'blur' },
              ],
              category: [
                { required: true, message: '请选择单位类别', trigger: 'blur' }
              ],
              address: [
                { required: true, message: '请选择单位地址', trigger: 'change' }
              ],
              legal: [
                { required: true, message: '请输入法定代表人', trigger: 'blur' }
              ],
              corTelephone: [
                { required: true, message: '请输入法人电话', trigger: 'blur' }
              ],
              contacts: [
                { required: true, message: '请输入联系人', trigger: 'blur' }
              ],
              contactTelephone: [
                { required: true, message: '请输入联系人电话', trigger: 'blur' }
              ],
              cellPhone: [
                { required: true, message: '请输入联系人手机', trigger: 'blur' }
              ],
              contactFax: [
                { required: true, message: '请输入联系人传真', trigger: 'blur' }
              ],
              openingBank: [
                { required: true, message: '请输入开户银行', trigger: 'blur' }
              ],
              bankAccount: [
                { required: true, message: '请输入银行账号', trigger: 'blur' }
              ],

            },
            fileList: [],

          };
        },
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          //移除图片或者文件前
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          },
          // 移除图片或者文件
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          },

          beforeUpload(file) {
            console.log(file)
            var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)
            const extension = testmsg === 'xls'
            const extension2 = testmsg === 'xlsx'
            const extension3 = testmsg === 'jpg'
            const extension4 = testmsg === 'png'
            const extension5 = testmsg === 'gif'
            const extension6 = testmsg === 'txt'
            const isLt2M = file.size / 1024 / 1024 < 10
            if(!extension && !extension2 && !extension3 && !extension4  && !extension5 && !extension6) {
              this.$message({
                message: '上传文件只能是 xls、xlsx、jpg、png、gif、txt格式!',
                type: 'warning'
              });
            }
            if(!isLt2M) {
                this.$message({
                    message: '上传文件大小不能超过 10MB!',
                    type: 'warning'
                });
            }
            return extension || extension2 || extension3 || extension4 || extension5 || extension6 && isLt2M

            return extension || extension2 || extension3 || extension4 || extension5 || extension6
          },

        }
    }
</script>

<style lang = scss scoped>
  .MyMessageList{
    width: 95%;
    margin: 0 auto;
    .MyMessageList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .MyMessageList-notice{
      text-align: left;
      font-size: 14px;
    }
    .MyMessageList-form{
      margin-top: 15px;
      width: 90%;
      margin-left: 0;
      margin-top: 25px;
      /deep/
      .el-button--primary{
        background: #2258c2;
      }
    }
    .MyMessageList-form-special{
      color: #000000;
      cursor: pointer;
    }
    .MyMessageList-form-special:hover{
      color: silver;
    }
    .MyMessageList-form-upload{
      display: inline-block;
      width: 80%;
      float: right;
    }
  }
</style>
