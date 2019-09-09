<template>
  <div class="AllApplicationsList">
    <div class="AllApplicationsList-title">
      <el-button type="primary"  size="small" class="AllApplicationsList-title-button">所有申请</el-button>
      <el-button type="primary" size="small"  class="AllApplicationsList-title-button">核对申请</el-button>
    </div>
    <div class="AllApplicationsList-table">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%">
        <el-table-column
          prop="period"
          label="业务期间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="applicant"
          label="申请单位"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="申请时间"
          align="center">
        </el-table-column>
        <el-table-column label="预览" align="center" >
          <el-table-column
            prop=""
            label=""
            align="center"
            width="70"
          >
              <template slot-scope="scope">
                <span @click="handleEdit(scope.$index, scope.row)" style="color: #2258C2">清单</span>
              </template>
          </el-table-column>
          <el-table-column
            prop=""
            label=""
            align="center"
            width="70"
          >
              <template slot-scope="scope">
                <span @click="handleDelete(scope.$index, scope.row)" style="color: #2258C2">申请表</span>
              </template>
          </el-table-column>

        </el-table-column>
        <el-table-column
          prop="examine"
          label="审核" align="center">
          <el-table-column
            prop=""
            label=""
            align="center"
            width="70"
          >
          </el-table-column>
          <el-table-column
            prop=""
            label=""
            align="center"
            width="70"
           >
          </el-table-column>
          <el-table-column
            prop="back"
            label=""
            align="center"
            width="70"
          >
            <template slot-scope="scope" >
              <span @click="handBack(scope.$index, scope.row)" style="color: #2258C2">撤回</span>
            </template>
          </el-table-column>
         <!-- <table style="width: 100%;height: 100%">
              <tr>
                <td style="width: 33.33%;text-align: center"></td>
                <td style="width: 33.33%;text-align: center"></td>
                <td style="width: 33.33%;text-align: center;border-right: none">撤回</td>
              </tr>
          </table>-->
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="AllApplicationsList-text">
      <h3>
        <span>留言给</span>：
        <span>
            <el-select v-model="value4" clearable placeholder="===请选择单位===" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
        </span>

      </h3>
      <div class="AllApplicationsList-textArea">
          <textarea>

          </textarea>
      </div>
    </div>
    <div class="AllApplicationsList-button">
      <el-button type="primary"  size="small" class="AllApplicationsList-button1">保存留言</el-button>
      <el-button type="primary" size="small"  class="AllApplicationsList-button2">发送留言</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AllApplicationsList",
    data(){
      return{
        tableData: [
            {
             period: '2019-01-01--2019-03-31 ',
             applicant: '嵊泗洋山江海联运有限公司',
             time: '2019-04-30 16:26:54',
             examine:"撤回",
             status:"已审核"
           },
          {
            period: '2019-01-01--2019-03-31 ',
            applicant: '嘉兴内河航运有限公司',
            time: '2019-04-30 16:26:52',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2019-01-01--2019-03-31 ',
            applicant: '中国上海外轮代理有限公司',
            time: '2019-04-30 13:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2019-01-01--2019-03-31 ',
            applicant: '无锡苏华船务有限公司',
            time: '2019-04-30 16:24:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2019-01-01--2019-03-31 ',
            applicant: '南京众诚航运有限公司',
            time: '2019-05-30 16:16:54',
            examine:"撤回",
            status:"已审核"
          },

          //第二时期
          {
            period: '2018-10-01--2018-12-31 ',
            applicant: '中国外运长江有限公司',
            time: '2019-07-30 16:26:54',
            examine:"撤回",
            status:"已审核"
          },{
            period: '2018-10-01--2018-12-31 ',
            applicant: '民生轮船股份有限公司',
            time: '2019-08-30 16:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2018-10-01--2018-12-31 ',
            applicant: '浙江普泰航运有限公司',
            time: '2019-09-30 16:26:54',
            examine:"撤回",
            status:"已审核"
          },{
            period: '2018-10-01--2018-12-31 ',
            applicant: '安徽省怀远县远顺航运有限公司',
            time: '2019-10-30 16:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2018-10-01--2018-12-31 ',
            applicant: '安吉川达船务有限公司',
            time: '2019-11-30 16:26:54',
            examine:"撤回",
            status:"已审核"
          },
          //  第三十七
          {
            period: '2018-04-01--2018-06-30  ',
            applicant: '上海泛亚航运有限公司',
            time: '2019-04-30 1:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2018-04-01--2018-06-30  ',
            applicant: '江苏远洋运输有限公司',
            time: '2019-04-30 2:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2018-04-01--2018-06-30  ',
            applicant: '南京恒隆航运有限公司',
            time: '2019-04-30 3:26:54',
            examine:"撤回",
            status:"已审核"
          },
          {
            period: '2018-04-01--2018-06-30  ',
            applicant: '江苏凯通航运有限公司',
            time: '2019-04-30 8:26:54',
            status:"已审核"
          },
          {
            period: '2018-04-01--2018-06-30  ',
            applicant: '上海泛亚航运有限公司',
            time: '2019-04-30 8:26:56',
            status:"已审核"
          },
        ],
        options: [
          {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: '',
        spanArr: [], //遍历数据时，根据相同的标识去存储记录
        pos: 0 // 二维数组的索引
      }
    },
    computed: {},
    created() {
      this.getList();
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handBack(index, row){
        console.log(index, row);
      },
      // 合并单元格
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // 页面列表上 表格合并行 -> 第几列(从0开始)
        // 需要合并多个单元格时 依次增加判断条件即可
        if (columnIndex === 0) {
          // 二维数组存储的数据 取出
          const _row = this.spanArr[rowIndex]
          const _col = _row > 0 ? 1 : 0
          return {
            rowspan: _row,
            colspan: _col
          }
          //不可以return {rowspan：0， colspan: 0} 会造成数据不渲染， 也可以不写else，eslint过不了的话就返回false
        } else {
          return false
        }
      },
      // 获取列表数据
      getList() {
        this.spanArr = []
        this.pos = 0
        //遍历数据
        this.tableData.forEach((item, index) => {
          //判断是否是第一项
          if (index === 0) {
            this.spanArr.push(1)
            this.pos = 0
          } else {
            //不是第一项时，就根据标识去存储
            if (this.tableData[index].period === this.tableData[index - 1].period) {
              // 查找到符合条件的数据时每次要把之前存储的数据+1
              this.spanArr[this.pos] += 1
              this.spanArr.push(0)
            } else {
              // 没有符合的数据时，要记住当前的index
              this.spanArr.push(1)
              this.pos = index
            }
          }
        })
      },
      //新的方法

    }
  }
