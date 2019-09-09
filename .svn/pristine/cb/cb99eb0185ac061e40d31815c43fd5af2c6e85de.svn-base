<template>
  <div class="shipMarketHome3">
    <div class="shipMarketHome3-bd">
      <!--经贸统计-->
      <ul>
        <h3>
          <span>经贸统计</span>
          <span><router-link to="/shipMarket/shipMarketEconomyTrade" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
        </h3>
        <li v-for="(item1,index) in jmtjList" :key="index">
          <p class="p-bd" @click="jmtjClick(item1.ID)">{{item1.post_title}}</p>
          <p class="p-foo">
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>{{}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <router-link to="" >{{}} </router-link>
          </p>
        </li>

      </ul>
      <!--水运经济-->
      <ul>
        <h3>
          <span>水运经济</span>
          <span><router-link to="/shipMarket/shipMarketWaterTransport" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
        </h3>
        <li  v-for="(item2,index) in syjjList" :key="index">
          <p class="p-bd"  @click="syjjClick(item2.ID)">{{item2.post_title}}</p>
          <p class="p-img">
            <img :src="checkImg(item2.pic)" alt="">
          </p>
          <p class="p-foo">
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>{{}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <router-link to="" >{{}} </router-link>
          </p>
        </li>

      </ul>
      <!--综合交通-->
      <ul>
        <h3>
          <span>综合交通</span>
          <span><router-link to="/shipMarket/shipMarketComprehensive" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
        </h3>
        <li  v-for="(item3,index) in zhjtList" :key="index">
          <p class="p-bd"  @click="zhjtClick(item3.ID)">{{item3.post_title}}</p>
          <p class="p-foo">
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>1816</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../.././assets/img/tag.png" alt=""></span>
            <router-link to="" >集装箱运输 </router-link>
          </p>
        </li>

      </ul>
      <!--物流统计-->
      <ul>
        <h3>
          <span>物流统计</span>
          <span><router-link to="/shipMarket/shipMarketLogistics" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
        </h3>
        <li  v-for="(item4,index) in wltjList" :key="index">
          <p class="p-bd"  @click="wltjClick(item4.ID)">{{item4.post_title}}</p>
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
    name: "ShipMarketHome3",
    data(){
      return{
          wltjList:[],//物流
          jmtjList:[],//经贸
          zhjtList:[],//综合
          syjjList:[],//水运
          id:null
      }
    },
    mounted:function(){
        this.getDate();
    },
    methods:{
        getDate:function () {
            if(this.$store.state.shipmarket.shipMarketHomeList == null){
                this.getDate2();
            }else {
                this.wltjList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.wltj)
                this.jmtjList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.jmtj)
                this.zhjtList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.zhjt)
                this.syjjList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.syjj)

            }
        },
        getDate2:function () {
            var _that  = this
            _that.$axios.post(serviceUrl + 'hysc_index')
                .then(function(res){
                    if(res.data.code == 200){
                        _that.wltjList = JSON.parse(res.data.data.wltj);
                        _that.jmtjList = JSON.parse(res.data.data.jmtj);
                        _that.zhjtList = JSON.parse(res.data.data.zhjt);
                        _that.syjjList = JSON.parse(res.data.data.syjj);
                        _that.$store.commit('setShipMarketHome',res.data.data);
                    }
                }).catch(function(error){
            })
        },
        //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
        checkImg(val){
            return isImg(val);
        },
        // 经贸统计
        jmtjClick:function (ID) {
            this.id = ID
            this.$store.commit('setDetailId',this.id);
            this.$router.push('/detail/' + ID)
        },
        // 水运经济
        syjjClick:function (ID) {
            this.id = ID
            this.$store.commit('setDetailId',this.id);
            this.$router.push('/detail/' + ID)
        },
        // 综合交通
        zhjtClick:function (ID) {
            this.id = ID
            this.$store.commit('setDetailId',this.id);
            this.$router.push('/detail/' + ID)
        },
        // 物流统计
        wltjClick:function (ID) {
            this.id = ID
            this.$store.commit('setDetailId',this.id);
            this.$router.push('/detail/' + ID)
        },
    },
  }
</script>

<style lang = scss scoped>
  .shipMarketHome3{
    float: left;
    width: 33.33%;
    .shipMarketHome3-bd{
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
