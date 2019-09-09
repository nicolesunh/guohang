<template>
    <div class="indexHome4">
      <div class="indexHome4All">
        <div class="indexHome4All-1">
            <ul>
              <h3>
                 最热文章
              </h3>
              <li  v-for="(item1,index) in zrwzList" :key="index" @click = "articleClick(item1.ID)">
                 <span class="post_i" :class="{addActive:index ==0 || index ==1 || index ==2}">{{index + 1}}</span>
                 <a>
                   {{item1.post_title}}
                   <span><img src="../../.././assets/img/eye.png" alt=""></span>
                   <span>{{item1.views}}</span>
                 </a>
              </li>

            </ul>
        </div>
        <div class="indexHome4All-2">
            <ul>
              <h3>
                <span>图片新闻</span>
                <span>
                    <router-link to="">
                        <img src="../../.././assets/img/more.png" alt="">
                    </router-link>
                </span>
              </h3>
              <div>
                <li v-for="(item2,index) in tpxwList" :key="index">
                  <p @click = "imgClick(item2.ID)">
                      <img :src="isImg(item2.img)" alt="" style="cursor: pointer">
                  </p>
                </li>
              </div>

            </ul>
        </div>
        <div class="indexHome4All-3" style="display: none">
          <LabelCloud></LabelCloud>
        </div>
      </div>
    </div>
</template>

<script>
   import LabelCloud from './LabelCloud'
    export default {
        name: "IndexHome4",
        data(){
          return{
              zrwzList:[],
              tpxwList:[],
              id:null
          }
        },
        components: {
          LabelCloud:LabelCloud
        },
        mounted:function(){
            this.getDate();
        },
        methods:{
            getDate:function () {
                if(this.$store.state.home.home == null){
                    this.getDate2();
                }else {
                    this.zrwzList = this.$store.state.home.home.zrwz
                    this.tpxwList = this.$store.state.home.home.tpxw
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl)
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.zrwzList = res.data.data.IndexData.zrwz
                            _that.tpxwList =  res.data.data.IndexData.tpxw
                        }
                    }).catch(function(error){

                })
            },
            //判断图片地址是否含有http://www.shisc.net  或者 http://www.sh-isc.net
            isImg:function(address){
                const link1 = "http://www.shisc.com"
                const link2 = "http://www.sh-isc.com"
                const link3 =  "http://www.shisc.net"
                const link4 =  "http://www.sh-isc.net"
                if(address.indexOf(link1) >= 0 || address.indexOf(link2) >= 0 || address.indexOf(link3) >= 0 || address.indexOf(link4) >= 0){
                    return address;
                }else if(address.indexOf("/p/") >= 0 && address.indexOf("http://www") == -1) {
                    return  link2 + address;
                }else {
                    return  link1 + address;
                }
            },
            //最新文章的点击项
            articleClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            },
            //图片新闻的点击项
            imgClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        },

    }
</script>

<style  lang = scss scoped>
  .indexHome4{
    .indexHome4All{
      overflow: hidden;
      .indexHome4All-1{
        width: 50%;
        float: left;
        ul{
          width: 92%;
          margin: 0 auto;
          h3{
            font-size: 18px;
            color: #2258c2;
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            overflow: hidden;
          }
          li{
            overflow: hidden;
            padding: 8px 0;
            .post_i{
              font-size: 14px;
              float: left;
              margin-right: 20px;
            }
            .addActive{
                color: #ff8a00 !important;
            }
            a{
              float: left;
              color: #333;
              font-size: 14px;
              max-width: 400px;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              span{
                color: #a2a2a2;
                font-size: 12px;
              }
             }

          }
        }

      }
      .indexHome4All-2{
        width: 25%;
        float: left;
        ul{
          h3{
            overflow: hidden;
            font-size: 18px;
            color: #2258c2;
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            span:nth-child(1){
              float: left;
            }
            span:nth-child(2){
              float: right;
            }
          }
          div{
            overflow: hidden;
            li{
              width: 50%;
              float: left;
              padding:2px 0;
              p{
                width: 95%;
                min-height: 64px;
                margin: 0 auto;
                img{
                  width: 100%;
                  height: 60px;
                }
              }

            }
          }
        }
      }
      .indexHome4All-3{
        width: 25%;
        float: left;
      }
    }
  }
</style>
