<template>
  <div class="OnlineAppMaritimeAffairsList">
    <ul>
      <li v-for="(item1,index) in dateList" :key="index">
        <div class="li-l" >
          <img :src="checkImg(item1.app_logo)" @click="onlineAppSearchClick(item1.ID)" alt="">
        </div>
        <div class="li-r">
          <h3  @click="onlineAppSearchClick(item1.ID)">{{item1.post_title}}</h3>
          <p><img src="../../.././assets/img/tag.png" alt=""></p>
        </div>
      </li>
    </ul>
    <!--分页-->
    <div class="OnlineAppMaritimeAffairsList_page">
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
    name: "OnlineAppMaritimeAffairsList",
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
            _that.$axios.post(serviceUrl + 'xxcx',
                _that.qs.stringify({
                    type:"hs",
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
        onlineAppSearchClick:function (ID) {
            this.id = ID
            this.$store.commit('setOnlineDetailId',this.id);
            this.$router.push('/yy_detail/' + ID)
        }
    }
  }
</script>

<style lang = scss scoped>
  .OnlineAppMaritimeAffairsList{
    ul{
      overflow: hidden;
      li{
        float: left;
        width: 50%;
        overflow: hidden;
        margin-bottom: 15px;
        .li-l{
          float: left;
          width: 20%;
          img{
            width: 60px;
            height: 60px;
            cursor: pointer;
          }
        }
        .li-r{
          float: left;
          width: 80%;
          h3{
            margin-bottom: 5px;
            font-size: 16px;
            line-height: 24px;
            color: #000;
            font-weight: 300;

          }

        }
      }
    }
    .OnlineAppMaritimeAffairsList_page{
      margin-bottom: 50px;
    }
  }
</style>
