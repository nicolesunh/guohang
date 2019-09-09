<template>
    <div class="Report">
      <NewsletterTop></NewsletterTop>
      <div class="Report-bd">
        <div class="Report-bd-top">
           <span>文章列表</span>
        </div>
        <div class="Report-bd-header">
            <div style="display: inline-block;width: 4%;overflow: hidden;margin: 0 5px;cursor: pointer" class="edit_add"  @click="addClick">
              <img src="../../.././assets/img/edit_add.png" alt="" style="vertical-align: text-top;margin-right: 3px">新增
            </div>
            <div style="display: inline-block;width: 14%;overflow: hidden;margin: 0 5px">
                <label style="display: inline-block;width: 35%;float: left;margin-top: 7px">开始日期</label>
                <el-date-picker
                  style="display: inline-block;width: 65%;float: right"
                  v-model="value1"
                  type="date"
                  size="small"
                  placeholder="选择开始日期">
                </el-date-picker>
            </div>
            <div style="display: inline-block;width: 14%;overflow: hidden;margin: 0 8px">
               <label  style="display: inline-block;width: 35%;margin-top: 7px">结束日期</label>
                <el-date-picker
                  style="display: inline-block;width: 65%;float: right"
                  v-model="value2"
                  type="date"
                  size="small"
                  placeholder="选择结束日期">
                </el-date-picker>
            </div>
            <div style="display: inline-block;width: 15%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 35%;float: left;margin-top: 7px">所属组织</label>
              <el-input v-model="input1" size="small" placeholder="请输入所属组织" style="display: inline-block;width: 65%;float: right"></el-input>
            </div>
            <div style="display: inline-block;width: 12%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 22%;float: left;margin-top: 7px">作者</label>
              <el-input v-model="input2" size="small" placeholder="请输入作者" style="display:inline-block;width:78%;float: right"></el-input>
            </div>
            <div style="display: inline-block;width: 12%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 22%;float: left;margin-top: 7px">状态</label>
              <el-select v-model="selectValue" placeholder="请选择状态"  size="small" style="display: inline-block;width: 78%;float: left">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="display: inline-block;width: 12%;margin: 0 8px">
              <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
            </div>
            <div style="display: inline-block;width: 8%;" class="report-check">
               <el-checkbox v-model="checked">只看自己</el-checkbox>
            </div>

        </div>
        <!--可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。-->
        <div class="Report-bd-table">
           <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题"
              width="220"
              align="center"
            >
              <template slot-scope="scope">
                <p @click="titleClick(scope.row)" :class="{activeClass:changeColor = true}">{{scope.row.title}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="author"
              label="作者"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="subordinate"
              label="所属组织"
              width="200"
              align="center">
            </el-table-column>
             <el-table-column
               prop="creationTime"
               label="创建时间"
               width="180"
               align="center">
             </el-table-column>
             <el-table-column
               prop="enclosure"
               label="附件"
               width="200"
               align="center">
               <template slot-scope="scope">
                 <p @click="enclosureClick(scope.row)"  :class="{activeClass:changeColor = true}">{{scope.row.enclosure}}</p>
               </template>
             </el-table-column>
             <el-table-column
               prop="status"
               label="状态"
               width="100"
               align="center">
             </el-table-column>
             <el-table-column
               prop="isPublic"
               label="是否公开"
               width="100"
               align="center">
             </el-table-column>
             <el-table-column
               label="操作"
               align="center">
               <template slot-scope="scope">
                 <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                 <el-button type="text" size="small">编辑</el-button>
               </template>
             </el-table-column>
          </el-table>
        </div>
        <div class="Report-bd-page">
          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 15, 20]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </div>
      <!--创建应用弹框-->
      <AddModal :dialogStatus = "addUserStatus" @on-result-change="onAddPermissionUserResult"></AddModal>
    </div>
</template>

