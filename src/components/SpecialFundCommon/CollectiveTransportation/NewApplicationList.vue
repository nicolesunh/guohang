<template>
  <div class="NewApplicationList">
    <div class="NewApplicationList-top">
      <fieldset class="layui-elem-field">
        <legend>填表说明:</legend>
        <div class="layui-field-box">
          <ul>
            <li>1. 航运企业非必填项为备注列，“五定班轮”下“时间”为不填写项，“江海联运,内河集装箱”下“班期”和“码头”为不填写项，其他列均为必填项。否则所在行的数据将不被录入数据库。</li>
            <li>2. 港口企业非必填项有航线名称、班期-星期、班期-时间、码头和备注列，其他列均为必填项。否则所在行的数据将不被录入数据库。</li>
            <li>3. 码头选项为:浦东码头、振东码头、沪东码头、明东码头和洋山码头</li>
            <li>4. TEU列无需手工填写，系统自动计算。</li>
            <li>5. 时间列格式为00:00:00，“:”为英文字符冒号。</li>
            <li>6.清单表填写完毕、修改或导入文件后请保存草稿，此时仍可编辑。提交后，将不再拥有编辑修改权限，除非被管理员退回。</li>
            <li>7. 请认真规范填写。</li>
            <li>8. 集疏运申报系统用户手册下载</li>
          </ul>
        </div>
      </fieldset>
    </div>
    <div>
      <el-button type="primary" size="small" style="background:#2258c2; border:1px solid #2258c2;margin-top:5px" @click="download()">下载文件导入模板</el-button>
    </div>
    <div class="NewApplicationList-form">
      <div class="NewApplicationList-form-select">
        <el-select v-model="value" placeholder="请选择" size="small">
          <!--下拉框-->
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="addTable"  @click.prevent="delData()">
             删除业务
        </span>
        <span class="addTable"  @click.prevent="addRow()">
             新增业务
        </span>
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
      </div>
      <div class="NewApplicationList-form-table">
        <div class="tableDate">
          <div class="button" style="width:8%;float:right;display: none" >
            <P><el-button class="el-icon-plus" @click.prevent="addRow()"></el-button></P>
            <p style="margin-top: 5px"><el-button class="el-icon-minus" @click.prevent="delData()"></el-button></p>
          </div>
          <div class="table" style="width:100%;float:left;margin-bottom: 25px">
            <el-table
              :data="tableData"
              ref="table"
              tooltip-effect="dark"
              border
              stripe
              style="width: 100%"
              @selection-change='selectRow'>
              <el-table-column type="selection" width="45" align="center"></el-table-column>
              <el-table-column label="序号"  type="index" width="45" align="center"></el-table-column>
              <el-table-column  label="业务类型" width="120" align="center">
                <template slot-scope="scope">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="航线名称" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.name"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="船名"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.loveer"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="船型"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.weather"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="完成航次数"  width="80"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.weather"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="班期"  width="120" align="center">
                <template slot-scope="scope">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="靠泊码头"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.mdate"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="作业箱量"  width="250" align="center">
                <el-table-column
                  prop="20"
                  label="20'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.mdate"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="40"
                  label="40'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.mdate"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="45"
                  label="45'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.mdate"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="TFU"
                  label="TFU"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.mdate"></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="备注"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.mdate"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div >
        </div>

      </div>
    </div>
    <div class="NewApplicationList-form-buttons">
      <el-button type="primary" size="large" class="NewApplicationList-form-button1">保存草稿</el-button>
      <el-button type="primary"  size="large"  class="NewApplicationList-form-button2">提交申请</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewApplicationList",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '2019-04-01--2016-06-29'
        }, {
          value: '选项2',
          label: '2019-04-01--2016-06-29'
        }, {
          value: '选项3',
          label: '2019-04-01--2016-06-29'
        }],
        options2: [{
          value: '选项1',
          label: '星期一'
        }, {
          value: '选项2',
          label: '星期二'
        }, {
          value: '选项3',
          label: '星期三'
        }, {
          value: '选项4',
          label: '星期四'
        }, {
          value: '选项5',
          label: '星期五'
        },{
          value: '选项6',
          label: '星期六'
        }, {
          value: '选项7',
          label: '星期日'
        }],
        value: '',
        tableData: [
           {
            rowNum:"1" ,
            address: '',
            name: '',
            weather: '',
            phone: '',
            date: '',
            mdate: '',
            loveer: ''
           }],
        selectlistRow: [],
        fileList:[],
      };
    },
    methods: {
        //下载模板
       download:function(){
           location.href = '../../../excelTemplate/ImportDemo.xlsx';
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
      // 增加行
      addRow () {
        var list = {
          rowNum: '',
          address: this.address,
          name: this.name,
          weather: this.weather,
          phone: this.phone,
          date: this.date,
          mdate: this.mdate,
          loveer: this.loveer}
        this.tableData.push(list)
      },
      // 获取表格选中时的数据
      selectRow (val) {
        this.selectlistRow = val
      },
      cancel() {

      },
      // 删除选中行
      delData () {
        if(this.selectlistRow.length == 0){
          this.$message({
            message: '请先勾选数据，再进行删除',
            type: 'warning'
          });
        }

        for (let i = 0; i < this.selectlistRow.length; i++) {
          let val = this.selectlistRow
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          val.forEach((val, index) => {
            this.tableData.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                // i 为选中的索引
                this.tableData.splice(i, 1)
              }
            })
          })
        }
      }
    }
  }
</script>

<style lang = scss scoped>
  .NewApplicationList{
    width: 95%;
    margin: 0 auto;
    .NewApplicationList-top{
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
    .NewApplicationList-form{
      margin-top: 35px;
      overflow: hidden;
      .NewApplicationList-form-select{
        /deep/
        .el-select{
          display: inline-block;
          width: 25%;
        }
        /deep/
        .upload-demo{
          display: inline-block;
          float: right;
          margin: 0 15px;
        }
        .addTable{
          float: right;
          cursor: pointer;
          margin: 0 3px;
          margin-top: 6px;
        }
        .addTable:hover{
          color:silver;
        }
      }
      /*设置表格*/
      .NewApplicationList-form-table{
        margin: 35px 0;
        /deep/
        .el-table .cell {
          padding: 0px 3px;
        }
      }
    }
    .NewApplicationList-form-buttons{
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 35px;
      .NewApplicationList-form-button1{
        margin: 0 45px;
        background: #2258c2;
      }
      .NewApplicationList-form-button2{
        margin: 0 45px;
        background: #2258c2;
      }
    }
  }
</style>
