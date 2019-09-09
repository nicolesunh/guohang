<template>
  <div class="newArticle">
    <ul>
      <h3>最新文章</h3>
      <li v-for="(item,index) in newArticleList" :key="index" @click="newArticleClick(item.ID)">
         <p>{{item.post_title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "NewArticle",
        data(){
          return{
              newArticleList:[],
              id:null
          }
        },
        created:function(){
            this.getArticleList();
        },
        methods:{
            getArticleList(){
                this.newArticleList = this.$store.state.infcenter.newArticle
            },
            //最新文章
            newArticleClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        }
    }
</script>

<style lang = scss scoped>
  .newArticle{
    ul{
      h3{
        text-align: left;
        font-size: 18px;
        color: #2258c2;
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;
        margin-bottom: 20px;
        padding-bottom: 5px;
      }
      li{
        margin-bottom: 15px;
        list-style-type: disc;
        color: #2258c2;
        margin-left: 15px;
        cursor: pointer;
        p{
          color: #5a5a5a;
        }
      }
    }
  }
</style>
