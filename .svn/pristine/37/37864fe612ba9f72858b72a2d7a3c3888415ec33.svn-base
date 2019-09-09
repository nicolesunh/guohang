<template>
     <div class="indexHome2">
        <div class="newAction">
            <div class="newAction-title">
              <span>最新应用</span>
              <span><router-link to="/onlineApplication/onlineAppHome"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </div>
            <div class="newAction-bd">
                <ul class="newAction-bd-ul-1">
                  <li  v-for="(item1,index) in syyyList" :key="index" @click="syyyClick(item1.ID)">
                     <div class="newAction-bd-ul-1-div">
                         <h3><router-link to=""><img :src="checkImg(item1.img)" alt=""></router-link></h3>
                         <p>
                           <span><img src="../../.././assets/img/eye.png" alt=""></span>
                           <span>{{item1.views}}</span>
                           <span><img src="../../.././assets/img/line2.png" alt=""></span>
                           <span><img src="../../.././assets/img/tag.png" alt=""></span>
                           <router-link to="">{{item1.tags}}</router-link>
                         </p>
                     </div>
                  </li>
                </ul>
                <ul class="newAction-bd-ul-2">
                  <li  v-for="(item2,index) in syyy_downList" :key="index" @click = "syyy_downClick(item2.ID)">
                    <div class="newAction-bd-ul-2-div">
                      <h3>
                         <div style="overflow: hidden">
                           <span style="float: left;width:30%;cursor: pointer">
                               <img :src="checkImg(item2.img)" alt="">
                           </span>
                           <span style="float: right;width:70%;text-align: left;cursor: pointer">{{item2.post_title}}</span>
                         </div>
                      </h3>
                      <p>
                        <span><img src="../../.././assets/img/eye.png" alt=""></span>
                        <span>{{item2.views}}</span>
                        <span><img src="../../.././assets/img/line2.png" alt=""></span>
                        <span><img src="../../.././assets/img/tag.png" alt=""></span>
                        <router-link to="">{{item2.tags}}</router-link>
                      </p>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
        <div class="hotSearch">
            <div class="hotSearchAll">
              <div class="hotSearch-title">
                <span>热们查询</span>
                <span><router-link to="/onlineApplication/onlineAppHome"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
              </div>
              <div class="hotSearchAllBd">
                <ul>
                  <li  v-for="(item3,index) in sychList" :key="index">
                    <p class="hotSearchAllBd-title"  @click="sychClick(item3.ID)">
                        <img :src="checkImg(item3.img)" alt="">
                        <span>{{item3.post_title}}</span>
                    </p>
                    <p class="hotSearchAllBd-footer">
                      <span><img src="../../.././assets/img/eye.png" alt=""></span>
                      <span>{{item3.views}}</span>
                      <span><img src="../../.././assets/img/line2.png" alt=""></span>
                      <span><img src="../../.././assets/img/tag.png" alt=""></span>
                      <router-link to="">{{item3.tags}}</router-link>
                    </p>
                  </li>
                </ul>

              </div>
            </div>
        </div>
     </div>
</template>

<script>
    import {isImg} from '@/common/common.js';
    export default {
        name: "IndexHome2",
        data(){
            return{
                syyyList:[],
                syyy_downList:[],
                sychList:[],
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
                    this.syyyList = this.$store.state.home.home.syyy
                    this.syyy_downList = this.$store.state.home.home.syyy_down
                    this.sychList = this.$store.state.home.home.sych
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl)
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.syyyList = res.data.data.IndexData.syyy
                            _that.syyy_downList = res.data.data.IndexData.syyy_down
                            _that.sychList = res.data.data.IndexData.sych
                        }
                    }).catch(function(error){

                })
            },
            checkImg(val){
                return isImg(val);
            },
            syyyClick:function(ID){
                this.id = ID
                this.$store.commit('setOnlineDetailId',this.id);
                this.$router.push( '/yy_detail/' + ID)
            },
            // 最新应用
            syyy_downClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //热们查询
            sychClick:function (ID) {
                this.id = ID
                this.$store.commit('setOnlineDetailId',this.id);
                this.$router.push( '/yy_detail/' + ID)
            }

        },

    }
</script>

<style lang = scss scoped>
  .indexHome2{
    overflow: hidden;
    .newAction{
       width: 75%;
       float: left;
       .newAction-title{
         width:100%;
         font-size: 18px;
         color: #2258c2;
         border-bottom: 1px solid #ddd;
         padding: 5px 0;
         overflow: hidden;
         span:nth-child(1){
           float: left;
         }
         span:nth-child(2){
           float: right;
         }
       }
       .newAction-bd{
          .newAction-bd-ul-1{
             overflow: hidden;
             margin-top: 15px;
             li{
                 float: left;
                 width: 33.33%;
                 padding: 5px 0;
                 .newAction-bd-ul-1-div{
                   width: 92%;
                   margin: 0 auto;
                   h3{
                     img{
                       width: 100%;
                       height: 120px;
                     }
                   }
                   p{
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
                     }
                   }
                 }
               }
          }
          .newAction-bd-ul-2{
             overflow: hidden;
               li{
                 float: left;
                 width: 33.33%;
                 padding: 10px 0;
                 .newAction-bd-ul-2-div{
                   width: 92%;
                   margin: 0 auto;
                   h3{
                     div{
                       min-height: 64px;
                       span{
                         font-size: 16px;
                         img{
                           width: 60px;
                           height: 60px;
                         }
                       }
                     }
                   }
                   p{
                     overflow: hidden;
                     padding: 10px 0px;
                     border-bottom: 1px solid  #ddd;
                     span{
                       float: left;
                       padding: 0 5px;
                     }
                     span:nth-child(1){
                       padding-left:0;
                     }
                     span:nth-child(2){
                       color: #a2a2a2;
                       font-size: 12px;
                       margin-top: 2px;
                     }
                     a{
                       font-size: 12px;
                       margin-top: 1px;
                     }
                   }
                 }

               }

          }
       }
    }
    .hotSearch{
      width: 25%;
      float: left;
      .hotSearchAll{
        width: 92%;
        margin: 0 auto;
        .hotSearch-title{
          overflow: hidden;
          font-size: 18px;
          color: #2258c2;
          border-bottom: 1px solid #ddd;
          padding: 5px 0;
          span:nth-child(1){
            float: left;
          }
          span:nth-child(2){
            float: right;
          }
        }
        .hotSearchAllBd{
          ul{
            margin-top: 15px;
            li{
              padding: 10px 0;
              .hotSearchAllBd-title{
                  overflow: hidden;
                  img{
                    width: 24px;
                    height: 24px;
                    vertical-align: middle;
                    float: left;
                    margin-right: 5px;
                    cursor: pointer;
                  }
                  span{
                      float: left;
                      cursor: pointer;
                  }
              }
              .hotSearchAllBd-footer{
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
                }
              }
            }
          }
        }
      }
    }
  }
</style>
