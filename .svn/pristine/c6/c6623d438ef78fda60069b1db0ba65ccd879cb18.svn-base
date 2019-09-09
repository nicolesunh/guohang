<template>
    <div class="infCenterHome2">
        <ul>
          <li v-for="(item1,index) in tpxwList" :key="index">
             <h3 class="title"  @click = "tpxwClick(item1.ID)">{{item1.post_title}}</h3>
             <div class="bc-img" @click = "tpxwClick(item1.ID)" >
               <img :src="item1.img" alt="">
             </div>
             <p style="display: none">
               <span><img src="../../.././assets/img/eye.png" alt=""></span>
               <span>{{}}</span>
               <span><img src="../../.././assets/img/line2.png" alt=""></span>
               <span><img src="../../.././assets/img/tag.png" alt=""></span>
             </p>
          </li>

        </ul>
        <!--视频-->
        <ul>
          <h3 class="title-img">
              <span>视频</span>
              <span><img src="../../.././assets/img/more.png" alt=""></span>
          </h3>
          <li v-for="(item2,index) in videoList" :key="index" style="margin-bottom: 20px">
            <h3 class="title" @click="videoClick(item2.ID)">{{item2.post_title}}</h3>
            <div class="bc-img" @click="videoClick(item2.ID)">
              <img :src="checkImg(item2.img)" alt="">
              <img src="../../../assets/img/videoIcon.png" class="videoIcon" alt="" style="width: 52px;height: 52px;">
            </div>
            <p style="display: none">
              <span><img src="../../.././assets/img/eye.png" alt=""></span>
              <span>{{}}</span>
              <span><img src="../../.././assets/img/line2.png" alt=""></span>
              <span><img src="../../.././assets/img/tag.png" alt=""></span>
              <span>{{}}</span>
            </p>
          </li>

        </ul>

    </div>
</template>

<script>
    import {isImg} from '@/common/common.js';
    export default {
        name: "InfCenterHome2",
        data(){
          return{
              tpxwList:[],
              videoList:[],
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
                    this.tpxwList = this.$store.state.infcenter.infCenterHomeList.tpxw
                    this.videoList = this.$store.state.infcenter.infCenterHomeList.video
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl + "zxzx")
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.tpxwList = res.data.data.tpxw
                            _that.videoList = res.data.data.video

                        }
                    }).catch(function(error){

                })
            },
            //判断图片地址是否含有
            checkImg(val){
                return isImg(val);
            },
            // 视频上面模块
            tpxwClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 视频
            videoClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
        },
    }
</script>

<style lang = scss scoped>
  .infCenterHome2{
    width: 25%;
    float: left;
    min-height: 500px;
    ul{
      padding: 15px 5px;
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
        /*border-bottom: 1px solid #e8e8e8;*/
        .title{
          font-size: 18px;
          color: #000000;
          padding: 5px 0;
          cursor: pointer;
        }
        .bc-img{
          min-height: 120px;
          position: relative;
          img{
            width: 218px;
            height: 120px;
            cursor: pointer;
          }
          .videoIcon{
              position: absolute;
              top: 36px;
              right: 115px;
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
  }
</style>
