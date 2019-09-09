<template>
  <div class="UserListAllList">
    <div class="UserListAllList-title">
        用户中心
    </div>
    <div class="UserListAllList-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="loginName"
          label="登录名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="unitName"
          label="单位名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色" align="center">
        </el-table-column>

      </el-table>
    </div>

  </div>
</template>

<script>
  export default {
    name: "UserListAllList2",
    data(){
      return{
        tableData: [
            /*{
              loginName: '王小虎',
              unitName: '上海招生办公室',
              role:"用户"
            },*/

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
  .UserListAllList{
    width: 95%;
    margin: 0 auto;
    .UserListAllList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .UserListAllList-table{
      margin-top: 10px;
    }
  }

</style>
