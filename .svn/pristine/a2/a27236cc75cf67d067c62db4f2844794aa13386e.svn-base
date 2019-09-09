<template>
  <div class="InfCenterAirManifestBd">
    <h3 class="InfCenterAirManifestBd-title">{{post_title}}</h3>
    <div class="InfCenterAirManifestBd-time">
      <div class="InfCenterAirManifestBd-time-c">
        <span>{{post_date}}</span>
        <span><img src="../../.././assets/img/line2.png" alt="" style="margin-top: 2px"></span>
        <span style="padding: 0 5px">
            <img src="../../.././assets/img/share.png" alt="" style="vertical-align: sub">
        </span>
        <span><a :href="source_link" target="_blank">{{source}}</a></span>
      </div>
    </div>
    <div class="big-small-All" :class="{active1:addClass==1}">
      <div :class="{active2:addClass==2}">
          <div :class="{active3:addClass==3}">
                <div class="big-small-All-lr">
                  <div class="big-small-l">
                    <span>[</span>
                    <span  style="font-size: 18px" @click="clickAdd1()">大</span>
                    <span  style="font-size: 14px"  @click="clickAdd2()">中</span>
                    <span  style="font-size: 12px"  @click="clickAdd3()">小</span>
                    <span>]</span>
                  </div>
                  <div class="big-small-r">
                        <vshare :vshareConfig="vshareConfig"></vshare>
                  </div>
                </div>
                <div class="InfCenterAirManifestBd-bd" v-html="post_content"></div>
                <p class="InfCenterAirManifestBd-footer">
                       <vshare :vshareConfig="vshareConfig"></vshare>
                </p>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailList",
    data(){
      return{
          addClass:null,
          term_name:null,
          similar:null,
          img_data:null,
          zuixin:null,
          //详情
          dataList:null,
          post_title:null,
          post_content:null,
          post_date:null,
          views:null,
          menu_order:null,
          source:null,
          source_link:null,
          //值
          pramValue:null,
          vshareConfig: {
              shareList: [
                  // 此处放分享列表（ID）
                  'qzone',
                  'tsina',
                  'tqq',
                  'renren',
                  'sqq',

              ],
              share : [{
                  //此处放置分享按钮设置
                  'bdSize':16
                }
              ],

          }
      }
    },
    created:function(){
        this.getDate();
    },
    components:{

    },
    beforeCreate(){
        window._bd_share_main = ""
    },
    mounted(){
    },
    computed: {
        getSearchKey(){
            return this.$store.state.infcenter.detailId
        }
    },
    watch:{
        getSearchKey: {
            handler(newValue,oldValue){  //当词条改变时执行事件
                this.pramValue = newValue
                if(oldValue ==  this.$store.state.infcenter.detailId){
                    this.pramValue = oldValue
                    this.getDate();
                }else {
                    this.pramValue = newValue
                    this.getDate();
                }
            }
        },
    },
    methods:{
      clickAdd1:function () {
        this.addClass = 1;
      },
      clickAdd2:function () {
        this.addClass = 2;
      },
      clickAdd3:function () {
        this.addClass = 3;
      },
      getDate:function(){
          var _that  = this
          _that.pramValue = _that.$store.state.infcenter.detailId
          _that.$axios.get(serviceUrl + 'detail'+ '/' + _that.pramValue)
              .then(function(res){
                  if(res.data.code == 200){
                      //图片新闻
                      _that.img_data = JSON.parse(res.data.img_data);
                      _that.$store.commit('setImgData',_that.img_data);
                      //最新文章
                      _that.zuixin = JSON.parse(res.data.zuixin);
                      _that.$store.commit('setNewArticle',_that.zuixin);
                      // 延伸阅读
                      _that.similar = JSON.parse(res.data.data).similar;
                      _that.$store.commit('setSimilar',_that.similar);

                      //文章详情
                      _that.dataList = JSON.parse(res.data.data).data[0];
                      _that.post_title = JSON.parse(res.data.data).data[0].post_title
                      _that.post_content = JSON.parse(res.data.data).data[0].post_content
                      _that.post_date = JSON.parse(res.data.data).data[0].post_date
                      _that.menu_order = JSON.parse(res.data.data).data[0].menu_order
                      _that.views = JSON.parse(res.data.data).data[0].views
                      _that.source = JSON.parse(res.data.data).data[0].source
                      _that.source_link = JSON.parse(res.data.data).data[0].source_link
                      // 文章标签
                      _that.term_name = res.data.term_name


                  }
              }).catch(function(error){
          })
      },


    }
  }
</script>

<style lang = scss scoped>
  .InfCenterAirManifestBd{
    width: 95%;
    margin: 0 auto;
    .InfCenterAirManifestBd-title{
      font-size: 24px;
      color: #000000;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 30px;
      font-weight: normal;
    }
    .InfCenterAirManifestBd-time{
      border-bottom: 1px solid #e8e8e8;
      .InfCenterAirManifestBd-time-c{
        width:42%;
        margin: 0 auto;
        padding-bottom: 25px;
        span:nth-child(1){
          color: #a2a2a2;
          font-size: 12px;
        }
        span:nth-child(2){
          padding: 0 10px;
          a{

          }
        }
        span:nth-child(3){
          a{

          }
        }
        span:nth-child(4){
          a{
            color: #a2a2a2;
            font-size: 12px;
          }
        }
      }
    }
    .big-small-All{
      padding: 15px 0;
      .big-small-All-lr{
        overflow: hidden;
        .big-small-l{
          float:left;
          width: 30%;
          margin-top: 3px;
          span{
            padding: 0 3px;
            font-size: 14px;
            color: #a2a2a2;
          }

        }
        .big-small-r{
          float: right;
        }
      }
      .InfCenterAirManifestBd-bd{
        font-size: 12px;
        color: #323232;
        text-align: left;
        margin-bottom: 10px;
        line-height: 2em;
      }
      .InfCenterAirManifestBd-footer{
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 25px;
        float: right;
      }
    }
    .active1{
      .big-small-l{
        span:nth-child(2){
          color: #000000 !important;
        }
      }
      .InfCenterAirManifestBd-bd{
        font-size: 16px !important;
      }
    }
    .active2{
      .big-small-l{
        span:nth-child(3){
          color: #000000 !important;
        }
      }
      .InfCenterAirManifestBd-bd{
        font-size: 14px !important;
      }

    }
    .active3{
      .big-small-l{
        span:nth-child(4){
          color: #000000 !important;
        }
      }
      .InfCenterAirManifestBd-bd{
        font-size: 12px !important;
      }

    }
  }
</style>
