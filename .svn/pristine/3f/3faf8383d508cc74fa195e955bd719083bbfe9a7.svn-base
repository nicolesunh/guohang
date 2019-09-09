<template>
     <div class="ShippingDevHome2">
       <h3 class="ShippingDevHome2-title">
         <span>建设动态</span>
         <span>
             <router-link to="/shippingDevelopment/shippingDevDynamics" >
                <img src="../../.././assets/img/more.png" alt="">
             </router-link>
         </span>
       </h3>
       <div class="block">
         <el-timeline>
           <el-timeline-item
             v-for="(activity, index) in newjsdtList"
             :key="index"
             :icon="activity.icon"
             :color="activity.color"
           >
             <span style="padding-right: 20px">{{activity.post_date }}</span>
             <span @click="jsdtClick(activity.ID)" style="cursor: pointer">{{activity.post_excerpt}}</span>
           </el-timeline-item>
         </el-timeline>
       </div>
     </div>
</template>

<script>
    export default {
        name: "ShippingDevHome2",
        data(){
            return{
              reverse: true,
              jsdtList:[],
              newjsdtList:[],
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
                    this.jsdtList = this.$store.state.shoppingDevelopment.shippingDevHomeList.jsdt.data
                    this.jsdtList.forEach(item =>{
                        this.newjsdtList.push({
                            "icon":"el-icon-pie-chart",
                            "ID":item.ID,
                            "post_date":item.post_date,
                            "post_modified":item.post_modified,
                            "post_excerpt":item.post_excerpt,
                            "color":"#4074C0"
                        })
                    });
                }
            },
            getDate2:function () {
                var _that  = this
                _that.$axios.post(serviceUrl  + "hyfz_index")
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.jsdtList = JSON.parse(res.data.data).jsdt.data
                            _that.jsdtList.forEach(item =>{
                                _that.newjsdtList.push({
                                    "icon":"el-icon-pie-chart",
                                    "ID":item.ID,
                                    "post_date":item.post_date,
                                    "post_modified":item.post_modified,
                                    "post_excerpt":item.post_excerpt,
                                    "color":"#4074C0"
                                })
                            });

                        }
                    }).catch(function(error){

                })
            },
            //建设动态
            jsdtClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        },
    }
</script>

<style lang = scss scoped>
  .ShippingDevHome2{
    .ShippingDevHome2-title{
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
    .block{
      margin: 20px 0;
      padding-left: 15px;
    }
    /deep/
    .el-timeline-item__node--normal{
      width: 15px;
      height: 15px;
    }
    /deep/
    .el-timeline-item__wrapper{
      top:-1px;
    }
  }
</style>
