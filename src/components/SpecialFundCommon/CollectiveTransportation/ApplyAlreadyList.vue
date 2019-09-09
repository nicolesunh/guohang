<template>
    <div class="ApplyAlreadyList">
      <div class="ApplyAlreadyList-title">
          已有申请
      </div>
      <div class="ApplyAlreadyList-table">
        <el-table
          :data="tableData"
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
            label="申请时间" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <span @click="handleEdit(scope.$index, scope.row)" style="padding: 0 3px;cursor: pointer;color:#2258c2;">编辑</span>
              <span @click="handleDelete(scope.$index, scope.row)" style="padding: 0 3px;cursor: pointer;color:#2258c2;">删除</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="viewBefore"
            label="预览打印" align="center">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="ApplyAlreadyList-text">
        <h3>来自管理员的留言：</h3>
        <div class="ApplyAlreadyList-textArea">
          <textarea>

          </textarea>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ApplyAlreadyList",
        data(){
          return{
            tableData: [
              {
                period: ' 2018.6-2019.9',
                applicant: '王小虎',
                time: '2016-05-03',
                viewBefore:"qqq",
                status:"已经审核"
              }
            ]
          }
        },
        methods:{
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          }
        }
    }
</script>

<style  lang = scss scoped>
  .ApplyAlreadyList{
    width: 95%;
    margin: 0 auto;
    .ApplyAlreadyList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .ApplyAlreadyList-table{
       margin-top: 10px;
    }
    .ApplyAlreadyList-text{
      h3{
        font-size: 14px;
        font-weight: bold;
        padding: 10px 0;
      }
      .ApplyAlreadyList-textArea textarea{
         width: 100%;
         height: 150px;
         resize:none;
      }
    }
  }

</style>
