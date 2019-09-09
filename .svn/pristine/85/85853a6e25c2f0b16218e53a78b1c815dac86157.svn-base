<template>
    <div class="handlingGuide">
        <HeadTitle></HeadTitle>
        <HeadSearch :parentToChild="showImg"></HeadSearch>
        <HeadNav :parentToChild="addClass"></HeadNav>
        <!--办事指南-->
        <div class="handlingGuideAll">
            <div class="handlingGuideAll-bd">
                <div class="searchBar" id="searchBar">
                    <ul :class="searchBarFixed == true ? 'isFixed' :''">
                        <div class="searchBar-top"></div>
                        <div class="searchBar-bd">
                            <div class="searchBar-bd-item">
                                <li><a   href="#mao1" >上海市交通委</a></li>
                                <li><a   href="#mao5" >上海市人民政府外事办</a></li>
                                <li><a   href="#mao9" >上海市工商管理局</a></li>
                                <li><a   href="#mao13">上海海关</a></li>
                                <li><a   href="#mao17">上海铁路局</a></li>
                                <li><a   href="#mao17">上海电子口岸办</a></li>

                            </div>
                            <div class="searchBar-bd-item">
                                <li><a  href="#mao2" >上海市城市交通运输管理处</a></li>
                                <li><a  href="#mao6" >上海市财政局</a></li>
                                <li><a  href="#mao10" >上海市人力资源和社会保障局</a></li>
                                <li><a  href="#mao14">上海出入境检验检疫局</a></li>
                                <li><a  href="#mao17">中国民用航空华东管理局</a></li>
                                <li><a  href="#mao17">上海自贸区</a></li>
                            </div>
                            <div class="searchBar-bd-item">
                                <li><a href="#mao3" >上海市地方海事局</a></li>
                                <li><a href="#mao7" >上海市国税局</a></li>
                                <li><a href="#mao11">上海市旅游局</a></li>
                                <li><a href="#mao15">上海出入境边防检查总站</a></li>
                                <li><a href="#mao17">上海机场集团</a></li>
                                <li>
                                    <router-link to="" style="color:#2258c2">
                                        <ScrollToTop></ScrollToTop>
                                    </router-link>
                                </li>
                            </div>
                            <div class="searchBar-bd-item">
                                <li><a  href="#mao4" >上海市商务委</a></li>
                                <li><a  href="#mao7" >上海市地税局</a></li>
                                <li><a  href="#mao12">上海市公安局出入境管理局</a></li>
                                <li><a  href="#mao16">上海海事局</a></li>
                                <li><a  href="#mao17">上海引航站</a></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <HandlingGuideList></HandlingGuideList>
            </div>
        </div>
        <HeadFooter></HeadFooter>
    </div>
</template>

<script>
    import HeadTitle from "../.././components/HomeCommon/HeadTitle"
    import HeadSearch from "../.././components/HomeCommon/HeadSearch"
    import HeadNav from "../.././components/HomeCommon/HeadNav"
    import HeadFooter from "../.././components/HomeCommon/HeadFooter"
    import HandlingGuideList from "../.././components/HandlingGuideCommon/HandlingGuideList"
    import ScrollToTop from "../.././components/HandlingGuideCommon/ScrollToTop"
    export default {
        name: "HandlingGuide",
        data(){
            return{
                showImg:"HandlingGuide",
                addClass:"HandlingGuide",
                searchBarFixed:false,
                scrollTop:null,
                offsetTop:null
            }
        },
        components: {
            HeadTitle:HeadTitle,
            HeadSearch:HeadSearch,
            HeadNav:HeadNav,
            HeadFooter:HeadFooter,
            HandlingGuideList:HandlingGuideList,
            ScrollToTop:ScrollToTop
        },
        created:function () {

        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll () {
                // this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // this.offsetTop = document.querySelector('#searchBar').offsetTop
                // this.scrollTop > this.offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > 49) {
                  this.searchBarFixed = true
                } else {
                  this.searchBarFixed = false
                }
                },

        }
    }
</script>

<style  lang = scss scoped>
    .handlingGuideAll{
        width: 1060px;
        margin: 0 auto;
        min-height: 1150px;
        background: #ffffff;
        .handlingGuideAll-bd{
            padding: 40px 60px;
            padding-top: 15px;
            .searchBar{
                .isFixed{
                    position:fixed;
                    width: 940px;
                    margin: 0 auto;
                    background-color:#Fff;
                    top:0;
                    z-index:999;
                }
                ul {
                    width: 100%;
                    min-height: 250px;
                    line-height: 40px;
                    border: 1px solid #ddd;
                    .searchBar-top{
                        width: 100%;
                        height: 50px;
                        background-color: #9a9a9a;
                    }
                    .searchBar-bd{
                        overflow: hidden;
                        .searchBar-bd-item{
                            float: left;
                            width: 25%;
                            li{
                                padding-left: 35px;
                                a{
                                    font-size: 12px;
                                    font-weight: bold;
                                    color: #000000;
                                    text-align: left;
                                }
                                a:hover{
                                    color: #2258c2;
                                }
                            }
                        }

                    }
                }
            }
        }
    }
</style>
