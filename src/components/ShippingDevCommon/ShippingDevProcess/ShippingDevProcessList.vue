<template>
  <div class="ShippingDevProcessList">
    <div class="ShippingDevProcessList-list">
      <ul class="">
        <li  v-for="(item1,index) in dateList" :key="index">
          <h3  @click="processClick(item1.ID)">{{item1.post_title}}</h3>
          <p class="li-bd">
            {{item1.post_content}}
            <span  @click="processClick(item1.ID)"><img src="../../.././assets/img/readmore.png" alt=""></span>
          </p>
          <p>
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>12</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/date.png" alt=""></span>
            <span>{{item1.post_date}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/share.png" alt=""></span>
            <span><a :href="item1.source_link" style="color: #a2a2a2;" target="_blank">{{item1.source}}</a></span>
v
          </p>
        </li>
      </ul>
    </div>
    <!--分页-->
    <div class="ShippingDevProcessList_page">
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
  export default {
    name: "ShippingDevProcessList",
    data(){
      return{
          currentPage:1,
          totalCount:null,
          pageSize:null,
          dateList:[],
          newArticleList:[],
          id:null
      }
    },
      created:function () {
          this.getPageDate();
      },
      methods:{
          //点击分页获取数据
          getPageDate:function () {
              var _that  = this
              _that.$axios.post(serviceUrl + 'hyfz_jscg',
                  _that.qs.stringify({
                      page:_that.currentPage, //当前页
                  })
              ).then(function(res){
                  if(res.data.code == 200){
                      _that.dateList = res.data.data.data;
                      _that.totalCount = res.data.data.total;
                      _that.pageSize = res.data.data.per_page;
                      _that.newArticleList = JSON.parse(res.data.zuixin)
                      _that.$store.commit('setNewArticle',_that.newArticleList);
                  }
              }).catch(function(error){
              })
          },
          //分页
          handleSizeChange(){

          },
          handleCurrentChange(val) {
              this.currentPage  = val;
              this.getPageDate();
          },
          //建设历程
          processClick:function (ID) {
              this.id = ID
              this.$store.commit('setDetailId',this.id);
              this.$router.push('/detail/' + ID)
          }
      }
  }
</script>

<style lang = scss scoped>
  .ShippingDevProcessList{
    width: 100%;
    .ShippingDevProcessList-list{
      min-height: 500px;
      ul{
        padding-right: 15px;
        li{
          margin-bottom: 40px;
          h3{
            font-size: 20px;
            color: #000;
            margin-bottom: 20px;
            font-weight: 400;
            cursor: pointer;
          }
          .li-bd{
            font-size: 14px;
            color: #5a5a5a;
            line-height: 24px;
            margin-bottom: 15px;
            span{
                float: none;
                img{
                  cursor: pointer;
                }
            }
          }
          p{
            overflow: hidden;
            span{
              float: left;
              color: #a2a2a2;
              font-size: 12px;
              padding: 0 5px;
            }
            span:nth-child(1){

            }
            span:nth-child(2){

            }
            span:nth-child(3){
              padding: 0 10px;
            }
            span:nth-child(4){

            }
            span:nth-child(5){
              padding-right: 10px;
            }
            span:nth-child(6){

            }
            span:nth-child(7){

            }
            span:nth-child(8){
              padding: 0 10px;
            }
            span:nth-child(9){

            }
            span:nth-child(10){
                a{
                  color: #a2a2a2;
                }
            }
          }
        }
      }
    }
  }
  .ShippingDevProcessList_page{
    margin-bottom: 50px;
  }
</style>
