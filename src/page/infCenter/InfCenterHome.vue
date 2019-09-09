<template>
    <div>
      <HeadTitle></HeadTitle>
      <HeadSearch :parentToChild="showImg"></HeadSearch>
      <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
      <div class="infCenterHome">
        <div class="infCenterHome-C">
          <InfCenterHome1></InfCenterHome1>
          <InfCenterHome2></InfCenterHome2>
          <InfCenterHome3></InfCenterHome3>
        </div>
      </div>
      <HeadFooter></HeadFooter>
    </div>
</template>

<script>
    import axios from "axios"
    import HeadTitle from "../.././components/HomeCommon/HeadTitle"
    import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
    import HeadSearch from "../.././components/HomeCommon/HeadSearch"
    import HeadFooter from "../.././components/HomeCommon/HeadFooter"

    import InfCenterHome1 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome1"
    import InfCenterHome2 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome2"
    import InfCenterHome3 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome3"
    export default {
        name: "InfCenterHome",
        data() {
            return {
                showImg: "InfCenterHome",
                addClass: "InfCenterHome",
            }
        },
        components: {
            HeadTitle: HeadTitle,
            HeadSearch: HeadSearch,
            InfCenterNav: InfCenterNav,
            HeadFooter: HeadFooter,
            InfCenterHome1: InfCenterHome1,
            InfCenterHome2: InfCenterHome2,
            InfCenterHome3: InfCenterHome3
        },
        created: function () {
            this.getDate();
        },
        methods: {
            getDate: function () {
                var _that = this
                axios.post(serviceUrl + "zxzx")
                    .then(function (res) {
                        if (res.data.code == 200) {
                            _that.$store.commit('setInfCenterHome',res.data.data);
                        }
                    }).catch(function (error) {

                })
            },

        }
    }
</script>

<style lang = scss scoped>
  .infCenterHome{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterHome-C{
      padding: 40px 20px;
      padding-top: 15px;
    }
  }
</style>
