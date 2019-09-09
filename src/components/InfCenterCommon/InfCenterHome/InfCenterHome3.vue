<template>
   <div class="infCenterHome3">
       <ul class="hanghai" style="display: block">
          <h3 class="title-img">
            <span><img src="../../.././assets/img/jrjd.png" alt=""></span>
            <span><img src="../../.././assets/img/more.png" alt=""></span>
          </h3>
          <li>
            <h3 class="title"  @click="hangClick1()">2017年航海日活动</h3>
            <div class="bc-img"  @click="hangClick1()">
              <img src="../../.././assets/img/tuijiantu.jpg" alt="">
            </div>
            <p>
              <span><img src="../../.././assets/img/eye.png" alt=""></span>
              <span>23</span>
              <span><img src="../../.././assets/img/line2.png" alt=""></span>
              <span><img src="../../.././assets/img/tag.png" alt=""></span>
            </p>
          </li>
       </ul>
       <ul class="hanghai2" style="display: block">
         <li v-for="(item2,index) in hyywList" :key="index" @click="hangClick2(item2.ID)">{{item2.post_title}}</li>
       </ul>
       <ul class="zhuanlan">
          <h3 class="title-img">
            <span>专栏</span>
            <span><img src="../../.././assets/img/more.png" alt=""></span>
          </h3>
          <li v-for="(item3,index) in zhuanlanList" :key="index">
              <div class="li-top">
                   <div class="li-top-img-l" @click="zhuanlanClick(item3.ID)">
                       <img src="../../.././assets/img/thub.jpg" alt="">
                       <!--<img :src="isImg(item3.img)" alt="">-->
                   </div>
                   <div class="li-top-bd-r">
                     <p  @click="zhuanlanClick(item3.ID)">{{item3.post_title}}</p>
                     <p><img src="../../.././assets/img/tag.png" alt=""></p>
                     <p>
                       <img src="../../.././assets/img/rili.png" alt="">
                       <span>{{item3.post_date}}</span>
                     </p>
                   </div>
              </div>
              <p class="li-bd">
                  {{item3.post_content}}
              </p>
          </li>
       </ul>
       <ul class="remen">
         <h3 class="title-img">
           <span>热门</span>
           <span><img src="../../.././assets/img/more.png" alt=""></span>
         </h3>
         <li v-for="(item3,index) in remenList" :key="index" @click="remenClick(item3.ID)">
             <span :class="{addclass:index == 0 || index == 1 || index == 2}">{{index+1}}</span>
             {{item3.post_title}}
         </li>
       </ul>
   </div>
</template>

<script>
    import {isImg} from '@/common/common.js';
    export default {
        name: "InfCenterHome3",
        data(){
            return{
                zhuanlanList:[],
                remenList:[],
                hyywList:[],
                id:null
            }
        },
        mounted:function(){
            this.getDate();
        },
        methods:{
            getDate:function () {
                if(this.$store.state.infcenter.infCenterHomeList == null){
                    this.getDate2();
                }else {
                    this.zhuanlanList = this.$store.state.infcenter.infCenterHomeList.zhuanlan
                    this.remenList = this.$store.state.infcenter.infCenterHomeList.remen
                    this.hyywList = this.$store.state.infcenter.infCenterHomeList.hyyw
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl + "zxzx")
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.zhuanlanList =  res.data.data.zhuanlan
                            _that.remenList =  res.data.data.remen
                            _that.hyywList =  res.data.data.hyyw
                        }
                    }).catch(function(error){

                })
            },
            //判断图片地址是否含有
            checkImg(val){
                return isImg(val);
            },
            //航海1
            hangClick1:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //航海2
            hangClick2:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //专栏
            zhuanlanClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //热门
            remenClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }

        },
    }
</script>

<style lang = scss scoped>
  .infCenterHome3{
    width: 25%;
    float: left;
    min-height: 500px;
    .hanghai{
      padding: 15px 5px;
      .title-img{
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
        .title{
          font-size: 18px;
          color: #000000;
          padding: 5px 0;
          cursor: pointer;
        }
        .bc-img{
          img{
            width: 218px;
            height: 120px;
            cursor: pointer;
          }
        }
        p{
          padding: 5px 0;
          span{
            padding: 0 5px;
            color: #a2a2a2;
          }
          span:nth-child(1){
            padding: 0px;
          }
          span:nth-child(2){
            font-size: 12px;
          }
          span:nth-child(3){
            img{
              margin-top: 2px;
              vertical-align: text-top;
            }
          }
          span:nth-child(4){
            img{
              margin-top: 2px;
              vertical-align: text-top;
            }
          }
          span:nth-child(5){
            font-size: 12px;
          }
        }
      }
    }
    .hanghai2{
      li{
          padding: 5px 0;
          cursor: pointer;
       }
    }
    .zhuanlan{
      .title-img{
        height: 20px;
        line-height: 20px;
        padding: 10px 0;
        font-size: 18px;
        color: #2258c2;
        border-bottom: 1px solid #e8e8e8;
        span:nth-child(1){
          float: left;
        }
        span:nth-child(2){
          float: right;
        }
      }
      li{
        .li-top{
          overflow: hidden;
          .li-top-img-l{
            float: left;
            display: inline-block;
            width: 35%;
            img{
              width: 80px;
              height: 98px;
              cursor: pointer;
            }
          }
          .li-top-bd-r{
            float: right;
            width: 65%;
            display: inline-block;
            p:nth-child(1){
              font-size: 18px;
              color: #000000;
              padding-left: 10px;
              cursor: pointer;
            }
            p:nth-child(2){
              padding-left: 10px;
              padding-top: 12px;
              padding-bottom: 5px;
            }
            p:nth-child(3){
              font-size: 12px;
              padding-left: 10px;
            }
          }
        }
        .li-bd{
          color: #1e1e1e;
          font-size: 14px;
          line-height: 26px;
          margin: 10px 0;
          border-bottom: 1px solid #e8e8e8;
        }
      }
      li:last-child .li-bd{
        border-bottom:none;
      }
    }
    .remen{
      .title-img{
        height: 20px;
        line-height: 20px;
        padding: 10px 0;
        font-size: 18px;
        color: #2258c2;
        border-bottom: 1px solid #e8e8e8;
        span:nth-child(1){
          float: left;
        }
        span:nth-child(2){
          float: right;
        }
      }
      li{
        line-height: 26px;
        margin: 10px 0;
        font-size: 14px;
        cursor: pointer;
        .addclass{
            color: #ff8a00!important;
         }
      }
    }


  }



</style>
