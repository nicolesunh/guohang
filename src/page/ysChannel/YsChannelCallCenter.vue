<template>
  <div class="ysChannelCallCenter">
    <YsChannelNav :parentToChild="addActive"></YsChannelNav>
    <div class="ysChannelCallCenterAll">
         中心
    </div>
    <YsChannelFooter :parentToChild="isShow"></YsChannelFooter>
  </div>
</template>

<script>
  import YsChannelNav from "../.././components/YsChannelCommon/YsChannelNav"
  import YsChannelFooter from "../.././components/YsChannelCommon/YsChannelFooter"
  export default {
    name: "YsChannelCallCenter",
    data(){
      return{
        addActive:"YsChannelCallCenter",
        isShow:"YsChannelCallCenter"
      }
    },
    components: {
      YsChannelNav:YsChannelNav,
      YsChannelFooter:YsChannelFooter

    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style  lang = scss scoped>
  .ysChannelCallCenter{
    width: 100%;
    background: #ffffff;
    .ysChannelCallCenterAll{
      width: 1170px;
      margin: 0 auto;
      min-height: 820px;
      background: #ffffff;
    }
  }
</style>
