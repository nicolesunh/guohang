<template>
    <div class="ShippingDevDynamicsList">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in newzczcList"
            :key="index"
            :icon="activity.icon"
            :color="activity.color"
            >
            <span style="padding-right: 20px">{{activity.post_date }}</span>
            <span @click="zczcClick(activity.ID)" style="cursor: pointer">{{activity.post_title}}</span>
          </el-timeline-item>
        </el-timeline>
      </div>
      <!--分页-->
      <div class="ShippingDevDynamicsList_page">
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
        name: "ShippingDevDynamicsList",
        data(){
            return{
                reverse: true,
                zczcList:[],
                newzczcList:[],
                currentPage:1,
                pageSize:null,
                totalCount:null,
                id:null
            }
        },
        mounted:function(){
            this.getPageDate();
        },
        methods:{
            getPageDate:function () {
                var _that  = this
                _that.$axios.post(serviceUrl  + "hyfz_hyzxdt",
                    _that.qs.stringify({
                        page:_that.currentPage, //当前页
                    })
                ).then(function(res){
                        if(res.data.code == 200){
                            _that.totalCount = res.data.data.total;
                            _that.pageSize = res.data.data.per_page;
                            _that.zczcList =res.data.data.data
                            _that.newzczcList = [];
                            _that.zczcList.forEach(item =>{
                                _that.newzczcList.push({
                                    "icon":"el-icon-pie-chart",
                                    "ID":item.ID,
                                    "post_date":item.post_date,
                                    "post_modified":item.post_modified,
                                    "post_title":item.post_title,
                                    "post_content":item.post_content,
                                    "color":"#4074C0",
                                    "guid":item.guid
                                })
                            });
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
            //建设动态
            zczcClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        },
    }
</script>

<style  lang = scss scoped>
  .ShippingDevDynamicsList{
     /deep/
    .el-timeline-item__node--normal{
      width: 15px;
      height: 15px;
    }
    /deep/
    .el-timeline-item__wrapper{
      top:-1px;
    }
    .ShippingDevDynamicsList_page{
      margin-bottom: 50px;
    }

  }
</style>
