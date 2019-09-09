<template>
    <div>
        <HeadTitle></HeadTitle>
        <HeadSearch :parentToChild="showImg"></HeadSearch>
        <OnlineAppNav></OnlineAppNav>
        <div class="yyDetail">
            <Breadcrumb></Breadcrumb>
            <div class="yyDetail-bd">
                <!--头部-->
                <div class="yyDetail-bd-top">
                    <div class="yyDetail-bd-top-l">
                        <div class="yyDetail-bd-top-all-l">
                            <img :src="checkImg(logo)" alt="">
                        </div>
                        <div class="yyDetail-bd-top-all-r">
                            <h3>
                                {{title}}
                            </h3>
                            <p style="margin-top: 10px">
                                <span>
                                    <img src="../../assets/img/tag.png" alt="">
                                </span>
                                <span>{{tag}}</span>
                                <span><img src="../../assets/img/line2.png" alt=""></span>
                                <span>运营单位：{{title2}}</span>
                                <span><img src="../../assets/img/shangbiao.png" alt=""  style="vertical-align: sub"></span>
                            </p>
                        </div>
                    </div>
                    <div class="yyDetail-bd-top-r">
                     <a :href="linkUrl" target="_blank" style="color: #FFFFFF">
                         <el-button type="success" style="width: 70%;margin: 0 auto">
                             进入应用
                         </el-button>
                     </a>
                    </div>
                </div>
                <!--中间部分-->
                <div class="yyDetail-bd-center">

                </div>
                <!--tabs-->
                <div class="yyDetail-bd-tabs" style="display: none">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="应用介绍" name="first">

                        </el-tab-pane>
                        <el-tab-pane label="资费介绍" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="开户指南" name="third">

                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="yyDetail-bd-icon" style="display: none">
                    <ul>
                        <li>
                            <span><img src="../../assets/img/eye.png" alt=""></span>
                            <span>543</span>
                            <span><img src="../../assets/img/line2.png" alt=""></span>
                        </li>
                        <li>
                            <span><img src="../../assets/img/tag.png" alt=""></span>
                            <span>一单两报</span>
                            <span><img src="../../assets/img/line2.png" alt=""></span>
                            <span>运营单位：{{title2}}</span>
                        </li>
                        <li>
                            <span><img src="../../assets/img/shoucang.png" alt=""></span>
                            <span>收藏夹</span>
                            <span><img src="../../assets/img/line2.png" alt=""></span>
                        </li>
                        <li>
                            <span><img src="../../assets/img/fuzhi.png" alt=""></span>
                            <span>复制网址</span>
                            <span><img src="../../assets/img/line2.png" alt=""></span>
                        </li>
                        <li>
                            <span><router-link to=""><img src="../../assets/img/weixin2.png" alt=""></router-link></span>
                            <span><router-link to=""><img src="../../assets/img/weibo.png" alt=""></router-link></span>
                            <span><router-link to=""><img src="../../assets/img/qq.png" alt=""></router-link></span>
                            <span><router-link to=""><img src="../../assets/img/renren.png" alt=""></router-link></span>
                            <span><router-link to=""><img src="../../assets/img/douban.png" alt=""></router-link></span>
                        </li>
                    </ul>
                </div>
                <!--相关应用-->
                <div class="yyDetail-bd-yy">
                    <h3>
                        <span>最新应用</span>
                        <span>
                            <router-link to="/onlineApplication/onlineAppEntCation">
                                <img src="../../assets/img/more.png" alt="">
                            </router-link>
                        </span>
                    </h3>
                    <div class="yyDetail-bd-yy-bd">
                        <ul>
                            <li v-for="(item1,index) in dataList2" :key="index">
                                <div class="li-l">
                                    <img  :src="checkImg(item1.img)" alt="" @click="Click1(item1.ID)">
                                </div>
                                <div class="li-r"  @click="Click1(item1.ID)">
                                    {{item1.post_title}}
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <HeadFooter></HeadFooter>
    </div>
</template>

