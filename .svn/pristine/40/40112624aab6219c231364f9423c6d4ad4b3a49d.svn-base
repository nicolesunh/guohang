<template>
  <div class="shipMarketHome2">
    <div class="shipMarketHome2-bd">
      <!--航运指数-->
      <ul>
        <h3>
          <span>航运指数</span>
          <span><router-link to="/shipMarket/shipMarketIndex" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
        </h3>
        <li v-for="(item,index) in hyzsList" :key="index">
          <p class="p-bd" @click="hyzsClick(item.ID)">{{item.post_title}}</p>
          <p class="p-img"  @click="hyzsClick(item.ID)">
            <img :src="checkImg(item.pic)" alt="">
          </p>
          <p class="p-foo">
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>1816</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <router-link to="" >集装箱运输 </router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {isImg} from '@/common/common.js';
  export default {
      name: "ShipMarketHome2",
      data(){
          return{
              hyzsList:[],//航运指数
              id:null
          }
      },
      mounted(){
          this.getDate();
      },
      methods:{
          getDate:function () {
              if(this.$store.state.shipmarket.shipMarketHomeList == null){
                  this.getDate2();
              }else {
                  let data = this.$store.state.shipmarket.shipMarketHomeList.hyzs;
                  this.hyzsList = JSON.parse(data);
              }
          },
          getDate2:function () {
              var _that  = this
              _that.$axios.post(serviceUrl + 'hysc_index')
                  .then(function(res){
                      if(res.data.code == 200){
                          _that.$store.commit('setShipMarketHome', res.data.data);
                          _that.hyzsList = JSON.parse(res.data.data.hyzs);
                      }
                  }).catch(function(error){
              })
          },
          //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
          checkImg(val){
              return isImg(val);
          },
          // 航运指数
          hyzsClick:function (ID) {
              this.id = ID
              this.$store.commit('setDetailId',this.id);
              this.$router.push('/detail/' + ID)
          }
      }

  }
</script>

<style lang = scss scoped>
  .shipMarketHome2{
    float: left;
    width: 33.33%;
    .shipMarketHome2-bd{
      padding-right: 10px;
      ul{
        padding: 10px 15px;
        min-height: 250px;
        border: 1px solid #e8e8e8;
        margin-bottom: 30px;
        h3{
          font-size: 18px;
          color: #2258c2;
          padding-bottom: 5px;
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
          .p-img{
            padding: 10px 0;
            padding-bottom: 5px;
            img{
              width: 100%;
              height: 144px;
              cursor: pointer;
            }
          }
          .p-bd{
            text-align: left;
            font-size: 18px;
            color: #000000;
            cursor: pointer;

          }
          .p-foo{
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
            span:nth-child(3){
              color: #a2a2a2;
              font-size: 12px;
              margin-top: 2px;
              padding: 0 10px;
            }
            a{
              font-size: 12px;
              margin-top: 1px;
              text-align: left;
              color: #a2a2a2;
            }
          }
        }
        li:last-child{
          .p-foo{
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
