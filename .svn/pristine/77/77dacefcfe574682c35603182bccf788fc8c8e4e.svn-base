<template>
    <div class="indexHome1">
      <div class="indexHome-bd-top">
        <!--走马灯-->
        <div class="slide_container">
          <el-carousel :autoplay="true" arrow="always">
            <el-carousel-item v-for="(item1,index) in jiaodianList" :key="index">
              <div class="slide_container_item">
                <img :src="checkImg(item1.img)" alt="" class="slide_container-img" style="cursor: pointer" @click="jiaodianClick(item1.ID)">
                <h3 class="carouselTitle"  @click="jiaodianClick(item1.ID)"><router-link to="">{{item1.post_title}}</router-link></h3>
                <p class="slide_container-p">
                   {{item1.post_content}}
                  <span  @click="jiaodianClick(item1.ID)">
                    <img src="../../.././assets/img/readmore.png" alt="" style="cursor: pointer">
                  </span>
                </p>
              </div>
              <div class="slide_container_item_time">
                  <span><img src="../../.././assets/img/eye.png" alt=""></span>
                  <span>{{item1.views}}</span>
                  <span><img src="../../.././assets/img/line.png" alt=""></span>
                  <span><img src="../../.././assets/img/tag.png" alt=""></span>
                  <span><img src="../../.././assets/img/date.png" alt=""></span>
                  <span>{{item1.post_date}}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--列表-->
        <div class="slide_list">
          <ul>
            <li v-for="(item2,index) in jrywList" :key="index" @click="jrywClick(item2.ID)"><router-link to="">{{item2.post_title}}</router-link></li>
          </ul>
        </div>
        <!--图片列表-->
        <div class="slide_list_img">
           <ul>
               <li v-for="(item3,index) in rmtjList" :key="index" >
                   <div v-if="index < 2">
                       <div class="li-img" style="display: block">
                            <span  @click="rmtjClick(item3.ID)"><img :src="item3.img" alt=""></span>
                       </div>
                       <div class="picpost-info">
                         <span class="wee-eye"><img src="../../.././assets/img/eye.png" alt=""></span>
                         <span>{{item3.views}}</span>
                         <span class="wee-line"><img src="../../.././assets/img/line2.png" alt=""></span>
                         <span class="wee-tag"><img src="../../.././assets/img/tag.png" alt=""></span>
                         <router-link to="">{{item3.tags}}</router-link>
                       </div>
                       <div class="title" @click="rmtjClick(item3.ID)">{{item3.post_title}}</div>
                   </div>
               </li>
           </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import {isImg} from '@/common/common.js';
    export default {
        name: "IndexHome1",
        data(){
          return{
            imgContents:[],
            jiaodianList:[],//焦点图
            rmtjList:[], //图片列表
            jrywList:[],
            id:null
          }
        },
        mounted:function(){
            this.getDate();
        },
        methods:{
            getDate:function () {
                if(this.$store.state.home.home == null){
                    this.getDate2();
                }else {
                    this.jiaodianList = this.$store.state.home.home.jiaodian
                    this.rmtjList = this.$store.state.home.home.rmtj
                    this.jrywList = this.$store.state.home.home.jryw
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl)
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.jiaodianList = res.data.data.IndexData.jiaodian
                            _that.rmtjList = res.data.data.IndexData.rmtj
                            _that.jrywList = res.data.data.IndexData.jryw
                        }
                    }).catch(function(error){

                })
            },
            checkImg(val){
                return isImg(val);
            },
            //焦点
            jiaodianClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push( '/detail/' + ID)
            },
            //列表
            jrywClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push( '/detail/' + ID)
            },
            //图片列表
            rmtjClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push( '/detail/' + ID)
            },

        },

    }
</script>

<style lang = scss scoped>
  .indexHome1{
    margin-top: 0px;
  }
  .indexHome-bd-top{
    overflow: hidden;
    width: 100%;
    .slide_container{
      width: 460px;
      height: 430px;
      float: left;
      background:#2359c2;
      .el-carousel{
        height: 430px;
        /deep/
        .el-carousel__container{
          height: 430px;
          .slide_container_item{
            width: 460px;
            position: relative;
            .slide_container-img{
              width: 100%;
              height: 250px;
              position: fixed;
              left: 0;
              top: 0;
            }
            .carouselTitle{
              color: #ffffff;
              width: 98%;
              margin: 0 auto;
              padding-top:260px;
              padding-bottom: 5px;
              border-bottom: 1px solid #ffffff;
              text-align: center;
              a{
                color: #ffffff;
                font-size: 16px;
                padding: 5px 0;
              }
            }
            .slide_container-p{
              color: #EAEAEA;
              text-align: left;
              width: 92%;
              height: 72px;
              margin: 0 auto;
              font-size: 13px;
              line-height: 24px;
              text-indent: 2em;
              display: -webkit-box;/** 对象作为伸缩盒子模型显示 **/
              word-break: break-all;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;/** 设置或检索伸缩盒对象的子元素的排列方式 **/
              -webkit-line-clamp: 3;/** 显示的行数 **/
              overflow: hidden;
              span{
                margin-left: 5px;
              }
            }
          }
          .slide_container_item_time{
            margin-top: 15px;
            color: #ffffff;
            overflow: hidden;
            span{
              float: left;
              padding: 0 5px;
              font-size: 12px;
            }
            span:nth-child(1){
              padding-left: 20px;
            }
          }
        }
      }

    }
    .slide_list{
      width: 220px;
      float: left;
      margin-left: 15px;
      ul{
        li{
          border-bottom: 1px solid #ddd;
          padding-bottom: 15px;
          color: #333;
          font-weight: normal;
          font-size: 14px;
          text-align: left;
          line-height: 1.5em;
          margin-bottom: 8px;
        }
      }
    }
    .slide_list_img{
      width: 220px;
      float: left;
      padding-left: 15px;
      ul{
        li{
          margin-bottom: 15px;
          .li-img{
            span{
                img{
                    width: 222px;
                    height: 120px;
                    cursor: pointer;
                }
            }
          }
          .picpost-info{
            padding: 5px 0;
            overflow: hidden;
            span{
              float: left;
              color: #a2a2a2;
            }
            a{
              color: #a2a2a2;
            }
            .wee-eye{
              padding: 0 3px;
            }
            .wee-line{
              padding: 0 10px;
            }
            .wee-tag{
              padding: 0 10px;
            }
          }
          .title{
            font-size: 18px;
            text-align: left;
            cursor: pointer;
          }
        }
      }
    }
  }
  .slide_container /deep/ .el-carousel__indicators--horizontal{
    display: none;
  }
</style>
