<template>
      <div class="OnlineAppBulletin2">
          <ul>
              <h3>
                <span>企业应用</span>
                <span><img src="../../.././assets/img/more.png" alt=""></span>
              </h3>
               <li>
                     <p @click="sfdzClick()"><img src="../../.././assets/img/gsdz.jpg" alt=""></p>
                     <p @click="sfdzClick()">随附单证管理系统</p>
               </li>
               <li>
                    <p @click="kydgClick()"><img src="../../.././assets/img/kycgd.jpg" alt=""></p>
                    <p @click="kydgClick()">空运舱单管理系统</p>
               </li>
          </ul>
          <ul>
            <h3>
              <span>信息查询</span>
              <span><img src="../../.././assets/img/more.png" alt=""></span>
            </h3>
            <li>
              <div class="li-div-l">
                  <img src="../../.././assets/img/thub2.jpg" @click="bjjcClick()" alt="">
              </div>
              <div class="li-div-r">
                  <p  @click="bjjcClick()">
                      报检基础代码-CIQ代码查询
                  </p>
                  <p>
                    <span><router-link to="/onlineApplication/onlineAppBulletin"><img src="../../.././assets/img/suxpcicon.png" alt=""></router-link></span>
                    <span><router-link to="/onlineApplication/onlineAppBulletin"><img src="../../.././assets/img/suxrr.png" alt=""></router-link></span>
                    <span><router-link to="/onlineApplication/onlineAppBulletin"><img src="../../.././assets/img/suxmian.png" alt=""></router-link></span>
                  </p>
                  <p> <img src="../../.././assets/img/tag.png" alt=""></p>
              </div>
            </li>
          </ul>
      </div>
</template>

<script>
    export default {
        name: "OnlineAppBulletin2",
        data(){
            return{
                id:null
            }
        },
        methods:{
            // 随附单证管理系统
            sfdzClick:function () {
                this.id = 25544
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' +  this.id )
            },
            // 空运舱单管理系统
            kydgClick:function () {
                this.id = 25540
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' +  this.id )
            },
            // 报检基础代码-CIQ代码查询
            bjjcClick:function () {

            }
        }
    }
</script>

<style  lang = scss scoped>
  .OnlineAppBulletin2{
      ul{
        h3{
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: 10px;
          margin-bottom: 35px;
          overflow: hidden;
          span:nth-child(1){
            float: left;
            font-size: 18px;
            color: #2258c2;
          }
          span:nth-child(2){
            float: right;
            img{
              margin-top: 8px;
            }
          }
        }
        li{
          padding-bottom: 20px;
          overflow: hidden;
          p:nth-child(1){
              img{
                width: 216px;
                height: 119px;
                cursor: pointer;
              }
          }
          p:nth-child(2){
            padding: 5px 0;
            cursor: pointer;
            font-size: 16px;
            line-height: 24px;
            color: #000;
            font-weight: 300;

          }
          .li-div-l{
            float: left;
            width: 30%;
            img{
              width: 60px;
              height: 60px;
              cursor: pointer;
            }
          }
          .li-div-r{
            float: right;
            width: 70%;
            p:nth-child(1){
              margin-bottom: 8px;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              font-weight: 300;
              cursor: pointer;
            }
            p:nth-child(2){
              margin-bottom: 5px;
              span{
                  padding: 0 3px;
              }
            }
            p:nth-child(3){
              span{
                padding: 0 3px;
              }
            }
          }
        }
      }
  }
</style>
