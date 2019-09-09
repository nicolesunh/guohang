<template>
  <div class="shipMarketHome1">
      <div class="shipMarketHome1-bd">
         <!--集装箱运输市场-->
          <ul>
            <h3>
              <span>集装箱运输市场</span>
              <span><router-link to="/shipMarket/shipMarketContainer" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </h3>
            <li v-for="(item1,index) in jzxscList" :key="index">
              <p class="p-bd" @click="jzxscClick(item1.ID)">{{item1.post_title}}</p>
              <p class="p-foo">
                <span><img src="../../.././assets/img/eye.png" alt=""></span>
                <span>1816</span>
                <span><img src="../../.././assets/img/line2.png" alt=""></span>
                <span><img src="../../.././assets/img/tag.png" alt=""></span>
                <router-link to="" >集装箱运输 </router-link>
              </p>
            </li>

          </ul>
         <!--干散货运输市场-->
          <ul>
            <h3>
              <span>干散货运输市场</span>
              <span><router-link to="/shipMarket/shipMarketDryCargo" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </h3>
            <li v-for="(item2,index) in gshscList" :key="index">
              <p class="p-bd"  @click="gshscClick(item2.ID)">{{item2.post_title}}</p>
              <p class="p-foo">
                <span><img src="../../.././assets/img/eye.png" alt=""></span>
                <span>1816</span>
                <span><img src="../../.././assets/img/line2.png" alt=""></span>
                <span><img src="../../.././assets/img/tag.png" alt=""></span>
                <router-link to="" >集装箱运输 </router-link>
              </p>
            </li>

          </ul>
          <!--油轮运输市场-->
          <ul>
            <h3>
              <span>油轮运输市场</span>
              <span><router-link to="/shipMarket/shipMarketTanker" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </h3>
            <li  v-for="(item3,index) in ylscList" :key="index">
              <p class="p-bd"  @click="ylscClick(item3.ID)">{{item3.post_title}}</p>
              <p class="p-foo">
                <span><img src="../../.././assets/img/eye.png" alt=""></span>
                <span>1816</span>
                <span><img src="../../.././assets/img/line2.png" alt=""></span>
                <span><img src="../../.././assets/img/tag.png" alt=""></span>
                <router-link to="" >集装箱运输 </router-link>
              </p>
            </li>
          </ul>
          <!--船舶市场-->
          <ul>
            <h3>
              <span>船舶市场</span>
              <span><router-link to="/shipMarket/shipMarketShip"><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </h3>
            <li v-for="(item4,index) in cbscList" :key="index" >
              <p class="p-bd" @click="cbscClick(item4.ID)">{{item4.post_title}}</p>
              <p class="p-foo">
                <span><img src="../../.././assets/img/eye.png" alt=""></span>
                <span>1816</span>
                <span><img src="../../.././assets/img/line2.png" alt=""></span>
                <span><img src="../../.././assets/img/tag.png" alt=""></span>
                <router-link to="" >集装箱运输 </router-link>
              </p>
            </li>
          </ul>
          <!--港口发展-->
          <ul>
            <h3>
              <span>港口发展</span>
              <span><router-link to="/shipMarket/shipMarketPort" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
            </h3>
            <li  v-for="(item5,index) in gkfzList" :key="index" >
              <p class="p-bd" @click="gkfzClick(item5.ID)">{{item5.post_title}}</p>
              <p class="p-img">
                <img :src="checkImg(item5.pic)" alt="">
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
        name: "ShipMarketHome1",
        data(){
            return{
                jzxscList:[],//集装箱
                gshscList:[], //干散货
                ylscList:[],//油轮
                cbscList:[],//船舶
                gkfzList:[],//港口
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
                    this.jzxscList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.jzxsc)
                    this.gshscList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.gshsc)
                    this.ylscList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.ylsc)
                    this.cbscList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.cbsc)
                    this.gkfzList = JSON.parse(this.$store.state.shipmarket.shipMarketHomeList.gkfz)
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl + 'hysc_index')
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.jzxscList = JSON.parse(res.data.data.jzxsc);
                            _that.gshscList = JSON.parse(res.data.data.gshsc);
                            _that.ylscList = JSON.parse(res.data.data.ylsc);
                            _that.cbscList = JSON.parse(res.data.data.cbsc);
                            _that.gkfzList = JSON.parse(res.data.data.gkfz);
                            _that.$store.commit('setShipMarketHome', res.data.data);
                        }
                    }).catch(function(error){
                })
            },
            //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
            checkImg(val){
                return isImg(val);
            },
            // 集装箱运输市场
            jzxscClick:function(ID){
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 干散货运输市场
            gshscClick:function(ID){
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 油轮运输市场
            ylscClick:function(ID){
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 船舶市场
            cbscClick:function(ID){
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 港口发展
            gkfzClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        },

    }
</script>

<style lang = scss scoped>
  .shipMarketHome1{
    float: left;
    width: 33.33%;
    .shipMarketHome1-bd{
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
