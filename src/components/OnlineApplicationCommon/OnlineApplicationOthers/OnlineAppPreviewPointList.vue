<template>
  <div class="onlineAppPreviewPointList">
    <ul>
      <li v-for="(item1,index) in dateList" :key="index">
        <h3 @click="onlineAppEntClick(item1.ID)">
          <img :src="checkImg(item1.app_logo)" alt="">
        </h3>
        <p class="li-title" @click="onlineAppEntClick(item1.ID)">{{item1.post_title}}</p>
        <p class="li-tag"><img src="../../.././assets/img/tag.png" alt=""></p>
      </li>
    </ul>
    <!--分页-->
    <div class="onlineAppPreviewPointList_page">
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {isImg} from '@/common/common.js';
  export default {
    name: "OnlineAppPreviewPointList",
    data(){
      return{
          currentPage:1,
          pageSize:null,
          totalCount:null,
          dateList:[],
          id:null
      }
    },
      created:function () {
          this.getPageDate();
      },
      methods:{
          //点击分页获取数据
          getPageDate:function () {
              var _that  = this;
              _that.$axios.post(serviceUrl + 'qyyy',
                  _that.qs.stringify({
                      type:"yld",
                      page:_that.currentPage, //当前页
                  })
              ).then(function(res){
                  if(res.data.code == 200){
                      _that.dateList = res.data.data.data;
                      _that.totalCount = res.data.data.total;
                      _that.pageSize = res.data.data.per_page;
                  }
              }).catch(function(error){
              })
          },
          //分页1
          handleSizeChange() {

          },
          handleCurrentChange(val) {
              this.currentPage  = val;
              this.getPageDate();
          },
          checkImg(val){
              return isImg(val);
          },
          onlineAppEntClick:function (ID) {
              this.id = ID
              this.$store.commit('setOnlineDetailId',this.id);
              this.$router.push('/yy_detail/' + ID)
          }
      }
  }
</script>

<style  lang = scss scoped>
  .onlineAppPreviewPointList{
    min-height: 500px;
    ul{
      overflow: hidden;
      li{
        float: left;
        width: 33.3%;
        margin: 5px 0;
        margin-bottom: 15px;
        h3{
          img{
            width: 220px;
            height: 122px;
            cursor: pointer;
          }
        }
        .li-title{
          padding: 5px 0;
          font-size: 12px;
          color: #00297a;
          text-decoration: none;
          cursor: pointer;

        }
        .li-tag{

        }
      }
    }
    .onlineAppPreviewPointList_page{
      margin-bottom: 50px;
    }
  }
</style>
