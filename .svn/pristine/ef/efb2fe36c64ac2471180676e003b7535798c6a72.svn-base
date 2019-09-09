<template>
     <div class="indexHome3">
          <div class="indexHome3All">
            <div class="indexHome3All-Item-1">
              <ul>
                 <h3>
                   <span>航运指数</span>
                   <span><router-link to="/shipMarket/shipMarketIndex"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
                 </h3>
                 <li v-for="(item1,index) in hyzsList" :key="index" >
                     <p @click = "hyzsClick(item1.ID)"><img :src="checkImg(item1.img)" alt="" style="cursor: pointer"></p>
                     <p>
                       <span><img src="../../.././assets/img/eye.png" alt=""></span>
                       <span>1816</span>
                       <span><img src="../../.././assets/img/line2.png" alt=""></span>
                       <span><img src="../../.././assets/img/tag.png" alt=""></span>
                       <a @click = "hyzsClick(item1.ID)">{{item1.post_title}}</a>
                     </p>
                     <div v-html="item1.post_content"></div>
                 </li>
              </ul>
            </div>
            <div class="indexHome3All-Item-2">
              <div class="indexHome3All-Item-2-div">
                <ul>
                  <h3>
                    <span>综合交通</span>
                    <span><router-link to="/shipMarket/shipMarketComprehensive"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
                  </h3>
                  <li  v-for="item2 in zhjtList" :key="item2.ID" @click = "zhjtClick(item2.ID)">
                    {{item2.post_title}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="indexHome3All-Item-3">
              <div class="indexHome3All-Item-3-div">
                <ul>
                  <h3>
                    <span>政策公告</span>
                    <span><router-link to="/policyMnt/policyMntAnnouncement"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
                  </h3>
                  <li v-for="item3 in zcggList" :key="item3.ID" @click = "zcggClick(item3.ID)">
                     {{item3.post_title}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="indexHome3All-Item-4">
              <ul>
                <h3>
                  <span>建设历程</span>
                  <span><router-link to="/shippingDevelopment/shippingDevProcess"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
                </h3>
                <li v-for="(item4,index) in jscgList" :key="index" >
                  <div v-if="index < 3">
                      <p @click = "jscgClick(item4.ID)">{{item4.post_title}}</p>
                      <p>
                        <span><img src="../../.././assets/img/eye.png" alt=""></span>
                        <span>{{item4.views}}</span>
                        <span><img src="../../.././assets/img/line2.png" alt=""></span>
                        <span><img src="../../.././assets/img/tag.png" alt=""></span>
                        <span><router-link to="">{{item4.tags}}</router-link></span>
                      </p>
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
        name: "IndexHome3",
        data(){
            return{
              zhjtList:[],  //综合交通
              zcggList:[], //政策公告
              jscgList:[], //建设历程
              hyzsList:[], //航运指数
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
                    this.jscgList = this.$store.state.home.home.jscg
                    this.zcggList = this.$store.state.home.home.zcgg
                    this.zhjtList = this.$store.state.home.home.zhjt
                    this.hyzsList = this.$store.state.home.home.hyzs
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl)
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.jscgList = res.data.data.IndexData.jscg
                            _that.zcggList = res.data.data.IndexData.zcgg
                            _that.zhjtList = res.data.data.IndexData.zhjt
                            _that.hyzsList = res.data.data.IndexData.hyzs
                        }
                    }).catch(function(error){

                })
            },
            checkImg(val){
                return isImg(val);
            },
            hyzsClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            zhjtClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            zcggClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            jscgClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
        },

    }
</script>

<style lang = scss scoped>
  .indexHome3All{
    overflow: hidden;
    margin-top: 15px;
    .indexHome3All-Item-1{
      width: 25%;
      float: left;
      ul{
         width: 92%;
         margin: 0 auto;
         h3{
           font-size: 18px;
           color: #2258c2;
           margin-bottom: 20px;
           padding-bottom: 5px;
           border-bottom: 1px solid #ddd;
           text-align: left;
           overflow: hidden;
           span:nth-child(1){
             float: left;
           }
           span:nth-child(2){
             float: right;
           }
         }
         li{
           padding: 5px 0;
           p:nth-child(1){
              img{
                width: 100%;
                height: 120px;
              }
           }
           p:nth-child(2){
             overflow: hidden;
             padding: 10px 0px;
             border-bottom: 1px solid  #ddd;
             span{
               float: left;
               padding: 0 5px;
             }
             span:nth-child(1){
               padding-left:0px;
             }
             span:nth-child(2){
               color: #a2a2a2;
               font-size: 12px;
               margin-top: 2px;
             }
             a{
               font-size: 12px;
               margin-top: 1px;
               text-align: left;
             }
           }
           p:nth-child(3){
               text-align: left;
               color: #333;
               font-size: 16px;
           }
         }
      }
    }
    .indexHome3All-Item-2{
      width: 25%;
      float: left;
      .indexHome3All-Item-2-div{
        ul{
          width: 92%;
          margin: 0 auto;
          h3{
            font-size: 18px;
            color: #2258c2;
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            overflow: hidden;
            span:nth-child(1){
              float: left;
            }
            span:nth-child(2){
              float: right;
            }
          }
          li{
              text-align: left;
              border-bottom: 1px solid #ddd;
              padding: 15px 0;
              cursor: pointer;
          }
        }
      }

    }
    .indexHome3All-Item-3{
      width: 25%;
      float: left;
      .indexHome3All-Item-3-div{
        ul{
          width: 92%;
          margin: 0 auto;
          h3{
            font-size: 18px;
            color: #2258c2;
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            overflow: hidden;
            span:nth-child(1){
              float: left;
            }
            span:nth-child(2){
              float: right;
            }
          }
          li{
            text-align: left;
            border-bottom: 1px solid #ddd;
            padding: 15px 0;
            cursor: pointer;
            min-height: 34px;
          }
        }
      }

    }
    .indexHome3All-Item-4{
      width: 25%;
      float: left;
      ul{
        width: 92%;
        margin: 0 auto;
        h3{
          font-size: 18px;
          color: #2258c2;
          margin-bottom: 20px;
          padding-bottom: 5px;
          border-bottom: 1px solid #ddd;
          text-align: left;
          overflow: hidden;
          span:nth-child(1){
            float: left;
          }
          span:nth-child(2){
            float: right;
          }
        }
        li{
          padding: 5px 0;
          margin-bottom: 15px;
          p:nth-child(1){
            text-align: left;
            font-size: 16px;
            color: #333;
            cursor: pointer;
          }
          p:nth-child(2){
            overflow: hidden;
            padding: 10px 0px;
            border-bottom: 1px solid  #ddd;
            span{
              float: left;
              padding: 0 5px;
            }
            span:nth-child(1){
              padding-left:0px;
            }
            span:nth-child(2){
              color: #a2a2a2;
              font-size: 12px;
              margin-top: 2px;
            }
            a{
              font-size: 12px;
              margin-top: 1px;
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
