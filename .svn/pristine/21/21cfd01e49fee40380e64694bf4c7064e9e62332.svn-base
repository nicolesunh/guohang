<template>
    <div class="ShippingDevHome1">
      <div class="ShippingDevHome1-l">
        <div class="ShippingDevHome1-l-all">
          <h3 class="ShippingDevHome1-l-title">
            <span>政策支持</span>
            <span><router-link to="/shippingDevelopment/shippingDevSupport" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
          </h3>
          <ul class="ShippingDevHome1-l-ul">
            <li v-for="(item1,index) in zczcList" :key="index" @click="zczcClick(item1.ID)">{{item1.post_title}}</li>
          </ul>
        </div>
      </div>
      <div class="ShippingDevHome1-r">
        <div class="ShippingDevHome1-r-all">
          <h3 class="ShippingDevHome1-r-title">
            <span>建设历程</span>
            <span><router-link to="/shippingDevelopment/shippingDevProcess"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
          </h3>
          <ul class="ShippingDevHome1-r-ul">
            <li  v-for="(item2,index) in jslcList" :key="index" @click="jslcClick(item2.ID)">{{item2.post_title}}</li>
          </ul>
        </div>
      </div>
      <div class="ShippingDevHome1-footer">
        <img src="../../.././assets/img/zxjsban.jpg" alt="">
      </div>
    </div>
</template>

<script>
  export default {
      name: "ShippingDevHome1",
      data(){
          return{
              zczcList:[],
              jslcList:[],
              id:null
          }
      },
      mounted:function(){
          this.getDate();
      },
      methods:{
          getDate:function () {
              if(this.$store.state.shoppingDevelopment.shippingDevHomeList == null){
                  this.getDate2();
              }else {
                  this.zczcList = this.$store.state.shoppingDevelopment.shippingDevHomeList.zczc
                  this.jslcList = this.$store.state.shoppingDevelopment.shippingDevHomeList.jslc
              }
          },
          getDate2:function () {
              var _that  = this
              _that.$axios.post(serviceUrl  + "hyfz_index")
                  .then(function(res){
                      if(res.data.code == 200){
                          _that.zczcList = JSON.parse(res.data.data).zczc
                          _that.jslcList =  JSON.parse(res.data.data).jslc
                      }
                  }).catch(function(error){

              })
          },
          // 政策支持
          zczcClick:function (ID) {
              this.id = ID
              this.$store.commit('setDetailId',this.id);
              this.$router.push('/detail/' + ID)
          },
          // 建设历程
          jslcClick:function (ID) {
              this.id = ID
              this.$store.commit('setDetailId',this.id);
              this.$router.push('/detail/' + ID)
          }
      },
  }
</script>

<style lang = scss scoped>
  .ShippingDevHome1{
    overflow: hidden;
    .ShippingDevHome1-l{
      width: 70%;
      float: left;
      .ShippingDevHome1-l-all{
        padding-right: 15px;
        .ShippingDevHome1-l-title{
          border-bottom: 1px solid #e8e8e8;
          padding: 20px 0;
          overflow: hidden;
          span:nth-child(1){
            float: left;
            color: #2258c2;
            font-size: 18px;
            font-weight: inherit;

          }
          span:nth-child(2){
            float: right;
            img{
              margin-top: 5px;
            }
          }
        }

        .ShippingDevHome1-l-ul{
          li{
            padding: 8px 0;
            font-size: 14px;
            color: #000;
            cursor: pointer;
          }
          li:nth-child(1){
            padding: 10px 0;
            font-size: 18px;
            color: #000000;
            line-height: 26px;
          }
        }

      }

    }
    .ShippingDevHome1-r{
      width: 30%;
      float: right;
      .ShippingDevHome1-r-all{
        width: 92%;
        margin: 0 auto;
        .ShippingDevHome1-r-title{
          border-bottom: 1px solid #e8e8e8;
          padding: 20px 0;
          overflow: hidden;
          span:nth-child(1){
            float: left;
            color: #2258c2;
            font-size: 18px;
            font-weight: inherit;

          }
          span:nth-child(2){
            float: right;
            img{
              margin-top: 5px;
            }
          }
        }
        .ShippingDevHome1-r-ul{
          li{
            padding: 8px 0;
            font-size: 14px;
            color: #000;
            cursor: pointer;
          }
          li:nth-child(1){
            padding: 10px 0;
            font-size: 18px;
            color: #000000;
            line-height: 26px;
          }
        }
      }

    }
    .ShippingDevHome1-footer{
      width: 94%;
      img{
        padding: 15px 0;
      }
    }
  }
</style>
