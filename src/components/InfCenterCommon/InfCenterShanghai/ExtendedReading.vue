<template>
      <div class="ExtendedReading">
          <h3>延伸阅读</h3>
          <ul>
              <li v-for="(item,index) in similarList" :key="index" @click="similarClick(item.ID)">
                {{item.post_title}}
               <span>{{item.post_date}}</span>
             </li>
          </ul>
      </div>
</template>

<script>
    export default {
        name: "ExtendedReading",
        data(){
            return{
                similarList:[],
                id:null
            }
        },
        created:function () {
           this.getDate();
        },
        methods:{
            getDate:function () {
                this.similarList = this.$store.state.infcenter.similarList
            },
            similarClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        }
    }
</script>

<style lang = scss scoped>
  .ExtendedReading{
     width: 95%;
     margin: 0 auto;
      margin-top: 10px;
     h3{
       font-size: 18px;
       color: #2258c2;
       text-align: left;
     }
    ul{
      li{
        padding: 10px 0;
        font-size: 15px;
        color: #5a5a5a;
        height: 21px;
        line-height: 21px;
        cursor: pointer;
        span{
          font-size: 12px;
          color: #a2a2a2;
          margin-left: 20px;
        }
      }
    }
  }
</style>