<script>
    import HeadTitle from "../.././components/HomeCommon/HeadTitle"
    import OnlineAppNav from "../.././components/OnlineApplicationCommon/OnlineAppNav"
    import HeadSearch from "../.././components/HomeCommon/HeadSearch"
    import HeadFooter from "../.././components/HomeCommon/HeadFooter"
    import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
    import axios from "axios"
    import {isImg} from '@/common/common.js';
    export default {
        name: "yyDetail",
        data(){
            return{
                showImg:"OnlineAppInfSearch",
                activeName: 'first',
                dataList:[],
                titleAll:{},
                title:"",
                logo:"",
                title2:"",
                linkUrl:"",
                tag:"",
                dataList2:[],
                //detail值
                pramValue:null,
                id:null
            }
        },
        components: {
            HeadTitle:HeadTitle,
            HeadSearch:HeadSearch,
            OnlineAppNav:OnlineAppNav,
            HeadFooter:HeadFooter,
            Breadcrumb:Breadcrumb,

        },
        created:function () {
            this.getDate()
        },
        mounted(){

        },
        computed: {
            getSearchKey(){
                return this.$store.state.online.yyDetailId
            }
        },
        watch:{
            getSearchKey: {
                handler(newValue,oldValue){  //当词条改变时执行事件
                    this.pramValue = newValue
                    if(oldValue ==  this.$store.state.online.yyDetailId){
                        this.pramValue = oldValue
                        // console.log("oldValue:"+this.pramValue)
                        // this.getDate();
                    }else {
                        this.pramValue = newValue
                        // console.log("newValue:"+this.pramValue)
                        this.getDate();
                    }
                }
            },
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //判断图片地址是否含有
            checkImg(val){
                return isImg(val);
            },
            getDate:function(){
                var _that  = this
                _that.pramValue = _that.$store.state.online.yyDetailId
                axios.get(serviceUrl + 'yy_detail'+ '/' + _that.pramValue)
                    .then(function(res){
                        if(res.data.code == 200){
                            _that.dataList = JSON.parse(res.data.data);
                            _that.titleAll =  _that.dataList.data[0]
                            _that.title =  _that.dataList.data[0].post_title
                            _that.title2 =  _that.dataList.data[0].app_dw
                            _that.linkUrl =  _that.dataList.data[0].app_frame
                            _that.logo  =  _that.dataList.data[0].logo
                            _that.tag  =  _that.dataList.tag
                            _that.dataList2 =  _that.dataList.sim_data

                        }
                    }).catch(function(error){
                })
            },
            Click1:function (ID) {
                this.id = ID
                this.$store.commit('setOnlineDetailId',this.id);
                this.$router.push({
                    path: '/yy_detail',
                    name:'yyDetail',

                })
            }
        }
    }
</script>

<style lang = scss scoped>
    .yyDetail{
        width: 1060px;
        margin: 0 auto;
        min-height: 620px;
        background: #ffffff;
    .yyDetail-bd{
        padding: 40px 60px;
        padding-top: 15px;
        overflow: hidden;
        .yyDetail-bd-top{
            overflow: hidden;
            .yyDetail-bd-top-l{
                float: left;
                width: 65%;
                overflow: hidden;
                .yyDetail-bd-top-all-l{
                    float: left;
                    width: 20%;
                    img{
                        width: 60px;
                        height: 60px;
                    }
                }
                .yyDetail-bd-top-all-r{
                    float: right;
                    width: 80%;
                    h3{
                        font-size: 18px;
                    }
                    span{
                        padding: 0 3px;
                    }
                    span:nth-child(4){
                        color:#a2a2a2;
                        font-size: 12px;
                    }
                }
            }
            .yyDetail-bd-top-r{
                float: right;
                width: 35%;
            }

        }
        .yyDetail-bd-center{
            border: 1px solid #eeeeee;
            min-height: 100px;
        }
        .yyDetail-bd-tabs{
            min-height: 150px;
            /deep/
            .el-tabs__item{
                font-size: 17px;
            }
            /deep/
            .el-tabs__item:hover{
                color: #2258c2 !important;
            }
            /deep/
            .el-tabs__item.is-active{
                color: #2258c2 !important;
            }
            /deep/
            .el-tabs__active-bar{
                background: #2258c2 !important;
            }
        }
        .yyDetail-bd-icon{
            ul{
                overflow: hidden;
                padding: 10px 0;
                border-bottom:1px solid #dddddd;
                li{
                    float: left;
                    span:nth-child(1){

                    }
                    span:nth-child(2){
                        color:#a2a2a2;
                        font-size: 12px;
                        padding: 0 3px;
                    }
                    span:nth-child(3){
                        color:#a2a2a2;
                        font-size: 12px;
                        padding: 0 3px;
                        padding-right: 15px;
                    }
                }
                li:nth-child(2){
                    span:nth-child(4){
                        padding: 0 10px;
                        color:#a2a2a2;
                        font-size: 12px;
                    }
                }
                li:nth-child(3){
                    padding-left: 260px;
                    span:nth-child(3){
                        padding: 0 10px;
                    }
                }
                li:nth-child(4){
                    span:nth-child(1){
                        img{
                            vertical-align: middle;
                        }
                    }
                    span:nth-child(3){
                        padding-left: 25px;
                    }
                }
                li:last-child{
                    float: right;
                    span{
                        padding: 0 3px;
                        a{
                            img{
                                width: 17px;
                                height: 16px;
                            }
                        }
                    }
                }
            }
        }
        .yyDetail-bd-yy{
            h3{
                width:100%;
                font-size: 18px;
                color: #2258c2;
                padding: 10px 0;
                overflow: hidden;
                span:nth-child(1){
                    float: left;
                }
                span:nth-child(2){
                    float: right;
                }
            }
            .yyDetail-bd-yy-bd{
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        width: 25%;
                        overflow: hidden;
                        padding: 10px 0;
                        .li-l{
                            float: left;
                            width: 30%;
                            img{
                                width: 60px;
                                height: 60px;
                                cursor: pointer;
                            }
                        }
                        .li-r{
                            float: right;
                            width: 70%;
                            font-size: 14px;
                            font-weight: normal;
                            color: #000000;
                            cursor: pointer;

                        }
                    }
                }
            }
        }

     }
 }
</style>