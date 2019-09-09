<template>
    <div class="infCenterHome1">
      <div class="infCenterHome1Item">
          <ul>
              <li v-for="(item1,index) in shanghaiList" :key="index" @click="shanghai1Click(item1.ID)">{{item1.post_title}}</li>
          </ul>
      </div>
      <div  class="infCenterHome1Item">
          <h3 class="titleNav">
              <span>上海</span>
              <router-link to="/infCenter/infCenterShanghai" ><img src="../../.././assets/img/more.png" alt=""></router-link>
          </h3>
          <ul>
              <li v-for="(item2,index) in shanghaiList" :key="index" @click="shanghai2Click(item2.ID)">{{item2.post_title}}</li>
          </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>国内</span>
          <router-link to="/infCenter/infCenterDomestic"><img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item3,index)  in guoneiList" :key="index" @click="guoneiClick(item3.ID)">{{item3.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>口岸</span>
          <router-link to="/infCenter/infCenterPort" > <img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item4,index) in kouanList" :key="index"  @click="kouanClick(item4.ID)">{{item4.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>航运</span>
          <router-link to="/infCenter/infCenterShipping" > <img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item5,index) in hangyunList" :key="index"  @click="hangyunClick(item5.ID)">{{item5.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>经贸</span>
          <router-link to="/infCenter/infCenterTrade" ><img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item6,index) in jingmaoList" :key="index"  @click="jingmaoClick(item6.ID)">{{item6.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>服务</span>
          <router-link to="/infCenter/infCenterService"><img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item7,index) in serviceList" :key="index"  @click="serviceClick(item7.ID)">{{item7.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>政策公告</span>
          <router-link to="/policyMnt/policyMntAnnouncement" > <img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item8,index) in zcggList" :key="index"  @click="zcggClick(item8.ID)">{{item8.post_title}}</li>
        </ul>
      </div>
      <div  class="infCenterHome1Item">
        <h3 class="titleNav">
          <span>航运百科</span>
          <router-link to="/infCenter/infCenterEncy" > <img src="../../.././assets/img/more.png" alt=""></router-link>
        </h3>
        <ul>
          <li v-for="(item9,index) in hybkList" :key="index" @click="hybkClick(item9.ID)">{{item9.post_title}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "InfCenterHome1",
        data(){
            return{
                shanghaiList:[],
                guoneiList:[],
                guojiList:[],
                kouanList:[],
                hangyunList:[],
                jingmaoList:[],
                serviceList:[],
                zcggList:[],
                hybkList:[],
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
                    this.shanghaiList = this.$store.state.infcenter.infCenterHomeList.shanghai
                    this.guoneiList = this.$store.state.infcenter.infCenterHomeList.guonei
                    this.guojiList = this.$store.state.infcenter.infCenterHomeList.guoji
                    this.kouanList = this.$store.state.infcenter.infCenterHomeList.kouan
                    this.hangyunList = this.$store.state.infcenter.infCenterHomeList.hangyun
                    this.jingmaoList = this.$store.state.infcenter.infCenterHomeList.jingmao
                    this.serviceList = this.$store.state.infcenter.infCenterHomeList.service
                    this.zcggList = this.$store.state.infcenter.infCenterHomeList.zcgg
                    this.hybkList = this.$store.state.infcenter.infCenterHomeList.hybk
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl + "zxzx")
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.shanghaiList = res.data.data.shanghai
                            _that.guoneiList = res.data.data.guonei
                            _that.guojiList = res.data.data.guoji
                            _that.kouanList = res.data.data.kouan
                            _that.hangyunList = res.data.data.hangyun
                            _that.jingmaoList = res.data.data.jingmao
                            _that.serviceList = res.data.data.service
                            _that.zcggList = res.data.data.zcgg
                            _that.hybkList = res.data.data.hybk
                        }
                    }).catch(function(error){

                })
            },
            //上海1
            shanghai1Click:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //上海2
            shanghai2Click:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //国内
            guoneiClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //口岸
            kouanClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //航运
            hangyunClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //经贸
            jingmaoClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //服务
            serviceClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 政策公告
            zcggClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            // 航运百科
            hybkClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
        },

    }
</script>

<style  lang = scss scoped>
  .infCenterHome1{
    width: 50%;
    float: left;
    min-height: 500px;
    .infCenterHome1Item{
      width: 92%;
      margin: 0 auto;
      .titleNav{
        overflow: hidden;
        padding: 10px 0;
        span{
          font-size: 18px;
          color: #2258c2;
          float: left;
        }
        img{
          float: right;
          vertical-align: middle;
          margin-top: 8px;
        }
      }
      ul{
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 15px;
        li{
          font-size: 14px;
          color: #000000;
          padding: 5px 0;
          cursor: pointer;
        }
        li:first-child{
          font-size: 18px;
          color: #000000;
          padding: 5px 0;
          font-weight: 500;
          font-family: "微软雅黑";
        }
      }
    }
  }
</style>
