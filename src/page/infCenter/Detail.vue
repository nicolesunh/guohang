<template>
    <div>
        <HeadTitle></HeadTitle>
        <HeadSearch :parentToChild="showImg"></HeadSearch>
        <InfCenterNav></InfCenterNav>
        <div class="Detail">
            <Breadcrumb></Breadcrumb>
            <div class="Detail-bd">
                <div class="Detail-bd-l">
                    <DetailList></DetailList>
                    <ExtendedReading></ExtendedReading>
                </div>
                <div class="Detail-bd-r">
                    <Abloid></Abloid>
                    <NewArticle></NewArticle>
                    <div style="display: none">
                        <WeeklyRanking :parentToChild="viewShow"></WeeklyRanking>
                    </div>
                    <LabelCloud></LabelCloud>
                </div>
            </div>
        </div>
        <HeadFooter></HeadFooter>
    </div>
</template>

<script>
    import HeadTitle from "../.././components/HomeCommon/HeadTitle"
    import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
    import HeadSearch from "../.././components/HomeCommon/HeadSearch"
    import HeadFooter from "../.././components/HomeCommon/HeadFooter"
    import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
    import DetailList from "../.././components/InfCenterCommon/InfCenterDetail/DetailList"
    import ExtendedReading from "../.././components/InfCenterCommon/InfCenterShanghai/ExtendedReading"
    import LabelCloud from "../.././components/HomeCommon/IndexHome/LabelCloud"
    import NewArticle from "../.././components/InfCenterCommon/InfCenterShanghai/NewArticle"
    import Abloid from "../.././components/InfCenterCommon/InfCenterShanghai/Abloid"
    import WeeklyRanking from "../.././components/ShipMarketCommon/WeeklyRanking"
    export default {
        name: "Detail",
        data(){
            return{
                showImg:"InfCenterDocumentAttached",
                viewShow:"InfCenterDocumentAttached"
            }
        },
        components: {
            HeadTitle:HeadTitle,
            HeadSearch:HeadSearch,
            InfCenterNav:InfCenterNav,
            HeadFooter:HeadFooter,
            Breadcrumb:Breadcrumb,
            DetailList:DetailList,
            ExtendedReading:ExtendedReading,
            LabelCloud:LabelCloud,
            Abloid :Abloid,
            NewArticle:NewArticle,
            WeeklyRanking:WeeklyRanking
        },
        created:function(){

        } ,
        methods:{

        }
    }
</script>

<style lang = scss scoped>
    .Detail{
        width: 1060px;
        margin: 0 auto;
        min-height: 620px;
        background: #ffffff;
        overflow: hidden;
        .Detail-bd{
            padding: 40px 60px;
            padding-top: 15px;
            overflow: hidden;
            .Detail-bd-l{
                width: 75%;
                float: left;
            }
            .Detail-bd-r{
                float: right;
                width: 25%;
            }
        }
    }
</style>