<script>
    import NewsletterTop from "../../.././components/SpecialFundCommon/Newsletter/NewsletterTop"
    import AddModal from "../../.././components/SpecialFundCommon/Newsletter/AddModal"

    export default {
        name: "Report",
        data(){
          return{
            value1: '',
            value2:"",
            input1:"",
            input2:"",
            selectValue:"",
            options: [
              {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }],
            checked:"",
            //分页
            tableData: [
              {
                title: '上港集团正式启动进口博览会物资服务保障工作1',
                author: '王小虎',
                subordinate: '上海中国航海博物馆',
                creationTime:"2019-07-19 09:50:34",
                enclosure:"20190716中海博荣获2019第五届上海临港海洋节最佳组织奖.jpg",
                status:"已发送",
                isPublic:"公开"
              },
              {
                title: '上港集团正式启动进口博览会物资服务保障工作2',
                author: '王小虎',
                subordinate: '上海中国航海博物馆',
                creationTime:"2019-07-19 09:50:34",
                enclosure:"20190716中海博荣获2019第五届上海临港海洋节最佳组织奖.jpg",
                status:"已发送",
                isPublic:"公开"
              },
              {
                title: '上港集团正式启动进口博览会物资服务保障工作3',
                author: '王小虎',
                subordinate: '上海中国航海博物馆',
                creationTime:"2019-07-19 09:50:34",
                enclosure:"20190716中海博荣获2019第五届上海临港海洋节最佳组织奖.jpg",
                status:"已发送",
                isPublic:"公开"
              }],
            currentPage:1, //当前页
            pageSize:null,    //每页显示的条数
            page_index:null,
            totalCount:null,
            changeColor:false,
            //弹框
            addUserStatus: false,
          }
        },
        created:function(){

        },
        components: {
          NewsletterTop:NewsletterTop,
          AddModal:AddModal,
        },
        methods:{
          handleClick(row) {
            console.log(row);
          },
          titleClick(row) {
            console.log(row);
            //调取接口，改变row中的参数的状态
            //重新获取数据
          },
          enclosureClick(row){
            console.log(row);
            //调取接口，改变row中的参数的状态
            //重新获取数据
          },
          //分页
          handleSizeChange(size) {
            console.log("当前每页展示的条数为" + size + "条");
            this.pageSize = size;
          },
          handleCurrentChange(val) {
            console.log("当前页为第" + val + "页");
            this.currentPage  = val;
            //this.getDate();
          },
          //获取分页数据
          getDate:function () {
            // this.$http.post(serviceUrl + '', {
            //   page_index:this.currentPage,
            //   page_size: this.pageSize
            // }).then((data)=> {
            //
            // });
          },
          //点击添加应用按钮，完善信息
          addClick:function () {
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
            });
            setTimeout(() => {
              loading.close();
              this.addUserStatus = true;  //展开应用弹框
            }, 100);
          },
          //弹框
          onAddPermissionUserResult: function (val) {
            this.addUserStatus = val;
          },

        }
    }
</script>

<style  lang = scss scoped>
  .Report{
    width: 100%;
    background: #ffffff;
    .Report-bd{
      width: 1250px;
      margin: 0 auto;
      padding: 20px 40px;
      margin-top: 45px;
      min-height: 800px;
      .Report-bd-top{
        background: #E0ECFF;
        height: 30px;
        line-height: 30px;
        text-align: left;
        border: 1px solid #95B8E7;
        border-bottom:none;
        font-size: 15px;
        font-weight: bold;
        color: #0E2D5F;
        span{
          margin-left: 10px;
        }
      }
      .Report-bd-header{
        background: #dddddd;
        height: 60px;
        display: flex;
        border: 1px solid #95B8E7;
        border-bottom:none;
        align-items: center;
        overflow: hidden;
        .edit_add{
          padding: 3px;
          border: 1px solid #dddddd;
        }
        .edit_add:hover{
          border-radius: 5px;
          background: #eaf2ff;
          border: 1px solid #b7d2ff;
          color: #000000;
        }
        /deep/
        .report-check .el-checkbox .el-checkbox__label{
            line-height: 20px;
            padding-left: 5px;
        }
      }
      .Report-bd-table{
        border: 1px solid #95B8E7;
        border-bottom: none;
        /deep/
        .el-table{
          .el-table__row{
            .el-table_1_column_1{
              color: #0000EE;
              .cell{
                cursor: pointer;
              }
            }
            .el-table_1_column_5{
              color: #0000EE;
              .cell{
                cursor: pointer;
              }
            }
          }
          .activeClass{
            color: #551A8B;
          }
        }

      }
      .Report-bd-page{
        border: 1px solid #95B8E7;
        height: 50px;
        display:flex;
        align-items:center;/*垂直居中*/
        /*justify-content: center;!*水平居中*!*/
        .block{
          margin-left: 10px;
        }
      }
    }
  }
</style>
