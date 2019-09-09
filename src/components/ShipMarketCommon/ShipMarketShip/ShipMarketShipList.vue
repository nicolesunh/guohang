<template>
  <div class="shipMarketShipList">
    <div class="shipMarketShipList-list">
      <ul class="">
        <li v-for="(item,index) in dateList" :key="index">
          <h3 @click="shipMarketClick(item.ID)">{{item.post_title}} </h3>
          <p>
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>{{}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <span>{{}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/date.png" alt=""></span>
            <span>{{item.post_date}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/share.png" alt=""></span>
            <span><a :href="item.source_link" style="color: #a2a2a2;">{{item.source}}</a></span>
          </p>
        </li>
      </ul>
    </div>
    <!--分页-->
    <div class="shipMarketShipList_page">
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
    name: "ShipMarketShipList",
    data(){
      return{
        currentPage:1,
        pageSize:null,
        totalCount:null,
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
              _that.$axios.post(serviceUrl + 'hysc_cbsc',
                  _that.qs.stringify({
                  page:_that.currentPage, //当前页
              })
              ).then(function(res){
                      if(res.data.code == 200){
                          _that.dateList = res.data.data.data;
                          _that.totalCount = res.data.data.total;
                          _that.pageSize = res.data.data.per_page;
                          _that.newArticleList =  res.data.zuixin
                          _that.$store.commit('setNewArticle',_that.newArticleList);
                      }
                  }).catch(function(error){
              })
          },
          //分页
          handleSizeChange(size) {

          },
          handleCurrentChange(val) {
              this.currentPage  = val;
              this.getPageDate();
          },
          shipMarketClick:function (ID) {
              this.id = ID
              this.$store.commit('setDetailId',this.id);
              this.$router.push('/detail/' + ID)
          }
      }
  }
</script>

<style lang = scss scoped>
  .shipMarketShipList{
    .shipMarketShipList-list{
      min-height: 500px;
      ul{
        padding-right: 15px;
        li{
          margin-bottom: 25px;
          h3{
            font-size: 18px;
            color: #000;
            margin-bottom: 20px;
            font-weight: 400;
            cursor: pointer;
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

            }
            span:nth-child(6){
              padding-right: 10px;
            }
            span:nth-child(7){

            }
            span:nth-child(8){

            }
            span:nth-child(9){
              padding: 0 15px;
            }
            span:nth-child(10){

            }
            span:nth-child(11){

            }
          }
        }
      }
    }
  }
  .shipMarketShipList_page{
    margin-bottom: 50px;
  }
</style>
