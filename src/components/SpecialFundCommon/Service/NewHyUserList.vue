<template>
  <div class="MyMessageList">
    <div class="MyMessageList-top">
      <fieldset class="layui-elem-field">
        <legend>填表说明:</legend>
        <div class="layui-field-box">
          <ul>
            <li>1.请下载“申报表格”，填写完毕后在申报表格中上传。</li>
            <li>2.上传的视频格式为MP4格式(视频大小不超过100M)，营业执照或社会统一信用代码证书为JPG或者docx文件。</li>
            <li>3.所有项目填写完毕保存后，可在“已有申请”中编辑并提交，提交之后不可修改。</li>
          </ul>
          <el-button type="primary" size="small" style="background:#2258c2; margin-top: 5px">申报表格</el-button>
        </div>
      </fieldset>
    </div>

    <div class="MyMessageList-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="项目名称" prop="entryName">
          <el-input v-model="ruleForm.entryName" placeholder="entryName"></el-input>
        </el-form-item>
        <el-form-item label="申报单位" prop="declaringUnit">
          <el-input v-model="ruleForm.declaringUnit" placeholder="申报单位"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人	" prop="legalRepresentative">
          <el-input v-model="ruleForm.legalRepresentative"  placeholder="法定代表人"></el-input>
        </el-form-item>
        <el-form-item label="联系人	" prop="contacts">
          <el-input v-model="ruleForm.contacts"  placeholder="联系人"></el-input>
        </el-form-item>
        <el-form-item label="电话	" prop="telephone">
          <el-input v-model="ruleForm.telephone"  placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="手机	" prop="cellPhone">
          <el-input v-model="ruleForm.cellPhone"  placeholder="手机"></el-input>
        </el-form-item>
        <el-form-item label="传真	" prop="contactFax">
          <el-input v-model="ruleForm.contactFax"  placeholder="传真"></el-input>
        </el-form-item>
        <el-form-item label="申报表	" prop="">
          <!--上传-->
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
            <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="营业执照或社会统一信用代码证书	" prop="">
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
            <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目创新及社会效益证明材料	" prop="">
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
            <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目介绍PPT" prop="">
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
            <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目介绍视频" prop="">
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
            <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div class="MyMessageList-form-button">
            <el-button type="primary" size="small" @click="submitForm('ruleForm')" class="MyMessageList-form-button1">保存</el-button>
            <el-button type="primary"  size="small" @click="resetForm('ruleForm')" class="MyMessageList-form-button2">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewHyUserList",
    data() {
      return {
        ruleForm: {
          entryName:"",
          declaringUnit: '',
          legalRepresentative: '',
          contacts: '',
          telephone:"",
          cellPhone:"",
          contactFax:"",
        },
        fileList:[],
        rules: {
          entryName: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          declaringUnit: [
            { required: true, message: '请输入申报单位', trigger: 'blur' },
          ],
          legalRepresentative: [
            { required: true, message: '请输入法定代表人', trigger: 'blur' }
          ],
          contacts: [
            { required: true, message: '请输入联系人', trigger: 'change' }
          ],
          telephone: [
            { required: true, message: '请输入手机', trigger: 'blur' }
          ],
          cellPhone: [
            { required: true, message: '请输入电话', trigger: 'blur' }
          ],
          contactFax: [
            { required: true, message: '请输入传真', trigger: 'blur' }
          ],




        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
    .MyMessageList-top{
      .layui-elem-field {
        margin: 10px 0;
        padding: 0;
        border: 1px solid #e2e2e2;
        legend {
          margin-left: 20px;
          padding: 0 10px;
          font-size: 14px;
          color: #606266;
        }
        .layui-field-box {
          padding: 10px 15px;
         ul{
           li{
             font-size: 12px;
             padding: 5px 0;
           }
         }
        }
      }
    }
    .MyMessageList-form{
      margin-top: 15px;
      width: 90%;
      margin-left: 0;
      margin-top: 25px;
      /deep/
      .el-form .el-form-item{
        .el-form-item__label{
          width: 185px !important;
        }
        .el-form-item__content{
          display: flex;
        }
        /deep/
        .el-button--primary{
          background: #2258c2;
          border: 1px solid #2258c2;
        }
      }
    }
    .MyMessageList-form-button{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:center;
      .MyMessageList-form-button1{
        margin: 0 25px;
        background: #2258c2;
      }
      .MyMessageList-form-button2{
        margin: 0 25px;
        /*background:#009688;*/
        background: #ffffff !important;
        color: #000000  !important;
        border: 1px solid #C9C9C9;
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
