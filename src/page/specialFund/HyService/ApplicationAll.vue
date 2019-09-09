<template>
    <div class="ApplicationAll">
        <div class="ApplicationAll-l" :class="{addClass1:isCollapse == true}" id="FinalList-l-id">
            <NavLeft></NavLeft>
        </div>
        <div class="ApplicationAll-r"  :class="{addClass2:isCollapse == true}">
            <HeaderTop></HeaderTop>
            <div>
                <AllApplicationsList2></AllApplicationsList2>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop"
    import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft"
    import AllApplicationsList2 from "../../../components/SpecialFundCommon/HyService/AllApplicationsList2"
    export default {
        name: "ApplicationAll",
        data(){
            return{
                isCollapse:false,
                screenWidth: document.body.clientWidth
            }
        },
        components:{
            HeaderTop:HeaderTop,
            NavLeft:NavLeft,
            AllApplicationsList2
        },
        created:function(){

        },

        computed: {
            getSearchKey(){
                return this.$store.state.common.collapse
            }
        },
        watch: {
            getSearchKey: {
                handler(newValue){  //当词条改变时执行事件
                    this.isCollapse = newValue
                }
            },

        },
    }
</script>

<style  lang = scss scoped>
    .ApplicationAll{
        overflow: hidden;
        background-color: #ecf0f5;
        z-index: 800;
        min-height: 100vh;

        .ApplicationAll-l{
            float: left;
            width: 12%;

        }
        .addClass1{
            width: 7%;
        }
        .ApplicationAll-r{
            float: left;
            width: 88%;
        }
        .addClass2{
            width: 93%;
        }
    }
</style>