<template>
  <div class="Abloid">
    <ul>
      <h3>
        <span><router-link to="" >图片新闻</router-link></span>
        <span><router-link to="" ><img src="../../.././assets/img/more.png" alt=""></router-link></span>
      </h3>
      <li v-for="(item,index) in imgDataList" :key="index">
         <h3 @click="imgDataClick(item.ID)">{{item.post_title}}</h3>
         <p class="li-img" @click="imgDataClick(item.ID)" >
             <img :src="item.img" alt="">
         </p>
         <p class="li-span" style="display: none">
            <span><img src="../../.././assets/img/eye.png" alt=""></span>
            <span>{{}}</span>
            <span><img src="../../.././assets/img/line2.png" alt=""></span>
            <span><img src="../../../assets/img/tag.png" alt=""></span>
         </p>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "Abloid",
    data(){
        return{
            imgDataList:[],
            id:null
        }
    },
    created:function () {
      this.getDate();
    },
    methods:{
      getDate:function () {
          this.imgDataList = this.$store.state.infcenter.imgDataList
      },
      imgDataClick:function (ID) {
          this.id = ID
          this.$store.commit('setDetailId',this.id);
          this.$router.push('/detail/' + ID)
      }
    }
  }
</script>

<style lang = scss scoped>
  .Abloid{
    ul{
      h3{
        text-align: left;
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;
        margin-bottom: 20px;
        padding-bottom: 5px;
        overflow: hidden;
        span:nth-child(1){
          float: left;
          a{
            font-size: 18px;
            color: #2258c2;
          }
        }
        span:nth-child(2){
          float: right;
          a{
            img{
              margin-top: 5px;
            }
          }
        }

      }
      li{
        margin-bottom: 15px;
        color: #2258c2;
        h3{
           font-size: 18px;
           color: #000000;
          cursor: pointer;
        }
        .li-img{
            img{
              width: 218px;
              height: 120px;
              cursor: pointer;
            }
        }
        .li-span{
          span{
            padding: 0 5px;
          }
          span:nth-child(2){
            font-size:12px;
            color: #a2a2a2;
            padding-left: 2px;
          }
          span:nth-child(3){
            padding: 0 8px;
          }
        }
      }
    }
  }
</style>
