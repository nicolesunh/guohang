<template>
    <div class="HyAdmin">
        <div class="HyAdmin-l" :class="{addClass1:isCollapse == true}" id="HyAdmin-l-id">
            <NavLeft></NavLeft>
        </div>
        <div class="HyAdmin-r"  :class="{addClass2:isCollapse == true}">
            <HeaderTop></HeaderTop>
            <div>
                1111
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop"
    import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft"
    export default {
        name: "HyAdmin",
        data(){
            return{
                isCollapse:false,
                screenWidth: document.body.clientWidth
            }
        },
        components:{
            HeaderTop:HeaderTop,
            NavLeft:NavLeft
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
    .HyAdmin{
        overflow: hidden;
        background-color: #ecf0f5;
        z-index: 800;
        min-height: 100vh;

        .HyAdmin-l{
            float: left;
            width: 12%;

        }
        .addClass1{
            width: 7%;
        }
        .HyAdmin-r{
            float: left;
            width: 88%;
        }
        .addClass2{
            width: 93%;
        }
    }
</style>