</script>

<style  lang = scss scoped>
  .AllApplicationsList{
    width: 95%;
    margin: 0 auto;
    .AllApplicationsList-title{
      margin: 15px 0;
    }
    .AllApplicationsList-title-button{
      font-size: 14px;
      background: #2258C2;
    }
    .AllApplicationsList-table{
      margin-top: 10px;
     /* .el-table tr {
        /deep/
        .el-table_1_column_5 {
          padding: 0;
          height: 100%;
          .cell{
            width: 100%;
            padding: 0;
          }
        }
      }*/
    }
    .AllApplicationsList-text{
      h3{
        padding: 15px 0;
        span{
          font-size: 14px;
          font-weight: bold;
        }
        span:nth-child(2){
          display: inline-block;
          width: 200px;
        }
      }
      .AllApplicationsList-textArea textarea{
        width: 100%;
        height: 150px;
        resize:none;
      }
    }
    .AllApplicationsList-button{
      margin: 25px 0;
      display: flex;
      align-items: center;
      justify-content:center;
      .AllApplicationsList-button1{
        margin: 0 25px;
        font-size: 14px;
        background: #2258C2;
      }
      .AllApplicationsList-button2{
        margin: 0 45px;
        font-size: 14px;
        background: #2258C2;
      }
    }
  }

</style>
