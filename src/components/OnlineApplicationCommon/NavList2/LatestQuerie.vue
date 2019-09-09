<template>
  <div class="latestQuerie">
    <ul>
      <li v-for="(item1,index) in zxchList" :key="index">
        <div class="li-img" @click="zxchClick(item1.ID)">
          <img :src="checkImg(item1.app_logo)" alt="">
        </div>
        <div class="li-bd">
          <h3 @click = "zxchClick(item1.ID)">{{item1.post_title}}</h3>
          <p>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <span><router-link to="" >{{item1.source}}</router-link></span>
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {isImg} from '@/common/common.js';
  export default {
    name: "LatestQuerie",
    data(){
      return{
          zxchList:[],
          id:null
      }
    },
    mounted:function(){
        this.getDate();
    },
    methods:{
        getDate:function () {
            if(this.$store.state.online.onlineAppHomeList == null){
                this.getDate2();
            }else {
                this.zxchList = JSON.parse(this.$store.state.online.onlineAppHomeList.zxch)
            }
        },
        getDate2:function () {
            var _that  = this
            _that.$axios.post(serviceUrl + 'zxyy')
                .then(function(res){
                    if(res.data.code == 200){
                        //最新查询
                        _that.zxchList = JSON.parse(res.data.data.zxch)
                    }
                }).catch(function(error){
            })
        },
        checkImg(val){
            return isImg(val);
        },
        zxchClick:function (ID) {
            this.id = ID
            this.$store.commit('setOnlineDetailId',this.id);
            this.$router.push( '/yy_detail/' + ID)
        }
    },

  }
</script>

<style lang = scss scoped>
  .latestQuerie{
    min-height: 300px;
    ul{
      overflow: hidden;
      width: 100%;
      li{
        width: 25%;
        float: left;
        overflow: hidden;
        padding: 10px 0;
        min-height: 110px;
        .li-img{
          float: left;
          width: 30%;
          img{
            width: 60px;
            height: 70px;
            cursor: pointer;
          }
        }
        .li-bd{
          float: right;
          width: 70%;
          h3{
            padding: 5px 0;
            font-size: 16px;
            font-weight: normal;
            color: #000000;
            cursor: pointer;
          }
          p{
            span:nth-child(1){

            }
            span:nth-child(2){
              a{
                color: #a2a2a2;
                font-size: 12px;
              }
            }
          }
        }
      }
    }

  }
</style>
