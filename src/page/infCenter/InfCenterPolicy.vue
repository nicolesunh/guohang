<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
    <div class="infCenterPolicy">
      政策
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  export default {
    name: "InfCenterPolicy",
    data(){
      return{
        showImg:"InfCenterPolicy",
        addClass:"InfCenterPolicy"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      InfCenterNav:InfCenterNav,
      HeadFooter:HeadFooter
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .infCenterPolicy{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    padding-top: 15px;
  }
</style>
