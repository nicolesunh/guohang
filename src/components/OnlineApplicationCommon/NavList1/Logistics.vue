<template>
  <div class="logistics">
    <ul>
      <li  v-for="(item1,index) in wlList" :key="index">
        <h3 @click="wlClick(item1.ID)">
          <img :src="checkImg(item1.app_logo)" alt="">
        </h3>
        <p class="li-title" @click="wlClick(item1.ID)">{{item1.post_title}}</p>
        <p class="li-tag"><img src="../../.././assets/img/tag.png" alt=""></p>
      </li>
    </ul>

  </div>
</template>

<script>
  import {isImg} from '@/common/common.js';
  export default {
    name: "Logistics",
    data(){
        return{
            wlList:[],
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
                this.wlList = JSON.parse(this.$store.state.online.onlineAppHomeList.wl)

            }
        },
        getDate2:function () {
            var _that  = this
            _that.$axios.post(serviceUrl + 'zxyy')
                .then(function(res){
                    if(res.data.code == 200){
                        //最新查询
                        _that.wlList = JSON.parse(res.data.data.wl)

                    }
                }).catch(function(error){
            })
        },
        //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
        checkImg(val){
            return isImg(val);
        },
        wlClick:function (ID) {
            this.id = ID
            this.$store.commit('setOnlineDetailId',this.id);
            this.$router.push( '/yy_detail/' + ID)
        }
    },

  }
</script>

<style lang = scss scoped>
  .logistics{
    min-height: 300px;
    ul{
      overflow: hidden;
      li{
        float: left;
        width: 25%;
        margin: 5px 0;
        h3{
          img{
            width: 220px;
            height: 122px;
            cursor: pointer;
          }
        }
        .li-title{
          padding: 5px 0;
          font-size: 16px;
          font-weight: normal;
          color: #000000;
          cursor: pointer;
        }
        .li-tag{

        }
      }
    }
  }
</style>
