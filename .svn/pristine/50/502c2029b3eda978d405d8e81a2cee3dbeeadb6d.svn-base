<template>
  <div class="ExistApplyList">
    <div class="ExistApplyList-title">
       已有申请
    </div>
    <div class="ExistApplyList-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="entryName"
          label="项目名称"
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
          prop="contactNumber"
          label="联系电话"
          align="center">
        </el-table-column>
        <el-table-column
          prop="contactPerson"
          label="联 系 人	"
          align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          label="申请时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center">
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" style="color: #2258c2">查看</el-button>
            <el-button type="text" size="small"  style="color: #2258c2">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ExistApplyList",
    data(){
      return{
        tableData: [
          {
            entryName: '王小虎',
            applicant: '上海招生办公室',
            contactNumber:"15678945620",
            contactPerson:"",
            time:"2019.6.25",
            status:"已经审核",
            operation:""
          },

        ]
      }
    },
    methods:{
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style  lang = scss scoped>
  .ExistApplyList{
    width: 95%;
    margin: 0 auto;
    .ExistApplyList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .ExistApplyList-table{
      margin-top: 10px;
    }
  }

</style>
