<template>
  <div class="searchAll">
      <HeadTitle></HeadTitle>
      <HeadSearch :parentToChild="showImg"></HeadSearch>
      <div class="search-list" >
         <p class="left-bd">相关搜索结果：共 <span style="color: red">{{totalCount}}</span>条,仅显示前30条</p>
         <ul class="">
              <li v-for="(item2,index) in dateList" :key="index"  @click="ss_downClick(item2._source.id)">
                 <span class="li-bd" v-html="item2.highlight.post_title[0]"></span>
                 <span style="margin-left: 25px;font-size: 13px;color:#2258c2">{{checkFormat(item2._source.post_date)}}</span>
              </li>
          </ul>
      </div>
      <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import axios from "axios"
  import qs from 'qs'
  import HeadTitle from ".././components/HomeCommon/HeadTitle"
  import HeadSearch from ".././components/HomeCommon/HeadSearch"
  import HeadFooter from ".././components/HomeCommon/HeadFooter"
  import {mapState} from 'vuex'
  import {timeFormat} from '@/common/common.js';
  export default {
    name: 'Search',
    data(){
      return{
        input:"",
        label:"",
        showImg:"IndexHome",
        dateList:[],
        key_word:null,
        totalCount:0,

        
      }
    },
    computed:{
        ...mapState({
          searchtext: state => state.home.searchtext,
        }),

    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      HeadFooter:HeadFooter,
    },
    mounted() {

    },
    methods:{
          searchKey() {
                let _that  = this;
                axios.post(serviceUrl + 'search_list',
                  qs.stringify(
                    {
                     'key_word':this.searchtext.searchtext,
                    }
                  ) 
                ).then(function(res){
                        if(res.data.code == 200){
                            _that.dateList = res.data.data.hits.hits;
                            _that.totalCount = res.data.data.hits.total.value;
                        }
                    }).catch(function(error){
                })
            },
          checkFormat(val){
                return timeFormat(val);
          },
          ss_downClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                // this.$router.push({
                //     path: '/detail',
                //     name:'Detail',
                // })
                this.$router.push('/detail/' + ID)
            },
        },
    watch: {
        searchtext:{
              handler:function(newval,oldVal){
                  this.searchKey();
              },
              immediate:true,
              deep:true
           }
        }
    }
</script>
<style lang = scss scoped>
    .searchAll{
        width: 100%;
        .search-list{
            width: 1060px;
            margin: 0 auto;
            background: #ffffff;
            overflow: hidden;
            min-height: 500px;
            .left-bd{
                padding-left: 15px;

            }
            ul{
                li{
                    padding: 5px 5px 5px 65px;
                    :hover{
                        color: #4074C0;
                    }
                    .li-bd{
                        font-size: 14px;
                        color: black;
                        margin-bottom: 10px;
                        font-weight: 400;
                        cursor: pointer;
                        /deep/
                        mark{
                            background: none !important;
                            color: red !important;
                        }

                    }
                }
            }
        }
    }
</style>
